// src/components/EditPlayerForm.jsx

import React, { useRef,useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message, DatePicker } from "antd";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import dayjs from 'dayjs';
import { FaCamera, FaEdit,FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';
import { GiClick } from "react-icons/gi";

const EditPlayerForm = ({ player, onClose, isSubmitted }) => {
  console.log("player data: ",player);
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({ 
    image: player.image,
    name: player.name,
    dateOfBirth:  player.dateOfBirth ? new Date(player.dateOfBirth) : null,
    role: ["ROLE_PLAYER"], 
    battingStyle: player.battingStyle,
    bowlingStyle: player.bowlingStyle,
    playerRole: player.playerRole,
    status:player.status,
    user:{
      username: player.username,
      password: "",
      email: player.email
    },
    membership: {
      isMemberHolder:1,
      startDate:player.membershipStartDate,
      endDate:player.membershipEndDate,
    },
    contactNo: player.contactNo,
    updatedBy:user.username,
    updatedOn: new Date().toISOString(),
   });
  const [imagePreview, setImagePreview] = useState(`http://rcc.dockyardsoftware.com/images/${ player.image ? player.image.split('/').pop() : 'default.jpg'}`);
  //const [imagePreview, setImagePreview] = useState(player.image);
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const API_URL = process.env.REACT_APP_API_URL;
  const dateFormat = 'YYYY/MM/DD';
  const [passwordVisible, setPasswordVisible] = useState(false);
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showImageError, setShowImageError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  console.log("player to be edited: ", player);
  console.log("foemdata DOB: ", formData.dateOfBirth);

  const handleChange = e => {
    const { name, value, files } = e.target;
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
    if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setErrors(prevErrors => ({
        ...prevErrors,
        [subKey]: ""
      }));
      if (name === "membership.startDate") {
        // Handle the DatePicker value change
        setFormData({
          ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
        }
        });
        const fieldError = validateForm(name, value?.format('YYYY-MM-DD'));
        setErrors((prevErrors) => ({
          ...prevErrors,
          ...fieldError,
      }));
      }else if(name === "membership.endDate") {
        // Handle the DatePicker value change
        setFormData({
          ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
        }
        });
        const fieldError = validateForm(name, value?.format('YYYY-MM-DD'));
        setErrors((prevErrors) => ({
          ...prevErrors,
          ...fieldError,
      }));
      }else{
        setFormData({
          ...formData,
          [mainKey]: {
            ...formData[mainKey],
            [subKey]: value
          }
        });
        if(name === "user.password"){
          if(!value){
            setShowPasswordError(true);
          }else{
            setShowPasswordError(false);
          }
        }
      };
      const fieldError = validateForm(name, value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          ...fieldError,
      }));
    }else if (files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setFormData({
        ...formData,
        [name]: file
      });
      const fieldError = validateForm(name, file); // Pass file to validation
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...fieldError,
      }));
      setIsImageAdded(true);
      setShowImageError(false);
    } else if (name === "dateOfBirth") {
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
    };

    const fieldError = validateForm(name, value);

    setErrors((prev) => {
      // If no error for this field, remove it from the errors object
      if (!fieldError[name]) {
        const { [name]: _, ...rest } = prev; // Exclude the current field's error
        return rest;
      }
      // Otherwise, update the error for this field
      return { ...prev, ...fieldError };
    });
  };

  const validateForm = (name, value) => {
    const newErrors = {};
    switch(name){
      case "name":
        //name validation
        if (value.trim().length < 4 || value.trim().length > 25) {
          newErrors.name = "Name must be between 4 and 25 characters long.";
        } else if (!/^[a-zA-Z\s.]+$/.test(value)) {
          newErrors.name = "Name can only contain letters, spaces, and periods.";
        } else if (/^\s|\s$/.test(value)) {
          newErrors.name = "Name cannot start or end with a space.";
        }
        break;
      case "user.username":  
        //username validation
        if (value.length < 4 || value.length > 20) {
          newErrors["user.username"] = "Username must be between 4 and 20 characters.";
        } else if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
          newErrors["user.username"] = "Username can only contain letters, numbers, underscores, and hyphens.";
        } else {
          // Debounced API call for username availability
          clearTimeout(window.usernameValidationTimeout);
          window.usernameValidationTimeout = setTimeout(async () => {
            try {
              const response = await axios.get(`${API_URL}auth/checkUsernameAvailability?username=${value}`);
              if ((value !== player.username) && response.data.usernameExists === true) {
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  "user.username": "This username is already taken.",
                }));
              } else {
                setErrors((prevErrors) => {
                  const { "user.username":_, ...rest } = prevErrors;
                  return rest;
                });
              }
            } catch (error) {
              console.error("Username validation error:", error);
            }
          }, 500); // Delay of 500ms
        };
        break;
      
      case "user.email":
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          newErrors["user.email"] = "Please enter a valid email address";
        } else {
          // Debounced API call for email availability
         clearTimeout(window.emailValidationTimeout);
         window.emailValidationTimeout = setTimeout(async () => {
           try {
             const response = await axios.get(`${API_URL}auth/checkEmailAvailability?email=${value}`);
             console.log("Email validation :", response.data);
             if ((value !== player.email) && response.data.emailExists === true) {
               setErrors((prevErrors) => ({
                 ...prevErrors,
                 ["user.email"]: "This email is already in use.",
               }));
             } else {
               setErrors((prevErrors) => {
                 const { "user.email":_, ...rest } = prevErrors;
                 return rest;
               });
             }
           } catch (error) {
             console.error("Email validation error:", error);
           }
         }, 500); // Delay of 500ms
       };
        break;
      
      case "user.password":
        // Password validation
        const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if(value && !passwordPattern.test(value)) {
          newErrors["user.password"] = "Password must be at least 8 characters long and include a special character";
        };
        break;
      
      case "contactNo":
        const sriLankaPattern = /^(?:\+94|0)7\d{8}$/;
        if (!sriLankaPattern.test(value)) {
          newErrors.contactNo = "Contact number must be in the format '+947XXXXXXXX' or '07XXXXXXXX'.";
        };
        break;
      case "dateOfBirth":
        const today = new Date();
        const selectedDate = new Date(value);
        if (selectedDate >= today) {
          newErrors.dateOfBirth = "Date of birth must be in the past.";
        };
        break;

      case "membership.startDate":
        if (!value) {
          newErrors["membership.startDate"] = "Start date is required.";
        } else if (formData.membership.endDate && new Date(value) >= new Date(formData.membership.endDate)) {
          newErrors["membership.startDate"] = "Start date must be before end date.";
        }
        break;
      
      case "membership.endDate":
        if (!value) {
          newErrors["membership.endDate"] = "End date is required.";
        } else if (formData.membership.startDate && new Date(value) <= new Date(formData.membership.startDate)) {
          newErrors["membership.endDate"] = "End date must be after start date.";
        }
        break;  

      case "image":
        console.log("Image validation:", value);
        if (!value) {
            newErrors.image = "Image is required.";
        } else if (value.type && !/^image\/(jpeg|png|gif|bmp|webp)$/.test(value.type)) {
            newErrors.image = "Only image files (JPEG, PNG, GIF, BMP, WebP) are allowed.";
        }
        break;
      default:
        break;  
    }  
    return newErrors;
  };

  const validateFormData = (formData) => {
    const errors = {};
    // Validate top-level fields
    Object.keys(formData).forEach((field) => {
      if (field === "membership") {
        const membershipErrors = validateForm("membership.startDate", formData.membership.startDate);
        const endDateErrors = validateForm("membership.endDate", formData.membership.endDate);
        Object.assign(errors, membershipErrors, endDateErrors);
      }else if(field === "user"){
        const usernameErrors = validateForm("user.username", formData.user.username);
        const emailErrors = validateForm("user.email", formData.user.email);
        const passwordErrors = validateForm("user.password", formData.user.password);
        Object.assign(errors, usernameErrors, passwordErrors, emailErrors);
      } else {
        const fieldErrors = validateForm(field, formData[field]);
        if (fieldErrors[field]) {
          errors[field] = fieldErrors[field];
        }
      };
    });
    return errors;
  };

  const handleEdit = async e => {
    e.preventDefault();
    console.log("editedPlayer: ", formData);

    const errors = validateFormData(formData);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      message.error("Please correct the highlighted errors.");
      console.log("Validation Errors:", errors);
      return;
    };

    setUploading(true);
      try {
      //   let imageURL = formData.image;

      // // Upload image if an image file is added
      // if (formData.image instanceof File) {
      //   imageURL = await handleImageUpload(formData.image);
      // }

      const formDataToSend = new FormData();
      const { image, role, ...userData } = formData;

      // Append userData as a JSON string
      formDataToSend.append("userData", JSON.stringify(userData));

      // Append image file
      formDataToSend.append("image", image);

       // Ensure role is sent as a single string
      formDataToSend.append("role", role[0]);

      // const playerData = {
      //   ...formData,
      //   image: imageURL, // Assign the uploaded image URL to formData
      // };
        const response = await axios.put(
          `${API_URL}admin/players/update/${player.playerId}`,
          formDataToSend 
        );
        const updatedPlayer = response.data;

        // Add a timestamp to the edited image URL
        updatedPlayer.image = `${updatedPlayer.image}?t=${new Date().getTime()}`;

        console.log("Form submitted succedded: ", response.data);
        message.success("Successfull!");
        setFormData({
          image: null,
          name: "",
          dateOfBirth: "",
          age: "",
          roles: ["ROLE_PLAYER"], 
          battingStyle: "",
          bowlingStyle: "",
          playerRole: "",
          status:player.status,
          user:{
            username: player.username,
            password: player.password,
            email: player.email
          },
          membership: {
            isMemberHolder:1,
            startDate:"",
            endDate:"",
          },
          contactNo: "",
          updatedOn:"",
          updatedBy:""
        });
        isSubmitted();
        setImagePreview();
        setUploading(false);
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
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1500);
      }
    
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      setFormData({
        ...formData,
        image: file
      });
      // Validate the image and update the errors state
      const fieldError = validateForm("image", file); // Pass the file directly for validation
      setErrors((prevErrors) => {
        const { image, ...restErrors } = prevErrors; // Remove existing `image` error
        return fieldError.image ? { ...restErrors, image: fieldError.image } : restErrors;
      });
      setIsImageAdded(true);
      setShowImageError(false);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setShowImageError(true);
  };
  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto py-10 min-h-screen">
      <div className="flex items-center justify-center">
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} p-8 m-5 rounded-3xl shadow-lg max-w-xl w-full relative`}>
        <div className="flex justify-end ">
          <button
            onClick={onClose}
            className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl text-[#480D35] font-bold mb-4">Edit Player Details</h2>
        <form
          onSubmit={handleEdit}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 p-1 "
        >
          <div className="col-span-1" >
            <label className="block text-black text-sm font-semibold ">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">DOB</label>
            <DatePicker
              name="dateOfBirth"
              dateFormat="yyyy-mm-dd"
              defaultValue={dayjs(formData.dateOfBirth)}
              onChange={(date) => handleChange({ target: { name: 'dateOfBirth', value: date } })}
              placeholder="yyyy-mm-dd"
              isClearable={false} 
              className="w-full px-3 py-1 hover:border-gray-300 border text-black border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
              required
            />
             {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Username</label>
            <input
              type="text"
              name="user.username"
              value={formData.user.username}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="username"
            />
            {errors["user.username"] && <p className="text-red-500 text-xs mt-1">{errors["user.username"]}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Email</label>
            <input
              type="email"
              name="user.email"
              value={formData.user.email}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="you@example.com"
            />
            {errors["user.email"]  && <p className="text-red-500 text-xs mt-1">{errors["user.email"]}</p>}
          </div>
          <div className="col-span-1 relative">
            <label className="block text-black text-sm font-semibold">New Password</label>
            <input
              type={passwordVisible? "text": "password"}
              name="user.password"
              onChange={handleChange}
              className=" w-full px-3 py-1 border relative text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="********"
            />
              <button
                type="button"
                onClick={()=>setPasswordVisible(!passwordVisible)}
                className="absolute top-7 right-3 text-gray-600"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
              {showPasswordError && (
                <p className="text-red-500 text-xs mt-1 col-span-2">
                  Change the password or else it will remain unchanged.
                </p>
              )}
            {errors["user.password"] && <p className="text-red-500 text-xs mt-1">{errors["user.password"] }</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Contact No</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="+1 (555) 123-4567"
            />
            {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Batting Style</label>
            <select
              name="battingStyle"
              value={formData.battingStyle}
              onChange={handleChange}
              className=" py-1 px-3 border border-gray-300 text-gray-600 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="+1 (555) 123-4567"
            >
              <option value='' disabled>
                Select
              </option>
              <option value="LHB">Left-hand batting</option>
              <option value="RHB">Right-hand batting</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Bowling Style</label>
            <select
              name="bowlingStyle"
              value={formData.bowlingStyle}
              onChange={handleChange}
              className=" px-3 py-1 border text-gray-600 border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              
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
              <option value='N/A'>Not applicable</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Role</label>
            <select
              name="playerRole"
              value={formData.playerRole}
              onChange={handleChange}
              className=" px-3 py-1 border text-gray-600 border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            
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
            <label className="block text-black text-sm font-semibold">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
          
            >
              <option value='' disabled >
                Select
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">
              Membership Starting Date
            </label>
            <DatePicker
              name="membership.startDate"
              dateFormat="yyyy-mm-dd"
              defaultValue={dayjs(formData.membership.startDate)}
              onChange={(date) => handleChange({ target: { name: 'membership.startDate', value: date } })}
              placeholder="yyyy-mm-dd"
              className="w-full px-3 py-1 hover:border-gray-300 border text-black border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
              required
              isClearable={false} 
            />
            {errors["membership.startDate"] && ( <p className="text-red-500 text-xs mt-1">{errors["membership.startDate"]}</p>)}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">
              Membership Ending Date
            </label>
            <DatePicker
              name="membership.endDate"
              dateFormat="yyyy-mm-dd"
              defaultValue={dayjs(formData.membership.endDate)}
              onChange={(date) => handleChange({ target: { name: 'membership.endDate', value: date } })}
              placeholder="yyyy-mm-dd"
              className="w-full px-3 py-1 hover:border-gray-300 border text-black border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
              required
              isClearable={false} 
            />
            {errors["membership.endDate"] && ( <p className="text-red-500 text-xs mt-1">{errors["membership.endDate"]}</p>)}
          </div>
          <div className="col-span-1 md:col-span-2 relative ">
            <label className="block text-black text-sm font-semibold">Image</label>
            {/* <input
              id="image"
              type="file" 
              name="image" 
              accept="image/*" 
              onChange={handleChange}
              placeholder="Change image"
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            />
            {imagePreview &&
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-1 w-20 h-20 rounded-full object-cover border border-gray-300"
              />}
              {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>} 
          </div> */}
          <div
            className={`w-full px-3 py-4 border rounded-md ${
              isDragging ? "border-[#00175f] bg-blue-50" : "border-gray-300"
            } flex flex-col items-center justify-center cursor-pointer`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className=" object-contain rounded-lg border border-gray-300"
              />
            ) : (
              <p className="text-gray-500 text-sm">
                {isDragging
                  ? "Drop the image here"
                  : <div className="flex">
                      Drag and drop an image, or&nbsp;<span className="flex flex-row items-center">
                        click here
                        <GiClick className="ml-1 text-lg" />
                      </span>&nbsp; to upload images
                    </div>}
              </p>
            )}
              <input
                ref={fileInputRef}
                id="image"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </div>
            {imagePreview && (
              <button
              title="Remove image"
                onClick={handleRemoveImage}
                className="absolute right-2 bottom-2 text-sm text-red-500"
              >
                <FaTrash/>
              </button>
            )}
          </div>
          {showImageError && (
            <p className="text-red-500 text-xs px-2 col-span-2">
              Upload a new image to replace the existing one, or it will remain unchanged.
            </p>
          )}
          {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}
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
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
        )}
      </div>
    </div>
  );
};

export default EditPlayerForm;
