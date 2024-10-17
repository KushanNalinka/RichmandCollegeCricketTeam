import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message } from "antd";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';

const OfficialForm = ({  onClose }) => {
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [isEditImage, setIsEditImage] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    roles: ["ROLE_OFFICIAL"],
    name: "",
    contactNo: "",
    position: ""
  });

  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = e => {
    const { name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    
  };

  const handleSubmit = async e => {
    console.log("data: ", formData);
    e.preventDefault();
      try {
        const response = await axios.post(
          `http://localhost:5000/api/auth/signupOfficial`,
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
          position: ""
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        console.error("Error submitting form:", error);
        message.error("Failed!");
      }
    
  };

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
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
        <form
          onSubmit={handleSubmit}
          className="gap-3"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact No</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md"
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex mt-4 justify-end col-span-2">
            <button
              type="submit"
              className="bg-[#480D35] hover:bg-opacity-100 bg-opacity-95 text-white px-4 py-2 rounded-md w-full"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfficialForm;