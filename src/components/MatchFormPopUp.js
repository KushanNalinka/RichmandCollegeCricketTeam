import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { storage } from '../config/firebaseConfig'; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase storage utilities
import { FaTimes, FaTrash } from "react-icons/fa";
import { MdPeople } from 'react-icons/md';

const FormPopup = ({  onClose }) => {
  const [coaches, setCoaches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedCoachNames, setSelectedCoachNames] = useState([]);
  const [selectedCoaches, setSelectedCoaches] = useState([]);
  const [imagePreview, setImagePreview] = useState();
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    venue: "",
    opposition: "",
    logo:"",
    tier: "",
    division: "",
    umpires: "",
    type: "",
    matchCaptain: "",
    team: {
      teamId: ""
    },
    coaches: []
  });

  const formatDate = (date) => {
    // Format using plain JavaScript
    const newDate = new Date(date);
    return newDate.toISOString().split("T")[0]; // YYYY-MM-DD

  };


  useEffect(() => {
    // Fetch player data for playerId 4
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

  const handleChange = e => {
    const { name, value,files } = e.target;
    if (name === "date") {
      setFormData({
        ...formData,
        [name]: formatDate(value) // Format date before setting it
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
    } else if (files && files[0]) {
      const file = files[0];
      setImagePreview(URL.createObjectURL(file));
      setFormData({
        ...formData,
        [name]: file
      });
      setIsImageAdded(true);
    }else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("coachIds;", formData.coaches);
    setUploading(true);
    try {
      let imageURL = formData.logo;

      // Upload image if an image file is added
      if (formData.logo instanceof File) {
        imageURL = await handleImageUpload(formData.logo);
      }
      const formattedDate = formatDate(formData.date); // Ensure date is formatted before submitting

      const matchData = {
        ...formData,
        logo: imageURL, // Assign the uploaded image URL to formData
        date: formattedDate 
      };
      // Make a POST request to the backend API
      const response = await axios.post(
        `${API_URL}matches/add`,
        matchData
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfull!");
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
        team: {
          teamId: ""
        },
        coaches: []
      })
      setImagePreview();
      setSelectedCoaches([]);
      setUploading(false);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed!");
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
      coaches: selectedCoaches.map(coach => ({ coachId: coach.coachId, coachName: coach.coachName }))
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
    <div
      className={"fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center"}
    >
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} p-8 rounded-lg shadow-lg max-w-lg w-full relative`}>
        <div className="flex justify-end items-center ">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-[#480D35]">
            Add Match Details
          </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
        >
          <div>
            <label className="block text-black text-sm font-semibold">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-semibold">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-semibold">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-semibold">Opponent</label>
            <input
              type="text"
              name="opposition"
              value={formData.opposition}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-semibold">Tier</label>
            <select
              type="text"
              name="tier"
              value={formData.tier}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="" disabled selected>Select tier</option>
              <option value="Tier 1">Tier A</option>
              <option value="Tier 2">Tier B</option>
            </select>
          </div>
          <div>
            <label className="block text-black text-sm font-semibold">Division</label>
            <select
              type="text"
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="" disabled selected>Select division</option>
              <option value="Division 1"> Division 1</option>
              <option value="Division 2">Division 2</option>
            </select>
          </div>
          <div>
            <label className="block text-black text-sm font-semibold">Umpires</label>
            <input
              type="text"
              name="umpires"
              value={formData.umpires}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
          <div>
            <label className="block text-black text-sm font-semibold">Match Captain</label>
            <input
              type="text"
              name="matchCaptain"
              value={formData.matchCaptain}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            />
          </div>
        
          <div>
            <label className="block text-black text-sm font-semibold">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
               <option value="" disabled selected>Select type</option>
              <option value="Test">Test</option>
              <option value="ODI">ODI</option>
              <option value="T20">T20</option>
            </select>
          </div>

          <div>
            <label className="block text-black text-sm font-semibold">Team</label>
            <select
              name="team.teamId"
              value={formData.team.teamId}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="">Select team</option>
              {teams.map(team =>
                <option key={team.teamId} value={team.teamId}>
                  {team.under}
                </option>
              )}
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-black text-sm font-semibold">Coaches</label>
            <div className="flex border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]">
              <input
                type="text"
                className="py-1 px-3 w-[88%] rounded-md outline-none "
                value={selectedCoaches.map(coach => coach.coachName).join(", ")} // Show selected coach names, joined by commas
                readOnly
                placeholder='Choose coaches from the list...'
              />
               <button
                  type='button'
                  title='Select coaches'
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center w-[6%] justify-center text-2xl text-green-500 hover:text-green-600 rounded-lg"
                >
                  <MdPeople/>
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
            <div className="relative col-span-1">
              {/* Dropdown Content */}
              {dropdownOpen && (
                <div className="absolute w-full bg-white border border-gray-200 rounded-md shadow-md max-h-40 overflow-y-auto z-10">
                  {coaches.map(coach => (
                    <li key={coach.coachId} className="flex items-center px-3 py-2">
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
                    </li>
                  ))}
                </div>
              )}
            </div>
           
          </div>
          <div  className="col-span-2 ">
            <label className="block text-black text-sm font-semibold">Logo</label>
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
          </div>

          <div className="col-span-2 ">
            <button
              type="submit"
              className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
            >
              Add Match
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

export default FormPopup;
