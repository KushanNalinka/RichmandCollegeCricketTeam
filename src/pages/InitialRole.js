import React, { useState, useEffect } from 'react';
import Navbar from '../components/InitialNavbar';
import InitialFooter from '../components/Footer';
import '../index.css';
import topImageDesktop1 from '../assets/images/memebrs.png'; // Desktop image
import topImageMobile from '../assets/images/MB1.png'; // Mobile image
import lahiru from '../assets/images/lahiru.png';
import Asoka from '../assets/images/Asoka Sirimanne (2).png'
import   Indika from '../assets/images/VICE.jpg'
import Prasanna from '../assets/images/Prasanna Ramanayake2.jpg'
import Dilshan from '../assets/images/Dilshan Amarasinghe.jpg'
import Jayamini from '../assets/images/Jayamini Senevirathne.jpg'
import Bakthi from '../assets/images/Bakthi Mendis.jpg'
import Samantha from '../assets/images/Samantha Lorensohewa.jpg'
import Gunawardana from '../assets/images/PA Gunawardena.jpg'
import Nishantha from '../assets/images/Nishantha Mendis.jpg'
import Asitha from '../assets/images/Asitha De Silva2.jpg'
import Mihiruk from '../assets/images/Mihiruk De Silva.jpg'
import Banuka from '../assets/images/Bhanuka Rathnayake.jpg'
import Chathupama from '../assets/images/Chathupama Gunasinghe.jpg'
import Chamath from '../assets/images/Chamath Siriwardena.jpg'
import Tharindu from '../assets/images/Tharindu Weerasinghe.jpg'



const SponsoredBy = () => {
  const committeeMembers = [
    { id: 1, name: 'Asoka Sirimanne', role: 'President', image: [Asoka] },
    { id: 2, name: 'Indika Udayanga', role: 'Secretary', image: [Indika] },
    { id: 3, name: 'N. P. Ramanayake', role: 'Treasurer', image: [Prasanna] },
    { id: 4, name: 'Dilshan Amarasinghe', role: 'Vice President', image: [Dilshan] },
    { id: 5, name: 'Jayamini Senevirathna', role: 'Vice President', image: [Jayamini] },
    { id: 6, name: 'Bakthi Mendis', role: 'Assistant Secretary', image: [Bakthi] },
    { id: 7, name: 'Samantha Lorensuhewa', role: 'Assistant Treasurer', image: [Samantha] },
    { id: 8, name: 'Lasantha De Silva', role: 'Committee Member', image: [lahiru] },
    { id: 9, name: 'P. A. Gunawardane', role: 'Committee Member', image: [Gunawardana] },
    { id: 10, name: 'Nishantha Mendis', role: 'Committee Member', image: [Nishantha] },
    { id: 11, name: 'C. K. Hewamanna', role: 'Committee Member', image: [lahiru] },
    { id: 12, name: 'Thushan Jayawardane', role: 'Committee Member', image: [lahiru] },
    { id: 13, name: 'Upul Yatawara', role: 'Committee Member', image: [lahiru] },
    { id: 14, name: 'Asitha De Silva', role: 'Committee Member', image: [Asitha ]},
    { id: 15, name: 'Mihiruk De Silva', role: 'Committee Member', image: [Mihiruk]},
    { id: 16, name: 'Banuka Rathnayake', role: 'Committee Member', image: [Banuka] },
    { id: 17, name: 'Chathupama Gunasinghe', role: 'Committee Member', image: [Chathupama] },
    { id: 18, name: 'Sanjaya De Silva', role: 'Committee Member', image: [lahiru] },
    { id: 19, name: 'Chamath Siriwardana', role: 'Committee Member', image: [Chamath] },
    { id: 20, name: 'Tharindu Weerasinghe', role: 'Committee Member', image: [Tharindu] },
  ];

  const [isMobile, setIsMobile] = useState(false);

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
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Top Image Section
      <div
        className="bg-cover bg-center bg-fixed h-[100vh] md:hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${topImageMobile})`,
        }}
      ></div> */}

        {/* Background for larger screens */}
        <div
        className={`relative w-full h-screen flex flex-col items-center justify-center ${isMobile ? 'hidden' : 'show-on-large'}`}
        style={{
          backgroundImage: `url(${topImageDesktop1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        </div>

      {/* <div
        className="hidden md:bg-cover md:bg-center md:bg-fixed md:h-[75vh] lg:h-[100vh] md:flex md:items-center md:justify-center"
        style={{
          backgroundImage: `url(${topImageDesktop1})`,
        }}
      ></div> */}

         {/* MOBILE VIEW */}
         {isMobile && (
        <div
          className="relative w-full h-screen flex flex-col items-center justify-center show-on-small"
          style={{
            backgroundImage: `url(${topImageMobile})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      )}

<div className="bg-[#F9F9F7] py-20">
  <div className="container mx-auto text-center max-w-7xl px-4"> {/* Adjusted to a larger width */}
    <h2 className="text-3xl sm:text-5xl font-bold mb-8">Committee Members</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {committeeMembers.map((member) => (
        <div
          key={member.id}
          className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center"
        >
          <div className="h-64 w-64 mb-4 rounded-full">
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-gray-600">{member.role}</p>
        </div>
        
      ))}
    </div>
  </div>
</div>



           

      {/* Footer */}
      <InitialFooter />
    </div>
  );
};

export default SponsoredBy;
