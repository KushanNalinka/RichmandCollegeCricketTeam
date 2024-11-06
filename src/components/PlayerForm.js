import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { DatePicker, message, Spin } from "antd";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';


const PlayerForm = ({  onClose, isSubmitted }) => {
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [isEditImage, setIsEditImage] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem('accessToken');


  const [formData, setFormData] = useState({
    image: "",
    name: "",
    dateOfBirth:"" ,
    email: "",
    roles: ["ROLE_PLAYER"], 
    battingStyle: "",
    bowlingStyle: "",
    playerRole: "",
    username: "",
    password: "",
    membership: {
      isMemberHolder:1,
      startDate:"",
      endDate:"",
    },
    contactNo: ""
  });

  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      if (name === "membership.startDate") {
        // Handle the DatePicker value change
        setFormData({
          ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
        }
        });
      }else if(name === "membership.endDate") {
        // Handle the DatePicker value change
        setFormData({
          ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
        }
        });
      }else{
        setFormData({
          ...formData,
          [mainKey]: {
            ...formData[mainKey],
            [subKey]: value
          }
        });
      }; 
    }else if (files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setFormData({
        ...formData,
        [name]: file
      });
    }else if (name === "dateOfBirth") {
      // Handle the DatePicker value change
      setFormData({
        ...formData,
        [name]: value ? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
      });
    }else {
      setFormData({
          ...formData,
          [name]: value
      });
    }
    
  };

  const handleSubmit = async e => {
    console.log("Form data before submit: ", formData);
    e.preventDefault();
    if (!validateForm()) {
      message.error("Please fix validation errors before submitting");
      return;
    };
    setUploading(true);
      try {
        let imageURL = formData.image;
      
      // Upload image if an image file is added
      if (formData.image instanceof File) {
        imageURL = await handleImageUpload(formData.image);
      }

      const playerData = {
        ...formData,
        image: imageURL, // Assign the uploaded image URL to formData
      };
        const response = await axios.post(
          `${API_URL}auth/signupPlayer`,
          playerData , { headers: {
            'Authorization': `Bearer ${accessToken}`
        }}
        );
        console.log("Form submitted succedded: ", response.data);
        console.log(accessToken);
        message.success("Successfull!");
        setFormData({
          image: "",
          name: "",
          dateOfBirth: "",
          email: "",
          battingStyle: "",
          bowlingStyle: "",
          playerRole: "",
          username: "",
          password: "",
          membership: {
            isMemberHolder:1,
            startDate:"",
            endDate:"",
          },
          contactNo: ""
        });
        isSubmitted();
        setImagePreview();
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1500);
      } catch (error) {
        console.error("Error submitting form:", error);

        if (error.response && error.response.data && error.response.data.message) {
          message.error(`Failed to submit: ${error.response.data.message}`);
        } else {
          message.error("An unexpected error occurred. Please try again later.");
        }
      } finally {
        setUploading(false);
        onClose();
      }
  };

  const validateForm = () => {
    const newErrors = {};

    //username validation
    if (formData.username.length < 4 || formData.username.length > 20) {
      newErrors.username = "Username must be between 4 and 20 characters.";
    } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.username)) {
      newErrors.username = "Username can only contain letters, numbers, underscores, and hyphens.";
    };

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    };

    // Password validation
    const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long and include a special character";
    };

    const sriLankaPattern = /^(?:\+94|0)7\d{8}$/;
    if (!sriLankaPattern.test(formData.contactNo)) {
      newErrors.contactNo = "Contact number must be in the format '+947XXXXXXXX' or '07XXXXXXXX'.";
    };
    
    const today = new Date();
    const selectedDate = new Date(formData.dateOfBirth);
    if (selectedDate >= today) {
      newErrors.dateOfBirth = "Date of birth must be in the past.";
    };

    if (formData.membership.startDate && new Date(formData.membership.endDate) <= new Date(formData.membership.startDate)) {
      newErrors.membershipEndDate = "End date must be after start date.";
    };

    if (!/^image\//.test(formData.image.type)) {
      newErrors.image = "Only image files are allowed.";
    };

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEditImageClick = () => {
    setIsEditImage(true);
  };
  const handleRemoveImage = () => {
    setImagePreview(null);
    setIsImageAdded(false);
    setIsEditImage(false);
  };

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `players/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      setUploading(true);

      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.error('Image upload failed:', error);
          setUploading(false);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploading(false);
            resolve(downloadURL);
          });
        }
      );
    });
  };

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-gray-600 bg-opacity-75">
      <div className={`bg-white  ${uploading? "opacity-80": "bg-opacity-100"} p-8 md:rounded-lg shadow-lg max-w-xl w-full max-h-screen hover:overflow-auto overflow-hidden relative`}>
        <div className="flex justify-end ">
          <button
            onClick={onClose}
            className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl text-[#480D35] font-bold mb-4">Add Player Details</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3"
        >
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required   
            />
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">DOB</label>
            <DatePicker
              name="dateOfBirth"
              dateFormat="yyyy-mm-dd"
              // selected={new Date(formData.dateOfBirth)}
              onChange={(date) => handleChange({ target: { name: 'dateOfBirth', value: date } })}
              placeholder="yyyy-mm-dd"
              className="w-full px-3 py-1 hover:border-gray-300 border text-gray-600 border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
              required
            />
            {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="@username"
              required
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="you@example.com"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
              placeholder="********"
              required
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">Contact No</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="+1 (555) 123-4567"
              required
            />
            {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">Batting Style</label>
            <select
              name="battingStyle"
              value={formData.battingStyle}
              onChange={handleChange}
              className=" py-1 px-3 border border-gray-300 text-gray-600 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value='' disabled>Select batting style </option>
              <option value="LHB">Left-hand batting</option>
              <option value="RHB">Right-hand batting</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">Bowling Style</label>
            <select
              name="bowlingStyle"
              value={formData.bowlingStyle}
              onChange={handleChange}
              className=" px-3 py-1 border text-gray-600 border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value='' disabled> Select bowling style</option>
              <option value="RAF">Right-arm fast</option>
              <option value="RAFM">Right-arm fast-medium</option>
              <option value="RAMF">Right-arm medium-fast</option>
              <option value="RAM">Right-arm medium</option>
              <option value="RAMS">Right-arm medium-slow</option>
              <option value="RASM">Right-arm slow-medium </option>
              <option value="RAS">Right-arm slow</option>
              <option value="RAL">Right-arm Leg</option>
              <option value="LAF">Left-arm fast</option>
              <option value="LAFM">Left-arm fast-medium</option>
              <option value="LAMF">Left-arm medium-fast</option>
              <option value="LAM">Left-arm medium</option>
              <option value="LAMS">Left-arm medium-slow</option>
              <option value="LASM">Left-arm slow-medium</option>
              <option value="LAL">Left-arm Leg</option>
              <option value="OB">Off break</option>
              <option value="LB">Leg break</option>
              <option value="LBG">Leg break googly</option>
              <option value="SLAO">Slow left-arm orthodox</option>
              <option value="SRAO">Slow Right-arm orthodox</option>
              <option value="OS">Off spin</option>
              <option value="SLAWS">Slow left-arm wrist spin</option>
              <option value="SRAWS">Slow Right-arm wrist spin</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">Role</label>
            <select
              name="playerRole"
              value={formData.playerRole}
              onChange={handleChange}
              className=" px-3 py-1 border text-gray-600 border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value='' disabled>
                Select
              </option>
              <option value="Bowler">Bowler</option>
              <option value="Batter">Batter</option>
              <option value="Top Order Batter">Top Order Batter</option>
              <option value="Wicketkeeper Batter">Wicketkeeper Batter</option>
              <option value="Allrounder">Allrounder</option>
              <option value="Bawlling Allrounder">Bawlling Allrounder</option>
              <option value="Batting Allrounder">Batting Allrounder</option>
            </select>
            
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value='' selected disabled>
                Select
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">
              Membership Starting Date
            </label>
            <DatePicker
              name="membership.startDate"
              dateFormat="yyyy-mm-dd"
              // selected={new Date(formData.membership.startDate)}
              onChange={(date) => handleChange({ target: { name: 'membership.startDate', value: date } })}
              placeholder="yyyy-mm-dd"
              className="w-full px-3 py-1 hover:border-gray-300 border text-black border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block  text-black text-sm  font-semibold">
              Membership Ending Date
            </label>
            <DatePicker
              name="membership.endDate"
              dateFormat="yyyy-mm-dd"
              // selected={new Date(formData.membership.endDate)}
              onChange={(date) => handleChange({ target: { name: 'membership.endDate', value: date } })}
              placeholder="yyyy-mm-dd"
              className="w-full px-3 py-1 hover:border-gray-300 border text-black border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
              required
            />
            {errors.membershipEndDate && <p className="text-red-500 text-xs mt-1">{errors.membershipEndDate}</p>}
          </div>
          <div className="col-span-1 md:col-span-2 ">
            <label className="block text-black text-sm font-semibold">Image</label>
            <input
              id="image"
              type="file" 
              name="image" 
              accept="image/*" 
              onChange={handleChange}
              required
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            />
            {imagePreview &&
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-1 w-20 h-20 rounded-full object-cover border border-gray-300"
              />}
             {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}  
          </div>
          <div className="flex justify-end col-span-1 md:col-span-2">
            <button
              type="submit"
              className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      {uploading && (
        <div className="absolute items-center justify-center my-4">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
        )}
    </div>
    
  );
};

export default PlayerForm;
