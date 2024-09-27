// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';

// const FormPopup = ({ isOpen, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     matchName: '',
//     time: '',
//     venue: '',
//     opponent: '',
//     tier: '',
//     division: '',
//     umpire: '',
//     type: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">Add Match Details</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-600 hover:text-gray-800 text-2xl"
//           >
//             <FaTimes />
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block mb-2 text-gray-700">Match Name</label>
//               <input
//                 type="text"
//                 name="matchName"
//                 value={formData.matchName}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Time</label>
//               <input
//                 type="datetime-local"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Venue</label>
//               <input
//                 type="text"
//                 name="venue"
//                 value={formData.venue}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Opponent</label>
//               <input
//                 type="text"
//                 name="opponent"
//                 value={formData.opponent}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Tier</label>
//               <input
//                 type="text"
//                 name="tier"
//                 value={formData.tier}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Division</label>
//               <input
//                 type="text"
//                 name="division"
//                 value={formData.division}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Umpire</label>
//               <input
//                 type="text"
//                 name="umpire"
//                 value={formData.umpire}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Type</label>
//               <input
//                 type="text"
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mt-6 flex justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-4"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//             >
//               Add Match
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default FormPopup;
// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import { message } from 'antd';
// import { FaTimes } from 'react-icons/fa';

// const FormPopup = ({ isOpen, onClose}) => {
//   const [coaches, setCoaches] = useState([]);
//   const [teams, setTeams] = useState([]);
//   const [selectedCoach, setSelectedCoach] = useState('');
//   const [coachInput, setCoachInput] = useState(""); // For tracking input field
//   const [filteredCoaches, setFilteredCoaches] = useState([]);
//   const [formData, setFormData] = useState({
//     date:'' ,
//     time: '',
//     venue: '',
//     opposition: '',
//     tier: '',
//     division: '',
//     umpires: '',
//     type: '',
//     matchCaptain:'',
//     coaches: [],
//     team: ''
//   });
//   useEffect(() => {
//     // Fetch player data for playerId 4

//       axios
//       .get(`http://localhost:5000/api/coaches/all`)
//       .then((response) => {
//         const coaches = response.data;
//         setCoaches(coaches);
//         console.log("Coaches Data:", coaches);
//       })
//       axios
//       .get(`http://localhost:5000/api/teams/all`)
//       .then((response) => {
//         const teams = response.data;
//         setTeams(teams);
//         console.log("Teams Data:", teams);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the player data!", error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make a POST request to the backend API
//       const response = await axios.post(
//         'http://localhost:5000/api/matches/add',
//         {...formData, team: { teamId: formData.team }, coaches: formData.coaches.map(coachId => ({ coachId })) }
//       );
//         console.log("Form submitted succedded: ", response.data);
//         message.success("Successfull!");
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         message.error("Failed!");
//       }
//   };
//   const handleCoachInputChange = (e) => {
//     const value = e.target.value;
//     setCoachInput(value);
//     if (value) {
//       // Filter coaches based on input
//       const filtered = coaches.filter((coach) =>
//         coach.name.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredCoaches(filtered);
//     } else {
//       setFilteredCoaches([]);
//     }
//   };

//   // Add selected coach to the array
//   const handleCoachSelect = (coach) => {
//     if (!formData.coaches.some(c => c.coachId === coach.coachId)) {
//       setFormData({
//         ...formData,
//         coaches: [...formData.coaches, { coachId: coach.coachId, name: coach.name }]
//       });
//     }
//     setCoachInput(""); // Clear input after selecting
//     setFilteredCoaches([]); // Clear filtered options
//   };

//   // Remove selected coach
//   const handleRemoveCoach = (coachId) => {
//     setFormData({
//       ...formData,
//       coaches: formData.coaches.filter(c => c.coachId !== coachId)
//     });
//   };

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-70 flex items-center pt-10 justify-center ${isOpen ? 'block' : 'hidden'}`}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold text-[#480D35]">Add Match Details</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-600 hover:text-gray-800 text-2xl"
//           >
//             <FaTimes />
//           </button>
//         </div>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-1">
//             <div>
//               <label className="block mb-2 text-gray-700">Date</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Time</label>
//               <input
//                 type="time"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Venue</label>
//               <input
//                 type="text"
//                 name="venue"
//                 value={formData.venue}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Opponent</label>
//               <input
//                 type="text"
//                 name="opposition"
//                 value={formData.opposition}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Tier</label>
//               <input
//                 type="text"
//                 name="tier"
//                 value={formData.tier}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Division</label>
//               <input
//                 type="text"
//                 name="division"
//                 value={formData.division}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Umpires</label>
//               <input
//                 type="text"
//                 name="umpires"
//                 value={formData.umpires}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Match Captain</label>
//               <input
//                 type="text"
//                 name="matchCaptain"
//                 value={formData.matchCaptain}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//           <div className="col-span-2">
//             <label className="block mb-2 text-gray-700">Select Coach</label>
//             <div className="flex">
//               <select
//                 value={selectedCoach}
//                 onChange={(e) => setSelectedCoach(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               >
//                 <option value="">Select a coach</option>
//                 {coaches.map((coach) => (
//                   <option key={coach.coachId} value={coach.coachId}>{coach.name}</option>
//                 ))}
//               </select>
//               <button
//                 type="button"
//                 onClick={handleCoachAdd}
//                 className="ml-2 bg-[#480D35] text-white px-3 py-2 rounded-lg"
//               >
//                 Add Coach
//               </button>
//             </div>
//             <div className="mt-2">
//               {formData.coaches.map((coach) => (
//                 <div key={coach.coachId} className="flex justify-between items-center mb-2">
//                   <span>{coach.name}</span>
//                   <button
//                     type="button"
//                     onClick={() => handleCoachRemove(coach.coachId)}
//                     className="text-red-500"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Team</label>
//               <select
//                 name="team"
//                 value={formData.team}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               >
//                 <option value="">Select status</option>
//                 {teams.map (( team) =>
//                     <option key={team.teamId} value={team.teamId}>{team.under}</option>
//                 )}

//               </select>
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Type</label>
//               <select
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               >
//                 <option value="Test">Test</option>
//                 <option value="ODI">ODI</option>
//                 <option value="T20">T20</option>
//               </select>
//             </div>

//           <div className='col-span-2 mt-4'>
//             <button
//               type="submit"
//               className="bg-[#480D35] hover:bg-[#5D1245] text-white px-4 py-2 w-full rounded-lg"
//             >
//               Add Match
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormPopup;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { FaTimes, FaTrash } from "react-icons/fa";

const FormPopup = ({ isOpen, onClose }) => {
  const [coaches, setCoaches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedCoachNames, setSelectedCoachNames] = useState([]);
  const [selectedCoaches, setSelectedCoaches] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    venue: "",
    opposition: "",
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
  useEffect(() => {
    // Fetch player data for playerId 4

    axios.get(`http://localhost:5000/api/coaches/all`).then(response => {
      const coaches = response.data;
      setCoaches(coaches);
      console.log("Coaches Data:", coaches);
    });
    axios
      .get(`http://localhost:5000/api/teams/all`)
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

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("coachIds;", formData.coaches);
    try {
      // Make a POST request to the backend API
      const response = await axios.post(
        "http://localhost:5000/api/matches/add",
        formData
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfull!");
      setSelectedCoaches(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed!");
    }
  };
  const handleCoachSelect = coach => {
    // Avoid adding duplicate coaches
    if (!selectedCoaches.includes(coach)) {
      setSelectedCoaches([...selectedCoaches, coach]);
    }
  };

  const clearSelectedCoaches = () => {
    setSelectedCoaches([]); // Clear all selected coaches
  };

  useEffect(
    () => {
      // Update formData when selected coaches change
      setFormData({
        ...formData,
        coaches: selectedCoaches.map(coach => ({ coachId: coach.coachId }))
      });
    },
    [selectedCoaches]
  );

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 flex items-center pt-10 justify-center ${isOpen
        ? "block"
        : "hidden"}`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#480D35]">
            Add Match Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            <FaTimes />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-1"
        >
          <div>
            <label className="block mb-2 text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Venue</label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Opponent</label>
            <input
              type="text"
              name="opposition"
              value={formData.opposition}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Tier</label>
            <input
              type="text"
              name="tier"
              value={formData.tier}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Division</label>
            <input
              type="text"
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Umpires</label>
            <input
              type="text"
              name="umpires"
              value={formData.umpires}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Match Captain</label>
            <input
              type="text"
              name="matchCaptain"
              value={formData.matchCaptain}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          {/* <div>
            <label className="block mb-2 text-gray-700">Coaches</label>
            <input
              type="text"
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg bg-gray-100"
              value={selectedCoachNames.join(", ")}  // Show coach names, joined by commas
              readOnly
            />
            <select
              name="coaches"
              value={formData.coaches.map(coach => coach.coachId)}
              onChange={handleCoachesChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
              multiple
            >
              <option value="">Select status</option>
              {coaches.map ((coach) =>
                  <option key={coach.coachId} value={coach.coachId}>{coach.name}</option>
              )}
              
            </select>
          </div> */}
          <div>
            <label className="block mb-2 text-gray-700">Coaches</label>
            <div className="flex border border-gray-300 rounded-lg">
              <input
                type="text"
                className="py-2 px-3 w-[80%] rounded-lg "
                value={selectedCoaches.map(coach => coach.name).join(", ")} // Show selected coach names, joined by commas
                readOnly
              />
              <button
                type="button"
                className="flex items-center w-[20%] justify-center text-red-700 hover:text-red-600 rounded-lg"
                onClick={clearSelectedCoaches}
              >
                <FaTrash/>
              </button>
            </div>
            <select
              className="w-full px-3 py-1 border border-gray-200 rounded mb-2"
              onChange={e =>
                handleCoachSelect(
                  coaches.find(
                    coach => coach.coachId === parseInt(e.target.value)
                  )
                )}
            >
              <option value="" disabled selected>Select coaches</option>
              {coaches.map(coach =>
                <option key={coach.coachId} value={coach.coachId}>
                  {coach.name}
                </option>
              )}
            </select>
           
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Team</label>
            <select
              name="team.teamId"
              value={formData.team.teamId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select status</option>
              {teams.map(team =>
                <option key={team.teamId} value={team.teamId}>
                  {team.under}
                </option>
              )}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="Test">Test</option>
              <option value="ODI">ODI</option>
              <option value="T20">T20</option>
            </select>
          </div>

          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="bg-[#480D35] hover:bg-[#5D1245] text-white px-4 py-2 w-full rounded-lg"
            >
              Add Match
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
