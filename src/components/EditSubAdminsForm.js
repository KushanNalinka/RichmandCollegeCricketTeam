import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message } from "antd";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EditSubAdminsForm = ({ admin, onClose, isSubmitted }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({ 
    name:admin.name,
    contactNo:admin.contactNo,
    username: admin.username,
    email: admin.email,
    password: admin.password,
    roles: ["ROLE_ADMIN"],
    updatedOn: new Date().toISOString(),
   });
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const [editAdminId, setEditAdminId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
    setFormData({
      ...formData,
      [name]: value
    });
    if(name === "password"){
      if(!value){
        setShowPasswordError(true);
      }else{
        setShowPasswordError(false);
      }
    }

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

  const handleEdit = async e => {
    e.preventDefault();
    const errors = validateFormData(formData);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      message.error("Please correct the highlighted errors.");
      console.log("Validation Errors:", errors);
      return;
    }
    setUploading(true);
      try {
        const response = await axios.put(`${API_URL}admin/${admin.adminId}`,
          formData 
        );
        console.log("Form submitted succedded: ", response.data);
        message.success("Successfully updated!");
        setFormData({
          name:"",
          contactNo:"",
          username: "",
          email: "",
          password: "",
          roles: ["ROLE_ADMIN"],
          updatedOn: "",
        });
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

  const validateForm = (name, value) => {
    const newErrors = {};
    switch(name){
      case "username":  
        //username validation
        if (value.length < 4 || value.length > 20) {
          newErrors.username = "Username must be between 4 and 20 characters.";
        } else if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
          newErrors.username = "Username can only contain letters, numbers, underscores, and hyphens.";
        } else {
          // Debounced API call for username availability
          clearTimeout(window.usernameValidationTimeout);
          window.usernameValidationTimeout = setTimeout(async () => {
            try {
              const response = await axios.get(`${API_URL}auth/checkUsernameAvailability?username=${value}`);
              if (response.data.usernameExists === true) {
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  username: "This username is already taken.",
                }));
              } else {
                setErrors((prevErrors) => {
                  const { username, ...rest } = prevErrors;
                  return rest;
                });
              }
            } catch (error) {
              console.error("Username validation error:", error);
            }
          }, 500); // Delay of 500ms
        };
        break;
      
      case "email":
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          // Debounced API call for email availability
         clearTimeout(window.emailValidationTimeout);
         window.emailValidationTimeout = setTimeout(async () => {
           try {
             const response = await axios.get(`${API_URL}auth/checkEmailAvailability?email=${value}`);
             console.log("Email validation :", response.data);
             if (response.data.emailExists === true) {
               setErrors((prevErrors) => ({
                 ...prevErrors,
                 email: "This email is already in use.",
               }));
             } else {
               setErrors((prevErrors) => {
                 const { email, ...rest } = prevErrors;
                 return rest;
               });
             }
           } catch (error) {
             console.error("Email validation error:", error);
           }
         }, 500); // Delay of 500ms
       };
        break;
      
      case "password":
        // Password validation
        const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (value && !passwordPattern.test(value)) {
          newErrors.password = "Password must be at least 8 characters long and include a special character";
        };
        break;
      case "contactNo":
        const sriLankaPattern = /^(?:\+94|0)7\d{8}$/;
        if (!sriLankaPattern.test(value)) {
          newErrors.contactNo = "Contact number must be in the format '+947XXXXXXXX' or '07XXXXXXXX'.";
        };
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
      const fieldErrors = validateForm(field, formData[field]);
      if (fieldErrors[field]) {
        errors[field] = fieldErrors[field];
      }
    });
    return errors;
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
              placeholder="Jhon Doe"
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
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
              name="email"
              value={formData.email}
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
              name="password"
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
              {showPasswordError && (
                <p className="text-red-500 text-xs mt-1 col-span-2">
                  Change the password or else it will remain unchanged.
                </p>
              )}
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold">Contact No</label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="+947XXXXXXXX"
              required
            />
            {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo}</p>}
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

export default EditSubAdminsForm;