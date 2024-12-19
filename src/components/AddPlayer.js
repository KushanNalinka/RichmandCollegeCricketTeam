// import React, { useState } from 'react';
// import HomeNavbar from '../components/HomeNavbar';
// import axios from "axios";
// import { message } from "antd";
// import Navbar from "../components/HomeNavbar";
// import back from "../assets/images/flag.png";
// import profilePic from "../assets/images/kusal.png";
// import flag from "../assets/images/backDrop.png";
// import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';

// const AddPlayer = ({ isOpen, selection }) => {
//   const [isImageAdded, setIsImageAdded] = useState(false);  
//   const [isEditImage, setIsEditImage] = useState(false);  
//   const [formData, setFormData] = useState({
//     image:null,
//     name: '',
//     dateOfBirth: '',
//     age: '',
//     email: '',
//     battingStyle:'',
//     bowlingStyle:'',
//     role: '',
//     username:'',
//     password:'',
//     membershipStartingDate:'',
//     membershipEndingDate:'',
//     contactNumber:''
//   });
  
//   const [imagePreview, setImagePreview] = useState('');

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === 'image') {
//       //isImageAdded(false);  
//       if (files && files[0]) {
//         const file = files[0];
//         setImagePreview(URL.createObjectURL(file));
//         setFormData({
//           ...formData,
//           [name]: file
//         });
//         setIsImageAdded(true);
//       }
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (!formData.name || !formData.dateOfBirth || !formData.age || !formData.email || !formData.password || !formData.username || !formData.role) {
//       message.error("Missing required fields");
//       return;
//     } else {
//       try {
//         const response = await axios.post(
//             "http://localhost:8080/api/auth/signupPlayer",
//           { ...formData }
//         );
//         console.log("Form submitted succedded: ", response.data);
//         message.success("Successfull!");
//         setFormData({
//             image:null,
//             name: null,
//             dateOfBirth: null,
//             age: null,
//             email: null,
//             battingStyle:null,
//             bowlingStyle:null,
//             role: null,
//             username:null,
//             password:null,
//             membershipStartingDate:null,
//             membershipEndingDate:null,
//             contactNumber:null
//         });
//         setTimeout(() => {
//           window.location.reload();
//         }, 1500);
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         message.error("Failed!");
//       }
//     }
//   };
  
//   const handleEditImageClick = () => {
//     setIsEditImage(true);
//   }
//   const handleRemoveImage = () => {
//     setImagePreview(null);
//     setIsImageAdded(false);
//     setIsEditImage(false);
//   }
//   const handleEdit = async e => {
//     e.preventDefault();
//     if (!formData.name || !formData.dateOfBirth || !formData.age || !formData.email || !formData.password || !formData.username || !formData.role) {
//       message.error("Missing required fields");
//       return;
//     } else {
//       try {
//         const currentImageURL = selection.image;
//         const imageURL = formData.image ? formData.image : currentImageURL;

//         const response = await axios.patch(
//           "http://localhost:5000/api/news/updateNews/" + formData.newsId,
//           {
//             image:formData.image,
//             name: formData.name,
//             dateOfBirth: formData.dateOfBirth,
//             age: formData.age,
//             email: formData.email,
//             battingStyle:formData.battingStyle,
//             bowlingStyle: formData.bowlingStyle,
//             role: formData.role,
//             username: formData.username,
//             password:formData.password,
//             membershipStartingDate: formData.membershipEndingDate,
//             membershipEndingDate:formData.membershipEndingDate,
//             contactNumber:formData.contactNumber
//           }
//         );
//         console.log("Form update succeeded: ", response.data);
//         setFormData({
//           ...formData,
//           image: null
//         });
//         message.success("updated!");
//         setTimeout(() => {
//           window.location.reload();
//         }, 1500);
//       } catch (error) {
//         console.error("Error updating form:", error);
//         message.error("Failed to update!");
//       }
//     }
//   };


//   return (
//     <div
//       className={`h-full pb-20 text-white w-full`}
//       style={{
//         backgroundImage: `url(${flag})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center"
//       }}
//     >
//       {/* Navbar */}
//       <Navbar />

//       <div className="max-w-screen-full pt-10 p-20"></div>
//         <div className=" flex relative w-full items-center justify-center px-20">
//             <div className="  h-full relative  w-full lg:mx-3 lg:px-40 lg:pt-8 p-8 bg-white rounded-lg shadow-lg"
//             style={{
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//                 border: "1px solid rgba(255, 255, 255, 0.3)"
//               }}>
//             <h1 className='text-2xl font-bold text-[#480D35]'>Edit Player Profile</h1>    
//             <div className="flex justify-center rounded-xl h-32 mt-2 items-end mb-6" 
//                 style={{
//                     backgroundImage: `url(${back})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center"
//                 }}>
//                 <div className='relative flex items-center justify-center top-5 rounded-full w-28 h-28 bg-white '>
//                     {!isImageAdded?
//                          <>
//                          <input 
//                           id="image"
//                            type="file" 
//                            name="image" 
//                            accept="image/*" 
//                            onChange={handleChange} 
//                            className="absolute opacity-0 w-full h-full cursor-pointer" 
//                            required
//                          />
//                          <div className='rounded-full p-2 bg-[#480D35]'>
//                             <FaCamera className="text-2xl text-white cursor-pointer "  onClick={() => document.getElementById('image').click()}/>
//                          </div>
//                        </>
//                          :imagePreview && (
//                             <div className='relative w-full h-full flex items-center justify-center' >
//                                 <img 
//                                 src={imagePreview} 
//                                 alt="Image Preview" 
//                                 className=" w-24 h-24 rounded-full object-cover border border-gray-300" 
//                                 />
//                                 <input 
//                                     id="image"
//                                     type="file" 
//                                     name="image" 
//                                     accept="image/*" 
//                                     onChange={handleChange} 
//                                     className="absolute opacity-0 w-10 h-10 cursor-pointer" 
//                                     required
//                                 />{
//                                     !isEditImage ?(
//                                         <div className='absolute rounded-full p-2 bg-[#480D35] bottom-2 right-2'>
//                                             <FaEdit className=" text-lg text-white  cursor-pointer " onClick={handleEditImageClick} />
//                                         </div>        
//                                     ):(
//                                         <>
//                                             <div className='absolute rounded-full p-2 bg-[#480D35] bottom-0 right-5'>
//                                                 <FaCamera
//                                                     className=" text-lg text-white cursor-pointer"
//                                                     onClick={() => document.getElementById('image').click()}
//                                                 />
//                                             </div>
//                                             <div className='absolute rounded-full p-2 bg-[#e62c2c] bottom-0 -right-4'>    
//                                                 <FaTrash
//                                                     className=" text-lg text-white cursor-pointer"
//                                                     onClick={handleRemoveImage}
//                                                 />
//                                             </div>
//                                         </>    
//                                     )
//                                 }
                                 
//                             </div> 
//                          )
                    
//                     }
                
//                     {/* <img src={profilePic} alt='' className='bg-cover w-24 h-24 rounded-full'/> */}
//                 </div>
//             </div>
        
//             <form onSubmit={handleSubmit} >
//             <h1 className='text-[#480D35] md:ml-32 text-lg font-bold'>Personal information</h1>
//                 <div className='md:px-32 w-full grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10 ' >
//                 <div className=' col-span-1'>
//                 <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Name</label>
//                         <input
//                             type="text"
//                             name="Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Date of Birth</label>
//                         <input
//                             type="date"
//                             name="lastName"
//                             value={formData.dateOfBirth}
//                             onChange={handleChange}
//                             className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Username</label>
//                         <input
//                             type="text"
//                             name="username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Email Address</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Age</label>
//                         <input
//                             type="text"
//                             name="age"
//                             value={formData.age}
//                             onChange={handleChange}
//                             className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                 </div>
//                 <div className=' col-span-1'>
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Contact Number</label>
//                         <input
//                             type="phone"
//                             name="contactNumber"
//                             value={formData.contactNumber}
//                             onChange={handleChange}
//                             className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
                    
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Batting Style</label>
//                         <select 
//                             name="battingStyle" 
//                             value={formData.battingStyle} 
//                             onChange={handleChange} 
//                             className=" py-1 px-3 border border-gray-300 text-black rounded-lg w-full" 
//                             required
//                         >
//                             <option value="">Select Status</option>
//                             <option value="battingOne">Left-hand batting</option>
//                             <option value="battingTwo">Right-hand batting</option>
//                         </select>
                        
//                     </div>
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Bowling Style</label>
//                         <select 
//                             name="bowlingStyle" 
//                             value={formData.bowlingStyle} 
//                             onChange={handleChange} 
//                             className=" px-3 py-1 border text-black border-gray-300 rounded-lg w-full" 
//                             required
//                         >
//                             <option value="">Select Status</option>
//                             <option value="spinOne">Left-arm spin</option>
//                             <option value="spinTwo">Right-arm spin</option>
//                         </select>
//                     </div>
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Role</label>
//                         <select 
//                             name="role" 
//                             value={formData.role} 
//                             onChange={handleChange} 
//                             className=" px-3 py-1 border text-black border-gray-300 rounded-lg w-full" 
//                             required
//                         >
//                             <option value="">Select Status</option>
//                             <option value="batsman">Batsman</option>
//                             <option value="bowler">Bowler</option>
//                             <option value="allRounder">All-rounder</option>
//                         </select>
//                     </div>
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Membership Starting Date</label>
//                         <input
//                             type="date"
//                             name="membershipStartingDate"
//                             value={formData.membershipStartingDate}
//                             onChange={handleChange}
//                             className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label className="block mb-1 text-gray-700">Membership Ending Date</label>
//                         <input
//                             type="date"
//                             name="membershipEndingDate"
//                             value={formData.membershipEndingDate}
//                             onChange={handleChange}
//                             className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                 </div>
                    
//                 </div>
                
               
                  
//                     <div className=" md:ml-32 col-span-2">
//                         <button
//                         type="submit"
//                         className="bg-[#480D35] text-white px-4 py-2 rounded-lg"
//                         onClick={selection ? handleEdit : handleSubmit}
//                         >
//                             Save
//                         </button>
//                     </div>
//             </form>
//         </div>

//     </div>
//     </div>
            
//   );
// };

// export default AddPlayer;

import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import axios from "axios";
import { message } from "antd";
import Navbar from "../components/HomeNavbar";
import back from "../assets/images/flag.png";
import profilePic from "../assets/images/kusal.png";
import flag from "../assets/images/backDrop.png";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaCamera, FaEdit,FaTrash } from 'react-icons/fa';

const AddPlayer = ({ isOpen, selection }) => {
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [isEditImage, setIsEditImage] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    dateOfBirth: "",
    email: "",
    battingStyle: "",
    bowlingStyle: "",
    playerRole: "",
    username: "",
    password: "",
    membership: {
      startDate:"",
      endDate:"",
    },
    contactNo: ""
  });

  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

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

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.dateOfBirth ||
      !formData.email ||
      !formData.password ||
      !formData.username ||
      !formData.playerRole
    ) {
      message.error("Missing required fields");
      return;
    } 

      try {
        let imageURL = formData.image;
      
      // Upload image if an image file is added
      if (formData.image instanceof File) {
        imageURL = await handleImageUpload(formData.image);
      }

      const playerData = {
        ...formData,
        image: imageURL, // Assign the uploaded image URL to formData
      };
        const response = await axios.post(
          "http://localhost:5000/api/auth/signupPlayer",
          playerData 
        );
        console.log("Form submitted succedded: ", response.data);
        message.success("Successfull!");
        setFormData({
          image: "",
          name: "",
          dateOfBirth: "",
          email: "",
          battingStyle: "",
          bowlingStyle: "",
          playerRole: "",
          username: "",
          password: "",
          membership: {
            startDate:"",
            endDate:"",
          },
          contactNo: ""
        });
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1500);
      } catch (error) {
        console.error("Error submitting form:", error);
        message.error("Failed!");
      }
    
  };

  const handleEditImageClick = () => {
    setIsEditImage(true);
  };
  const handleRemoveImage = () => {
    setImagePreview(null);
    setIsImageAdded(false);
    setIsEditImage(false);
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


  return (
    <div
      className={`h-full pb-20 text-white w-full`}
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Navbar />

      <div className="max-w-screen-full pt-10 p-20"></div>
        <div className=" flex relative w-full items-center justify-center px-20">
            <div className="  h-full relative  w-full lg:mx-3 lg:px-40 lg:pt-8 p-8 bg-white rounded-lg shadow-lg"
            style={{
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}>
            <h1 className='text-2xl font-bold text-[#480D35]'>Edit Player Profile</h1>    
            <div className="flex justify-center rounded-xl h-32 mt-2 items-end mb-6" 
                style={{
                    backgroundImage: `url(${back})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <div className='relative flex items-center justify-center top-5 rounded-full w-28 h-28 bg-white '>
                    {!isImageAdded?
                         <>
                         <input 
                          id="image"
                           type="file" 
                           name="image" 
                           accept="image/*" 
                           onChange={handleChange} 
                           className="absolute opacity-0 w-full h-full cursor-pointer" 
                           required
                         />
                         <div className='rounded-full p-2 bg-[#480D35]'>
                            <FaCamera className="text-2xl text-white cursor-pointer "  onClick={() => document.getElementById('image').click()}/>
                         </div>
                       </>
                         :imagePreview && (
                            <div className='relative w-full h-full flex items-center justify-center' >
                                <img 
                                src={imagePreview} 
                                alt="Image Preview" 
                                className=" w-24 h-24 rounded-full object-cover border border-gray-300" 
                                />
                                <input 
                                    id="image"
                                    type="file" 
                                    name="image" 
                                    accept="image/*" 
                                    onChange={handleChange} 
                                    className="absolute opacity-0 w-10 h-10 cursor-pointer" 
                                    //required
                                />{
                                    !isEditImage ?(
                                        <div className='absolute rounded-full p-2 bg-[#480D35] bottom-2 right-2'>
                                            <FaEdit className=" text-lg text-white  cursor-pointer " onClick={handleEditImageClick} />
                                        </div>        
                                    ):(
                                        <>
                                            <div className='absolute rounded-full p-2 bg-[#480D35] bottom-0 right-5'>
                                                <FaCamera
                                                    className=" text-lg text-white cursor-pointer"
                                                    onClick={() => document.getElementById('image').click()}
                                                />
                                            </div>
                                            <div className='absolute rounded-full p-2 bg-[#e62c2c] bottom-0 -right-4'>    
                                                <FaTrash
                                                    className=" text-lg text-white cursor-pointer"
                                                    onClick={handleRemoveImage}
                                                />
                                            </div>
                                        </>    
                                    )
                                }
                                 
                            </div> 
                         )
                    
                    }
                
                </div>
            </div>
{/* 
      <div className="max-w-screen-full pt-10 p-20" />
      <div className=" flex relative w-full items-center justify-center px-20"> */}
        <form>
          <h1 className="text-[#480D35] md:ml-32 text-lg font-bold">
            Personal information
          </h1>
          <div className="md:px-32 w-full grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10 ">
            <div className=" col-span-1">
              <div className="mb-2">
                <label className="block mb-1 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1 text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-2">
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
              <div className="mb-2">
                <label className="block mb-1 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-2">
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
              <div className="mb-2">
                <label className="block mb-1 text-gray-700">
                  Contact Number
                </label>
                <input
                  type="phone"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            <div className=" col-span-1">

              <div className="mb-2">
                <label className="block mb-1 text-gray-700">
                  Batting Style
                </label>
                <select
                  name="battingStyle"
                  value={formData.battingStyle}
                  onChange={handleChange}
                  className=" py-1 px-3 border border-gray-300 text-black rounded-lg w-full"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="battingOne">Left-hand batting</option>
                  <option value="battingTwo">Right-hand batting</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block mb-1 text-gray-700">
                  Bowling Style
                </label>
                <select
                  name="bowlingStyle"
                  value={formData.bowlingStyle}
                  onChange={handleChange}
                  className=" px-3 py-1 border text-black border-gray-300 rounded-lg w-full"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="spinOne">Left-arm spin</option>
                  <option value="spinTwo">Right-arm spin</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block mb-1 text-gray-700">Role</label>
                <select
                  name="playerRole"
                  value={formData.playerRole}
                  onChange={handleChange}
                  className=" px-3 py-1 border text-black border-gray-300 rounded-lg w-full"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="batsman">Batsman</option>
                  <option value="bowler">Bowler</option>
                  <option value="allRounder">All-rounder</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block mb-1 text-gray-700">
                  Membership Starting Date
                </label>
                <input
                  type="date"
                  name="membership.startDate"
                  value={formData.membership.startDate}
                  onChange={handleChange}
                  className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1 text-gray-700">
                  Membership Ending Date
                </label>
                <input
                  type="date"
                  name="membership.endDate"
                  value={formData.membership.endDate}
                  onChange={handleChange}
                  className=" w-full px-3 py-1 border text-black border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
          </div>

          <div className=" md:ml-32 col-span-2">
            <button
              type="submit"
              className="bg-[#480D35] text-white px-4 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddPlayer;