


// import React, { useState } from 'react';
// import image1 from '../assets/images/News.png';
// import image2 from '../assets/images/kusal.png';
// import image3 from '../assets/images/dana.jpeg';
// import image4 from '../assets/images/News.png'; // Additional image
// import image5 from '../assets/images/playerBack.png'; // Additional image
// import image6 from '../assets/images/newsback.png'; // Additional image
// import image7 from '../assets/images/teamGroup.png'; // Additional image
// import image8 from '../assets/images/teamback.png'; // Additional image

// const ImageSlider = () => {
//   const images = [image1, image2, image3, image4, image5, image6, image7, image8];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const imagesToShow = 4; // Display 4 images at a time

//   const prevSlide = () => {
//     setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   // Compute the range of images to display
//   const displayedImages = [
//     ...images.slice(currentIndex, currentIndex + imagesToShow),
//     ...images.slice(0, Math.max(currentIndex + imagesToShow - images.length, 0)),
//   ];

//   // Calculate the width percentage for the indicator line (image width + gap)
//   const imageWidthPercentage = 100 / imagesToShow; // Each image takes a fraction of the container width

//   // Compute how much of the line to fill
//   const filledLineWidth = ((currentIndex % imagesToShow) + 1) * imageWidthPercentage;

//   return (
//     <div className="relative w-full max-w-7xl mx-auto mb-12">
//       {/* Trending News Title with Navigation Buttons */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-bold">TRENDING NEWS</h2>
//         <div className="flex">
//           {/* Previous Button */}
//           <button className="text-gray-600 hover:text-black px-3 py-2" onClick={prevSlide}>
//             &#10094; Back
//           </button>
//           {/* Next Button */}
//           <button className="text-gray-600 hover:text-black px-3 py-2" onClick={nextSlide}>
//             Next &#10095;
//           </button>
//         </div>
//       </div>

//       {/* Line indicator below the title */}
//       <div className="relative h-1 mb-4 bg-gray-300">
//         {/* Colored portion of the line */}
//         <div
//           className="absolute h-full bg-red-500 transition-all duration-300"
//           style={{ width: `${filledLineWidth}%` }}
//         />
//       </div>

//       {/* Image Slider */}
//       <div className="flex overflow-hidden">
//         {/* Displaying multiple images */}
//         {displayedImages.map((image, index) => (
//           <div key={index} className="flex-shrink-0 w-1/4 px-1"> {/* Equal gap between images */}
//             <img
//               src={image}
//               alt={`Slide ${currentIndex + index}`}
//               className="w-full h-80 object-cover rounded-none"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// // Import your images
// import image1 from '../assets/images/News.png';
// import image2 from '../assets/images/kusal.png';
// import image3 from '../assets/images/dana.jpeg';
// import image4 from '../assets/images/News.png';
// import image5 from '../assets/images/playerBack.png';
// import image6 from '../assets/images/newsback.png';
// import image7 from '../assets/images/teamGroup.png';
// import image8 from '../assets/images/teamback.png';

// const images = [
//   { src: image1, alt: 'News Image' },
//   { src: image2, alt: 'Kusal' },
//   { src: image3, alt: 'Dana' },
//   { src: image4, alt: 'News Image' },
//   { src: image5, alt: 'Player Back' },
//   { src: image6, alt: 'News Back' },
//   { src: image7, alt: 'Team Group' },
//   { src: image8, alt: 'Team Back' },
// ];

// function useParallax(scrollYProgress, distance) {
//   return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
// }

// function ParallaxImage({ image, index }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <section ref={ref} className="w-full flex justify-center items-center h-screen">
//       <div className="relative w-96 h-96 overflow-hidden rounded-lg">
//         <img
//           src={image.src}
//           alt={image.alt}
//           className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
//         />
//       </div>
//       <motion.h2
//         className="absolute text-white text-6xl"
//         style={{ y }}
//       >
//         #{index + 1}
//       </motion.h2>
//     </section>
//   );
// }

// export default function ImageSlider() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <div className="relative">
//       {images.map((image, index) => (
//         <ParallaxImage key={index} image={image} index={index} />
//       ))}

//       {/* Progress bar */}
//       <motion.div
//         className="fixed bottom-10 left-0 right-0 h-1 bg-blue-500"
//         style={{ scaleX }}
//       />
//     </div>
//   );
// }
// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// // Import your images
// import image1 from '../assets/images/News.png';
// import image2 from '../assets/images/kusal.png';
// import image3 from '../assets/images/dana.jpeg';
// import image4 from '../assets/images/News.png';
// import image5 from '../assets/images/playerBack.png';
// import image6 from '../assets/images/newsback.png';
// import image7 from '../assets/images/teamGroup.png';
// import image8 from '../assets/images/teamback.png';

// const images = [
//   { src: image1, alt: 'News Image' },
//   { src: image2, alt: 'Kusal' },
//   { src: image3, alt: 'Dana' },
//   { src: image4, alt: 'News Image' },
//   { src: image5, alt: 'Player Back' },
//   { src: image6, alt: 'News Back' },
//   { src: image7, alt: 'Team Group' },
//   { src: image8, alt: 'Team Back' },
// ];

// function useParallax(scrollYProgress, distance) {
//   return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
// }

// function ParallaxImage({ image, index }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <section ref={ref} className="w-full flex justify-center items-center h-screen">
//       <div className="relative w-96 h-96 overflow-hidden rounded-lg">
//         <img
//           src={image.src}
//           alt={image.alt}
//           className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
//         />
//       </div>
//       <motion.h2
//         className="absolute text-white text-6xl"
//         style={{ y }}
//       >
//         #{index + 1}
//       </motion.h2>
//     </section>
//   );
// }

// export default function ImageSlider() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <div
//       ref={containerRef}
//       className="relative h-screen overflow-y-scroll"
//     >
//       <div className="relative h-[200vh]"> {/* Adjust height to allow scrolling */}
//         {images.map((image, index) => (
//           <ParallaxImage key={index} image={image} index={index} />
//         ))}
//       </div>

//       {/* Progress bar */}
//       <motion.div
//         className="fixed bottom-10 left-0 right-0 h-1 bg-blue-500"
//         style={{ scaleX }}
//       />
//     </div>
//   );
// }

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Import your images
import image1 from '../assets/images/News.png';
import image2 from '../assets/images/kusal.png';
import image3 from '../assets/images/dana.jpeg';
import image4 from '../assets/images/News.png';
import image5 from '../assets/images/playerBack.png';
import image6 from '../assets/images/newsback.png';
import image7 from '../assets/images/teamGroup.png';
import image8 from '../assets/images/teamback.png';

const images = [
  { src: image1, alt: 'News Image' },
  { src: image2, alt: 'Kusal' },
  { src: image3, alt: 'Dana' },
  { src: image4, alt: 'News Image' },
  { src: image5, alt: 'Player Back' },
  { src: image6, alt: 'News Back' },
  { src: image7, alt: 'Team Group' },
  { src: image8, alt: 'Team Back' },
];

function useParallax(scrollYProgress, distance) {
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}

function ParallaxImage({ image, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200); // Adjust distance to suit smaller height

  return (
    <section ref={ref} className="w-full flex justify-center items-center h-[70vh]"> {/* Reduce height */}
      <div className="relative w-96 h-96 overflow-hidden rounded-lg">
        <img
          src={image.src}
          alt={image.alt}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
        />
      </div>
      <motion.h2
        className="absolute text-white text-6xl"
        style={{ y }}
      >
        #{index + 1}
      </motion.h2>
    </section>
  );
}

export default function ImageSlider() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-y-scroll"
    >
      <div className="relative"> {/* Remove fixed height and allow natural flow */}
        {images.map((image, index) => (
          <ParallaxImage key={index} image={image} index={index} />
        ))}
      </div>

      {/* Progress bar under the image slider */}
      <motion.div
        className="mt-4 h-1 bg-blue-500"
        style={{ scaleX }}
      />
    </div>
  );
}
