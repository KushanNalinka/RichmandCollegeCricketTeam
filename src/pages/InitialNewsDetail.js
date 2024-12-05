import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import topImage from '../assets/images/BG3.png';
import InitialNavbar from '../components/InitialNavbar';
const InitialNewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { state } = location;
    const role = state?.role || 'default';
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
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
    // const handleNextImage = () => {
    //   setZoomLevel(1);
    //   setPosition({ x: 0, y: 0 });
    //   setCurrentImageIndex((prevIndex) =>
    //     prevIndex === newsItem.images.length - 1 ? 0 : prevIndex + 1
    //   );
    // };
    // const handlePrevImage = () => {
    //   setZoomLevel(1);
    //   setPosition({ x: 0, y: 0 });
    //   setCurrentImageIndex((prevIndex) =>
    //     prevIndex === 0 ? newsItem.images.length - 1 : prevIndex - 1
    //   );
    // };
    const handleNextImage = () => {
      if (newsItem && newsItem.images && newsItem.images.length > 0) {
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
        setCurrentImageIndex((prevIndex) =>
          prevIndex === newsItem.images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };
    const handlePrevImage = () => {
      if (newsItem && newsItem.images && newsItem.images.length > 0) {
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? newsItem.images.length - 1 : prevIndex - 1
        );
      }
    };
    const handleZoomIn = () => setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3));
    const handleZoomOut = () => {
      setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 1));
      setPosition({ x: 0, y: 0 });
    };
    const handleClose = () => navigate('/news'); // Redirect to the NewsPage
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <InitialNavbar />
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
      <div className="container mx-auto px-4 mb-8 max-w-6xl -mt-20 relative z-10">
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{newsItem.heading}</h1>
        <p className="text-gray-500 text-xs sm:text-sm mt-2">
          Published {new Date(newsItem.dateTime).toLocaleDateString()} • {newsItem.author}
        </p>
        <button
    onClick={handleClose}
    className="absolute top-2 right-4 md:top-2 md:right-8 text-black p-2 rounded-full opacity-75 hover:opacity-100 hover:bg-gray-200"
  >
    ✕
  </button>
        <hr className="border-t-2 border-blue-500 w-24 mx-auto my-4" />
        <div className="relative w-full h-64 sm:h-[400px] md:h-[600px] mt-6 overflow-hidden">
          {newsItem.images && newsItem.images.length > 0 && (
            <div
              className="relative w-full h-full"
              style={{
                transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                transformOrigin: 'center center',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <img
                // src={newsItem.images[currentImageIndex]}
                src={`${`http://rcc.dockyardsoftware.com/images/${ newsItem.images[currentImageIndex]? newsItem.images[currentImageIndex].split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
                alt={`Slide ${currentImageIndex + 1}`}
                className="w-full h-full"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
            </div>
          )}
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
        </div>
      </div>
      <div className="p-4 sm:p-6 text-gray-700 leading-relaxed text-justify">
        <p className="text-sm sm:text-base">{newsItem.body}</p>
      </div>
    </div>
  </div>
        <Footer />
      </div>
    );
  };
  export default InitialNewsDetail;























