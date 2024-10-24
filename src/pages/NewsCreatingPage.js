import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import flag from "../assets/images/backDrop3.png";
import logo from "../assets/images/RLogo.png";
import NavbarToggleMenu from "../components/NavbarToggleMenu";
import { message, Alert, Button, Layout, Input } from "antd";
import { storage } from "../config/firebaseConfig"; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // To use time from now feature
import NewsPreview from "../components/NewsPreview";
import MainNavbarToggle from "../components/MainNavBarToggle";
dayjs.extend(relativeTime);

const NewsCreator = () => {
  const [createdNews, setCreatedNews] = useState([]);
  const [imageFile, setImageFiles] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [isEditPressed, setIsEditPressed] = useState(false);
  const [isShowmorePressed, setIsShowmorePressed] = useState(false);
  const [isViewPressed, setIsViewPressed] = useState(false);
  const [keyViewPressed, setKeyViewPressed] = useState(null);
  const [currentNewsId, setCurrentNewsId] = useState();
  const [currentNews, setCurrentNews] = useState();
  const [isEditImage, setIsEditImage] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    heading: "",
    author: "",
    imageUrl: "",
    body: "",
    dateTime: "",
  });
  const API_URL = process.env.REACT_APP_API_URL;
  const divRef = useRef(null);

  useEffect(() => {
    // Fetch player data for playerId 4
    axios
      .get(`${API_URL}news`)
      .then((response) => {
        const createdNews = response.data;
        setCreatedNews(createdNews);
        console.log("Created News:", createdNews);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setFormData({
        ...formData,
        [name]: file,
      });
      setIsImageAdded(true);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageURL = formData.imageUrl;
      if (formData.imageUrl instanceof File) {
        imageURL = await handleImageUpload(formData.imageUrl);
      }

      const createdNews = {
        ...formData,
        imageUrl: imageURL, // Assign the uploaded image URL to formData
        dateTime: formData.dateTime || new Date().getTime(),
      };

      const response = await axios.post(
        `${API_URL}news`,
        createdNews
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("News Creation Successfull!");
      setFormData({
        imageUrl: "",
        author: "",
        heading: "",
        dateTime: "",
        body: "",
      });
      setImagePreview("");
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed!");
    }
  };

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `news/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      setUploading(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error("Image upload failed:", error);
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
  const EditNews = (news) => {
    console.log("newsId: ", news.id);
    setCurrentNewsId(news.id);
    setIsEditPressed(true);
    setFormData({ ...news });
    setImagePreview((prevId) =>
      prevId === news.imageUrl ? null : news.imageUrl
    );
  };

  const handleEditCancel = () => {
    setIsEditPressed(false);
    setFormData({
      imageUrl: "",
      author: "",
      heading: "",
      dateTime: "",
      body: "",
    });
    setImagePreview("");
    setCurrentNewsId(null);
  };

  const handleNewsEdit = async (e) => {
    e.preventDefault();
    try {
      let imageURL = formData.imageUrl;
      console.log("image1:", formData.imageUrl);
      // Upload image if an image file is added
      if (formData.imageUrl instanceof File) {
        imageURL = await handleImageUpload(formData.imageUrl);
      }
      console.log("currentId:", currentNewsId);
      const editedNewsData = {
        ...formData,
        imageUrl: imageURL, // Assign the uploaded image URL to formData
        dateTime: formData.dateTime || new Date().getTime(),
      };
      const response = await axios.put(
        `${API_URL}news/${currentNewsId}`,
        editedNewsData
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfully Updated!");
      setFormData({
        imageUrl: "",
        author: "",
        heading: "",
        dateTime: "",
        body: "",
      });
      setImagePreview("");
      setIsEditPressed(false);
      setCurrentNewsId(null);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed!");
    }
  };

  const handleDelete = async (id) => {
    try {
      const deleteMatch = await axios.delete(
        `${API_URL}news/${id}`
      );
      message.success("Successfully Deleted!");
      console.log("Delete row:", id);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error deleting match:", error);
      message.error("Failed!");
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
          className="lg:flex hidden justify-center items-center w-[12%] h-auto"
          style={{
            backgroundImage: `url(${flag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navbar />
        </div>
        <div className="w-[88%] py-5 flex flex-col items-center justify-center h-auto">
          <div className="flex justify-between w-full lg:px-10 py-3">
            <MainNavbarToggle/>
            <img src={logo} className="h-12 w-12" />
          </div>
          <div
            className=" lg:w-[95%] w-[100%] bg-gray-200 lg:px-5 p-5 rounded-lg shadow-lg"
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
            <div className="grid grid-flow-col-1 lg:grid-cols-3 gap-5">
              <div className=" lg:col-span-2 col-start-1 row-start-2 lg:col-start-1 lg:row-start-1 bg-white rounded-lg">
                <form className="flex flex-col p-1 h-full w-full md:p-5 ">
                  <div className="bg-white px-10 py-5  text-black text-base">
                    <div className="flex p-1 gap-5 items-center">
                      <label htmlFor="author" className="block text-black text-sm font-semibold">Author</label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        placeholder="Enter Name"
                        className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-[50%] px-3 py-1 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                      />
                      <label htmlFor="dateTime" className="block text-black text-sm font-semibold">Date</label>
                      <input
                        type="datetime-local"
                        id="dateTime"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        placeholder="Date"
                        className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-[50%] px-3 py-1 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                      />
                    </div>
                    <div className="p-1 md:p-1 ">
                      <label htmlFor="heading" className="block text-black text-sm font-semibold">Heading</label>
                      <input
                        type="text"
                        id="heading"
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                        required
                        placeholder="Enter Subject"
                        className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                      />
                      <label htmlFor="body" className="block text-black text-sm font-semibold">Content</label>
                      <textarea
                        type="Form"
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full h-32 px-3 py-1 mt-1 mb-3 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                        placeholder="......"
                        height="Auto"
                        required
                      />
                      <div className="col-span-2 ">
                        <label htmlFor="imageUrl" className="block text-black text-sm font-semibold">Image</label>
                        <input
                          id="imageUrl"
                          type="file"
                          name="imageUrl"
                          accept="image/*"
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block w-full px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                        />
                        {imagePreview && (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="mt-4 w-full h-40 object-cover border border-gray-300"
                          />
                        )}
                      </div>
                      <div className="flex items-center justify-end pt-2 gap-2">
                        <button
                          type="submit"
                          onClick={
                            isEditPressed ? handleNewsEdit : handleSubmit
                          }
                          className="bg-[#480D35] hover:bg-opacity-100 bg-opacity-90 py-2 px-3 rounded-md focus:bg-slate-600 focus:ring-4 focus:outline-none border-[2px] border-[white]  text-white font-semibold text-sm"
                        >
                          Save
                        </button>
                        {isEditPressed && (
                          <button
                            onClick={handleEditCancel}
                            className="bg-gray-300 hover:bg-gray-400 py-2 px-3 rounded-md focus:bg-slate-600 focus:ring-4 focus:outline-none border-[2px] border-[white]  text-white font-semibold text-sm"
                          >
                            {" "}
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className=" lg:col-span-1 rounded-lg border border-[#480D35] bg-white col-start-1 row-start-1 lg:col-start-3 lg:row-start-1 ">
                <div className="px-6 py-2 ">
                  <h1 className="text-[#00175f] font-bold font-mono md:text-2xl text-lg py-3">
                    Recent News
                  </h1>

                  <div
                    className={`flex flex-col ${
                      isShowmorePressed
                        ? " hover:overflow-auto overflow-hidden"
                        : " overflow-hidden"
                    } h-96 `}
                  >
                    {createdNews &&
                      createdNews.map((news) => (
                        <React.Fragment key={news.id}>
                          <div className="focus:bg-opacity-50 rounded mb-1 shadow-md hover:bg-gray-50 ">
                            <div className="flex items-center justify-start p-2 gap-2 bg-grey-200">
                              <div className="flex rounded w-20 h-20 p-1">
                                <img
                                  className="w-full h-full rounded-lg object-cover"
                                  src={news.imageUrl}
                                />
                              </div>
                              <div className="mr-2 py-2 w-full">
                                <h1 className="font-bold text-[black] text-base">
                                  {news.heading}
                                </h1>
                                <p className="text-black text-xs">
                                  {news.body.slice(0, 100)}...
                                </p>
                                <div className=" mt-3 flex text-xs">
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
                            <div className="flex justify-end gap-3 text-[#00175f] p-1">
                              <button onClick={() => toggleView(news)}>
                                {<FaEye />}
                              </button>
                              <button onClick={() => EditNews(news)}>
                                <FaEdit />
                              </button>
                              <button onClick={() => handleDelete(news.id)}>
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
      {isViewPressed && (
        <NewsPreview onClose={handlePreviewClose} news={currentNews} />
      )}
    </div>
  );
};
export default NewsCreator;