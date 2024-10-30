// src/components/EditPlayerForm.jsx

import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message } from "antd";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';


const EditPlayerForm = ({ player, onClose }) => {
  console.log("player data: ",player);
  const [formData, setFormData] = useState({ 
    image: player.image,
    name: player.name,
    dateOfBirth: player.dateOfBirth,
    roles: ["ROLE_PLAYER"], 
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
    contactNo: player.contactNo });
  const [imagePreview, setImagePreview] = useState(player.image);
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const API_URL = process.env.REACT_APP_API_URL;
  console.log("player to be edited: ", player);

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

  const validateForm = () => {
    const newErrors = {};
    
    // Compare `formData` with `player` data for validation triggers
    const isDataModified = Object.keys(formData).some(key => {
      if (key === "user" || key === "membership") {
        return Object.keys(formData[key]).some(subKey => formData[key][subKey] !== player[key + subKey]);
      }
      return formData[key] !== player[key];
    });
  
    if (!isDataModified) {
      return true; // No validation needed as no changes detected
    }

     //username validation
     if (formData.user.username !== player.username && formData.user.username.length < 4 || formData.user.username.length > 20) {
      newErrors.username = "Username must be between 4 and 20 characters.";
    } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.username)) {
      newErrors.username = "Username can only contain letters, numbers, underscores, and hyphens.";
    };
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.user.email !== player.email && !emailPattern.test(formData.user.email)) {
      newErrors.email = "Please enter a valid email address";
    }
  
    // Password validation
    const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (formData.user.password && formData.user.password !== player.password && !passwordPattern.test(formData.user.password)) {
      newErrors.password = "Password must be at least 8 characters long and include a special character";
    }
  
    // Contact number validation
    const sriLankaPattern = /^(?:\+94|0)7\d{8}$/;
    if (formData.contactNo !== player.contactNo && !sriLankaPattern.test(formData.contactNo)) {
      newErrors.contactNo = "Contact number must be in the format '+947XXXXXXXX' or '07XXXXXXXX'.";
    }
  
    // Date of birth validation
    const today = new Date();
    const selectedDate = new Date(formData.dateOfBirth);
    if (formData.dateOfBirth !== player.dateOfBirth && selectedDate >= today) {
      newErrors.dateOfBirth = "Date of birth must be in the past.";
    }
  
    // Membership dates validation
    if (formData.membership.startDate !== player.membershipStartDate || formData.membership.endDate !== player.membershipEndDate) {
      if (new Date(formData.membership.endDate) <= new Date(formData.membership.startDate)) {
        newErrors.membershipEndDate = "End date must be after start date.";
      }
    }
  
    // Image type validation
    if (isImageAdded && formData.image && !/^image\//.test(formData.image.type)) {
      newErrors.image = "Only image files are allowed.";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };  

  const handleEdit = async e => {
    e.preventDefault();
    console.log("editedPlayer: ", formData);
    if (!validateForm()) {
      message.error("Please fix validation errors before submitting");
      return;
    }
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
        const response = await axios.put(
          `${API_URL}admin/players/update/${player.playerId}`,
          playerData 
        );
        console.log("Form submitted succedded: ", response.data);
        message.success("Successfull!");
        setFormData({
          image: "",
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
          contactNo: ""
        });
        setImagePreview();
        setUploading(false);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        console.error("Error submitting form:", error);

        if (error.response && error.response.data && error.response.data.message) {
          message.error(`Failed to submit: ${error.response.data.message}`);
        } else {
          message.error("An unexpected error occurred. Please try again later.");
        }
      } finally {
        setUploading(false);
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

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-gray-600 bg-opacity-75">
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} p-8 md:rounded-lg shadow-lg max-w-xl w-full max-h-screen hover:overflow-auto overflow-hidden relative`}>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
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
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">DOB</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
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
              placeholder="@username"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
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
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">New Password</label>
            <input
              type="password"
              name="user.password"
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="********"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
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
              <option value="Left-hand batting">Left-hand batting</option>
              <option value="Right-hand batting">Right-hand batting</option>
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
              <option value='' disabled>
                Select
              </option>
              <option value="Left-arm spin">Left-arm spin</option>
              <option value="Right-arm spin">Right-arm spin</option>
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
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="All-rounder">All-rounder</option>
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
            <input
              type="date"
              name="membership.startDate"
              value={formData.membership.startDate}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
        
            />
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">
              Membership Ending Date
            </label>
            <input
              type="date"
              name="membership.endDate"
              value={formData.membership.endDate}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            
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
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
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

export default EditPlayerForm;
