import React, { useRef, useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message, DatePicker } from "antd";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';
import dayjs from 'dayjs';
import { GiClick } from "react-icons/gi";

const EditCoachForm = ({ coach, onClose, isSubmitted }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({ 
    status: coach.status,
    image: coach.image,
    name: coach.name,
    dateOfBirth: coach.dateOfBirth,
    address: coach.address,
    contactNo: coach.contactNo,
    description: coach.description,
    user:{

      email: coach.email,
      username: coach.username,
      password: coach.password,
    },
    updatedOn:new Date().toISOString(),
    updatedBy:user.username,
  });
  const [imagePreview, setImagePreview] = useState(`http://rcc.dockyardsoftware.com/images/${ coach.image ? coach.image.split('/').pop() : 'default.jpg'}`);
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showImageError, setShowImageError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

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
    } else if (files && files[0]) {
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

  const validateForm = (name, value) => {
    const newErrors = {};
    switch (name){
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
        };
        break;
      
      case "user.email":
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          newErrors["user.email"] = "Please enter a valid email address";
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
      case "description":  
        if (value.length > 100) {
          newErrors.description = "Description should be under 100 characters.";
        };
        break;

      case "image":
        console.log("Image validation:", value);
        if (!value) {
            newErrors.image = "Image is required.";
        } else if (value.type && !/^image\/(jpeg|png|gif|bmp|webp)$/.test(value.type)) {
            newErrors.image = "Only image files (JPEG, PNG, GIF, BMP, WebP) are allowed.";
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
      if (field === "membership") {
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
    console.log("edited1 coaches: ", formData);
    // if (!validateForm()) {
    //   message.error("Please fix validation errors before submitting");
    //   return;
    // };
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

      // const coachData = {
      //   ...formData,
      //   image: imageURL, // Assign the uploaded image URL to formData
      // };
      const formDataToSend = new FormData();
      const { image, ...userData } = formData;

      // Append userData as a JSON string
      formDataToSend.append("userData", JSON.stringify(userData));

      // Append image file
      formDataToSend.append("image", image);

      // console.log("edited coaches: ", coachData);
        const response = await axios.put(
          `${API_URL}coaches/${coach.coachId}`,
            formDataToSend 
        );
        console.log("Form submitted succedded: ", response.data);
        message.success("Successfully updated!");
        setFormData({
            status:"",
            image: "",
            name: "",
            dateOfBirth: "",
            address: "",
            contactNo: "",
            description: "",
            user:{

              email: "",
              username:"",
              Password:""
            },
            updatedOn:"",
            updatedBy:""
        });
        setImagePreview();
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

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `coaches/${file.name}`);
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
    <div className="fixed inset-0 overflow-y-auto py-10 min-h-screen bg-gray-600 bg-opacity-75">
      <div className=" flex items-center justify-center">
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
        <h2 className="text-xl text-[#480D35] font-bold mb-4">Edit Coach Details</h2>
        <form
          onSubmit={handleEdit}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 "
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
              className="w-full px-3 py-1 hover:border-gray-300 border text-black border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
          
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
            {errors["user.email"] && <p className="text-red-500 text-xs mt-1">{errors["user.email"]}</p>}
          </div>
          <div className="col-span-1 relative">
            <label className="block text-black text-sm font-semibold">New Password</label>
            <input
              type={passwordVisible? "text": "password"}
              name="user.password"
              onChange={handleChange}
              className="w-full px-3 py-1 border relative text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
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
            {errors["user.password"] && <p className="text-red-500 text-xs mt-1">{errors["user.password"]}</p>}
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
            <label className="block text-black text-sm font-semibold">Address</label>
            <input
            type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="123 Street Name, City, Country"
            />
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
                Select status
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-black text-sm font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="........."
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>
          <div className="col-span-1 md:col-span-2 relative">
            <label className="block text-black text-sm font-semibold">Image</label>
            {/* <input
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
                className="mt-2 w-20 h-20 rounded-full object-cover border border-gray-300"
              />} */}
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
          {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
          <div className="col-span-1 md:col-span-2">
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

export default EditCoachForm;