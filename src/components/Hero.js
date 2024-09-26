


// import React, { useState, useEffect } from 'react';
// import image1 from '../assets/images/suranga.png';
// import image2 from '../assets/images/charith.png';
// import image3 from '../assets/images/wanindu.png';
// import image4 from '../assets/images/dhanajay.png'; // Additional image
// import image5 from '../assets/images/pabsara.png';
// import backgroundImage from '../assets/images/HPB.png'; // Background image

// const coaches = [
//   {
//     name: "Dhananjaya De Silva",
//     role: "Batsman",
//     imageUrl: image1, 
//   },
//   {
//     name: "Kushan Mendis",
//     role: "Batsman",
//     imageUrl: image2, 
//   },
//   {
//     name: "Wanidu Hasaranga De Silva",
//     role: "Bowler",
//     imageUrl: image3, 
//   },
//   {
//     name: "Dhananjaya Lakshan",
//     role: "Batsman",
//     imageUrl: image4, 
//   },
//   {
//     name: "Sherman Warner",
//     role: "All Rounder",
//     imageUrl: image5, 
//   },
// ];

// const CoachSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Navigation for previous button
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? coaches.length - 1 : prevIndex - 1
//     );
//   };

//   // Navigation for next button
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === coaches.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Ensure the slider shows 3 coaches at a time
//   const getVisibleCoaches = () => {
//     const visible = [];
//     for (let i = 0; i < 3; i++) {
//       visible.push(coaches[(currentIndex + i) % coaches.length]);
//     }
//     return visible;
//   };

//   const visibleCoaches = getVisibleCoaches();

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext(); // Move to the next slide
//     }, 3000); // Slide changes every 3 seconds

//     // Cleanup the interval on component unmount
//     return () => clearInterval(interval);
//   }, [currentIndex]); // Depend on currentIndex so it updates properly

//   return (
//     <div className=" text-white py-8 px-4"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,  // Adding the background image
//         backgroundSize: 'cover', // Ensures the image covers the entire div
//         backgroundRepeat: 'no-repeat', // Prevents the image from repeating
//         backgroundPosition: 'center', // Centers the image in the div
//       }}
//     >
//        <div className="relative w-full text-center">
//         {/* Background and foreground text combined */}
//         <h1 className="text-[4rem] md:text-[5rem] lg:text-[7rem] italic font-bold text-outline">
//           MEET OUR <span className="text-[4rem] md:text-[5rem] lg:text-[7rem] font-extrabold text-[#4A0D34] no-outline">HEROES</span>
//         </h1>
//       </div>
//       {/* Player Image Slider */}
//       <div className="flex flex-wrap justify-center items-center mt-12 space-x-8"> {/* Increased gap between images */}
//         {visibleCoaches.map((coach, index) => (
//           <div key={index} className="text-center flex-shrink-0">
//             <img
//               className={`rounded-xl mx-auto mb-4 transition-all duration-300 ${
//                 index === 1 ? "w-80 h-120 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-100 lg:h-120" : "w-64 h-96 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88"
//               } object-contain`}
//               src={coach.imageUrl}
//               alt={coach.name}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows Below Slider */}
//       <div className="flex justify-center mt-8 space-x-8">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="text-4xl p-2 rounded-full bg-white text-green-900 hover:bg-green-400 hover:text-white transition"
//         >
//           &#8592;
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="text-4xl p-2 rounded-full bg-white text-green-900 hover:bg-green-400 hover:text-white transition"
//         >
//           &#8594;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CoachSlider;

import React, { useState } from 'react';
import image1 from '../assets/images/suranga.png';
import image2 from '../assets/images/charith.png';
import image3 from '../assets/images/wanindu.png';
import image4 from '../assets/images/dhanajay.png'; // Additional image
import image5 from '../assets/images/pabsara.png';
import backgroundImage from '../assets/images/Highlightss.png'; // Background image

const coaches = [
  {
    name: "Dhananjaya De Silva",
    role: "Batsman",
    imageUrl: image1, 
  },
  {
    name: "Kushan Mendis",
    role: "Batsman",
    imageUrl: image2, 
  },
  {
    name: "Wanidu Hasaranga De Silva",
    role: "Bowler",
    imageUrl: image3, 
  },
  {
    name: "Dhananjaya Lakshan",
    role: "Batsman",
    imageUrl: image4, 
  },
  {
    name: "Sherman Warner",
    role: "All Rounder",
    imageUrl: image5, 
  },
];

const CoachSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation for previous button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? coaches.length - 1 : prevIndex - 1
    );
  };

  // Navigation for next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === coaches.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Ensure the slider shows 3 coaches at a time
  const getVisibleCoaches = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(coaches[(currentIndex + i) % coaches.length]);
    }
    return visible;
  };

  const visibleCoaches = getVisibleCoaches();

  return (
    <div className="text-white py-8 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,  // Adding the background image
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        backgroundPosition: 'center', // Centers the image in the div
      }}
    >
       <div className="relative w-full ml-20">
        {/* Background and foreground text combined */}
        <h3 className="text-[4rem] md:text-[5rem] lg:text-[5rem] font-extrabold text-white italic">
          MEET OUR HEROES
        </h3>
      </div>
      
      {/* Player Image Slider */}
      <div className="relative flex justify-center items-center mt-12 space-x-4"> {/* Reduced gap between images */}
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 text-4xl p-2 rounded-full bg-white text-green-900 hover:bg-green-400 hover:text-white transition"
          style={{ top: '50%', transform: 'translateY(-50%)' }} // Center vertically
        >
          &#8592;
        </button>

        {/* Coaches in the middle */}
        <div className="flex flex-wrap justify-center items-center space-x-4"> {/* Reduced gap between images */}
          {visibleCoaches.map((coach, index) => (
            <div key={index} className="text-center flex-shrink-0">
              <img
                className={`rounded-xl mx-auto mb-4 transition-all duration-300 ${
                  index === 1 ? "w-96 h-128 sm:w-96 sm:h-128 md:w-110 md:h-140 lg:w-120 lg:h-150" : "w-80 h-110 sm:w-88 sm:h-120 md:w-96 md:h-128 lg:w-110 lg:h-135"
                } object-contain`} // Increased image size
                src={coach.imageUrl}
                alt={coach.name}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 text-4xl p-2 rounded-full bg-white text-green-900 hover:bg-green-400 hover:text-white transition"
          style={{ top: '50%', transform: 'translateY(-50%)' }} // Center vertically
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default CoachSlider;
