

// import React, { useState, useEffect } from 'react';
// import image1 from '../assets/images/dana.jpeg';
// import image2 from '../assets/images/kusal.png';
// import image3 from '../assets/images/wani1.jpeg';
// import image4 from '../assets/images/lak.jpeg'; // Additional image
// import image5 from '../assets/images/asa.jpeg';
// import backgroundImage from '../assets/images/Heroes_BacK_Image.png'; // Background image

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

//   // Ensure the slider shows 5 coaches at a time
//   const getVisibleCoaches = () => {
//     const visible = [];
//     for (let i = 0; i < 5; i++) {
//       visible.push(coaches[(currentIndex + i) % coaches.length]);
//     }
//     return visible;
//   };

//   const visibleCoaches = getVisibleCoaches();

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext(); // Move to the next slide
//     }, 1000); // Slide changes every 3 seconds

//     // Cleanup the interval on component unmount
//     return () => clearInterval(interval);
//   }, [currentIndex]); // Depend on currentIndex so it updates properly

//   return (
//     <div className="bg-green-900 text-white py-8 px-4"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,  // Adding the background image
//         backgroundSize: 'cover', // Ensures the image covers the entire div
//         backgroundRepeat: 'no-repeat', // Prevents the image from repeating
//         backgroundPosition: 'center', // Centers the image in the div
//       }}
//     >
//       {/* Player Image Slider */}
//       <div className="flex justify-center space-x-4 items-center mt-20">
//         {visibleCoaches.map((coach, index) => (
//           <div key={index} className="text-center">
//             <img
//               className={`rounded-full mx-auto mb-4 ${
//                 index === 2 ? "w-80 h-80" : "w-48 h-48" // Middle image is enlarged
//               } object-cover transition-all duration-300`}
//               src={coach.imageUrl}
//               alt={coach.name}
//             />
//             <h3 className="text-xl font-semibold">{coach.name}</h3>
//             <p className="text-green-400">{coach.role}</p>
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


import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/dana.jpeg';
import image2 from '../assets/images/kusal.png';
import image3 from '../assets/images/wani1.jpeg';
import image4 from '../assets/images/lak.jpeg'; // Additional image
import image5 from '../assets/images/asa.jpeg';
import backgroundImage from '../assets/images/Heroes_BacK_Image.png'; // Background image

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

  // Ensure the slider shows 5 coaches at a time
  const getVisibleCoaches = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(coaches[(currentIndex + i) % coaches.length]);
    }
    return visible;
  };

  const visibleCoaches = getVisibleCoaches();

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Move to the next slide
    }, 3000); // Slide changes every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // Depend on currentIndex so it updates properly

  return (
    <div className="bg-green-900 text-white py-8 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,  // Adding the background image
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        backgroundPosition: 'center', // Centers the image in the div
      }}
    >
      {/* Player Image Slider */}
      <div className="flex flex-wrap justify-center items-center mt-40 space-x-4">
        {visibleCoaches.map((coach, index) => (
          <div key={index} className="text-center flex-shrink-0">
            <img
              className={`rounded-full mx-auto mb-4 transition-all duration-300 ${
                index === 2 ? "w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80" : "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              } object-cover`}
              src={coach.imageUrl}
              alt={coach.name}
            />
            <h3 className="text-xl font-semibold">{coach.name}</h3>
            <p className="text-green-400">{coach.role}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows Below Slider */}
      <div className="flex justify-center mt-8 space-x-8">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="text-4xl p-2 rounded-full bg-white text-green-900 hover:bg-green-400 hover:text-white transition"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="text-4xl p-2 rounded-full bg-white text-green-900 hover:bg-green-400 hover:text-white transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default CoachSlider;
