import React, { useEffect, useState } from "react";
import MemberNavbar from '../components/MemberNavbar';
import axios from "axios";
import { message } from "antd";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import backgroundImage from "../assets/images/Score_table_back_Image.png";
import playersData from "./PlayersData";
import back from "../assets/images/flag.png";
import flag from "../assets/images/backDrop.png";
import image from "../assets/images/coach.jpg";
import ball from "../assets/images/CricketBall-unscreen.gif";
import PracticeScheduleForm from "../components/PracticeScheduleForm";
import PracticeScheduleEditForm from "../components/PracticeScheduleEditForm";
import { useAuth } from "../hooks/UseAuth";

const CoachProfile = () => {
  const { user } = useAuth();
  const API_URL = process.env.REACT_APP_API_URL;
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editSchedule, setEditSchedule] = useState(null);
  const [practiceSchedules, setPracticeSchedules] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [practiceToDelete, setPracticeToDelete] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [coach, setCoach] = useState();

  useEffect(() => {
    console.log("coachId: ", user.userId);
    axios
      .get(`${API_URL}coaches/${user.userId}`)
      .then(response => {
        const coach = response.data;
        setCoach(coach);
        console.log("coach Data:", response.data);
        console.log("coach1:", coach);
      }).catch(error => {
        console.error("There was an error fetching the player data!", error);
      });
      console.log("coach: ",coach);
  }, []);

  useEffect(() => {
      axios.get(`${API_URL}practiseSessions/coach/${user.userId}`)
      .then(response => {
        setPracticeSchedules(response.data);
        console.log("sessions Data:", response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the player data!", error);
      });
      console.log("coach: ",coach);
  }, [isSubmitted, isDeleted]);

  const handleEditSchedule = schedule => {
    console.log("schedule: ", schedule);
    setEditSchedule(schedule);
    setIsEditFormOpen(true);
  };
  const handleDelete = id => {
    setPracticeToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    setUploading(true);
    try{
      const deletePayer = await axios.delete(
        `${API_URL}practiseSessions/${practiceToDelete}`
      );
      message.success("Successfully Deleted!");
      setShowDeleteModal(false);
      setIsDeleted(!isDeleted);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1500);
    } catch (error) {
      console.error("Error deleting player:", error);
      if (error.response && error.response.data && error.response.data.message) {
        message.error(`Failed to delete: ${error.response.data.message}`);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
    }
  };
  
  const calculateAge = (dob) => {
    console.log("dob:", dob);
    const birthDate = new Date(dob); // Parses the YYYY-MM-DD format
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    // Adjust if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  return (
    <div
      className={`flex relative justify-center lg:p-10 p-5 lg:pt-28 pt-28 h-auto items-stretch min-h-screen text-white w-full`}
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <MemberNavbar />
            <div
              className="h-full w-full p-5 rounded-lg lg:px-20 bg-white shadow-md"
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
                  <div className="-top-5 -left-5 absolute flex flex-col">
                    <h1 className="lg:text-4xl font-bold">
                      {coach && coach.name}
                    </h1>
                    {coach?.dateOfBirth && (
                    <p className="lg:text-xl text-sm">{calculateAge(coach.dateOfBirth)} years old</p>
                  )}
                  </div>
                  {coach && <img src={coach.image} alt={coach.name} className=" w-32 h-32 rounded-full object-cover border bg-white border-gray-300"
                    />}
                </div>

              </div>
              <div className="flex items-center pt-5 justify-center">
              <div className="bg-gray-100 py-4 px-2 w-full lg:p-6 lg:w-2/3 self-center rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-black text-center">
                  Personal Information
                </h2>
                <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full bg-white text-gray-950 rounded-lg">
                  <tbody>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Name:</td>
                      <td className="py-2 px-5">
                        {coach && coach.name}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">
                        Date of Birth:
                      </td>
                      <td className="py-2 px-5">
                        {coach && coach.dateOfBirth}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Email:</td>
                      <td className="py-2 px-5">
                        {coach && coach.email}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Contact No:</td>
                      <td className="py-2 px-5">
                        {coach && coach.contactNo}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Address:</td>
                      <td className="py-2 px-5">
                        {coach && coach.address}
                      </td>
                    </tr>
                    <tr className="bg-white  rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold ">Description:</td>
                      <td className="py-2 px-5">
                        {coach && coach.description}
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
              </div>
              <div className="mt-6 bg-gray-200 lg:p-8 p-5 w-full rounded-lg">

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
                <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full mt-4 bg-gray-200 lg:rounded-lg w-full">
                  <thead className=" text-white">
                    <tr className="bg-gradient-to-r from-[#00175f] to-[#480D35]">
                      <th className="px-4 py-3 lg:rounded-l-lg text-left text-xs font-bold uppercase tracking-wider">
                        Team
                      </th>
                      <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Venue
                      </th>
                      <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Start Time
                      </th>
                      <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        End Time
                      </th>
                      <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-2 py-3 lg:rounded-r-lg text-left text-xs font-bold uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                    <tr className=" h-2"></tr>
                  </thead>
                  <tbody className=" divide-y-2 divide-gray-300 " >
                    {practiceSchedules &&
                      practiceSchedules.map(schedule =>
                        <tr key={schedule.id} className="hover:bg-gray-50 h-full lg:rounded-lg bg-white align-middle text-gray-900">
                          <td className="px-2 py-4 h-14 lg:rounded-l-lg  whitespace-nowrap text-sm">
                            {schedule.teamUnder}
                          </td>
                          <td className="px-2 py-4 h-14  whitespace-nowrap text-sm">
                            {schedule.venue}
                          </td>
                          <td className="px-2 py-4 h-14  whitespace-nowrap text-sm">
                            {schedule.date}
                          </td>
                          <td className="px-2 py-4 h-14  whitespace-nowrap text-sm">
                            {schedule.startTime}
                          </td>
                          <td className="px-2 py-4 h-14  whitespace-nowrap text-sm">
                            {schedule.endTime}
                          </td>
                          <td className="px-2 py-4 h-14  whitespace-nowrap text-sm">
                            {schedule.pracType}
                          </td>
                          <td className="px-2 py-4 lg:rounded-r-lg whitespace-nowrap h-14 text-sm space-x-4">
                        
                              <button className="text-blue-500 hover:text-blue-700"
                              onClick={() => handleEditSchedule(schedule)}>
                                <FaEdit className="text-sm" />
                              </button>
                              <button className="text-red-500 hover:text-red-700"
                               onClick={()=>handleDelete(schedule.pracId)}
                              >
                                <FaTrash className="text-sm" />
                              </button>
                        
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
                <div className="bg-white text-[black] rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                  <p>Are you sure you want to delete this practice session?</p>
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
          {isFormOpen && <PracticeScheduleForm onClose={() => setIsFormOpen(false)} isSubmitted={()=>setIsSubmitted(!isSubmitted)}/>}
          {isEditFormOpen && <PracticeScheduleEditForm onClose={() => setIsEditFormOpen(false)} practiceSchedule={editSchedule} isSubmitted={()=>setIsSubmitted(!isSubmitted)}/>}
          {uploading && (
            <div className="absolute items-center justify-center my-4">
              <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
            </div>
          )}
    </div>
  );
};

export default CoachProfile;