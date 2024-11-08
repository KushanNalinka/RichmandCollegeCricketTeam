import React, { useState, useEffect, useReducer  } from "react";
import axios from "axios";
import { message } from "antd";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaSave, FaTimes } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import dayjs from "dayjs";
import ball from "../assets/images/CricketBall-unscreen.gif";
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

const ScoreCardPopup = ({  onClose, matchId, matchType, teamId, matchOpponent, date }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [currentPlayerStackId, setCurrentPlayerStackId] = useState();
  const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [pressedPlus, setPressedPlus] = useState(null);
  const [isNewScoreAdded, setIsNewScoreAdded] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [scoreToDelete, setScoreToDelete] = useState(null);
  const [inningNumber, setInningNumber] = useState(); // Default to first inning
  const [filteredStats, setFilteredStats] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [playerStats, setPlayerStats] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    inning: "1",
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

  const filterInningStats = (allInningsStats, inningNumber) => {
    return allInningsStats.filter(stat => stat.inning === inningNumber);
  };

  const calculateMilestones = (runs) => {
    const fifties = Math.floor((runs / 50) >= 1) ? 1 : 0; // 1 if runs >= 50 and less than 100
    const centuries = Math.floor((runs / 100)>=1)? 1 : 0; // 1 if runs >= 100
    return { fifties, centuries };
  };

  const validationErrors = () => {
    const newErrors = {};
    if (!formData.player.playerId) {
      message.error("Please select a player before entering stats.");

    } else {
      // Check if balls is provided for runs, 4s, and 6s
      if (
        !formData.balls &&
        (formData.runs || formData.fours || formData.sixers)
      ) {
        newErrors.balls = "Balls must be specified to enter runs, 4s, or 6s.";
      } else {
        // Check if overs is provided for wickets and runs conceded
        if (!formData.overs && (formData.wickets || formData.runsConceded)) {
          newErrors.overs = "Overs must be specified to enter wickets or runs conceded.";
        }
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const fetchPlayerStat = async () => {
      try {
        const playersResponse = await axios.get(`${API_URL}teams/${teamId}/players`);
        const allPlayers = playersResponse.data; 

        const statsResponse = await axios.get(
          `${API_URL}playerStats/match/player-stats?matchId=${matchId}`
        );
        const allStats = statsResponse.data;

        const playersWithInningStats = new Set(
          allStats
            .filter(stat => stat.inning === inningNumber) // Filter by selected inning for Test matches
            .map(stat => stat.player.playerId)
        );
  
        // Filter available players for the specific inning in Test matches
        const availablePlayers = allPlayers.filter(player => {
          if (matchType === "Test") {
            // For Test matches, check stats for the specific inning
            return !playersWithInningStats.has(player.playerId);
          } else {
            // For ODI and T20 matches, check if the player has any stats for the match
            return !allStats.some(stat => stat.player.playerId === player.playerId);
          }
        });
  
        dispatch({ type: "SET_PLAYERS", payload: availablePlayers });

        // Apply inning filter only for Test matches
        if (matchType === "Test") {
          const inningStats = filterInningStats(allStats, inningNumber);
          setFilteredStats(inningStats);
        } else {
          // For ODI and T20, show all stats (no inning filter needed)
          setFilteredStats(allStats);
        }
        console.log("Player stats: ", allStats);
        dispatch({ type: "SET_PLAYER_STATS", payload: allStats });
        
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayerStat();
  }, [matchId, inningNumber, matchType,isSubmitted]);

  useEffect(() => {
    if (matchType === "Test") {
      setFilteredStats(filterInningStats(state.playerStats, inningNumber));
    } else {
      setFilteredStats(state.playerStats); // No filter for ODI/T20
    }
  }, [state.playerStats, inningNumber, matchType]);


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
    console.log("formdata submit: ", formData);
    if (!formData.player.playerId) {
      message.error("Please select a player before entering stats.");
      return
    } else {
      // Check if balls is provided for runs, 4s, and 6s
      if (
        (!formData.balls|| formData.balls == 0 ) &&
        ((formData.runs && formData.runs !=0) || (formData.fours && formData.fours !=0) || (formData.sixers && formData.fours !=0) )
      ) {
        message.error("Balls must be specified to enter runs, 4s, or 6s.");
        return
      } else {
        // Check if overs is provided for wickets and runs conceded
        if ((!formData.overs ||formData.overs == 0 ) && ((formData.wickets && formData.wickets != 0) || (formData.runsConceded && formData.runsConceded !=0))) {
          message.error("Overs must be specified to enter wickets or runs conceded.");
          return
        }
      }
    };
    try {
      setUploading(true);
      const {fifties, centuries} = calculateMilestones(formData.runs);
      const response = await axios.post(`${API_URL}playerStats/add`, {...formData, inning:(inningNumber || formData.inning), fifties:fifties, centuries:centuries});
      console.log("submitted player stats: ", response.data);
      dispatch({ type: "ADD_PLAYER_STAT", payload: response.data });

      // Reset the form
      setFormData({
        inning: "1",
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
      setIsSubmitted(!isSubmitted);
      message.success("Player stats added successfully!");
      console.log("Player stats response :", response.data);
      setIsAdding(false);
      setIsNewScoreAdded(!isNewScoreAdded);
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

  const handleEditPlayerStack = player => {
    setCurrentPlayerStackId(player.id);
    setIsEditButtonPressed(true);
    setFormData({
      inning: inningNumber || formData.inning,
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
    console.log("formData runs :", formData.runs);
  };

  const handleSaveEdit = async id => {
    
    if (!formData.player.playerId) {
      message.error("Please select a player before entering stats.");
      return
    } else {
      // Check if balls is provided for runs, 4s, and 6s
      if (
        (!formData.balls|| formData.balls == 0 ) &&
        ((formData.runs && formData.runs !=0) || (formData.fours && formData.fours !=0) || (formData.sixers && formData.fours !=0) )
      ) {
        message.error("Balls must be specified to enter runs, 4s, or 6s.");
        return
      } else {
        // Check if overs is provided for wickets and runs conceded
        if ((!formData.overs ||formData.overs == 0 ) && ((formData.wickets && formData.wickets != 0) || (formData.runsConceded && formData.runsConceded !=0))) {
          message.error("Overs must be specified to enter wickets or runs conceded.");
          return
        }
      }
    };
    try {
      setUploading(true);
      const {fifties, centuries} = calculateMilestones(formData.runs);
      console.log("formData edit:", formData);
      const response = await axios.put(
        `${API_URL}playerStats/update/${id}`,
        {...formData, inning:(inningNumber || formData.inning), fifties:fifties, centuries:centuries}
      );
      console.log("Edit response: ", response.data);
      message.success("Player stats updated successfully!");
      dispatch({ type: "EDIT_PLAYER_STAT", payload: response.data });
      setFormData({
        inning: "1",
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
      setIsEditButtonPressed(false);
      setIsSubmitted(!isSubmitted);

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
  const handleDelete = id => {
    setScoreToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    setUploading(true);
    try {
      await axios.delete(`${API_URL}playerStats/${scoreToDelete}`);
      dispatch({ type: "DELETE_PLAYER_STAT", payload: scoreToDelete });
      message.success("Player stats deleted successfully!");
      setIsSubmitted(!isSubmitted);
    } catch (error) {
      console.error("Error deleting coach:", error);

      if (error.response && error.response.data && error.response.data.message) {
        message.error(`Failed to delete: ${error.response.data.message}`);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
      setShowDeleteModal(false);
    }
  };
  
  const handleAddRow = matchId => {
    if (matchType=="Test" && !inningNumber) {
      message.error("Please select an inning");
      return; // Prevent further execution if inning is not selected
    }
    setErrors({});
    setPressedPlus(matchId);
    setIsAdding(!isAdding);
  };

  const handleEditClose = () => {
    setIsEditButtonPressed(false);
  };

  const handleInningChange = (e) => {
    setInningNumber(e.target.value);
    setFilteredStats(filterInningStats(state.playerStats, inningNumber));
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-75 flex md:p-10 justify-center`}
    >
      <div className="bg-white md:p-8 p-5 pt-8 relative  md:rounded-lg shadow-lg w-full">
        <div className="flex justify-end items-center pb-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            <FaTimes />
          </button>
        </div>
        <div className=" bg-gray-200 lg:px-5 p-5 rounded-lg shadow-lg max-h-full" 
            style={{ 
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              
            }}>
        <div>
        
      <h className="flex text-center lg:text-xl text-md py-3 font-bold text-[#480D35]">Score Card - {matchType} match against {matchOpponent} on {dayjs(date).format("YYYY-MMM-DD")}</h>
      {matchType === 'Test' && (
        <div className={`flex pb-2 tracking-wider justify-start items-center mydfdsfh-1 gap-3`}>
          <label htmlFor="inning" className="block text-black text-sm font-semibold">Select Inning:</label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-md block px-3 py-1 mt-1 focus:outline-none focus:ring-1 focus:ring-[#2c2e34]"
            id="inning"
            value={inningNumber}
            onChange={handleInningChange}
          > <option value={0} selected disabled className="text-sm text-gray-700 px-3 ">Select Inning</option>
            <option value={1} className="text-sm text-gray-700 px-3 ">Inning 1</option>
            <option value={2} className=" text-sm text-gray-700 px-3 ">Inning 2</option>
          </select>
        </div>
        ) 
      }
    </div>
        <div  className="overflow-auto max-h-[50vh]">
          <table className="min-w-full divide-gray-300 bg-gray-00 shadow-md">
            <thead className=" text-white lg:rounded">
              <tr className="bg-gradient-to-r from-[#00175f] to-[#480D35]">
                <th className="py-3 px-4 lg:rounded-l-lg text-left text-xs font-semibold uppercase tracking-wider"> Player Name</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Runs </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Balls</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> 4s</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> 6s</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Status</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Wickets</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Overs</th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider"> Run Conceded</th>
                <th className="py-3 px-4 lg:rounded-r-lg text-left text-xs font-semibold uppercase tracking-wider"> {" "}Actions</th>
              </tr>
              <tr className=" h-2"></tr>
            </thead>

            <tbody className="divide-y-2 divide-gray-300 max-h-full overflow-auto">
              { filteredStats
                .map((player) =>
                  <tr
                    key={player.id}
                    className=" hover:bg-gray-50 h-full bg-white lg:rounded-lg align-middle"
                  >
                    {isEditButtonPressed && player.id === currentPlayerStackId?
                       <>
                          <td className="px-4 h-10 lg:rounded-l-lg whitespace-nowrap text-sm text-gray-600">
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
                              min={0}
                              className="border rounded p-1"
                              disabled={
                                !formData.player.playerId || !formData.balls
                              }
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="balls"
                              value={formData.balls}
                              min={0}
                              onChange={handleInputChange}
                              placeholder="Enter balls"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="fours"
                              min={0}
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
                              min={0}
                              value={formData.sixers}
                              onChange={handleInputChange}
                              placeholder="Enter sixes"
                              className="border rounded p-1"
                            />
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                             <select
                              name="howOut"
                              value={formData.howOut}
                              onChange={handleInputChange}
                              placeholder="Enter Status"
                              className="border rounded p-1"
                            >
                              <option value="" disabled >Select status</option>
                              <option value="Not out">Not Out</option>
                              <option value="LBW">LBW</option>
                              <option value="Bowled">Bowled</option>
                              <option value="Run out">Run out</option>
                              <option value="Catch">Catch</option>
                            </select>
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="number"
                              name="wickets"
                              min={0}
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
                              min={0}
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
                              min={0}
                              value={formData.runsConceded}
                              onChange={handleInputChange}
                              placeholder="Enter Run Conceded"
                              className="border rounded p-1"
                            />
                          </td>
                          {/* <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
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
                          </td> */}
                          <td className=" px-4 lg:rounded-r-lg whitespace-nowrap text-sm space-x-2 h-10">
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
                          <td className=" px-4 h-10 lg:rounded-l-lg whitespace-nowrap text-sm text-gray-800 font-bold">
                            {player.player.name}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.runs}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.balls}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.fours}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.sixers}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.howOut}
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
                          {/* <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.fifties}
                          </td> */}
                          {/* <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.centuries}
                          </td> */}
                          <td className="px-4 lg:rounded-r-lg space-x-2 h-10 whitespace-nowrap text-sm text-gray-600">
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
                      min={0}
                      onChange={handleInputChange}
                      placeholder="Enter runs"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="balls"
                      min={0}
                      onChange={handleInputChange}
                      placeholder="Enter balls"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="fours"
                      min={0}
                      onChange={handleInputChange}
                      placeholder="Enter fours"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="sixers"
                      min={0}
                      onChange={handleInputChange}
                      placeholder="Enter sixes"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <select
                      name="howOut"
                      value={formData.howOut}
                      onChange={handleInputChange}
                      placeholder="Enter Status"
                      className="border rounded p-1"
                    >
                      <option value="" disabled selected >Select status</option>
                      <option value="Not out">Not Out</option>
                      <option value="LBW">LBW</option>
                      <option value="Bowled">Bowled</option>
                      <option value="Run out">Run out</option>
                      <option value="Catch">Catch</option>
                    </select>
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="wickets"
                      min={0}
                      onChange={handleInputChange}
                      placeholder="Enter Wickets"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="overs"
                      min={0}
                      onChange={handleInputChange}
                      placeholder="Enter Overs"
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      name="runsConceded"
                      min={0}
                      onChange={handleInputChange}
                      placeholder="Enter Runs Conceded"
                      className="border rounded p-1"
                    />
                  </td>
                  {/* <td className="border px-4 py-2">
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
                  </td> */}
                  <td className="border px-4 py-2">
                    <button
                      title="Save New"
                      onClick={handleSubmit}
                      className=" hover:bg-opacity-100 bg-opacity-95 text-[#480D35] rounded"
                    >
                      <FaSave />
                    </button>
                  </td>
                </tr>
              }
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
             {uploading && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50">
                  <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
                </div>
              )}
      </div>
    </div>
  );
};
export default ScoreCardPopup;