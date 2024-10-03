import React from 'react';
import topImage from '../assets/images/BG3.png'; // Import your image
import HomeNavbar from '../components/HomeNavbar';
export default function TopLayer() {
  return (
    
    <div
      style={{
        backgroundImage: `url(${topImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Ensures the background image does not scroll
        height: '80px', // Adjust the height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
     {/* Includee the Navbar inside the TopLayer */}
     <HomeNavbar />
      
    </div>
  );
}
