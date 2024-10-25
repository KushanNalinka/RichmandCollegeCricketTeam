import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";  
dayjs.extend(relativeTime); 

const NewsPreview = ({ news, onClose }) => {
  const [selectedNews, setSelectedNews] = useState({ ...news });
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <div className="fixed inset-0 flex p-20 items-center justify-center  bg-gray-600 bg-opacity-75">
      
      <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <div className="flex justify-end ">
          <button
            onClick={onClose}
            className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl text-[#480D35] px-8 font-bold mb-4">News Preview</h2>
        <div className="w-full bg-white ">
          
            <div className="px-8 py-5">
              <h1 className="text-primary font-bold md:text-2xl text-lg">
                {selectedNews.heading}
              </h1>
              <p className="my-3 text-base">by {selectedNews.author}</p>
              <div className=" mt-3 flex text-sm">
                    <p className="text-gray-600 ">{dayjs(news.dateTime).format('YYYY-MMM-DD')}</p>
                    <p className="text-gray-600 before:content-['•'] before:mx-2">{dayjs(news.dateTime).fromNow()}</p>
                </div>

              <div className="mt-5 w-full h-40">
                {selectedNews.imageUrl && (
                  <img
                    src={selectedNews.imageUrl}
                    alt={selectedNews.heading}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="mt-5 text-justify">
                <span
                  dangerouslySetInnerHTML={{
                    __html: selectedNews.body.replace(/\n/g, "<br />"),
                  }}
                  className="text-black text-sm leading-7 font-serif text-justify h-auto"
                />
              </div>
            </div>
         
        </div>
      </div>
      
    </div>
  );
};

export default NewsPreview;