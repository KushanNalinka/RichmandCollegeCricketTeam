import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import flag from "../assets/images/backDrop3.png";
import { Link } from "react-router-dom";
import { TbScoreboard } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPersonWalkingWithCane } from "react-icons/fa6";

function AdminDashboard() {
  return (
    <div
      className="md:h-screen h-full w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HomeNavbar />

      <div className="flex relative items-center justify-center pt-24 lg:pt-20 p-5 w-full">
        <div
          className=" relative bg-white lg:w-[90%] w-[100%] lg:mx-3 lg:px-10 lg:py-10 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-xl"
          style={{
            backdropFilter: "blur(15px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <h1 className="text-3xl font-bold text-left text-[#480D35] mb-8">
            Admin Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-[#00175F]">
            <Link
              to="/player"
              className="flex flex-col items-center justify-center w-full h-40 bg-gray-50 border border-[#480D35] hover:bg-gray-200 transition duration-200 rounded-lg shadow-sm shadow-[#480D35]"
            >
              <span className="text-2xl text-[white] bg-[#00175F] rounded-full p-2 ">
              <FaPersonWalkingWithCane />
              </span>
              <span className="text-xl font-bold">Players</span>
            </Link>
            <Link
              to="/coachInfo"
              className="flex flex-col items-center justify-center w-full h-40 bg-gray-50 border border-[#480D35] hover:bg-gray-200 transition duration-200 rounded-lg shadow-sm shadow-[#480D35]"
            >
              <span className="text-2xl text-[white] bg-[#00175F] rounded-full p-2 ">
              <BsPersonFill /> 
              </span>
              <span className="text-xl font-bold">Coaches</span>
            </Link>
            
            <Link
              to="/match"
              className="flex flex-col items-center justify-center w-full h-40 bg-gray-50 border border-[#480D35] hover:bg-gray-200 transition duration-200 rounded-lg shadow-sm shadow-[#480D35]"
            >
              <span className="text-2xl text-[white] bg-[#00175F] rounded-full p-2 ">
              <BiSolidCricketBall />
              </span>
              <span className="text-xl font-bold">Matches</span>
            </Link>
            <Link
              to="/admin-scoreCard"
              className="flex flex-col items-center justify-center w-full h-40 border border-[#480D35] bg-gray-50 hover:bg-gray-200 transition duration-200 rounded-lg shadow-sm shadow-[#480D35] "
            >
              <span className="text-2xl text-[white] bg-[#00175F] rounded-full p-2 ">
              <TbScoreboard />
              </span>
              <span className="text-xl font-bold">Scores</span>
            </Link>
            <Link
              to="/team"
              className="flex flex-col items-center justify-center w-full h-40 bg-gray-50 border border-[#480D35] hover:bg-gray-200 transition duration-200 rounded-lg shadow-sm shadow-[#480D35]"
            >
              <span className="text-2xl text-[white] bg-[#00175F] rounded-full p-2 ">
              <RiTeamFill />
              </span>
              <span className="text-xl font-bold">Teams</span>
            </Link>
            <Link
              to="/addOfficial"
              className="flex flex-col items-center justify-center w-full h-40 bg-gray-50 border border-[#480D35] hover:bg-gray-200 transition duration-200 rounded-lg shadow-sm shadow-[#480D35]"
            >
              <span className="text-2xl text-[white] bg-[#00175F] rounded-full p-2 ">
                <FaPeopleGroup />
              </span>
              <span className="text-xl font-bold">Officials</span>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;