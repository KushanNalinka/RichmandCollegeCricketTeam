// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate and Link for navigation
// import Logo from '../assets/images/rcclogo.png'; // Add your logo image import
// import { FaUser } from 'react-icons/fa'; // Import user icon from react-icons

// const HomeNavbar = () => {
//   const navigate = useNavigate(); // Hook for navigation
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state
//   const [isTeamsDropdownOpen, setIsTeamsDropdownOpen] = useState(false); // Dropdown state for Teams
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // Dropdown state for About Us
//   const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false); // Dropdown state for User Icon

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset;
//       // Navbar is visible only when the user is at the top of the page (scrollTop = 0)
//       setIsNavbarVisible(currentScrollTop === 0);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.dropdown')) {
//         setIsTeamsDropdownOpen(false);
//         setIsAboutDropdownOpen(false);
//         setIsUserDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleLoginClick = () => {
//     navigate('/home'); // Redirect to home page after logout
//   };

//   const handleDropdownClick = (path) => {
//     navigate(path); // Navigate to the selected page
//     setIsTeamsDropdownOpen(false); // Close teams dropdown after selecting
//     setIsAboutDropdownOpen(false); // Close about us dropdown after selecting
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-3 transition-transform duration-300 ease-in-out ${
//         isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="flex items-center justify-between w-fit bg-transparent backdrop-blur-md rounded-full shadow-lg px-6 py-2">
//         {/* Logo on the left */}
//         <div className="flex items-center">
//           <Link to="/">
//             <img src={Logo} alt="Logo" className="h-10 w-10 mr-4" /> {/* Add logo with appropriate height/width */}
//           </Link>
//         </div>

//         {/* Centered Navbar Items */}
//         <ul className="flex space-x-8 text-white font-semibold text-14px">
//           <li>
//             <Link to="/" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
//               Home
//             </Link>
//           </li>

//           {/* Dropdown for About Us */}
//           <li className="relative dropdown">
//             <div
//               className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out"
//               onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
//             >
//               About Us
//             </div>
//             {isAboutDropdownOpen && (
//               <ul className="absolute left-0 top-full mt-2 bg-gray-800 rounded-lg shadow-lg w-40">
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/coach')}
//                   >
//                     Coaches
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/about-us/team')}
//                   >
//                     Our History
//                   </button>
//                 </li>
                
//               </ul>
//             )}
//           </li>

//           {/* Dropdown for Teams */}
//           <li className="relative dropdown">
//             <div
//               className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out"
//               onClick={() => setIsTeamsDropdownOpen(!isTeamsDropdownOpen)}
//             >
//               Teams
//             </div>
//             {isTeamsDropdownOpen && (
//               <ul className="absolute left-0 top-full mt-2 bg-gray-800 rounded-lg shadow-lg w-40">
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/profile')}
//                   >
//                     Under 13
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/under-15')}
//                   >
//                     Under 15
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/big-match')}
//                   >
//                     Under 17
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/big-match')}
//                   >
//                     Under 19
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <Link to="/match-info" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
//               Matches
//             </Link>
//           </li>
//           <li>
//             <Link to="/news" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
//               News
//             </Link>
//           </li>
//           <li>
//            {/* Anchor link that scrolls to the Footer */}
//            <a href="#contact-us" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
//               Contact Us
//             </a>
//           </li>
//         </ul>

//         {/* Right section with User Icon and Dropdown */}
//         <div className="relative dropdown ml-8">
//           <div
//             className="flex items-center space-x-2 text-white cursor-pointer"
//             onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
//           >
//             <FaUser className="text-2xl" /> {/* User Icon */}
//           </div>

//           {isUserDropdownOpen && (
//             <ul className="absolute right-0 top-full mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-40">
//               <li>
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-yellow-500 transition-all duration-300 ease-in-out"
//                   onClick={() => handleDropdownClick('/profile')}
//                 >
//                   Profile
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-yellow-500 transition-all duration-300 ease-in-out"
//                   onClick={handleLoginClick}
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default HomeNavbar;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate and Link for navigation
// import Logo from '../assets/images/rcclogo.png'; // Add your logo image import
// import { FaUser } from 'react-icons/fa'; // Import user icon from react-icons
// import { useAuth } from '../hooks/UseAuth'; // Import auth context to get user data

// const HomeNavbar = () => {
//   const { userRole, logout, user } = useAuth();
//   const navigate = useNavigate(); // Hook for navigation
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state

//   // Handle navbar visibility based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset;
//       // Navbar is visible only when the user is at the top of the page (scrollTop = 0)
//       setIsNavbarVisible(currentScrollTop === 0);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleLoginClick = () => {
//     navigate('/'); // Redirect to home page after logout
//   };

//   const handleDropdownClick = (path) => {
//     navigate(path); // Navigate to the selected page
//   };
//   const handleProfileClick = () => {
//     switch (userRole) {
//       case 'coach':
//         navigate('/coachProfile');
//         break;
//       case 'player':
//         navigate('/playerProfile');
//         break;
//       case 'official':
//         navigate('/officialProfile');
//         break;
//       default:
//         navigate('/member');
//     }
//   };


//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-3 transition-transform duration-300 ease-in-out ${
//         isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="flex items-center justify-between w-fit bg-transparent backdrop-blur-md shadow-lg px-6 py-2">
//         {/* Logo on the left */}
//         <div className="flex items-center">
//           <Link to="/member">
//             <img src={Logo} alt="Logo" className="h-10 w-10 mr-4" /> {/* Add logo with appropriate height/width */}
//           </Link>
//         </div>

//         {/* Centered Navbar Items */}
//         <ul className="flex space-x-8 text-white font-semibold text-14px">
//           <li className="relative group">
//             <Link to="/member" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
//               Home
//             </Link>
//           </li>

//           {/* Dropdown for About Us */}
//           <li className="relative group">
//             <div className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">
//               Overview
//             </div>
//             <ul className="absolute left-0 top-full mt-2 bg-gray-800 shadow-lg w-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
//               <li>
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                   onClick={() => handleDropdownClick('/coach')}
//                 >
//                   Coaches
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                   onClick={() => handleDropdownClick('/about-us')}
//                 >
//                   About Us
//                 </button>
//               </li>
//             </ul>
//           </li>

//           {/* Dropdown for Teams */}
//           <li className="relative group">
//             <div className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">
//               Teams
//             </div>
//             <ul className="absolute left-0 top-full mt-2 bg-gray-800 shadow-lg w-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
//               <li>
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                   onClick={() => handleDropdownClick('/under13')}
//                 >
//                   Under 13
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                   onClick={() => handleDropdownClick('/under15')}
//                 >
//                   Under 15
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                   onClick={() => handleDropdownClick('/under17')}
//                 >
//                   Under 17
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                   onClick={() => handleDropdownClick('/under19')}
//                 >
//                   Under 19
//                 </button>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <Link to="/match-info" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
//               Matches
//             </Link>
//           </li>
//           <li>
//             <Link to="/news" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
//               News
//             </Link>
//           </li>
//           <li>
//            <a href="#contact-us" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
//               Contact Us
//             </a>
//           </li>
//         </ul>

//         {/* Right section with User Icon and Dropdown */}
//         <div className="relative group ml-8">
//           <div className="flex items-center space-x-2 text-white cursor-pointer">
//             <FaUser className="text-2xl" /> {/* User Icon */}
//           </div>

//           {/* Dropdown for User */}
//           <ul className="absolute left-0 top-full mt-2 bg-gray-800 text-white shadow-lg w-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
//             <li>
//               <button
//                 className="block w-full text-left px-4 py-2 hover:bg-yellow-500 transition-all duration-300 ease-in-out"
//                 onClick={handleProfileClick}
//               >
//                 Profile
//               </button>
//             </li>
//             <li>
//               <button
//                 className="block w-full text-left px-4 py-2 hover:bg-yellow-500 transition-all duration-300 ease-in-out"
//                 onClick={handleLoginClick}
//               >
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default HomeNavbar;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../assets/images/rcclogo.png';
// import { FaUser, FaBars } from 'react-icons/fa';
// import { useAuth } from '../hooks/UseAuth';

// const HomeNavbar = () => {
//   const { userRole, logout, user } = useAuth();
//   const navigate = useNavigate();
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isOverviewOpen, setIsOverviewOpen] = useState(false);
//   const [isTeamsOpen, setIsTeamsOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset;
//       setIsNavbarVisible(currentScrollTop === 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleLoginClick = () => {
//     navigate('/');
//   };

//   const handleDropdownClick = (path) => {
//     navigate(path);
//   };

//   const handleProfileClick = () => {
//     switch (userRole) {
//       case 'coach':
//         navigate('/coachProfile');
//         break;
//       case 'player':
//         navigate('/playerProfile');
//         break;
//       case 'official':
//         navigate('/officialProfile');
//         break;
//       default:
//         navigate('/member');
//     }
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleOverviewDropdown = () => {
//     setIsOverviewOpen(!isOverviewOpen);
//   };

//   const toggleTeamsDropdown = () => {
//     setIsTeamsOpen(!isTeamsOpen);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-3 transition-transform duration-300 ease-in-out ${
//         isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="flex items-center justify-between w-full lg:w-fit bg-transparent backdrop-blur-md shadow-lg px-6 py-2 rounded-lg">
//         <div className="flex items-center">
//           <Link to="/member">
//             <img src={Logo} alt="Logo" className="h-10 w-10 mr-4" />
//           </Link>
//         </div>

//         {/* Desktop Navbar */}
//         <ul className="hidden lg:flex space-x-8 text-white font-semibold text-14px">
//           <li>
//             <Link to="/member" className="hover:text-yellow-300">
//               Home
//             </Link>
//           </li>
//           <li className="relative group">
//             <div onClick={toggleOverviewDropdown} className="cursor-pointer hover:text-yellow-300">
//               Overview
//             </div>
//             <ul
//               className={`absolute left-0 top-full mt-2 bg-gray-800 shadow-lg w-40 transition-all duration-300 ease-in-out ${
//                 isOverviewOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//               } overflow-hidden rounded-lg`}
//             >
//               <li>
//                 <button onClick={() => handleDropdownClick('/coach')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//                   Coaches
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => handleDropdownClick('/about-us')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//                   About Us
//                 </button>
//               </li>
//             </ul>
//           </li>
//           <li className="relative group">
//             <div onClick={toggleTeamsDropdown} className="cursor-pointer hover:text-yellow-300">
//               Teams
//             </div>
//             <ul
//               className={`absolute left-0 top-full mt-2 bg-gray-800 shadow-lg w-40 transition-all duration-300 ease-in-out ${
//                 isTeamsOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//               } overflow-hidden rounded-lg`}
//             >
//               <li>
//                 <button onClick={() => handleDropdownClick('/under13')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//                   Under 13
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => handleDropdownClick('/under15')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//                   Under 15
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => handleDropdownClick('/under17')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//                   Under 17
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => handleDropdownClick('/under19')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//                   Under 19
//                 </button>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link to="/match-info" className="hover:text-yellow-300">
//               Matches
//             </Link>
//           </li>
//           <li>
//             <Link to="/news" className="hover:text-yellow-300">
//               News
//             </Link>
//           </li>
//           <li>
//             <a href="#contact-us" className="hover:text-yellow-300">
//               Contact Us
//             </a>
//           </li>
//         </ul>

//         {/* Desktop User Icon and Dropdown */}
//         <div className="hidden lg:flex items-center space-x-2">
//           <div className="relative group">
//             <FaUser className="text-2xl text-white cursor-pointer ml-4" />
//             <ul className="absolute left-0 top-full mt-2 bg-gray-800 text-white shadow-lg w-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all rounded-lg">
//               <li>
//                 <button onClick={handleProfileClick} className="block px-4 py-2">
//                   Profile
//                 </button>
//               </li>
//               <li>
//                 <button onClick={handleLoginClick} className="block px-4 py-2">
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Hamburger Menu */}
//         <div className="lg:hidden flex items-center">
//           <button onClick={toggleMobileMenu} className="text-white">
//             <FaBars className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
// {/* Mobile Menu */}
// <div
//   className={`lg:hidden bg-[#00175F] absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
//     isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
//   } overflow-hidden`}
// >
//   <ul className="flex flex-col items-center space-y-4 py-6 text-white">
//     <li>
//       <Link to="/member" className="hover:text-yellow-300">
//         Home
//       </Link>
//     </li>
//     <li className="relative">
//       <div onClick={toggleOverviewDropdown} className="cursor-pointer hover:text-yellow-300">
//         Overview
//       </div>
//       <ul
//         className={`absolute left-full top-0 mt-2 bg-gray-800 shadow-lg w-40 transition-all duration-300 ease-in-out ${
//           isOverviewOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//         } overflow-hidden rounded-lg`}
//       >
//         <li>
//           <button onClick={() => handleDropdownClick('/coach')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//             Coaches
//           </button>
//         </li>
//         <li>
//           <button onClick={() => handleDropdownClick('/about-us')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//             About Us
//           </button>
//         </li>
//       </ul>
//     </li>
//     <li className="relative">
//       <div onClick={toggleTeamsDropdown} className="cursor-pointer hover:text-yellow-300">
//         Teams
//       </div>
//       <ul
//         className={`absolute left-full top-0 mt-2 bg-gray-800 shadow-lg w-40 transition-all duration-300 ease-in-out ${
//           isTeamsOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//         } overflow-hidden rounded-lg z-10`}
//       >
//         <li>
//           <button onClick={() => handleDropdownClick('/under13')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//             Under 13
//           </button>
//         </li>
//         <li>
//           <button onClick={() => handleDropdownClick('/under15')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//             Under 15
//           </button>
//         </li>
//         <li>
//           <button onClick={() => handleDropdownClick('/under17')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//             Under 17
//           </button>
//         </li>
//         <li>
//           <button onClick={() => handleDropdownClick('/under19')} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//             Under 19
//           </button>
//         </li>
//       </ul>
//     </li>
//     <li>
//       <Link to="/match-info" className="hover:text-yellow-300">
//         Matches
//       </Link>
//     </li>
//     <li>
//       <Link to="/news" className="hover:text-yellow-300">
//         News
//       </Link>
//     </li>
//     <li>
//       <a href="#contact-us" className="hover:text-yellow-300">
//         Contact Us
//       </a>
//     </li>
//     <li>
//       <button onClick={handleProfileClick} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//         Profile
//       </button>
//     </li>
//     <li>
//       <button onClick={handleLoginClick} className="block px-4 py-2 hover:bg-gray-700 transition-colors">
//         Logout
//       </button>
//     </li>
//   </ul>
// </div>

//     </nav>
//   );
// };

// export default HomeNavbar;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate and Link for navigation
import Logo from '../assets/images/rcclogo.png'; // Add your logo image import
import { FaUser, FaBars } from 'react-icons/fa'; // Import FaUser and FaBars for user and hamburger icons
//import { useAuth } from '../hooks/UseAuth'; // Import auth context to get user data

const HomeNavbar = () => {
  //const { userRole, logout, user } = useAuth();
  const navigate = useNavigate();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const [activeDropdown, setActiveDropdown] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      setIsNavbarVisible(currentScrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLoginClick = () => {
    navigate('/'); // Redirect to home page after logout
  };

  const handleDropdownClick = (path) => {
    navigate(path); // Navigate to the selected page
  };
  const userData = localStorage.getItem("userData");
  const user = localStorage.getItem("user");
  console.log("User Data are ", userData);
  console.log("User: ", user)
  

  const handleProfileClick = () => {
    //const userData = JSON.parse(localStorage.getItem("userData"));
    const user = JSON.parse(localStorage.getItem("user"));
    
    
   if (userData && userData.roles) {
      const userRole = userData.roles[0]; // Assuming the first role in the array is primary
  
      switch (userRole) {
        case 'ROLE_COACH':
          navigate('/coachProfile');
          break;
        case 'ROLE_PLAYER':
          navigate('/playerProfile');
          break;
        case 'ROLE_OFFICIAL':
          navigate('/officialProfile');
          break;
        default:
          navigate('/member');
      }
    }else if (user && user.roles) {
      const userRole = user.roles[0]; // Assuming the first role in the array is primary
  
      switch (userRole) {
        case 'ROLE_COACH':
          navigate('/coachProfile');
          break;
        case 'ROLE_PLAYER':
          navigate('/playerProfile');
          break;
        case 'ROLE_OFFICIAL':
          navigate('/officialProfile');
          break;
        default:
          navigate('/member');
      }
    } 

     else {
      console.warn("User data or roles not found in local storage.");
    }
  };
  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns on toggle
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleLogoutClick = async () => {
    try {
      // Call the backend logout endpoint
      await axios.post(`${API_URL}auth/logout`); // Adjust endpoint if necessary

      // Clear user data from local storage
      localStorage.removeItem("userData");
      localStorage.removeItem("user");

      // Redirect to home or login page
      navigate('/');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-3 transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between w-full lg:w-fit bg-transparent backdrop-blur-md shadow-lg px-6 py-2">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link to="/member">
            <img src={Logo} alt="Logo" className="h-10 w-10 mr-4" /> {/* Add logo with appropriate height/width */}
          </Link>
        </div>

        {/* Centered Navbar Items */}
        <ul className="hidden lg:flex space-x-8 text-white font-semibold text-14px">
          <li className="relative group">
            <Link to="/member" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li className="relative group">
            <div className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Overview
            </div>
            <ul className="absolute left-0 top-full mt-2 bg-gray-800 shadow-lg w-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/coach')}
                >
                  Coaches
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/allplayers')}
                >
                  All Players
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/oldboys')}
                >
                  Old Boys
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/about-us')}
                >
                  About Us
                </button>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <div className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Teams
            </div>
            <ul className="absolute left-0 top-full mt-2 bg-gray-800 shadow-lg w-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/under13')}
                >
                  Under 13
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/under15')}
                >
                  Under 15
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/under17')}
                >
                  Under 17
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/under19')}
                >
                  Under 19
                </button>
              </li>
            </ul>
          </li>
        
          <li className="relative group">
            <div className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Academy
            </div>
            <ul className="absolute left-0 top-full mt-2 bg-gray-800 shadow-lg w-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/academy9')}
                >
                  Academy 9
                </button>
              </li>
            <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/academy11')}
                >
                  Academy 11
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/academy13')}
                >
                  Academy 13
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/academy15')}
                >
                  Academy 15
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/academy17')}
                >
                  Academy 17
                </button>
              </li>
             
            </ul>
          </li>
          <li className="relative group">
            <div className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Legends
            </div>
            <ul className="absolute left-0 top-full mt-2 bg-gray-800 shadow-lg w-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/over40')}
                >
                  Over 40s
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
                  onClick={() => handleDropdownClick('/over50')}
                >
                 Over 50s
                </button>
              </li>
             
            </ul>
          </li>

          <li>
            <Link to="/match-info" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Matches
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              News
            </Link>
          </li>
          <li>
            <a href="#contact-us" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right section with User Icon and Dropdown */}
        <div className="relative group hidden lg:flex ml-8">
          <div className="flex items-center space-x-2 text-white cursor-pointer">
            <FaUser className="text-2xl" /> {/* User Icon */}
          </div>
          <ul className="absolute left-0 top-full mt-2 bg-gray-800 text-white shadow-lg w-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <li>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                onClick={handleProfileClick}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      <div
        className={`lg:hidden bg-[#00175F] absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 text-white">
          <li>
            <Link to="/member" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <button onClick={() => toggleDropdown('overview')} className="hover:text-yellow-300">Overview</button>
            {activeDropdown === 'overview' && (
              <ul className="space-y-2 mt-2 text-white text-left">
                <li><button onClick={() => handleDropdownClick('/coach')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Coaches</button></li>
                <li><button onClick={() => handleDropdownClick('/allplayers')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">All Players</button></li>
                <li><button onClick={() => handleDropdownClick('/oldboys')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Old Boys</button></li>
                <li><button onClick={() => handleDropdownClick('/about-us')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">About Us</button></li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown('teams')} className="hover:text-yellow-300">Teams</button>
            {activeDropdown === 'teams' && (
              <ul className="space-y-2 mt-2 text-white text-left">
                <li><button onClick={() => handleDropdownClick('/under13')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Under 13</button></li>
                <li><button onClick={() => handleDropdownClick('/under15')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Under 15</button></li>
                <li><button onClick={() => handleDropdownClick('/under17')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Under 17</button></li>
                <li><button onClick={() => handleDropdownClick('/under19')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Under 19</button></li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown('academy')} className="hover:text-yellow-300">Academy</button>
            {activeDropdown === 'academy' && (
              <ul className="space-y-2 mt-2 text-white text-left">
                <li><button onClick={() => handleDropdownClick('/academy9')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Academy 9</button></li>
                <li><button onClick={() => handleDropdownClick('/academy11')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Academy 11</button></li>
                <li><button onClick={() => handleDropdownClick('/academy13')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Academy 13</button></li>
                <li><button onClick={() => handleDropdownClick('/academy15')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Academy 15</button></li>
                <li><button onClick={() => handleDropdownClick('/academy17')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Academy 17</button></li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown('legends')} className="hover:text-yellow-300">Legends</button>
            {activeDropdown === 'legends' && (
              <ul className="space-y-2 mt-2 text-white text-left">
                <li><button onClick={() => handleDropdownClick('/over40')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Over 40s</button></li>
                <li><button onClick={() => handleDropdownClick('/over50')} className="block px-4 py-2 hover:bg-yellow-500 text-yellow-500">Over 50s</button></li>
                
              </ul>
            )}
          </li>
          <li>
            <Link to="/match-info" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Matches
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              News
            </Link>
          </li>
          <li>
            <a href="#contact-us" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Contact Us
            </a>
          </li>
          <li>
            <button   onClick={handleProfileClick} className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
             Profile
            </button>
          </li>
          <li>
            <button  onClick={handleLogoutClick} className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
             Logout
            </button>
          </li>
         {/* <li>
            <button
              className="flex items-center space-x-2 text-white font-semibold bg-transparent border-2 border-white rounded-full px-4 py-1 hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out"
              onClick={handleLoginClick}
            >
              <FaUser />
              <span>Login</span>
            </button>
          </li> */}
          
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
