import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import flag from "../assets/images/backDrop.png";
import { Link } from "react-router-dom";

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
          <h1 className="text-3xl font-bold text-left text-[#480D35] mb-8">Admin Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#08165A]">
            <Link to="/player" className="flex items-center justify-center w-full h-40 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-lg shadow-md">
              <span className="text-xl font-semibold">Players</span>
            </Link>
            <Link to="/addPlayer" className="flex items-center justify-center w-full h-40 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-lg shadow-md">
              <span className="text-xl font-semibold">Add Player</span>
            </Link>
            <Link to="/addCoach" className="flex items-center justify-center w-full h-40 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-lg shadow-md">
              <span className="text-xl font-semibold">Add Coach</span>
            </Link>
            <Link to="/addProfile" className="flex items-center justify-center w-full h-40 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-lg shadow-md">
              <span className="text-xl font-semibold">Add Profile</span>
            </Link>
            <Link to="/match" className="flex items-center justify-center w-full h-40 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-lg shadow-md">
              <span className="text-xl font-semibold">Matches</span>
            </Link>
            <Link to="/admin-scoreCard" className="flex items-center justify-center w-full h-40 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-lg shadow-md">
              <span className="text-xl font-semibold">Scores</span>
            </Link>
            <Link to="/team" className="flex items-center justify-center w-full h-40 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-lg shadow-md">
              <span className="text-xl font-semibold">Teams</span>
            </Link>
            <Link to="/coaches" className="flex items-center justify-center w-full h-40 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-lg shadow-md">
              <span className="text-xl font-semibold">Coaches</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;