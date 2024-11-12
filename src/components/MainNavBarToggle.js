
import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { TbScoreboard } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate and Link for navigation
import { FaUserCircle } from "react-icons/fa";

const MainNavbarToggle = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleButton = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      const handleLoginClick = () => {
        navigate('/'); // Redirect to home page after logout
      };
    
      const handleDropdownClick = (path) => {
        navigate(path); // Navigate to the selected page
      };
      return (
        <>
          <div className="flex items-start justify-start ">
            <button
              className="text-[#00175F] lg:flex hidden focus:outline-none m-4 focus:test-gray-500  "
              onClick={toggleButton}
            >
              {isMenuOpen
                ? <FaXmark className="text-2xl text-[#00175F] " />
                :  <FaUserCircle className="text-2xl text-[#00175F]" />}
            </button>
            <button
              className="text-[#00175F] lg:hidden flex focus:outline-none m-4 focus:test-gray-500  "
              onClick={toggleButton}
            >
              <FaUserCircle className="text-2xl text-[#00175F]" />
            </button>
          </div>
          <div
            className={`absolute space-y-2 z-30 right-10 mt-10 w-[200px] mb-2 rounded-md justify-end items-center py-3 transition-all duration-500000 ease-in-out  shadow-lg border-[3px] ${isMenuOpen
              ? " h-auto w-48 block justify-center items-center transition-transform text-opacity-100 duration-50000 ease-in-out bg-white mb-10"
              : "hidden"}`}
          >
            <div className="relative group w-full">
                <ul className=" flex flex-col gap-1 relative w-full !text-[12px] cursor-pointer px-1 ![font-family:'Inter',Helvetica]  items-start">
                    {/* <Link to={"/playerProfile"} className=" flex gap-3 items-center p-2 pl-5 cursor-pointer text-black w-full hover:bg-gray-300 hover:bg-opacity-20">
                        {" "}<CgProfile className="text-[#00175F] text-xl" />Profile
                    </Link> */}
                    <Link to={"/login"} className=" flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20 ">
                        {" "}<RiLogoutCircleRLine className="text-[#00175F] text-xl"/> Logout
                    </Link>
                </ul>
            </div>
          </div> 
        </>       
    );
};
export default MainNavbarToggle;