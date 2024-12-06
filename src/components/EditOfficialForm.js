import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message } from "antd";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';

const EditOfficialForm = ({ official, onClose, isSubmitted }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({ 
    user:{
      username: official.username,
      email: official.email,
      password: official.password,
    },
    name: official.name,
    contactNo: official.contactNo,
    position: official.position,
    updatedBy:user.username,
    updatedOn: new Date().toISOString(),
   });
  const [imagePreview, setImagePreview] = useState(official.image);
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = e => {
    const { name, value } = e.target;
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
      setFormData({
        ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleEdit = async e => {
    e.preventDefault();
    if (!validateForm()) {
      message.error("Please fix validation errors before submitting");
      return;
    }
    setUploading(true);
      try {
        const response = await axios.put(
          `${API_URL}officials/update/${official.officialId}`,
          formData 
        );
        console.log("Form submitted succedded: ", response.data);
        message.success("Successfully updated!");
        setFormData({
          user:{
            username: official.username,
            email: official.email,
            password: official.password,
          },
          roles: ["ROLE_OFFICIAL"],
          name: "",
          contactNo: "",
          position: "",
          updatedBy:"",
          updatedOn:"",
        });
        setImagePreview();
        setUploading(false);
        isSubmitted();
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
    // Compare `formData` with `player` data for validation triggers
    const isDataModified = Object.keys(formData).some(key => {
      if (key === "user") {
        return Object.keys(formData[key]).some(subKey => formData[key][subKey] !== official[key + subKey]);
      }
      return formData[key] !== official[key];
    });
  
    if (!isDataModified) {
      return true; // No validation needed as no changes detected
    }

    //name validation
    if (formData.name.trim().length < 4 || formData.name.trim().length > 25) {
      newErrors.name = "Name must be between 4 and 25 characters long.";
    } else if (!/^[a-zA-Z\s.]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters, spaces, and periods.";
    } else if (/^\s|\s$/.test(formData.name)) {
      newErrors.name = "Name cannot start or end with a space.";
    }

     //username validatio
     if (formData.user.username !== official.username && formData.user.username.length < 4 || formData.user.username.length > 20) {
      newErrors.username = "Username must be between 4 and 20 characters.";
    } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.user.username)) {
      newErrors.username = "Username can only contain letters, numbers, underscores, and hyphens.";
    };
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.user.email !== official.email && !emailPattern.test(formData.user.email)) {
      newErrors.email = "Please enter a valid email address";
    }
  
    // Password validation
    const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (formData.user.password && formData.user.password !== official.password && !passwordPattern.test(formData.user.password)) {
      newErrors.password = "Password must be at least 8 characters long and include a special character";
    }
  
    // Contact number validation
    const sriLankaPattern = /^(?:\+94|0)7\d{8}$/;
    if (formData.contactNo !== official.contactNo && !sriLankaPattern.test(formData.contactNo)) {
      newErrors.contactNo = "Contact number must be in the format '+947XXXXXXXX' or '07XXXXXXXX'.";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };  


  return (
    <div className="fixed inset-0 overflow-y-auto py-10 min-h-screen bg-gray-600 bg-opacity-75">
      <div className=" flex items-center justify-center">
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} m-5 md:m-0 p-8 rounded-3xl shadow-lg max-w-md w-full relative`}>
        <div className="flex justify-end ">
          <button
            onClick={onClose}
            className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl text-[#480D35] font-bold mb-4">Edit Official Details</h2>
        <form
          onSubmit={handleEdit}
          className=" gap-3"
        >
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold">Name</label>
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
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold">Username</label>
            <input
              type="text"
              name="user.username"
              value={formData.user.username}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="username"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>
          <div className="mb-4">
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
          <div className="mb-4 relative">
            <label className="block text-black text-sm font-semibold">New Password</label>
            <input
              type={passwordVisible? "text": "password"}
              name="user.password"
              onChange={handleChange}
              className=" w-full px-3 py-1 relative border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="********"
            />
             <button
                type="button"
                onClick={()=>setPasswordVisible(!passwordVisible)}
                className="absolute top-7 right-3 text-gray-600"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="Teacher"
            />
          </div>
          <div className="flex justify-end mt-8 col-span-2">
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
      {uploading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
        )}
    </div>
  );
};

export default EditOfficialForm;