import React from 'react';
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

const HomePage = () => {
  return (
    <>
      <Navbar />
      < div className="relative w-full h-screen md:min-h-[600px]">
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
        <ScoreCard />
        <ResultsTable />
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
