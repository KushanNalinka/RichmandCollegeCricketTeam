import React, { useState, useEffect } from 'react';
import { useParams, Link ,useLocation} from 'react-router-dom';
import axios from 'axios';

import Footer from '../components/Footer';
import topImage from '../assets/images/BG3.png';
import InitialNavbar from '../components/InitialNavbar';

const InitialNewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { state } = location;  // Access state from navigation
  const role = state?.role || 'default';  // Default role if not passed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(`${API_URL}news/${id}`);
        setNewsItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news detail:', error);
        setError('Failed to fetch news detail');
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === newsItem.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? newsItem.images.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <InitialNavbar />
  
         {/* {/ Top Image Section with Back Arrow  /} */}
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
            position: 'relative',
            zIndex: 0,
          }}
        >
        </div>
  
         {/* {/ News Detail Section  /} */}
        <div className="container mx-auto px-4 mb-8 max-w-6xl -mt-20 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 text-center">
              <h1 className="text-3xl font-bold text-gray-800">
                {newsItem.heading}
              </h1>
              <p className="text-gray-500 text-sm mt-2">
                Published {new Date(newsItem.dateTime).toLocaleDateString()}
              </p>
              <hr className="border-t-2 border-blue-500 w-24 mx-auto my-4" />
  {/* 
              Image Carousel */}
              <div className="relative w-full h-[500px] mt-6">
                {newsItem.images && newsItem.images.length > 0 && (
                  <>
                    <img
                      src={newsItem.images[currentImageIndex]}
                      alt={`Slide ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'top center' }}
                    />
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-r-lg opacity-75 hover:opacity-100"
                    >
                      &#9664;
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-l-lg opacity-75 hover:opacity-100"
                    >
                      &#9654;
                    </button>
                  </>
                )}
              </div>
            </div>
  
            <div className="p-6 text-gray-700 leading-relaxed text-justify">
              <p>{newsItem.body}</p>
            </div>
          </div>
        </div>
  
        <Footer />
      </div>
    );
  };
  
  export default InitialNewsDetail;