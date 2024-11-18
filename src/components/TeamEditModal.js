import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import axios from 'axios';
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { FaTimes,  FaTrash  } from 'react-icons/fa';

const EditModal = ({ team, onClose, isSubmitted }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API_URL = process.env.REACT_APP_API_URL;
  const [players, setPlayers] = useState([]);
  const [formData, setFormData] = useState({...team, updatedBy:user.username, updatedOn:new Date().toISOString()});
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  console.log("teams:", team);
  useEffect(() => {
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
      axios
        .get(`${API_URL}teams/${team.teamId}/players`)
        .then(response => {
          const members = response.data;
          setSelectedPlayers(members);
          console.log("players Data:", members);
        })
        .catch(error => {
          console.error("There was an error fetching the player data!", error);
        });
  }, []);
  

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
      // Validate selected coaches
    if (selectedPlayers.length === 0) {
      newErrors.player = "Please select players.";
    };
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEdit = async e => {
    e.preventDefault();
    console.log("coachIds;", formData.coaches);
    if (!validateForm()) {
      message.error("Please fix validation errors before submitting");
      return;
    };
    setUploading(true);
    try {
      // Make a POST request to the backend API
      const response = await axios.put(
        `${API_URL}teams/${team.teamId}`,
        formData
      );
      console.log("Form update succedded: ", response.data);
      message.success("Successfull!");
      setFormData({
        under:'',
        year:'',
        captain:'',
        viceCaptain:'',
        players:[],
        updatedOn:'',
        updatedBy:''
      });
      setSelectedPlayers([]);
      isSubmitted();
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

  const handlePlayerSelect = player => {
    if (selectedPlayers.includes(player)) {
      // If player is already selected, remove them
      setSelectedPlayers(selectedPlayers.filter(p => p.playerId !== player.playerId));
    } else {
      // Otherwise, add the player to the list
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const clearSelectedPlayers = () => {
    setSelectedPlayers([]); // Clear all selected players
  };
  
  useEffect(
    () => {
      // Update formData when selected coaches change
      setFormData({
        ...formData,
        players: selectedPlayers.map(player => ({ playerId: player.playerId }))
      });
    },
    [selectedPlayers]
  );

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1900; i--) {
    years.push(i);
  }

  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-75 overflow-y-auto py-10 min-h-screen">
      <div className=' flex items-center justify-center'>
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} m-5 md:m-0 p-8 rounded-3xl shadow-lg max-w-md w-full relative`}>
          <div className='flex justify-end '>
            <button 
              onClick={onClose} 
              className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <FaTimes/>
            </button>
          </div>  
        <h3 className="text-xl text-[#480D35] font-bold mb-4">Edit Team</h3>
        <form >
          <div className="mb-2">
            <label className="block text-black text-sm font-semibold" htmlFor="under">
              Under
            </label>
            <select
              id="under"
              name="under"
              value={formData.under}
              onChange={handleChange}
              className="border border-gray-300 text-gray-600 rounded-md w-full py-1 px-3 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="Enter team name"
            >
              <option value="" disabled>Select team</option>
              <option  value="Under 9">Under 9</option>
              <option  value="Under 11">Under 11</option>
              <option  value="Under 13">Under 13</option>
              <option  value="Under 15">Under 15</option>
              <option  value="Under 17">Under 17</option>
              <option  value="Under 19">Under 19</option>
              <option  value="Academy Under 9">Academy Under 9</option>
              <option  value="Academy Under 11">Academy Under 11</option>
              <option  value="Academy Under 13">Academy Under 13</option>
              <option  value="Academy Under 15">Academy Under 15</option>
              <option  value="Academy Under 17">Academy Under 17</option>
              <option  value="Academy Under 19">Academy Under 19</option>
              <option  value="Richmond Legend Over 50">Richmond Legend Over 50</option>
              <option  value="Richmond Legend Over 40">Richmond Legend Over 40</option>
              <option  value="Old Boys">Old Boys</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-black text-sm font-semibold" htmlFor="year">
              Year
            </label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="border border-gray-300 text-gray-600 rounded-md w-full py-1 px-3 focus:outline-none focus:ring-1 focus:ring-[#00175f] "
            >
              <option value="" disabled>Select year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-black text-sm font-semibold">Captain</label>
            <select
              type="text"
              id='captain'
              name="captain"
              value={formData.captain}
              onChange={handleChange}
              className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
            >
              <option value="">Select Captain</option>
              {players.map(player =>
                <option key={player.playerId} value={player.name}>
                  {player.name}
                </option>
              )}
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-black text-sm font-semibold">Vice Captain</label>
            <select
              type="text"
              name="viceCaptain"
              value={formData.viceCaptain}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="">Select Vice Captain</option>
              {players.map(player =>
                <option key={player.playerId} value={player.name}>
                  {player.name}
                </option>
              )}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold" htmlFor="year">
              Players
            </label>
            <div tabIndex={-1} className="flex text-gray-600 border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-[#00175f] focus-within:outline-none">
              <input
                type="text"
                className="border-0 py-1 px-3 w-[90%] rounded-md cursor-pointer focus-within:ring-0 focus-within:ring-transparent focus-within:outline-none text-gray-600"
                value={selectedPlayers.map(player => (player.name.split(' ').slice(-2).join(' '))).join(", ")} // Show selected coach names, joined by commas
                readOnly
                placeholder='Choose players from the list...'
              />
              <button
                type="button"
                className="flex items-center w-[10%] justify-center text-red-600 hover:text-red-700 rounded-md"
                onClick={clearSelectedPlayers}
              >
                <FaTrash/>
              </button>
            </div>
            {errors.player && <p className="text-red-500 text-xs mt-1">{errors.player}</p>}
            <div className="relative">
              <div className="border custom-scrollbar overflow-hidden hover:ring-1 hover:ring-[#00175f] hover:overflow-auto h-40 border-gray-300 rounded-md mt-2 px-3 py-1">
                {players.map((player) => (
                  <div key={player.playerId} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`player-${player.playerId}`}
                      className="mr-2"
                      checked={selectedPlayers.some(p => p.playerId === player.playerId)}
                      onChange={() => handlePlayerSelect(player)}
                    />
                    <label htmlFor={`player-${player.playerId}`} className="block text-black text-sm font-semibold">
                      {player.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              onClick={handleEdit}
              className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      </div>
      {uploading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
        )}
    </div>
  );
};

export default EditModal;
