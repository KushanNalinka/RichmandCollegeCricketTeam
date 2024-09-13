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


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Logo from '../assets/images/rcclogo.png'; 

const HomeNavbar = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [lastScrollTop, setLastScrollTop] = useState(0); // Last scroll position
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // Function to handle login navigation
  const handleLoginClick = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav
      className={`bg-transparent p-3 w-full z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-16" />
          {/* Vertical Divider Line */}
          <div className="border-l-2 border-transparent h-6 mx-5"></div>
        </div>

        {/* Centered Navbar Items */}
        <ul className="flex space-x-8 text-white font-semibold text-xs justify-center flex-grow">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
              Home
            </Link>
          </li>
          <li>
            <Link to="/matches" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
              Matches
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
              News
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/teams" className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105">
              Teams
            </Link>
          </li>
        </ul>

        {/* Right section with Login Button */}
        <div className="flex items-center">
          <button
            className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
