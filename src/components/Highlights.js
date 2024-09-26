

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
import React, { useState } from "react";
import backgroundImage from '../assets/images/Highlightss.png'; // Background image path

const HighlightTabs = () => {
  const [activeTab, setActiveTab] = useState("latest");
  const [activeIndex, setActiveIndex] = useState(0);

  const latestVideos = [
    { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
    { id: 2, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 2" },
    { id: 3, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 3" },
    { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Video 4" },
    { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Video 5" },
    { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Video 6" },
  ];

  const matchHighlights = [
    { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Video 1" },
    { id: 2, url: "https://www.youtube.com/embed/3Le8kZFzaS0", title: "Video 2" },
    { id: 3, url: "https://www.youtube.com/embed/gXoDp1qGhdw", title: "Video 3" },
    { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Video 4" },
    { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Video 5" },
    { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Video 6" },
  ];

  const playerHighlights = [
    { id: 1, url: "https://www.youtube.com/embed/yZtHxJmwa9k", title: "Player 1" },
    { id: 2, url: "https://www.youtube.com/embed/RklFfjO5ynM", title: "Player 2" },
    { id: 3, url: "https://www.youtube.com/embed/uKptso4JzjM", title: "Player 3" },
    { id: 4, url: "https://www.youtube.com/embed/JpeF_ky3UzA", title: "Player 4" },
    { id: 5, url: "https://www.youtube.com/embed/dvzqBBSQLL0", title: "Player 5" },
    { id: 6, url: "https://www.youtube.com/embed/saPnnRR8jNs", title: "Player 6" },
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

       {/* Background and foreground text combined */}
       <div className="relative w-full ml-20">
        {/* Background and foreground text combined */}
        <h3 className="text-[4rem] md:text-[5rem] lg:text-[5rem] font-extrabold text-white italic">
          RICHMOND HIGHLIGHTS
        </h3>
      </div>
      {/* Tabs Section */}
      <div className="flex flex-col md:flex-row ml-16 space-x-0 md:space-x-10 mt-6">
        <button
          className={`py-2 px-4 font-bold ${activeTab === "latest" ? "text-white border-b-8 border-white" : ""}`}
          onClick={() => handleTabSwitch("latest")}
        >
          LATEST VIDEOS
        </button>
        <button
          className={`py-2 px-4 font-bold ${activeTab === "match" ? "text-white border-b-8 border-white" : ""}`}
          onClick={() => handleTabSwitch("match")}
        >
          MATCH HIGHLIGHTS
        </button>
        <button
          className={`py-2 px-4 font-bold ${activeTab === "player" ? "text-white border-b-8 border-white" : ""}`}
          onClick={() => handleTabSwitch("player")}
        >
          PLAYER HIGHLIGHTS
        </button>
      </div>

      {/* Long Line and More Videos Button */}
      <div className="relative flex justify-center items-center">
        <hr className="w-full border-gray-300 ml-16 mr-16" />
        <button className="absolute right-0 transform -translate-y-1/4 bg-white text-black rounded-lg px-4 py-1 text-sm font-bold mr-16">
          MORE VIDEOS
        </button>
      </div>

      {/* Slider Section */}
      <div className="relative mt-10">
        {/* Slider Videos */}
        <div className="flex justify-center space-x-4">
          {sliderData.length > 0 && (
            Array.from({ length: 3 }).map((_, idx) => {
              const index = (activeIndex + idx) % sliderData.length;
              return (
                <div key={index} className="w-full md:w-[400px] h-[250px] md:h-[500px] bg-transparent text-black p-4 rounded-xl">
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

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-4 ml-2 md:ml-12 text-8xl"
        >
          &lt;
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-4 mr-2 md:mr-12 text-8xl"
        >
          &gt;
        </button>
      </div>

      {/* Slider Dots */}
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
