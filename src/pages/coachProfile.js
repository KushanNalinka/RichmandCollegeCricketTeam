import React, { useEffect, useState } from "react";
import Navbar from "../components/HomeNavbar";
import axios from "axios";
import { message } from "antd";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import backgroundImage from "../assets/images/Score_table_back_Image.png";
import playersData from "./PlayersData";
import back from "../assets/images/flag.png";
import flag from "../assets/images/backDrop.png";
import image from "../assets/images/coach.jpg";
import PracticeScheduleForm from "../components/PracticeScheduleForm";
import PracticeScheduleEditForm from "../components/PracticeScheduleEditForm";

const CoachProfile = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editSchedule, setEditSchedule] = useState(null);
  const [practiceSchedules, setPracticeSchedules] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [practiceToDelete, setPracticeToDelete] = useState(null);
  const [coach, setCoach] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_URL}coaches/${1}`)
      .then(response => {
        setCoach(response.data);
        console.log("coach Data:", response.data);
      }).catch(error => {
        console.error("There was an error fetching the player data!", error);
      });
      axios.get(`${API_URL}practiseSessions/coach/2`)
      .then(response => {
        setPracticeSchedules(response.data);
        console.log("sessions Data:", practiceSchedules);
      })
      .catch(error => {
        console.error("There was an error fetching the player data!", error);
      });
  }, []);

  // const handleSaveCoachProfile = e => {
  //   console.log("get Profile:", e);
  //   setCoachProfile([
  //     ...coachProfile,
  //     {
  //       ...e,
  //       id: coachProfile.id + 1
  //     }
  //   ]);
  // };

  const handleEditSchedule = schedule => {
    setEditSchedule(schedule);
    setIsEditFormOpen(true);
  };
  const handleDelete = id => {
    setPracticeToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    try{
      const deletePayer = await axios.delete(
        `${API_URL}admin/players/delete/${practiceToDelete}`
      );
      message.success("Successfully Deleted!");
      setShowDeleteModal(false);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error deleting match:", error);
      message.error("Failed!");
    }
  };

  return (
    <div
      className={` text-white w-full`}
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Navbar />

      <div className=" pt-32  p-10">
        <div>
          <div className="flex gap-6 items-center lg:px-5 justify-center">
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
                  
                    
                    className=" w-32 h-32 rounded-full object-cover border bg-white border-gray-300"
                  />
                </div>
                <div className="top-24 absolute flex flex-col left-28">
                  <h1 className="text-5xl font-bold py-2">
                    {}
                  </h1>
                  <p className=" text-xl">
                    {} {" Old"}
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
                        {}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">
                        Date of Birth:
                      </td>
                      <td className="py-2 px-5">
                        {}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Email:</td>
                      <td className="py-2 px-5">
                        {}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Contact No:</td>
                      <td className="py-2 px-5">
                        {}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Address:</td>
                      <td className="py-2 px-5">
                        {}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Description:</td>
                      <td className="py-2 px-5">
                        {}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-gray-200 bg-opacity-75 p-8 w-full rounded-lg">

                  <div className="flex justify-between items-center mb-3">
                    <h2 className="md:text-2xl text-lg font-bold text-center text-[#480D35]">
                      Practice Schedules
                    </h2>
                    <button
                      onClick={() => setIsFormOpen(true)}
                      className="bg-green-600 hover hover:bg-green-700 text-white rounded-full p-1 lg:text-2xl text-lg"
                      aria-label="Add"
                      title="Add New"
                    >
                      <FaPlus />
                    </button>
                  </div>

                <table className="min-w-full mt-4 bg-gray-50 rounded-lg shadow-md w-full">
                  <thead className=" rounded-t-3xl border text-white bg-transparent">
                    <tr className="rounded-t-3xl bg-[#480D35]">
                      <th className="py-2 px-16 text-center font-semibold align-middle whitespace-nowrap">
                        Team
                      </th>
                      <th className="py-2 px-16 text-center  font-semibold align-middle whitespace-nowrap">
                        Venue
                      </th>
                      <th className="py-2 px-16 text-center font-semibold align-middle whitespace-nowrap">
                        Date
                      </th>
                      <th className="py-2 px-16 text-center font-semibold align-middle whitespace-nowrap">
                        Start Time
                      </th>
                      <th className="py-2 px-16text-center font-semibold align-middle whitespace-nowrap">
                        End Time
                      </th>
                      <th className="py-2 px-16 text-center font-semibold align-middle whitespace-nowrap">
                        Type
                      </th>
                      <th className="py-2 px-16 text-center font-semibold align-middle whitespace-nowrap">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {practiceSchedules &&
                      practiceSchedules.map(schedule =>
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
                              <button className="text-blue-500 hover:text-blue-700">
                              //onClick={() => handleEditSchedule(schedule)}
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
          {showDeleteModal && (
              <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-75">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                  <p>Are you sure you want to delete this player?</p>
                  <div className="flex justify-end mt-4 space-x-4">
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmDelete}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          {isFormOpen && <PracticeScheduleForm onClose={() => setIsFormOpen(false)} />}
          {isEditFormOpen && <PracticeScheduleEditForm onClose={() => setIsFormOpen(false)} />}
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
