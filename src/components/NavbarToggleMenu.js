import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { MdPeople, MdOutlineNewspaper } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbScoreboard } from "react-icons/tb";
import { FaHome } from "react-icons/fa";

const NavbarToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userString = localStorage.getItem("user"); 
  const user = userString ? JSON.parse(userString) : null; 
  const username = user?.username || "";

  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex lg:hidden items-start justify-start">
        <button
          className="text-black focus:outline-none m-4 focus:test-gray-500"
          onClick={toggleButton}
        >
          {isMenuOpen ? (
            <FaXmark className="text-lg" />
          ) : (
            <FaBars className="text-lg" />
          )}
        </button>
      </div>
      <div
        className={`absolute space-y-2 z-50 top-14 left-5 w-[200px] bg-white rounded-l-lg justify-end items-center py-3 shadow-lg border-[3px] ${
          isMenuOpen
            ? " h-auto w-48 block justify-center items-center mb-10"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-1 relative w-full cursor-pointer px-1 items-start">
          <Link
            to={"/member"}
            className="flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20"
          >
            {" "}
            <FaHome className="text-[#00175F]" /> Home
          </Link>
          <Link
            to={"/admin-player"}
            className="flex gap-3 items-center p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20"
          >
            {" "}
            <FaPeopleGroup className="text-[#00175F]" /> Players
          </Link>
          <Link
            to={"/admin-team"}
            className="flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20"
          >
            {" "}
            <RiTeamFill className="text-[#00175F]" /> Teams
          </Link>
          <Link
            to={"/admin-match"}
            className="flex gap-3 items-center cursor-pointer  p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20"
          >
            {" "}
            <BiSolidCricketBall className="text-[#00175F]" /> Matches
          </Link>
          <Link
            to={"/admin-scorecard"}
            className="flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20"
          >
            {" "}
            <TbScoreboard className="text-[#00175F]" /> Scores
          </Link>
          <Link
            to={"/admin-coach"}
            className="flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20"
          >
            {" "}
            <MdPeople className="text-[#00175F]" /> Coaches
          </Link>
          <Link
            to={"/admin-official"}
            className="flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20"
          >
            {" "}
            <MdPeople className="text-[#00175F]" /> Officials
          </Link>
          <Link
            to={"/admin-news"}
            className="flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20"
          >
            {" "}
            <MdOutlineNewspaper className="text-[#00175F]" /> News
          </Link>
          {username === "admin01" && (
            <Link
              to={"/admin-admin-control"}
              className="flex gap-3 items-center cursor-pointer p-2 pl-5 text-black w-full hover:bg-gray-300 hover:bg-opacity-20"
            >
              {" "}
              <MdPeople className="text-[#00175F]" /> Admins
            </Link>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavbarToggleMenu;
