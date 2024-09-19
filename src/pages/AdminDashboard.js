import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import flag from "../assets/images/backDrop.png"
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div
    className="h-screen w-full"
    style={{
      backgroundImage: `url(${flag})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    <HomeNavbar />
    <div className=" flex relative items-center justify-center top-32 p-2 w-full">
      <div
        className=" h-full relative bg-gray-100 lg:w-[95%] w-[100%] lg:mx-3 lg:px-10 lg:py-5 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-lg"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
      >
        <div className="flex m-2 p-5 gap-3">
          <a href="/player" className="flex items-center justify-center  w-full h-20 px-20 py-2 bg-gray-200">
            Players
          </a>
          <a href="/addPlayer" className="flex items-center justify-center  w-full h-20 px-20 py-2 bg-gray-200">
            Add Player
          </a>
          <a href="/addCoach" className="flex items-center justify-center  w-full h-20 px-20 py-2 bg-gray-200">
            Add Coach
          </a>
        </div>
        <div className=" flex p-5 gap-3">
          <a href="/match" className="flex items-center justify-center  w-full h-20 px-20 py-2 bg-gray-200">
           Matches
          </a>
          <a href="/admin-scoreCard" className="flex items-center justify-center  w-full h-20 px-20 py-2 bg-gray-200">
            Scores
          </a>
          <a href="/team" className="flex items-center justify-center w-full h-20 px-20 py-2 bg-gray-200">
            Teams
          </a>
        </div>
        
        </div>
      </div>
     </div> 
  );
}

export default AdminDashboard;
