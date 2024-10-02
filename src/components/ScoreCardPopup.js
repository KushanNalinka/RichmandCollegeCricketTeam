import React, { useState, useEffect, useReducer  } from "react";
import axios from "axios";
import { message } from "antd";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

const ScoreCardPopup = ({  onClose, matchId }) => {
  const [currentPlayerStackId, setCurrentPlayerStackId] = useState();
  const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [pressedPlus, setPressedPlus] = useState(null);
  const [isNewScoreAdded, setIsNewScoreAdded] = useState(false);
  const [matchStack, setMatchStack] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);
  const [players, setPlayers] = useState([]);
  const [formData, setFormData] = useState({
    inning: 1,
    runs: 0,
    wickets: 0,
    fours: 0,
    sixers: 0,
    fifties: 0,
    centuries: 0,
    balls: 0,
    overs: 0,
    runsConceded: 0,
    player: {
      playerId: 0,
      name: "",
    },
    match: {
      matchId: matchId, // Use the matchId passed as prop
    },
  });
  useEffect(() => {
        const fetchPlayerStat = async () => {
          try {
            const players = await axios.get("admin/players/all"); // Replace with your players endpoint
            setPlayers(players.data);
            console.log("players in scores:", players.data);
            console.log("matchId for player Stack:", matchId);
            const stats = await axios.get(`playerStats/match/player-stats?matchId=${matchId}`); // Replace with your players endpoint
            setPlayerStats(stats.data);
            console.log("playerStats in scores:", stats.data);
          } catch (error) {
            console.error("Error fetching players:", error);
          }
        };
    
        fetchPlayerStat();
      }, [matchId]);

  const handleInputChange = e => {
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

  //add player score
  const handleSubmit =async e => {
    e.preventDefault();
    console.log("submit Data:", formData);
    try {
      const response = await axios.post("playerStats/add", formData);
      console.log("Player stats saved successfully:", response.data);
      // Optionally, add the new stat to the local state to reflect in the UI
      //setMatchStack([...matchStack, response.data]);
      setFormData({
        inning: "",
        runs: 0,
        wickets: 0,
        fours: 0,
        sixers: 0,
        fifties: 0,
        centuries: 0,
        balls: 0,
        overs: 0,
        runsConceded: 0,
        player: {
          playerId: 0,
          name: "",
        },
        match: {
          matchId: "", // Use the matchId passed as prop
        },
      });
      setIsAdding(false);
      setIsNewScoreAdded(!isNewScoreAdded);
    } catch (error) {
      console.error("Error saving player stats:", error);
    }
  };

  const handleAddRow = matchId => {
    setPressedPlus(matchId);
    setIsAdding(!isAdding);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit(formData);
  // };
  //edit player score
  const handleEditPlayerStack = player => {
    setCurrentPlayerStackId(player.id);
    setIsEditButtonPressed(true);
    console.log("playerId stats: ", player.player.playerId);
    setFormData({
      runs: player.runs,
      wickets: player.wickets,
      overs: player.overs,
      runsConceded: player.runsConceded,
      fours: player.fours,
      sixers: player.sixers,
      fifties: player.fifties,
      centuries: player.centuries,
      balls: player.balls,
      match:{
        matchId: matchId,
      },
      player:{
        playerId: player.player.playerId,
        name: player.player.name || "",
      }
    });
  };
  const handleSaveEdit = async id => {
     console.log("Stats id: ", id);
     console.log("form stat data: ", formData);
    try {
      // Make a POST request to the backend APIonsole.log{"id "}
      const response = await axios.put(
        `playerStats/update/${id}`,
        formData
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfull!");
      setTimeout(() => {
          window.location.reload();
        }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed!");
    }
  };
  const handleEditClose = () => {
    setIsEditButtonPressed(false);
  }
  //delete player score
  const handleDelete = async id => {
    try{
      const deleteMatch = await axios.delete(`playerStats/${id}`)
      message.success("Successfully Deleted!");
      console.log("Delete row:", id);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
  } catch (error) {
    console.error("Error deleting match:", error);
    message.error("Failed!");
  }
  };

  return (
    <div
      className={`fixed inset-0  bg-black bg-opacity-70 flex p-20 justify-center`}
    >
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-7xl">
        <div className=" overflow-auto">
          <h className="flex text-xl py-3 font-bold text-[#480D35]">Add Player Score Details of the Match</h>
          <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md">
            <thead className=" bg-[#480D35] text-white rounded">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Player Name
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Runs
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Wickets
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Overs
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Run Conceded
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  4s
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  6s
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  50s
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  100s
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Balls
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  {" "}Actions
                </th>
              </tr>
            </thead>

            <tbody className=" divide-y  divide-gray-300">
              {playerStats && playerStats
                .map((player) =>
                  <tr
                    key={player.id}
                    className=" hover:bg-gray-50 h-full align-middle"
                  >
                    {isEditButtonPressed && player.id === currentPlayerStackId?
                       <>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="text"
                              value={formData.player.name}
                              placeholder="Enter Name"
                              className="border rounded p-1"
                              readOnly
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="runs"
                              value={formData.runs}
                              onChange={handleInputChange}
                              placeholder="Enter runs"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="wickets"
                              value={formData.wickets}
                              onChange={handleInputChange}
                              placeholder="Enter Wickets"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="overs"
                              value={formData.overs}
                              onChange={handleInputChange}
                              placeholder="Enter Overs"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="runsConceded"
                              value={formData.runsConceded}
                              onChange={handleInputChange}
                              placeholder="Enter Run Conceded"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="fours"
                              value={formData.fours}
                              onChange={handleInputChange}
                              placeholder="Enter fours"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="sixers"
                              value={formData.sixers}
                              onChange={handleInputChange}
                              placeholder="Enter sixes"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="fifties"
                              value={formData.fifties}
                              onChange={handleInputChange}
                              placeholder="Enter fifties"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="centuries"
                              value={formData.centuries}
                              onChange={handleInputChange}
                              placeholder="Enter hundreds"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="balls"
                              value={formData.balls}
                              onChange={handleInputChange}
                              placeholder="Enter balls"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="flex px-4 whitespace-nowrap text-sm space-x-2 h-10">
                            <button
                            title="Save Changes"
                              onClick={() => handleSaveEdit(player.id)}
                              className="text-green-500 hover:text-green-700 font-bold rounded"
                            >
                              <FaSave />
                            </button>
                            <button
                              title="Close"
                                onClick={handleEditClose}
                                className="text-red-500 hover:text-red-700 rounded font-bold"
                              >
                                <FaWindowClose />
                                
                            </button>
                          </td>
                        </>
                      : <>
                          <td className=" px-4 h-10 whitespace-nowrap text-sm text-gray-800 font-bold">
                            {player.player.name}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.runs}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.wickets}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.overs}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.runsConceded}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.fours}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.sixers}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.fifties}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.centuries}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.balls}
                          </td>
                          <td className="px-4 flex space-x-2 h-10 whitespace-nowrap text-sm text-gray-600">
                            <button
                              title="Edit"
                              onClick={() => handleEditPlayerStack(player)}
                              className=" text-green-500 hover:text-green-700"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(player.id)}
                              title="Delete"
                              className="text-red-500 hover:text-red-700"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </>
                      }
                  </tr>
                )}

              {isAdding &&
                <tr>
                  <td className="border px-4 py-2">
                    <select
                      type="number"
                      name="player.playerId"
                      value={formData.player.playerId}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      className="border rounded p-1"
                    >
                       <option value="">Select Player</option>
                         {players.map((player) => (
                           <option key={player.playerId} value={player.playerId}>
                           {player.name}
                           </option>
                         ))}
                    </select>
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="runs"
                      onChange={handleInputChange}
                      placeholder="Enter runs"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="wickets"
                      onChange={handleInputChange}
                      placeholder="Enter Wickets"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="overs"
                      onChange={handleInputChange}
                      placeholder="Enter Overs"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="runsConceded"
                      onChange={handleInputChange}
                      placeholder="Enter Runs Conceded"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="fours"
                      onChange={handleInputChange}
                      placeholder="Enter fours"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="sixers"
                      onChange={handleInputChange}
                      placeholder="Enter sixes"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="fifties"
                      onChange={handleInputChange}
                      placeholder="Enter fifties"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="centuries"
                      onChange={handleInputChange}
                      placeholder="Enter hundreds"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="balls"
                      onChange={handleInputChange}
                      placeholder="Enter balls"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={handleSubmit}
                      className="bg-[#480D35] hover:bg-baseRed2 text-white py-1 px-3 rounded"
                    >
                      Add
                    </button>
                  </td>
                </tr>}
              <tr>
                <div className="flex w-full top-0 mx-4 mb-2 ">
                  <button
                    title="Add New"
                    onClick={() => handleAddRow(matchId)}
                    className="bg-[#480D35] hover:bg-baseRed2 text-sm text-white font-bold p-1 rounded-full"
                  >
                    {!isAdding ? <FaPlus /> : <FaMinus />}
                  </button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-4"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#480D35] text-white px-4 py-2 rounded-lg"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};
export default ScoreCardPopup;

// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios for making API requests
// import { FaMinus, FaPlus, FaEdit, FaTrash, FaWindowClose, FaSave } from "react-icons/fa";

// const ScoreCardPopup = ({ isOpen, onClose, matchId }) => {
//   const [players, setPlayers] = useState([]);
//   const [currentPlayerStackId, setCurrentPlayerStackId] = useState();
//   const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);
//   const [isAdding, setIsAdding] = useState(false);
//   const [pressedPlus, setPressedPlus] = useState(null);
//   const [isNewScoreAdded, setIsNewScoreAdded] = useState(false);
//   const [matchStack, setMatchStack] = useState([]);

//   // Form Data State
//   const [formData, setFormData] = useState({
//     inning: "1",
//     runs: "",
//     wickets: "",
//     overs: "",
//     runsConceded: "",
//     fours: "",
//     sixers: "",
//     fifties: "",
//     centuries: "",
//     balls: "",
//     playerId: "",
//   });

//   // Fetch players from API to populate the dropdown
//   useEffect(() => {
//     const fetchPlayers = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/admin/players/all"); // Replace with your players endpoint
//         setPlayers(response.data);
//       } catch (error) {
//         console.error("Error fetching players:", error);
//       }
//     };

//     fetchPlayers();
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Save new score details to backend
//   const handleSavePlayer = async (e) => {
//     e.preventDefault();

//     // Create the payload to match your backend API
//     const payload = {
//       inning: formData.inning,
//       runs: Number(formData.runs),
//       wickets: Number(formData.wickets),
//       fours: Number(formData.fours),
//       sixers: Number(formData.sixers),
//       fifties: Number(formData.fifties),
//       centuries: Number(formData.centuries),
//       balls: Number(formData.balls),
//       overs: Number(formData.overs),
//       runsConceded: Number(formData.runsConceded),
//       player: {
//         playerId: Number(formData.playerId),
//       },
//       match: {
//         matchId: matchId, // Use the matchId passed as prop
//       },
//     };

//     try {
//       const response = await axios.post("http://localhost:8080/api/playerStats/add", payload);
//       console.log("Player stats saved successfully:", response.data);
//       // Optionally, add the new stat to the local state to reflect in the UI
//       setMatchStack([...matchStack, response.data]);
//       setFormData({
//         inning: "1",
//         runs: "",
//         wickets: "",
//         overs: "",
//         runsConceded: "",
//         fours: "",
//         sixers: "",
//         fifties: "",
//         centuries: "",
//         balls: "",
//         playerId: "",
//       });
//       setIsAdding(false);
//       setIsNewScoreAdded(!isNewScoreAdded);
//     } catch (error) {
//       console.error("Error saving player stats:", error);
//     }
//   };

//   const handleAddRow = (matchId) => {
//     setPressedPlus(matchId);
//     setIsAdding(!isAdding);
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-70 flex p-20 justify-center ${isOpen
//         ? "block"
//         : "hidden"}`}
//     >
//       <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-7xl">
//         <div className=" overflow-auto">
//           <h className="flex text-xl py-3 font-bold text-baseRed1">Add Player Score Details of the Match</h>
//           <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md">
//             <thead className=" bg-baseRed1 text-white rounded">
//               <tr>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   Player Name
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   Runs
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   Wickets
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   Overs
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   Runs Conceded
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   4s
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   6s
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   50s
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   100s
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   Balls
//                 </th>
//                 <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-300">
//               {matchStack
//                 .filter((player) => player.match.matchId === matchId)
//                 .map((player, index) => (
//                   <tr key={index} className="hover:bg-gray-50 h-full align-middle">
//                     {/ Displaying player data /}
//                     <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-800 font-bold">
//                       {player.player.name}
//                     </td>
//                     <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
//                       {player.runs}
//                     </td>
//                     <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
//                       {player.wickets}
//                     </td>
//                     <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
//                       {player.overs}
//                     </td>
//                     <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
//                       {player.runsConceded}
//                     </td>
//                     <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
//                       {player.fours}
//                     </td>
//                     <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
//                       {player.sixers}
//                     </td>
//                     <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
//                       {player.fifties}
//                     </td>
//                     <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
//                       {player.centuries}
//                     </td>
//                     <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
//                       {player.balls}
//                     </td>
//                     <td className="px-4 flex space-x-2 h-10 whitespace-nowrap text-sm text-gray-600">
//                       {/ Edit/Delete buttons can go here /}
//                     </td>
//                   </tr>
//                 ))}

//               {isAdding && (
//                 <tr>
//                   {/ Player dropdown /}
//                   <td className="border px-4 py-2">
//                     <select
//                       name="playerId"
//                       value={formData.playerId}
//                       onChange={handleInputChange}
//                       className="border rounded p-1"
//                     >
//                       <option value="">Select Player</option>
//                       {players.map((player) => (
//                         <option key={player.playerId} value={player.playerId}>
//                           {player.name}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="number"
//                       name="runs"
//                       onChange={handleInputChange}
//                       placeholder="Enter runs"
//                       className="border rounded p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="number"
//                       name="wickets"
//                       onChange={handleInputChange}
//                       placeholder="Enter Wickets"
//                       className="border rounded p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="number"
//                       name="overs"
//                       onChange={handleInputChange}
//                       placeholder="Enter Overs"
//                       className="border rounded p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="number"
//                       name="runsConceded"
//                       onChange={handleInputChange}
//                       placeholder="Enter Run Conceded"
//                       className="border rounded p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="number"
//                       name="fours"
//                       onChange={handleInputChange}
//                       placeholder="Enter fours"
//                       className="border rounded p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="number"
//                       name="sixers"
//                       onChange={handleInputChange}
//                       placeholder="Enter sixes"
//                       className="border rounded p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="number"
//                       name="fifties"
//                       onChange={handleInputChange}
//                       placeholder="Enter fifties"
//                       className="border rounded p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="number"
//                       name="centuries"
//                       onChange={handleInputChange}
//                       placeholder="Enter hundreds"
//                       className="border rounded p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <input
//                       type="number"
//                       name="balls"
//                       onChange={handleInputChange}
//                       placeholder="Enter balls"
//                       className="border rounded p-1"
//                     />
//                   </td>
//                   <td className="border px-4 py-2">
//                     <button
//                       onClick={handleSavePlayer}
//                       className="bg-baseRed1 hover:bg-baseRed2 text-white py-1 px-3 rounded"
//                     >
//                       Add
//                     </button>
//                   </td>
//                 </tr>
//               )}
//               <tr>
//                 <div className="flex w-full top-0 mx-4 mb-2 ">
//                   <button
//                     title="Add New"
//                     onClick={() => handleAddRow(matchId)}
//                     className="bg-baseRed1 hover:bg-baseRed2 text-sm text-white font-bold p-1 rounded-full"
//                   >
//                     {!isAdding ? <FaPlus /> : <FaMinus />}
//                   </button>
//                 </div>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="mt-6 flex justify-end">
//           <button
//             type="button"
//             onClick={onClose}
//             className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-4"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             onClick={handleSavePlayer}
//             className="bg-baseRed2 text-white px-4 py-2 rounded-lg"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScoreCardPopup;

