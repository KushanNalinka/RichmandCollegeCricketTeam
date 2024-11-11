
import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { TbScoreboard } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
import { MdOutlineNewspaper } from "react-icons/md";

const NavbarToggleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleButton = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      return (
        <>
          <div className="flex lg:hidden items-start justify-start ">
            <button
              className="text-black focus:outline-none m-4 focus:test-gray-500  "
              onClick={toggleButton}
            >
              {isMenuOpen
                ? <FaXmark className="text-lg " />
                : <FaBars className="text-lg " />}
            </button>
          </div>
          <div
            className={`absolute space-y-2 z-30 mt-80 left-5 w-[200px] mb-2 bg-white rounded-l-lg justify-end items-center py-3 shadow-lg border-[3px] ${isMenuOpen
              ? " h-auto w-48 block justify-center items-center mb-10"
              : "hidden"}`}
          >
            <ul className=" flex flex-col gap-1 relative w-full !mt-[8.00px] !text-[12px] cursor-pointer px-1 ![font-family:'Inter',Helvetica]  items-start">
              <Link to={"/player"} className=" flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20">
                {" "}<FaPeopleGroup className="text-[#00175F]"/> Players
              </Link>
              <Link to={"/team"} className=" flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20">
                {" "}<RiTeamFill className="text-[#00175F]"/> Teams
              </Link>
              <Link to={"/match"} className=" flex gap-3 items-center cursor-pointer  p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20">
                {" "}<BiSolidCricketBall className="text-[#00175F]"/> Match
              </Link>
              <Link to={"/admin-scorecard"} className=" flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20">
                {" "}<TbScoreboard className="text-[#00175F]"/> Score
              </Link>
              <Link to={"/coachInfo"} className=" flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20">
                {" "}<MdPeople className="text-[#00175F]"/> Coaches
              </Link>
              <Link to={"/official"} className=" flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20">
                {" "}<MdPeople className="text-[#00175F]"/> Official
              </Link>
              <Link to={"/admin-news"} className=" flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20">
                {" "}<MdOutlineNewspaper className="text-[#00175F]"/> News
              </Link>
            </ul>
          </div> 
        </>
       
    );

};
export default NavbarToggleMenu;