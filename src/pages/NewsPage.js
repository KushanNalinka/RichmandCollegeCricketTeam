import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';  // Make sure this is only imported once

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/MemberNavbar";

import topImage from '../assets/images/BG3.png';

const itemsPerPage = 4;

const timeAgo = (dateTime) => {
  const now = new Date();
  const timeDifference = Math.floor((now - new Date(dateTime)) / 1000);

  const intervals = {
    year: 365 *  24*  60 * 60,
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

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_URL}news`);
        
        console.log('Fetched News Data:', response.data); // Log the fetched data
        // setNewsData(response.data);
        // setLoading(false);
        // const response = await axios.get(`${API_URL}news`);
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
  
  // Pagination logic
  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = newsData.slice(indexOfFirstItem, indexOfLastItem);

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

 
  const goToFullArticle = (id, pageType) => {
    if (pageType === 'admin') {
      navigate(`/admin/news/${id}`);
    } else if (pageType === 'member') {
      navigate(`/member/news/${id}`);
    } else {
      navigate(`/news/${id}`);
    }
  };

  return (
    <div>
      {/* {/ Navbar  /} */}
      <Navbar />

      {/* {/ Top Image Section /} */}
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
             {/* {/ Main News Section  /} */}
            <div className="lg:col-span-3 md:col-span-2 sm:col-span-1 col-span-1 flex flex-col">
              <div className="border border-gray-300 p-4 sm:p-6 lg:p-8 rounded-lg bg-white shadow-xxs">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Richmond Cricket News</h1>

                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  currentNews.map((news, index) => (
                    <div key={news.id} className="mb-4 sm:mb-6">
                      <div className="flex flex-col sm:flex-row mb-4">
                        <div
                          className="w-full sm:w-40 h-28 mb-4 sm:mb-0 sm:mr-4 cursor-pointer"
                          onClick={() => goToFullArticle(news.id)}
                        >
                          <img
                            // src={news.images && news.images[0]?.imageUrl}
                            src={`${`http://rcc.dockyardsoftware.com/images/${ news.images? news.images[0]?.imageUrl.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
                            alt={news.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h2
                            className="text-sm sm:text-base md:text-lg font-bold cursor-pointer"
                            onClick={() => goToFullArticle(news.id)}
                          >
                            {news.heading}
                          </h2>
                          <p className="text-gray-700 mt-2 text-xs sm:text-sm md:text-base">
                            {getFirstTwoSentences(news.body)}
                            <span
                              className="text-[#012D5E] cursor-pointer"
                              onClick={() => goToFullArticle(news.id)}
                            >
                              ...Read more
                            </span>
                          </p>
                          <span className="text-xxs sm:text-xs text-gray-500 mt-2 block">
                            {new Date(news.createdOn).toLocaleDateString()} • {timeAgo(news.createdOn)} • {news.author}
                          </span>
                        </div>
                      </div>
                      {index < currentNews.length - 1 && <hr className="border-gray-300 my-4" />}
                    </div>
                  ))
                )}
{/* 
                {/ Pagination  /} */}
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

             {/* {/ Sidebar Section  /} */}
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
                          {new Date(sidebarItem.dateTime).toLocaleDateString()} • {timeAgo(sidebarItem.dateTime)} • {sidebarItem.author}
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

{/* 
      Footer  */}
      <Footer/>
    
    </div>
  );
};

export default NewsPage;