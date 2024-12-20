import React, { useState, useEffect } from 'react';


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InitialNavbar from "../components/InitialNavbar";

import topImage from '../assets/images/BG3.png';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faCalendar } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const itemsPerPage = 4;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure two digits for month
  const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits for day
  return `${year}/${month}/${day}`;
};


const timeAgo = (dateTime) => {
  const now = new Date();
  const timeDifference = Math.floor((now - new Date(dateTime)) / 1000);

  const intervals = {
    year: 365 * 24 * 60 * 60,
    month: 30 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
  };

  if (timeDifference >= intervals.year) {
    const years = Math.floor(timeDifference / intervals.year);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (timeDifference >= intervals.month) {
    const months = Math.floor(timeDifference / intervals.month);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (timeDifference >= intervals.day) {
    const days = Math.floor(timeDifference / intervals.day);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (timeDifference >= intervals.hour) {
    const hours = Math.floor(timeDifference / intervals.hour);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (timeDifference >= intervals.minute) {
    const minutes = Math.floor(timeDifference / intervals.minute);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return 'just now';
  }
};

const getFirstTwoSentences = (text) => {
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  return sentences ? sentences.slice(0, 2).join(' ') : text;
};

const InitialNewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null); 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // const response = await axios.get('http://localhost:8080/api/news');
        // setNewsData(response.data);
        // setLoading(false);
        const response = await axios.get(`${API_URL}news`);
        const newsWithFirstImage = response.data.map((news) => ({
          ...news,
          imageUrl: news.images?.[0] || '', // Set the first image URL or fallback
        }));
  
        // Sort the news data to display the latest news first
        const sortedNewsData = newsWithFirstImage.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
  
        setNewsData(sortedNewsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news');
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const filterNews = () => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = newsData.filter((news) => {
        const matchesQuery =
          (news.heading?.toLowerCase().includes(lowerCaseQuery) || '') ||
          (news.author?.toLowerCase().includes(lowerCaseQuery) || '');
  
        const matchesDate = selectedDate
          ? new Date(news.createdOn).toDateString() === selectedDate.toDateString()
          : true;
  
        return matchesQuery && matchesDate;
      });
  
      setFilteredNews(filtered);
    };
  
    if (!searchQuery.trim() && !selectedDate) {
      setFilteredNews(newsData);
    } else {
      filterNews();
    }
  }, [searchQuery, selectedDate, newsData]);
  
    
    
    
   
   // Pagination logic
   const totalPages = Math.ceil(filteredNews.length / itemsPerPage); // Adjust pagination logic
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const initialcurrentNews = filteredNews.slice(indexOfFirstItem, indexOfLastItem); // Use filteredNews here
 
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsData([...newsData]);
    }, 60000);
    return () => clearInterval(interval);
  }, [newsData]);

  

  const latestFiveNews = newsData
    .slice()
    .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
    .slice(0, 5);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  const goToFullArticle = (id) => {
    navigate(`/initial-news/${id}`);
  };

  return (
    <div>
      {/* Navbar */}
      <InitialNavbar />

      {/* Top Image Section */}
      <div
        style={{
          backgroundImage: `url(${topImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></div>

      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="relative">
          <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Main News Section */}
                       <div className="lg:col-span-3 md:col-span-2 sm:col-span-1 col-span-1 flex flex-col">
                         <div className="border border-gray-300 p-4 sm:p-6 lg:p-8 rounded-lg bg-white shadow-xxs">
                           <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                             <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-0">Richmond Cricket News</h1>
                             <div className="flex items-center space-x-4">
                               {/* Search Input */}
                               <div className="relative">
                                 <input
                                   type="text"
                                   placeholder="Search News..."
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)}
                                   className="w-full px-2 py-1 border border-gray-300 rounded-xl text-xs shadow-sm focus:outline-none focus:ring-2"
                                 />
                                 <FontAwesomeIcon
                                   icon={faSearch}
                                   size="sm"
                                   className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                 />
                               </div>
                             
                               {/* Date Picker with Reset Button */}
                               <div className="flex items-center space-x-2">
                                 <div className="relative inline-block">
                                   <FontAwesomeIcon
                                     icon={faCalendar} // Calendar icon
                                     size="sm"
                                     className="text-gray-400 hover:text-gray-600 cursor-pointer"
                                     onClick={() => document.getElementById('datepicker-trigger').focus()}
                                   />
                                   <DatePicker
                                     id="datepicker-trigger"
                                     selected={selectedDate}
                                     onChange={(date) => setSelectedDate(date)}
                                     dateFormat="yyyy/MM/dd"
                                     className="opacity-0 w-6 h-6 cursor-pointer"
                                     placeholderText="Select a date"
                                   />
                                 </div>
                             
                                 {/* Reset Button */}
                                 {selectedDate && (
                                   <button
                                     onClick={() => setSelectedDate(null)} // Reset selectedDate
                                     className="px-2 py-1 bg-[#012D5E]  text-white rounded-xl text-xs  focus:outline-none"
                                   >
                                     Refresh
                                   </button>
                                 )}
                               </div>
                             </div>
                             
                             
                                             </div>
                             
                           {loading ? (
                             <p>Loading...</p>
                           ) : error ? (
                             <p>{error}</p>
                           ) : (
                             initialcurrentNews.map((initialnews, index) => (
                               <div key={initialnews.id} className="mb-4 sm:mb-6">
                                 <div className="flex flex-col sm:flex-row mb-4">
                                   <div
                                     className="w-full sm:w-40 h-28 mb-4 sm:mb-0 sm:mr-4 cursor-pointer"
                                     onClick={() => goToFullArticle(initialnews.id)}
                                   >
                          <img
                           src={`${`http://rcc.dockyardsoftware.com/images/${initialnews.images? initialnews.images[0]?.imageUrl.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
                            // src={initialnews.images && initialnews.images[0]?.imageUrl}
                            alt={initialnews.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h2
                            className="text-sm sm:text-base md:text-lg font-bold cursor-pointer"
                            onClick={() => goToFullArticle(initialnews.id)}
                          >
                            {initialnews.heading}
                          </h2>
                          <p className="text-gray-700 mt-2 text-xs sm:text-sm md:text-base">
                            {getFirstTwoSentences(initialnews.body)}
                            <span
                              className="text-[#012D5E] cursor-pointer"
                              onClick={() => goToFullArticle(initialnews.id)}
                            >
                              ...Read more
                            </span>
                          </p>
                          <span className="text-xxs sm:text-xs text-gray-500 mt-2 block">
  {formatDate(initialnews.createdOn)} • {timeAgo(initialnews.createdOn)} • {initialnews.author}
</span>
                        </div>
                      </div>
                      {index < initialcurrentNews.length - 1 && <hr className="border-gray-300 my-4" />}
                    </div>
                  ))
                )}

                {/* Pagination */}
                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={goToFirstPage}
                    className="px-2 sm:px-3 py-1 sm:py-2 border rounded-lg mx-1 text-xs sm:text-sm"
                    disabled={currentPage === 1}
                  >
                    «
                  </button>
                  <button
                    onClick={goToPreviousPage}
                    className="px-2 sm:px-3 py-1 sm:py-2 border rounded-lg mx-1 text-xs sm:text-sm"
                    disabled={currentPage === 1}
                  >
                    ‹
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-2 sm:px-3 py-1 sm:py-2 border rounded-lg mx-1 text-xs sm:text-sm ${
                        currentPage === i + 1 ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={goToNextPage}
                    className="px-2 sm:px-3 py-1 sm:py-2 border rounded-lg mx-1 text-xs sm:text-sm"
                    disabled={currentPage === totalPages}
                  >
                    ›
                  </button>
                  <button
                    onClick={goToLastPage}
                    className="px-2 sm:px-3 py-1 sm:py-2 border rounded-lg mx-1 text-xs sm:text-sm"
                    disabled={currentPage === totalPages}
                  >
                    »
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1">
              <div className="border-2 border-gray-200 p-4 sm:p-6 lg:p-8 rounded-lg bg-white shadow-sm">
                <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Latest News</h2>

                {latestFiveNews.map((sidebarItem, index) => (
                  <div key={sidebarItem.id} className="mb-4">
                    <div className="flex cursor-pointer" onClick={() => goToFullArticle(sidebarItem.id)}>
                      <img
                        // src={sidebarItem.images && sidebarItem.images[0]?.imageUrl}
                         src={`${`http://rcc.dockyardsoftware.com/images/${ sidebarItem.images? sidebarItem.images[0]?.imageUrl.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
                        alt={sidebarItem.title}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h3
                          className="text-sm sm:text-base font-semibold cursor-pointer"
                          onClick={() => goToFullArticle(sidebarItem.id)}
                        >
                          {sidebarItem.heading}
                        </h3>
                        <span className="text-xxs sm:text-xs text-gray-500 block">
  {formatDate(sidebarItem.createdOn)} • {timeAgo(sidebarItem.createdOn)} • {sidebarItem.author}
</span>

                      </div>
                    </div>
                    {index < latestFiveNews.length - 1 && <hr className="my-4 border-gray-300" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Footer */}
    <Footer/>
    </div>
  );
};

export default  InitialNewsPage;
