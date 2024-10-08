import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import axios from 'axios';
import { FaTimes,  FaTrash  } from 'react-icons/fa';

const EditModal = ({ team, onClose }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [players, setPlayers] = useState([]);
  const [formData, setFormData] = useState({...team});
  const [selectedPlayers, setSelectedPlayers] = useState([]);

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

  const handleEdit = async e => {
    e.preventDefault();
    console.log("coachIds;", formData.coaches);
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
        players:[]
      });
      setSelectedPlayers([]);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed!");
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
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
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
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="under">
              Under
            </label>
            <select
              id="under"
              name="under"
              value={formData.under}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full py-1 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter team name"
            >
              <option value="" disabled>Select year</option>
              <option  value="Under 13">Under 13</option>
              <option  value="Under 15">Under 15</option>
              <option  value="Under 17">Under 17</option>
              <option  value="Under 19">Under 19</option>
              <option  value="Richmond Legend Over 50">Richmond Legend Over 50</option>
              <option  value="Richmond Legend Over 40">Richmond Legend Over 40</option>
              <option  value="Old Boys">Old Boys</option>
              <option  value="Academy">Academy</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
              Year
            </label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full py-1 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="captain">
              Captain
            </label>
            <input
              type="text"
              id="captain"
              name="captain"
              value={formData.captain}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full py-1 px-3"
              placeholder="Enter captain's name"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
              Players
            </label>
            <div className="flex border border-gray-300 rounded-lg">
              <input
                type="text"
                className="py-1 px-3 w-[90%] rounded-lg "
                value={selectedPlayers.map(player => (player.name.split(' ').slice(-2).join(' '))).join(", ")} // Show selected coach names, joined by commas
                readOnly
              />
              <button
                type="button"
                className="flex items-center w-[10%] justify-center text-red-600 hover:text-red-700 rounded-lg"
                onClick={clearSelectedPlayers}
              >
                <FaTrash/>
              </button>
            </div>
            <div className="relative">
              <div className="border overflow-auto h-40 border-gray-300 rounded-lg mt-2 px-3 py-1">
                {players.map((player) => (
                  <div key={player.playerId} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`player-${player.playerId}`}
                      className="mr-2"
                      checked={selectedPlayers.some(p => p.playerId === player.playerId)}
                      onChange={() => handlePlayerSelect(player)}
                    />
                    <label htmlFor={`player-${player.playerId}`} className="text-gray-700">
                      {player.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleEdit}
              className="bg-[#480D35] hover:bg-opacity-100 bg-opacity-95 text-white py-2 px-4 w-full rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
