import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making the API request
import { useNavigate } from 'react-router-dom';

const LatestNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleNews = 1; // Show 1 news item at a time on mobile
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;


  
  const handleNewsClick = (id) => {
    navigate(`/initial-news/${id}`);
  };
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_URL}news`);
        const data = response.data;

        const topFiveNews = data.slice(0, 5).map((newsItem) => ({
            id: newsItem.id, // Ensure each news item has its ID
            title: newsItem.heading,
            image: Array.isArray(newsItem.images) && newsItem.images.length > 0 
              ? `http://rcc.dockyardsoftware.com/images/${newsItem.images[0].imageUrl ? newsItem.images[0].imageUrl.split("/").pop() : "default.jpg"}?cacheBust=${Date.now()}`
              : `http://rcc.dockyardsoftware.com/images/default.jpg?cacheBust=${Date.now()}`,
          }));
          

        setNewsItems(topFiveNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const nextSlide = () => {
    if (currentSlide < newsItems.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); // Loop back to the first slide
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(newsItems.length - 1); // Loop to the last slide
    }
  };

  const handleButtonClick = () => {
    navigate('/initial-news'); // Replace with your target page
  };

  return (
    <section className="bg-white py-12">
      <div className="flex flex-col md:flex-row gap-0">
        {/* Left Heading Section */}
        <div className="w-full md:w-[50%] mt-8 md:mt-24 md:ml-20 px-4 md:px-0">
          <div className="flex items-end space-x-0">
            <h1 className="text-2xl md:text-[3rem] font-extrabold text-[#00175F] tracking-wide">
              LATEST NEWS
            </h1>
          </div>
          <p className="text-gray-500 mt-4 max-w-md">
            Stay tuned for the latest news from our school cricket teams! From
            thrilling match victories to upcoming tournaments and player
            achievements, this is your go-to spot for all the action.
          </p>
          <button 
            onClick={handleButtonClick}
            className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-[#00175F] text-white font-semibold rounded-full shadow-lg hover:bg-[#00175F] transition">
            MORE HERE &rarr;
          </button>
        </div>

        {/* Right News Section */}
        <div className="w-full md:w-[100%] mt-8 md:ml-20">
          {/* Mobile News Carousel */}
          <div className="block md:hidden">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Move by full width
              >
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 p-4 rounded-lg overflow-hidden shadow-lg"
                  >
                    {/* <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[250px] object-cover rounded-lg"
                    />
                    <div className="p-4">
                      <p className="font-semibold text-gray-700 text-sm">{item.title}</p>
                    </div> */}

<div className="w-full flex-shrink-0 p-4 rounded-lg overflow-hidden shadow-lg">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-[250px] object-cover rounded-lg cursor-pointer"
    onClick={() => handleNewsClick(item.id)} // Ensure image navigates
  />
  <div className="p-4">
    <p 
      className="font-semibold text-gray-700 text-sm cursor-pointer hover:text-blue-600"
      onClick={() => handleNewsClick(item.id)} // Ensure title navigates
    >
      {item.title}
    </p>
  </div>
</div>

                  </div>
                ))}
              </div>
            </div>

            {/* Arrow buttons for mobile carousel */}
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={prevSlide}
                className={`text-2xl font-bold focus:outline-none p-2 rounded-full border-2 border-[#4A0D34] ${
                  currentSlide === 0 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
                }`}
                disabled={newsItems.length <= 1} // Disable if only one news item
              >
                &#8592;
              </button>

              <button
                onClick={nextSlide}
                className={`text-2xl font-bold focus:outline-none p-2 rounded-full border-2 border-[#4A0D34] ${
                  currentSlide >= newsItems.length - 1 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
                }`}
                disabled={newsItems.length <= 1} // Disable if only one news item
              >
                &#8594;
              </button>
            </div>
          </div>

          {/* Desktop News Carousel */}
          <div className="hidden md:block">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 33.33}%)` }} // Show 3 items at a time
              >
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-[100%] md:w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
                  >
                    {/* <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[250px] md:h-[500px] object-cover rounded-lg"
                    />
                    <div className="p-4">
                      <p className="font-semibold text-gray-700 text-sm md:text-base">{item.title}</p>
                    </div> */}

<div className="w-full flex-shrink-0 p-4 rounded-lg overflow-hidden shadow-lg">
  <img
    src={item.image}
    alt={item.title}
  className="w-full h-[250px] md:h-[500px] object-cover rounded-lg cursor-pointer"
    onClick={() => handleNewsClick(item.id)} // Ensure image navigates
  />
  <div className="p-4">
    <p 
    className="font-semibold text-gray-700 text-sm md:text-base cursor-pointer"
      onClick={() => handleNewsClick(item.id)} // Ensure title navigates
    >
      {item.title}
    </p>
  </div>
</div>

                  </div>
                ))}
              </div>
            </div>

            {/* Arrow buttons for desktop carousel */}
            <div className="flex justify-center mt-4 space-x-4 md:space-x-8">
              <button
                onClick={prevSlide}
                className={`text-2xl md:text-4xl font-bold focus:outline-none p-2 md:p-4 rounded-full border-2 border-[#4A0D34] ${
                  currentSlide === 0 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
                }`}
                disabled={newsItems.length <= 1} // Disable if only one news item
              >
                &#8592;
              </button>

              <button
                onClick={nextSlide}
                className={`text-2xl md:text-4xl font-bold focus:outline-none p-2 md:p-4 rounded-full border-2 border-[#4A0D34] ${
                  currentSlide >= newsItems.length - 1 ? "text-[#CBECFF]" : "text-[#4A0D34] hover:text-[#00175F]"
                }`}
                disabled={newsItems.length <= 1} // Disable if only one news item
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;