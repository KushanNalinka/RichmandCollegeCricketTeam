import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { Flex, message } from "antd";

import ball from "./../assets/images/CricketBall-unscreen.gif";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';


const OfficialForm = ({ onClose, isSubmitted }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    roles: ["ROLE_OFFICIAL"],
    name: "",
    contactNo: "",
    position: "",
    createdOn: new Date().toISOString(),
    createdBy:user.username,
  });
  const [errors, setErrors] = useState({});
  const API_URL = process.env.REACT_APP_API_URL;
  const [uploading, setUploading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

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
       }
        break;
      
      case "password":
        // Password validation
        const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordPattern.test(value)) {
          newErrors.password = "Password must be at least 8 characters long and include a special character";
        };
        break;
      
      case "contactNo":
        const sriLankaPattern = /^(?:\+94|0)7\d{8}$/;
        if (!sriLankaPattern.test(value)) {
          newErrors.contactNo = "Contact number must be in the format '+947XXXXXXXX' or '07XXXXXXXX'.";
        };
        break;

        case "position":
          //position validation
          if (value.trim().length < 4 || value.trim().length > 25) {
            newErrors.position = "Name must be between 4 and 25 characters long.";
          } else if (!/^[a-zA-Z\s.]+$/.test(value)) {
            newErrors.position = "Name can only contain letters, spaces, and periods.";
          } else if (/^\s|\s$/.test(value)) {
            newErrors.position = "Name cannot start or end with a space.";
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
      const fieldErrors = validateForm(field, formData[field]);
      if (fieldErrors[field]) {
        errors[field] = fieldErrors[field];
      }
    });
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateFormData(formData);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      message.error("Please correct the highlighted errors.");
      console.log("Validation Errors:", errors);
      return;
    };
    setUploading(true);

      try {
        const response = await axios.post(
          `${API_URL}auth/signupOfficial`,
          formData 
        );
        console.log("Form submitted succedded: ", response.data);
        message.success("Successfull!");
        setFormData({
          username: "",
          email: "",
          password: "",
          roles: ["ROLE_OFFICIAL"],
          name: "",
          contactNo: "",
          position: "",
          createdBy:"",
          createdOn:""
        });
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

  return (

    <div className="fixed inset-0 overflow-y-auto py-10 min-h-screen bg-gray-600 bg-opacity-75">
      <div className="flex items-center justify-center">
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
        <h2 className="text-xl text-[#480D35] font-bold mb-4">Add Official Details</h2>
        <form onSubmit={handleSubmit} className="gap-3">
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
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
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
              required
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4 relative">
            <label className="block text-black text-sm font-semibold">Password</label>
            <input
              type={passwordVisible? "text": "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-1 border relative text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
              placeholder="********"
              // onBlur={() => {
              //   if (!/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(formData.password)) {
              //     setErrors({
              //       ...errors,
              //       password: "Password must be at least 8 characters long and include a special character",
              //     });
              //   } else {
              //     setErrors({ ...errors, password: "" });
              //   }
              // }}
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
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
              placeholder="Teacher"
            />
              {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
          </div>
          <div className="flex mt-8 justify-end col-span-2">
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

export default OfficialForm;
