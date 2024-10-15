// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/MemberNavbar';
// import Footer from '../components/Footer';
// import topImage from '../assets/images/BG3.png';

// const NewsDetailPage = () => {
//   const { id } = useParams();  // Get the news ID from the URL
//   const [newsItem, setNewsItem] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch detailed news data based on the ID
//   useEffect(() => {
//     const fetchNewsDetail = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/news/${id}`); // Fetch news detail by ID
//         setNewsItem(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching news detail:', error);
//         setError('Failed to fetch news detail');
//         setLoading(false);
//       }
//     };

//     fetchNewsDetail();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <Navbar />

//       <div
//         style={{
//           backgroundImage: `url(${topImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed',
//           height: '180px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//       </div>

//        {/* News Title Below the Top Layer */}
//        <div className="container mx-auto p-4 mb-20">
//         {/* Fetch heading from newsItem with increased margin */}
//         <h1 className="text-4xl font-bold text-center mb-8 mt-10"> {/* Add margin-top here */}
//           {newsItem.heading}
//         </h1>

//        {/* Image Container with Specific Size */}
//        <div className="relative w-full h-64 mb-10 "> {/* Set the height you want */}
//           <img 
//             src={newsItem.imageUrl} 
//             alt={newsItem.title} 
//             className=" object-cover" // Cover the entire container
//           />
//           <span className="text-xs text-gray-500 block mt-2"> 
//             {newsItem.imageCaption} {/* Optional caption for the image */}
//           </span>
//         </div>
        
//         {/* Body Text */}
//         <div className="text-gray-700 mb-4">
//           <p className="text-justify">{newsItem.body}</p>
//         </div>
        
//         {/* Date and Author Info */}
//         <span className="text-xs text-gray-500 block mt-4">
//           {new Date(newsItem.dateTime).toLocaleDateString()} • {newsItem.author}
//         </span>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default NewsDetailPage;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/MemberNavbar';
import Footer from '../components/Footer';

const NewsDetailPage = () => {
  const { id } = useParams();  // Get the news ID from the URL
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch detailed news data based on the ID
  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/news/${id}`); // Fetch news detail by ID
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
    <div>
      <Navbar />

      {/* Full-width Top Image */}
      <div className="relative w-full h-96 mb-10"> {/* Adjust height as needed */}
        <img 
          src={newsItem.imageUrl} 
          alt={newsItem.title} 
          className="w-full h-full object-cover" // Cover the entire container
        />
        <span className="text-xs text-gray-500 block mt-2 text-center"> 
          {newsItem.imageCaption} {/* Optional caption for the image */}
        </span>
      </div>

      {/* News Title and Content */}
      <div className="container mx-auto p-4 mb-20">
        <h1 className="text-4xl font-bold text-center mb-8 mt-10">
          {newsItem.heading}
        </h1>

        {/* Body Text */}
        <div className="text-gray-700 mb-4">
          <p className="text-justify">{newsItem.body}</p>
        </div>
        
        {/* Date and Author Info */}
        <span className="text-xs text-gray-500 block mt-4">
          {new Date(newsItem.dateTime).toLocaleDateString()} • {newsItem.author}
        </span>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;
