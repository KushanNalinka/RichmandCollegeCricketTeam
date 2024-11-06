import React, { useState, useEffect } from 'react';
import axios from "axios";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaTimes, FaTrash } from "react-icons/fa";
import { BsPeople } from 'react-icons/bs';
import { MdPeople } from 'react-icons/md';
import dayjs from 'dayjs';
import { message, DatePicker } from 'antd';
import { Select } from "antd";
import { RiArrowDownLine, RiArrowDropDownLine } from 'react-icons/ri';

const EditPopup = ({ onClose, match, isSubmitted }) => {
  console.log("initial matches: ", match);
  const [coaches, setCoaches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedCoachNames, setSelectedCoachNames] = useState([]);
  const [selectedCoaches, setSelectedCoaches] = useState(match.coaches || []);
  const [imagePreview, setImagePreview] = useState(match.logo);
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [players, setPlayers] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const { Option } = Select;
  const API_URL = process.env.REACT_APP_API_URL;
  console.log("selected coaches: ", selectedCoaches);
  const convertTimeTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') hours = '00';
    if (modifier === 'PM') hours = parseInt(hours, 10) + 12;
    return `${hours}:${minutes}`;
  };

  const [formData, setFormData] = useState({
    ...match,
    team:{
      teamId:match.teamId,
      under:match.under,
    },
    time: convertTimeTo24Hour(match.time),
    coaches: match.coaches || []
  });

  useEffect(() => {
    // Fetch player data for playerId 4
    axios
      .get(`${API_URL}admin/players/all`)
      .then(response => {
        const players = response.data;
        setPlayers(players);
        console.log("players Data:", players);
      })
      .catch(error => {
        console.error("There was an error fetching the player data!", error);
      });
    axios.get(`${API_URL}coaches/all`).then(response => {
      const coaches = response.data;
      setCoaches(coaches);
      console.log("Coaches Data:", coaches);
    });
    axios
      .get(`${API_URL}teams/all`)
      .then(response => {
        const teams = response.data;
        setTeams(teams);
        console.log("Teams Data:", teams);
      })
      .catch(error => {
        console.error("There was an error fetching the player data!", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "team.under") {
      // Find the selected team based on the 'under' value
      const selectedTeam = teams.find(team => team.under === value);
      const selectedTeamId = selectedTeam ? selectedTeam.teamId : "";
  
      setFormData({
        ...formData,
        team: {
          ...formData.team,
          under: value,
          teamId: selectedTeamId // Update teamId based on selected team
        }
      });
    } else if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setFormData({
        ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value
        }
      });
    }else if (files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setFormData({
        ...formData,
        [name]: file
      });
      setIsImageAdded(true);
    }else if (name === "date") {
      // Handle the DatePicker value change
      setFormData({
        ...formData,
        [name]: value ? value.format('YYYY-MM-DD') : null // Format date to 'YYYY-MM-DD'
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
    if (isImageAdded && formData.logo && !/^image\//.test(formData.logo.type)) {
      newErrors.logo = "Only image files are allowed.";
    };
      // Validate selected coaches
    if (selectedCoaches.length === 0) {
      newErrors.coaches = "Please select at least one coach.";
    };
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEdit = async e => {
    e.preventDefault();
    console.log("coachIds in edited foemdata;", formData.coaches);
    if (!validateForm()) {
      message.error("Please fix validation errors before submitting");
      return;
    };
    setUploading(true);
    try {
      let imageURL = formData.logo;

      // Upload image if an image file is added
      if (formData.logo instanceof File) {
        imageURL = await handleImageUpload(formData.logo);
      }

      const matchData = {
        ...formData,
        logo: imageURL, // Assign the uploaded image URL to formData
      };
      console.log("Match Data :", matchData);
      // Make a POST request to the backend API
      const response = await axios.put(
        `${API_URL}matches/update/${match.matchId}`,
        {...matchData}
      );
      message.success("Successfully Edited the match!");
      console.log("Form submitted succedded: ", response.data);
      setFormData({
        date: "",
        time: "",
        venue: "",
        opposition: "",
        tier: "",
        logo:"",
        division: "",
        umpires: "",
        type: "",
        matchCaptain: "",
        team:{
          under:"",
          teamId:""
        },
        coaches: []
      })
      isSubmitted();
      setSelectedCoaches([]);
      setImagePreview();
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response && error.response.data && error.response.data.message) {
        message.error(`Failed to submit: ${error.response.data.message}`);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
      onClose();
    }
  };

  const handleCoachSelect = coach => {
    const isSelected = selectedCoaches.some(c => c.coachId === coach.coachId);
    if (isSelected) {
      setSelectedCoaches(selectedCoaches.filter(c => c.coachId !== coach.coachId));
    } else {
      setSelectedCoaches([...selectedCoaches, { coachId: coach.coachId, coachName: coach.name }]);
    }
  };

  const clearSelectedCoaches = () => {
    setSelectedCoaches([]); // Clear all selected coaches
  };

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      coaches: selectedCoaches.map(coach => ({ coachId: coach.coachId }))
    }));
  }, [selectedCoaches]);

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `match/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      setUploading(true);

      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.error('Image upload failed:', error);
          setUploading(false);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploading(false);
            resolve(downloadURL);
          });
        }
      );
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} p-8 md:rounded-lg shadow-lg max-w-xl w-full max-h-screen hover:overflow-auto overflow-hidden relative`}>
        <div className="flex justify-end items-center">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-[#480D35]"> Edit Match Details</h2>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Date</label>
            <DatePicker
              name="date"
              dateFormat="yyyy-mm-dd"
              // selected={new Date(formData.dateOfBirth)}
              defaultValue={dayjs(formData.date)}
              onChange={(date) => handleChange({ target: { name: 'date', value: date } })}
              placeholder="yyyy-mm-dd"
              className="w-full px-3 py-1 hover:border-gray-300 border text-gray-600 border-gray-300 rounded-md focus:border-[#00175f] focus:border-[5px]"
              required
            />
          </div>
          <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            />
          </div>
          <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            />
          </div>
          <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Opponent</label>
            <input
              type="text"
              name="opposition"
              value={formData.opposition}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            />
          </div>
          <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Tier</label>
            <select
              type="text"
              name="tier"
              value={formData.tier}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
         
            >
              <option value="" disabled selected>Select tier</option>
              <option value="Tier A">Tier A</option>
              <option value="Tier B">Tier B</option>
            </select>
          </div>
          <div  className="col-span-1">
            <label className="block text-black text-sm font-semibold">Division</label>
            {/* <select
              type="text"
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            >
              <option value="" disabled selected>Select division</option>
              <option value="Division 1"> Division 1</option>
              <option value="Division 2">Division 2</option>
            </select> */}
            <Select
              mode="tags" // Enable dropdown and custom input
              style={{ width: "100%" }}
              placeholder="Select or add a division"
              value={formData.division ? [formData.division] : []} // Convert to array for controlled input
              onChange={(value) => handleChange({ target: { name: "division", value: value[0] } })} // Handle single selection
              showSearch={false} // Disable search functionality
            >
              <Option value="Division 1">Division 1</Option>
              <Option value="Division 2">Division 2</Option>
              <Option value="Division 3">Division 3</Option>
            </Select>
            
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Umpires</label>
            <input
              type="text"
              name="umpires"
              value={formData.umpires}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            >
               <option value="" disabled selected>Select type</option>
              <option value="Test">Test</option>
              <option value="ODI">ODI</option>
              <option value="T20">T20</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Match Captain</label>
            <select
              type="text"
              name="matchCaptain"
              value={formData.matchCaptain}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            >
              <option value="">Select Captain</option>
              {players.map(player =>
                <option key={player.playerId} value={player.name}>
                  {player.name}
                </option>
              )}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold">Match Vice-captain</label>
            <select
              type="text"
              name="matchViceCaptain"
              value={formData.matchViceCaptain}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="">Select Vice-captain</option>
              {players.map(player =>
                <option key={player.playerId} value={player.name}>
                  {player.name}
                </option>
              )}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-black text-sm font-semibold" htmlFor="team.under">Team</label>
            <select
              id="team.under"
              name="team.under"
              value={formData.team.under}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            >
              <option value="">Select team</option>
              {teams.map(team =>
                <option key={team.teamId} value={team.under}>
                  {team.under}-{team.year}
                </option>
              )}
            </select>
          </div>
          <div className="col-span-1 md:col-span-2 ">
            <label className="block text-black text-sm font-semibold">Coaches</label>
            <div className="flex border gap-1 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <input
                type="text"
                className="py-1 px-3 w-[88%] rounded-md cursor-pointer outline-none text-gray-600 "
                value={selectedCoaches.map(coach => coach.coachName).join(", ")} // Show selected coach names, joined by commas
                readOnly
                placeholder='Choose coaches from the list...'
              />
               <button
                  type='button'
                  title='Select coaches'
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center w-[6%] justify-center text-3xl rounded-lg"
                >
                  <RiArrowDropDownLine />
              </button>
              <button
                type="button"
                title='delete'
                className=" items-center w-[6%] justify-center text-red-500 hover:text-red-600 rounded-lg"
                onClick={clearSelectedCoaches}
              >
                <FaTrash/>
              </button>
            </div>
            {errors.coaches && <p className="text-red-500 text-xs mt-1">{errors.coaches}</p>}
            <div className="relative col-span-1 md:col-span-2 ">
              {/* Dropdown Content */}
              {dropdownOpen && (
                <div className="absolute w-full bg-white border border-gray-200 rounded-md shadow-md max-h-40 overflow-y-auto z-10">
                  {coaches.map(coach => (
                    <li key={coach.coachId} className="flex items-center px-3 py-2">
                      <input
                        type="checkbox"
                        id={`coach-${coach.coachId}`}
                        className="mr-2 text-gray-600"
                        checked={selectedCoaches.some(p => p.coachId === coach.coachId)}
                        onChange={() => handleCoachSelect(coach)}
                      />
                      <label
                        htmlFor={`coach-${coach.coachId}`}
                        className="block text-gray-600 text-sm font-semibold"
                      >
                        {coach.name}
                      </label>
                    </li>
                  ))}
                </div>
              )}
            </div>
           
          </div>
          <div className="col-span-1 md:col-span-2 ">
            <label className="block text-black text-sm font-semibold">Opponent Logo</label>
            <input
              id="logo"
              type="file" 
              name="logo" 
              accept="image/*" 
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            />
            {imagePreview &&
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-20 h-20 rounded-full object-cover border border-gray-300"
              />}
              {errors.logo && <p className="text-red-500 text-xs mt-1">{errors.logo}</p>}  
          </div>

          <div className="col-span-1 md:col-span-2 ">
            <button
              onClick={handleEdit}
              type="submit"
              className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
            >
              Save
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

export default EditPopup;
