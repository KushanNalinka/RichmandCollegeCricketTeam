import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { message } from "antd";

const PracticeScheduleForm = ({ onClose }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [coaches, setCoaches] = useState([]);
  const [teams, setTeams] = useState();
  const [selectedCoaches, setSelectedCoaches] = useState([]);
  const [formData, setFormData] = useState({
    venue: "",
    date: "",
    startTime: "",
    endTime: "",
    pracType: "",
    coaches: [
      {
        coachId: 0,
      },
      {
        coachId: 0,
      },
    ],
    team: {
      teamId: 0,
    },
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FormData: ", formData);
    const updatedFormData = {
        ...formData,
        coaches: selectedCoaches.map((coach) => ({ coachId: coach.coachId })),
      };
    try {
      const response = await axios.post(
        `${API_URL}practiseSessions/add`,
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

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-gray-600 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
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
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 text-[black] gap-3"
        >
          <div>
            <label
              className="block text-black text-sm font-semibold"
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
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
            <label
              className="block text-black text-sm font-semibold"
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
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
            <label
              className="block text-black text-sm font-semibold"
              htmlFor="startTime"
            >
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
            <label
              className="block text-black text-sm font-semibold"
              htmlFor="endTime"
            >
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
          <label
              className="block text-black text-sm font-semibold"
              htmlFor="endTime"
            >
              Type
            </label>
            <select
              name="pracType"
              value={formData.pracType}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="" disabled selected>
                Select type
              </option>
              <option value="Batting Practice">Batting Practice</option>
              <option value="Bawling Practice">Bawling Practice</option>
              <option value="Fielding Practice">Fielding Practice</option>
            </select>
          </div>
          <div>
            <label
              className="block text-black text-sm font-semibold"
              htmlFor="team.teamId"
            >
              Team
            </label>
                <select
                name="team.teamId"
                value={formData.team.teamId}
                onChange={handleChange}
                className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                >
                <option value="">Select team</option>
                {teams && teams.map(team =>
                    <option key={team.teamId} value={team.teamId}>
                    {team.under}
                    </option>
                )}
                </select>
          </div>
          <div className=" col-span-2">
          <label
              className="block text-black text-sm font-semibold"
              htmlFor="endTime"
            >
              Coaches
            </label>
            <div tabIndex={-1} className="flex text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]">
              <input
                type="text"
                className="border-0 py-1 px-3 w-[90%] rounded-md focus:outline-non pointer-events-none"
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
            <div className="relative">
              <div className="border overflow-hidden hover:ring-1 hover:ring-[#00175f] hover:overflow-auto h-40 border-gray-300 rounded-md mt-2 px-3 py-1">
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
                      className="block text-black text-sm font-semibold"
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
                className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
              >
                Add schedule
              </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default PracticeScheduleForm;