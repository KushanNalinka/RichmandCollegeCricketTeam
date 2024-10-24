

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

//   const getThreeItems = () => {
//     // Create a circular array that always shows 3 items
//     const totalItems = sliderData.length;
//     const indices = [
//       activeIndex,
//       (activeIndex + 1) % totalItems,
//       (activeIndex + 2) % totalItems,
//     ];
//     return indices.map((index) => sliderData[index]);
//   };

//   return (
//     <div
//       className="bg-cover bg-center text-white py-10"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Tabs Section */}
//       <div className="flex justify-center space-x-10 mt-64">
//         <button
//           className={`py-2 px-4 ${
//             activeTab === "latest" ? "text-yellow-500 border-b-8 border-yellow-500" : ""
//           }`}
//           onClick={() => handleTabSwitch("latest")}
//         >
//           LATEST VIDEOS
//         </button>
//         <button
//           className={`py-2 px-4 ${
//             activeTab === "match" ? "text-yellow-500 border-b-8 border-yellow-500" : ""
//           }`}
//           onClick={() => handleTabSwitch("match")}
//         >
//           MATCH HIGHLIGHTS
//         </button>
//         <button
//           className={`py-2 px-4 ${
//             activeTab === "player" ? "text-yellow-500 border-b-8 border-yellow-500" : ""
//           }`}
//           onClick={() => handleTabSwitch("player")}
//         >
//           PLAYER HIGHLIGHTS
//         </button>
//       </div>

//       {/* Long Line and More Videos Button */}
//       <div className="relative flex justify-center items-center">
//         <hr className="w-full border-gray-300" />
//         <button
//           className="absolute right-0 transform -translate-y-1/4 bg-white text-black rounded-lg px-4 py-2 text-sm font-bold"
//         >
//           MORE VIDEOS
//         </button>
//       </div>

//       {/* Slider Section */}
//       <div className="relative mt-10">
//         {/* Slider Images */}
//         <div className="flex justify-center space-x-6">
//           {getThreeItems().map((item) => (
//             <div
//               key={item.id}
//               className="w-[400px] h-[500px] bg-transparent text-black p-4 rounded-xl"
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

// import React, { useState } from "react";
// import backgroundImage from '../assets/images/Highlights.png'; // Background image path

// const HighlightTabs = () => {
//   const [activeTab, setActiveTab] = useState("latest");
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Sample data for sliders
//   const latestVideos = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
//     { id: 2, url: "https://www.youtube.com/watch?v=1tCTB4m91nE", title: "Video 2" },
//     { id: 3, url: "https://www.youtube.com/shorts/uKptso4JzjM", title: "Video 3" },
//     { id: 4, url: "https://www.youtube.com/shorts/JpeF_ky3UzA", title: "Video 4" },
//     { id: 5, url: "https://www.youtube.com/shorts/dvzqBBSQLL0", title: "Video 5" },
//     { id: 6, url: "https://www.youtube.com/shorts/saPnnRR8jNs", title: "Video 6" },
//   ];

//   const matchHighlights = [
//     { id: 1, img: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Match 1" },
//     { id: 2, img: "https://www.youtube.com/shorts/RklFfjO5ynM", title: "Match 2" },
//     { id: 3, img: "https://www.youtube.com/shorts/uKptso4JzjM", title: "Match 3" },
//     { id: 4, img: "https://www.youtube.com/shorts/JpeF_ky3UzA", title: "Match 4" },
//     { id: 5, img: "https://www.youtube.com/shorts/dvzqBBSQLL0", title: "Match 5" },
//     { id: 6, img: "https://www.youtube.com/shorts/saPnnRR8jNs", title: "Match 6" },
//   ];

//   const playerHighlights = [
//     { id: 1, img: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Player 1" },
//     { id: 2, img: "https://www.youtube.com/shorts/RklFfjO5ynM", title: "Player 2" },
//     { id: 3, img: "https://www.youtube.com/shorts/uKptso4JzjM", title: "Player 3" },
//     { id: 4, img: "https://www.youtube.com/shorts/JpeF_ky3UzA", title: "Player 4" },
//     { id: 5, img: "https://www.youtube.com/shorts/dvzqBBSQLL0", title: "Player 5" },
//     { id: 6, img: "https://www.youtube.com/shorts/saPnnRR8jNs", title: "Player 6" },
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

//   const handleDotClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div
//       className="bg-cover bg-center text-white py-10"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Tabs Section */}
//       <div className="flex justify-center space-x-10 mt-64">
//         <button
//           className={`py-2 px-4 ${activeTab === "latest" ? "text-yellow-500 border-b-8 border-yellow-500" : ""}`}
//           onClick={() => handleTabSwitch("latest")}
//         >
//           LATEST VIDEOS
//         </button>
//         <button
//           className={`py-2 px-4 ${activeTab === "match" ? "text-yellow-500 border-b-8 border-yellow-500" : ""}`}
//           onClick={() => handleTabSwitch("match")}
//         >
//           MATCH HIGHLIGHTS
//         </button>
//         <button
//           className={`py-2 px-4 ${activeTab === "player" ? "text-yellow-500 border-b-8 border-yellow-500" : ""}`}
//           onClick={() => handleTabSwitch("player")}
//         >
//           PLAYER HIGHLIGHTS
//         </button>
//       </div>

//       {/* Long Line and More Videos Button */}
//       <div className="relative flex justify-center items-center">
//         <hr className="w-full border-gray-300" />
//         <button className="absolute right-0 transform -translate-y-1/4 bg-white text-black rounded-lg px-4 py-2 text-sm font-bold">
//           MORE VIDEOS
//         </button>
//       </div>

//       {/* Slider Section */}
//       <div className="relative mt-10">
//         {/* Slider Images */}
//         <div className="flex justify-center space-x-4">
//           {sliderData.length > 0 && (
//             Array.from({ length: 3 }).map((_, idx) => {
//               const index = (activeIndex + idx) % sliderData.length;
//               return (
//                 <div key={index} className="w-[400px] h-[500px] bg-transparent text-black p-4 rounded-xl">
//                   {activeTab === "latest" ? (
//                     <iframe
//                       width="100%"
//                       height="100%"
//                       src={sliderData[index].url}
//                       title={sliderData[index].title}
//                       frameBorder="0"
//                       allowFullScreen
//                       className="rounded-lg"
//                     ></iframe>
//                   ) : (
//                     <img src={sliderData[index].img} alt={sliderData[index].title} className="w-full h-full object-cover rounded-md mb-2" />
//                   )}
//                   <p className="text-center">{sliderData[index].title}</p>
//                 </div>
//               );
//             })
//           )}
//         </div>

//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-4 ml-12"
//         >
//           &lt;
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-4 mr-12"
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Slider Dots */}
//       <div className="flex justify-center mt-4">
//         {sliderData.length > 0 && (
//           Array.from({ length: sliderData.length }).map((_, idx) => (
//             <span
//               key={idx}
//               onClick={() => handleDotClick(idx)}
//               className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${activeIndex === idx ? "bg-yellow-500" : "bg-gray-300"}`}
//             ></span>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default HighlightTabs;

// import React, { useState } from "react";
// import backgroundImage from '../assets/images/Highlights.png'; // Background image path

// const HighlightTabs = () => {
//   const [activeTab, setActiveTab] = useState("latest");
//   const [activeIndex, setActiveIndex] = useState(0);

//   const latestVideos = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
//     { id: 2, url: "https://www.youtube.com/embed/3Le8kZFzaS0", title: "Video 2" },
//     { id: 3, url: "https://www.youtube.com/embed/gXoDp1qGhdw", title: "Video 3" },
//     { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Video 4" },
//     { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Video 5" },
//     { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Video 6" },
//   ];
  
//   const matchHighlights = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
//     { id: 2, url: "https://www.youtube.com/embed/3Le8kZFzaS0", title: "Video 2" },
//     { id: 3, url: "https://www.youtube.com/embed/gXoDp1qGhdw", title: "Video 3" },
//     { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Video 4" },
//     { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Video 5" },
//     { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Video 6" },
//   ];
  
//   const playerHighlights = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Player 1" },
//     { id: 2, url: "https://www.youtube.com/embed/RklFfjO5ynM", title: "Player 2" },
//     { id: 3, url: "https://www.youtube.com/embed/uKptso4JzjM", title: "Player 3" },
//     { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Player 4" },
//     { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Player 5" },
//     { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Player 6" },
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

//   const handleDotClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div
//       className="bg-cover bg-center text-white py-10"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Tabs Section */}
//       <div className="flex justify-center space-x-10 mt-64">
//         <button
//           className={`py-2 px-4 ${activeTab === "latest" ? "text-yellow-500 border-b-8 border-yellow-500" : ""}`}
//           onClick={() => handleTabSwitch("latest")}
//         >
//           LATEST VIDEOS
//         </button>
//         <button
//           className={`py-2 px-4 ${activeTab === "match" ? "text-yellow-500 border-b-8 border-yellow-500" : ""}`}
//           onClick={() => handleTabSwitch("match")}
//         >
//           MATCH HIGHLIGHTS
//         </button>
//         <button
//           className={`py-2 px-4 ${activeTab === "player" ? "text-yellow-500 border-b-8 border-yellow-500" : ""}`}
//           onClick={() => handleTabSwitch("player")}
//         >
//           PLAYER HIGHLIGHTS
//         </button>
//       </div>

//       {/* Long Line and More Videos Button */}
//       <div className="relative flex justify-center items-center">
//         <hr className="w-full border-gray-300" />
//         <button className="absolute right-0 transform -translate-y-1/4 bg-white text-black rounded-lg px-4 py-2 text-sm font-bold">
//           MORE VIDEOS
//         </button>
//       </div>

//       {/* Slider Section */}
//       <div className="relative mt-10">
//         {/* Slider Images */}
//         <div className="flex justify-center space-x-4">
//           {sliderData.length > 0 && (
//             Array.from({ length: 3 }).map((_, idx) => {
//               const index = (activeIndex + idx) % sliderData.length;
//               return (
//                 <div key={index} className="w-[400px] h-[500px] bg-transparent text-black p-4 rounded-xl">
//                   {activeTab === "latest" ? (
//                     <iframe
//                       width="100%"
//                       height="100%"
//                       src={sliderData[index].url}
//                       title={sliderData[index].title}
//                       frameBorder="0"
//                       allowFullScreen
//                       className="rounded-lg"
//                     ></iframe>
//                   ) : (
//                     <img src={sliderData[index].img} alt={sliderData[index].title} className="w-full h-full object-cover rounded-md mb-2" />
//                   )}
//                   <p className="text-center">{sliderData[index].title}</p>
//                 </div>
//               );
//             })
//           )}
//         </div>

//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-4 ml-12"
//         >
//           &lt;
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-4 mr-12"
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Slider Dots */}
//       <div className="flex justify-center mt-4">
//         {sliderData.length > 0 && (
//           Array.from({ length: sliderData.length }).map((_, idx) => (
//             <span
//               key={idx}
//               onClick={() => handleDotClick(idx)}
//               className={`mx-1 cursor-pointer ${activeIndex === idx ? "bg-yellow-500 w-8 h-2 rounded-md" : "bg-gray-300 w-2 h-2 rounded-full"}`}
//             ></span>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default HighlightTabs;

// Most corrected code above without video showings.

// import React, { useState } from "react";
// import backgroundImage from '../assets/images/Highlights.png'; // Background image path

// const HighlightTabs = () => {
//   const [activeTab, setActiveTab] = useState("latest");
//   const [activeIndex, setActiveIndex] = useState(0);

//   const latestVideos = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
//     { id: 2, url: "https://www.youtube.com/embed/3Le8kZFzaS0", title: "Video 2" },
//     { id: 3, url: "https://www.youtube.com/embed/gXoDp1qGhdw", title: "Video 3" },
//     { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Video 4" },
//     { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Video 5" },
//     { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Video 6" },
//   ];
  
//   const matchHighlights = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
//     { id: 2, url: "https://www.youtube.com/embed/3Le8kZFzaS0", title: "Video 2" },
//     { id: 3, url: "https://www.youtube.com/embed/gXoDp1qGhdw", title: "Video 3" },
//     { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Video 4" },
//     { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Video 5" },
//     { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Video 6" },
//   ];
  
//   const playerHighlights = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Player 1" },
//     { id: 2, url: "https://www.youtube.com/embed/RklFfjO5ynM", title: "Player 2" },
//     { id: 3, url: "https://www.youtube.com/embed/uKptso4JzjM", title: "Player 3" },
//     { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Player 4" },
//     { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Player 5" },
//     { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Player 6" },
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

//   const handleDotClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div
//       className="bg-cover bg-center text-white py-10"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Tabs Section */}
//       <div className="flex justify-center space-x-10 mt-64">
//         <button
//           className={`py-2 px-4 ${activeTab === "latest" ? "text-yellow-500 border-b-8 border-yellow-500" : ""}`}
//           onClick={() => handleTabSwitch("latest")}
//         >
//           LATEST VIDEOS
//         </button>
//         <button
//           className={`py-2 px-4 ${activeTab === "match" ? "text-yellow-500 border-b-8 border-yellow-500" : ""}`}
//           onClick={() => handleTabSwitch("match")}
//         >
//           MATCH HIGHLIGHTS
//         </button>
//         <button
//           className={`py-2 px-4 ${activeTab === "player" ? "text-yellow-500 border-b-8 border-yellow-500" : ""}`}
//           onClick={() => handleTabSwitch("player")}
//         >
//           PLAYER HIGHLIGHTS
//         </button>
//       </div>

//       {/* Long Line and More Videos Button */}
//       <div className="relative flex justify-center items-center">
//         <hr className="w-full border-gray-300" />
//         <button className="absolute right-0 transform -translate-y-1/4 bg-white text-black rounded-lg px-4 py-2 text-sm font-bold">
//           MORE VIDEOS
//         </button>
//       </div>

//       {/* Slider Section */}
//       <div className="relative mt-10">
//         {/* Slider Videos */}
//         <div className="flex justify-center space-x-4">
//           {sliderData.length > 0 && (
//             Array.from({ length: 3 }).map((_, idx) => {
//               const index = (activeIndex + idx) % sliderData.length;
//               return (
//                 <div key={index} className="w-[400px] h-[500px] bg-transparent text-black p-4 rounded-xl">
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src={sliderData[index].url}
//                     title={sliderData[index].title}
//                     frameBorder="0"
//                     allowFullScreen
//                     className="rounded-lg"
//                   ></iframe>
//                   <p className="text-center">{sliderData[index].title}</p>
//                 </div>
//               );
//             })
//           )}
//         </div>

//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-4 ml-12"
//         >
//           &lt;
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 rounded-full p-4 mr-12"
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Slider Dots */}
//       <div className="flex justify-center mt-4">
//         {sliderData.length > 0 && (
//           Array.from({ length: sliderData.length }).map((_, idx) => (
//             <span
//               key={idx}
//               onClick={() => handleDotClick(idx)}
//               className={`mx-1 cursor-pointer ${activeIndex === idx ? "bg-yellow-500 w-8 h-2 rounded-md" : "bg-gray-300 w-2 h-2 rounded-full"}`}
//             ></span>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default HighlightTabs;

// Most corrected code with properly displaying videos,
// import React, { useState } from "react";
// import backgroundImage from '../assets/images/Highlightss.png'; // Background image path

// const HighlightTabs = () => {
//   const [activeTab, setActiveTab] = useState("latest");
//   const [activeIndex, setActiveIndex] = useState(0);

//   const latestVideos = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
//     { id: 2, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 2" },
//     { id: 3, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 3" },
//     { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Video 4" },
//     { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Video 5" },
//     { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Video 6" },
//   ];

//   const matchHighlights = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
//     { id: 2, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 2" },
//     { id: 3, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 3" },
//     { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Video 4" },
//     { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Video 5" },
//     { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Video 6" },
//   ];

//   const playerHighlights = [
//     { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Player 1" },
//     { id: 2, url: "https://www.youtube.com/embed/RklFfjO5ynM", title: "Player 2" },
//     { id: 3, url: "https://www.youtube.com/embed/uKptso4JzjM", title: "Player 3" },
//     { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Player 4" },
//     { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Player 5" },
//     { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Player 6" },
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

//   const handleDotClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div
//       className="bg-cover bg-center text-white py-10 "
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >

//        {/* Background and foreground text combined */}
//        <div className="relative w-fit ml-20">
//         {/* Background and foreground text combined */}
//         <p className="text-[2rem] md:text-[3rem] lg:text-[3rem] font-extrabold text-white ">
//           RICHMOND HIGHLIGHTS
//         </p>
//       </div>
//       {/* Tabs Section */}
//       <div className="flex flex-col md:flex-row ml-20 space-x-0 md:space-x-10 mt-6">
//         <button
//           className={`py-2 px-4 font-bold ${activeTab === "latest" ? "text-white border-b-8 border-white" : ""}`}
//           onClick={() => handleTabSwitch("latest")}
//         >
//           LATEST VIDEOS
//         </button>
//         <button
//           className={`py-2 px-4 font-bold ${activeTab === "match" ? "text-white border-b-8 border-white" : ""}`}
//           onClick={() => handleTabSwitch("match")}
//         >
//           MATCH HIGHLIGHTS
//         </button>
//         <button
//           className={`py-2 px-4 font-bold ${activeTab === "player" ? "text-white border-b-8 border-white" : ""}`}
//           onClick={() => handleTabSwitch("player")}
//         >
//           PLAYER HIGHLIGHTS
//         </button>
//       </div>

//       {/* Long Line and More Videos Button */}
//       <div className="relative flex justify-center items-center">
//         <hr className="w-full border-gray-300 ml-20 mr-20" />
//         <button className="absolute right-0 transform -translate-y-1/4 bg-white text-black rounded-lg px-4 py-1 text-sm font-bold mr-16">
//           MORE VIDEOS
//         </button>
//       </div>

//       {/* Slider Section */}
//       <div className="relative mt-10">
//         {/* Slider Videos */}
//         <div className="flex justify-center space-x-4">
//           {sliderData.length > 0 && (
//             Array.from({ length: 3 }).map((_, idx) => {
//               const index = (activeIndex + idx) % sliderData.length;
//               return (
//                 <div key={index} className="w-full md:w-[400px] h-[300px] md:h-[600px] bg-transparent text-black p-4 rounded-xl">
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src={sliderData[index].url}
//                     title={sliderData[index].title}
//                     frameBorder="0"
//                     allowFullScreen
//                     className="rounded-lg"
//                   ></iframe>
                 
//                 </div>
//               );
//             })
//           )}
//         </div>

//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-4 ml-2 md:ml-12 text-6xl"
//         >
//           &lt;
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-4 mr-2 md:mr-12 text-6xl"
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Slider Dots */}
//       <div className="flex justify-center mt-4">
//         {sliderData.length > 0 && (
//           Array.from({ length: sliderData.length }).map((_, idx) => (
//             <span
//               key={idx}
//               onClick={() => handleDotClick(idx)}
//               className={`mx-1 cursor-pointer ${activeIndex === idx ? "bg-white w-8 h-2 rounded-md" : "bg-gray-300 w-2 h-2 rounded-full"}`}
//             ></span>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default HighlightTabs;

// import React, { useState, useEffect } from "react";
// import backgroundImage from '../assets/images/Highlightss.png'; // Background image path

// const HighlightTabs = () => {
//   const [activeTab, setActiveTab] = useState("latest");
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [videos, setVideos] = useState({
//     latestVideos: [],
//     matchHighlights: [],
//     playerHighlights: []
//   });

//   // Fetch videos from the API and sort them based on their title
//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/videos");
//         const data = await response.json();

//         const latestVideos = data.filter(video => video.title === "latestVideos");
//         const matchHighlights = data.filter(video => video.title === "matchHighlights");
//         const playerHighlights = data.filter(video => video.title === "playerHighlights");

//         setVideos({
//           latestVideos,
//           matchHighlights,
//           playerHighlights
//         });
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const getSliderData = () => {
//     switch (activeTab) {
//       case "latest":
//         return videos.latestVideos;
//       case "match":
//         return videos.matchHighlights;
//       case "player":
//         return videos.playerHighlights;
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

//   const handleDotClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div
//       className="bg-cover bg-center text-white py-10"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="relative w-fit ml-20">
//         <p className="text-[2rem] md:text-[3rem] lg:text-[3rem] font-extrabold text-white ">
//           RICHMOND HIGHLIGHTS
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row ml-20 space-x-0 md:space-x-10 mt-6">
//         <button
//           className={`py-2 px-4 font-bold ${activeTab === "latest" ? "text-white border-b-8 border-white" : ""}`}
//           onClick={() => handleTabSwitch("latest")}
//         >
//           LATEST VIDEOS
//         </button>
//         <button
//           className={`py-2 px-4 font-bold ${activeTab === "match" ? "text-white border-b-8 border-white" : ""}`}
//           onClick={() => handleTabSwitch("match")}
//         >
//           MATCH HIGHLIGHTS
//         </button>
//         <button
//           className={`py-2 px-4 font-bold ${activeTab === "player" ? "text-white border-b-8 border-white" : ""}`}
//           onClick={() => handleTabSwitch("player")}
//         >
//           PLAYER HIGHLIGHTS
//         </button>
//       </div>

//       <div className="relative flex justify-center items-center">
//         <hr className="w-full border-gray-300 ml-20 mr-20" />
//         <button className="absolute right-0 transform -translate-y-1/4 bg-white text-black rounded-lg px-4 py-1 text-sm font-bold mr-16">
//           MORE VIDEOS
//         </button>
//       </div>

//       <div className="relative mt-10">
//         <div className="flex justify-center space-x-4">
//           {sliderData.length > 0 && (
//             Array.from({ length: 3 }).map((_, idx) => {
//               const index = (activeIndex + idx) % sliderData.length;
//               return (
//                 <div key={index} className="w-full md:w-[400px] h-[300px] md:h-[600px] bg-transparent text-black p-4 rounded-xl">
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src={sliderData[index].url}
//                     title={sliderData[index].title}
//                     frameBorder="0"
//                     allowFullScreen
//                     className="rounded-lg"
//                   ></iframe>
//                 </div>
//               );
//             })
//           )}
//         </div>

//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-4 ml-2 md:ml-12 text-6xl"
//         >
//           &lt;
//         </button>

//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-4 mr-2 md:mr-12 text-6xl"
//         >
//           &gt;
//         </button>
//       </div>

//       <div className="flex justify-center mt-4">
//         {sliderData.length > 0 && (
//           Array.from({ length: sliderData.length }).map((_, idx) => (
//             <span
//               key={idx}
//               onClick={() => handleDotClick(idx)}
//               className={`mx-1 cursor-pointer ${activeIndex === idx ? "bg-white w-8 h-2 rounded-md" : "bg-gray-300 w-2 h-2 rounded-full"}`}
//             ></span>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default HighlightTabs;

import React, { useState, useEffect } from "react";
import backgroundImage from '../assets/images/Highlightss.png'; // Background image path

const HighlightTabs = () => {
  const [activeTab, setActiveTab] = useState("latest");
  const [activeIndex, setActiveIndex] = useState(0);
  const [videos, setVideos] = useState({
    latestVideos: [],
    matchHighlights: [],
    playerHighlights: []
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect window resizing for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fetch videos from the API and sort them based on their title
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/videos");
        const data = await response.json();

        const latestVideos = data.filter(video => video.title === "latestVideos");
        const matchHighlights = data.filter(video => video.title === "matchHighlights");
        const playerHighlights = data.filter(video => video.title === "playerHighlights");

        setVideos({
          latestVideos,
          matchHighlights,
          playerHighlights
        });
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const getSliderData = () => {
    switch (activeTab) {
      case "latest":
        return videos.latestVideos;
      case "match":
        return videos.matchHighlights;
      case "player":
        return videos.playerHighlights;
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

  const handleDotClick = (index) => {
    setActiveIndex(index);
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
      <div className="relative w-fit ml-20">
        <p className="text-[2rem] md:text-[3rem] lg:text-[3rem] font-extrabold text-white ">
          RICHMOND HIGHLIGHTS
        </p>
      </div>

      {/* Button Tabs */}
      <div className="flex flex-col md:flex-row ml-20 space-y-4 md:space-y-0 md:space-x-10 mt-6">
        <button
          className={`py-1 px-4 font-bold ${activeTab === "latest" ? "text-white border-b-8 border-white" : ""}`}
          onClick={() => handleTabSwitch("latest")}
        >
          LATEST VIDEOS
        </button>
        <button
          className={`py-1 px-4 font-bold ${activeTab === "match" ? "text-white border-b-8 border-white" : ""}`}
          onClick={() => handleTabSwitch("match")}
        >
          MATCH HIGHLIGHTS
        </button>
        <button
          className={`py-1 px-4 font-bold ${activeTab === "player" ? "text-white border-b-8 border-white" : ""}`}
          onClick={() => handleTabSwitch("player")}
        >
          PLAYER HIGHLIGHTS
        </button>

        {/* MORE VIDEOS Button (Positioned below PLAYER HIGHLIGHTS on mobile) */}
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-center block md:absolute md:right-0 mx-auto md:mx-0">
          <button className="py-3 px-4 bg-white text-black font-bold rounded-lg mr-20">
            MORE VIDEOS
          </button>
        </a>
      </div>

      {/* Horizontal Line: Hidden on mobile, visible on larger screens */}
      <hr className="hidden md:block  border-gray-300 ml-20 mr-20 mt-0" />

      {/* Video Slider */}
      <div className="relative mt-10">
        <div className="flex justify-center space-x-4">
          {sliderData.length > 0 && (
            // Dynamically set the number of videos based on the screen size (3 for desktop, 1 for mobile)
            Array.from({ length: isMobile ? 1 : 3 }).map((_, idx) => {
              const index = (activeIndex + idx) % sliderData.length;
              return (
                <div key={index} className="w-full md:w-[400px] h-[600px] md:h-[600px] bg-transparent text-black p-4 rounded-xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={sliderData[index].url}
                    title={sliderData[index].title}
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              );
            })
          )}
        </div>

        {/* Prev and Next Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-4 ml-2 md:ml-12 text-6xl"
        >
          &lt;
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-4 mr-2 md:mr-12 text-6xl"
        >
          &gt;
        </button>
      </div>

      {/* Dots for Slider */}
      <div className="flex justify-center mt-4">
        {sliderData.length > 0 && (
          Array.from({ length: sliderData.length }).map((_, idx) => (
            <span
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`mx-1 cursor-pointer ${activeIndex === idx ? "bg-white w-8 h-2 rounded-md" : "bg-gray-300 w-2 h-2 rounded-full"}`}
            ></span>
          ))
        )}
      </div>
    </div>
  );
};

export default HighlightTabs;
