
import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { TbScoreboard } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";

const NavbarToggleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleButton = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      return (
        <>
          <div className="flex md:hidden items-start justify-start ">
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
            className={`absolute space-y-2 z-30 mt-64 left-5 w-[200px] mb-2 rounded-l-lg justify-end items-center py-3 transition-all duration-500000 ease-in-out  bg-primary bg-opacity-10  shadow-lg border-[3px] border-opacity-50 ${isMenuOpen
              ? " h-auto w-48 block justify-center items-center hover:transition-transform hovet:text-opacity-100  hover:duration-50000 hover:ease-in-out text-subText hover:text-opacity-100 hover:bg-white hover:border-opacity-100 mb-10"
              : "hidden"}`}
          >
            <ul className=" flex flex-col gap-1 relative w-full !mt-[8.00px] !text-[12px] cursor-pointer px-1 ![font-family:'Inter',Helvetica]  items-start">
              <Link to={"/"} className=" flex gap-3 items-center p-2 pl-5 cursor-pointer text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<IoHomeSharp /> Home
              </Link>
              <Link to={"/player"} className=" flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<BsPersonFill /> Player
              </Link>
              <Link to={"/match"} className=" flex gap-3 items-center cursor-pointer  p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<BiSolidCricketBall /> Match
              </Link>
              <Link to={"/scorecard/:matchId"} className=" flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<TbScoreboard /> Score
              </Link>
              <Link to={"/team"} className=" flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-10">
                {" "}<RiTeamFill /> Team
              </Link>
            </ul>
          </div> 
        </>
       
    );

};
export default NavbarToggleMenu;