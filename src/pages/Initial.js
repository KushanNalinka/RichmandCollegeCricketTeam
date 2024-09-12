// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/HomeNavbar';
// import RCCRIC from '../assets/images/bg.png';
// import CroppedImage from '../assets/images/Cropped.png';
// // Import your cricketer animation (SVG or GIF)
// import CricketerAnimation from '../assets/images/CricketBall.gif';

// const HomePage = () => {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = RCCRIC;
//     img.onload = () => setIsImageLoaded(true);
//   }, []);

//   return (
//     <div>
//       {!isImageLoaded && (
//         <div className="flex items-center justify-center h-screen bg-white">
//           {/* Cricketer animation */}
//           <img src={CricketerAnimation} alt="Loading..." className="w-32 h-32" />
//         </div>
//       )}

//       {isImageLoaded && (
//        <div 
//        className="relative h-screen w-full"
//        style={{ 
//          backgroundImage: `url(${RCCRIC})`, 
//          backgroundSize: '100% 100%', // Ensures the image fits exactly within the div's dimensions
//          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
//          backgroundPosition: 'center', // Centers the image in the div
//          transition: 'opacity 0.5s ease-in-out',
//        }} 
//      >
//           <Navbar />

//           {/* Cropped Image in the center */}
//           <div className="flex items-center justify-center h-full relative">
//             {/* "RICHMOND" Text behind Cropped Image */}
//             <div className="absolute top-0 w-full text-center z-10">
//             <div 
//   className="font-bold text-[#0E1E79] animate-slide-down"
//   style={{ 
//     fontSize: '12rem', // Adjust this value for ultra-large font size
//     lineHeight: '1', // Adjust line-height if needed
//     animationDelay: '1s' 
//   }}
// >
//   RICHMOND
// </div>
//             </div>

//             <img 
//               src={CroppedImage} 
//               alt="Cropped" 
//               className="absolute top-1/2 transform -translate-y-1/2 z-20"
//               style={{ width: '90%' }} 
//             />

//             {/* "COLLEGE" Text on Top of Cropped Image */}
//             <div className="absolute bottom-0 w-full text-center z-30">
//               <div 
//                 className=" font-bold text-[#FFCB05] animate-slide-up"
//                 style={{ 
//                   fontSize: '12rem', // Adjust this value for ultra-large font size
//                   lineHeight: '1', // Adjust line-height if needed
//                   animationDelay: '1s' 
//                  }} 
//               >
//                 COLLEGE
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/HomeNavbar';
// import RCCRIC from '../assets/images/bg.png';
// import CroppedImage from '../assets/images/Cropped.png';
// import CricketerAnimation from '../assets/images/CricketBall.gif';

// const HomePage = () => {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = RCCRIC;
//     img.onload = () => setIsImageLoaded(true);
//   }, []);

//   return (
//     <div className="relative h-screen w-full">
//       {!isImageLoaded && (
//         <div className="flex items-center justify-center h-screen bg-white absolute inset-0 z-50">
//           {/* Cricketer animation */}
//           <img src={CricketerAnimation} alt="Loading..." className="w-32 h-32" />
//         </div>
//       )}

//       <div 
//         className={`absolute inset-0 ${isImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
//         style={{ 
//           backgroundImage: `url(${RCCRIC})`, 
//           backgroundSize: 'cover', // Ensures the image covers the entire div
//           backgroundRepeat: 'no-repeat', // Prevents the image from repeating
//           backgroundPosition: 'center', // Centers the image in the div
//         }} 
//       >
//         <Navbar />

//         {/* Cropped Image in the center */}
//         <div className="flex items-center justify-center h-full relative">
//           {/* "RICHMOND" Text behind Cropped Image */}
//           <div className="absolute top-0 w-full text-center z-10">
//             <div 
//               className="font-bold text-[#0E1E79] animate-slide-down"
//               style={{ 
//                 fontSize: '12rem', 
//                 lineHeight: '1', 
//                 animationDelay: '1.5s' 
//               }}
//             >
//               RICHMOND
//             </div>
//           </div>

//           <img 
//             src={CroppedImage} 
//             alt="Cropped" 
//             className="absolute top-1/2 transform -translate-y-1/2 z-20"
//             style={{ width: '90%' }} 
//           />

//           {/* "COLLEGE" Text on Top of Cropped Image */}
//           <div className="absolute bottom-0 w-full text-center z-30">
//             <div 
//               className="font-bold text-[#FFCB05] animate-slide-up"
//               style={{ 
//                 fontSize: '12rem', 
//                 lineHeight: '1', 
//                 animationDelay: '1.5s' 
//               }} 
//             >
//               COLLEGE
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/HomeNavbar';
// import RCCRIC from '../assets/images/bg.png';
// import CroppedImage from '../assets/images/Cropped.png';
// import CricketerAnimation from '../assets/images/ball.gif';

// const HomePage = () => {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
//   const [showGif, setShowGif] = useState(true); // State to manage GIF display

//   useEffect(() => {
//     const img = new Image();
//     img.src = RCCRIC;
    
//     img.onload = () => {
//       setIsImageLoaded(true);
//       // Set a delay to keep the GIF visible even after the image has loaded
//       setTimeout(() => setShowGif(false), 5000); // Adjust the duration as needed (2000 ms = 2 seconds)
//     };
//   }, []);

//   return (
//     <div className="relative h-screen w-full">
//       {showGif && (
//         <div className="flex items-center justify-center h-screen bg-white absolute inset-0 z-50">
//           {/* Cricketer animation */}
//           <img src={CricketerAnimation} alt="Loading..." className="w-72 h-72" />
//         </div>
//       )}

//       <div 
//         className={`absolute inset-0 ${isImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
//         style={{ 
//           backgroundImage: `url(${RCCRIC})`, 
//           backgroundSize: 'cover', // Ensures the image covers the entire div
//           backgroundRepeat: 'no-repeat', // Prevents the image from repeating
//           backgroundPosition: 'center', // Centers the image in the div
//         }} 
//       >
//         <Navbar />

//         {/* Cropped Image in the center */}
//         <div className="flex items-center justify-center h-full relative">
//           {/* "RICHMOND" Text behind Cropped Image */}
//           <div className="absolute top-0 w-full text-center z-10">
//             <div 
//               className="font-bold text-[#0E1E79] animate-slide-down"
//               style={{ 
//                 fontSize: '11rem', 
//                 lineHeight: '1', 
//                 animationDelay: '5.5s', 
//                 background: 'linear-gradient(to right, #0E1E79, #1A68DC)', // Gradient colors
//                 WebkitBackgroundClip: 'text', // Clip the background to the text
//                 WebkitTextFillColor: 'transparent', // Fill the text with the gradient
//               }}
//             >
//               RICHMOND
//             </div>
//           </div>

//           <img 
//             src={CroppedImage} 
//             alt="Cropped" 
//             className="absolute top-1/2 transform -translate-y-1/2 z-20"
//             style={{ width: '85%' }} 
//           />

//           {/* "COLLEGE" Text on Top of Cropped Image */}
//           <div className="absolute bottom-0 w-full text-center z-30">
//             <div 
//               className="font-bold text-[#FFCB05] animate-slide-up"
//               style={{ 
//                 fontSize: '11rem', 
//                 lineHeight: '1', 
//                 animationDelay: '5.5s' 
//               }} 
//             >
//               COLLEGE
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import Navbar from '../components/HomeNavbar';
import RCCRIC from '../assets/images/groundback.png';
import CroppedImage from '../assets/images/Cropped.png';


import NewsSlider from '../components/NewsSlider';
import UpcomingMatches from '../components/UpcommingMatchesSlider';
import ScoreCard from '../components/ScoreCard';
import MatchSlider from '../components/MatchSlider';
import Number from '../components/Number';
import PlayerSlider from '../components/PlayerSlider';
import ResultsTable from '../components/ResultsTable';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = RCCRIC;
    
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  return (

    <>
    <div className="relative h-screen w-full">
  

      <div 
        className={`absolute inset-0 ${isImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        style={{ 
          backgroundImage: `url(${RCCRIC})`, 
          backgroundSize: 'cover', // Ensures the image covers the entire div
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          backgroundPosition: 'center', // Centers the image in the div
          
        }} 
      >
   <Navbar />
     
        {/* Cropped Image in the center */}
        <div className="flex items-center justify-center h-full relative">
          {/* "RICHMOND" Text behind Cropped Image */}
          <div className="absolute top-0 w-full text-center z-10">
            <div 
              className="font-bold text-[#0E1E79] animate-slide-down"
              style={{ 
                fontSize: '11rem', 
                lineHeight: '1', 

                animationDelay: '1.5s', 

                background: 'linear-gradient(to right, #0E1E79, #1A68DC)', // Gradient colors
                WebkitBackgroundClip: 'text', // Clip the background to the text
                WebkitTextFillColor: 'transparent', // Fill the text with the gradient
              }}
            >
              RICHMOND
            </div>
          </div>

          <img 
            src={CroppedImage} 
            alt="Cropped" 
            className="absolute top-72 transform -translate-y-1/2 z-20"
            style={{ width: '85%' }} 
          />

          {/* "COLLEGE" Text on Top of Cropped Image */}

          <div className="absolute bottom-0 w-full text-center z-20">

            <div 
              className="font-bold text-[#4A0D34] animate-slide-up"
              style={{ 
                fontSize: '11rem', 
                lineHeight: '1', 

                animationDelay: '1.5s' 

              }} 
            >
              COLLEGE
            </div>
          </div>
        </div>
      </div>
    </div>
<ScoreCard />
<ResultsTable />

  <Number />
  <PlayerSlider />
 <Footer />
    </>

  );
};

export default HomePage;
