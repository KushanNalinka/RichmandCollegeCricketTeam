import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUserCircle, FaChevronDown } from 'react-icons/fa'; // Import icons for profile, notifications, and dropdown arrow
import Logo from '../assets/images/rcclogo.png'; 
const HomeNavbar = () => {
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
    <nav className="bg-transparent p-3 fixed w-full z-30 top-0"
   >
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
                  <Link to="/userProfile">Profile</Link>
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
export default HomeNavbar;
