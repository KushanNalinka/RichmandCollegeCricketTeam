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


// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';  // Added Link for back button
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
//     <div className="bg-gray-100">
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

//       {/* Back Button */}
//       <div className="container mx-auto px-4 py-4">
//         <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">
//           &larr; Back
//         </Link>
//       </div>

//     {/* News Title, Date, and Author */}
// <div className="container mx-auto px-4 text-center">
//   <h1 className="text-4xl font-bold mt-4">
//     {newsItem.heading}
//   </h1>
  
//   {/* Publication Date and Author */}
//   <p className="text-gray-500 text-sm mt-2">
//     Published on {new Date(newsItem.dateTime).toLocaleDateString()} • By {newsItem.author}
//   </p>

//   <hr className="border-t-2 border-blue-500 w-20 mx-auto mt-4" />
// </div>


//     {/* Full-width Top Image */}
// {/* <div className="relative w-full h-[500px] mt-6">  {/* Adjusted to 500px for standard laptop display height */}
//   <img 
//     src={newsItem.imageUrl} 
//     alt={newsItem.title} 
//     className="w-full h-full object-cover"
//     style={{ objectPosition: 'top center' }}  // Focuses on the top and center of the image
//   />
// </div> */}



//       {/* News Content */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-gray-700 leading-relaxed text-justify">
//           <p className="mb-6">{newsItem.body}</p>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default NewsDetailPage;


import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/MemberNavbar';
import Footer from '../components/Footer';
import topImage from '../assets/images/BG3.png';

const NewsDetailPage = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { state } = location;  // Access state from navigation
  const role = state?.role || 'default';  // Default role if not passed

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
      <Navbar />

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
          zIndex: 0,
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

            <div className="relative w-full h-[500px] mt-6">
              <img 
                src={newsItem.imageUrl} 
                alt={newsItem.title} 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top center' }}
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

export default NewsDetailPage;
