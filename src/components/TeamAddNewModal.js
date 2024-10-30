// src/components/AddNewModal.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { message } from 'antd';
import { FaTimes,  FaTrash } from 'react-icons/fa';

const AddNewModal = ({  onClose }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [formData, setFormData] = useState({
    under:'',
    year:'',
    captain:'',
    players:[]
  });
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});

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
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) {
      message.error("Please fix validation errors before submitting");
      return;
    };
    setUploading(true);
    try {
      // Make a POST request to the backend API
      const response = await axios.post(
        `${API_URL}teams/add`,
        formData
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfull!");
      setFormData({
        under:'',
        year:'',
        captain:'',
        players:[]
      });
      setSelectedPlayers([]);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} p-8 rounded-lg shadow-lg max-w-md w-full relative`}>
        <div className='flex justify-end '>
            <button 
              onClick={onClose} 
              className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <FaTimes/>
            </button>
          </div>
        <h3 className="text-xl text-[#480D35] font-bold mb-4">Add New Team</h3>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-2">
            <label className="block text-black text-sm font-semibold" >
              Under
            </label>
            <select
              name="under"
              value={formData.under}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-1 px-3 text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              placeholder="Enter team name"
              required
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
            <label className="block text-black text-sm font-semibold" >
              Year
            </label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="border border-gray-300 rounded-md w-full py-1 px-3 text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="" disabled>Select year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-black text-sm font-semibold">Captain</label>
            <select
              type="text"
              name="captain"
              value={formData.captain}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              required
            >
              <option value="">Select Captain</option>
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
            <div  tabIndex={-1} className="flex border text-gray-600 border-gray-300 rounded-md  focus-within:ring-1 focus-within:ring-[#00175f] focus-within:outline-none">
              <input
                type="text"
                className="border-0 py-1 px-3 w-[90%] rounded-md focus:outline-non pointer-events-none"
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
              <div className="border overflow-hidden hover:ring-1 hover:ring-[#00175f] hover:overflow-auto h-40 border-gray-300 rounded-md mt-2 px-3 py-1">
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
          <div className="flex justify-end space-x-2 ">
            <button
               type="submit"
              className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
            >
              Add
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

export default AddNewModal;
