import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";  
dayjs.extend(relativeTime); 

const NewsPreview = ({ news, onClose }) => {
  const [selectedNews, setSelectedNews] = useState({ ...news });
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const API_URL = process.env.REACT_APP_API_URL;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === news.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? news.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 overflow-y-auto py-10 min-h-screen w-full bg-gray-800 bg-opacity-75 p-5 z-50">
      <div className="flex items-center justify-center">
       <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl relative overflow-hidden">
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-200"
          aria-label="Close"
        >
          <FaTimes size={24} />
        </button>
      </div>
      
      {/* Header */}
      <h2 className="text-center text-2xl font-bold text-[#480D35] mb-4">News Preview</h2>
      
      {/* Content */}
      <div className="bg-gray-100 px-10 py-6 rounded-t-3xl ">
        <div className="h-full space-y-3">
          {/* Heading and Author */}
          <div>
            <h1 className="text-primary font-extrabold text-3xl leading-tight text-[#480D35]">{selectedNews.heading}</h1>
            <p className="text-gray-600 mt-1 text-sm">
              by <span className="font-semibold">{selectedNews.author}</span>
            </p>
          </div>
          
          {/* Date and Time */}
          <div className="text-gray-500 flex items-center space-x-4 text-sm">
            <span>{dayjs(news.dateTime).format('YYYY-MMM-DD')}</span>
            <span>&#8226;</span>
            <span>{dayjs(news.dateTime).fromNow()}</span>
          </div>

          {/* Full Image Display */}
          <div className="relative w-full flex justify-center items-center mt-4">
              {news.images && news.images.length > 0 && (
                <>
                  <img
                    src={news.images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="w-full max-h-[60vh] object-cover rounded-xl"
                  />
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full px-3 py-2 shadow-lg hover:bg-opacity-75 transition duration-200"
                  >
                    &#9664;
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full px-3 py-2 shadow-lg hover:bg-opacity-75 transition duration-200"
                  >
                    &#9654;
                  </button>
                </>
              )}
            </div>

          {/* News Body */}
          <div className="text-gray-700 text-justify text-lg leading-relaxed mt-6 pb-5">
            <span
              dangerouslySetInnerHTML={{
                __html: selectedNews.body.replace(/\n/g, "<br />"),
              }}
              className="font-serif"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
};

export default NewsPreview;