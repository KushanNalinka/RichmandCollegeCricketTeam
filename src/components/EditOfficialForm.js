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
    const accessToken = localStorage.getItem('accessToken');
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
  const [showPasswordError, setShowPasswordError] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  console.log("access tocken in officials edit form :", user.accessToken);
  console.log("access tocken in officials edit form :", user.accessToken);

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
      if(name === "user.password"){
        if(!value){
          setShowPasswordError(true);
        }else{
          setShowPasswordError(false);
        }
      }
      const fieldError = validateForm(name, value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          ...fieldError,
      }));
    } else {
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

  const handleEdit = async e => {
    e.preventDefault();
    const syncErrors = validateFormData(formData);
    const asyncErrors = await validateAsyncFormData(formData);
    const errors = { ...syncErrors, ...asyncErrors };
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      message.error("Please correct the highlighted errors.");
      console.log("Validation Errors:", errors);
      return;
    }
    setUploading(true);
      try {
        const response = await axios.put(
          `${API_URL}officials/update/${official.officialId}`,
          formData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        }, });
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
        } 

        else {
          // Debounced API call for username availability
          clearTimeout(window.usernameValidationTimeout);
          window.usernameValidationTimeout = setTimeout(async () => {
            try {

              const response = await axios.get(`${API_URL}auth/checkUsernameAvailability?username=${value}`,{
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }, });
              if ((value !== official.username ) && response.data.usernameExists === true) {

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
        } 
        else {
          // Debounced API call for email availability
          clearTimeout(window.emailValidationTimeout);
          window.emailValidationTimeout = setTimeout(async () => {
            try {
              const response = await axios.get(`${API_URL}auth/checkEmailAvailability?email=${value}`,{
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }, });
              console.log("Email validation :", response.data);

              if ((value !== official.email ) && response.data.emailExists === true) {

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

        case "position":
        //name validation
        if (value.trim().length < 4 || value.trim().length > 25) {
          newErrors.position = "Position must be between 4 and 25 characters long.";
        } else if (!/^[a-zA-Z\s.]+$/.test(value)) {
          newErrors.position = "Position can only contain letters, spaces, and periods.";
        } else if (/^\s|\s$/.test(value)) {
          newErrors.position = "Position cannot start or end with a space.";
        };

      default:
        break;  
    }  
    return newErrors;
  };

  const validateFormData = (formData) => {
    const errors = {};
    // Validate top-level fields
    Object.keys(formData).forEach((field) => {
      if (field === "user") {
        const usernameErrors = validateForm("user.username", formData.user.username);
        const emailErrors = validateForm("user.email", formData.user.email);
        const passwordErrors = validateForm("user.password", formData.user.password);
        Object.assign(errors, usernameErrors, passwordErrors, emailErrors);
      } else {
        const fieldErrors = validateForm(field, formData[field]);
        if (fieldErrors[field]) {
          errors[field] = fieldErrors[field];
        }
      }
    });
    return errors;
  };

  const validateAsyncFormData = async (formData) => {
    const errors = {};

    // Check username availability
    if (formData.user.username) {
        try {
            const response = await axios.get(`${API_URL}auth/checkUsernameAvailability?username=${formData.user.username}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if ((formData.user.username !== official.username) && response.data.usernameExists === true) {
                errors["user.username"] = "This username is already taken.";
            }
        } catch (error) {
            console.error("Error validating username:", error);
        }
    }

    // Check email availability
    if (formData.user.email) {
        try {
            const response = await axios.get(`${API_URL}auth/checkEmailAvailability?email=${formData.user.email}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if ((formData.user.email !== official.email) && response.data.emailExists === true) {
                errors["user.email"] = "This email is already in use.";
            }
        } catch (error) {
            console.error("Error validating email:", error);
        }
    }

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
            {errors["user.username"] && <p className="text-red-500 text-xs mt-1">{errors["user.username"] }</p>}
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
          {errors["user.email"] && <p className="text-red-500 text-xs mt-1">{errors["user.email"] }</p>}
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
              {showPasswordError && (
                <p className="text-red-500 text-xs mt-1 col-span-2">
                  Change the password or else it will remain unchanged.
                </p>
              )}
            {errors["user.password"] && <p className="text-red-500 text-xs mt-1">{errors["user.password"] }</p>}
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
             {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
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