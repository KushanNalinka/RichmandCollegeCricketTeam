import React, { useState, useEffect, useReducer  } from "react";
import axios from "axios";
import { message } from "antd";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaSave, FaTimes } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import ScoreCardAIModel from "./ScoreCardAIModel";


const playerStatsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYERS":
      return { ...state, players: action.payload };
    case "SET_PLAYER_STATS":
      return { ...state, playerStats: action.payload };
    case "ADD_PLAYER_STAT":
      return { ...state, playerStats: [...state.playerStats, action.payload] };
    case "EDIT_PLAYER_STAT":
      return {
        ...state,
        playerStats: state.playerStats.map(stat =>
          stat.id === action.payload.id ? action.payload : stat
        ),
      };
    case "DELETE_PLAYER_STAT":
      return {
        ...state,
        playerStats: state.playerStats.filter(stat => stat.id !== action.payload),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const ScoreCardPopup = ({  onClose, matchId }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [currentPlayerStackId, setCurrentPlayerStackId] = useState();
  const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [pressedPlus, setPressedPlus] = useState(null);
  const [isNewScoreAdded, setIsNewScoreAdded] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [scoreToDelete, setScoreToDelete] = useState(null);

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
      matchId: matchId,
    },
  });

  const [state, dispatch] = useReducer(playerStatsReducer, {
    players: [],
    playerStats: [],
  });

  useEffect(() => {
    const fetchPlayerStat = async () => {
      try {
        const playersResponse = await axios.get(`${API_URL}admin/players/all`);
        dispatch({ type: "SET_PLAYERS", payload: playersResponse.data });

        const statsResponse = await axios.get(
          `${API_URL}playerStats/match/player-stats?matchId=${matchId}`
        );
        dispatch({ type: "SET_PLAYER_STATS", payload: statsResponse.data });
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayerStat();
  }, [matchId]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === "player.playerId") {
      const selectedPlayer = state.players.find(
        player => player.playerId === parseInt(value)
      );
      if (selectedPlayer) {
        setFormData(prev => ({
          ...prev,
          player: {
            playerId: value,
            name: selectedPlayer.name,
          },
        }));
      }
    } else if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setFormData(prev => ({
        ...prev,
        [mainKey]: {
          ...prev[mainKey],
          [subKey]: value,
        },
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Add player stat
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}playerStats/add`, formData);
      dispatch({ type: "ADD_PLAYER_STAT", payload: response.data });

      // Reset the form
      setFormData({
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
          matchId: matchId,
        },
      });
      message.success("Player stats added successfully!");
      setIsAdding(false);
      setIsNewScoreAdded(!isNewScoreAdded);
    } catch (error) {
      message.error("Failed to add player stats. Please try again.");
      console.error("Error saving player stats:", error);
    }
  };

  const handleEditPlayerStack = player => {
    setCurrentPlayerStackId(player.id);
    setIsEditButtonPressed(true);
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
      match: { matchId: matchId },
      player: {
        playerId: player.player.playerId,
        name: player.player.name,
      },
    });
  };

  const handleSaveEdit = async id => {
    try {
      const response = await axios.put(
        `${API_URL}playerStats/update/${id}`,
        formData
      );
      message.success("Player stats updated successfully!");
      dispatch({ type: "EDIT_PLAYER_STAT", payload: response.data });
      setIsEditButtonPressed(false);
    } catch (error) {
      message.error("Failed to update player stats. Please try again.");
      console.error("Error editing player stats:", error);
    }
  };
  const handleDelete = id => {
    setScoreToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`${API_URL}playerStats/${scoreToDelete}`);
      dispatch({ type: "DELETE_PLAYER_STAT", payload: scoreToDelete });
      message.success("Player stats deleted successfully!");
    } catch (error) {
      message.error("Failed to delete player stats. Please try again.");
      console.error("Error deleting player stat:", error);
    }
  };

  const handleAddRow = matchId => {
    setPressedPlus(matchId);
    setIsAdding(!isAdding);
  };

  const handleEditClose = () => {
    setIsEditButtonPressed(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-75 flex p-20 justify-center`}
    >
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-full max-h-full">
        <div className="flex justify-end items-center">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            <FaTimes />
          </button>
        </div>
        <div>
      <h className="flex text-xl py-3 font-bold text-[#480D35]">Add Player Score Details of the Match</h>
    </div>
        <div className=" overflow-auto">
          <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md">
            <thead className=" bg-[#480D35] text-white rounded">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Player Name</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Runs </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Wickets</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Overs</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Run Conceded</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> 4s</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> 6s</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> 50s</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> 100s</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Balls</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> {" "}Actions</th>
              </tr>
            </thead>

            <tbody className=" divide-y  divide-gray-300">
              { state.playerStats
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
                         {state.players.map((player) => (
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
                      title="Save New"
                      onClick={handleSubmit}
                      className=" hover:bg-opacity-100 bg-opacity-95 text-[#480D35] rounded"
                    >
                      <FaSave />
                    </button>
                  </td>
                </tr>}
              <tr>
                <div className="flex w-full top-0 mx-4 mb-2 ">
                  <button
                    title="Add New"
                    onClick={() => handleAddRow(matchId)}
                    className="bg-[#480D35] hover:bg-opacity-100 bg-opacity-95 text-sm text-white font-bold p-1 rounded-full"
                  >
                    {!isAdding ? <FaPlus /> : <FaMinus />}
                  </button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
        {showDeleteModal && (
              <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-75">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                  <p>Are you sure you want to delete this player?</p>
                  <div className="flex justify-end mt-4 space-x-4">
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmDelete}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
      </div>
    </div>
  );
};
export default ScoreCardPopup;



  // const [formData, setFormData] = useState({
  //   inning: 1,
  //   runs: 0,
  //   wickets: 0,
  //   fours: 0,
  //   sixers: 0,
  //   fifties: 0,
  //   centuries: 0,
  //   balls: 0,
  //   overs: 0,
  //   runsConceded: 0,
  //   player: {
  //     playerId: 0,
  //     name: "",
  //   },
  //   match: {
  //     matchId: matchId, // Use the matchId passed as prop
  //   },
  // });
  // useEffect(() => {
  //       const fetchPlayerStat = async () => {
  //         try {
  //           const players = await axios.get(`${API_URL}admin/players/all`); // Replace with your players endpoint
  //           setPlayers(players.data);
  //           console.log("players in scores:", players.data);
  //           console.log("matchId for player Stack:", matchId);
  //           const stats = await axios.get(`${API_URL}playerStats/match/player-stats?matchId=${matchId}`); // Replace with your players endpoint
  //           setPlayerStats(stats.data);
  //           console.log("playerStats in scores:", stats.data);
  //         } catch (error) {
  //           console.error("Error fetching players:", error);
  //         }
  //       };
    
  //       fetchPlayerStat();
  //     }, [matchId]);

  // const handleInputChange = e => {
  //   const { name, value } = e.target;
  //   if (name === "player.playerId") {
  //     const selectedPlayer = players.find((player) => player.playerId === parseInt(value));
  //     if (selectedPlayer) {
  //       setFormData({
  //         ...formData,
  //         player: {
  //           playerId: value,
  //           name: selectedPlayer.name, // Set both playerId and name
  //         }
  //       });
  //     }
  //   }else if (name.includes(".")) {
  //     const [mainKey, subKey] = name.split(".");
  //     setFormData({
  //       ...formData,
  //       [mainKey]: {
  //         ...formData[mainKey],
  //         [subKey]: value
  //       }
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [name]: value
  //     });
  //   }
  // };

  // //add player score
  // const handleSubmit =async e => {
  //   e.preventDefault();
  //   console.log("submit Data:", formData);
  //   try {
  //     const response = await axios.post(`${API_URL}playerStats/add`, formData);
  //     console.log("Player stats saved successfully:", response.data);
  //     setPlayerStats([...playerStats, response.data]); 
  //     setFormData({
  //       inning: "",
  //       runs: 0,
  //       wickets: 0,
  //       fours: 0,
  //       sixers: 0,
  //       fifties: 0,
  //       centuries: 0,
  //       balls: 0,
  //       overs: 0,
  //       runsConceded: 0,
  //       player: {
  //         playerId: 0,
  //         name: "",
  //       },
  //       match: {
  //         matchId: "", // Use the matchId passed as prop
  //       },
  //     });
  //     setIsAdding(false);
  //     setIsNewScoreAdded(!isNewScoreAdded);
  //   } catch (error) {
  //     console.error("Error saving player stats:", error);
  //   }
  // };

    // const handleEditPlayerStack = player => {
  //   setCurrentPlayerStackId(player.id);
  //   setIsEditButtonPressed(true);
  //   console.log("playerId stats: ", player.player.playerId);
  //   setFormData({
  //     runs: player.runs,
  //     wickets: player.wickets,
  //     overs: player.overs,
  //     runsConceded: player.runsConceded,
  //     fours: player.fours,
  //     sixers: player.sixers,
  //     fifties: player.fifties,
  //     centuries: player.centuries,
  //     balls: player.balls,
  //     match:{
  //       matchId: matchId,
  //     },
  //     player:{
  //       playerId: player.player.playerId,
  //       name: player.player.name || "",
  //     }
  //   });
  // };

  // const handleSaveEdit = async id => {
  //    console.log("Stats id: ", id);
  //    console.log("form stat data: ", formData);
  //   try {
  //     // Make a POST request to the backend APIonsole.log{"id "}
  //     const response = await axios.put(
  //       `${API_URL}playerStats/update/${id}`,
  //       formData
  //     );
  //     if (response.status === 200) {
  //       console.log("Form submitted succeeded: ", response.data);
  //       message.success("Successfully Updated!");
  
  //       // Update playerStats state only on success
  //       setPlayerStats((prevStats) =>
  //         prevStats.map((stat) =>
  //           stat.id === id ? { ...stat, ...response.data } : stat
  //         )
  //       );
  //       setIsEditButtonPressed(false); // Close edit mode
        
  //     } else {
  //       message.error("Update Failed!");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     message.error("Failed!");
  //   }
  // };

  // const handleDelete = async id => {
  //   try{
  //     const deleteMatch = await axios.delete(`${API_URL}playerStats/${id}`)
  //     if (deleteMatch.status === 200) {
  //       message.success("Successfully Deleted!");
  //       console.log("Delete row:", id);
  
  //       // Update playerStats state to remove the deleted entry
  //       setPlayerStats((prevStats) => prevStats.filter((stat) => stat.id !== id));
  //     } else {
  //       message.error("Deletion Failed!");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting match:", error);
  //     message.error("Failed!");
  //   }
  // };
