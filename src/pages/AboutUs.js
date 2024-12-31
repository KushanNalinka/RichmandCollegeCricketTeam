
// import Navbar from '../components/MemberNavbar';
// import topImage from '../assets/images/BG3.png'; // Your local background image
// import '../index.css'; // Make sure to include your main CSS
// import Footer from '../components/Footer';

// const AboutUs = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />
      

//       {/* Top Section */}
//       <div
//         className="bg-cover bg-center bg-fixed h-48 flex items-center justify-center"
//         style={{ backgroundImage: `url(${topImage})` }}
//       ></div>

//       {/* About Richmond School Cricket Team Section */}
//       <div className="max-w-7xl mx-auto p-8 flex flex-col lg:flex-row items-center lg:space-x-12">
//         {/* Image on the left */}
//         <div className="lg:w-1/2 mb-6 lg:mb-0">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Richmond_College_Main_Hall.jpg/2560px-Richmond_College_Main_Hall.jpg" // Richmond College main hall image
//             alt="Richmond School Main Hall"
//             className="w-full rounded-lg shadow-md"
//           />
//         </div>

//         {/* Text on the right */}
//         <div className="lg:w-1/2 lg:pl-10">
//           <h2 className="text-left text-m font-bold text-gray-800 fancy-font">ABOUT RICHMOND SCHOOL CRICKET TEAM</h2>
//           <p className="pt-serif-font text-base text-gray-600 mt-6">
//             The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
//             Our dedication to fostering both athletic and academic excellence is the cornerstone of our cricketing journey.
//             The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
//             Our dedication to fostering both athletic and academic excellence is the cornerstone of our cricketing journey.
//             The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
//             Our dedication to fostering both athletic and academic excellence is the cornerstone of our cricketing journey.
//           </p>
//         </div>
//       </div>

//       {/* Our Journey Section */}
//       <div className="bg-gray-100 p-8 flex flex-col lg:flex-row items-start">
//         <div className="lg:w-1/2 mb-6 lg:mb-0">
//           <h2 className="text-left text-m font-bold text-gray-800 fancy-font">OUR JOURNEY</h2>
//           <p className="pt-serif-font text-m text-gray-600 mt-4">
//             Richmond School Cricket has produced top players who have gone on to represent national teams, with numerous
//             victories in inter-school championships. Below are some of the key moments in our journey.
//           </p>
//           <ul className="list-disc list-inside pt-serif-font text-m text-gray-600 mt-4">
//             <li>Inter-School Championship 2015 - Winners</li>
//             <li>Produced 5 National-Level Players</li>
//             <li>Inter-School Championship 2020 - Finalists</li>
//           </ul>
//         </div>

//         <div className="lg:w-1/2 flex flex-col lg:flex-row lg:space-x-4 justify-center">
//           <img
//             src="https://www.srilankasports.com/wp-content/uploads/2018/04/z_p16-Richmond-678x381.jpg"
//             alt="Richmondites Overcome Peterites to Retain U-19 Cricket Title"
//             className="w-full lg:w-1/2 rounded-lg shadow-md"
//           />
//           <img
//             src="http://www.sundaytimes.lk/130217/uploads/DSC_0088-300x226.jpg"
//             alt="Richmond Wins Second Time in Three Years"
//             className="w-full lg:w-1/2 rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Vision and Mission Section */}
//       <div className="max-w-7xl mx-auto p-8 text-center">
//         <h2 className="text-m font-bold text-gray-800 fancy-font">OUR MISSION</h2>
//         <p className="pt-serif-font text-lg text-gray-600 mt-4">
//           Our mission is to promote teamwork, discipline, and leadership through cricket, while instilling the values of
//           sportsmanship in every player.
//         </p>

//         <h2 className="text-xl font-bold text-gray-800 fancy-font mt-8">OUR VISION</h2>
//         <p className="pt-serif-font text-lg text-gray-600 mt-4">
//           Our vision is to develop future cricket stars and foster a sense of community among players and supporters.
//         </p>
//       </div>

//       {/* Gallery Section */}
//       <div className="bg-gray-100 p-8">
//         <h2 className="text-left text-m font-bold text-gray-800 fancy-font">OUR JOURNEY IN PICTURES</h2>
//         <div className="flex flex-wrap justify-center gap-6 mt-8">
//           {/* Change flex direction to row for horizontal alignment */}
//           <div className="flex flex-row space-x-6">
//             <img
//               src="https://xtreamyouth.com/xy_articleimages/2018-03-16_the-richmond-parade-2018_thumb1.jpg"
//               alt="Richmond Parade 2018"
//               className="w-1/4 rounded-lg shadow-md"
//             />
//             <img
//               src="https://www.xtreamyouth.com/xy_articleimages/2016-10-30_richmond-walk-16_thumb1.jpg"
//               alt="Richmond Walk 2016"
//               className="w-1/4 rounded-lg shadow-md"
//             />
//             <img
//               src="http://www.sundaytimes.lk/190317/uploads/Sandun-Mendis-and-Vimud-Sapnaka-put-on-a-62-run-partnership-for-the-6th-wicket-save-Richmond-from-being-asked-to-follow-on-resume-their-innings-on-day-two.jpg"
//               alt="Richmond Cricket Match"
//               className="w-1/4 rounded-lg shadow-md"
//             />
//             <img
//               src="https://i0.wp.com/quadrangle.lk/wp-content/uploads/RichmondCollegeGalle/Richmond-College-Galle-0025.jpg"
//               alt="Richmond College Galle"
//               className="w-1/4 rounded-lg shadow-md"
//             />
//           </div>
//         </div>

//       </div>
      
//       <Footer/>
//     </div>
//   );
// };

// export default AboutUs;


// import React from 'react';
// import Navbar from '../components/MemberNavbar';
// import Footer from '../components/Footer';
// import '../index.css'; 
// import topImageDesktop from '../assets/images/IMG5.png'; // Desktop image
// import topImageMobile from '../assets/images/MB1.png'; // Mobile image

// // SVG for the star shape
// const StarLogo = () => (
//   <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 2L13.09 8.26L19 8.27L14.63 11.5L15.9 17.74L12 14.6L8.09 17.74L9.37 11.5L5 8.27L10.91 8.26L12 2Z" fill="white"/>
//   </svg>
// );

// const AboutUs = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Top Image Section */}
//       {/* Mobile Image (visible only on small screens) */}
//       <div
//         className="bg-cover bg-center bg-fixed h-[100vh] md:hidden flex items-center justify-center"
//         style={{
//           backgroundImage: `url(${topImageMobile})`,
//         }}
//       >
//       </div>

//       {/* Desktop Image (visible only on medium and larger screens) */}
//       <div
//         className="hidden md:bg-cover md:bg-center md:bg-fixed md:h-[75vh] lg:h-[100vh] md:flex md:items-center md:justify-center"
//         style={{
//           backgroundImage: `url(${topImageDesktop})`,
//         }}
//       >
//       </div>

//     {/* Top Section */}
// <div className="bg-gradient-to-b to-[#00175F] from-[#4A0D34] text-white py-20 md:py-40">
//   <div className="max-w-screen-lg w-full mx-auto text-center px-6 sm:px-4">
//     <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug sm:leading-tight">
//       About <span className="italic">Richmond School</span><br />
//       Cricket Team<br />
//       <span className="italic">Cricket Team has a long-standing history</span>
//     </h1>
//     <div className="flex justify-center mt-4 sm:mt-6">
//       <StarLogo />
//     </div>
//     <p className="text-xs sm:text-sm lg:text-base mt-4 sm:mt-6 max-w-2xl mx-auto">
//       The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
//     </p>
//   </div>
// </div>


//     {/* New Heading Section */}
// <div className="bg-[#F9F9F7] py-10 sm:py-12 md:py-16 text-center">
//   <p className="text-gray-500 text-base sm:text-lg mb-2 sm:mb-4">
//     The Vision and Mission
//   </p>
//   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
//     The Richmond School <span> Cricket Team </span><br />
//     <span className="italic">The Richmond School Cricket Team</span>
//   </h2>
// </div>

//       {/* Benefits Section */}
//       <div className="bg-light-gray py-20">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//   <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
//     <h3 className="text-xl sm:text-2xl font-bold mb-4">The Richmond School Cricket Team</h3>
//     <p className="text-sm sm:text-base flex-grow">
//       The Richmond School Cricket Team has a long-standing history...
//     </p>
//   </div>
//   <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
//     <h3 className="text-xl sm:text-2xl font-bold mb-4">The Richmond School Cricket Team</h3>
//     <p className="text-sm sm:text-base flex-grow">
//       The Richmond School Cricket Team has a long-standing history...
//     </p>
//   </div>
//   <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
//     <h3 className="text-xl sm:text-2xl font-bold mb-4">The Richmond School Cricket Team</h3>
//     <p className="text-sm sm:text-base flex-grow">
//       The Richmond School Cricket Team has a long-standing history...
//     </p>
//   </div>
// </div>


//       {/* Footer */}
//       <Footer />
//     </div>
//     </div>
//   );
// };

// export default AboutUs;


import React, { useState, useEffect } from 'react';
import Navbar from '../components/MemberNavbar';
import Footer from '../components/Footer';
import '../index.css';
import topImageDesktop from '../assets/images/IMG5.png'; // Desktop image
import topImageMobile from '../assets/images/MB1.png'; 

// Mobile image
// SVG for the star shape
const StarLogo = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.09 8.26L19 8.27L14.63 11.5L15.9 17.74L12 14.6L8.09 17.74L9.37 11.5L5 8.27L10.91 8.26L12 2Z" fill="white"/>
  </svg>
);



  

    
const AboutUs = () => {

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

  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <Navbar />
    
      {/* Mobile Image (visible only on small screens) */}
      {/* <div
        className="bg-cover bg-center bg-fixed h-[100vh] md:hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${topImageMobile})`,
        }}
      >
      </div> */}

        {/* Background for larger screens */}
        <div
        className={`relative w-full h-screen flex flex-col items-center justify-center ${isMobile ? 'hidden' : 'show-on-large'}`}
        style={{
          backgroundImage: `url(${topImageDesktop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        </div>
    
      {/* <div
        className="hidden md:bg-cover md:bg-center md:bg-fixed md:h-[75vh] lg:h-[100vh] md:flex md:items-center md:justify-center"
        style={{
          backgroundImage: `url(${topImageDesktop})`,
        }}
      >
      </div> */}

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
    {/* Top Section */}
<div className="bg-gradient-to-b to-[#00175F] from-[#4A0D34] text-white py-20 md:py-40">
  <div className="max-w-screen-lg w-full mx-auto text-center px-6 sm:px-4">
    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug sm:leading-tight">
    A Legacy   <span className="italic">of Excellence</span><br />

      <span className="italic">The Proud History of Richmond College Cricket</span>
    </h1>
    <div className="flex justify-center mt-4 sm:mt-6">
      <StarLogo />
    </div>
    <p className="text-xs sm:text-sm lg:text-base mt-4 sm:mt-6 max-w-2xl mx-auto">
    For over a century, Richmond College has cultivated a deep passion for cricket, building a heritage of remarkable achievements, spirited rivalries, and celebrated players who have left an indelible mark on Sri Lankan cricket.
    </p>
  </div>
</div>
    {/* New Heading Section */}
<div className="bg-[#F9F9F7] py-10 sm:py-12 md:py-16 text-center">
  <p className="text-gray-500 text-base sm:text-lg mb-2 sm:mb-4">
    The Vision and Mission
  </p>
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
  To nurture a legacy of cricketing excellence at Richmond College,  <span>inspiring generations of sportsmanship, integrity, </span><br />
    <span className="italic"> and leadership on and off the field</span>
  </h2>
</div>
      {/* Benefits Section */}
      <div className="bg-light-gray py-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
    <h3 className="text-xl sm:text-2xl font-bold mb-4">Founding Years and First Victories</h3>
    <p className="text-sm sm:text-base flex-grow">
    Richmond College cricket began in 1888, with the first recorded match against All Saints’ College.
     By 1899, Richmond achieved its first victory, and the game quickly became integral to school life.
      Early match logs reveal memorable encounters, such as the celebrated win over Wesley College in 1901, when camaraderie and competitive spirit took root.

       This period also saw the establishment of the Richmond–Mahinda rivalry in 1905, a fixture now affectionately known as the “Lovers' Quarrel.”
h
       These formative years were marked by Richmond’s passion for cricket and the development of match traditions that continue today.
    </p>
  </div>
  <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
    <h3 className="text-xl sm:text-2xl font-bold mb-4">The Development of Tradition and Rivalries</h3>
    <p className="text-sm sm:text-base flex-grow">
    Over the decades, Richmond College cricket matches became cornerstone events.

     The annual Richmond–Mahinda match became Southern Sri Lanka’s biggest sporting event, evolving from one-day games to full-day fixtures, eventually transitioning to two-day games in 1930. Similarly, the Richmond–Wesley series, established in 1901, became formalized with the E.R. de Silva Trophy in 1973.
     These rivalries grew in popularity, drawing crowds and capturing the college spirit, and have endured to this day as essential annual highlights.

    </p>
  </div>
  <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
    <h3 className="text-xl sm:text-2xl font-bold mb-4">Notable Figures and Legacy</h3>
    <p className="text-sm sm:text-base flex-grow">
    Richmond College has produced influential cricketers who have left their mark on the sport both locally and nationally.
     Pioneers like E.M. Karunaratne and P.S. Thuduwewatta, known for his record 100-wicket season, as well as R.M.M. De Silva, who played for All Ceylon, laid a foundation of excellence.
      Generations of Richmond alumni have gone on to represent regional and national teams, contributing to Sri Lanka’s cricket heritage.
       Today, Richmond College cricket remains a proud legacy, fostering talent and a deep love for the game among its students.

    </p>
  </div>
</div>
      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
};
export default AboutUs;

