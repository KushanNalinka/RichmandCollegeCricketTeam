import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/HomeNavbar";
import back from "../assets/images/flag.png";
import flag from "../assets/images/backDrop.png";
import image from "../assets/images/kusal.png";
import { useAuth } from "../hooks/UseAuth";

const PlayerProfile = () => {
  const { user } = useAuth();
  const [playerProfile, setPlayerProfile] = useState(null);
  const [playerStat, setPlayerStat] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
    const playerData = await axios.get( `${API_URL}admin/players/${user.userId}`);
    setPlayerProfile(playerData.data);

    const playerStat = await axios.get( `${API_URL}playerStats/all-stats/${user.userId}`);
    setPlayerStat(playerStat.data);
    console.log("player stack", playerStat);
  };

  fetchData();

  }, []);

    const summarizeStats = (type) => {

      if (!playerStat) {
        return {
          matches: 0,
          innings: 0,
          runs: 0,
          highestScore: 0,
          avg: 0,
          sr: 0,
          "100s": 0,
          "50s": 0,
          "4s": 0,
          "6s": 0,
        };
      }
      const filteredStats = playerStat.filter(
        (stat) => stat.match.type === type
      );

      // Calculate summaries
    const summary = filteredStats.reduce(
      (acc, stat) => {
        acc.matches += stat.match.matchId.length || 0;
        acc.innings += Number(stat.inning) || 0;
        acc.runs += stat.runs || 0;
        acc.highestScore = Math.max(acc.highestScore, stat.runs) ||0;
        
        acc.bestValue =Math.max(acc.bestValue,stat.runConceded/stat.wickets);

        acc.battingAvg =
          acc.innings > 0 ? (acc.runs / acc.innings).toFixed(2) : 0;
        acc.sr = (acc.runs / acc.innings).toFixed(2); // Simplified SR calculation
        acc["100s"] += stat.hundreds || 0;
        acc["50s"] += stat.fifties || 0;
        acc["4s"] += stat.fours || 0;
        acc["6s"] += stat.sixes || 0;
        acc.overs += stat.overs || 0;
        acc.wickets += stat.wickets || 0;
        acc.runsConceded += stat.runsConceded || 0;
        acc.ballingAvg =
          acc.overs > 0 ? (acc.runsConceded / acc.overs).toFixed(2) : 0;
        acc.economyRate = acc.overs > 0 ? (acc.runsConceded / acc.overs).toFixed(2) : 0;
          
        return acc;
      },
      {
        matches: 0,
        innings: 0,
        runs: 0,
        highestScore: 0,
        avg: 0,
        sr: 0,
        overs:0,
        wickets:0,
        runsConceded:0,
        ballingAvg:0,
        battingAvg:0,
        bestValue:0,
        bestValue:0,
        economyRate:0,
        "100s": 0,
        "50s": 0,
        "4s": 0,
        "6s": 0,
      }
    );

    return summary;
  };


  return (
    
    <div
      className={`flex relative justify-center lg:p-10 p-5 lg:pt-28 pt-28 h-auto items-stretch min-h-screen text-white w-full`}
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
            {/* Player Details */}
            <div
              className="h-full w-full p-5 rounded-lg lg:px-20 bg-white shadow-md"
              style={{
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <h1 className="text-2xl self-start p-2 pt-0 text-[#480D35] font-bold">
                Player Profile
              </h1>
              <div
                className="flex justify-center items-center w-full rounded-xl h-36 px-10 mb-6"
                style={{
                  backgroundImage:` url(${back})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative top-10 rounded-full w-full h-full flex items-center justify-center">
                  <div className=" -top-5 -left-5 absolute flex flex-col ">
                    <h1 className="lg:text-4xl font-bold">{playerProfile?.name}</h1>
                    <p className="lg:text-xl">
                      {playerProfile?.careerStart} -{" "}
                      {playerProfile?.careerEnd || "Present"}
                    </p>
                  </div>
                  <img
                    src={playerProfile?.image || image}
                    alt={playerProfile?.name}
                    className="w-32 h-32 rounded-full object-cover border bg-white border-gray-300"
                  />
                </div>
                
              </div>
              <div className="flex items-center pt-5 justify-center">
              <div className="bg-gray-100 py-4 px-2 w-full lg:p-6 lg:w-2/3 self-center rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-black text-center">
                  Personal Information
                </h2>
                {/* Personal Info Table */}
                <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full bg-gray-100 text-gray-950 rounded-lg">
                  <tbody>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Name:</td>
                      <td className="py-2 px-5">{playerProfile?.name}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Date of Birth:</td>
                      <td className="py-2 px-5">
                        {playerProfile?.dateOfBirth}
                      </td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Email:</td>
                      <td className="py-2 px-5">{playerProfile?.email}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Contact No:</td>
                      <td className="py-2 px-5">
                        {playerProfile?.contactNo}
                      </td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Batting Style:</td>
                      <td className="py-2 px-5">{playerProfile?.battingStyle}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Bowling Style:</td>
                      <td className="py-2 px-5">{playerProfile?.bowlingStyle}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Role:</td>
                      <td className="py-2 px-5">{playerProfile?.playerRole}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
              </div>
              {/* The statistics section will remain as is, assuming it doesn't depend on the selectedPlayer */}
              <div className="mt-6 bg-gray-200 w-full lg:p-6 px-2 py-4 text-black rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Player Statistics
                </h2>
                {/* Batting Stats */}
                <h3 className="text-md text-gray-700 font-bold mb-4">
                  Batting and Fielding Stats
                </h3>
                {/* Assuming the data structure of selectedPlayer.stats */}
                <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Format
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Matches
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Innings
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Runs
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Highest Score
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Avg
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        SR
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        100s
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        50s
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        4s
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        6s
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Test", "ODI", "T20"].map((type) => {
                      const summary = summarizeStats(type);
                      return (
                        <tr
                          key={type}
                          className="border-b border-gray-300"
                        >
                          <td className="py-2 px-5 text-center align-middle">
                            {type}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.matches}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.innings}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.runs}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.highestScore}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.battingAvg}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.sr}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["100s"]}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["50s"]}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["4s"]}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["6s"]}
                          </td>
                        </tr>
                      )})}
                  </tbody>
                </table>
              </div>

              <h3 className="text-md font-bold text-gray-700 mb-4">Bowling Stats</h3>
              <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Format
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Innings
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Overs
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Matches
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Wickets
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Runs Conceded
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Best
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Avg
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Economy Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {["Test", "ODI", "T20"].map((type) => {
                      const summary = summarizeStats(type);
                      return (
                        <tr
                          key={type}
                          className="border-b bg-white border-gray-300"
                        >
                          <td className="py-2 px-5 text-center align-middle">
                            {type}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.innings}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.overs}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.matches}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.wickets}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.runsConceded}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.bestValue}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.ballingAvg}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.economyRate}
                          </td>
                        </tr>
                      )})}
                  </tbody>
                </table>
                </div>
              </div>
            </div>
      </div>
  );
};

export default PlayerProfile;