// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import flag from "../assets/images/backDrop3.png";
// import logo from "../assets/images/RLogo.png";
// import ball from "./../assets/images/CricketBall-unscreen.gif";
// import NavbarToggleMenu from "../components/NavbarToggleMenu";
// import { message, Alert, Button, Layout, Input } from "antd";
// import { storage } from "../config/firebaseConfig"; // Import Firebase storage
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime"; // To use time from now feature
// import NewsPreview from "../components/NewsPreview";
// import MainNavbarToggle from "../components/MainNavBarToggle";
// dayjs.extend(relativeTime);

// const NewsCreator = () => {
//   const [createdNews, setCreatedNews] = useState([]);
//   const [imageFiles, setImageFiles] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [imageURLs, setImageURLs] = useState([]);
//   const [isImageAdded, setIsImageAdded] = useState(false);
//   const [isEditPressed, setIsEditPressed] = useState(false);
//   const [isShowmorePressed, setIsShowmorePressed] = useState(false);
//   const [isViewPressed, setIsViewPressed] = useState(false);
//   const [keyViewPressed, setKeyViewPressed] = useState(null);
//   const [currentNewsId, setCurrentNewsId] = useState();
//   const [currentNews, setCurrentNews] = useState();
//   const [isEditImage, setIsEditImage] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isDeleted, setIsDeleted] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [newsToDelete, setNewsToDelete] = useState(null);
//   const [formData, setFormData] = useState({
//     heading: "",
//     author: "",
//     images: [],
//     body: "",
//     dateTime: "",
//   });
//   const API_URL = process.env.REACT_APP_API_URL;
//   const divRef = useRef(null);

//   useEffect(() => {
//     // Fetch player data for playerId 4
//     loadNews();
//   }, []);

//   const loadNews = async() => {
//     axios
//       .get(`${API_URL}news`)
//       .then((response) => {
//         const createdNews = response.data;
//         const sortedNews = createdNews.sort(
//           (a, b) => new Date(b.dateTime) - new Date(a.dateTime)
//         );
//         setCreatedNews(sortedNews);
//         console.log("Created News:", sortedNews);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the data!", error);
//       });
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     // if (files && files[0]) {
//     //   const file = files[0];
//     //   setImagePreview(URL.createObjectURL(file));
//     //   setFormData({
//     //     ...formData,
//     //     [name]: file,
//     //   });
//     //   setIsImageAdded(true);
//     if (files) {
//         const filesArray = Array.from(files); // Convert FileList to Array
//         setImageFiles(filesArray);
    
//         // Upload files and set URLs
//         console.log("imageUrls: ",imageFiles);
//         Promise.all(filesArray.map(file => handleImageUpload(file)))
//           .then(urls => {
//             setImagePreviews(prevURLs => [...prevURLs, ...urls]); // Store the URLs of the uploaded images
//             setFormData(prev => ({
//               ...prev,
//               images: [...prev.images, ...urls.map(url => ( {imageUrl: url}))], // Update formData with image URLs
//             }));
//             console.log("Urls: ",urls);
//           })
//           .catch(error => {
//             console.error("Error uploading images:", error);
//           });
//           console.log("image previews: ",imagePreviews);
//     }else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };



//   const validateFormEdit = () => {
//     const newErrors = {};

//     // Heading validation
//     if (formData.heading.length > 50) {
//       newErrors.heading = "Heading should be under 50 characters.";
//     };  

//     // Image URL validation
//     if (formData.imageUrl && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.imageUrl)) {
//       newErrors.imageUrl = "Invalid image URL. Must be a valid URL ending in jpg, jpeg, png, or gif.";
//     };

//     // Body validation
//     if (formData.body.length < 50) {
//       newErrors.body = "Body should be at least 50 characters.";
//     }

//     // DateTime validation
//     const selectedDate = new Date(formData.dateTime);
//     if (selectedDate >= new Date()) {
//       newErrors.dateTime = "Date and time must be in the past.";
//     }  
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }; 

//   const validateFormAdd = () => {
//     const newErrors = {};

//     // Heading validation
//     if (formData.heading.length > 50) {
//       newErrors.heading = "Heading should be under 50 characters.";
//     };  

//     // Image URL validation
//     // if (formData.imageUrl && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.imageUrl)) {
//     //   newErrors.imageUrl = "Invalid image URL. Must be a valid URL ending in jpg, jpeg, png, or gif.";
//     // };

//     // Body validation
//     if (formData.body.length < 50) {
//       newErrors.body = "Body should be at least 50 characters.";
//     }

//     // DateTime validation
//     const selectedDate = new Date(formData.dateTime);
//     if (selectedDate >= new Date()) {
//       newErrors.dateTime = "Date and time must be in the past.";
//     }  
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }; 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // if (!validateFormEdit()) {
//     //   message.error("Please fix validation errors before submitting");
//     //   return;
//     // };
//     setUploading(true);
//     try {
//       console.log("formdata1: ",formData.images[0]);
//       console.log("formdata2: ",formData.images[2]);
//       const createdNews = {
//         ...formData,
//         dateTime: formData.dateTime || new Date().getTime(),
//       };
//       console.log("images in formdata: ", formData);

//       const response = await axios.post(
//         `${API_URL}news`,
//         createdNews
//       );
//       console.log("Form submitted succedded: ", response.data);
//       message.success("News Creation Successfull!");
//       setFormData({
//         images: [],
//         author: "",
//         heading: "",
//         dateTime: "",
//         body: "",
//       });
//       setImagePreviews([]);
//       loadNews();
//       // setIsSubmitted(!isSubmitted);      
//       // setTimeout(() => {
//       //   window.location.reload();
//       // }, 1500);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       if (error.response && error.response.data && error.response.data.message) {
//         message.error(`Failed to submit: ${error.response.data.message}`);
//       } else {
//         message.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleImageUpload = (file) => {
//     return new Promise((resolve, reject) => {
//       const storageRef = ref(storage, `news/${file.name}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       setUploading(true);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {},
//         (error) => {
//           console.error("Image upload failed:", error);
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

//   const EditNews = (news) => {
//     console.log("newsId: ", news.id);
//     setCurrentNewsId(news.id);
//     setIsEditPressed(true);
//     setFormData({ ...news, images:news.images.map(image =>({ imageUrl: image}))} );
//     setImagePreviews((prevId) =>
//       prevId === news.images ? null : news.images
//     );
//   };

//   const handleEditCancel = () => {
//     setIsEditPressed(false);
//     setFormData({
//       images: [],
//       author: "",
//       heading: "",
//       dateTime: "",
//       body: "",
//     });
//     setImagePreviews([]);
//     setCurrentNewsId(null);
//   };

//   const handleNewsEdit = async (e) => {
//      e.preventDefault();
//     // if (!validateFormEdit()) {
//     //   message.error("Please fix validation errors before submitting");
//     //   return;
//     // };
//     setUploading(true);
//     try {
//       // let imageURL = formData.imageUrl;
//       // console.log("image1:", formData.imageUrl);
//       // Upload image if an image file is added
//       // if (formData.imageUrl instanceof File) {
//       //   imageURL = await handleImageUpload(formData.imageUrl);
//       // }
//       console.log("current:", formData);
//       const editedNewsData = {
//         ...formData,
//         dateTime: formData.dateTime || new Date().getTime(),
//       };
//       const response = await axios.put(
//         `${API_URL}news/${currentNewsId}`,
//         editedNewsData
//       );
//       console.log("Form submitted succedded: ", response.data);
//       message.success("Successfully Updated!");
//       setFormData({
//         images: [],
//         author: "",
//         heading: "",
//         dateTime: "",
//         body: "",
//       });
//       setImagePreviews([]);
//       setIsEditPressed(false);
//       setCurrentNewsId(null);
//       loadNews();
//       // setTimeout(() => {
//       //   window.location.reload();
//       // }, 1500);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       if (error.response && error.response.data && error.response.data.message) {
//         message.error(`Failed to submit: ${error.response.data.message}`);
//       } else {
//         message.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDelete = id => {
//     setNewsToDelete(id);
//     setShowDeleteModal(true); // Show confirmation modal
//   };

//   const confirmDelete = async () => {
//     setUploading(true);
//     try {
//       const deleteMatch = await axios.delete(
//         `${API_URL}news/${newsToDelete}`
//       );
//       message.success("Successfully Deleted!");
//       setShowDeleteModal(false);
//       loadNews();
//       // setTimeout(() => {
//       //   window.location.reload();
//       // }, 1500);
      
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       if (error.response && error.response.data && error.response.data.message) {
//         message.error(`Failed to submit: ${error.response.data.message}`);
//       } else {
//         message.error("An unexpected error occurred. Please try again later.");
//       }
//     } finally {
//       setUploading(false);
//     }
//   };

//   const toggleView = (news) => {
//     setCurrentNews(news);
//     setIsViewPressed(true);
//     setKeyViewPressed((prevId) => (prevId === news.id ? null : news.id));
//   };
//   const toggleShowmore = () => {
//     setIsShowmorePressed(!isShowmorePressed);
//   };
//   const handlePreviewClose = () => {
//     setIsViewPressed(false);
//   };

//   return (
//     <div className=" flex flex-col relative justify-center items-center bg-white">
//       <div className=" flex relative justify-center w-full items-stretch min-h-screen">
//         <div
//           className="lg:flex hidden justify-center items-center w-[12%] h-auto"
//           style={{
//             backgroundImage: `url(${flag})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <Navbar />
//         </div>
//         <div className="lg:w-[88%] w-full py-5 px-5 flex flex-col items-center justify-center h-auto">
//           <div className="flex justify-between w-full lg:px-10 py-3">
//             <Link to={"/member"}>
//               <img src={logo} className="h-12 w-12" />
//             </Link >
//             <MainNavbarToggle/>
//           </div>
//           <div
//             className=" lg:w-[95%] w-full bg-gray-200 lg:p-5 p-3 rounded-lg shadow-lg"
//             style={{
//               backdropFilter: "blur(10px)",
//               boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
//               border: "1px solid rgba(255, 255, 255, 0.3)",
//             }}
//           >
//             <div className="flex justify-between items-center content-center mb-3">
//               <NavbarToggleMenu />
//               <h2 className="md:text-2xl text-lg font-bold text-center font-popins text-[#480D35]">
//                 News Creator
//               </h2>
//             </div>
//             <div className={`${uploading? "opacity-80": "bg-opacity-100"} grid grid-flow-col-1 max-h-full lg:grid-cols-3 gap-5`}>
//               <div className=" lg:col-span-2 w-full col-start-1 row-start-2 lg:col-start-1 lg:row-start-1 bg-white rounded-lg">
//                 <form onSubmit={ isEditPressed ? handleNewsEdit : handleSubmit } className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 h-full w-full md:p-8 ">
                 
//                       <div className=" col-span-1">
//                         <label htmlFor="author" className="block text-black  text-sm font-semibold">Author</label>
//                         <input
//                           type="text"
//                           id="author"
//                           name="author"
//                           value={formData.author}
//                           onChange={handleChange}
//                           required
//                           placeholder="Enter Name"
//                           className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                         />
//                         {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
//                       </div>
//                       <div className=" col-span-1">
//                         <label htmlFor="dateTime" className="block text-black text-sm w-full font-semibold">Date</label>
//                         <input
//                           type="datetime-local"
//                           id="dateTime"
//                           name="dateTime"
//                           value={formData.dateTime}
//                           onChange={handleChange}
//                           placeholder="Date"
//                           className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                         />
//                         {errors.dateTime && <p className="text-red-500 text-xs mt-1">{errors.dateTime}</p>}
//                       </div>
//                     <div className="col-span-1 md:col-span-2">
//                       <label htmlFor="heading" className="block text-black text-sm font-semibold">Heading</label>
//                       <input
//                         type="text"
//                         id="heading"
//                         name="heading"
//                         value={formData.heading}
//                         onChange={handleChange}
//                         required
//                         placeholder="Enter Subject"
//                         className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                       />
//                       {errors.heading && <p className="text-red-500 text-xs mt-1">{errors.heading}</p>}
//                       </div>
//                       <div className="col-span-1 md:col-span-2">
//                       <label htmlFor="body" className="block text-black text-sm font-semibold">Content</label>
//                       <textarea
//                         type="Form"
//                         id="body"
//                         name="body"
//                         value={formData.body}
//                         onChange={handleChange}
//                         className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full h-32 px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                         placeholder="......"
//                         height="Auto"
//                         required
//                       />
//                       {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body}</p>}
//                       </div>
//                       <div className="col-span-1 md:col-span-2">
//                         <label htmlFor="imageUrl" className="block text-black text-sm font-semibold">Image</label>
//                         <input
//                           id="imageUrl"
//                           type="file"
//                           name="imageUrl"
//                           accept="image/*"
//                           onChange={handleChange}
//                           multiple
//                           // required
//                           className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                         />
//                           {imagePreviews.map((image,index)=>(
//                             <>
//                             <img
//                               key={index}
//                               src={image}
//                               alt="Preview"
//                               className="mt-4 w-full h-40 object-cover border border-gray-300"
//                           />
//                             <button className=" items-center justify-center text-red-500 hover:text-red-600 rounded-lg">
//                                 <FaTrash />
//                               </button>
//                             </>
//                           ))
//                         }
//                         {errors.imageUrl && <p className="text-red-500 text-xs mt-1">{errors.imageURL}</p>}
//                       </div>
//                       <div className="col-span-1 md:col-span-2 flex gap-2 justify-end">
//                         <button
//                           type="submit"
//                           className="bg-[#480D35] hover:bg-opacity-100 bg-opacity-90 py-2 px-3 rounded-md focus:bg-slate-600 focus:ring-4 focus:outline-none border-[2px] border-[white]  text-white font-semibold text-sm"
//                         >
//                           Save
//                         </button>
//                         {isEditPressed && (
//                           <button
//                             onClick={handleEditCancel}
//                             className="bg-gray-300 hover:bg-gray-400 py-2 text-end px-3 rounded-md focus:bg-slate-600 focus:ring-4 focus:outline-none border-[2px] border-[white]  text-white font-semibold text-sm"
//                           >
//                             {" "}
//                             Cancel
//                           </button>
//                         )}
//                       </div>
//                 </form>
//               </div>
//               <div className=" lg:col-span-1 rounded-lg border border-[#480D35] bg-white col-start-1 row-start-1 lg:col-start-3 lg:row-start-1 ">
//                 <div className="px-5 md:px-6 py-2 ">
//                   <h1 className="text-[#00175f] font-bold font-mono md:text-2xl text-lg py-3">
//                     Recent News
//                   </h1>

//                   <div
//                     className={`flex flex-col ${
//                       isShowmorePressed
//                         ? " hover:overflow-auto overflow-hidden"
//                         : " overflow-hidden"
//                     } h-96 `}
//                   >
//                     {createdNews &&
//                       createdNews.map((news) => (
//                         <React.Fragment key={news.id}>
//                           <div className="focus:bg-opacity-50 w-full rounded mb-1 shadow-md hover:bg-gray-50 ">
//                             <div className="flex items-center justify-start p-2 gap-2 bg-grey-200">
//                               <div className="flex rounded w-20 h-20 p-1">
//                                 <img
//                                   className="w-full h-full rounded-lg object-cover"
//                                   src={news.images[0]}
//                                 />
//                               </div>
//                               <div className="mr-2 py-2 w-full">
//                                 <h1 className="font-bold text-[black] text-base">
//                                   {news.heading}
//                                 </h1>
//                                 <p className="text-black text-xs text-justify">
//                                   {news.body.slice(0, 100)}...
//                                 </p>
//                                 <div className=" mt-3 flex justify-between text-xxs">
//                                   <p className="text-gray-600 ">
//                                     {dayjs(news.dateTime).format("YYYY-MMM-DD")}
//                                   </p>
//                                   <p className="text-gray-600 before:content-['•'] before:mx-2">
//                                     {dayjs(news.dateTime).fromNow()}
//                                   </p>
//                                   <p className="text-gray-600 before:content-['•'] before:mx-2">
//                                     {news.author}
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="flex justify-end gap-3 text-[#00175f] p-1">
//                               <button onClick={() => toggleView(news)} className=" items-center justify-center text-blue-500 hover:text-blue-600 rounded-lg">
//                                 {<FaEye />}
//                               </button>
//                               <button onClick={() => EditNews(news)} className="flex items-center justify-center text-green-500 hover:text-green-600 rounded-lg">
//                                 <FaEdit />
//                               </button>
//                               <button onClick={() => handleDelete(news.id)} className=" items-center justify-center text-red-500 hover:text-red-600 rounded-lg">
//                                 <FaTrash />
//                               </button>
//                             </div>
//                           </div>
//                         </React.Fragment>
//                       ))}
//                   </div>
//                   <div className="my-3">
//                     <button
//                       type="button"
//                       onClick={toggleShowmore}
//                       className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
//                     >
//                       {!isShowmorePressed ? "Show More" : "Show Less"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showDeleteModal && (
//           <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-75">
//             <div className={`${uploading? "opacity-80": "bg-opacity-100"} bg-white rounded-lg shadow-lg p-6`}>
//               <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
//               <p>Are you sure you want to delete this news?</p>
//               <div className="flex justify-end mt-4 space-x-4">
//                 <button
//                   onClick={() => setShowDeleteModal(false)}
//                   className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={confirmDelete}
//                   className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       {isViewPressed && (
//         <NewsPreview onClose={handlePreviewClose} news={currentNews} />
//       )}
//       {uploading && (
//         <div className="absolute items-center justify-center my-4">
//           <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
//         </div>
//         )}
//     </div>
//   );
// };
// export default NewsCreator;



import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import flag from "../assets/images/backDrop3.png";
import logo from "../assets/images/RLogo.png";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import NavbarToggleMenu from "../components/NavbarToggleMenu";
import { message, Alert, Button, Layout, Input } from "antd";
import { storage } from "../config/firebaseConfig"; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // To use time from now feature
import NewsPreview from "../components/NewsPreview";
import MainNavbarToggle from "../components/MainNavBarToggle";
dayjs.extend(relativeTime);

const NewsCreator = () => {
  const [createdNews, setCreatedNews] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [isEditPressed, setIsEditPressed] = useState(false);
  const [isShowmorePressed, setIsShowmorePressed] = useState(false);
  const [isViewPressed, setIsViewPressed] = useState(false);
  const [keyViewPressed, setKeyViewPressed] = useState(null);
  const [currentNewsId, setCurrentNewsId] = useState();
  const [currentNews, setCurrentNews] = useState();
  const [isEditImage, setIsEditImage] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [newsToDelete, setNewsToDelete] = useState(null);
  const [existingImageURLs, setExistingImageURLs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    heading: "",
    author: "",
    images: [],
    body: "",
    dateTime: "",
    createdBy:"",
    createdOn: "",
    updatedBy:"",
    updatedOn: "",
  });
  const API_URL = process.env.REACT_APP_API_URL;
  const divRef = useRef(null);
  console.log("logged user in news: ", user);

  useEffect(() => {
    // Fetch player data for playerId 4
    loadNews();
  }, []);

  const loadNews = async() => {
    axios
      .get(`${API_URL}news`)
      .then((response) => {
        const createdNews = response.data;
        const sortedNews = createdNews.sort(
          (a, b) => new Date(b.dateTime) - new Date(a.dateTime)
        );
        setCreatedNews(sortedNews);
        console.log("Created News:", sortedNews);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // if (files && files[0]) {
    //   const file = files[0];
    //   setImagePreview(URL.createObjectURL(file));
    //   setFormData({
    //     ...formData,
    //     [name]: file,
    //   });
    //   setIsImageAdded(true);
    if (files) {
      const selectedFiles = Array.from(e.target.files);
      const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
      setImageFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
      setImagePreviews((prevPreviews) => [...prevPreviews, ...previewUrls]);
    }else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleImageRemove = (index) => {
    console.log("index removed: ", index);
  
    if (index < existingImageURLs.length) {
      // Removing an existing image (this is from the 'existingImageURLs' and 'formData.images')
      const updatedExistingImages = existingImageURLs.filter((_, i) => i !== index);
      const updatedFormDataImages = formData.images.filter((_, i) => i !== index);
  
      // Update state for existing images
      setExistingImageURLs(updatedExistingImages);
      setFormData({ ...formData, images: updatedFormDataImages });
  
      // Log to check
      console.log("Updated formData after removing existing image: ", formData);
      console.log("Updated existingImageURLs after removing existing image: ", updatedExistingImages);
  
    } else {
      // Removing a newly added image
      const newIndex = index - existingImageURLs.length;  // Adjust index for new images
      // setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== newIndex));
      const updatedImageFiles = imageFiles.filter((_, i) => i !== newIndex);
      setImageFiles(updatedImageFiles);
      
    }
  
    // Update previews for both new and existing images
    const updatedImagePreviews = imagePreviews.filter((_, i) => i !== index);
    setImagePreviews(updatedImagePreviews);

    // Log to confirm changes
    console.log("Updated existingImageURLs:", existingImageURLs);
    console.log("Updated imageFiles:", imageFiles);
    console.log("Updated imagePreviews:", imagePreviews);
  };
  
  const validateFormEdit = () => {
    const newErrors = {};

    // Heading validation
    if (formData.heading.length > 50) {
      newErrors.heading = "Heading should be under 50 characters.";
    };  

    // Image URL validation
    if (formData.imageUrl && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.imageUrl)) {
      newErrors.imageUrl = "Invalid image URL. Must be a valid URL ending in jpg, jpeg, png, or gif.";
    };

    // Body validation
    if (formData.body.length < 50) {
      newErrors.body = "Body should be at least 50 characters.";
    }

    // DateTime validation
    // const selectedDate = new Date(formData.dateTime);
    // if (selectedDate >= new Date()) {
    //   newErrors.dateTime = "Date and time must be in the past.";
    // }  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }; 

  const validateFormAdd = () => {
    const newErrors = {};

    // Heading validation
    if (formData.heading.length > 50) {
      newErrors.heading = "Heading should be under 50 characters.";
    };  

    // Image URL validation
    // if (formData.imageUrl && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.imageUrl)) {
    //   newErrors.imageUrl = "Invalid image URL. Must be a valid URL ending in jpg, jpeg, png, or gif.";
    // };

    // Body validation
    if (formData.body.length < 50) {
      newErrors.body = "Body should be at least 50 characters.";
    }

    // DateTime validation
    const selectedDate = new Date(formData.dateTime);
    if (selectedDate >= new Date()) {
      newErrors.dateTime = "Date and time must be in the past.";
    }  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFormEdit()) {
      message.error("Please fix validation errors before submitting");
      return;
    };
    setUploading(true);
    try {
      console.log("formdata1: ",formData.images[0]);
      console.log("formdata2: ",formData.images[2]);
      const urls = await uploadImagesToFirebase();
      const createdNews = {
        ...formData,
        images: urls.map((url) => ({ imageUrl: url })),
        dateTime: new Date().toISOString(),
        createdBy: user.username,
        createdOn: new Date().toISOString()
      };
      console.log("images in formdata: ", formData);

      const response = await axios.post(
        `${API_URL}news`,
        createdNews
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("News Creation Successfull!");
      setFormData({
        images: [],
        author: "",
        heading: "",
        dateTime: "",
        body: "",
        createdBy:"",
        createdOn: "",
        updatedBy: "",
        updatedOn: "",
      });
      setImagePreviews([]);
      loadNews();
      // setIsSubmitted(!isSubmitted);      
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

  const EditNews = (news) => {
    console.log("newsId: ", news.id);
    setCurrentNewsId(news.id);
    setIsEditPressed(true);
    setFormData({ ...news, images:news.images.map(image =>({ imageUrl: image}))} );
    setImagePreviews((prevId) =>
      prevId === news.images ? null : news.images
    );
    setExistingImageURLs((prevId) =>
      prevId === news.images ? null : news.images);
    //setImagePreviews(news.images.map((img) => img.imageUrl));
    setImageFiles([]); 
  };

  const handleEditCancel = () => {
    setIsEditPressed(false);
    setFormData({
      images: [],
      author: "",
      heading: "",
      dateTime: "",
      body: "",
      createdBy:"",
      createdOn: "",
      updatedBy: "",
      updatedOn: "",
    });
    setImagePreviews([]);
    setCurrentNewsId(null);
  };

  const handleNewsEdit = async (e) => {
     e.preventDefault();
    if (!validateFormEdit()) {
      message.error("Please fix validation errors before submitting");
      return;
    };
    setUploading(true);
    try {
      // let imageURL = formData.imageUrl;
      // console.log("image1:", formData.imageUrl);
      // Upload image if an image file is added
      // if (formData.imageUrl instanceof File) {
      //   imageURL = await handleImageUpload(formData.imageUrl);
      // }
      const existingImageUrls = formData.images
      ? formData.images.map((img) => img.imageUrl)
      : [];

    // Upload new images, if any
    const uploadedUrls = await uploadImagesToFirebase();
    
    // Merge existing URLs with newly uploaded ones
    const allImageUrls = [...existingImageUrls, ...uploadedUrls];
      
      const editedNewsData = {
        ...formData,
       
        images:  allImageUrls.map((url) => ({ imageUrl: url })),
        dateTime: new Date().toISOString(),
        updatedBy: user.username,
        updatedOn: new Date().toISOString()
      };
      
      const response = await axios.put(
        `${API_URL}news/${currentNewsId}`,
        editedNewsData
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfully Updated!");
      setFormData({
        images: [],
        author: "",
        heading: "",
        dateTime: "",
        body: "",
        createdBy:"",
        createdOn: "",
        updatedBy: "",
        updatedOn: "",
      });
      setImagePreviews([]);
      setIsEditPressed(false);
      setCurrentNewsId(null);
      loadNews();
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

  const uploadImagesToFirebase = () => {
    return Promise.all(
      imageFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const storageRef = ref(storage, `news/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on(
            "state_changed",
            () => {},
            (error) => reject(error),
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then(resolve).catch(reject);
            }
          );
        });
      })
    );
  };

  const handleDelete = id => {
    setNewsToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    setUploading(true);
    try {
      const deleteMatch = await axios.delete(
        `${API_URL}news/${newsToDelete}`
      );
      message.success("Successfully Deleted!");
      setShowDeleteModal(false);
      loadNews();
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

  const toggleView = (news) => {
    setCurrentNews(news);
    setIsViewPressed(true);
    setKeyViewPressed((prevId) => (prevId === news.id ? null : news.id));
  };
  const toggleShowmore = () => {
    setIsShowmorePressed(!isShowmorePressed);
  };
  const handlePreviewClose = () => {
    setIsViewPressed(false);
  };

  return (
    <div className=" flex flex-col relative justify-center items-center bg-white">
      <div className=" flex relative justify-center w-full items-stretch min-h-screen">
        <div
          className="lg:flex hidden fixed left-0 justify-center items-center w-[12%] h-screen"
          style={{
            backgroundImage: `url(${flag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navbar />
        </div>
        <div className="w-full flex px-5 lg:px-0 ">
        <div className="lg:w-[12%] w-0 "></div>
        <div className="lg:w-[88%] w-full md:py-5 flex flex-col items-center justify-center ">
          <div className="flex justify-between w-full lg:px-10 pt-3">
            <Link to={"/member"}>
              <img src={logo} className="h-12 w-12" />
            </Link >
            <MainNavbarToggle/>
          </div>
          <div
            className=" lg:w-[95%] w-full bg-gray-200 lg:p-5 p-3 rounded-lg shadow-lg"
            style={{
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <div className="flex justify-between items-center content-center mb-3">
              <NavbarToggleMenu />
              <h2 className="md:text-2xl text-lg font-bold text-center font-popins text-[#480D35]">
                News Creator
              </h2>
            </div>
            <div className={`${uploading? "opacity-80": "bg-opacity-100"} grid grid-flow-col-1 lg:grid-cols-3 gap-5`}>
              <div className=" lg:col-span-2 w-full col-start-1 row-start-2 lg:col-start-1 lg:row-start-1 bg-white rounded-lg">
                <form onSubmit={ isEditPressed ? handleNewsEdit : handleSubmit } className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 w-full md:p-8 ">
                 
                      <div className=" col-span-1">
                        <label htmlFor="author" className="block text-black  text-sm font-semibold">Author</label>
                        <input
                          type="text"
                          id="author"
                          name="author"
                          value={formData.author}
                          onChange={handleChange}
                          required
                          placeholder="Enter Name"
                          className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                        />
                        {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
                      </div>
                      {/* <div className=" col-span-1">
                        <label htmlFor="dateTime" className="block text-black text-sm w-full font-semibold">Date</label>
                        <input
                          type="datetime-local"
                          id="dateTime"
                          name="dateTime"
                          value={formData.dateTime}
                          onChange={handleChange}
                          placeholder="Date"
                          className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                        />
                        {errors.dateTime && <p className="text-red-500 text-xs mt-1">{errors.dateTime}</p>}
                      </div> */}
                    <div className="col-span-1 md:col-span-2">
                      <label htmlFor="heading" className="block text-black text-sm font-semibold">Heading</label>
                      <input
                        type="text"
                        id="heading"
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                        required
                        placeholder="Enter Subject"
                        className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                      />
                      {errors.heading && <p className="text-red-500 text-xs mt-1">{errors.heading}</p>}
                      </div>
                      <div className="col-span-1 md:col-span-2">
                      <label htmlFor="body" className="block text-black text-sm font-semibold">Content</label>
                      <textarea
                        type="Form"
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        className="bg-gray-50 border custom-scrollbar border-gray-300 text-gray-600 text-sm rounded-md block w-full h-32 px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                        placeholder="......"
                        height="Auto"
                        required
                      />
                      {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body}</p>}
                      </div>
                      <div className="col-span-1 md:col-span-2">
                        <label htmlFor="imageUrl" className="block text-black text-sm font-semibold">Image</label>
                        <input
                          id="imageUrl"
                          type="file"
                          name="imageUrl"
                          accept="image/*"
                          onChange={handleChange}
                          multiple
                          required
                          className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                        />
                          {imagePreviews.map((image,index)=>(
                            <div className="flex flex-col relative">
                            <img
                              key={index}
                              src={image}
                              alt="Preview"
                              className="mt-4 w-full max-h-[40vh] object-contain border border-gray-300"
                          />
                             <button
                              type="button"
                              title="Remove"
                              onClick={() => handleImageRemove(index)}
                              className="right-0 absolute bottom-0 self-end p-2 justify-end items-end text-[red]"
                            >
                              <FaTrash />
                            </button>
                            </div>
                          ))
                        }
                        {errors.imageUrl && <p className="text-red-500 text-xs mt-1">{errors.imageURL}</p>}
                      </div>
                      <div className="col-span-1 md:col-span-2 flex gap-2 justify-end">
                        <button
                          type="submit"
                          className="bg-[#480D35] hover:bg-opacity-100 bg-opacity-90 py-2 px-3 rounded-md focus:bg-slate-600 focus:ring-4 focus:outline-none border-[2px] border-[white]  text-white font-semibold text-sm"
                        >
                          Save
                        </button>
                        {isEditPressed && (
                          <button
                            onClick={handleEditCancel}
                            className="bg-gray-400 hover:bg-opacity-100 bg-opacity-90 py-2 text-end px-3 rounded-md focus:bg-slate-500 focus:ring-4 focus:outline-none border-[2px] border-[white]  text-white font-semibold text-sm"
                          >
                            {" "}
                            Cancel
                          </button>
                        )}
                      </div>
                </form>
              </div>
              <div className=" lg:col-span-1 rounded-lg border border-[#480D35] bg-white col-start-1 row-start-1 lg:col-start-3 lg:row-start-1 ">
                <div className="px-5 md:px-6 py-2 ">
                  <h1 className="text-[#00175f] font-bold font-mono md:text-2xl text-lg py-3">
                    Recent News
                  </h1>

                  <div
                    className={`flex flex-col custom-scrollbar h-[60vh] ${
                      isShowmorePressed
                        ? " hover:overflow-auto overflow-hidden"
                        : " overflow-hidden"
                    } `}
                  >
                    {createdNews &&
                      createdNews.map((news) => (
                        <React.Fragment key={news.id}>
                          <div className="focus:bg-opacity-50 w-full rounded mb-1 shadow-md hover:bg-gray-50 ">
                            <div className="flex items-center justify-start p-2 gap-2 bg-grey-200">
                              <div className="flex rounded w-20 h-20 p-1">
                                <img
                                  className="w-full h-full rounded-lg object-cover"
                                  src={news.images[0]}
                                />
                              </div>
                              <div className="mr-2 py-2 w-full">
                                <h1 className="font-bold text-[black] text-base">
                                  {news.heading}
                                </h1>
                                <p className="text-black text-xs text-justify">
                                  {news.body.slice(0, 100)}...
                                </p>
                                <div className=" mt-3 flex justify-between text-xxs">
                                  <p className="text-gray-600 ">
                                    {dayjs(news.dateTime).format("YYYY-MMM-DD")}
                                  </p>
                                  <p className="text-gray-600 before:content-['•'] before:mx-2">
                                    {dayjs(news.dateTime).fromNow()}
                                  </p>
                                  <p className="text-gray-600 before:content-['•'] before:mx-2">
                                    {news.author}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end space-x-2 text-[#00175f] p-1">
                              <button onClick={() => toggleView(news)} className=" items-center justify-center text-blue-500 hover:text-blue-600 rounded-lg">
                                {<FaEye />}
                              </button>
                              <button onClick={() => EditNews(news)} className="flex items-center justify-center text-green-500 hover:text-green-600 rounded-lg">
                                <FaEdit />
                              </button>
                              <button onClick={() => handleDelete(news.id)} className=" items-center justify-center text-red-500 hover:text-red-600 rounded-lg">
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                  <div className="my-3">
                    <button
                      type="button"
                      onClick={toggleShowmore}
                      className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
                    >
                      {!isShowmorePressed ? "Show More" : "Show Less"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {showDeleteModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-75">
            <div className={`${uploading? "opacity-80": "bg-opacity-100"} bg-white rounded-lg shadow-lg p-6`}>
              <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
              <p>Are you sure you want to delete this news?</p>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      {isViewPressed && (
        <NewsPreview onClose={handlePreviewClose} news={currentNews} />
      )}
      {uploading && (
        <div className="absolute items-center justify-center my-4">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
        )}
    </div>
  );
};
export default NewsCreator;
