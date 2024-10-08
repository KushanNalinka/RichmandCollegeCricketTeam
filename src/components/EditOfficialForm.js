
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message } from "antd";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';

const EditOfficialForm = ({ official, onClose }) => {
  const [formData, setFormData] = useState({ ...official });
  const [imagePreview, setImagePreview] = useState(official.image);
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

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

  const handleEdit = async e => {
    e.preventDefault();
      try {
        let imageURL = formData.image;

      // Upload image if an image file is added
      if (formData.image instanceof File) {
        imageURL = await handleImageUpload(formData.image);
      }

      const officialData = {
        ...formData,
        image: imageURL, // Assign the uploaded image URL to formData
      };
        const response = await axios.put(
          `${API_URL}admin/official/update/${official.officialId}`,
          officialData 
        );
        console.log("Form submitted succedded: ", response.data);
        message.success("Successfull!");
        setFormData({
          image: "",
          name: "",
          dateOfBirth: "",
          age: "",
          email: "",
          role: "",
          username: "",
          password: "",
          contactNo: ""
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        console.error("Error submitting form:", error);
        message.error("Failed!");
      }
    
  };

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `officials/${file.name}`);
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
    <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-70">
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
        <h2 className="text-xl text-[#480D35] font-bold mb-4">Edit Official Details</h2>
        <form
          onSubmit={handleEdit}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <div >
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md"
              
            />
          </div>
          <div>
            <label className="block text-gray-700">DOB</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md"
              
            />
          </div>
          <div className="mb-1">
            <label className="block mb-1 text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
          
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md"
              
            />
          </div>
          <div className="mb-1">
            <label className="block mb-1 text-gray-700">New Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
              
            />
          </div>
          <div>
            <label className="block text-gray-700">Contact No</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md"
              
            />
          </div>
          <div className="mb-1">
            <label className="block mb-1 text-gray-700">Role</label>
            <select
              name="playerRole"
              value={formData.playerRole}
              onChange={handleChange}
              className=" px-3 py-1 border text-black border-gray-300 rounded-lg w-full"
            
            >
              <option value='' disabled>
                select
              </option>
              <option value="Batsman">Teacher</option>
              <option value="Bowler">Principle</option>
              <option value="All-rounder">Non-academic</option>
            </select>
          </div>
          <div className="col-span-2 hover:overflow-auto overflow-hidden h-20">
            <label className="block text-gray-700">Image</label>
            <input
              id="image"
              type="file" 
              name="image" 
              accept="image/*" 
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md"
            />
            {imagePreview &&
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 w-20 h-20 rounded-full object-cover border border-gray-300"
              />}
          </div>
          <div className="flex justify-end col-span-2">
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

export default EditOfficialForm;
