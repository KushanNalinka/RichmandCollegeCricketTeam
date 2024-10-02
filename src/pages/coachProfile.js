import React, { useState } from "react";
import Navbar from "../components/HomeNavbar";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import backgroundImage from "../assets/images/Score_table_back_Image.png";
import playersData from "./PlayersData";
import back from "../assets/images/flag.png";
import flag from "../assets/images/backDrop.png";
import image from "../assets/images/coach.jpg";

const CoachProfile = () => {

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editSchedule, setEditSchedule] = useState(null);
  // Sort players alphabetically by fullName
  const sortedPlayers = [...playersData].sort((a, b) =>
    a.fullName.localeCompare(b.fullName)
  );
  const practiceSchedulesData = [
    {
      id: 1,
      venue: "Colombo Ground",
      team:"Team A",
      date:"12/10/2024",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      type: "Batting Practice"
    },
    {
      id: 2,
      date:"15/07/2024",
      team:"Team B",
      venue: "Galle Stadium",
      startTime: "02:00 PM",
      endTime: "04:00 PM",
      type: "Bowling Practices"
    },
    {
      id: 3,
      venue: "Kandy Ground",
      team:"Team C",
      date:"08/06/2024",
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      type: "Fielding Practice"
    }
  ];
  const [coachProfile, setCoachProfile] = useState({
    coachId: 1,
    image: `${image}`,
    name: "John Doe",
    contactNo: "0777056789",
    dateOfBirth: "1986-07-23",
    age: 40,
    email: "john.doe@gmail.com",
    address: "235,Lotus Lane, Colombo 04.",
    description: "no"
  });

  const handleSaveCoachProfile = e => {
    console.log("get Profile:", e);
    setCoachProfile([
      ...coachProfile,
      {
        ...e,
        id: coachProfile.id + 1
      }
    ]);
  };
  const handleEditSchedule = schedule => {
    setEditSchedule(schedule);
    setIsEditFormOpen(true);
  };


  return (
    <div
      className={` text-white w-full`}
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/ Navbar /}
      <Navbar />

      <div className=" pt-32  p-10">
        <div>
          <div className="flex gap-6 items-center lg:px-5 justify-center">
            {/ Player Details /}

            <div
              className="flex-grow flex-col flex bg p-8 items-center justify-center rounded-lg lg:px-20 bg-white shadow-md ml-18"
              style={{
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              <h1 className="text-2xl self-start p-2 pt-0 text-[#480D35] font-bold">
                Coach Profile
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
                    src={coachProfile.image}
                    alt={coachProfile.name}
                    className=" w-32 h-32 rounded-full object-cover border bg-white border-gray-300"
                  />
                </div>
                <div className="top-24 absolute flex flex-col left-28">
                  <h1 className="text-5xl font-bold py-2">
                    {coachProfile.name}
                  </h1>
                  <p className=" text-xl">
                    {coachProfile.age} {" Old"}
                  </p>
                </div>

                {/* {/ <img src={profilePic} alt='' className='bg-cover w-24 h-24 rounded-full'/> /} */}
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
                        {coachProfile.name}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">
                        Date of Birth:
                      </td>
                      <td className="py-2 px-5">
                        {coachProfile.dateOfBirth}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Email:</td>
                      <td className="py-2 px-5">
                        {coachProfile.email}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Contact No:</td>
                      <td className="py-2 px-5">
                        {coachProfile.contactNo}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Address:</td>
                      <td className="py-2 px-5">
                        {coachProfile.address}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Description:</td>
                      <td className="py-2 px-5">
                        {coachProfile.description}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-gray-200 bg-opacity-75 p-8 w-full rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-black">
                  Practice Schedules
                </h3>
                
              </div>

              <table className="min-w-full mt-4 bg-gray-50 rounded-lg shadow-md w-full">
                <thead className=" bg-gray-100">
                  <tr>
                    <th className="py-2 px-16 text-center text-gray-800 font-semibold align-middle whitespace-nowrap">
                      Team
                    </th>
                    <th className="py-2 px-16 text-center text-gray-800 font-semibold align-middle whitespace-nowrap">
                      Venue
                    </th>
                    <th className="py-2 px-16 text-center text-gray-800 font-semibold align-middle whitespace-nowrap">
                      Date
                    </th>
                    <th className="py-2 px-16 text-center text-gray-800 font-semibold align-middle whitespace-nowrap">
                      Start Time
                    </th>
                    <th className="py-2 px-16text-center text-gray-800 font-semibold align-middle whitespace-nowrap">
                      End Time
                    </th>
                    <th className="py-2 px-16 text-center text-gray-800 font-semibold align-middle whitespace-nowrap">
                      Type
                    </th>
                    <th className="py-2 px-16 text-center text-gray-800 font-semibold align-middle whitespace-nowrap">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {practiceSchedulesData.map(schedule =>
                    <tr key={schedule.id} className="bg-white">
                    <td className="py-2 px-4 border-b text-gray-600 border-gray-200 text-center align-middle whitespace-nowrap">
                        {schedule.team}
                      </td>
                      <td className="py-2 px-4 border-b text-gray-600 border-gray-200 text-center align-middle whitespace-nowrap">
                        {schedule.venue}
                      </td>
                      <td className="py-2 px-4 border-b text-gray-600 border-gray-200 text-center align-middle whitespace-nowrap">
                        {schedule.date}
                      </td>
                      <td className="py-2 px-4 border-b text-gray-600 border-gray-200 text-center align-middle whitespace-nowrap">
                        {schedule.startTime}
                      </td>
                      <td className="py-2 px-4 border-b text-gray-600 border-gray-200 text-center align-middle whitespace-nowrap">
                        {schedule.endTime}
                      </td>
                      <td className="py-2 px-4 border-b text-gray-600 border-gray-200 text-center align-middle whitespace-nowrap">
                        {schedule.type}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-center align-middle whitespace-nowrap">
                        <div className="flex justify-center space-x-2">
                          <button
                            className="text-blue-500 hover:text-blue-700"
                            onClick={() => handleEditSchedule(schedule)}
                          >
                            <FaEdit className="text-sm" />
                          </button>
                          <button className="text-red-500 hover:text-red-700">
                            <FaTrash className="text-sm" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
