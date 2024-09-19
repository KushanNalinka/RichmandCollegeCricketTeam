

// import React, { useState } from "react";
// import backgroundImage from '../assets/images/Highlights.png'; // Background image path

// const HighlightTabs = () => {
//   const [activeTab, setActiveTab] = useState("latest");
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Sample image data for sliders
//   const latestVideos = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
//     { id: 2, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 2" },
//     { id: 3, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 3" },
//     { id: 4, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 4" },
//   ];
//   const matchHighlights = [
//     { id: 1, img: "https://via.placeholder.com/500x300", title: "Match 1" },
//     { id: 2, img: "https://via.placeholder.com/500x300", title: "Match 2" },
//     { id: 3, img: "https://via.placeholder.com/500x300", title: "Match 3" },
//     { id: 4, img: "https://via.placeholder.com/500x300", title: "Match 4" },
//   ];
//   const playerHighlights = [
//     { id: 1, img: "https://via.placeholder.com/500x300", title: "Player 1" },
//     { id: 2, img: "https://via.placeholder.com/500x300", title: "Player 2" },
//     { id: 3, img: "https://via.placeholder.com/500x300", title: "Player 3" },
//     { id: 4, img: "https://via.placeholder.com/500x300", title: "Player 4" },
//   ];

//   const getSliderData = () => {
//     switch (activeTab) {
//       case "latest":
//         return latestVideos;
//       case "match":
//         return matchHighlights;
//       case "player":
//         return playerHighlights;
//       default:
//         return [];
//     }
//   };

//   const sliderData = getSliderData();

//   const handleTabSwitch = (tab) => {
//     setActiveTab(tab);
//     setActiveIndex(0); // Reset slider to the first item
//   };

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div
//       className="bg-cover bg-center text-white py-10"
//       style={{  
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//      }}
//     >
//       {/* Tabs Section */}
//       <div className="flex justify-center space-x-10 mt-64">
//         <button
//           className={`py-2 px-4 ${
//             activeTab === "latest" ? "text-yellow-500 border-b-2 border-yellow-500" : ""
//           }`}
//           onClick={() => handleTabSwitch("latest")}
//         >
//           LATEST VIDEOS
//         </button>
//         <button
//           className={`py-2 px-4 ${
//             activeTab === "match" ? "text-yellow-500 border-b-2 border-yellow-500" : ""
//           }`}
//           onClick={() => handleTabSwitch("match")}
//         >
//           MATCH HIGHLIGHTS
//         </button>
//         <button
//           className={`py-2 px-4 ${
//             activeTab === "player" ? "text-yellow-500 border-b-2 border-yellow-500" : ""
//           }`}
//           onClick={() => handleTabSwitch("player")}
//         >
//           PLAYER HIGHLIGHTS
//         </button>
//       </div>

//       {/* Slider Section */}
//       <div className="relative mt-10">
//         {/* Slider Images */}
//         <div className="flex justify-center space-x-6"> {/* Increased space between slider divs */}
//           {sliderData.slice(activeIndex, activeIndex + 3).map((item) => (
//             <div
//               key={item.id}
//               className="w-[400px] h-[500px] bg-transparent text-black p-4 rounded-xl" // Updated rounded corners
//             >
//               {activeTab === "latest" ? (
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src={item.url}
//                   title={item.title}
//                   frameBorder="0"
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-full object-cover rounded-md mb-2"
//                 />
//               )}
//               <p className="text-center">{item.title}</p>
//             </div>
//           ))}
//         </div>

//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-2"
//         >
//           &lt;
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-2"
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Slider Dots */}
//       <div className="flex justify-center mt-4">
//         {sliderData.map((_, idx) => (
//           <span
//             key={idx}
//             className={`w-3 h-3 rounded-full mx-1 ${
//               idx === activeIndex ? "bg-yellow-500" : "bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HighlightTabs;

import React, { useState } from "react";
import backgroundImage from '../assets/images/Highlights.png'; // Background image path

const HighlightTabs = () => {
  const [activeTab, setActiveTab] = useState("latest");
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample image data for sliders
  const latestVideos = [
    { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
    { id: 2, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 2" },
    { id: 3, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 3" },
    { id: 4, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 4" },
  ];
  const matchHighlights = [
    { id: 1, img: "https://via.placeholder.com/500x300", title: "Match 1" },
    { id: 2, img: "https://via.placeholder.com/500x300", title: "Match 2" },
    { id: 3, img: "https://via.placeholder.com/500x300", title: "Match 3" },
    { id: 4, img: "https://via.placeholder.com/500x300", title: "Match 4" },
  ];
  const playerHighlights = [
    { id: 1, img: "https://via.placeholder.com/500x300", title: "Player 1" },
    { id: 2, img: "https://via.placeholder.com/500x300", title: "Player 2" },
    { id: 3, img: "https://via.placeholder.com/500x300", title: "Player 3" },
    { id: 4, img: "https://via.placeholder.com/500x300", title: "Player 4" },
  ];

  const getSliderData = () => {
    switch (activeTab) {
      case "latest":
        return latestVideos;
      case "match":
        return matchHighlights;
      case "player":
        return playerHighlights;
      default:
        return [];
    }
  };

  const sliderData = getSliderData();

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0); // Reset slider to the first item
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="bg-cover bg-center text-white py-10"
      style={{  
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
     }}
    >
      {/* Tabs Section */}
      <div className="flex justify-center space-x-10 mt-64">
        <button
          className={`py-2 px-4 ${
            activeTab === "latest" ? "text-yellow-500 border-b-8 border-yellow-500" : ""
          }`}
          onClick={() => handleTabSwitch("latest")}
        >
          LATEST VIDEOS
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "match" ? "text-yellow-500 border-b-8 border-yellow-500" : ""
          }`}
          onClick={() => handleTabSwitch("match")}
        >
          MATCH HIGHLIGHTS
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "player" ? "text-yellow-500 border-b-8 border-yellow-500" : ""
          }`}
          onClick={() => handleTabSwitch("player")}
        >
          PLAYER HIGHLIGHTS
        </button>
      </div>

      {/* Long Line and More Videos Button */}
      <div className="relative  flex justify-center items-center">
        <hr className="w-full border-gray-300" />
        <button
          className="absolute right-0 transform -translate-y-1/4 bg-white text-black rounded-lg px-4 py-2 text-sm font-bold"
        >
          MORE VIDEOS
        </button>
      </div>

      {/* Slider Section */}
      <div className="relative mt-10">
        {/* Slider Images */}
        <div className="flex justify-center space-x-6"> {/* Increased space between slider divs */} 
          {sliderData.slice(activeIndex, activeIndex + 3).map((item) => (
            <div
              key={item.id}
              className="w-[400px] h-[500px] bg-transparent text-black p-4 rounded-xl" // Updated rounded corners
            >
              {activeTab === "latest" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={item.url}
                  title={item.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md mb-2"
                />
              )}
              <p className="text-center">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-2"
        >
          &lt;
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-2"
        >
          &gt;
        </button>
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center mt-4">
        {sliderData.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full mx-1 ${
              idx === activeIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HighlightTabs;
