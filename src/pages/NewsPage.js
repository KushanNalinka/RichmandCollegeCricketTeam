import React, { useState } from 'react';
import Navbar from "../components/MemberNavbar";

import topImage from '../assets/images/BG3.png';
import Footer from '../components/Footer';

// Sample data for the news articles and sidebar
const newsData = [
  {
    id: 1,
    title: 'Richmond College Dominates the Big Match 2024',
    description: 'Richmond College continued their dominance, securing an impressive victory in the 2024 big match against Mahinda College.',
    date: '23-Sep-2024',
    time: '11 hrs ago',
    author: 'Sri Lanka School Cricket Staff',
    image: 'https://fos.cmb.ac.lk/blog/wp-content/uploads/2018/03/collage-1.jpg',
  },
  {
    id: 2,
    title: 'Richmond Cricket Captain Wins Player of the Match in Thrilling Victory',
    description: 'The Richmond College cricket captain led his team to victory with an outstanding all-round performance, securing the Player of the Match award.',
    date: '23-Sep-2024',
    time: '12 hrs ago',
    author: 'Sri Lanka Cricket News',
    image: 'https://assets.roar.media/assets/vIQdBIQUTIQgJr8Q_Article-Cover_Wall-Street-Journal.jpg?w=679',
  },
  {
    id: 3,
    title: 'Richmond College Cricket Team Celebrates Unbeaten Streak',
    description: 'Richmond College continues their winning streak in the ongoing season, remaining unbeaten in all matches so far.',
    date: '22-Sep-2024',
    time: '15 hrs ago',
    author: 'Cricket Journal',
    image: 'https://fos.cmb.ac.lk/blog/wp-content/uploads/2018/03/collage-1.jpg',
  },
  {
    id: 4,
    title: 'Historic Win for Richmond College in Big Match 2024',
    description: 'Richmond College secures a historic victory, showcasing an exceptional performance in all departments.',
    date: '21-Sep-2024',
    time: '10 hrs ago',
    author: 'Daily Sports News',
    image: 'https://assets.roar.media/assets/vIQdBIQUTIQgJr8Q_Article-Cover_Wall-Street-Journal.jpg?w=679',
  },
  {
    id: 5,
    title: 'Richmond College Eyes Another Championship',
    description: 'After a dominant display in the Big Match 2024, Richmond College aims for another championship title this season.',
    date: '20-Sep-2024',
    time: '8 hrs ago',
    author: 'Sri Lanka Cricket Staff',
    image: 'https://fos.cmb.ac.lk/blog/wp-content/uploads/2018/03/collage-1.jpg',
  },
  // Add more news items here as needed
];

const sidebarData = [
  {
    id: 1,
    title: 'Richmond College Big Match: A Look Back at the Memorable Wins',
    date: '23-Sep-2024',
    time: '21 hrs ago',
    author: 'Andrew Fidel Fernando',
    image: 'https://fos.cmb.ac.lk/blog/wp-content/uploads/2018/03/collage-1.jpg',
  },
  {
    id: 2,
    title: 'Stats - Richmond College Cricketers Shining in the 2024 Season',
    date: '22-Sep-2024',
    author: 'Sampath Bandarupalli',
    image: 'https://assets.roar.media/assets/vIQdBIQUTIQgJr8Q_Article-Cover_Wall-Street-Journal.jpg?w=679',
  },
  
 
];

// Pagination settings
const itemsPerPage = 4;

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  // Get the current news items based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = newsData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page functions
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);

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
                      src={news.image}
                      alt={news.title}
                      className="w-full sm:w-40 h-28 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                    />
                    <div className="flex-1">
                      <h2 className="text-sm sm:text-sm font-bold cursor-pointer">{news.title}</h2>
                      <p className="text-gray-700 mt-2 text-xs">{news.description}</p>
                      <span className="text-xxs text-gray-500 mt-2 block">
                        {news.date} • {news.time} • {news.author}
                      </span>
                    </div>
                  </div>
                  {/* Horizontal line between news items */}
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
              {sidebarData.map((sidebarItem, index) => (
                <div key={sidebarItem.id} className="mb-4">
                  <div className="flex">
                    <img
                      src={sidebarItem.image}
                      alt={sidebarItem.title}
                      className="w-16 h-16 object-cover rounded-lg mr-3"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium cursor-pointer">{sidebarItem.title}</h3>
                      <span className="text-xs text-gray-500">
                        {sidebarItem.date} • {sidebarItem.time} • {sidebarItem.author}
                      </span>
                    </div>
                  </div>
                  {index < sidebarData.length - 1 && <hr className="border-gray-200 my-3" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
   
  );
};

export default NewsPage;