
import React, { useState, useEffect } from 'react';
import Navbar from '../components/InitialNavbar';
import RCCRIC from '../assets/images/groundback.png';
import CroppedImage from '../assets/images/Cropped.png';


import NewsSlider from '../components/NewsSlider';
import UpcomingMatches from '../components/UpcommingMatchesSlider';
import ScoreCard from '../components/ScoreCard';
import MatchSlider from '../components/MatchSlider';
import Number from '../components/Number';
import PlayerSlider from '../components/PlayerSlider';
import ResultsTable from '../components/ResultsTable';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';
import LatestNews from '../components/LatestNews';

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

<Navbar />
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
            className="absolute top-96 transform -translate-y-1/2 z-20"
            style={{ width: '85%' }} 
          />

          {/* "COLLEGE" Text on Top of Cropped Images */}

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
<LatestNews />
<Highlights />
  <Number />
  <PlayerSlider />
 <Footer />
    </>

  );
};

export default HomePage;
