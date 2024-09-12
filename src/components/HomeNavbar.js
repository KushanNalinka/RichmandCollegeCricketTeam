// import React, { useState } from 'react';
// import Logo from '../assets/images/rcclogo.png'; // import your logo image
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState({
//     home: false,
//     matches: false,
//     news: false,
//     aboutUs: false,
//     teams: false,
//   });

//   const toggleDropdown = (menu) => {
//     setIsDropdownOpen((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }));
//   };

//   return (
//     <nav className="bg-[#802F3B] bg-opacity-90 p-1 fixed w-full z-30 top-0">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo on the left */}
//         <div>
//           <img src={Logo} alt="School Logo" className="h-14 ml-28" />
//         </div>

//         {/* Centered Navbar Items */}
//         <ul className="flex space-x-8 text-white font-semibold text-lg relative">
//           <li className="relative group">
//             <button
//               className="hover:text-yellow-300"
//               onClick={() => toggleDropdown('home')}
//             >
//               Home
//             </button>
//             {isDropdownOpen.home && (
//               <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 z-40">
//                 <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
//                   <Link to="/sub-item1">Sub Item 1</Link>
//                 </li>
//                 <li className="p-2 hover:bg-gray-800">
//                   <Link to="/sub-item2">Sub Item 2</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="relative group">
//             <button
//               className="hover:text-yellow-300"
//               onClick={() => toggleDropdown('matches')}
//             >
//               Matches
//             </button>
//             {isDropdownOpen.matches && (
//               <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 z-40">
//                 <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
//                   <Link to="/under-11">Under 11</Link>
//                 </li>
//                 <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
//                   <Link to="/under-13">Under 13</Link>
//                 </li>
//                 <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
//                   <Link to="/under-15">Under 15</Link>
//                 </li>
//                 <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
//                   <Link to="/under-17">Under 17</Link>
//                 </li>
//                 <li className="p-2 hover:bg-gray-800">
//                   <Link to="/under-19">Under 19</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="relative group">
//             <button
//               className="hover:text-yellow-300"
//               onClick={() => toggleDropdown('news')}
//             >
//               News
//             </button>
//             {isDropdownOpen.news && (
//               <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 z-40">
//                 <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
//                   <Link to="/news-1">News Item 1</Link>
//                 </li>
//                 <li className="p-2 hover:bg-gray-800">
//                   <Link to="/news-2">News Item 2</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="relative group">
//             <button
//               className="hover:text-yellow-300"
//               onClick={() => toggleDropdown('aboutUs')}
//             >
//               About Us
//             </button>
//             {isDropdownOpen.aboutUs && (
//               <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 z-40">
//                 <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
//                   <Link to="/history">History</Link>
//                 </li>
//                 <li className="p-2 hover:bg-gray-800">
//                   <Link to="/mission">Mission</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="relative group">
//             <button
//               className="hover:text-yellow-300"
//               onClick={() => toggleDropdown('teams')}
//             >
//               Teams
//             </button>
//             {isDropdownOpen.teams && (
//               <ul className="absolute left-0 mt-2 w-40 bg-black text-white border border-gray-700 z-40">
//                 <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
//                   <Link to="/team-a">Team A</Link>
//                 </li>
//                 <li className="p-2 border-b border-gray-700 hover:bg-gray-800">
//                   <Link to="/team-b">Team B</Link>
//                 </li>
//                 <li className="p-2 hover:bg-gray-800">
//                   <Link to="/team-c">Team C</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>

//         {/* Right section (optional), you can add a search bar or profile menu here */}
//         <div className="hidden md:block">
//           {/* Additional items can be added here */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUserCircle, FaChevronDown } from 'react-icons/fa'; // Import icons for profile, notifications, and dropdown arrow
import Logo from '../assets/images/rcclogo.png'; // Import the logo
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    home: false,
    matches: false,
    news: false,
    aboutUs: false,
    teams: false,
  });
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  return (
    <nav className="bg-transparent p-3  w-full z-30 top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="ml-10 flex items-center">
          <img src={Logo} alt="Logo" className="h-16" />
          {/* Vertical Divider Line */}
          <div className="border-l-2 border-transparent h-6 mx-5"></div>
        </div>
        {/* Centered Navbar Items */}
        <ul className="flex space-x-8 text-white font-semibold text-xs -ml-5 -mt-5 justify-center">
          {['home', 'matches', 'news', 'aboutUs', 'teams'].map((menu) => (
            <li key={menu} className="relative group">
              <button
                className="hover:text-yellow-300 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => toggleDropdown(menu)}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </button>
              {isDropdownOpen[menu] && (
                <ul className="absolute left-0 mt-2 w-40 bg-opacity-80 backdrop-blur-md bg-black/40 text-white z-40 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
                  <li className="p-2 border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition-colors duration-300">
                    <Link to={`/${menu}-item1`}>Item 1</Link>
                  </li>
                  <li className="p-2 hover:bg-yellow-500 hover:text-black transition-colors duration-300">
                    <Link to={`/${menu}-item2`}>Item 2</Link>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* Right section with user profile and notification */}
        <div className="flex items-center mr-10 relative">
          <FaBell className="text-m text-white hover:text-yellow-300 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 -mt-6" />
          <div className="flex items-center ml-6 relative">
            <FaUserCircle
              className="text-2xl text-white hover:text-yellow-300 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 -mt-6"
              onClick={toggleProfileDropdown}
            />
            <FaChevronDown
              className={`text-xs text-white cursor-pointer transition-transform duration-300 ease-in-out transform ${isProfileDropdownOpen ? 'rotate-180' : ''} ml-2 -mt-6`}
            />
            {isProfileDropdownOpen && (
              <ul className="absolute right-0 top-12 bg-opacity-80 backdrop-blur-lg bg-black/40 text-blue z-40 w-48 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                <li className="p-2 border-b border-gray-700 hover:bg-yellow-500 hover:text-black transition-colors duration-300 rounded-t-lg">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="p-2 hover:bg-yellow-500 hover:text-black transition-colors duration-300 rounded-b-lg">
                  <button>Logout</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;