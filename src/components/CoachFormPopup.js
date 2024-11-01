
// import React, { useState, useEffect } from "react";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { message } from "antd";
// import { storage } from '../config/firebaseConfig'; // Import Firebase storage
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
// import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';

// const CoachForm = ({  onClose }) => {
//   const API_URL = process.env.REACT_APP_API_URL;
//   const [formData, setFormData] = useState({
//     image: "",
//     name: "",
//     dateOfBirth: "",
//     username:"",
//     password:"",
//     email: "",
//     address: "",
//     contactNo: "",
//     description: ""
//   });

//   const [imagePreview, setImagePreview] = useState("");

//   const handleChange = e => {
//     const { name, value, files } = e.target;
//     if (files && files[0]) {
//       const file = files[0];
//       setImagePreview(URL.createObjectURL(file));
//       setFormData({
//         ...formData,
//         [name]: file
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//       try {
//       let imageURL = formData.image;
      
//       // Upload image if an image file is added
//       if (formData.image instanceof File) {
//         imageURL = await handleImageUpload(formData.image);
//       }

//       const coachData = {
//         ...formData,
//         image: imageURL, // Assign the uploaded image URL to formData
//       };
//         const response = await axios.post(
//           `${API_URL}auth/signupCoach`,
//           coachData 
//         );
//         console.log("Form submitted succedded: ", response.data);
//         message.success("Successfull!");
//         setFormData({
//             image: "",
//             name: "",
//             dateOfBirth: "",
//             username:"",
//             password:"",
//             email: "",
//             address: "",
//             contactNo: "",
//             description: ""
//         });
//         setImagePreview();
//         setTimeout(() => {
//           window.location.reload();
//         }, 1500);
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         message.error("Failed!");
//       }
    
//   };
  

//   const handleImageUpload = (file) => {
//     return new Promise((resolve, reject) => {
//       const storageRef = ref(storage, `coaches/${file.name}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {},
//         (error) => {
//           console.error('Image upload failed:', error);
//           reject(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             resolve(downloadURL);
//           });
//         }
//       );
//     });
//   };


//   return (
//     <div className="fixed inset-0 flex  items-center justify-center bg-gray-600 bg-opacity-75">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
//         <div className="flex justify-end ">
//           <button
//             onClick={onClose}
//             className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
//             aria-label="Close"
//           >
//             <FaTimes />
//           </button>
//         </div>
//         <h2 className="text-xl text-[#480D35] font-bold mb-4">Add Coach Details</h2>
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-3"
//         >
//           <div >
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
//           <div>
//             <label className="block text-black text-sm font-semibold">DOB</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={formData.dateOfBirth}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             />
//           </div>
//           <div>
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
//           <div>
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
//           <div>
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
//           <div>
//             <label className="block text-black text-sm font-semibold">Contact No</label>
//             <input
//               type="text"
//               name="contactNo"
//               value={formData.contactNo}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="+1 (555) 123-4567"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-black text-sm font-semibold">Address</label>
//             <input
//             type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="123 Street Name, City, Country"
//             />
//           </div>
        
//           <div className="col-span-2">
//             <label className="block text-black text-sm font-semibold">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="........."
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-black text-sm font-semibold">Image</label>
//             <input
//               id="image"
//               type="file" 
//               name="image" 
//               accept="image/*" 
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//             />
//             {imagePreview &&
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="mt-2 w-20 h-20 rounded-full object-cover border border-gray-300"
//               />}
//           </div>
//           <div className="flex justify-end col-span-2 mt-4">
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

// export default CoachForm;


// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { message } from "antd";
// import { storage } from '../config/firebaseConfig';
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { FaCamera, FaEdit, FaTrash } from 'react-icons/fa';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns"; // For date formatting

// const CoachForm = ({ onClose }) => {
//   const API_URL = process.env.REACT_APP_API_URL;
//   const [formData, setFormData] = useState({
//     image: "",
//     name: "",
//     dateOfBirth: null, // Initialize with null for DatePicker
//     username: "",
//     password: "",
//     email: "",
//     address: "",
//     contactNo: "",
//     description: ""
//   });

//   const [imagePreview, setImagePreview] = useState("");

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files && files[0]) {
//       const file = files[0];
//       setImagePreview(URL.createObjectURL(file));
//       setFormData({
//         ...formData,
//         [name]: file
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   const handleDateChange = (date) => {
//     setFormData({
//       ...formData,
//       dateOfBirth: date ? format(date, "yyyy-MM-dd") : null // Format as YYYY-MM-DD
//     });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       let imageURL = formData.image;

//       // Upload image if an image file is added
//       if (formData.image instanceof File) {
//         imageURL = await handleImageUpload(formData.image);
//       }

//       const coachData = {
//         ...formData,
//         image: imageURL,
//         dateOfBirth: formData.dateOfBirth // Send the formatted date
//       };
//       const response = await axios.post(`${API_URL}auth/signupCoach`, coachData);
//       console.log("Form submitted successfully: ", response.data);
//       message.success("Successful!");
//       setFormData({
//         image: "",
//         name: "",
//         dateOfBirth: null,
//         username: "",
//         password: "",
//         email: "",
//         address: "",
//         contactNo: "",
//         description: ""
//       });
//       setImagePreview("");
//       setTimeout(() => {
//         window.location.reload();
//       }, 1500);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       message.error("Failed!");
//     }
//   };

//   const handleImageUpload = (file) => {
//     return new Promise((resolve, reject) => {
//       const storageRef = ref(storage, `coaches/${file.name}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {},
//         (error) => {
//           console.error('Image upload failed:', error);
//           reject(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             resolve(downloadURL);
//           });
//         }
//       );
//     });
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
//         <div className="flex justify-end">
//           <button
//             onClick={onClose}
//             className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
//             aria-label="Close"
//           >
//             <FaTimes />
//           </button>
//         </div>
//         <h2 className="text-xl text-[#480D35] font-bold mb-4">Add Coach Details</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
//           <div>
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
//           <div>
//             <label className="block text-black text-sm font-semibold">DOB</label>
//             <DatePicker
//               selected={formData.dateOfBirth ? new Date(formData.dateOfBirth) : null}
//               onChange={handleDateChange}
//               dateFormat="yyyy-MM-dd"
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholderText="YYYY-MM-DD"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-black text-sm font-semibold">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//               placeholder="@username"
//             />
//           </div>
//           <div>
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
//           <div>
//             <label className="block text-black text-sm font-semibold">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//               placeholder="********"
//             />
//           </div>
//           <div>
//             <label className="block text-black text-sm font-semibold">Contact No</label>
//             <input
//               type="text"
//               name="contactNo"
//               value={formData.contactNo}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="+1 (555) 123-4567"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-black text-sm font-semibold">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="123 Street Name, City, Country"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-black text-sm font-semibold">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="........."
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-black text-sm font-semibold">Image</label>
//             <input
//               id="image"
//               type="file" 
//               name="image" 
//               accept="image/*" 
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//             />
//             {imagePreview &&
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="mt-2 w-20 h-20 rounded-full object-cover border border-gray-300"
//               />}
//           </div>
//           <div className="flex justify-end col-span-2 mt-4">
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

// export default CoachForm;


import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message } from "antd";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';
import { setUserId } from "firebase/analytics";

const CoachForm = ({  onClose, isSubmitted }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    status:"",
    image: "",
    name: "",
    dateOfBirth: "",
    username:"",
    password:"",
    email: "",
    address: "",
    contactNo: "",
    description: ""
  });

  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setFormData({
        ...formData,
        [name]: file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    //username validation
    if (formData.username.length < 4 || formData.username.length > 20) {
      newErrors.username = "Username must be between 4 and 20 characters.";
    } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.username)) {
      newErrors.username = "Username can only contain letters, numbers, underscores, and hyphens.";
    };
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    };

    // Password validation
    const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long and include a special character";
    };

    const sriLankaPattern = /^(?:\+94|0)7\d{8}$/;
    if (!sriLankaPattern.test(formData.contactNo)) {
      newErrors.contactNo = "Contact number must be in the format '+947XXXXXXXX' or '07XXXXXXXX'.";
    };

    const today = new Date();
    const selectedDate = new Date(formData.dateOfBirth);
    if (selectedDate >= today) {
      newErrors.dateOfBirth = "Date of birth must be in the past.";
    };

    if (formData.description.length > 100) {
      newErrors.description = "Description should be under 100 characters.";
    };

    // if (!/^image\//.test(formData.image.type)) {
    //   newErrors.image = "Only image files are allowed.";
    // };

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) {
      message.error("Please fix validation errors before submitting");
      return;
    };
    setUploading(true);
    try {
    let imageURL = formData.image;
    
    // Upload image if an image file is added
    if (formData.image instanceof File) {
      imageURL = await handleImageUpload(formData.image);
    }

    const coachData = {
      ...formData,
      image: imageURL, // Assign the uploaded image URL to formData
    };
      const response = await axios.post(
        `${API_URL}auth/signupCoach`,
        coachData 
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfull!");
      setFormData({
          status:"",
          image: "",
          name: "",
          dateOfBirth: "",
          username:"",
          password:"",
          email: "",
          address: "",
          contactNo: "",
          description: ""
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
    }
    
  };

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `coaches/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.error('Image upload failed:', error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
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
        <h2 className="text-xl text-[#480D35] font-bold mb-4">Add Coach Details</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
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
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">DOB</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
             {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
              placeholder="@username"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>
          <div className="col-span-1">
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
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
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
              required
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
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm  font-semibold">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value='' selected disabled>
                Select
              </option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        
          <div className="md:col-span-2 col-span-1">
            <label className="block text-black text-sm font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="........."
              required
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>
          <div className="md:col-span-2 col-span-1">
            <label className="block text-black text-sm font-semibold">Image</label>
            <input
              id="image"
              type="file" 
              name="image" 
              accept="image/*" 
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              // required
            />
            {imagePreview &&
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-20 h-20 rounded-full object-cover border border-gray-300"
              />}
              {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
          </div>
          <div className="flex justify-end col-span-1 md:col-span-2 mt-4">
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

export default CoachForm;


// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { message } from "antd";
// import { storage } from '../config/firebaseConfig';
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { FaCamera, FaEdit, FaTrash } from 'react-icons/fa';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns"; // For date formatting

// const CoachForm = ({ onClose }) => {
//   const API_URL = process.env.REACT_APP_API_URL;
//   const [formData, setFormData] = useState({
//     image: "",
//     name: "",
//     dateOfBirth: null, // Initialize with null for DatePicker
//     username: "",
//     password: "",
//     email: "",
//     address: "",
//     contactNo: "",
//     description: ""
//   });

//   const [imagePreview, setImagePreview] = useState("");

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files && files[0]) {
//       const file = files[0];
//       setImagePreview(URL.createObjectURL(file));
//       setFormData({
//         ...formData,
//         [name]: file
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   const handleDateChange = (date) => {
//     setFormData({
//       ...formData,
//       dateOfBirth: date ? format(date, "yyyy-MM-dd") : null // Format as YYYY-MM-DD
//     });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       let imageURL = formData.image;

//       // Upload image if an image file is added
//       if (formData.image instanceof File) {
//         imageURL = await handleImageUpload(formData.image);
//       }

//       const coachData = {
//         ...formData,
//         image: imageURL,
//         dateOfBirth: formData.dateOfBirth // Send the formatted date
//       };
//       const response = await axios.post(`${API_URL}auth/signupCoach`, coachData);
//       console.log("Form submitted successfully: ", response.data);
//       message.success("Successful!");
//       setFormData({
//         image: "",
//         name: "",
//         dateOfBirth: null,
//         username: "",
//         password: "",
//         email: "",
//         address: "",
//         contactNo: "",
//         description: ""
//       });
//       setImagePreview("");
//       setTimeout(() => {
//         window.location.reload();
//       }, 1500);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       message.error("Failed!");
//     }
//   };

//   const handleImageUpload = (file) => {
//     return new Promise((resolve, reject) => {
//       const storageRef = ref(storage, `coaches/${file.name}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {},
//         (error) => {
//           console.error('Image upload failed:', error);
//           reject(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             resolve(downloadURL);
//           });
//         }
//       );
//     });
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
//         <div className="flex justify-end">
//           <button
//             onClick={onClose}
//             className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
//             aria-label="Close"
//           >
//             <FaTimes />
//           </button>
//         </div>
//         <h2 className="text-xl text-[#480D35] font-bold mb-4">Add Coach Details</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
//           <div>
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
//           <div>
//             <label className="block text-black text-sm font-semibold">DOB</label>
//             <DatePicker
//               selected={formData.dateOfBirth ? new Date(formData.dateOfBirth) : null}
//               onChange={handleDateChange}
//               dateFormat="yyyy-MM-dd"
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholderText="YYYY-MM-DD"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-black text-sm font-semibold">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//               placeholder="@username"
//             />
//           </div>
//           <div>
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
//           <div>
//             <label className="block text-black text-sm font-semibold">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//               placeholder="********"
//             />
//           </div>
//           <div>
//             <label className="block text-black text-sm font-semibold">Contact No</label>
//             <input
//               type="text"
//               name="contactNo"
//               value={formData.contactNo}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="+1 (555) 123-4567"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-black text-sm font-semibold">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="123 Street Name, City, Country"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-black text-sm font-semibold">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="........."
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-black text-sm font-semibold">Image</label>
//             <input
//               id="image"
//               type="file" 
//               name="image" 
//               accept="image/*" 
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//             />
//             {imagePreview &&
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="mt-2 w-20 h-20 rounded-full object-cover border border-gray-300"
//               />}
//           </div>
//           <div className="flex justify-end col-span-2 mt-4">
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

// export default CoachForm;
