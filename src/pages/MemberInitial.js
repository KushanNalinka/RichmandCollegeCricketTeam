import React, { useState }  from 'react';
import Navbar from '../components/MemberNavbar';
import CroppedImage from '../assets/images/Cropped.png';
import ScoreCard from '../components/ScoreCard';
import ResultsTable from '../components/ResultsTable';
import Number from '../components/Number';
import LatestNews from '../components/MemberLatestNews';
import UpcomingMatches from '../components/UpcommingMatches';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import videoSrc from '../assets/images/new.mp4'; // Corrected import for video
import Highlights from '../components/Highlights';
import videoSrc1 from '../assets/images/MP5.mp4';

const HomePage = () => {
  const [matchId, setMatchId] = useState(null); // State to manage matchId

  // Callback function to handle matchId received from ScoreCard
  const handleMatchId = (id) => {
    console.log('Match ID:', id);
    setMatchId(id);
  };
  return (
    <>
      <Navbar />
     {/* Video Background for large screens */}
     <div className="relative w-full h-screen md:h-[75vh] lg:h-[100vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block" // Visible only on medium screens and up
          autoPlay
          loop={false}
          muted
          style={{ zIndex: -1 }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Background for mobile screens */}
      <div className="">
        <video
          className="absolute inset-0 w-full h-full object-cover block md:hidden" // Visible only on small screens
          autoPlay
          loop={false}
          muted
          style={{ zIndex: -1 }}
        >
          <source src={videoSrc1} type="video/mp4" />
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
