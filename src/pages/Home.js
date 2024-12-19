// const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && allowedFileTypes.includes(file.type)) {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         const img = new Image();
//         img.onload = () => {
//           const canvas = document.createElement("canvas");
//           const ctx = canvas.getContext("2d");
//           canvas.width = img.width;
//           canvas.height = img.height;
//           ctx.drawImage(img, 0, 0);

//           // Convert canvas to Blob in JPG format
//           canvas.toBlob(
//             (blob) => {
//               const newFile = new File([blob], `${file.name}.jpg`, {
//                 type: "image/jpeg",
//               });

//               // Now you can upload the newFile or perform any action with it
//               dispatch(uploadImage(newFile, nic, ""));
//             },
//             "image/jpeg",
//             1 // JPEG image quality (from 0 to 1)
//           );
//         };
//         img.src = e.target.result;
//       };

//       reader.readAsDataURL(file);
//     } else {
//       alert("Accept only '.jpg', '.jpeg', '.png' type images.");
//     }
//   };

//   const handleImageUpload = (file) => {
//     return new Promise((resolve, reject) => {
//       const formData = new FormData();
//       formData.append('file', file);
  
//       fetch('http://rcc.dockyardsoftware.com/upload', {
//         method: 'POST',
//         body: formData,
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`Server responded with status ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           if (data.fileUrl) {
//             resolve(data.fileUrl);
//           } else {
//             reject(new Error('File upload failed: No file URL returned'));
//           }
//         })
//         .catch((error) => {
//           console.error('Image upload failed:', error);
//           reject(error);
//         });
//     });
//   };
  
//   const handleSubmitPlayer = async (formData, file) => {
//     try {
//       // Step 1: Upload the image and get the URL
//       const imageUrl = await handleImageUpload(file);
  
//       // Step 2: Add the image URL to the player data
//       const playerData = {
//         ...formData,
//         image: imageUrl, // Attach the uploaded image URL
//       };
  
//       // Step 3: Submit player data to the backend
//       const response = await fetch('http://rcc.dockyardsoftware.com/api/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(playerData),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Failed to submit player: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log('Player added successfully:', data);
//       alert('Player added successfully!');
//     } catch (error) {
//       console.error('Error adding player:', error);
//       alert(`Error: ${error.message}`);
//     }
//   };
/////////////////////////////////////////////////////////////////////////////////////////


// import React, {useRef, useState, useEffect } from "react";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { DatePicker, message, Spin } from "antd";
// import ball from "./../assets/images/CricketBall-unscreen.gif";
// import { storage } from '../config/firebaseConfig'; // Import Firebase storage
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
// import { FaCamera, FaEdit,FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { GiClick } from "react-icons/gi";

// const PlayerForm = ({  onClose, isSubmitted }) => {
//   const [isImageAdded, setIsImageAdded] = useState(false);
//   const [isEditImage, setIsEditImage] = useState(false);
//   const API_URL = process.env.REACT_APP_API_URL;
//   const user = JSON.parse(localStorage.getItem("user"));
//   const accessToken = localStorage.getItem('accessToken');
//   const fileInputRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);

//   const [formData, setFormData] = useState({
//     image: null,
//     name: "",
//     dateOfBirth:"" ,
//     email: "",
//     role: ["ROLE_PLAYER"], 
//     battingStyle: "",
//     bowlingStyle: "",
//     playerRole: "",
//     username: "",
//     password: "",
//     membership: {
//       isMemberHolder:1,
//       startDate:"",
//       endDate:"",
//     },
//     contactNo: "",
//     createdBy: user.username,
//     createdOn: new Date().toISOString(),
//   });

//   const [errors, setErrors] = useState({});
//   const [uploading, setUploading] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleChange = e => {
//     const { name, value, files } = e.target;
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ""
//     }));
//     if (name.includes(".")) {
//       const [mainKey, subKey] = name.split(".");
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         [subKey]: ""
//       }));
//       if (name === "membership.startDate") {
//         // Handle the DatePicker value change
//         setFormData({
//           ...formData,
//         [mainKey]: {
//           ...formData[mainKey],
//           [subKey]: value? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
//         }
//         });
//       }else if(name === "membership.endDate") {
//         // Handle the DatePicker value change
//         setFormData({
//           ...formData,
//         [mainKey]: {
//           ...formData[mainKey],
//           [subKey]: value? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
//         }
//         });
//       }else{
//         setFormData({
//           ...formData,
//           [mainKey]: {
//             ...formData[mainKey],
//             [subKey]: value
//           }
//         });
//       }; 
//       const fieldError = validateForm(name, value?.format('YYYY-MM-DD'));
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           ...fieldError,
//       }));
//     }else if (files && files[0]) {
//       const file = files[0];
//       console.log("file in handleChange: ", file);
//       setImagePreview(URL.createObjectURL(file));
//       setFormData({
//         ...formData,
//         [name]: file
//       });
//       const fieldError = validateForm(name, file); // Pass file to validation
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         ...fieldError,
//       }));
//       console.log("file in formData image: ", formData.image);
      
//     }else if (name === "dateOfBirth") {
//       // Handle the DatePicker value change
//       setFormData({
//         ...formData,
//         [name]: value ? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
//       });
//     }else {
//       setFormData({
//           ...formData,
//           [name]: value
//       });
//     };

//     const fieldError = validateForm(name, value);

//     setErrors((prev) => {
//       // If no error for this field, remove it from the errors object
//       if (!fieldError[name]) {
//         const { [name]: _, ...rest } = prev; // Exclude the current field's error
//         return rest;
//       }
//       // Otherwise, update the error for this field
//       return { ...prev, ...fieldError };
//     });
    
//   };

//   const handleSubmit = async e => {
//     console.log("Form data before submit: ", formData);
//     e.preventDefault();
//     // if (!validateForm()) {
//     //   message.error("Please fix validation errors before submitting");
//     //   return;
//     // };

//     const errors = validateFormData(formData);
//     setErrors(errors);
//     if (Object.keys(errors).length > 0) {
//       message.error("Please correct the highlighted errors.");
//       console.log("Validation Errors:", errors);
//       return;
//     };
//     setUploading(true);
//       try {
        
//       // let imageURL = formData.image;
      
//       // // Upload image if an image file is added
//       // if (formData.image instanceof File) {
//       //   imageURL = await handleImageUpload(formData.image);
//       // }
      
//       const formDataToSend = new FormData();
//       const { image, ...userData } = formData;

//       // Append userData as a JSON string
//       formDataToSend.append("userData", JSON.stringify(userData));

//       // Append image file
//       formDataToSend.append("image", image);

//         const response = await axios.post(
//           `${API_URL}auth/signupPlayer`,
//           formDataToSend , { headers: {
//             'Authorization': `Bearer ${accessToken}`
//           }}
//         );
//         console.log("Form submitted succedded: ", response.data);
//         console.log(accessToken);
//         message.success("Successfull!");
//         setFormData({
//           image: null,
//           name: "",
//           dateOfBirth: "",
//           email: "",
//           battingStyle: "",
//           bowlingStyle: "",
//           playerRole: "",
//           username: "",
//           password: "",
//           membership: {
//             isMemberHolder:1,
//             startDate:"",
//             endDate:"",
//           },
//           contactNo: ""
//         });
//         isSubmitted();
//         setImagePreview();
//         // setTimeout(() => {
//         //   window.location.reload();
//         // }, 1500);
//       } catch (error) {
//         console.error("Error submitting form:", error);

//         if (error.response && error.response.data && error.response.data.message) {
//           message.error(`Failed to submit: ${error.response.data.message}`);
//         } else {
//           message.error("An unexpected error occurred. Please try again later.");
//         }
//       } finally {
//         setUploading(false);
//         onClose();
//       }
//   };

//   const validateForm = async(name, value) => {
//     const newErrors = {};
//     switch(name){
//       case "name":
//         //name validation
//         if (value.trim().length < 4 || value.trim().length > 25) {
//           newErrors.name = "Name must be between 4 and 25 characters long.";
//         } else if (!/^[a-zA-Z\s.]+$/.test(value)) {
//           newErrors.name = "Name can only contain letters, spaces, and periods.";
//         } else if (/^\s|\s$/.test(value)) {
//           newErrors.name = "Name cannot start or end with a space.";
//         }
//         break;
//       case "username":  
//         //username validation
//         if (value.length < 4 || value.length > 20) {
//           newErrors.username = "Username must be between 4 and 20 characters.";
//         } else if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
//           newErrors.username = "Username can only contain letters, numbers, underscores, and hyphens.";
//         } else{
//             const response = await axios.get(
//               `${API_URL}auth/checkUsernameAvailability`,value
//             );
//             console.log("Username validation:",response.data);
//         };
//         break;
      
//       case "email":
//         // Email validation
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(value)) {
//           newErrors.email = "Please enter a valid email address";
//         } else {
//           const response = await axios.get(
//             `${API_URL}auth/checkEmailAvailability`,value
//           );
//           console.log("Email validation:",response.data);
//         }
//         break;
      
//       case "password":
//         // Password validation
//         const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//         if (!passwordPattern.test(value)) {
//           newErrors.password = "Password must be at least 8 characters long and include a special character";
//         };
//         break;
      
//       case "contactNo":
//         const sriLankaPattern = /^(?:\+94|0)7\d{8}$/;
//         if (!sriLankaPattern.test(value)) {
//           newErrors.contactNo = "Contact number must be in the format '+947XXXXXXXX' or '07XXXXXXXX'.";
//         };
//         break;
//       case "dateOfBirth":
//         const today = new Date();
//         const selectedDate = new Date(value);
//         if (selectedDate >= today) {
//           newErrors.dateOfBirth = "Date of birth must be in the past.";
//         };
//         break;

//       case "membership.startDate":
//         if (!value) {
//           newErrors["membership.startDate"] = "Start date is required.";
//         } else if (formData.membership.endDate && new Date(value) >= new Date(formData.membership.endDate)) {
//           newErrors["membership.startDate"] = "Start date must be before end date.";
//         }
//         break;
      
//       case "membership.endDate":
//         if (!value) {
//           newErrors["membership.endDate"] = "End date is required.";
//         } else if (formData.membership.startDate && new Date(value) <= new Date(formData.membership.startDate)) {
//           newErrors["membership.endDate"] = "End date must be after start date.";
//         }
//         break;  

//       // case "image":
//       //   if (!value && imagePreview === null) {
//       //     newErrors.image = "Image is required.";
//       //   } else if (value && value[0].type) {
//       //   console.log("image file", value[0] );
//       //     // Check the file type for valid image MIME types
//       //     if (!/^image\/(jpeg|png|gif|bmp|webp)$/.test(value[0].type)) {
//       //       newErrors.image = "Only image files (JPEG, PNG, GIF, BMP, WebP) are allowed.";
//       //     }
//       //   } else {
//       //     newErrors.image = "Invalid file. Please select an image file.";
//       //   }
//       //   break;
//       case "image":
//         console.log("Image validation:", value);
//         if (!value) {
//             newErrors.image = "Image is required.";
//         } else if (value.type && !/^image\/(jpeg|png|gif|bmp|webp)$/.test(value.type)) {
//             newErrors.image = "Only image files (JPEG, PNG, GIF, BMP, WebP) are allowed.";
//         }
//         break;
//       default:
//         break;  
//     }  
//     return newErrors;
//   };

//   const validateFormData = (formData) => {
//     const errors = {};
  
//     // Validate top-level fields
//     Object.keys(formData).forEach((field) => {
//       if (field === "membership") {
//         const membershipErrors = validateForm("membership.startDate", formData.membership.startDate);
//         const endDateErrors = validateForm("membership.endDate", formData.membership.endDate);
//         Object.assign(errors, membershipErrors, endDateErrors);
//       } else {
//         const fieldErrors = validateForm(field, formData[field]);
//         if (fieldErrors[field]) {
//           errors[field] = fieldErrors[field];
//         }
//       }
//     });
//     return errors;
//   };

//   const handleImageUpload = (file) => {
//     return new Promise((resolve, reject) => {
//       const storageRef = ref(storage, `players/${file.name}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       setUploading(true);

//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {},
//         (error) => {
//           console.error('Image upload failed:', error);
//           setUploading(false);
//           reject(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setUploading(false);
//             resolve(downloadURL);
//           });
//         }
//       );
//     });
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setImagePreview(url);
//       setFormData({
//         ...formData,
//         image: file
//       });
//       // Validate the image and update the errors state
//       const fieldError = validateForm("image", file); // Pass the file directly for validation
//       setErrors((prevErrors) => {
//         const { image, ...restErrors } = prevErrors; // Remove existing `image` error
//         return fieldError.image ? { ...restErrors, image: fieldError.image } : restErrors;
//       });
//     }
//   };

//   const handleRemoveImage = () => {
//     setImagePreview(null);
//     setFormData({...formData, image:null});
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       image: "Image is required.",
//     }));
//   };
//   const handleClick = () => {
//     if (fileInputRef.current) fileInputRef.current.click();
//   };

//   return (
//     <div className="fixed inset-0  bg-gray-600 bg-opacity-75 overflow-y-auto py-10 min-h-screen">
//       <div className="flex items-center justify-center">
//       <div className={`bg-white  ${uploading? "opacity-80": "bg-opacity-100"} p-8 m-5 rounded-3xl shadow-lg max-w-xl w-full relative`}>
//         <div className="flex justify-end ">
//           <button
//             onClick={onClose}
//             className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
//             aria-label="Close"
//           >
//             <FaTimes />
//           </button>
//         </div>
//         <h2 className="text-xl text-[#480D35] font-bold mb-4">Add Player Details</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 ">
//           <div className="col-span-1">
//             <label className="block text-black text-sm font-semibold">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required   
//             />
//              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm  font-semibold">DOB</label>
//             <DatePicker
//               name="dateOfBirth"
//               dateFormat="yyyy-mm-dd"
//               // selected={new Date(formData.dateOfBirth)}
//               onChange={(date) => handleChange({ target: { name: 'dateOfBirth', value: date } })}
//               placeholder="yyyy-mm-dd"
//               className="w-full px-3 py-1 hover:border-gray-300 border text-gray-600 border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
//               required
//             />
//             {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm  font-semibold">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className=" w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="username"
//               required
//             />
//             {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm  font-semibold">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="you@example.com"
//               required
//             />
//             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>
//           <div className="col-span-1 relative">
//             <label className="block text-black text-sm  font-semibold">Password</label>
//             <input
//               type={passwordVisible? "text": "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className=" w-full px-3 py-1 border flex relative text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
//               placeholder="********"
//               required
//             />
//              <button
//                 type="button"
//                 onClick={()=>setPasswordVisible(!passwordVisible)}
//                 className="absolute top-7 right-3 text-gray-600"
//               >
//                 {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm  font-semibold">Contact No</label>
//             <input
//               type="text"
//               name="contactNo"
//               value={formData.contactNo}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               placeholder="+94 XX XXX XXXX"
//               required
//             />
//             {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo}</p>}
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm  font-semibold">Batting Style</label>
//             <select
//               name="battingStyle"
//               value={formData.battingStyle}
//               onChange={handleChange}
//               className=" py-1 px-3 border border-gray-300 text-gray-600 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             >
//               <option value='' disabled>Select batting style </option>
//               <option value="LHB">Left-hand batting</option>
//               <option value="RHB">Right-hand batting</option>
//             </select>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm  font-semibold">Bowling Style</label>
//             <select
//               name="bowlingStyle"
//               value={formData.bowlingStyle}
//               onChange={handleChange}
//               className=" px-3 py-1 border text-gray-600 border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             >
//               <option value='' disabled> Select bowling style</option>
//               <option value="RAF">Right-arm fast</option>
//               <option value="RAFM">Right-arm fast-medium</option>
//               <option value="RAMF">Right-arm medium-fast</option>
//               <option value="RAM">Right-arm medium</option>
//               <option value="RAMS">Right-arm medium-slow</option>
//               <option value="RASM">Right-arm slow-medium </option>
//               <option value="RAS">Right-arm slow</option>
//               <option value="RAL">Right-arm Leg</option>
//               <option value="LAF">Left-arm fast</option>
//               <option value="LAFM">Left-arm fast-medium</option>
//               <option value="LAMF">Left-arm medium-fast</option>
//               <option value="LAM">Left-arm medium</option>
//               <option value="LAMS">Left-arm medium-slow</option>
//               <option value="LASM">Left-arm slow-medium</option>
//               <option value="LAL">Left-arm Leg</option>
//               <option value="OB">Off break</option>
//               <option value="LB">Leg break</option>
//               <option value="LBG">Leg break googly</option>
//               <option value="SLAO">Slow left-arm orthodox</option>
//               <option value="SRAO">Slow Right-arm orthodox</option>
//               <option value="OS">Off spin</option>
//               <option value="SLAWS">Slow left-arm wrist spin</option>
//               <option value="SRAWS">Slow Right-arm wrist spin</option>
//               <option value='N/A'>Not applicable</option>
//             </select>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm  font-semibold">Role</label>
//             <select
//               name="playerRole"
//               value={formData.playerRole}
//               onChange={handleChange}
//               className=" px-3 py-1 border text-gray-600 border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             >
//               <option value='' disabled>
//                 Select
//               </option>
//               <option value="Bowler">Bowler</option>
//               <option value="Batter">Batter</option>
//               <option value="Top Order Batter">Top Order Batter</option>
//               <option value="Wicketkeeper Batter">Wicketkeeper Batter</option>
//               <option value="Allrounder">Allrounder</option>
//               <option value="Bawlling Allrounder">Bawlling Allrounder</option>
//               <option value="Batting Allrounder">Batting Allrounder</option>
//             </select>            
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm  font-semibold">Status</label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//               required
//             >
//               <option value='' selected disabled>
//                 Select
//               </option>
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//             </select>
//           </div>
//           <div className="col-span-1">
//             <label className="block text-black text-sm  font-semibold">
//               Membership Starting Date
//             </label>
//             <DatePicker
//               name="membership.startDate"
//               dateFormat="yyyy-mm-dd"
//               // selected={new Date(formData.membership.startDate)}
//               onChange={(date) => handleChange({ target: { name: 'membership.startDate', value: date } })}
//               placeholder="yyyy-mm-dd"
//               className="w-full px-3 py-1 hover:border-gray-300 border text-black border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
//               required
//             />
//             {errors["membership.startDate"] && ( <p className="text-red-500 text-xs mt-1">{errors["membership.startDate"]}</p>)}
//           </div>
//           <div className="col-span-1">
//             <label className="block  text-black text-sm  font-semibold">
//               Membership Ending Date
//             </label>
//             <DatePicker
//               name="membership.endDate"
//               dateFormat="yyyy-mm-dd"
//               // selected={new Date(formData.membership.endDate)}
//               onChange={(date) => handleChange({ target: { name: 'membership.endDate', value: date } })}
//               placeholder="yyyy-mm-dd"
//               className="w-full px-3 py-1 hover:border-gray-300 border text-black border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
//               required
//             />
//             {errors["membership.endDate"] && ( <p className="text-red-500 text-xs mt-1">{errors["membership.endDate"]}</p>)}
//           </div>
          
//           <div className="col-span-1 md:col-span-2 relative ">
//             <label className="block text-black text-sm font-semibold">Image</label>
//             {/* <input
//               id="image"
//               type="file" 
//               name="image" 
//               accept="image/*" 
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-1 border bg-white text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//             />
//             {imagePreview &&
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="mt-1 w-20 h-20 bg-white rounded-full object-cover border border-gray-300"
//               />
//               } */}
//               <div
//                 className={`w-full px-3 py-4 border rounded-md ${
//                   isDragging? "border-[#00175f] bg-blue-50" : "border-gray-300"
//                 } flex flex-col items-center justify-center cursor-pointer`}
//                 onDragOver={handleDragOver}
//                 onDragLeave={handleDragLeave}
//                 onDrop={handleDrop}
//                 onClick={handleClick}
//               >
//                 {imagePreview? (
//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     className=" object-contain border rounded-lg border-gray-300"
//                   />
//                 ) : (
//                   <p className="text-gray-500 text-xs md:text-sm">
//                     {isDragging ? (
//                       "Drop the image here"
//                     ) : (
//                       <span className="inline-flex items-center">
//                         Drag and drop an image, or&nbsp;
//                         <GiClick className="ml-1 text-lg" />
//                         &nbsp;to upload images
//                       </span>
//                     )}
//                   </p>
//                 )}
//               <input
//                 ref={fileInputRef}
//                 id="image"
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 onChange={handleChange}
//                 className="hidden"
//               />
//             </div>
//             {imagePreview && (
//               <button
//               title="Remove image"
//                 onClick={handleRemoveImage}
//                 className="absolute right-2 bottom-2 text-sm text-red-500"
//               >
//                 <FaTrash/>
//               </button>
//             )}
//           </div>
//           {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}  
//           <div className="flex justify-end col-span-1 md:col-span-2">
//             <button
//               type="submit"
//               className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//         </div>
//         {uploading && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
//           <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
//         </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PlayerForm;
