import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message } from "antd";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';

const PlayerForm = ({  onClose }) => {
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [isEditImage, setIsEditImage] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    dateOfBirth: "",
    email: "",
    roles: ["ROLE_PLAYER"], 
    battingStyle: "",
    bowlingStyle: "",
    playerRole: "",
    username: "",
    password: "",
    membership: {
      startDate:"",
      endDate:"",
    },
    contactNo: ""
  });

  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setFormData({
        ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value
        }
      });
    }else if (files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setFormData({
        ...formData,
        [name]: file
      });
      setIsImageAdded(true);
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
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
          playerData 
        );
        console.log("Form submitted succedded: ", response.data);
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
            startDate:"",
            endDate:"",
          },
          contactNo: ""
        });
        setImagePreview();
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        console.error("Error submitting form:", error);
        message.error("Failed!");
      }
    
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
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <div >
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
          <div>
            <label className="block text-black text-sm  font-semibold">DOB</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <label className="block text-black text-sm  font-semibold">Contact No</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-black text-sm  font-semibold">Batting Style</label>
            <select
              name="battingStyle"
              value={formData.battingStyle}
              onChange={handleChange}
              className=" py-1 px-3 border border-gray-300 text-gray-600 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value='' disabled>
                Select
              </option>
              <option value="Left-hand batting">Left-hand batting</option>
              <option value="Right-hand batting">Right-hand batting</option>
            </select>
          </div>
          <div>
            <label className="block text-black text-sm  font-semibold">Bowling Style</label>
            <select
              name="bowlingStyle"
              value={formData.bowlingStyle}
              onChange={handleChange}
              className=" px-3 py-1 border text-gray-600 border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value='' disabled>
                Select
              </option>
              <option value="Left-arm spin">Left-arm spin</option>
              <option value="Right-arm spin">Right-arm spin</option>
            </select>
          </div>
          <div>
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
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-rounder">All-rounder</option>
            </select>
          </div>
          <div>
            <label className="block text-black text-sm  font-semibold">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"

            >
              <option value='' selected disabled>
                Select
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div>
            <label className="block text-black text-sm  font-semibold">
              Membership Starting Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
            <label className="block  text-black text-sm  font-semibold">
              Membership Ending Date
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div className="col-span-2 ">
            <label className="block text-black text-sm font-semibold">Image</label>
            <input
              id="image"
              type="file" 
              name="image" 
              accept="image/*" 
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            />
            {imagePreview &&
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-1 w-20 h-20 rounded-full object-cover border border-gray-300"
              />}
          </div>
          <div className="flex justify-end col-span-2">
            <button
              type="submit"
              className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayerForm;




