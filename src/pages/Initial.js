

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

// import React, { useState } from 'react';
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
//   const [matchId, setMatchId] = useState(null); // State to manage matchId

//   // Callback function to handle matchId received from ScoreCard
//   const handleMatchId = (id) => {
//     setMatchId(id);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="relative w-full h-screen md:min-h-[600px]">
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
//         {/* Pass handleMatchId as a prop to ScoreCard */}
//         <ScoreCard onMatchId={handleMatchId} />
        
//         {/* Conditionally render ResultsTable only when matchId is available */}
//         {matchId && <ResultsTable matchId={matchId} />}

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



//my try


// import React, { useState } from 'react';
// import Navbar from '../components/InitialNavbar';
// import CroppedImage from '../assets/images/Cropped.png';
// import ScoreCard from '../components/ScoreCard';
// import ResultsTable from '../components/ResultsTable';
// import Number from '../components/Number';
// import LatestNews from '../components/LatestNews';
// import UpcomingMatches from '../components/UpcommingMatches';
// import Hero from '../components/Hero';
// import Footer from '../components/Footer';
// import videoSrc from '../assets/images/new.mp4';
// import videoSrc1 from '../assets/images/MP5.mp4';
// import Highlights from '../components/Highlights';

// const HomePage = () => {
//   const [matchId, setMatchId] = useState(null);

//   // Callback function to handle matchId received from ScoreCard
//   const handleMatchId = (id) => {
//     setMatchId(id);
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Video Background for large screens */}
//       <div className="relative w-full h-screen md:h-[75vh] lg:h-[100vh]">
//         <video
//           className="absolute inset-0 w-full h-full object-cover hidden md:block" // Visible only on medium screens and up
//           autoPlay
//           loop={false}
//           muted
//           style={{ zIndex: -1 }}
//         >
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Video Background for mobile screens */}
//       <div className="">
//         <video
//           className="absolute inset-0 w-full h-full object-cover block md:hidden" // Visible only on small screens
//           autoPlay
//           loop={false}
//           muted
//           style={{ zIndex: -1 }}
//         >
//           <source src={videoSrc1} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Other Components */}
//       <div className="w-full">
//         <ScoreCard onMatchId={handleMatchId} />
        
//         {/* Conditionally render ResultsTable only when matchId is available */}
//         {matchId && <ResultsTable matchId={matchId} />}

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



// import React, { useState } from 'react';
// import Navbar from '../components/InitialNavbar';
// import {motion} from 'framer-motion';

// import ScoreCard from '../components/ScoreCard';
// import ResultsTable from '../components/ResultsTable';
// import Number from '../components/Number';
// import LatestNews from '../components/LatestNews';
// import UpcomingMatches from '../components/UpcommingMatches';
// import Hero from '../components/Hero';
// import Footer from '../components/Footer';
// import videoSrc from '../assets/images/new.mp4';
// import videoSrc1 from '../assets/images/MP5.mp4';
// import Highlights from '../components/Highlights';

// import bgImg from '../assets/images/Frame 152.png';
//  import RCCRIC from '../assets/images/groundback.png';
//  import CroppedImage from '../assets/images/Heroes_BacK_Image.png';



// const HomePage = () => {
//   const [matchId, setMatchId] = useState(null);

//   // Callback function to handle matchId received from ScoreCard
//   const handleMatchId = (id) => {
//     setMatchId(id);
//   };

//   return (
//     <>
//       <Navbar />


//       {/*Background  */}
//       <div
//   className="relative w-full h-screen flex flex-col items-center justify-center"
//   style={{
//     backgroundImage: `url(${RCCRIC})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//   }}
// >
//   {/* Richmond Text */}
//   <motion.h1
//     id="richmond-text"
//     data-text="Richmond"
//     className="effect z-[5] text-center"
//     initial={{ opacity: 0, y: -300 }}
//     animate={{ opacity: 1, y: -100 }}
//     transition={{ duration: 1, delay: 1 }}
//   >
//     Richmond
//   </motion.h1>
//   {/* Background for the two players */}

//       <div
//         className="absolute w-full h-[80%] z-[10] flex items-center justify-center mt-14"
//         style={{
//           backgroundImage: `url(${CroppedImage})`,
//           backgroundSize: "contain", // Responsive scaling
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* College Text */}
//         <motion.h1
//           id="college-text"
//           data-text="College"
//           className="effect z-[15] text-center"
//           initial={{ opacity: 0, y: 300 }}
//           animate={{ opacity: 1, y: 10 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           College
//         </motion.h1>
//       </div>
//     </div>

//       {/* Other Components */}
//       <div className="w-full">
//         <ScoreCard onMatchId={handleMatchId} />
        
//         {/* Conditionally render ResultsTable only when matchId is available */}
//         {matchId && <ResultsTable matchId={matchId} />}

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






import React, { useState, useEffect } from 'react';
import Navbar from '../components/InitialNavbar';
import {motion} from 'framer-motion';

import ScoreCard from '../components/ScoreCard';
import ResultsTable from '../components/ResultsTable';
import Number from '../components/Number';
import LatestNews from '../components/LatestNews';
import UpcomingMatches from '../components/UpcommingMatches';
import Hero from '../components/Hero';
import InitialFooter from '../components/InitialFooter';
import videoSrc from '../assets/images/new.mp4';
import videoSrc1 from '../assets/images/MP5.mp4';
import Highlights from '../components/Highlights';

import bgImg from '../assets/images/Frame 152.png';
import RCCRIC from '../assets/images/groundback.png';
import CroppedImage from '../assets/images/players_image_home.png';
import mobileBG from '../assets/images/mobile1.png';

const HomePage = () => {
  const [matchId, setMatchId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Callback function to handle matchId received from ScoreCard
  const handleMatchId = (id) => {
    setMatchId(id);
  };

  // Handle screen size change for mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px breakpoint for mobile
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar />

      {/* Background for larger screens */}
      <div
        className={`relative w-full h-screen flex flex-col items-center justify-center ${isMobile ? 'hidden' : 'show-on-large'}`}
        style={{
          backgroundImage: `url(${RCCRIC})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Richmond Text */}
        <motion.h1
          id="richmond-text"
          data-text="Richmond"
          className="effect z-[5] text-center hide-on-small"
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Richmond
        </motion.h1>
        {/* Background for the two players */}
        <div
          className="absolute w-full h-[80%] z-[10] flex items-center justify-center mt-14 hide-on-small"
          style={{
            backgroundImage: `url(${CroppedImage})`,
            backgroundSize: "contain", // Responsive scaling
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* College Text */}
          <motion.h1
            id="college-text"
            data-text="College"
            className="effect z-[15] text-center"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 1, delay: 1 }}
          >
            College
          </motion.h1>
        </div>
      </div>

      {/* MOBILE VIEW */}
      {isMobile && (
        <div
          className="relative w-full h-screen flex flex-col items-center justify-center show-on-small"
          style={{
            backgroundImage: `url(${mobileBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Other Components */}
      <div className="w-full">
        <ScoreCard onMatchId={handleMatchId} />

        {/* Conditionally render ResultsTable only when matchId is available */}
        {matchId && <ResultsTable matchId={matchId} />}

        <Number />
        <LatestNews />
        <Highlights />
        <UpcomingMatches />
        <Hero />
      </div>

      <InitialFooter />
    </>
  );
};

export default HomePage;


