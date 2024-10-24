import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/HomeNavbar";
import backgroundImage from "../assets/images/Score_table_back_Image.png";
import playersData from "./PlayersData";
import back from "../assets/images/flag.png";
import flag from "../assets/images/backDrop.png";
import image from "../assets/images/coach.jpg";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../hooks/UseAuth";

const OfficialProfile = () => {
  const { user } = useAuth();
  const [officialProfile, setOfficialProfile] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    console.log("userId O:", user.userId);
    const fetchData = async () => {
    const officialData = await axios.get( `${API_URL}officials/${user.userId}`);
    setOfficialProfile(officialData.data);
    console.log("Official Data:", officialData.data);
  };

  fetchData();

  }, []);

  return (
    <div
      className={`flex relative justify-center lg:p-10 p-5 lg:pt-28 pt-28 h-auto items-stretch min-h-screen text-white w-full`}
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Navbar />
      {/* Player Details */}
      <div
        className="h-full w-full p-5 rounded-lg lg:px-20 bg-white shadow-md"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
      >
        <h1 className="text-2xl self-start p-2 pt-0 text-[#480D35] font-bold">
          Official Profile
        </h1>
        <div
          className="flex justify-center items-center w-full rounded-xl h-36 px-10 mb-6"
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="relative  top-10 rounded-full w-full h-full flex items-center justify-center">
            <div className="-top-5 -left-5 absolute flex flex-col ">
              <h1 className="lg:text-4xl font-bold">
                {officialProfile?.name}
              </h1>
            </div>
            <FaUserCircle className=" w-32 h-32 rounded-full object-cover border border-gray-300" />
           
          </div>
        </div>
        <div className="flex items-center pt-5 justify-center">
          <div className="bg-gray-100 py-8 px-2 w-full lg:p-6 lg:w-2/3 self-center rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-black text-center">
              Personal Information
            </h2>
            {/* Personal Info Table */}
            <div className="flex hover:overflow-x-auto overflow-x-hidden">
              <table className="min-w-full bg-gray-100 text-gray-950 rounded-lg">
                <tbody>
                  <tr className="bg-white rounded-lg border-2">
                    <td className="py-2 md:px-5 px-3 font-semibold">Name:</td>
                    <td className="py-2 md:px-5 px-3">
                      {officialProfile?.name}
                    </td>
                  </tr>
                  <tr className="bg-white  rounded-lg border-2">
                    <td className="py-2 md:px-5 px-3 font-semibold ">Email:</td>
                    <td className="py-2 md:px-5 px-3">
                      {officialProfile?.email}
                    </td>
                  </tr>
                  <tr className="bg-white  rounded-lg border-2">
                    <td className="py-2 md:px-5 px-3 font-semibold ">
                      Contact No:
                    </td>
                    <td className="py-2 md:px-5 px-3">
                      {officialProfile?.contactNo}
                    </td>
                  </tr>
                  <tr className="bg-white  rounded-lg border-2">
                    <td className="py-2 md:px-5 px-3 font-semibold ">
                      Position:
                    </td>
                    <td className="py-2 md:px-5 px-3">
                      {officialProfile?.position}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialProfile;
