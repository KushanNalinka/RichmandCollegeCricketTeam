// import React, { useState } from 'react';
// import Navbar from "../components/MemberNavbar";


// import topImage from '../assets/images/BG3.png';
// import Footer from '../components/Footer';

// // Sample data for the news articles and sidebar
// const newsData = [
//   {
//     id: 1,
//     title: 'Richmond College Dominates the Big Match 2024',
//     description: 'Richmond College continued their dominance, securing an impressive victory in the 2024 big match against Mahinda College.',
//     date: '23-Sep-2024',
//     time: '11 hrs ago',
//     author: 'Sri Lanka School Cricket Staff',
//     image: 'https://fos.cmb.ac.lk/blog/wp-content/uploads/2018/03/collage-1.jpg',
//   },
//   {
//     id: 2,
//     title: 'Richmond Cricket Captain Wins Player of the Match in Thrilling Victory',
//     description: 'The Richmond College cricket captain led his team to victory with an outstanding all-round performance, securing the Player of the Match award.',
//     date: '23-Sep-2024',
//     time: '12 hrs ago',
//     author: 'Sri Lanka Cricket News',
//     image: 'https://assets.roar.media/assets/vIQdBIQUTIQgJr8Q_Article-Cover_Wall-Street-Journal.jpg?w=679',
//   },
//   {
//     id: 3,
//     title: 'Richmond College Cricket Team Celebrates Unbeaten Streak',
//     description: 'Richmond College continues their winning streak in the ongoing season, remaining unbeaten in all matches so far.',
//     date: '22-Sep-2024',
//     time: '15 hrs ago',
//     author: 'Cricket Journal',
//     image: 'https://fos.cmb.ac.lk/blog/wp-content/uploads/2018/03/collage-1.jpg',
//   },
//   {
//     id: 4,
//     title: 'Historic Win for Richmond College in Big Match 2024',
//     description: 'Richmond College secures a historic victory, showcasing an exceptional performance in all departments.',
//     date: '21-Sep-2024',
//     time: '10 hrs ago',
//     author: 'Daily Sports News',
//     image: 'https://assets.roar.media/assets/vIQdBIQUTIQgJr8Q_Article-Cover_Wall-Street-Journal.jpg?w=679',
//   },
//   {
//     id: 5,
//     title: 'Richmond College Eyes Another Championship',
//     description: 'After a dominant display in the Big Match 2024, Richmond College aims for another championship title this season.',
//     date: '20-Sep-2024',
//     time: '8 hrs ago',
//     author: 'Sri Lanka Cricket Staff',
//     image: 'https://fos.cmb.ac.lk/blog/wp-content/uploads/2018/03/collage-1.jpg',
//   },
//   // Add more news items here as needed
// ];

// import topImage from '../assets/images/BG3.png';
// import Footer from '../components/Footer';


// const sidebarData = [
//   {
//     id: 1,
//     title: 'Richmond College Big Match: A Look Back at the Memorable Wins',
//     date: '23-Sep-2024',
//     time: '21 hrs ago',
//     author: 'Andrew Fidel Fernando',
//     image: 'https://fos.cmb.ac.lk/blog/wp-content/uploads/2018/03/collage-1.jpg',
//   },
//   {
//     id: 2,
//     title: 'Stats - Richmond College Cricketers Shining in the 2024 Season',
//     date: '22-Sep-2024',
//     author: 'Sampath Bandarupalli',
//     image: 'https://assets.roar.media/assets/vIQdBIQUTIQgJr8Q_Article-Cover_Wall-Street-Journal.jpg?w=679',
//   },
  
 
// ];

// // Pagination settings
// const itemsPerPage = 4;

// const NewsPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate total pages
//   const totalPages = Math.ceil(newsData.length / itemsPerPage);

//   // Get the current news items based on the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentNews = newsData.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page functions
//   const goToNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const goToFirstPage = () => setCurrentPage(1);
//   const goToLastPage = () => setCurrentPage(totalPages);

//   return (

//     <div>

//        {/* Navbar */}
//        <Navbar />

//        <div
//           style={{
//             backgroundImage: `url(${topImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed',
//             height: '180px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//      </div>
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       <div className="relative">

//         <div className="container mx-auto p-4 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
//           {/* Main News Section */}
//           <div className="lg:w-3/4 w-full flex flex-col">
//             <div className="border border-gray-300 p-6 sm:p-8 lg:p-10 rounded-lg bg-white shadow-xxs ">
//               <h1 className="text-2xl sm:text-3xl font-bold mb-6">Richmond Cricket News</h1>
//               {currentNews.map((news, index) => (
//                 <div key={news.id} className="mb-6">
//                   <div className="flex flex-col sm:flex-row mb-4">
//                     <img
//                       src={news.image}
//                       alt={news.title}
//                       className="w-full sm:w-40 h-28 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
//                     />
//                     <div className="flex-1">
//                       <h2 className="text-sm sm:text-sm font-bold cursor-pointer">{news.title}</h2>
//                       <p className="text-gray-700 mt-2 text-xs">{news.description}</p>
//                       <span className="text-xxs text-gray-500 mt-2 block">
//                         {news.date} • {news.time} • {news.author}
//                       </span>
//                     </div>
//                   </div>
//                   {/* Horizontal line between news items */}
//                   {index < currentNews.length - 1 && <hr className="border-gray-300 my-4" />}
//                 </div>
//               ))}

//               {/* Pagination controls */}
//               <div className="flex justify-center items-center mt-4">
//                 <button
//                   onClick={goToFirstPage}
//                   className="px-3 py-2 border rounded-lg mx-1 text-sm"
//                   disabled={currentPage === 1}
//                 >
//                   «
//                 </button>
//                 <button
//                   onClick={goToPreviousPage}
//                   className="px-3 py-2 border rounded-lg mx-1 text-sm"
//                   disabled={currentPage === 1}
//                 >
//                   ‹
//                 </button>
//                 {[...Array(totalPages)].map((_, i) => (
//                   <button
//                     key={i + 1}
//                     onClick={() => setCurrentPage(i + 1)}
//                     className={`px-3 py-2 border rounded-lg mx-1 text-sm ${
//                       currentPage === i + 1 ? 'bg-blue-500 text-white' : ''
//                     }`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}
//                 <button
//                   onClick={goToNextPage}
//                   className="px-3 py-2 border rounded-lg mx-1 text-sm"
//                   disabled={currentPage === totalPages}
//                 >
//                   ›
//                 </button>
//                 <button
//                   onClick={goToLastPage}
//                   className="px-3 py-2 border rounded-lg mx-1 text-sm"
//                   disabled={currentPage === totalPages}
//                 >
//                   »
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar Section */}
//           <div className="lg:w-1/4 w-full">
//             <div className="border-2 border-gray-200 p-4 rounded-lg bg-white shadow-sm">
//               <h2 className="text-lg font-semibold mb-6">Latest</h2>
//               {sidebarData.map((sidebarItem, index) => (
//                 <div key={sidebarItem.id} className="mb-4">
//                   <div className="flex">
//                     <img
//                       src={sidebarItem.image}
//                       alt={sidebarItem.title}
//                       className="w-16 h-16 object-cover rounded-lg mr-3"
//                     />
//                     <div className="flex-1">
//                       <h3 className="text-sm font-medium cursor-pointer">{sidebarItem.title}</h3>
//                       <span className="text-xs text-gray-500">
//                         {sidebarItem.date} • {sidebarItem.time} • {sidebarItem.author}
//                       </span>
//                     </div>
//                   </div>
//                   {index < sidebarData.length - 1 && <hr className="border-gray-200 my-3" />}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
   
//   );
// };

// export default NewsPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from "../components/MemberNavbar";
// import Footer from '../components/Footer';
// import topImage from '../assets/images/BG3.png';

// // Pagination settings
// const itemsPerPage = 4;

// // Utility function to calculate time difference
// const timeAgo = (dateTime) => {
//   const now = new Date();
//   const timeDifference = Math.floor((now - new Date(dateTime)) / 1000); // Time difference in seconds

//   // Define time intervals in seconds
//   const intervals = {
//     year: 365 * 24 * 60 * 60,
//     month: 30 * 24 * 60 * 60,
//     day: 24 * 60 * 60,
//     hour: 60 * 60,
//     minute: 60,
//   };

//   if (timeDifference >= intervals.year) {
//     const years = Math.floor(timeDifference / intervals.year);
//     return `${years} year${years > 1 ? 's' : ''} ago`;
//   } else if (timeDifference >= intervals.month) {
//     const months = Math.floor(timeDifference / intervals.month);
//     return `${months} month${months > 1 ? 's' : ''} ago`;
//   } else if (timeDifference >= intervals.day) {
//     const days = Math.floor(timeDifference / intervals.day);
//     return `${days} day${days > 1 ? 's' : ''} ago`;
//   } else if (timeDifference >= intervals.hour) {
//     const hours = Math.floor(timeDifference / intervals.hour);
//     return `${hours} hour${hours > 1 ? 's' : ''} ago`;
//   } else if (timeDifference >= intervals.minute) {
//     const minutes = Math.floor(timeDifference / intervals.minute);
//     return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
//   } else {
//     return 'just now';
//   }
// };

// const NewsPage = () => {
//   const [newsData, setNewsData] = useState([]); // State to hold news data
//   const [currentPage, setCurrentPage] = useState(1);  // State to hold current page number
//   const [loading, setLoading] = useState(true); // State to show loading spinner
//   const [error, setError] = useState(null);  // State to capture errors

//   // Fetch news data from the backend
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/news'); // Make sure your backend is running here
//         setNewsData(response.data);  // Update the news data state
//         setLoading(false);
        
//         console.log("Original news data: ", response.data);
//         // Turn off loading spinner
//       } catch (error) {
//         console.error('Error fetching news:', error);  // Log the error
//         setError('Failed to fetch news');  // Set the error state
//         setLoading(false);  // Turn off loading spinner
//       }
//     };

//     fetchNews();
//   }, []);

//   // Update the "time ago" display every minute
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setNewsData([...newsData]); // Trigger a state update every minute to refresh the time difference
//     }, 60000); // 60000 milliseconds = 1 minute

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [newsData]);

//   // Calculate total pages
//   const totalPages = Math.ceil(newsData.length / itemsPerPage);

//   // Get the current news items based on the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentNews = newsData.slice(indexOfFirstItem, indexOfLastItem);

//   // Extract latest five news for the sidebar
//   const latestFiveNews = newsData.slice(0, 5);  // Get the first 5 news items as sidebar news

//   // Change page functions
//   const goToNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const goToFirstPage = () => setCurrentPage(1);
//   const goToLastPage = () => setCurrentPage(totalPages);

//   return (
//     <div>
//       {/* Navbar */}
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

//       <div className="min-h-screen flex flex-col bg-gray-100">
//         <div className="relative">
//           <div className="container mx-auto p-4 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
//             {/* Main News Section */}
//             <div className="lg:w-3/4 w-full flex flex-col">
//               <div className="border border-gray-300 p-6 sm:p-8 lg:p-10 rounded-lg bg-white shadow-xxs ">
//                 <h1 className="text-2xl sm:text-3xl font-bold mb-6">Richmond Cricket News</h1>

//                 {currentNews.map((news, index) => (
//                   <div key={news.id} className="mb-6">
//                     <div className="flex flex-col sm:flex-row mb-4">
//                       <img
//                         src={news.imageUrl}  // Assuming the image is coming from imageUrl
//                         alt={news.title}
//                         className="w-full sm:w-40 h-28 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
//                       />
//                       <div className="flex-1">
//                         <h2 className="text-sm sm:text-sm font-bold cursor-pointer">{news.heading}</h2>
//                         <p className="text-gray-700 mt-2 text-xs">{news.body}</p>
//                         <span className="text-xxs text-gray-500 mt-2 block">
//                           {new Date(news.dateTime).toLocaleDateString()} • {timeAgo(news.dateTime)} • {news.author}
//                         </span>
//                       </div>
//                     </div>
//                     {index < currentNews.length - 1 && <hr className="border-gray-300 my-4" />}
//                   </div>
//                 ))}

//                 {/* Pagination controls */}
//                 <div className="flex justify-center items-center mt-4">
//                   <button
//                     onClick={goToFirstPage}
//                     className="px-3 py-2 border rounded-lg mx-1 text-sm"
//                     disabled={currentPage === 1}
//                   >
//                     «
//                   </button>
//                   <button
//                     onClick={goToPreviousPage}
//                     className="px-3 py-2 border rounded-lg mx-1 text-sm"
//                     disabled={currentPage === 1}
//                   >
//                     ‹
//                   </button>
//                   {[...Array(totalPages)].map((_, i) => (
//                     <button
//                       key={i + 1}
//                       onClick={() => setCurrentPage(i + 1)}
//                       className={`px-3 py-2 border rounded-lg mx-1 text-sm ${
//                         currentPage === i + 1 ? 'bg-blue-500 text-white' : ''
//                       }`}
//                     >
//                       {i + 1}
//                     </button>
//                   ))}
//                   <button
//                     onClick={goToNextPage}
//                     className="px-3 py-2 border rounded-lg mx-1 text-sm"
//                     disabled={currentPage === totalPages}
//                   >
//                     ›
//                   </button>
//                   <button
//                     onClick={goToLastPage}
//                     className="px-3 py-2 border rounded-lg mx-1 text-sm"
//                     disabled={currentPage === totalPages}
//                   >
//                     »
//                   </button>
//                 </div>
//               </div>
//             </div>

//           {/* Sidebar Section */}
// <div className="lg:w-1/4 w-full">
//   <div className="border-2 border-gray-200 p-4 rounded-lg bg-white shadow-sm">
//     <h2 className="text-lg font-semibold mb-6">Latest</h2>
//     {latestFiveNews.map((sidebarItem, index) => (
//       <div key={sidebarItem.id} className="mb-4">
//         <div className="flex">
//           <img
//             src={sidebarItem.imageUrl}  // Assuming the imageUrl property is used for the image
//             alt={sidebarItem.title}
//             className="w-16 h-16 object-cover rounded-lg mr-4"
//           />
//           <div>
//             <h3 className="text-sm font-semibold cursor-pointer">{sidebarItem.heading}</h3>
//             {/* Display the date and time ago */}
//             <span className="text-xxs text-gray-500 block">
//               {new Date(sidebarItem.dateTime).toLocaleDateString()} • {timeAgo(sidebarItem.dateTime)} • {sidebarItem.author}
//             </span>
//           </div>
//         </div>
//         {index < latestFiveNews.length - 1 && <hr className="my-4 border-gray-300" />}
//       </div>
//     ))}
//   </div>
// </div>

//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default NewsPage;



import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';  // Make sure this is only imported once

import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from "../components/MemberNavbar";

import topImage from '../assets/images/BG3.png';

// Pagination settings
const itemsPerPage = 4;


// Utility function to calculate time difference
const timeAgo = (dateTime) => {
  const now = new Date();
  const timeDifference = Math.floor((now - new Date(dateTime)) / 1000); // Time difference in seconds

  // Define time intervals in seconds
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

// Utility function to get the first two sentences of a text
const getFirstTwoSentences = (text) => {
  const sentences = text.match(/[^.!?]+[.!?]+/g); // Split by sentence ending punctuation
  return sentences ? sentences.slice(0, 2).join(' ') : text; // Join the first two sentences
};

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]); // State to hold news data
  const [currentPage, setCurrentPage] = useState(1);  // State to hold current page number
  const [loading, setLoading] = useState(true); // State to show loading spinner
  const [error, setError] = useState(null);  // State to capture errors
  const navigate = useNavigate();  // For navigation

  // Fetch news data from the backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/news'); // Make sure your backend is running here
        setNewsData(response.data);  // Update the news data state
        setLoading(false);
        
        console.log("Original news data: ", response.data);
        // Turn off loading spinner
      } catch (error) {
        console.error('Error fetching news:', error);  // Log the error
        setError('Failed to fetch news');  // Set the error state
        setLoading(false);  // Turn off loading spinner
      }
    };

    fetchNews();
  }, []);

  // Update the "time ago" display every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsData([...newsData]); // Trigger a state update every minute to refresh the time difference
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [newsData]);

  // Calculate total pages
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  // Get the current news items based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = newsData.slice(indexOfFirstItem, indexOfLastItem);

  // Extract latest five news for the sidebar
  const latestFiveNews = newsData.slice(0, 5);  // Get the first 5 news items as sidebar news

  // Change page functions
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

  // Handle navigation to full news page
  const goToFullArticle = (id) => {
    navigate(`/news/${id}`); // Navigate to a detailed news page with the news id
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

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
      >
      </div>

      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="relative">
          <div className="container mx-auto p-4 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Main News Section */}
            <div className="lg:w-3/4 w-full flex flex-col">
              <div className="border border-gray-300 p-6 sm:p-8 lg:p-10 rounded-lg bg-white shadow-xxs ">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6">Richmond Cricket News</h1>

                {currentNews.map((news, index) => (
                  <div key={news.id} className="mb-6">
                    <div className="flex flex-col sm:flex-row mb-4">
                      <img
                        src={news.imageUrl}  // Assuming the image is coming from imageUrl
                        alt={news.title}
                        className="w-full sm:w-40 h-28 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                      />
                      <div className="flex-1">
                        <h2
                          className="text-sm sm:text-sm font-bold cursor-pointer"
                          onClick={() => goToFullArticle(news.id)}  // Handle click to navigate to full article
                        >
                          {news.heading}
                        </h2>
                        <p className="text-gray-700 mt-2 text-xs">
                          {getFirstTwoSentences(news.body)} {/* Show only the first two sentences */}
                          <span
                            className="text-black-500 cursor-pointer"
                            onClick={() => goToFullArticle(news.id)}  // Navigate to the full article
                          >
                            ...Read more
                          </span>
                        </p>
                        <span className="text-xxs text-gray-500 mt-2 block">
                          {new Date(news.dateTime).toLocaleDateString()} • {timeAgo(news.dateTime)} • {news.author}
                        </span>
                      </div>
                    </div>
                    {index < currentNews.length - 1 && <hr className="border-gray-300 my-4" />}
                  </div>
                ))}

                {/* Pagination controls */}
                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={goToFirstPage}
                    className="px-3 py-2 border rounded-lg mx-1 text-sm"
                    disabled={currentPage === 1}
                  >
                    «
                  </button>
                  <button
                    onClick={goToPreviousPage}
                    className="px-3 py-2 border rounded-lg mx-1 text-sm"
                    disabled={currentPage === 1}
                  >
                    ‹
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-2 border rounded-lg mx-1 text-sm ${
                        currentPage === i + 1 ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                                           {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={goToNextPage}
                    className="px-3 py-2 border rounded-lg mx-1 text-sm"
                    disabled={currentPage === totalPages}
                  >
                    ›
                  </button>
                  <button
                    onClick={goToLastPage}
                    className="px-3 py-2 border rounded-lg mx-1 text-sm"
                    disabled={currentPage === totalPages}
                  >
                    »
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="lg:w-1/4 w-full">
              <div className="border-2 border-gray-200 p-4 rounded-lg bg-white shadow-sm">
                <h2 className="text-lg font-semibold mb-6">Latest</h2>
                {latestFiveNews.map((sidebarItem, index) => (
                  <div key={sidebarItem.id} className="mb-4">
                    <div className="flex">
                      <img
                        src={sidebarItem.imageUrl}  // Assuming the imageUrl property is used for the image
                        alt={sidebarItem.title}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h3
                          className="text-sm font-semibold cursor-pointer"
                          onClick={() => goToFullArticle(sidebarItem.id)}  // Handle click to navigate to full article
                        >
                          {sidebarItem.heading}
                        </h3>
                        {/* Display the date and time ago */}
                        <span className="text-xxs text-gray-500 block">
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


      {/* Footer */}
      <Footer />

    </div>
  );
};

export default NewsPage;


