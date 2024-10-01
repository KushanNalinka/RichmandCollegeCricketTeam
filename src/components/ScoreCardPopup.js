import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

const ScoreCardPopup = ({ isOpen, onClose, onSubmit, matchId }) => {
  const [currentPlayerStackId, setCurrentPlayerStackId] = useState();
  const [isEditButtonPressed, setIsEditButtonPressed] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [pressedPlus, setPressedPlus] = useState(null);
  const [isNewScoreAdded, setIsNewScoreAdded] = useState(false);
  const [matchStack, setMatchStack] = useState([]);
  
  const [formData, setFormData] = useState({
    inning: "1",
    runs: "",
    wickets: "",
    overs: "",
    runsConceded: "",
    fours: "",
    sixers: "",
    fifties: "",
    centuries: "",
    balls: "",
    playerId: "",
  });
  useEffect(() => {
        const fetchPlayers = async () => {
          try {
            const response = await axios.get("http://localhost:5000/api/admin/players/all"); // Replace with your players endpoint
            setMatchStack(response.data);
          } catch (error) {
            console.error("Error fetching players:", error);
          }
        };
    
        fetchPlayers();
      }, []);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //add player score
  const handleSavePlayer =async e => {
    e.preventDefault();
    const payload = {
      inning: formData.inning,
      runs: Number(formData.runs),
      wickets: Number(formData.wickets),
      fours: Number(formData.fours),
      sixers: Number(formData.sixers),
      fifties: Number(formData.fifties),
      centuries: Number(formData.centuries),
      balls: Number(formData.balls),
      overs: Number(formData.overs),
      runsConceded: Number(formData.runsConceded),
      player: {
        playerId: Number(formData.playerId),
      },
      match: {
        matchId: matchId, // Use the matchId passed as prop
      },
    };

    try {
      const response = await axios.post("http://localhost:8080/api/playerStats/add", payload);
      console.log("Player stats saved successfully:", response.data);
      // Optionally, add the new stat to the local state to reflect in the UI
      setMatchStack([...matchStack, response.data]);
      setFormData({
        inning: "1",
        runs: "",
        wickets: "",
        overs: "",
        runsConceded: "",
        fours: "",
        sixers: "",
        fifties: "",
        centuries: "",
        balls: "",
        playerId: "",
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

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };
  //edit player score
  const handleEditPlayerStack = player => {
    setCurrentPlayerStackId(player.id);
    setIsEditButtonPressed(true);
    setFormData({
      playerName: player.playerName,
      runs: player.runs,
      wickets: player.wickets,
      overs: player.overs,
      runConceded: player.runConceded,
      fours: player.fours,
      sixes: player.sixes,
      fifties: player.fifties,
      hundreds: player.hundreds,
      balls: player.balls,
    });
  };
  const handleEditSave = id => {
    const updatedMatchStack = matchStack.map(player => {
      if (player.id === id) {
        return {
          ...player,
          playerName: formData.playerName || player.playerName,
          runs: formData.runs || player.runs,
          fours: formData.fours || player.fours,
          wickets: formData.wickets || player.wickets,
          overs: formData.overs || player.overs,
          runConceded: formData.runConceded || player.runConceded,
          sixes: formData.sixes || player.sixes,
          fifties: formData.fifties || player.fifties,
          hundreds: formData.hundreds || player.hundreds,
          balls: formData.balls || player.balls
        };
      }
      return player;
    });

    setMatchStack(updatedMatchStack);

    setFormData({ id: null, playerName: "", runs: "", fours: "" });
    setIsEditButtonPressed(false);
    setIsNewScoreAdded(!isNewScoreAdded);
  };
  const handleEditClose = () => {
    setIsEditButtonPressed(false);
  }
  //delete player score
  const handleDeletePlayerStack = index => {
    const updatedPlayerStack = matchStack.filter((_, i) => i !== index);
    setMatchStack(updatedPlayerStack);
  };
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0  bg-black bg-opacity-70 flex p-20 justify-center ${isOpen
        ? "block"
        : "hidden"}`}
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
              {matchStack
                .filter(player => player.match_id === matchId)
                .map((player, index) =>
                  <tr
                    key={index}
                    className=" hover:bg-gray-50 h-full align-middle"
                  >
                    {isEditButtonPressed && player.id === currentPlayerStackId?
                       <>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            <input
                              type="text"
                              name="playerName"
                              value={formData.playerName}
                              onChange={handleInputChange}
                              placeholder="Enter Name"
                              className="border rounded p-1"
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
                              name="runConceded"
                              value={formData.runConceded}
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
                              name="sixes"
                              value={formData.sixes}
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
                              name="hundreds"
                              value={formData.hundreds}
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
                              onClick={() => handleEditSave(player.id)}
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
                            {player.playerName}
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
                            {player.runConceded}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.fours}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.sixes}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.fifties}
                          </td>
                          <td className="px-4 h-10 whitespace-nowrap text-sm text-gray-600">
                            {player.hundreds}
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
                              onClick={() => handleDeletePlayerStack(index)}
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
                    <input
                      type="text"
                      name="playerName"
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      className="border rounded p-1"
                    />
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
                      name="runConceded"
                      onChange={handleInputChange}
                      placeholder="Enter Run Conceded"
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
                      name="sixes"
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
                      name="hundreds"
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
                      onClick={handleSavePlayer}
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

