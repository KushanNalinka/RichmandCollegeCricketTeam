import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { message , DatePicker} from "antd";
import dayjs from 'dayjs';

const PracticeScheduleEditForm = ({ onClose,practiceSchedule,isSubmitted }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [coaches, setCoaches] = useState([]);
  const [teams, setTeams] = useState();
  const [selectedCoaches, setSelectedCoaches] = useState(practiceSchedule.coaches || []);
  const [formData, setFormData] = useState({...practiceSchedule, teamUnder: practiceSchedule.teamUnder});
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
 console.log("teamUnder: ", formData.teamUnder)
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
      console.log("practice schedule :", practiceSchedule);
      console.log("coaches new :", practiceSchedule.coaches);
      console.log("coaches new2 :", formData.coaches);
      
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

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.startTime !== practiceSchedule.startTime && formData.endTime !== practiceSchedule.endTime && formData.startTime && formData.endTime) {
      const startDateTime = new Date(`1970-01-01T${formData.startTime}:00`);
      const endDateTime = new Date(`1970-01-01T${formData.endTime}:00`);
    if (startDateTime >= endDateTime) {
      newErrors.timeRange = "End time must be after start time.";
    }
  }

    // Validate selected coaches
    if (selectedCoaches.length === 0) {
      newErrors.coaches = "Please select coaches.";
    }
    const today = new Date();
    const selectedDate = new Date(formData.date);
    if (selectedDate <= today) {
      newErrors.date = "The date must be in the present.";
    };

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleEdit = async e => {
    e.preventDefault();
    console.log("FormData: ",formData);
    if (!validateForm()) {
      message.error("Please fix validation errors before submitting");
      return;
    };
    setUploading(true);
      try {
        const response = await axios.put(
        `${API_URL}practiseSessions/update/${practiceSchedule.pracId}`,
            formData
        );
        console.log("Form submitted succedded: ", response.data);
        message.success("Successfull!");
        setFormData({
            venue: "",
            date: "",
            startTime: "",
            endTime: "",
            pracType: "",
            coaches: [],
            team: {
              teamId: 0,
            },
        });
        setSelectedCoaches([]);
        isSubmitted();
    } catch (error) {
        console.error("Error submitting form:", error);

      if (error.response && error.response.data && error.response.data.message) {
        message.error(`Failed to submit: ${error.response.data.message}`);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
    }
  };

  const handleCoachSelect = (coach) => {
    const isSelected = selectedCoaches.some(c => c.coachId === coach.coachId);
    if (isSelected) {
      setSelectedCoaches(selectedCoaches.filter(c => c.coachId !== coach.coachId));
    } else {
      setSelectedCoaches([...selectedCoaches, { coachId: coach.coachId, name: coach.name }]);
    }
    console.log("selected coaches: ", selectedCoaches.name);
  };

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      coaches: selectedCoaches.map(coach => ({ coachId: coach.coachId }))
    }));
  }, [selectedCoaches]);

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
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} m-5 md:m-0 p-8 rounded-lg shadow-lg max-w-xl w-full max-h-screen hover:overflow-auto overflow-hidden relative`}>
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
          Update Practice Schedule Details
        </h2>
        <form
          onSubmit={handleEdit}
          className="grid grid-cols-1 text-[black] md:grid-cols-1 gap-3"
        >
          <div className="col-span-1" >
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
          <div className="col-span-1">
            <label
              className="block text-black text-sm font-semibold"
              htmlFor="venue"
            >
              Date
            </label>
            {/* <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              
            /> */}
            <DatePicker
              name="date"
              dateFormat="yyyy-mm-dd"
              defaultValue={dayjs(formData.dateOfBirth)}
              onChange={(date) => handleChange({ target: { name: 'date', value: date } })}
              placeholder="yyyy-mm-dd"
              className="w-full px-3 py-1 hover:border-gray-300 border text-black border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
              required
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>
          <div className="col-span-1">
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
              value={ convertTo24HourFormat(formData.startTime)}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
             
            />
          </div>
          <div className="col-span-1">
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
              value={ convertTo24HourFormat(formData.endTime)}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
           
            />
             {errors.timeRange && <p className="text-red-500 text-xs mt-1">{errors.timeRange}</p>}
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Type</label>
            <select
              name="pracType"
              value={formData.pracType}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
               <option value="" disabled >Select type</option>
               <option value="Batting Practice">Batting Practice</option>
               <option value="Bawling Practice">Bawling Practice</option>
               <option value="Fielding Practice">Fielding Practice</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">
              Team
            </label>
                <select
                name="teamUnder"
                value={formData.teamUnder}
                onChange={handleChange}
                className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                >
                <option value="" disabled>Select team</option>
                {teams && teams.map(team =>
                    <option key={team.teamId} value={team.teamId}>
                    {team.under}
                    </option>
                )}
                </select>
          </div>
          <div className="md:col-span-2 col-span-1">
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
                value={selectedCoaches.map(coach => coach.name).join(", ")}
                   // Show selected coach names, joined by commas
                placeholder='Choose coaches from the list...'
                readOnly
              />
              <button
                type="button"
                title="delete"
                className="flex items-center w-[10%] justify-center text-red-600 hover:text-red-700 rounded-lg"
                onClick={clearSelectedCoaches}
              >
                <FaTrash />
              </button>
            </div>
            {errors.coaches && <p className="text-red-500 text-xs mt-1">{errors.coaches}</p>}
            <div className="relative ">
              <div className="border overflow-hidden hover:ring-1 hover:ring-[#00175f] hover:overflow-auto h-40 border-gray-300 rounded-md mt-2 px-3 py-1">
                {coaches.map((coach) => (
                  <div key={coach.coachId} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`coach-${coach.coachId}`}
                      className="mr-2"
                      checked={selectedCoaches.some(p => p.coachId === coach.coachId)}
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
          <div className="md:col-span-2 col-span-1">
            <button
              type="submit"
              className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      {uploading && (
        <div className="absolute items-center justify-center my-4">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
      )}
    </div>
  );
};

export default PracticeScheduleEditForm;