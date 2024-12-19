
import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import {message} from 'antd';
import { FaTimes } from "react-icons/fa";
import { useDropzone } from 'react-dropzone';

const ScoreCardAIModel = ({ onClose, matchId }) => {
  const [batsmanFile, setBatsmanFile] = useState(null);
  const [bowlerFile, setBowlerFile] = useState(null);
  const [tableData, setTableData] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [players, setPlayers] = useState([]);
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const playersResponse = await axios.get(`${API_URL}admin/players/all`);
        setPlayers(playersResponse.data);
        
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers();
  }, []);

  // Drag-and-drop for batsman image
  const { getRootProps: getBatsmanRootProps, getInputProps: getBatsmanInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setBatsmanFile(acceptedFiles[0]);
    },
    accept: { 'image/*': [] },
    multiple: false
  });

  // Drag-and-drop for bowler image
  const { getRootProps: getBowlerRootProps, getInputProps: getBowlerInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setBowlerFile(acceptedFiles[0]);
    },
    accept: { 'image/*': [] },
    multiple: false
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!batsmanFile || !bowlerFile) {
      alert("Upload both ScoreCard Images");
      return;
    }

    const formData = new FormData();
    formData.append('batsman_file', batsmanFile);
    formData.append('bowler_file', bowlerFile);

    setIsLoading(true);

    try {
      const response = await axios.post('https://scorecard-nlp.up.railway.app/run-scorecard', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success("Images upload successfully!");
      if (Array.isArray(response.data)) {
        setTableData(response.data);
      } else {
        console.error('Expected an array in response but got:', response.data);
        message.error("Error loading table data!");
        setTableData([]);
      }

    } catch (error) {
      console.error('Error uploading files:', error);
      setTableData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event, rowIndex, field) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][field] = event.target.value;
    setTableData(updatedTableData);
  };

  const handleAllSubmit = async (e) => {
    e.preventDefault();
    console.log("all players1: ",tableData);
    const formattedData = tableData.map((row) => ({
      
      inning: 1,
      runs: row.total_runs || 0,
      wickets: row.wickets || 0,
      fours: row.fours || 0,
      sixers: row.sixes || 0,
      fifties: Math.floor(row.total_runs / 50) || 0,
      centuries: Math.floor(row.total_runs / 100) || 0,
      balls: row.balls_faced || 0,
      overs: row.overs || 0,
      runsConceded: row.runs || 0,
      player: {
        playerId: players.find((player) => player.name === row.name)?.playerId || 0,
      },
      match: {
        matchId: matchId,  // Ensure you're passing matchId correctly here
      },
    }));

    try {
      const response = await axios.post(`${API_URL}playerStats/addMultiple`, formattedData);
      console.log("Submitted data: ",response.data);
      message.success("Submitted all player stats successfully!");

    } catch (error) {
      console.error('Error uploading files:', error);
      setTableData([]);
      message.error("Error submitting table data!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full h-full">
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-[#480D35]">
          Add Player Score Details of the Match
        </h2>
        <p className="mb-6">Upload detailed score images of teams</p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 justify-center ">
          <div className="flex space-x-4 w-full items-center justify-center">
            <div
              {...getBatsmanRootProps()}
              className="lg:w-1/3 p-4 py-7 border-dashed border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer"
            >
              <input {...getBatsmanInputProps()} />
              {batsmanFile ? (
                <p className="text-blue-600">{batsmanFile.name}</p>
              ) : (
                <p className="text-gray-600">Drag & drop Batsman Image or Click to Upload</p>
              )}
            </div>
            <div
              {...getBowlerRootProps()}
              className="lg:w-1/3 p-4 py-7 border-dashed border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer"
            >
              <input {...getBowlerInputProps()} />
              {bowlerFile ? (
                <p className="text-blue-600">{bowlerFile.name}</p>
              ) : (
                <p className="text-gray-600">Drag & drop Bowler Image or Click to Upload</p>
              )}
            </div>
           
          </div>
          <button
              type="submit" 
              className="px-2 lg:w-1/6 bg-gray-400 hover:bg-opacity-100 bg-opacity-70 text-white py-2 rounded-md transition"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Upload and Process'}
            </button>
        </form>

        {isLoading ? (
          <div className="mt-6 text-center">
            <p className=" hover:bg-opacity-100 bg-opacity-95">Loading...</p>
          </div>
        ) : (
          <>
            {tableData.length > 0 && (
              <div className="hover:overflow-auto overflow-hidden h-[50%] mt-6">
                <table className="min-w-full bg-gray-100 border rounded-lg">
                  <thead>
                    <tr className="bg-[#00175f] hover:bg-opacity-100 bg-opacity-95 text-white uppercase text-sm leading-normal">
                      <th className="py-3 px-3 text-left">Player Name</th>
                      <th className="py-3 px-3 text-left">Runs</th>
                      <th className="py-3 px-3 text-left">Wickets</th>
                      <th className="py-3 px-3 text-left">Overs</th>
                      <th className="py-3 px-3 text-left">Run Conceded</th>
                      <th className="py-3 px-3 text-left">4s</th>
                      <th className="py-3 px-3 text-left">6s</th>
                      <th className="py-3 px-3 text-left">50s</th>
                      <th className="py-3 px-3 text-left">100s</th>
                      <th className="py-3 px-3 text-left">Balls</th>  
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {tableData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="px-2 py-1 h-10 whitespace-nowrap text-left text-sm text-gray-600">
                          <select
                            type="text"
                            value={row.name}
                            onChange={(event) => handleInputChange(event, index, 'name')}
                            className="border rounded p-1 outline-none text-gray-900 font-semibold"
                          >
                            <option value="">{row.name}</option>
                              {players.map((player) => (
                                  <option key={player.playerId} value={player.name}>
                                    {player.name}
                                  </option>
                              ))}
                          </select>
                        </td>
                        <td className="px-2 py-1 h-10 whitespace-nowrap text-left text-sm text-gray-600">
                          <input
                            type="number"
                            value={row.total_runs}
                            onChange={(event) => handleInputChange(event, index, 'total_runs')}
                            className="border rounded p-1 outline-none"
                          />
                        </td>
                        <td className="px-2 py-1 h-10 whitespace-nowrap text-left text-sm text-gray-600">
                          <input
                            type="number"
                            value={row.wickets}
                            onChange={(event) => handleInputChange(event, index, 'wickets')}
                            className="border rounded p-1 outline-none"
                          />
                        </td>
                        <td className="px-2 py-1 h-10 whitespace-nowrap text-left text-sm text-gray-600">
                          <input
                            type="number"
                            value={row.overs}
                            onChange={(event) => handleInputChange(event, index, 'overs')}
                            className="border rounded p-1 outline-none"
                          />
                        </td>
                        <td className="px-2 py-1 h-10 whitespace-nowrap text-left text-sm text-gray-600">
                          <input
                            type="number"
                            value={row.runs}
                            onChange={(event) => handleInputChange(event, index, 'runs')}
                            className="border rounded p-1 outline-none"
                          />
                        </td>
                        <td className="px-2 py-1 h-10 whitespace-nowrap text-left text-sm text-gray-600">
                          <input
                            type="number"
                            value={row.fours}
                            onChange={(event) => handleInputChange(event, index, 'fours')}
                            className="border rounded p-1 outline-none"
                          />
                        </td>
                        <td className="px-2 py-1 h-10 whitespace-nowrap text-left text-sm text-gray-600">
                          <input
                            type="number"
                            value={row.sixes}
                            onChange={(event) => handleInputChange(event, index, 'sixes')}
                            className="border rounded p-1 outline-none"
                          />
                        </td>
                        <td className="px-2 py-1 h-10 whitespace-nowrap text-left text-sm text-gray-600">
                          <input
                            type="number"
                            value={row.fifties}
                            onChange={(event) => handleInputChange(event, index, 'fifties')}
                            className="border rounded p-1 outline-none"
                          />
                        </td>
                        <td className="px-2 py-1 h-10 whitespace-nowrap text-left text-sm text-gray-600">
                          <input
                            type="number"
                            value={row.centuries}
                            onChange={(event) => handleInputChange(event, index, 'centuries')}
                            className="border rounded p-1 outline-none"
                          />
                        </td>
                        <td className="px-2 py-1 h-10 whitespace-nowrap text-left text-sm text-gray-600">
                          <input
                            type="number"
                            value={row.balls_faced}
                            onChange={(event) => handleInputChange(event, index, 'balls_faced')}
                            className="border rounded p-1 outline-none"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='flex w-full items-end justify-end p-3 py-5 h-[10%]'>
                  <button className='px-5 py-1 bg-gray-200 rounded' onClick={handleAllSubmit}>Submit all player stats</button>
                </div>
              </div>
            )}
            
          </>
        )}
      </div>
    </div>
  );
};

export default ScoreCardAIModel;
