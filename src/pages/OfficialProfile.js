import React, { useState } from "react";
import Navbar from "../components/HomeNavbar";
import backgroundImage from "../assets/images/Score_table_back_Image.png";
import playersData from "./PlayersData";
import back from "../assets/images/flag.png";
import flag from "../assets/images/backDrop.png";
import image from "../assets/images/coach.jpg";

const OfficialProfile = () => {
  // Sort players alphabetically by fullName
  const sortedPlayers = [...playersData].sort((a, b) =>
    a.fullName.localeCompare(b.fullName)
  );
  
  const [officialProfile, setOfficialProfile] = useState({
    officialId: 1,
    image: `${image}`,
    name: "Nimal Perera",
    contactNo: "0777056789",
    dateOfBirth: "1986-07-23",
    email: "nimal.perera@gmail.com",
    address: "235,2nd Lane, Colombo 04.",
    description: "no"
  });

  const handleSaveCoachProfile = e => {
    console.log("get Profile:", e);
    setOfficialProfile([
      ...officialProfile,
      {
        ...e,
        id: officialProfile.id + 1
      }
    ]);
  };

  return (
    <div
      className={` text-white`}
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw", // Full viewport width
        height: "full", // Full viewport height
        minHeight: "100vh", // Minimum height to cover full screen
      }}
    >
      {/* Navbar */}
      <Navbar />

      <div className=" pt-32  p-10">
        <div>
          <div className="flex gap-6 items-center lg:px-5 justify-center">
            {/* Player Details */}

            <div
              className="flex-grow flex-col flex bg p-8 pb-20 items-center justify-center rounded-lg lg:px-20 bg-white shadow-md ml-18"
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
                  <img
                    src={officialProfile.image}
                    alt={officialProfile.name}
                    className=" w-32 h-32 rounded-full object-cover border bg-white border-gray-300"
                  />
                </div>
                <div className="top-24 absolute flex flex-col left-28">
                  <h1 className="text-5xl font-bold py-2">
                    {officialProfile.name}
                  </h1>
                </div>

                {/* <img src={profilePic} alt='' className='bg-cover w-24 h-24 rounded-full'/> */}
              </div>
              <div className="bg-gray-100 p-6 w-2/3 self-center rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-black text-center">
                  Personal Information
                </h2>
                {/* Personal Info Table */}
                <table className="min-w-full bg-gray-100 text-gray-950 rounded-lg">
                  <tbody>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Name:</td>
                      <td className="py-2 px-5">
                        {officialProfile.name}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">
                        Date of Birth:
                      </td>
                      <td className="py-2 px-5">
                        {officialProfile.dateOfBirth}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Email:</td>
                      <td className="py-2 px-5">
                        {officialProfile.email}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Contact No:</td>
                      <td className="py-2 px-5">
                        {officialProfile.contactNo}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Address:</td>
                      <td className="py-2 px-5">
                        {officialProfile.address}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Description:</td>
                      <td className="py-2 px-5">
                        {officialProfile.description}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
             </div>
          </div>
        </div>
        {/* Main Content */}
      </div>
    </div>
  );
};

export default OfficialProfile;
