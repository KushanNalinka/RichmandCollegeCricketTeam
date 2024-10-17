import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { message } from "antd";

const PracticeScheduleEditForm = ({ onClose,practiceSchedule }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [coaches, setCoaches] = useState([]);
  const [teams, setTeams] = useState();
  const [selectedCoaches, setSelectedCoaches] = useState([]);
  const [formData, setFormData] = useState({...practiceSchedule});

  useEffect(() => {
    axios
      .get(`${API_URL}coaches/all`)
      .then((response) => {
        const coaches = response.data;
        setCoaches(coaches);
        console.log("coaches Data:", response.data);
        console.log("coaches1:", coaches);})
        .catch((error) => {
            console.error("There was an error fetching the player data!", error);
          });
    axios.get(`${API_URL}teams/all`)
      .then((response) => {
        const team = response.data;
        setTeams(team);
        console.log("team Data:", response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the player data!", error);
      });
      console.log("practice schedule :", practiceSchedule)
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setFormData({
        ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };


  const handleEdit = async e => {
    e.preventDefault();
    console.log("FormData: ",formData);
    const updatedFormData = {
        ...formData,
        coaches: selectedCoaches.map((coach) => ({ coachId: coach.coachId })),
      };
      try {
        const response = await axios.put(
        `${API_URL}practiseSessions/update/${practiceSchedule.pracId}`,
            updatedFormData
        );
        console.log("Form submitted succedded: ", response.data);
        message.success("Successfull!");
        setFormData({
            venue: "",
            date: "",
            startTime: "",
            endTime: "",
            pracType: "",
            coaches: [
              {
                coachId: 0,
              },
            ],
            team: {
              teamId: 0,
            },
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        message.error("Failed!");
      }
  };

  const handleCoachSelect = (coach) => {
    if (selectedCoaches.includes(coach)) {
      // If player is already selected, remove them
      setSelectedCoaches(
        selectedCoaches.filter((p) => p.coachId !== coach.coachId)
      );
    } else {
      // Otherwise, add the player to the list
      setSelectedCoaches([...selectedCoaches, coach]);
    }
    console.log("selected coaches: ", selectedCoaches.name);
  };

  const clearSelectedCoaches = () => {
    setSelectedCoaches([]); // Clear all selected players
  };

  const convertTo24HourFormat = (time12h) => {
    const [time, modifier] = time12h.split(' '); // Split the time and AM/PM part
    let [hours, minutes] = time.split(':'); // Split the hours and minutes
  
    // Convert to 24-hour format
    if (modifier === 'PM' && hours !== '12') {
      hours = parseInt(hours, 10) + 12;
    }
    if (modifier === 'AM' && hours === '12') {
      hours = '00';
    }
  
    // Return in the correct HH:MM format
    return `${hours.padStart(2, '0')}:${minutes}`;
  };


  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-gray-600 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <div className="flex justify-end ">
          <button
            onClick={onClose}
            className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl text-[#480D35] font-bold mb-4">
          Add Practice Schedule Details
        </h2>
        <form
          onSubmit={handleEdit}
          className="grid grid-cols-1 text-[black] md:grid-cols-1 gap-3"
        >
          <div >
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="venue"
            >
              Venue
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div >
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="venue"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div >
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="startTime"
            >
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={ convertTo24HourFormat(formData.startTime)}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div >
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="endTime"
            >
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={ convertTo24HourFormat(formData.endTime)}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div >
            <label className="block mb-2 text-gray-700">Type</label>
            <select
              name="type"
              value={formData.pracType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
               <option value="" disabled selected>Select type</option>
               <option value="Test">Batting Practice</option>
               <option value="ODI">Bawling Practice</option>
               <option value="T20">Fielding Practice</option>
            </select>
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="teamUnder">
              Team
            </label>
                <select
                name="teamUnder"
                value={formData.teamUnder}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                >
                <option value="" disabled>{formData.teamUnder}</option>
                {teams && teams.map(team =>
                    <option key={team.teamId} value={team.teamId}>
                    {team.under}
                    </option>
                )}
                </select>
          </div>
          <div className="  col-span-2">
          <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="endTime"
            >
              Coaches
            </label>
            <div className="flex border border-gray-300 rounded">
              <input
                type="text"
                className="p-2 w-[90%] rounded"
                value={selectedCoaches && selectedCoaches
                    .map((coach) => coach && coach.name)
                    .join(", ")}
                   // Show selected coach names, joined by commas
                readOnly
              />
              <button
                type="button"
                className="flex items-center w-[10%] justify-center text-red-600 hover:text-red-700 rounded-lg"
                onClick={clearSelectedCoaches}
              >
                <FaTrash />
              </button>
            </div>
            <div className="relative ">
              <div className="border overflow-auto h-40 border-gray-300 rounded p-2">
                {coaches.map((coach) => (
                  <div key={coach.coachId} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`coach-${coach.coachId}`}
                      className="mr-2"
                      checked={selectedCoaches.some(
                        (p) => p.coachId === coach.coachId
                      )}
                      onChange={() => handleCoachSelect(coach)}
                    />
                    <label
                      htmlFor={`coach-${coach.coachId}`}
                      className="text-gray-700"
                    >
                      {coach.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-[#480D35] hover:bg-opacity-100 bg-opacity-95 text-white px-4 py-2 rounded-md w-full"
            >
              Add schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PracticeScheduleEditForm;