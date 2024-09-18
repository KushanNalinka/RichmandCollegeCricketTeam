import React, { useState } from "react";
import img1 from "../assets/images/ladyCrick.jpeg";
import img2 from "../assets/images/rashidKhan.jpeg";

const LatestNews = () => {
  const newsItems = [
    {
      title: "Rashid returns as Afghanistan call up fresh faces for South Africa ODIs.",
      image: img2,
    },
    {
      title: "ICC Women's T20 World Cup 2024 Ultimate Guide: Everything you need to know.",
      image: img1,
    },
    {
      title: "Rashid... continues on the field",
      image: img2,
    },
    {
      title: "Afghanistan wins thrilling match against South Africa.",
      image: img1,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleNews = 2.5; // Display 2.5 news items at a time

  const nextSlide = () => {
    if (currentSlide < newsItems.length - visibleNews) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Heading Section - 1/3 of the width */}
          <div className="col-span-1">
            <h1 className="text-6xl font-bold text-outline">LATEST</h1>
            <h2 className="text-6xl font-extrabold text-purple-800 tracking-wide">NEWS</h2>
            <p className="text-gray-500 mt-4 max-w-xs">
              Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
            </p>
            <button className="mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition">
              MORE HERE &rarr;
            </button>
          </div>

          {/* Right News Section - 2/3 of the width */}
          <div className="col-span-2">
            {/* News carousel */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 40}%)` }} // 40% moves by 1/2.5 of the container width
              >
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                    <div className="p-4">
                      <p className="font-semibold text-gray-700">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow buttons below the carousel */}
            <div className="flex justify-center mt-4 space-x-8">
              {/* Left arrow */}
              <button
                onClick={prevSlide}
                className={`text-4xl font-bold focus:outline-none ${
                  currentSlide === 0 ? "text-gray-300" : "text-purple-500 hover:text-purple-700"
                }`}
                disabled={currentSlide === 0}
              >
                &#8592;
              </button>

              {/* Right arrow */}
              <button
                onClick={nextSlide}
                className={`text-4xl font-bold focus:outline-none ${
                  currentSlide >= newsItems.length - visibleNews
                    ? "text-gray-300"
                    : "text-purple-500 hover:text-purple-700"
                }`}
                disabled={currentSlide >= newsItems.length - visibleNews}
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