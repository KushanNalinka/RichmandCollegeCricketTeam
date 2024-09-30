

// import React, { useState } from "react";
// import img1 from "../assets/images/ladyCrick.jpeg";
// import img2 from "../assets/images/rashidKhan.jpeg";

// const LatestNews = () => {
//   const newsItems = [
//     {
//       title: "Rashid returns as Afghanistan call up fresh faces for South Africa ODIs.",
//       image: img2,
//     },
//     {
//       title: "ICC Women's T20 World Cup 2024 Ultimate Guide: Everything you need to know.",
//       image: img1,
//     },
//     {
//       title: "Rashid... continues on the field",
//       image: img2,
//     },
//     {
//       title: "Afghanistan wins thrilling match against South Africa.",
//       image: img1,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = 2.5; // Display 2.5 news items at a time

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - visibleNews) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto ">
//         <div className="grid grid-cols-3 gap-8">
//           {/* Left Heading Section - 1/3 of the width */}
//           <div className="col-span-1">
//             <h1 className="text-6xl font-bold text-outline">LATEST</h1>
//             <h2 className="text-6xl font-extrabold text-purple-800 tracking-wide">NEWS</h2>
//             <p className="text-gray-500 mt-4 max-w-xs">
//               Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
//             </p>
//             <button className="mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition">
//               MORE HERE &rarr;
//             </button>
//           </div>

//           {/* Right News Section - 2/3 of the width */}
//           <div className="col-span-2">
//             {/* News carousel */}
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 40}%)` }} // 40% moves by 1/2.5 of the container width
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-96 object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons below the carousel */}
//             <div className="flex justify-center mt-4 space-x-8">
//               {/* Left arrow */}
//               <button
//                 onClick={prevSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide === 0 ? "text-gray-300" : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide === 0}
//               >
//                 &#8592;
//               </button>

//               {/* Right arrow */}
//               <button
//                 onClick={nextSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide >= newsItems.length - visibleNews
//                     ? "text-gray-300"
//                     : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide >= newsItems.length - visibleNews}
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;

// import React, { useState } from "react";
// import img1 from "../assets/images/ladyCrick.jpeg";
// import img2 from "../assets/images/rashidKhan.jpeg";

// const LatestNews = () => {
//   const newsItems = [
//     {
//       title: "Rashid returns as Afghanistan call up fresh faces for South Africa ODIs.",
//       image: img2,
//     },
//     {
//       title: "ICC Women's T20 World Cup 2024 Ultimate Guide: Everything you need to know.",
//       image: img1,
//     },
//     {
//       title: "Rashid... continues on the field",
//       image: img2,
//     },
//     {
//       title: "Afghanistan wins thrilling match against South Africa.",
//       image: img1,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = 2.5; // Display 2.5 news items at a time

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - visibleNews) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto ">
//         <div className="grid grid-cols-3 gap-8">
//           {/* Left Heading Section - 1/3 of the width */}
//           <div className="col-span-1">
//             <h1 className="text-[7rem] font-bold text-outline">LATEST</h1> {/* Increased font size */}
//             <h2 className="text-[7rem] font-extrabold text-purple-800 mt-[-3rem]">NEWS</h2> {/* Increased font size */}
//             <p className="text-gray-500 mt-4 max-w-xs">
//               Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
//             </p>
//             <button className="mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition">
//               MORE HERE &rarr;
//             </button>
//           </div>

//           {/* Right News Section - 2/3 of the width */}
//           <div className="col-span-2">
//             {/* News carousel */}
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 40}%)` }} // 40% moves by 1/2.5 of the container width
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-96 object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons below the carousel */}
//             <div className="flex justify-center mt-4 space-x-8">
//               {/* Left arrow */}
//               <button
//                 onClick={prevSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide === 0 ? "text-gray-300" : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide === 0}
//               >
//                 &#8592;
//               </button>

//               {/* Right arrow */}
//               <button
//                 onClick={nextSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide >= newsItems.length - visibleNews
//                     ? "text-gray-300"
//                     : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide >= newsItems.length - visibleNews}
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;


// import React, { useState } from "react";
// import img1 from "../assets/images/ladyCrick.jpeg";
// import img2 from "../assets/images/rashidKhan.jpeg";

// const LatestNews = () => {
//   const newsItems = [
//     {
//       title: "Rashid returns as Afghanistan call up fresh faces for South Africa ODIs.",
//       image: img2,
//     },
//     {
//       title: "ICC Women's T20 World Cup 2024 Ultimate Guide: Everything you need to know.",
//       image: img1,
//     },
//     {
//       title: "Rashid... continues on the field",
//       image: img2,
//     },
//     {
//       title: "Afghanistan wins thrilling match against South Africa.",
//       image: img1,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = window.innerWidth >= 1024 ? 2.5 : 1; // Adjust for responsiveness

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - visibleNews) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Heading Section - 1/3 of the width */}
//           <div className="col-span-1">
//             <h1 className="text-[4rem] md:text-[5rem] lg:text-[7rem] italic font-bold text-outline">LATEST</h1>
//             <h2 className="text-[4rem] md:text-[5rem] lg:text-[7rem] italic font-extrabold text-[#4A0D34] mt-[-3rem]">
//               NEWS
//             </h2>
//             <p className="text-gray-500 mt-4 max-w-xs text-sm md:text-base lg:text-lg">
//               Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
//             </p>
//             <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition">
//               MORE HERE &rarr;
//             </button>
//           </div>

//           {/* Right News Section - 2/3 of the width */}
//           <div className="col-span-2">
//             {/* News carousel */}
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * (100 / visibleNews)}%)` }} // Adjusted for responsiveness
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-full sm:w-[50%] lg:w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons below the carousel */}
//             <div className="flex justify-center mt-4 space-x-8">
//               {/* Left arrow */}
//               <button
//                 onClick={prevSlide}
//                 className={`text-3xl lg:text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide === 0 ? "text-gray-300" : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide === 0}
//               >
//                 &#8592;
//               </button>

//               {/* Right arrow */}
//               <button
//                 onClick={nextSlide}
//                 className={`text-3xl lg:text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide >= newsItems.length - visibleNews
//                     ? "text-gray-300"
//                     : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide >= newsItems.length - visibleNews}
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;



// import React, { useState } from "react";
// import img1 from "../assets/images/ladyCrick.jpeg";
// import img2 from "../assets/images/rashidKhan.jpeg";

// const LatestNews = () => {
//   const newsItems = [
//     {
//       title: "Rashid returns as Afghanistan call up fresh faces for South Africa ODIs.",
//       image: img2,
//     },
//     {
//       title: "ICC Women's T20 World Cup 2024 Ultimate Guide: Everything you need to know.",
//       image: img1,
//     },
//     {
//       title: "Rashid... continues on the field",
//       image: img2,
//     },
//     {
//       title: "Afghanistan wins thrilling match against South Africa.",
//       image: img1,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const visibleNews = 2.5; // Display 2.5 news items at a time

//   const nextSlide = () => {
//     if (currentSlide < newsItems.length - visibleNews) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="container ml-auto px-0"> {/* Removed padding on the container */}
//         <div className="flex gap-4">
//            {/* Left Heading Section */}
//           <div className="flex-grow-[1.5] mt-24 w-[1200px]"> {/* Set fixed width for the heading section */}
//             <div className="flex items-end space-x-0"> {/* Flexbox to align headings */}
//               <h1 className="text-6xl font-extrabold text-[#4A0D34] tracking-wide">
//                 LATEST NEWS
//               </h1> {/* Combined the headings into one line */}
//             </div>
//             <p className="text-gray-500 mt-4 max-w-md">
//               Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
//             </p>
//             <button className="mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition">
//               MORE HERE &rarr;
//             </button>
//           </div>

//           {/* Right News Section */}
//           <div className="flex-grow-[2]">
//             {/* News carousel */}
//             <div className="overflow-hidden w-full">
//               <div
//                 className="flex transition-transform duration-300"
//                 style={{ transform: `translateX(-${currentSlide * 40}%)` }} // 40% moves by 1/2.5 of the container width
//               >
//                 {newsItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-96 object-cover rounded-lg"
//                     />
//                     <div className="p-4">
//                       <p className="font-semibold text-gray-700">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrow buttons below the carousel */}
//             <div className="flex justify-center mt-4 space-x-8">
//               {/* Left arrow */}
//               <button
//                 onClick={prevSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide === 0 ? "text-gray-300" : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide === 0}
//               >
//                 &#8592;
//               </button>

//               {/* Right arrow */}
//               <button
//                 onClick={nextSlide}
//                 className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-purple-500 ${
//                   currentSlide >= newsItems.length - visibleNews
//                     ? "text-gray-300"
//                     : "text-purple-500 hover:text-purple-700"
//                 }`}
//                 disabled={currentSlide >= newsItems.length - visibleNews}
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;

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
  const visibleNews = 2.5; // Display 3 news items at a time

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
    <section className="bg-white py-12 ">
     
        <div className="flex gap-0">
          {/* Left Heading Section */}
          <div className="w-[50%] mt-24 ml-20"> {/* Set fixed width for the heading section */}
            <div className="flex items-end space-x-0">
              <h1 className="text-[3rem] font-extrabold text-[#4A0D34] tracking-wide ">
                LATEST NEWS
              </h1>
            </div>
            <p className="text-gray-500 mt-4 max-w-md">
              Stay tuned for the latest news from our school cricket teams! From thrilling match victories to upcoming tournaments and player achievements, this is your go-to spot for all the action.
            </p>
            <button className="mt-6 px-8 py-4 bg-[#00175F] text-white font-semibold rounded-full shadow-lg hover:bg-[#00175F] transition">
              MORE HERE &rarr;
            </button>
          </div>

          {/* Right News Section */}
          <div className="w-[100%] ml-20 ">
            {/* News carousel */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 33.33}%)` }} // Move by 1/3 of the container width
              >
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-[40%] p-4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-96 object-cover rounded-lg"
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
                className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-[#4A0D34] ${
                  currentSlide === 0 ? "text-gray-300" : "text-[#4A0D34] hover:text-[#DCF2FF]"
                }`}
                disabled={currentSlide === 0}
              >
                &#8592;
              </button>

              {/* Right arrow */}
              <button
                onClick={nextSlide}
                className={`text-4xl font-bold focus:outline-none p-4 rounded-full border-2 border-[#4A0D34] ${
                  currentSlide >= newsItems.length - visibleNews
                    ? "text-gray-300"
                    : "text-purple-[#4A0D34] hover:text-[#DCF2FF]"
                }`}
                disabled={currentSlide >= newsItems.length - visibleNews}
              >
                &#8594;
              </button>
            </div>
          </div>
       
      </div>
    </section>
  );
};

export default LatestNews;
