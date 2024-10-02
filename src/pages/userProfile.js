// import React, { useState } from 'react';
// import HomeNavbar from '../components/HomeNavbar';
// import Navbar from '../components/Navbar';
// import flag from "../assets/images/flagbg.png";
// import profilePic from "../assets/images/kusal.png"
// import { FaCamera } from 'react-icons/fa';

// const PlayerProfile = ({ isOpen, onClose, onSubmit }) => {
//   const [isImageAdded, setIsImageAdded] = useState(false);
//   const [formData, setFormData] = useState({
//     image:'',
//     firstName: '',
//     lastName: '',
//     age: '',
//     email: '',
//     level: '',
//     phone:''
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     // Here you should handle file upload to the server
//     console.log('Form Data:', formData);
//     onClose();
//   };

//   return (
//     <div
//         className="h-screen w-screen"
//         style={{
//         backgroundImage: `url(${flag})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center"
//         }}
//         >
//             <HomeNavbar/>
//         <div className=" flex relative top-24 p-2 w-full">
//             <div className="lg:w-[5%]">
//                 <Navbar/>
//             </div>
//             <div
//                 className="  h-full relative bg-gray-100 lg:w-[95%] b- w-[100%] lg:mx-3 lg:px-20 lg:pt-10 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-lg"
//                 style={{
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//                 border: "1px solid rgba(255, 255, 255, 0.3)"
//             }}
//             >
//             <h1 className='text-2xl font-bold text-[#802F3B]'>Edit Your Profile</h1>
//             <div className="flex justify-center pt-5 bg-[#802F3B] rounded-xl h-32 items-end mb-6">
//                 <div className='relative flex items-center justify-center top-5 rounded-full w-28 h-28 bg-white '>
//                     {!isImageAdded?
//                          <>
//                          <input
//                            type="file"
//                            name="image"
//                            accept="image/*"
//                            onChange={handleChange}
//                            className="absolute opacity-0 w-full h-full cursor-pointer"
//                            required
//                          />
//                          <FaCamera className="text-4xl text-gray-600 cursor-pointer" />
//                        </>
//                          :imagePreview &&
//                          <div className='w-full h-full flex items-center justify-center' >
//                             <img
//                             src={imagePreview}
//                             alt="Image Preview"
//                             className=" w-24 h-24 rounded-full object-cover border border-gray-300"
//                             />
//                             <>
//                                 <input
//                                     type="file"
//                                     name="image"
//                                     accept="image/*"
//                                     onChange={handleChange}
//                                     className="absolute opacity-0 w-10 h-10 cursor-pointer"
//                                     required
//                                 />
//                             </>
//                         </div>

//                     }

//                     {/* <img src={profilePic} alt='' className='bg-cover w-24 h-24 rounded-full'/> */}
//                 </div>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <h1 className='text-xl font-bold text-[#802F3B]'>Personal Information</h1>
//                 <div className="grid grid-cols-2 gap-6">
//                     <div>
//                         <label className="block mb-2 text-gray-700">First Name</label>
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-gray-700">Second Name</label>
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={formData.secondName}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-gray-700">Age</label>
//                         <input
//                             type="text"
//                             name="age"
//                             value={formData.age}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-gray-700">Access Level</label>
//                         <input
//                             type="text"
//                             name="level"
//                             value={formData.level}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-gray-700">Email Address</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.age}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-gray-700">Phone</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             value={formData.level}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                 </div>
//                 <div className="mt-6 flex justify-center items-center">
//                         <button
//                         type="button"
//                         onClick={onClose}
//                         className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-4"
//                         >
//                         Cancel
//                         </button>
//                         <button
//                         type="submit"
//                         className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//                         >
//                         Save
//                         </button>
//                     </div>
//             </form>
//         </div>

//     </div>

//         </div>
//   );
// };

// export default PlayerProfile;

///////////////////////////////////////////////


import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Navbar from '../components/Navbar';
import flag from "../assets/images/flagbg.png";
import { FaCamera } from 'react-icons/fa';
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities

const AddPlayer = ({ isOpen, onClose, onSubmit }) => {
    const [isImageAdded, setIsImageAdded] = useState(false);
    const [formData, setFormData] = useState({
      image: '',
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      level: '',
      phone: ''
    });
  
    const [imagePreview, setImagePreview] = useState('');
    const [uploading, setUploading] = useState(false);
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
  
      if (name === 'image') {
        if (files && files[0]) {
          const file = files[0];
          setImagePreview(URL.createObjectURL(file));
          setFormData({
            ...formData,
            [name]: file
          });
          setIsImageAdded(true);
        }
      } else {
        setFormData({
          ...formData,
          [name]: value
        });
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
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Ensure image upload is handled here
      let imageUrl = '';
      if (formData.image) {
        try {
          imageUrl = await handleImageUpload(formData.image);
          console.log('Image uploaded successfully:', imageUrl);
        } catch (error) {
          console.error('Image upload error:', error);
        }
      }
  
      const finalFormData = {
        ...formData,
        image: imageUrl
      };
  
      if (typeof onSubmit === 'function') {
        onSubmit(finalFormData);
      } else {
        console.error('onSubmit prop is not a function');
      }
  
      
    };
  
    return (
      <div
        className="h-screen w-screen"
        style={{
          backgroundImage: `url(${flag})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <HomeNavbar />
        <div className="flex relative top-24 p-2 w-full">
          <div className="lg:w-[5%]">
            <Navbar />
          </div>
          <div
            className="h-full relative bg-gray-100 lg:w-[95%] w-[100%] lg:mx-3 lg:px-20 lg:pt-10 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-lg"
            style={{
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            <h1 className="text-2xl font-bold text-[#802F3B]">Edit Player Profile</h1>
            <div className="flex justify-center pt-5 bg-[#802F3B] rounded-xl h-32 items-end mb-6">
              <div className="relative flex items-center justify-center top-5 rounded-full w-28 h-28 bg-white">
                {!isImageAdded ? (
                  <>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                      className="absolute opacity-0 w-full h-full cursor-pointer"
                      required
                    />
                    <FaCamera className="text-4xl text-gray-600 cursor-pointer" />
                  </>
                ) : (
                  imagePreview && (
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={imagePreview}
                        alt="Image Preview"
                        className="w-24 h-24 rounded-full object-cover border border-gray-300"
                      />
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="absolute opacity-0 w-10 h-10 cursor-pointer"
                        required
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <h1 className="text-xl font-bold text-[#802F3B]">Personal Information</h1>
              <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 text-gray-700">Name</label>
                        <input
                            type="text"
                            name="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            name="lastName"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Age</label>
                        <input
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Contact Number</label>
                        <input
                            type="phone"
                            name="contactNumber"
                            value={formData.contctNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-2 text-gray-700">Batting Style</label>
                        <select 
                            name="battingStyle" 
                            value={formData.battingStyle} 
                            onChange={handleChange} 
                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="battingOne">Left-hand batting</option>
                            <option value="battingTwo">Right-hand batting</option>
                        </select>
                        
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Bowling Style</label>
                        <select 
                            name="bowlingStyle" 
                            value={formData.bowlingStyle} 
                            onChange={handleChange} 
                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="spinOne">Left-arm spin</option>
                            <option value="spinTwo">Right-arm spin</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Role</label>
                        <select 
                            name="role" 
                            value={formData.role} 
                            onChange={handleChange} 
                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="batsman">Batsman</option>
                            <option value="bowler">Bowler</option>
                            <option value="allRounder">All-rounder</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6 flex justify-center items-center">
                        <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-4"
                        >
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
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
  
