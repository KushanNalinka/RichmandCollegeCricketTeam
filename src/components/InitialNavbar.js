// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import Logo from '../assets/images/rcclogo.png'; 

// const HomeNavbar = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const [isDropdownOpen, setIsDropdownOpen] = useState({
//     home: false,
//     matches: false,
//     news: false,
//     aboutUs: false,
//     teams: false,
//   });

//   const [lastScrollTop, setLastScrollTop] = useState(0); // Last scroll position
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset;

//       if (currentScrollTop > lastScrollTop) {
//         // Scrolling down
//         setIsNavbarVisible(false);
//       } else {
//         // Scrolling up
//         setIsNavbarVisible(true);
//       }

//       setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollTop]);

//   const toggleDropdown = (menu) => {
//     setIsDropdownOpen((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }));
//   };

//   // Function to handle login navigation
//   const handleLoginClick = () => {
//     navigate('/login'); // Redirect to login page
//   };

//   return (
//     <nav
//       className={`bg-transparent p-3 w-full z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo on the left */}
//         <div className="flex items-center">
//           <img src={Logo} alt="Logo" className="h-16" />
//           {/* Vertical Divider Line */}
//           <div className="border-l-2 border-transparent h-6 mx-5"></div>
//         </div>

//         {/* Centered Navbar Items */}
//         <ul className="flex space-x-8 text-white font-semibold text-xs justify-center flex-grow">
//           {['home', 'matches', 'news', 'aboutUs', 'teams'].map((menu) => (
//             <li key={menu} className="relative group">
//               <button
//                 className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
//                 onClick={() => toggleDropdown(menu)}
//               >
//                 {menu.charAt(0).toUpperCase() + menu.slice(1)}
//               </button>
//               {isDropdownOpen[menu] && (
//                 <ul className="absolute left-0 mt-2 w-40 bg-black/60 text-white z-40 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
//                   <li className="p-2 border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition-colors duration-300">
//                     <Link to={`/${menu}-item1`}>Item 1</Link>
//                   </li>
//                   <li className="p-2 hover:bg-yellow-500 hover:text-black transition-colors duration-300">
//                     <Link to={`/${menu}-item2`}>Item 2</Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Right section with Login Button */}
//         <div className="flex items-center">
//           <button
//             className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out"
//             onClick={handleLoginClick}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default HomeNavbar;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import Logo from '../assets/images/rcclogo.png'; 

// const HomeNavbar = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const [lastScrollTop, setLastScrollTop] = useState(0); // Last scroll position
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset;

//       if (currentScrollTop > lastScrollTop) {
//         // Scrolling down
//         setIsNavbarVisible(false);
//       } else {
//         // Scrolling up
//         setIsNavbarVisible(true);
//       }

//       setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollTop]);

//   // Function to handle login navigation
//   const handleLoginClick = () => {
//     navigate('/login'); // Redirect to login page
//   };

//   return (
//     <nav
//       className={`bg-transparent p-3 w-full z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo on the left */}
//         <div className="flex items-center">
//           <img src={Logo} alt="Logo" className="h-16" />
//           {/* Vertical Divider Line */}
//           <div className="border-l-2 border-transparent h-6 mx-5"></div>
//         </div>

//         {/* Centered Navbar Items */}
//         <ul className="flex space-x-8 text-white font-semibold text-xs justify-center flex-grow">
//           <li>
//             <Link to="/" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/match-info" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               Matches
//             </Link>
//           </li>
//           <li>
//             <Link to="/news" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               News
//             </Link>
//           </li>
//           <li>
//             <Link to="/about-us" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/teams" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               Teams
//             </Link>
//           </li>
//         </ul>

//         {/* Right section with Login Button */}
//         <div className="flex items-center">
//           <button
//             className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out"
//             onClick={handleLoginClick}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default HomeNavbar;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import Logo from '../assets/images/rcclogo.png';

// const HomeNavbar = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const [lastScrollTop, setLastScrollTop] = useState(0); // Last scroll position
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state
//   const [isTeamsDropdownOpen, setIsTeamsDropdownOpen] = useState(false); // Dropdown state for Teams
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // Dropdown state for About Us

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop = window.pageYOffset;

//       if (currentScrollTop > lastScrollTop) {
//         // Scrolling down
//         setIsNavbarVisible(false);
//       } else {
//         // Scrolling up
//         setIsNavbarVisible(true);
//       }

//       setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollTop]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.dropdown')) {
//         setIsTeamsDropdownOpen(false);
//         setIsAboutDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Function to handle login navigation
//   const handleLoginClick = () => {
//     navigate('/login'); // Redirect to login page
//   };

//   // Function to handle dropdown navigation
//   const handleDropdownClick = (path) => {
//     navigate(path); // Navigate to the selected page
//     setIsTeamsDropdownOpen(false); // Close teams dropdown after selecting
//     setIsAboutDropdownOpen(false); // Close about us dropdown after selecting
//   };

//   return (
//     <nav
//       className={`bg-transparent p-3 w-full z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo on the left */}
//         <div className="flex items-center">
//           <img src={Logo} alt="Logo" className="h-16" />
//           {/* Vertical Divider Line */}
//           <div className="border-l-2 border-transparent h-6 mx-5"></div>
//         </div>

//         {/* Centered Navbar Items */}
//         <ul className="flex space-x-8 text-white font-semibold text-xs justify-center flex-grow">
//           <li>
//             <Link to="/" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/match-info" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               Matches
//             </Link>
//           </li>
//           <li>
//             <Link to="/news" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               News
//             </Link>
//           </li>
//           {/* Dropdown for Teams */}
//           <li className="relative dropdown">
//             <div
//               className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
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
//                     onClick={() => handleDropdownClick('/profile')}
//                   >
//                     Under 15
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/profile')}
//                   >
//                     Big Match
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </li>
//           {/* Dropdown for About Us */}
//           <li className="relative dropdown">
//             <div
//               className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
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
//                     Our Team
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/about-us/contact')}
//                   >
//                     Contact Us
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>

//         {/* Right section with Login Button */}
//         <div className="flex items-center">
//           <button
//             className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out"
//             onClick={handleLoginClick}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default HomeNavbar;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import Logo from '../assets/images/rcclogo.png';
// import { FaUser } from 'react-icons/fa'; // Import user icon from react-icons


// const HomeNavbar = () => {
//   const navigate = useNavigate(); // Hook for navigation
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state

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
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const [isTeamsDropdownOpen, setIsTeamsDropdownOpen] = useState(false); // Dropdown state for Teams
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // Dropdown state for About Us

//   // Function to handle login navigation
//   const handleLoginClick = () => {
//     navigate('/login'); // Redirect to login page
//   };

//   // Function to handle dropdown navigation
//   const handleDropdownClick = (path) => {
//     navigate(path); // Navigate to the selected page
//     setIsTeamsDropdownOpen(false); // Close teams dropdown after selecting
//     setIsAboutDropdownOpen(false); // Close about us dropdown after selecting
//   };

//   return (
//     <nav
//       className={`bg-transparent p-3 w-full z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${
//         isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo on the left */}
//         <div className="flex items-center">
//           <img src={Logo} alt="Logo" className="h-16" />
//           {/* Vertical Divider Line */}
//           <div className="border-l-2 border-transparent h-6 mx-5"></div>
//         </div>

//         {/* Centered Navbar Items */}
//         <ul className="flex space-x-8 text-white font-semibold text-lg justify-center flex-grow">
//           <li>
//             <Link to="/" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/match-info" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               Matches
//             </Link>
//           </li>
//           <li>
//             <Link to="/news" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               News
//             </Link>
//           </li>
//           {/* Dropdown for Teams */}
//           <li className="relative dropdown">
//             <div
//               className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
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
//                     onClick={() => handleDropdownClick('/profile')}
//                   >
//                     Under 15
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/profile')}
//                   >
//                     Big Match
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </li>
//           {/* Dropdown for About Us */}
//           <li className="relative dropdown">
//             <div
//               className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
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
//                     Our Team
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/about-us/contact')}
//                   >
//                     Contact Us
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>

//         {/* Right section with Sign In Text and User Icon */}
//         <div className="flex items-center">
//           <div
//             className="flex items-center cursor-pointer text-white font-semibold hover:text-yellow-300 transition-all duration-300 ease-in-out"
//             onClick={handleLoginClick} // Redirect to login page
//           >
//             <FaUser className="mr-2" /> {/* User icon */}
//             <span>Sign In</span> {/* Sign In text */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default HomeNavbar;
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import Logo from '../assets/images/rcclogo.png';
// import { FaUser } from 'react-icons/fa'; // Import user icon from react-icons

// const HomeNavbar = () => {
//   const navigate = useNavigate(); // Hook for navigation
//   const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state

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
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const [isTeamsDropdownOpen, setIsTeamsDropdownOpen] = useState(false); // Dropdown state for Teams
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // Dropdown state for About Us

//   // Function to handle login navigation
//   const handleLoginClick = () => {
//     navigate('/login'); // Redirect to login page
//   };

//   // Function to handle dropdown navigation
//   const handleDropdownClick = (path) => {
//     navigate(path); // Navigate to the selected page
//     setIsTeamsDropdownOpen(false); // Close teams dropdown after selecting
//     setIsAboutDropdownOpen(false); // Close about us dropdown after selecting
//   };

//   return (
//     <nav
//       className={` bg-transparent p-3 w-fit z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${
//         isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between max-w-screen-xl">
//         {/* Logo on the left */}
//         <div className="flex items-center">
//           <img src={Logo} alt="Logo" className="h-16" />
//           {/* Vertical Divider Line */}
//           <div className="border-l-2 border-transparent h-6 mx-5"></div>
//         </div>

//         {/* Centered Navbar Items */}
//         <ul className="flex space-x-8 text-white font-semibold text-lg justify-center flex-grow">
//           <li>
//             <Link to="/" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/match-info" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               Matches
//             </Link>
//           </li>
//           <li>
//             <Link to="/news" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
//               News
//             </Link>
//           </li>
//           {/* Dropdown for Teams */}
//           <li className="relative dropdown">
//             <div
//               className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
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
//                     onClick={() => handleDropdownClick('/profile')}
//                   >
//                     Under 15
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/profile')}
//                   >
//                     Big Match
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </li>
//           {/* Dropdown for About Us */}
//           <li className="relative dropdown">
//             <div
//               className="cursor-pointer hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
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
//                     Our Team
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="block w-full text-left px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out"
//                     onClick={() => handleDropdownClick('/about-us/contact')}
//                   >
//                     Contact Us
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>

//         {/* Right section with Sign In Text and User Icon */}
//         <div className="flex items-center">
//           <div
//             className="flex items-center cursor-pointer text-white font-semibold hover:text-yellow-300 transition-all duration-300 ease-in-out"
//             onClick={handleLoginClick} // Redirect to login page
//           >
//             <FaUser className="mr-2" /> {/* User icon */}
//             <span>Sign In</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default HomeNavbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Logo from '../assets/images/rcclogo.png'; // Add your logo image import
import { FaUser } from 'react-icons/fa'; // Import user icon from react-icons

const HomeNavbar = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state

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
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-3 transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between w-fit bg-transparent backdrop-blur-md rounded-full shadow-lg px-6 py-2">
        {/* Logo on the left */}
        <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-10 mr-4" /> {/* Add logo with appropriate height/width */}
          </Link >
        </div>

        {/* Centered Navbar Items */}
        <ul className="flex space-x-8 text-white font-semibold text-14px">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li>
            <Link to="/initial-about-us" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/initial-news" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              News
            </Link>
          </li>
          <li>
           {/* Anchor link that scrolls to the Footer */}
           <a href="#contact-us" className="hover:text-yellow-300 transition-all duration-300 ease-in-out">
              Contact Us
            </a>
          </li>
          
        </ul>

        {/* Right section with Sign In Button */}
        <div className="ml-8">
          <button
            className="flex items-center space-x-2 text-white font-semibold bg-transparent border-2 border-white rounded-full px-4 py-1 hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out"
            onClick={handleLoginClick}
          >
            <FaUser />
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;


