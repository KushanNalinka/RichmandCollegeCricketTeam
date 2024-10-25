import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import Footer from '../components/Footer';
import topImage from '../assets/images/BG3.png';
import InitialNavbar from '../components/InitialNavbar';

const InitialNewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/news/${id}`);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <InitialNavbar />

      {/* Top Image Section with Back Arrow */}
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
          zIndex: 0, // Ensures the image is behind
        }}
      >
      
      </div>

      {/* News Detail Section */}
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

            <div className="relative w-full h-[500px] mt-6">  {/* Adjusted to 500px for standard laptop display height */}
  <img 
    src={newsItem.imageUrl} 
    alt={newsItem.title} 
    className="w-full h-full object-cover"
    style={{ objectPosition: 'top center' }}  // Focuses on the top and center of the image
  />
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
