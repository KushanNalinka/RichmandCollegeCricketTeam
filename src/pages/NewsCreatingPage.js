
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
// import { GiClick } from "react-icons/gi";

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
//   const [existingImageURLs, setExistingImageURLs] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const fileInputRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [formData, setFormData] = useState({
//     heading: "",
//     author: "",
//     images: [],
//     body: "",
//     createdBy:"",
//     createdOn: "",
//     updatedBy:"",
//     updatedOn: "",
//   });
//   const API_URL = process.env.REACT_APP_API_URL;
//   const divRef = useRef(null);
//   console.log("logged user in news: ", user);

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
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: ""
//     }));
//     if (files) {

//       const selectedFiles = Array.from(e.target.files);
//       const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
//       setImageFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
//       setImagePreviews((prevPreviews) => [...prevPreviews, ...previewUrls]);
//     }else {

//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleImageRemove = (index) => {
//     console.log("index removed: ", index);
//     console.log("existing image urls: ", existingImageURLs);
//     if (index < existingImageURLs.length) {
//       // Removing an existing image (this is from the 'existingImageURLs' and 'formData.images')
//       const updatedExistingImages = existingImageURLs.filter((_, i) => i !== index);
//       // const updatedFormDataImages = formData.images.filter((_, i) => i !== index);
  
//       // Update state for existing images
//       setExistingImageURLs(updatedExistingImages);
//       // setFormData({ ...formData, images: updatedFormDataImages });
  
//       // Log to check
//       console.log("Updated formData after removing existing image: ", formData);
//       console.log("Updated existingImageURLs after removing existing image: ", updatedExistingImages);
  
//     } 
    
//     // Removing a newly added image
//     const newIndex = index - existingImageURLs.length;  // Adjust index for new images
//     // setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== newIndex));
//     const updatedImageFiles = imageFiles.filter((_, i) => i !== newIndex);
//     setImageFiles(updatedImageFiles);

//     // Update previews for both new and existing images
//     const updatedImagePreviews = imagePreviews.filter((_, i) => i !== index);
//     setImagePreviews(updatedImagePreviews);

//     // Log to confirm changes
//     console.log("Updated existingImageURLs:", existingImageURLs);
//     console.log("Updated imageFiles:", imageFiles);
//     console.log("Updated imagePreviews:", imagePreviews);
//   };

//   const validateFormAdd = () => {
//     const newErrors = {};

//     // Heading validation
//     if (formData.heading.length > 100) {
//       newErrors.heading = "Heading should be under 100 characters.";
//     };  

//     // Image URL validation
//     if (formData.imageUrl && !/^http?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.imageUrl)) {
//       newErrors.imageUrl = "Invalid image URL. Must be a valid URL ending in jpg, jpeg, png, or gif.";
//     };
//     if (imagePreviews.length === 0 && imageFiles.length === 0) {
//       newErrors.imageUrl = "At least one image is required.";
//     }

//     // Body validation
//     if (formData.body.length < 50) {
//       newErrors.body = "Body should be at least 50 characters.";
//     };

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
  
//   const validateFormEdit = () => {
//     const newErrors = {};

//     // Heading validation
//     if (formData.heading.length > 100) {
//       newErrors.heading = "Heading should be under 100 characters.";
//     };  

//     // Image URL validation
//     if (formData.imageUrl && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.imageUrl)) {
//       newErrors.imageUrl = "Invalid image URL. Must be a valid URL ending in jpg, jpeg, png, or gif.";
//     };
//     if (existingImageURLs.length === 0 && imageFiles.length === 0) {
//       newErrors.imageUrl = "At least one image is required.";
//     }

//     // Body validation
//     if (formData.body.length < 50) {
//       newErrors.body = "Body should be at least 50 characters.";
//     }

//     // DateTime validation
//     // const selectedDate = new Date(formData.dateTime);
//     // if (selectedDate >= new Date()) {
//     //   newErrors.dateTime = "Date and time must be in the past.";
//     // }  
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateFormAdd()) {
//       message.error("Please fix validation errors before submitting");
//       return;
//     };

//     const currentTime = new Date();
//     const formattedDateTime = currentTime.toISOString(); 
//     setUploading(true);
//     console.log("data before submit: ", formData);
//     try {
//       console.log("formdata1: ",formData.images[0]);
//       console.log("formdata2: ",formData.images[2]);
//       // const urls = await uploadImagesToFirebase();
//       // const createdNews = {
//       //   ...formData,
//       //   images: urls.map((url) => ({ imageUrl: url })),
//       //   dateTime: currentTime,
//       //   createdBy: user.username,
//       //   createdOn: currentTime
//       // };

//       setFormData(prevData => ({
//         ...prevData,
//         images:imageFiles,
//         createdBy: user.username,
//         createdOn: currentTime.toLocaleDateString
//       }));

//       const formDataToSend = new FormData();
//       const { images, ...newsData } = formData;

//       // Append userData as a JSON string
//       formDataToSend.append("newsData", JSON.stringify(newsData));

//       // Append image file
//       //formDataToSend.append("images", images);
//       imageFiles.forEach((file) => {
//         formDataToSend.append("images", file);
//       });

//       // console.log("formdata before submit: ", createdNews);

//       const response = await axios.post(
//         `${API_URL}news/create`,
//         formDataToSend,
//         {
//           headers: {
//               "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("Form submitted succedded: ", response.data);
//       message.success("News Creation Successfull!");
//       setFormData({
//         images: [],
//         author: "",
//         heading: "",
//         body: "",
//         createdBy:"",
//         createdOn: "",
//         updatedBy: "",
//         updatedOn: "",
//       });
//       setImagePreviews([]);
//       setImageFiles([]);
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

//   const EditNews = (news) => {
//     console.log("newsId: ", news.id);
//     setCurrentNewsId(news.id);
//     setIsEditPressed(true);

//     setFormData({ 
//       author: news.author,
//       heading: news.heading,
//       body: news.body,
//       createdBy: news.createdBy,
//       createdOn: news.createdOn,
//       images:news.imageUrls.map(image =>({ imageUrl: image}))} 
//     );
    
//     setImagePreviews((prevId) =>
//       prevId === news.imageUrls ? null : news.imageUrls

//     );
//     setExistingImageURLs((prevId) =>
//       prevId === news.imageUrls ? null : news.imageUrls);
//     //setImagePreviews(news.images.map((img) => img.imageUrl));
//     setImageFiles([]); 
//   };

//   const handleEditCancel = () => {
//     setIsEditPressed(false);
//     setFormData({
//       images: [],
//       author: "",
//       heading: "",
//       body: "",
//       createdBy:"",
//       createdOn: "",
//       updatedBy: "",
//       updatedOn: "",
//     });
//     setImagePreviews([]);
//     setCurrentNewsId(null);
//   };

//   const handleNewsEdit = async (e) => {
//      e.preventDefault();
//     if (!validateFormEdit()) {
//       message.error("Please fix validation errors before submitting");
//       return;
//     };
//     const currentTime = new Date().toLocaleString;
//     setUploading(true);
//     console.log("Data before edit submit :", formData);
//     try {
//       // let imageURL = formData.imageUrl;
//       // console.log("image1:", formData.imageUrl);
//       // Upload image if an image file is added
//       // if (formData.imageUrl instanceof File) {
//       //   imageURL = await handleImageUpload(formData.imageUrl);
//       // }
//       const existingImageUrls = formData.images
//       ? formData.images.map((img) => img.imageUrl)
//       : [];

//     // Upload new images, if any
//     // const uploadedUrls = await uploadImagesToFirebase();
    
//     // Merge existing URLs with newly uploaded ones
//     // const allImageUrls = [...existingImageUrls, ...imagePreviews];
//     const allImageUrls = [...existingImageUrls, ...imagePreviews];
      
//       setFormData({
//         ...formData,
//         images:  allImageUrls.map((url) => ({ imageUrl: url })),
//         updatedBy: user.username,
//         updatedOn: currentTime
//       });

//       const formDataToSend = new FormData();

//       const { images, ...newsData } = formData;

//       // Append userData as a JSON string
//       formDataToSend.append("newsData", JSON.stringify(newsData));

//       // Append image file
//       formDataToSend.append("images", images);

//       //console.log("formdate before edit submit: ", editedNewsData);
      
//       const response = await axios.put(
//         `${API_URL}news/${currentNewsId}`,
//         formDataToSend
//       );
//       console.log("Form submitted succedded: ", response.data);
//       message.success("Successfully Updated!");
//       setFormData({
//         images: [],
//         author: "",
//         heading: "",
//         body: "",
//         createdBy:"",
//         createdOn: "",
//         updatedBy: "",
//         updatedOn: "",
//       });
//       setImagePreviews([]);
//       setImageFiles([]);
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

//   const uploadImagesToFirebase = () => {
//     return Promise.all(
//       imageFiles.map((file) => {
//         return new Promise((resolve, reject) => {
//           const storageRef = ref(storage, `news/${file.name}`);
//           const uploadTask = uploadBytesResumable(storageRef, file);

//           uploadTask.on(
//             "state_changed",
//             () => {},
//             (error) => reject(error),
//             () => {
//               getDownloadURL(uploadTask.snapshot.ref).then(resolve).catch(reject);
//             }
//           );
//         });
//       })
//     );
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
  
//     if (!e.dataTransfer || !e.dataTransfer.files) {
//       console.error("No files were dropped.");
//       return;
//     }
  
//     // Ensure that dropped files are iterable
//     const droppedFiles = Array.from(e.dataTransfer.files || []);
  
//     if (droppedFiles.length === 0) {
//       console.error("No valid files to process.");
//       return;
//     }
  
//     // Generate preview URLs and update the state
//     const previewUrls = droppedFiles.map((file) => URL.createObjectURL(file));
  
//     setImageFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
//     setImagePreviews((prevPreviews) => [...prevPreviews, ...previewUrls]);
//     console.log("Dropped files processed:", droppedFiles);
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       imageUrl: "",
//     }));
//   };
  

//   const handleClick = () => {
//     if (fileInputRef.current) fileInputRef.current.click();
//   };

//   const formatDateTimeForBackend = (date) => {
//     return dayjs(date).format("YYYY-MM-DD HH:mm:ss"); // Adjust format if needed
//   };

//   return (
//     <div className=" flex flex-col relative justify-center items-center bg-white">
//       <div className=" flex relative justify-center w-full items-stretch min-h-screen">
//         <div
//           className="lg:flex hidden fixed left-0 justify-center items-center w-[12%] h-screen"
//           style={{
//             backgroundImage: `url(${flag})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <Navbar />
//         </div>
//         <div className="w-full flex px-5 lg:px-0 ">
//         <div className="lg:w-[12%] w-0 "></div>
//         <div className="lg:w-[88%] w-full md:py-5 flex flex-col items-center justify-center ">
//           <div className="flex justify-between w-full lg:px-10 pt-3">
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
//               <h2 className="md:text-2xl text-xl font-bold text-center font-popins text-[#480D35]">
//                 News Creator
//               </h2>
//               <h2 className="md:text-2xl text-xl w-14 font-bold text-center font-popins text-[#480D35]">
               
//               </h2>
//             </div>
//             <div className={`${uploading? "opacity-80": "bg-opacity-100"} grid grid-flow-col-1 lg:grid-cols-3 gap-5`}>
//               <div className=" lg:col-span-2 w-full col-start-1 row-start-2 lg:col-start-1 lg:row-start-1 bg-white rounded-lg">
//                 <form onSubmit={ isEditPressed ? handleNewsEdit : handleSubmit } className="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 w-full md:p-8 ">
                 
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
//                       {/* <div className=" col-span-1">
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
//                       </div> */}
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
//                         className="bg-gray-50 border custom-scrollbar border-gray-300 text-gray-600 text-sm rounded-md block w-full h-32 px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                         placeholder="......"
//                         height="Auto"
//                         required
//                       />
//                       {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body}</p>}
//                       </div>
//                       <div className="col-span-1 md:col-span-2">
//                         <label htmlFor="imageUrl" className="block text-black text-sm font-semibold">Upload Images</label>
//                         {/* <input
//                           id="imageUrl"
//                           type="file"
//                           name="imageUrl"
//                           accept="image/*"
//                           onChange={handleChange}
//                           multiple

//                           className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
//                         />
//                         {errors.imageUrl && <p className="text-red-500 text-xs mt-1">{errors.imageUrl}</p>}
//                           {imagePreviews.map((image,index)=>(
//                             <div className="flex flex-col relative">

//                             <img
//                               key={index}
//                               src={image}
//                               alt="Preview"

//                               className="mt-4 w-full max-h-[40vh] object-contain border border-gray-300"
//                           />
//                              <button
//                               type="button"
//                               title="Remove"
//                               onClick={() => handleImageRemove(index)}
//                               className="right-0 absolute bottom-0 self-end p-2 justify-end items-end text-[red]"
//                             >
//                               <FaTrash />
//                             </button>
//                             </div>
//                           ))
//                         } */}
//                       <div
//                         className={`w-full px-3 py-4 border rounded-md ${
//                           isDragging ? "border-[#00175f] bg-blue-50" : "border-gray-300"
//                         } flex flex-col items-center justify-center cursor-pointer`}
//                         onDragOver={handleDragOver}
//                         onDragLeave={handleDragLeave}
//                         onDrop={handleDrop}
                        
//                       >
//                         <div onClick={handleClick} className="py-5">
//                           <p className="text-gray-500 text-sm">
//                             {isDragging
//                               ? "Drop the image here"
//                               : <div className="flex">
//                                   Drag and drop images, or&nbsp;<span className="flex flex-row items-center">
//                                     click here
//                                     <GiClick className="ml-1 text-lg" />
//                                   </span>&nbsp; to upload images
//                                 </div>}
//                           </p>
//                           <input
//                             ref={fileInputRef}
//                             id="imageUrl"
//                             type="file"
//                             name="imageUrl"
//                             accept="image/*"
//                             onChange={handleChange}
//                             multiple
//                             className="hidden"
//                           />
//                         </div>
//                         {imagePreviews && (
//                            imagePreviews.map((image,index)=>(
//                             <div className="flex flex-col relative">
//                               <img
//                                 key={index}
//                                 src={image}
//                                 alt="Preview"
//                                 className="mt-4 w-full max-h-[40vh] object-contain border border-gray-300"
//                               />
//                               <button
//                                 type="button"
//                                 title="Remove"
//                                 onClick={() => handleImageRemove(index)}
//                                 className="right-0 absolute bottom-0 self-end p-2 justify-end items-end text-red-500 hover:text-red-600"
//                               >
//                                 <FaTrash />
//                               </button>
//                             </div>
//                           )))}
                        
//                       </div>
//                     </div>
//                     {errors.imageUrl && <p className="text-red-500 text-xs">{errors.imageUrl}</p>} 
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
//                             className="bg-gray-400 hover:bg-opacity-100 bg-opacity-90 py-2 text-end px-3 rounded-md focus:bg-slate-500 focus:ring-4 focus:outline-none border-[2px] border-[white]  text-white font-semibold text-sm"
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
//                     className={`flex flex-col custom-scrollbar h-[60vh] ${
//                       isShowmorePressed
//                         ? " hover:overflow-auto overflow-hidden"
//                         : " overflow-hidden"
//                     } `}
//                   >
//                     {createdNews &&
//                       createdNews.map((news) => (
//                         <React.Fragment key={news.id}>
//                           <div className="focus:bg-opacity-50 w-full rounded mb-1 shadow-md hover:bg-gray-50 ">
//                             <div className="flex items-center justify-start p-2 gap-2 bg-grey-200">
//                               <div className="flex rounded w-20 h-20 p-1">
//                                 <img
//                                   className="w-full h-full rounded-lg object-cover"
//                                   src={news.imageUrls[0]}
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
//                             <div className="flex justify-end space-x-2 text-[#00175f] p-1">
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
//         </div>
//       </div>
//       {showDeleteModal && (
//           <div className="fixed inset-0 flex justify-center items-center p-5 bg-gray-600 bg-opacity-75">
//             <div className={`${uploading? "opacity-80": "bg-opacity-100"} bg-white rounded-3xl shadow-lg lg:p-8 p-5`}>
//               <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
//               <p>Are you sure you want to delete this news?</p>
//               <div className="flex justify-end mt-4 space-x-2">
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
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
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
import { GiClick } from "react-icons/gi";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // To use time from now feature
import NewsPreview from "../components/NewsPreview";
import MainNavbarToggle from "../components/MainNavBarToggle";
dayjs.extend(relativeTime);

const NewsCreator = () => {
  const [createdNews, setCreatedNews] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageIds, setImageIds] = useState([]);
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
  const [showImageDeleteModal, setShowImageDeleteModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [newsToDelete, setNewsToDelete] = useState(null);
  const [imageToDelete, setImageToDelete] = useState(null);
  const [existingImageURLs, setExistingImageURLs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [formData, setFormData] = useState({
    heading: "",
    author: "",
    images: [],
    body: "",
    createdBy:"",
    updatedBy:"",
  });
  const API_URL = process.env.REACT_APP_API_URL;
  const divRef = useRef(null);
  console.log("logged user in news: ", user);

  useEffect(() => {
    // Fetch player data for playerId 4
  
    loadNews();
  
    const leftSection = document.getElementById("left-section");
    const rightSection = document.getElementById("right-section");
  
    // Helper function to update right section height
    const updateRightSectionHeight = () => {
      if (leftSection && rightSection) {
        const leftHeight = leftSection.offsetHeight;
        rightSection.style.height = `${leftHeight}px`;
      }
    };
  
    // ResizeObserver to detect changes in left section height
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateRightSectionHeight); // Debounce using requestAnimationFrame
    });
  
    if (leftSection) {
      observer.observe(leftSection);
    }
  
    // Initial height adjustment
    updateRightSectionHeight();
  
    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);
  

  const loadNews = async() => {
    setUploading(true);
    axios
      .get(`${API_URL}news`)
      .then((response) => {
        const createdNews = response.data;
        // const sortedNews = createdNews.sort(
        //   (a, b) => new Date(b.createdOn) - new Date(a.createdOn)
        // );
        setCreatedNews(createdNews);
        console.log("Created News:", createdNews);
        setUploading(false);
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
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
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

  const validateFormAdd = () => {
    const newErrors = {};

    // Heading validation
    if (formData.heading.length > 100) {
      newErrors.heading = "Heading should be under 100 characters.";
    };  

    // Image URL validation
    if (formData.imageUrl && !/^http?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.imageUrl)) {
      newErrors.imageUrl = "Invalid image URL. Must be a valid URL ending in jpg, jpeg, png, or gif.";
    };
    if (imagePreviews.length === 0 && imageFiles.length === 0) {
      newErrors.imageUrl = "At least one image is required.";
    }

    // Body validation
    // if (formData.body.length < 10) {
    //   newErrors.body = "Body should be at least 50 characters.";
    // };

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateFormEdit = () => {
    const newErrors = {};

    // Heading validation
    // if (formData.heading.length > 100) {
    //   newErrors.heading = "Heading should be under 100 characters.";
    // };  

    // Image URL validation
    if (formData.imageUrl && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.imageUrl)) {
      newErrors.imageUrl = "Invalid image URL. Must be a valid URL ending in jpg, jpeg, png, or gif.";
    };
    if (existingImageURLs.length === 0 && imageFiles.length === 0) {
      newErrors.imageUrl = "At least one image is required.";
    }

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormAdd()) {
      message.error("Please fix validation errors before submitting");
      return;
    };

    // const currentTime = new Date();
    // const formattedDateTime = currentTime.toISOString(); 
    setUploading(true);
    console.log("data before submit: ", formData);
    try {
      console.log("formdata1: ",formData.images[0]);
      console.log("formdata2: ",formData.images[2]);
      // const urls = await uploadImagesToFirebase();
      // const createdNews = {
      //   ...formData,
      //   images: urls.map((url) => ({ imageUrl: url })),
      //   dateTime: currentTime,
      //   createdBy: user.username,
      //   createdOn: currentTime
      // };

      setFormData(prevData => ({
        ...prevData,
        images:imageFiles,
        createdBy: user.username,
      }));

      const formDataToSend = new FormData();
      const { images, ...newsData } = formData;

      // Append userData as a JSON string
      formDataToSend.append("newsData", JSON.stringify(newsData));

      // Append image file
      //formDataToSend.append("images", images);
      imageFiles.forEach((file) => {
        formDataToSend.append("images", file);
      });

      // console.log("formdata before submit: ", createdNews);
      console.log("Data before edit submit :", formData);
      console.log("FormDataToSend before edit submit :", formDataToSend);
      const response = await axios.post(
        `${API_URL}news/create`,
        formDataToSend,
        {
          headers: {
              "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("News Creation Successfull!");
      setFormData({
        images: [],
        author: "",
        heading: "",
        body: "",
        createdBy:"",
        updatedBy: "",
      });
      setImagePreviews([]);
      setImageFiles([]);
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

    setFormData({ 
      author: news.author,
      heading: news.heading,
      body: news.body,
      createdBy: news.createdBy,
      images:news.images.map(image =>({ imageUrl: image.imageUrl}))} 
    );
    
    // setImagePreviews((prevId) =>
    //   prevId === (news.images && news.images?.imageUrl) ? null : news.images && news.images?.imageUrl
    
    // );
    // setExistingImageURLs((prevId) =>
    //   prevId === (news.images && news.images.imageUrl) ? null : news.images.imageUrl);
    //   //setImagePreviews(news.images.map((img) => img.imageUrl));
    // Extract image URLs for previews
    //const imageUrls = news.images.map((img) => img.imageUrl);
    const imageUrls = news.images.map(
      (img) => `http://rcc.dockyardsoftware.com/images/${img.imageUrl ? img.imageUrl.split('/').pop() : 'default.jpg'}`
    );
    setImagePreviews(imageUrls); // Update image previews with URLs
    // Keep track of existing image URLs
    setExistingImageURLs(imageUrls);

    const imageIds = news.images.map((img) => img.imageId);
    setImageIds(imageIds);
    setImageFiles([]); 
  };

  const handleEditCancel = () => {
    setIsEditPressed(false);
    setFormData({
      images: [],
      author: "",
      heading: "",
      body: "",
      createdBy:"",
      updatedBy: "",
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
    
    // const currentTime = new Date();
    // const formattedDateTime = currentTime.toISOString(); 

    setUploading(true);
    try {
      // let imageURL = formData.imageUrl;
      // console.log("image1:", formData.imageUrl);
      // Upload image if an image file is added
      // if (formData.imageUrl instanceof File) {
      //   imageURL = await handleImageUpload(formData.imageUrl);
      // }
      // const existingImageUrls = formData.images
      // ? formData.images.map((img) => img.imageUrl)
      // : [];

    // Upload new images, if any
    // const uploadedUrls = await uploadImagesToFirebase();
    
    // Merge existing URLs with newly uploaded ones
    //const allImageUrls = [...existingImageUrls, ...imagePreviews];
      
      setFormData({
        ...formData,
        images: imageFiles,
        updatedBy: user.username,
        
      });

      const formDataToSend = new FormData();

      const { images, ...newsData } = formData;

      // Append userData as a JSON string
      formDataToSend.append("newsData", JSON.stringify(newsData));

      // Append image file
      imageFiles.forEach((file) => {
        formDataToSend.append("images", file);
      });

      //console.log("formdate before edit submit: ", editedNewsData);
      console.log("Data before edit submit :", formData);
      console.log("FormDataToSend before edit submit :", formDataToSend);
      const response = await axios.put(
        `${API_URL}news/${currentNewsId}`,
        formDataToSend
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfully Updated!");
      setFormData({
        images: [],
        author: "",
        heading: "",
        body: "",
        createdBy:"",
        updatedBy: "",
      });
      setImagePreviews([]);
      setImageFiles([]);
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

  const handleImageRemove = async(index) => {
    console.log("index removed: ", index);
    console.log("existing image urls: ", existingImageURLs);

    if (index < existingImageURLs.length) {
      setShowImageDeleteModal(true);
      setImageToDelete(index);
    } else{
      // Removing a newly added image
      const newIndex = index - existingImageURLs.length;  // Adjust index for new images
      // setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== newIndex));
      const updatedImageFiles = imageFiles.filter((_, i) => i !== newIndex);
      setImageFiles(updatedImageFiles);

      // Update previews for both new and existing images
      const updatedImagePreviews = imagePreviews.filter((_, i) => i !== index);
      setImagePreviews(updatedImagePreviews);
    }  

    // Log to confirm changes
    console.log("Updated existingImageURLs:", existingImageURLs);
    console.log("Updated imageFiles:", imageFiles);
    console.log("Updated imagePreviews:", imagePreviews);
  };

  const confirmImageDelete = async() =>{
    const imageId = imageIds[imageToDelete];

    try {
      const deleteImage = await axios.delete(
        `${API_URL}news/deleteImage/${imageId}`
      );
      const updatedExistingImages = existingImageURLs.filter((_, i) => i !== imageToDelete);
      setExistingImageURLs(updatedExistingImages);
      setImagePreviews(updatedExistingImages);
      message.success("Successfully Deleted!");
      setShowImageDeleteModal(false);
      loadNews();
      
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
  }

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
  
    if (!e.dataTransfer || !e.dataTransfer.files) {
      console.error("No files were dropped.");
      return;
    }
  
    // Ensure that dropped files are iterable
    const droppedFiles = Array.from(e.dataTransfer.files || []);
  
    if (droppedFiles.length === 0) {
      console.error("No valid files to process.");
      return;
    }
  
    // Generate preview URLs and update the state
    const previewUrls = droppedFiles.map((file) => URL.createObjectURL(file));
  
    setImageFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    setImagePreviews((prevPreviews) => [...prevPreviews, ...previewUrls]);
    console.log("Dropped files processed:", droppedFiles);
    setErrors((prevErrors) => ({
      ...prevErrors,
      imageUrl: "",
    }));
  };
  

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const formatDateTimeForBackend = (date) => {
    return dayjs(date).format("YYYY-MM-DD HH:mm:ss"); // Adjust format if needed
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
              <h2 className="md:text-2xl text-xl font-bold text-center font-popins text-[#480D35]">
                News Creator
              </h2>
              <h2 className="md:text-2xl text-xl w-14 font-bold text-center font-popins text-[#480D35]">
               
              </h2>
            </div>
            <div className={`${uploading? "opacity-80": "bg-opacity-100"} grid grid-flow-col-1 lg:grid-cols-3 gap-5`}>
              <div id="left-section" className=" lg:col-span-2 w-full col-start-1 row-start-2 lg:col-start-1 lg:row-start-1 bg-white rounded-lg">
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
                        <label htmlFor="imageUrl" className="block text-black text-sm font-semibold">Upload Images</label>
                        {/* <input
                          id="imageUrl"
                          type="file"
                          name="imageUrl"
                          accept="image/*"
                          onChange={handleChange}
                          multiple

                          className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                        />
                        {errors.imageUrl && <p className="text-red-500 text-xs mt-1">{errors.imageUrl}</p>}
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
                        } */}
                      <div
                        className={`w-full px-3 py-4 border rounded-md ${
                          isDragging ? "border-[#00175f] bg-blue-50" : "border-gray-300"
                        } flex flex-col items-center justify-center cursor-pointer`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        
                      >
                        <div onClick={handleClick} className="py-5">
                          <p className="text-gray-500 text-sm">
                            {isDragging
                              ? "Drop the image here"
                              : <div className="flex">
                                  Drag and drop images, or&nbsp;<span className="flex flex-row items-center">
                                    click here
                                    <GiClick className="ml-1 text-lg" />
                                  </span>&nbsp; to upload images
                                </div>}
                          </p>
                          <input
                            ref={fileInputRef}
                            id="imageUrl"
                            type="file"
                            name="imageUrl"
                            accept="image/*"
                            onChange={handleChange}
                            multiple
                            className="hidden"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {imagePreviews && (
                            imagePreviews.map((image,index)=>(
                              <div className=" flex flex-col relative items-center rounded-md">
                                <img
                                  key={index}
                                  src={image}
                                  alt="Preview"
                                  className=" object-fill rounded-md  border border-gray-300"
                                />
                                <button
                                  type="button"
                                  title="Remove"
                                  onClick={() => handleImageRemove(index)}
                                  className="absolute top-2 right-2 text-red-500 hover:text-red-600"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            )))}
                        </div>    
                      </div>
                    </div>
                    {errors.imageUrl && <p className="text-red-500 text-xs">{errors.imageUrl}</p>} 
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
              <div id="right-section" className=" relative lg:col-span-1 rounded-lg border border-[#480D35] bg-white overflow-hidden w-full custom-scrollbar hover:overflow-auto col-start-1 row-start-1 lg:col-start-3 lg:row-start-1 ">
                <div className="px-5 md:px-3 py-2 ">
                  <div className="sticky top-0 z-50 rounded-t-lg bg-gradient-to-r from-[#00175f] to-[#480D35] ">
                    <h1 className="text-white  rounded-t-lg font-bold font-mono md:text-xl text-lg py-1 px-3">
                      All News
                    </h1>
                  </div>
                  <div className={`flex flex-col custom-scrollbar`}>
                    {createdNews &&
                      createdNews.map((news) => (
                        <React.Fragment key={news.id}>
                          <div className="focus:bg-opacity-50 w-full rounded mb-1 shadow-md hover:bg-gray-50 ">
                            <div className="flex items-center justify-start p-2 gap-2 bg-grey-200">
                              <div className="flex rounded w-20 h-20 p-1">
                                <img
                                  className="w-full h-full rounded-lg object-cover"
                                  //src={news.images && news.images[0]?.imageUrl}
                                  src={`${`http://rcc.dockyardsoftware.com/images/${ news.images? news.images[0]?.imageUrl.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
                                />
                              </div>
                              <div className="mr-2 pt-2 w-full">
                                <h1 className="font-bold text-[black] text-base">
                                  {news.heading}
                                </h1>
                                <p className="text-black text-xs text-justify">
                                  {news.body.slice(0, 100)}...
                                </p>
                                <div className=" mt-3 flex justify-between text-xxs">
                                  <p className="text-gray-600 ">
                                    {dayjs(news.createdOn).format("YYYY-MMM-DD")}
                                  </p>
                                  <p className="text-gray-600 before:content-['•'] before:mx-2">
                                    {dayjs(news.createdOn).fromNow()}
                                  </p>
                                  <p className="text-gray-600 before:content-['•'] before:mx-2">
                                    {news.author}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end space-x-2 text-[#00175f] p-1 px-3">
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
                  {/* <div className="my-3">
                    <button
                      type="button"
                      onClick={toggleShowmore}
                      className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
                    >
                      {!isShowmorePressed ? "Show More" : "Show Less"}
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {showDeleteModal && (
          <div className="fixed inset-0 flex justify-center items-center p-5 bg-gray-600 bg-opacity-75">
            <div className={`${uploading? "opacity-80": "bg-opacity-100"} bg-white rounded-3xl shadow-lg lg:p-8 p-5`}>
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
        {showImageDeleteModal && (
          <div className="fixed inset-0 flex justify-center items-center p-5 bg-gray-600 bg-opacity-75">
            <div className={`${uploading? "opacity-80": "bg-opacity-100"} bg-white rounded-3xl shadow-lg lg:p-8 p-5`}>
              <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
              <p>Are you sure you want to delete this existing image?</p>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={() => setShowImageDeleteModal(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmImageDelete}
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
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
        )}
    </div>
  );
};
export default NewsCreator;