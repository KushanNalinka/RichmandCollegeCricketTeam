// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { message } from "antd";
// import ball from "./../assets/images/CricketBall-unscreen.gif";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const OfficialForm = ({ onClose, isSubmitted }) => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const accessToken = localStorage.getItem("accessToken");
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     roles: ["ROLE_OFFICIAL"],
//     name: "",
//     contactNo: "",
//     position: "",
//     createdOn: new Date().toISOString(),
//     createdBy: user.username
//   });
//   const [errors, setErrors] = useState({});
//   const API_URL = process.env.REACT_APP_API_URL;
//   const [uploading, setUploading] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ""
//     }));
//     setFormData({
//       ...formData,
//       [name]: value
//     });

//     const fieldError = validateForm(name, value);

//     setErrors(prev => {
//       // If no error for this field, remove it from the errors object
//       if (!fieldError[name]) {
//         const { [name]: _, ...rest } = prev; // Exclude the current field's error
//         return rest;
//       }
//       // Otherwise, update the error for this field
//       return { ...prev, ...fieldError };
//     });
//   };

//   const validateForm = (name, value) => {
//     const newErrors = {};
//     switch (name) {
//       case "name":
//         //name validation
//         // if (value.trim().length < 4 || value.trim().length > 25) {
//         //   newErrors.name = "Name must be between 4 and 25 characters long.";
//         // } else 
        
//         if (!/^[a-zA-Z\s.]+$/.test(value)) {
//           newErrors.name =
//             "Name can only contain letters, spaces, and periods.";
//         } else if (/^\s|\s$/.test(value)) {
//           newErrors.name = "Name cannot start or end with a space.";
//         }
//         break;
//       case "username":
//         //username validation
//         if (value.length < 4 || value.length > 20) {
//           newErrors.username = "Username must be between 4 and 20 characters.";
//         } else if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
//           newErrors.username =
//             "Username can only contain letters, numbers, underscores, and hyphens.";
//         } else {
//           // Debounced API call for username availability
//           clearTimeout(window.usernameValidationTimeout);
//           window.usernameValidationTimeout = setTimeout(async () => {
//             try {
//               const response = await axios.get(
//                 `${API_URL}auth/checkUsernameAvailability?username=${value}`,
//                 {
//                   headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                     "Content-Type": "application/json",
//                     Accept: "application/json"
//                   }
//                 }
//               );
//               if (response.data.usernameExists === true) {
//                 setErrors(prevErrors => ({
//                   ...prevErrors,
//                   username: "This username is already taken."
//                 }));
//               } else {
//                 setErrors(prevErrors => {
//                   const { username, ...rest } = prevErrors;
//                   return rest;
//                 });
//               }
//             } catch (error) {
//               console.error("Username validation error:", error);
//             }
//           }, 500); // Delay of 500ms
//         }
//         break;

//       case "email":
//         // Email validation
//         // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         // if (!emailPattern.test(value)) {
//         //   newErrors.email = "Please enter a valid email address";
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // General email syntax
//         const specificDomainRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/; // Specific domains
//         if (!emailRegex.test(value)) {
//           newErrors.email  = "Email is invalid";
//         } else if (!specificDomainRegex.test(value)) {
//            newErrors.email = "Only emails from gmail.com, yahoo.com, or outlook.com are allowed.";
//         } else {
//           // Debounced API call for email availability
//           clearTimeout(window.emailValidationTimeout);
//           window.emailValidationTimeout = setTimeout(async () => {
//             try {
//               const response = await axios.get(
//                 `${API_URL}auth/checkEmailAvailability?email=${value}`,
//                 {
//                   headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                     "Content-Type": "application/json",
//                     Accept: "application/json"
//                   }
//                 }
//               );
//               console.log("Email validation :", response.data);
//               if (response.data.emailExists === true) {
//                 setErrors(prevErrors => ({
//                   ...prevErrors,
//                   email: "This email is already in use."
//                 }));
//               } else {
//                 setErrors(prevErrors => {
//                   const { email, ...rest } = prevErrors;
//                   return rest;
//                 });
//               }
//             } catch (error) {
//               console.error("Email validation error:", error);
//             }
//           }, 500); // Delay of 500ms
//         }
//         break;

//       case "password":
//         // Password validation
//         const passwordPattern = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//         if (!passwordPattern.test(value)) {
//           newErrors.password =
//             "Password must be at least 8 characters long and include a special character";
//         }
//         break;

//       case "contactNo":
//         const sriLankaPattern = /^(?:\+94|0)7\d{8}$/;
//         if (!sriLankaPattern.test(value)) {
//           newErrors.contactNo =
//             "Contact number must be in the format '+947XXXXXXXX' or '07XXXXXXXX'.";
//         }
//         break;

//       case "position":
//         //name validation
//         // if (value.trim().length < 4 || value.trim().length > 25) {
//         //   newErrors.position =
//         //     "Position must be between 4 and 25 characters long.";
//         // } else if (!/^[a-zA-Z\s.]+$/.test(value)) {
//         //   newErrors.position =
//         //     "Position can only contain letters, spaces, and periods.";
//         // } else
//          if (/^\s|\s$/.test(value)) {
//           newErrors.position = "Position cannot start or end with a space.";
//         }

//       default:
//         break;
//     }
//     return newErrors;
//   };

//   const validateFormData = formData => {
//     const errors = {};

//     // Validate top-level fields
//     Object.keys(formData).forEach(field => {
//       const fieldErrors = validateForm(field, formData[field]);
//       if (fieldErrors[field]) {
//         errors[field] = fieldErrors[field];
//       }
//     });
//     return errors;
//   };

//   const validateAsyncFormData = async formData => {
//     const errors = {};

//     // Check username availability
//     if (formData.username) {
//       try {
//         const response = await axios.get(
//           `${API_URL}auth/checkUsernameAvailability?username=${formData.username}`,
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`
//             }
//           }
//         );
//         if (response.data.usernameExists) {
//           errors.username = "This username is already taken.";
//         }
//       } catch (error) {
//         console.error("Error validating username:", error);
//       }
//     }

//     // Check email availability
//     if (formData.email) {
//       try {
//         const response = await axios.get(
//           `${API_URL}auth/checkEmailAvailability?email=${formData.email}`,
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`
//             }
//           }
//         );
//         if (response.data.emailExists) {
//           errors.email = "This email is already in use.";
//         }
//       } catch (error) {
//         console.error("Error validating email:", error);
//       }
//     }

//     return errors;
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const syncErrors = validateFormData(formData);
//     const asyncErrors = await validateAsyncFormData(formData);
//     const errors = { ...syncErrors, ...asyncErrors };
//     setErrors(errors);
//     if (Object.keys(errors).length > 0) {
//       message.error("Please correct the highlighted errors.");
//       console.log("Validation Errors:", errors);
//       return;
//     }
//     setUploading(true);

//     try {
//       const response = await axios.post(
//         `${API_URL}auth/signupOfficial`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`
//           }
//         }
//       );
//       console.log("Form submitted succedded: ", response.data);
//       message.success("Successfull!");
//       setFormData({
//         username: "",
//         email: "",
//         password: "",
//         roles: ["ROLE_OFFICIAL"],
//         name: "",
//         contactNo: "",
//         position: "",
//         createdBy: "",
//         createdOn: ""
//       });
//       isSubmitted();
//     } catch (error) {
//       console.error("Error submitting form:", error);

//       if (
//         error.response &&
//         error.response.data &&
//         error.response.data.message
//       ) {
//         message.error(`Failed to submit: ${error.response.data.message}`);
//       } else {
//         message.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setUploading(false);
//       onClose();
//     }
//   };

//   return (
//     <div className="fixed inset-0 overflow-y-auto py-10 min-h-screen bg-gray-600 bg-opacity-75">
//       <div className="flex items-center justify-center">
//         <div
//           className={`bg-white ${uploading
//             ? "opacity-80"
//             : "bg-opacity-100"} m-5 md:m-0 p-8 rounded-3xl shadow-lg max-w-md w-full relative`}
//         >
//           <div className="flex justify-end ">
//             <button
//               onClick={onClose}
//               className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
//               aria-label="Close"
//             >
//               <FaTimes />
//             </button>
//           </div>
//           <h2 className="text-xl text-[#480D35] font-bold mb-4">
//             Add Official Details
//           </h2>
//           <form onSubmit={handleSubmit} className="gap-3">
//             <div className="mb-4">
//               <label className="block text-black text-sm font-semibold">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                 placeholder="Jhon Doe"
//                 required
//               />
//               {errors.name &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.name}
//                 </p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-black text-sm font-semibold">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                 required
//                 placeholder="username"
//               />
//               {errors.username &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.username}
//                 </p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-black text-sm font-semibold">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                 required
//                 placeholder="you@example.com"
//               />
//               {errors.email &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.email}
//                 </p>}
//             </div>
//             <div className="mb-4 relative">
//               <label className="block text-black text-sm font-semibold">
//                 Password
//               </label>
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-3 py-1 border relative text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                 required
//                 placeholder="********"
//               />
//               <button
//                 type="button"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//                 className="absolute top-7 right-3 text-gray-600"
//               >
//                 {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//               </button>
//               {errors.password &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.password}
//                 </p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-black text-sm font-semibold">
//                 Contact No
//               </label>
//               <input
//                 type="tel"
//                 name="contactNo"
//                 value={formData.contactNo}
//                 onChange={handleChange}
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                 placeholder="+947XXXXXXXX"
//                 required
//               />
//               {errors.contactNo &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.contactNo}
//                 </p>}
//             </div>
//             <div className="mb-4">
//               <label className="block text-black text-sm font-semibold">
//                 Position
//               </label>
//               <input
//                 type="text"
//                 name="position"
//                 value={formData.position}
//                 onChange={handleChange}
//                 className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                 required
//                 placeholder="Teacher"
//               />

//               {errors.position &&
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.position}
//                 </p>}
//             </div>
//             <div className="flex mt-8 justify-end col-span-2">
//               <button
//                 type="submit"
//                 className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       {uploading &&
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
//           <img
//             src={ball}
//             alt="Loading..."
//             className="w-20 h-20 bg-transparent"
//           />
//         </div>}
//     </div>
//   );
// };

// export default OfficialForm;


import React, {useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message } from "antd";
import ball from "./../assets/images/CricketBall-unscreen.gif";

import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';
import { GiClick } from "react-icons/gi";
import { Select } from 'antd';


const OfficialForm = ({ onClose, isSubmitted }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem("accessToken");
    const fileInputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
     const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    image: null,
    username: "",
    email: "",
    password: "",
    // roles: ["ROLE_OFFICIAL"],
    name: "",
    contactNo: "",
    position: "",
    createdOn: new Date().toISOString(),
    createdBy: user.username
  });
  const [errors, setErrors] = useState({});
  const API_URL = process.env.REACT_APP_API_URL;
  const [uploading, setUploading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // const handleChange = e => {
  //   const { name, value, files } = e.target;
  //   setErrors(prevErrors => ({
  //     ...prevErrors,
  //     [name]: ""
  //   }));
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });

  //   const fieldError = validateForm(name, value);

  //   setErrors(prev => {
  //     // If no error for this field, remove it from the errors object
  //     if (!fieldError[name]) {
  //       const { [name]: _, ...rest } = prev; // Exclude the current field's error
  //       return rest;
  //     }
  //     // Otherwise, update the error for this field
  //     return { ...prev, ...fieldError };
  //   });
  // };

  const handleChange = e => {
    const { name, value, files } = e.target;
  
    // If the input is a file input, handle the file upload
    if (files && files[0]) {
      const file = files[0];
      console.log("file in handleChange: ", file);
  
      // Set the image preview
      setImagePreview(URL.createObjectURL(file));
  
      // Update formData with the file
      setFormData({
        ...formData,
        [name]: file
      });
  
      // Validate the file
      const fieldError = validateForm(name, file);
      setErrors(prevErrors => ({
        ...prevErrors,
        ...fieldError,
      }));
  
      console.log("file in formData image: ", formData.image);
    } else {
      // For non-file inputs, handle as before
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ""
      }));
  
      setFormData({
        ...formData,
        [name]: value
      });
  
      const fieldError = validateForm(name, value);
  
      setErrors(prev => {
        // If no error for this field, remove it from the errors object
        if (!fieldError[name]) {
          const { [name]: _, ...rest } = prev; // Exclude the current field's error
          return rest;
        }
        // Otherwise, update the error for this field
        return { ...prev, ...fieldError };
      });
    }
  };
  

  const validateForm = (name, value) => {
    const newErrors = {};
    switch (name) {
      case "name":
        //name validation
        // if (value.trim().length < 4 || value.trim().length > 25) {
        //   newErrors.name = "Name must be between 4 and 25 characters long.";
        // } else 
        
        if (!/^[a-zA-Z\s.]+$/.test(value)) {
          newErrors.name =
            "Name can only contain letters, spaces, and periods.";
        } else if (/^\s|\s$/.test(value)) {
          newErrors.name = "Name cannot start or end with a space.";
        }
        break;
      case "username":
        //username validation
        if (value.length < 4 || value.length > 20) {
          newErrors.username = "Username must be between 4 and 20 characters.";
        } else if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
          newErrors.username =
            "Username can only contain letters, numbers, underscores, and hyphens.";
        } else {
          // Debounced API call for username availability
          clearTimeout(window.usernameValidationTimeout);
          window.usernameValidationTimeout = setTimeout(async () => {
            try {
              const response = await axios.get(
                `${API_URL}auth/checkUsernameAvailability?username=${value}`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                  }
                }
              );
              if (response.data.usernameExists === true) {
                setErrors(prevErrors => ({
                  ...prevErrors,
                  username: "This username is already taken."
                }));
              } else {
                setErrors(prevErrors => {
                  const { username, ...rest } = prevErrors;
                  return rest;
                });
              }
            } catch (error) {
              console.error("Username validation error:", error);
            }
          }, 500); // Delay of 500ms
        }
        break;

      case "email":
        // Email validation
        // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // if (!emailPattern.test(value)) {
        //   newErrors.email = "Please enter a valid email address";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // General email syntax
        const specificDomainRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/; // Specific domains
        if (!emailRegex.test(value)) {
          newErrors.email  = "Email is invalid";
        } else if (!specificDomainRegex.test(value)) {
           newErrors.email = "Only emails from gmail.com, yahoo.com, or outlook.com are allowed.";
        } else {
          // Debounced API call for email availability
          clearTimeout(window.emailValidationTimeout);
          window.emailValidationTimeout = setTimeout(async () => {
            try {
              const response = await axios.get(
                `${API_URL}auth/checkEmailAvailability?email=${value}`,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                  }
                }
              );
              console.log("Email validation :", response.data);
              if (response.data.emailExists === true) {
                setErrors(prevErrors => ({
                  ...prevErrors,
                  email: "This email is already in use."
                }));
              } else {
                setErrors(prevErrors => {
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
          newErrors.password =
            "Password must be at least 8 characters long and include a special character";
        }
        break;

      case "contactNo":
        const sriLankaPattern = /^(?:\+94|0)7\d{8}$/;
        if (!sriLankaPattern.test(value)) {
          newErrors.contactNo =
            "Contact number must be in the format '+947XXXXXXXX' or '07XXXXXXXX'.";
        }
        break;

      case "position":
        //name validation
        // if (value.trim().length < 4 || value.trim().length > 25) {
        //   newErrors.position =
        //     "Position must be between 4 and 25 characters long.";
        // } else if (!/^[a-zA-Z\s.]+$/.test(value)) {
        //   newErrors.position =
        //     "Position can only contain letters, spaces, and periods.";
        // } else
         if (/^\s|\s$/.test(value)) {
          newErrors.position = "Position cannot start or end with a space.";
        }

      default:
        break;
    }
    return newErrors;
  };

  const validateFormData = formData => {
    const errors = {};

    // Validate top-level fields
    Object.keys(formData).forEach(field => {
      const fieldErrors = validateForm(field, formData[field]);
      if (fieldErrors[field]) {
        errors[field] = fieldErrors[field];
      }
    });
    return errors;
  };

  const validateAsyncFormData = async formData => {
    const errors = {};

    // Check username availability
    if (formData.username) {
      try {
        const response = await axios.get(
          `${API_URL}auth/checkUsernameAvailability?username=${formData.username}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );
        if (response.data.usernameExists) {
          errors.username = "This username is already taken.";
        }
      } catch (error) {
        console.error("Error validating username:", error);
      }
    }

    // Check email availability
    if (formData.email) {
      try {
        const response = await axios.get(
          `${API_URL}auth/checkEmailAvailability?email=${formData.email}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );
        if (response.data.emailExists) {
          errors.email = "This email is already in use.";
        }
      } catch (error) {
        console.error("Error validating email:", error);
      }
    }

    return errors;
  };

  const handleSubmit = async e => {
    console.log("Form data before submit: ", formData);
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

      const formDataToSend = new FormData();
      const { image, ...userData } = formData;

      // Append userData as a JSON string
      formDataToSend.append("userData", JSON.stringify(userData));

      // Append image file
      formDataToSend.append("image", image);

      const response = await axios.post(
        `${API_URL}auth/signupOfficial`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfull!");
      setFormData({
        image: null,
        username: "",
        email: "",
        password: "",
        // roles: ["ROLE_OFFICIAL"],
        name: "",
        contactNo: "",
        position: "",
        createdBy: "",
        createdOn: ""
      });
      isSubmitted();
         setImagePreview();
    } catch (error) {
      console.error("Error submitting form:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
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
      const storageRef = ref(storage, `players/${file.name}`);
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
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setFormData({...formData, image:null});
    setErrors((prevErrors) => ({
      ...prevErrors,
      image: "Image is required.",
    }));
  };
  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleChangeway = (value) => {
    setFormData((prev) => ({ ...prev, bowlingStyle: value }));  // ✅ Use 'bowlingStyle' directly
  };

  return (
    <div className="fixed inset-0 overflow-y-auto py-10 min-h-screen bg-gray-600 bg-opacity-75">
      <div className="flex items-center justify-center">
        <div
          className={`bg-white ${uploading
            ? "opacity-80"
            : "bg-opacity-100"} m-5 md:m-0 p-8 rounded-3xl shadow-lg max-w-md w-full relative`}
        >
          <div className="flex justify-end ">
            <button
              onClick={onClose}
              className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>
          <h2 className="text-xl text-[#480D35] font-bold mb-4">
            Add Official Details
          </h2>
          <form onSubmit={handleSubmit} className="gap-3">
            <div className="mb-4">
              <label className="block text-black text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                placeholder="Jhon Doe"
                required
              />
              {errors.name &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.name}
                </p>}
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-semibold">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                required
                placeholder="username"
              />
              {errors.username &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.username}
                </p>}
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                required
                placeholder="you@example.com"
              />
              {errors.email &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.email}
                </p>}
            </div>
            <div className="mb-4 relative">
              <label className="block text-black text-sm font-semibold">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-1 border relative text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                required
                placeholder="********"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute top-7 right-3 text-gray-600"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.password}
                </p>}
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-semibold">
                Contact No
              </label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                placeholder="+947XXXXXXXX"
                required
              />
              {errors.contactNo &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.contactNo}
                </p>}
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-semibold">
                Position
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                required
                placeholder="Teacher"
              />

              {errors.position &&
                <p className="text-red-500 text-xs mt-1">
                  {errors.position}
                </p>}
            </div>

             <div className="col-span-1 md:col-span-2 relative ">
                        <label className="block text-black text-sm font-semibold">Image</label>
                          <div
                            className={`w-full px-3 py-4 border rounded-md ${
                              isDragging? "border-[#00175f] bg-blue-50" : "border-gray-300"
                            } flex flex-col items-center justify-center cursor-pointer`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={handleClick}
                          >
                            {imagePreview? (
                              <img
                                src={imagePreview}
                                alt="Preview"
                                className=" object-contain border rounded-lg border-gray-300"
                              />
                            ) : (
                              <p className="text-gray-500 text-xs md:text-sm">
                                {isDragging ? (
                                  "Drop the image here"
                                ) : (
                                  <p className="flex flex-col md:flex-row items-center justify-center">
                                    Drag and drop an image, or click here&nbsp; 
                                    <span className="mt-1">
                                      <GiClick className="text-lg" />
                                    </span>
                                    &nbsp;to upload images
                                  </p>
                                )}
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
                    {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}  
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
      {uploading &&
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <img
            src={ball}
            alt="Loading..."
            className="w-20 h-20 bg-transparent"
          />
        </div>}
    </div>
  );
};

export default OfficialForm;
