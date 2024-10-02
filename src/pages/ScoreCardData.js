import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopLayer from '../components/TopLayer';
import topImage from '../assets/images/BG3.png';

const ScorecardData = () => {
  const location = useLocation();
  const { match, teams } = location.state || {}; // Extract match and teams data from state
  const [playerStats, setPlayerStats] = useState([]);

  useEffect(() => {
    if (match) {
      fetch(`playerStats/match/player-stats?matchId=${match.matchId}`)
        .then((response) => response.json())
        .then((data) => {
          setPlayerStats(data);
        })
        .catch((error) => console.error('Error fetching player stats:', error));
    }
  }, [match]);

  if (!match || !teams) {
    return <div>No match data found</div>;
  }

  // Filter batting and bowling data
  const battingStats = playerStats.filter((stat) => stat.balls > 0); // Batting stats
  const bowlingStats = playerStats.filter((stat) => stat.overs > 0); // Bowling stats

  // Calculate total runs for batting
  const totalRuns = battingStats.reduce((sum, batsman) => sum + batsman.runs, 0);

  // Calculate total wickets for bowling
  const totalWickets = bowlingStats.reduce((sum, bowler) => sum + bowler.wickets, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="relative">
        <TopLayer />
        {/* Top background image */}
        <div
          className="relative bg-cover bg-center h-64 flex items-center justify-center"
          style={{
            backgroundImage: `url(${topImage})`,
          }}
        >
           {/* Scorecard Section */}
           <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center justify-between w-full">
                {/* Left side (Team 1) */}
                <div className="flex flex-col items-center space-y-2 w-full md:w-1/4">
                  <img
                    src={teams[0].logo}
                    alt={teams[0].name}
                    className="w-10 h-10 rounded-full text-xs"
                  />
                  <div className="text-center">
                    <h3 className="text-xxs  tracking-wide">
                      {teams[0].name.toUpperCase()}
                    </h3>
                    <p className="text-xxs md:text-xxs  mt-2">{teams[0].score}</p>
                    <p className="text-xxs md:text-xxs mt-1">{teams[0].overs}</p>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="flex flex-col items-center justify-center mx-4">
                  <div className="h-8 md:h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
                  <span className="text-white text-xs md:text-xs my-2">VS</span>
                  <div className="h-8 md:h-12 w-px bg-gradient-to-t from-transparent via-white to-transparent" />
                </div>

                {/* Right side (Team 2) */}
                <div className="flex flex-col items-center space-y-2 w-full md:w-1/4">
                  <img
                    src={teams[1].logo}
                    alt={teams[1].name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-xxs md:text-xxs  tracking-wide">
                      {teams[1].name.toUpperCase()}
                    </h3>
                    <p className="text-xxs md:text-xxs  mt-2">{teams[1].score}</p>
                    <p className="text-xxs md:text-xxs mt-1">{teams[1].overs}</p>
                  </div>
                </div>
              </div>

              {/* Match details */}
              <div className="w-full md:w-1/2 p-4 md:p-6 text-left">
                <h4 className="text-xxxs md:text-base font-bold text-[#53A2F6]">{match.league}</h4>
                <div className="flex justify-between mt-2">
                  <div className="flex flex-col">
                    <p className="text-xxs md:text-xxs text-white">{match.date}</p>
                    <p className="text-xxs md:text-xxs text-white mt-2">{match.stadiumLine1}</p>
                    <p className="text-xxs md:text-xxs text-white">{match.stadiumLine2}</p>
                  </div>
                  <div className="flex flex-col text-right">
                    <p className="text-xxs md:text-xxs  text-white">{match.result}</p>
                    <p className="text-xxs md:text-xxs mt-1 text-gray-400 mt-2">{match.tossResult}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table with Dropdown and Score Info */}
        <div className="p-6 max-w-screen-xl mx-auto mt-6">
          <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
            <tbody>
              {/* Dropdown and Score Info Row */}
              <tr className="bg-gray-200">
                <td colSpan="7" className="px-3 py-2">
                  <div className="flex justify-between items-center">
                    {/* Dropdown for innings */}
                   {/* Only show dropdown for Test matches */}
{match.format === 'Test' && (
  <select
    className="px-3 py-1 bg-gray-100 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-64 text-xs"
    defaultValue="1st Inning"
  >
    <option value="1st INNING">1st Inning</option>
    <option value="2nd INNING">2nd Inning</option>
  </select>
)}
{/* Score Info - Dynamic score and overs for Team 1 */}
<div className="text-gray-700 font-medium text-sm text-right">
                      Score: {teams[0].score} ({teams[0].overs} overs)
                    </div>
                  </div>
                </td>
              </tr>
              {/* Batting Table */}
             {/* Batting Table */}
<tr>
  <td colSpan="7">
    <div className="overflow-x-auto mb-8">
      <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
        <thead className="bg-[#4A0D34] text-white">
          <tr>
            <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BATTING</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">B</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">4s</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">6s</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">50</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">100</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">SR</th> {/* Strike Rate Header */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {battingStats.map((batsman, index) => {
            const strikeRate = batsman.balls > 0 ? ((batsman.runs / batsman.balls) * 100).toFixed(2) : 0; // Calculate Strike Rate
            return (
              <tr key={index}>
                <td className="px-2 py-1 text-sm font-medium text-gray-900">{batsman.player.name}</td>
                <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.runs}</td>
                <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.balls}</td>
                <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.fours}</td>
                <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.sixers}</td>
                <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.fifties}</td>
                <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.centuries}</td>
                <td className="px-2 py-1 text-sm text-center text-gray-500">{strikeRate}</td> {/* Strike Rate Cell */}
              </tr>
            );
          })}
          {/* Total Runs Row */}
          <tr className="bg-gray-100">
            <td className="px-2 py-1 text-sm font-bold text-gray-900">Total</td>
            <td className="px-2 py-1 text-sm font-bold text-center text-gray-900">{totalRuns}</td>
            <td className="px-2 py-1 text-sm text-center text-gray-900"></td>
            <td className="px-2 py-1 text-sm text-center text-gray-900"></td>
            <td className="px-2 py-1 text-sm text-center text-gray-900"></td>
            <td className="px-2 py-1 text-sm text-center text-gray-900"></td>
            <td className="px-2 py-1 text-sm text-center text-gray-900"></td>
            <td className="px-2 py-1 text-sm text-center text-gray-900"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </td>
</tr>


            {/* Bowling Table */}
<tr>
  <td colSpan="7">
    <div className="overflow-x-auto mb-8">
      <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
        <thead className="bg-[#4A0D34] text-white">
          <tr>
            <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BOWLING</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">O</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">W</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bowlingStats.map((bowler, index) => (
            <tr key={index}>
              <td className="px-2 py-1 text-sm font-medium text-gray-900">{bowler.player.name}</td>
              <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.overs}</td>
              <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.runsConceded}</td>
              <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wickets}</td>
            </tr>
          ))}
          {/* Total Wickets Row */}
          <tr className="bg-gray-100">
            <td className="px-2 py-1 text-sm font-bold text-gray-900">Total</td>
            <td className="px-2 py-1 text-sm font-bold text-center text-gray-900"></td>
            <td className="px-2 py-1 text-sm font-bold text-center text-gray-900"></td>
            <td className="px-2 py-1 text-sm font-bold text-center text-gray-900">{totalWickets}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </td>
</tr>

                      
        </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScorecardData;
