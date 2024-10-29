// import React, { useState, useEffect } from "react";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { message } from "antd";
// import { storage } from '../config/firebaseConfig'; // Import Firebase storage
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
// import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';

// const OfficialForm = ({  onClose }) => {
//   const [isImageAdded, setIsImageAdded] = useState(false);
//   const [isEditImage, setIsEditImage] = useState(false);
//   const API_URL = process.env.REACT_APP_API_URL;
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     roles: ["ROLE_OFFICIAL"],
//     name: "",
//     contactNo: "",
//     position: ""
//   });

//   const [uploading, setUploading] = useState(false);
//   const [imagePreview, setImagePreview] = useState("");

//   const handleChange = e => {
//     const { name, value} = e.target;
//       setFormData({
//         ...formData,
//         [name]: value
//       });
    
//   };

//   const handleSubmit = async e => {
//     console.log("data: ", formData);
//     e.preventDefault();
//       try {
//         const response = await axios.post(
//           `${API_URL}auth/signupOfficial`,
//           formData 
//         );
//         console.log("Form submitted succedded: ", response.data);
//         message.success("Successfull!");
//         setFormData({
//           username: "",
//           email: "",
//           password: "",
//           roles: ["ROLE_OFFICIAL"],
//           name: "",
//           contactNo: "",
//           position: ""
//         });
//         // setTimeout(() => {
//         //   window.location.reload();
//         // }, 1500);
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         message.error("Failed!");
//       }
    
//   };

//   return (
//     <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-70">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
//         <div className="flex justify-end ">
//           <button
//             onClick={onClose}
//             className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
//             aria-label="Close"
//           >
//             <FaTimes />
//           </button>
//         </div>
//         <h2 className="text-xl text-[#480D35] font-bold mb-4">Add Official Details</h2>
//         <form
//           onSubmit={handleSubmit}
//           className="gap-3"
//         >
//           <div className="mb-4">
//             <label className="block text-black text-sm font-semibold">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required 
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black text-sm font-semibold">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//               placeholder="@username"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black text-sm font-semibold">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//               placeholder="you@example.com"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black text-sm font-semibold">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//               placeholder="********"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black text-sm font-semibold">Contact No</label>
//             <input
//               type="text"
//               name="contactNo"
//               value={formData.contactNo}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="+1 (555) 123-4567"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black text-sm font-semibold">Position</label>
//             <input
//               type="text"
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//               placeholder="Teacher"
//             />
//           </div>
//           <div className="flex mt-8 justify-end col-span-2 ">
//             <button
//               type="submit"
//               className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OfficialForm;


import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message } from "antd";

import ball from "./../assets/images/CricketBall-unscreen.gif";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';


const OfficialForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    roles: ["ROLE_OFFICIAL"],
    name: "",
    contactNo: "",
    position: ""
  });
  const [errors, setErrors] = useState({});
  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contactNo") {
      // Ensure only numbers or "+" are entered in contactNo
      if (/^\+?\d*$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long and include a special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          position: ""
        });
        setUploading(false);
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
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} p-8 rounded-lg shadow-lg max-w-md w-full relative`}>
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
              required
            />
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
              placeholder="@username"
            />
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
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
              placeholder="********"
              onBlur={() => {
                if (!/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(formData.password)) {
                  setErrors({
                    ...errors,
                    password: "Password must be at least 8 characters long and include a special character",
                  });
                } else {
                  setErrors({ ...errors, password: "" });
                }
              }}
            />
            <p className="text-gray-500 text-sm mt-1">
              Password must be at least 8 characters long and include a special character.
            </p>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold">Contact No</label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="+1 (555) 123-4567"
              required
            />
            {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>}
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
      {uploading && (
        <div className="absolute items-center justify-center my-4">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
        )}
    </div>
  );
};

export default OfficialForm;
