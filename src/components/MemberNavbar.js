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

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate and Link for navigation
import Logo from '../assets/images/rcclogo.png'; // Add your logo image import
import { FaUser } from 'react-icons/fa'; // Import user icon from react-icons

const HomeNavbar = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state

  // Handle navbar visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      // Navbar is visible only when the user is at the top of the page (scrollTop = 0)
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-3 transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between w-fit bg-transparent backdrop-blur-md shadow-lg px-6 py-2">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link to="/member">
            <img src={Logo} alt="Logo" className="h-10 w-10 mr-4" /> {/* Add logo with appropriate height/width */}
          </Link>
        </div>

        {/* Centered Navbar Items */}
        <ul className="flex space-x-8 text-white font-semibold text-14px">
          <li className="relative group">
            <Link to="/member" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Home
            </Link>
          </li>

          {/* Dropdown for About Us */}
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
                  onClick={() => handleDropdownClick('/about-us')}
                >
                  About Us
                </button>
              </li>
            </ul>
          </li>

          {/* Dropdown for Teams */}
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
        <div className="relative group ml-8">
          <div className="flex items-center space-x-2 text-white cursor-pointer">
            <FaUser className="text-2xl" /> {/* User Icon */}
          </div>

          {/* Dropdown for User */}
          <ul className="absolute left-0 top-full mt-2 bg-gray-800 text-white shadow-lg w-40 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <li>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                onClick={() => handleDropdownClick('/member')}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                onClick={handleLoginClick}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;

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
