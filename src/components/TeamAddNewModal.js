// src/components/AddNewModal.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { message } from 'antd';
import { FaTimes,  FaTrash } from 'react-icons/fa';

const AddNewModal = ({  onClose }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [formData, setFormData] = useState({
    under:'',
    year:'',
    captain:'',
    players:[]
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/admin/players/all`)
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

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Make a POST request to the backend API
      const response = await axios.post(
        "http://localhost:5000/api/teams/add",
        formData
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfull!");
      setFormData({
        under:'',
        year:'',
        captain:''
      });
      setSelectedPlayers([]);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed!");
    }
  };

  const handlePlayerSelect = player => {
    // Avoid adding duplicate coaches
    if (!selectedPlayers.includes(player)) {
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
      <div className="bg-white p-8 pt-2 rounded-lg shadow-lg w-full max-w-md">
        <div className='flex justify-end '>
            <button 
              onClick={onClose} 
              className="flex relative items-center justify-end h-10 w-10 cursor-pointer text-xl text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <FaTimes/>
            </button>
          </div>
        <h3 className="text-xl text-[#480D35] font-bold mb-4">Add New Team</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="under">
              Under
            </label>
            <select
              id="under"
              name="under"
              value={formData.under}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full py-2 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter team name"
            >
              <option value="" disabled>Select year</option>
              <option  value="Under 13">Under 13</option>
              <option  value="Under 15">Under 15</option>
              <option  value="Under 17">Under 17</option>
              <option  value="Under 19">Under 19</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
              Year
            </label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full py-2 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>Select year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="captain">
              Captain
            </label>
            <input
              type="text"
              id="captain"
              name="captain"
              value={formData.captain}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full py-2 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter captain's name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
              Players
            </label>
            <div className="flex border border-gray-300 rounded-lg">
              <input
                type="text"
                className="py-2 px-3 w-[80%] rounded-lg "
                value={selectedPlayers.map(player => (player.name.split(' ').slice(-2).join(' '))).join(", ")} // Show selected coach names, joined by commas
                readOnly
              />
              <button
                type="button"
                className="flex items-center w-[20%] justify-center text-red-700 hover:text-red-600 rounded-lg"
                onClick={clearSelectedPlayers}
              >
                <FaTrash/>
              </button>
            </div>
            <select
              className="w-full px-3 py-1 border border-gray-200 rounded mb-2"
              onChange={e =>
                handlePlayerSelect(
                  players.find(
                    player => player.playerId === parseInt(e.target.value)
                  )
                )}
            >
              <option value="" disabled selected >Select players</option>
              {players.map((player) => (
                <option key={player.playerId} value={player.playerId}>
                  {player.name.split(' ').slice(-2).join(' ')}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end space-x-2 ">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#480D35] text-white w-full py-2 px-4 rounded-lg hover:bg-[#5D1245]"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewModal;
