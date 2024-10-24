

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/InitialNavbar';
// import RCCRIC from '../assets/images/groundback.png';
// import CroppedImage from '../assets/images/Cropped.png';
// import NewsSlider from '../components/NewsSlider';
// import UpcomingMatches from '../components/UpcommingMatches';
// import ScoreCard from '../components/ScoreCard';
// import MatchSlider from '../components/MatchSlider';
// import Number from '../components/Number';
// import PlayerSlider from '../components/PlayerSlider';
// import ResultsTable from '../components/ResultsTable';
// import Highlights from '../components/Highlights';
// import Footer from '../components/Footer';
// import LatestNews from '../components/LatestNews';

// const HomePage = () => {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = RCCRIC;
    
//     img.onload = () => {
//       setIsImageLoaded(true);
//     };
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="relative w-full h-screen md:min-h-[600px]">
//         {/* Background Image */}
//         <div 
//           className={`absolute inset-0 ${isImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
//           style={{ 
//             backgroundImage: `url(${RCCRIC})`, 
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//           }}
//         >
//           {/* Cropped Image and Text */}
//           <div className="flex items-center justify-center h-full relative">
//             {/* "RICHMOND" Text */}
//             <div className="absolute top-0 w-full text-center z-10">
//               <div 
//                 className="font-bold text-[#0E1E79] animate-slide-down"
//                 style={{
//                   fontSize: 'clamp(4rem, 10vw, 11rem)', // Responsive text size
//                   lineHeight: '1',
//                   animationDelay: '1.5s',
//                   background: 'linear-gradient(to right, #0E1E79, #1A68DC)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                 RICHMOND
//               </div>
//             </div>

//             {/* Cropped Image */}
//             <img 
//               src={CroppedImage} 
//               alt="Cropped" 
//               className="absolute top-1/2 transform -translate-y-1/2 z-20"
//               style={{ width: '85%', maxWidth: '1200px' }} // Ensure responsiveness
//             />

//             {/* "COLLEGE" Text */}
//             <div className="absolute bottom-0 w-full text-center z-20">
//               <div 
//                 className="font-bold text-[#4A0D34] animate-slide-up"
//                 style={{ 
//                   fontSize: 'clamp(4rem, 10vw, 11rem)', // Responsive text size
//                   lineHeight: '1',
//                   animationDelay: '1.5s',
//                 }}
//               >
//                 COLLEGE
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//    {/* Other Components */}
// <div className="w-full">
//   <ScoreCard />
//   <ResultsTable />
//   <Number />
//   <LatestNews />
//   <Highlights />
//   <UpcomingMatches />
//   <PlayerSlider />
// </div>

//       <Footer />
//     </>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/InitialNavbar';
// import RCCRIC from '../assets/images/groundback.png';
// import CroppedImage from '../assets/images/Cropped.png';
// import NewsSlider from '../components/NewsSlider';
// import UpcomingMatches from '../components/UpcommingMatches';
// import ScoreCard from '../components/ScoreCard';
// import MatchSlider from '../components/MatchSlider';
// import Number from '../components/Number';
// import PlayerSlider from '../components/PlayerSlider';
// import ResultsTable from '../components/ResultsTable';
// import Highlights from '../components/Highlights';
// import Footer from '../components/Footer';
// import LatestNews from '../components/LatestNews';
// import Hero from '../components/Hero';

// const HomePage = () => {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = RCCRIC;
    
//     img.onload = () => {
//       setIsImageLoaded(true);
//     };
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="relative w-full h-screen md:min-h-[600px]">
//         {/* Background Image */}
//         <div 
//           className={`absolute inset-0 ${isImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
//           style={{ 
//             backgroundImage: `url(${RCCRIC})`, 
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//           }}
//         >
//           {/* Cropped Image and Text */}
//           <div className="flex items-center justify-center h-full relative">
//             {/* "RICHMOND" Text */}
//             <div className="absolute top-0 w-full text-center z-10">
//               <div 
//                 className="font-bold text-[#0E1E79] animate-slide-down"
//                 style={{
//                   fontSize: 'clamp(4rem, 10vw, 11rem)', // Responsive text size
//                   lineHeight: '1',
//                   animationDelay: '1.5s',
//                   background: 'linear-gradient(to right, #0E1E79, #1A68DC)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                 RICHMOND
//               </div>
//             </div>

//             {/* Cropped Image */}
//             <img 
//               src={CroppedImage} 
//               alt="Cropped" 
//               className="absolute top-1/2 transform -translate-y-1/2 z-20 w-full sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[1200px] h-auto sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[240vh]" 
//               // Height adjusts based on screen size
//             />

//             {/* "COLLEGE" Text */}
//             <div className="absolute bottom-0 w-full text-center z-20">
//               <div 
//                 className="font-bold text-[#4A0D34] animate-slide-up"
//                 style={{ 
//                   fontSize: 'clamp(4rem, 10vw, 11rem)', // Responsive text size
//                   lineHeight: '1',
//                   animationDelay: '1.5s',
//                 }}
//               >
//                 COLLEGE
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//    {/* Other Components */}
// <div className="w-full">
//   <ScoreCard />
//   <ResultsTable />
//   <Number />
//   <LatestNews />
 
//   <UpcomingMatches />
//   <Hero />
// </div>

//       <Footer />
//     </>
//   );
// };

// export default HomePage;

// import React from 'react';
// import Navbar from '../components/InitialNavbar';
// import CroppedImage from '../assets/images/Cropped.png';
// import ScoreCard from '../components/ScoreCard';
// import ResultsTable from '../components/ResultsTable';
// import Number from '../components/Number';
// import LatestNews from '../components/LatestNews';
// import UpcomingMatches from '../components/UpcommingMatches';
// import Hero from '../components/Hero';
// import Footer from '../components/Footer';
// import videoSrc from '../assets/images/new.mp4'; // Corrected import for video
// import Highlights from '../components/Highlights';

// const HomePage = () => {
//   return (
//     <>
//       <Navbar />
//       < div className="relative w-full h-screen md:min-h-[600px]">
//         {/* Video Background */}
//         <video 
//           className="absolute inset-0 w-full h-full object-cover object-center"
//           autoPlay 
//           loop = {false}
//           muted
//           style={{ zIndex: -1 }} // Ensures video is behind other elements
//         >
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

        
      
//       </div>

//       {/* Other Components */}
//       <div className="w-full">
//         <ScoreCard />
//         <ResultsTable />
//         <Number />
//         <LatestNews />
//         <Highlights />
//         <UpcomingMatches />
//         <Hero />
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import Navbar from '../components/InitialNavbar';
import CroppedImage from '../assets/images/Cropped.png';
import ScoreCard from '../components/ScoreCard';
import ResultsTable from '../components/ResultsTable';
import Number from '../components/Number';
import LatestNews from '../components/LatestNews';
import UpcomingMatches from '../components/UpcommingMatches';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import videoSrc from '../assets/images/new.mp4'; // Corrected import for video
import Highlights from '../components/Highlights';

const HomePage = () => {
  const [matchId, setMatchId] = useState(null); // State to manage matchId

  // Callback function to handle matchId received from ScoreCard
  const handleMatchId = (id) => {
    setMatchId(id);
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen md:min-h-[600px]">
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay 
          loop = {false}
          muted
          style={{ zIndex: -1 }} // Ensures video is behind other elements
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Other Components */}
      <div className="w-full">
        {/* Pass handleMatchId as a prop to ScoreCard */}
        <ScoreCard onMatchId={handleMatchId} />
        
        {/* Conditionally render ResultsTable only when matchId is available */}
        {matchId && <ResultsTable matchId={matchId} />}

        <Number />
        <LatestNews />
        <Highlights />
        <UpcomingMatches />
        <Hero />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/InitialNavbar';
// import RCCRIC from '../assets/images/groundback.png';
// import CroppedImage from '../assets/images/Cropped.png';
// import NewsSlider from '../components/NewsSlider';
// import UpcomingMatches from '../components/UpcommingMatches';
// import ScoreCard from '../components/ScoreCard';
// import MatchSlider from '../components/MatchSlider';
// import Number from '../components/Number';

// import ResultsTable from '../components/ResultsTable';
// import Highlights from '../components/Highlights';
// import Footer from '../components/Footer';
// import LatestNews from '../components/LatestNews';
// import Hero from '../components/Hero';

// const HomePage = () => {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = RCCRIC;
    
//     img.onload = () => {
//       setIsImageLoaded(true);
//     };
//   }, []);

//   const [matchId, setMatchId] = useState(null); // State to manage matchId

// //   Callback function to handle matchId received from ScoreCard
//   const handleMatchId = (id) => {

//     console.log('Match ID:', id);
//     setMatchId(id);

//   };

//   return (
//     <>
//       <Navbar />
//       <div className="relative w-full h-screen md:min-h-[600px]">
//         {/* Background Image */}
//         <div 
//           className={`absolute inset-0 ${isImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
//           style={{ 
//             backgroundImage: `url(${RCCRIC})`, 
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//           }}
//         >
//           {/* Cropped Image and Text */}
//           <div className="flex items-center justify-center h-full relative">
//             {/* "RICHMOND" Text */}
//             <div className="absolute top-0 w-full text-center z-10">
//               <div 
//                 className="font-bold text-[#0E1E79] animate-slide-down"
//                 style={{
//                   fontSize: 'clamp(4rem, 10vw, 11rem)', // Responsive text size
//                   lineHeight: '1',
//                   animationDelay: '1.5s',
//                   background: 'linear-gradient(to bottom, #074696, #0E1E79)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                 RICHMOND
//               </div>
//             </div>

//             {/* Cropped Image */}
//             <img 
//               src={CroppedImage} 
//               alt="Cropped" 
//               className="absolute top-1/2 transform -translate-y-1/2 z-20 w-full sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[1200px] h-auto sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[240vh]" 
//               // Height adjusts based on screen size
//             />

//             {/* "COLLEGE" Text */}
//             <div className="absolute bottom-0 w-full text-center z-20">
//               <div 
//                 className="font-bold text-[#4A0D34] animate-slide-up"
//                 style={{ 
//                   fontSize: 'clamp(4rem, 10vw, 11rem)', // Responsive text size
//                   lineHeight: '1',
//                   animationDelay: '1.5s',
//                   background: 'linear-gradient(to bottom,#B01F7C ,#4A0D34 )', // Gradient from top to bottom
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                 }}
//               >
//                 COLLEGE
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//   {/* Other Components */}
//        <div className="w-full">
//         {/* Pass handleMatchId as a prop to ScoreCard */}
//          <ScoreCard onMatchId={handleMatchId} />
        
//         {/* Conditionally render ResultsTable only when matchId is available */}
//         {matchId && <ResultsTable matchId={matchId} />}

//         <Number />
//         <LatestNews />
//         <Highlights />
//          <UpcomingMatches />
//         <Hero />
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default HomePage;

