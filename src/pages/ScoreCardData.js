import React from 'react';
import { useLocation } from 'react-router-dom';
import TopLayer from '../components/TopLayer';
import topImage from '../assets/images/BG3.png';

const ScorecardData = () => {
  const location = useLocation();
  const { match, teams } = location.state || {}; // Extract match and teams data from state

  if (!match || !teams) {
    return <div>No match data found</div>;
  }

  const batsmen = [
    {
      name: 'Player 1',
      runs: 50,
      balls: 30,
      minutes: 45,
      fours: 4,
      sixes: 2,
      fifty: 1,
      hundred: 0,
      strikeRate: 166.67,
    },
    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },

    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },

    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },

    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },

    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },

    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },
  ];

  // Sample bowlers data
  const bowlers = [
    {
      name: 'Bowler 1',
      overs: 4,
      maidens: 0,
      runs: 30,
      wickets: 2,
      noBalls: 1,
      wides: 2,
      economy: 7.5,
      cost: 10,
    },
    {
      name: 'Bowler 2',
      overs: 4,
      maidens: 0,
      runs: 25,
      wickets: 3,
      noBalls: 0,
      wides: 1,
      economy: 6.25,
    },
    {
      name: 'Bowler 2',
      overs: 4,
      maidens: 0,
      runs: 25,
      wickets: 3,
      noBalls: 0,
      wides: 1,
      economy: 6.25,
    },
    {
      name: 'Bowler 2',
      overs: 4,
      maidens: 0,
      runs: 25,
      wickets: 3,
      noBalls: 0,
      wides: 1,
      economy: 6.25,
    },
    {
      name: 'Bowler 2',
      overs: 4,
      maidens: 0,
      runs: 25,
      wickets: 3,
      noBalls: 0,
      wides: 1,
      economy: 6.25,
    },
    {
      name: 'Bowler 2',
      overs: 4,
      maidens: 0,
      runs: 25,
      wickets: 3,
      noBalls: 0,
      wides: 1,
      economy: 6.25,
    },

    

  ];
  // Constants for extras and total
  const EXTRAS = 12;
  const TOTAL = "192/6 (20 overs)";

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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-5xl md:h-40 h-auto flex flex-col md:flex-row items-center justify-between">
              {/* Left side (Team 1) */}
              <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
                <img
                  src={teams[0].logo}
                  alt={teams[0].name}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                />
                <div className="text-center">
                  <h3 className="text-xxs md:text-xs font-semibold tracking-wide">
                    {teams[0].name.toUpperCase()}
                  </h3>
                  <p className="text-lg md:text-m font-bold mt-2">{teams[0].score}</p>
                  <p className="text-xxs md:text-xs mt-1">{teams[0].overs}</p>
                </div>
              </div>

              {/* VS Divider */}
              <div className="flex flex-col items-center justify-center -mx-4 mb-4 md:mb-0">
                <div className="h-8 md:h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
                <span className="text-white text-sm md:text-xl my-2">VS</span>
                <div className="h-8 md:h-12 w-px bg-gradient-to-t from-transparent via-white to-transparent" />
              </div>

              {/* Right side (Team 2) */}
              <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
                <img
                  src={teams[1].logo}
                  alt={teams[1].name}
                  className="w-12 h-12 md:w-12 md:h-12 rounded-full"
                />
                <div className="text-center">
                  <h3 className="text-xxs md:text-xs font-semibold tracking-wide">
                    {teams[1].name.toUpperCase()}
                  </h3>
                  <p className="text-lg md:text-m font-bold mt-2">{teams[1].score}</p>
                  <p className="text-xxs md:text-xs mt-1">{teams[1].overs}</p>
                </div>
              </div>

              {/* Match details */}
              <div className="w-full md:w-1/2 p-4 md:p-6 text-left">
                <h4 className="text-sm md:text-base font-bold text-[#53A2F6]">{match.league}</h4>
                <div className="flex justify-between mt-2">
                  <div className="flex flex-col">
                    <p className="text-xxs md:text-xxs text-white">{match.date}</p>
                    <p className="text-xxs md:text-xxs text-white mt-2">{match.stadiumLine1}</p>
                    <p className="text-xxs md:text-xxs text-white">{match.stadiumLine2}</p>
                  </div>

                  <div className="flex flex-col text-right">
                    <p className="text-xs md:text-sm font-bold text-white">{match.result}</p>
                    <p className="text-xxs md:text-xxs mt-1 text-gray-400 mt-2">{match.tossResult}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="p-6 max-w-screen-xl mx-auto mt-10">
          {/* Top Bar */}
          <div className="flex items-center justify-between bg-gray-300 p-2 rounded-t-lg shadow-md">
            {/* Dropdown for innings */}
            <div className="flex items-center">
              <select
                className="px-3 py-1 bg-gray-100 rounded-xl border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-64 text-xs"
                defaultValue="1st Inning"
              >
                <option value="1st INNING">1st Inning</option>
                <option value="2nd INNING">2nd Inning</option>
              </select>
            </div>
            {/* Score Info */}
            <div className="text-gray-700 font-medium text-sm">
              180/5 (15.4 overs)
            </div>
          </div>

          {/* Batsmen Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
              <thead className="bg-[#4A0D34] text-white">
                <tr>
                  <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BATTING</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">B</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">M</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">4s</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">6s</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">50</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">100</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">SR</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {batsmen.map((batsman, index) => (
                  <tr key={index}>
                    <td className="px-2 py-1 text-sm font-medium text-gray-900">{batsman.name}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.runs}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.balls}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.minutes}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.fours}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.sixes}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.fifty}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.hundred}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.strikeRate.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Extras and Total Section under Batting Table */}
          <div className="mb-6">
            <div className="flex justify-between bg-gray-200 p-2 rounded-md shadow-sm -mt-6 ">
              <div className="font-bold text-xs md:text-sm text-gray-800">Extras</div>
              <div className="font-bold text-xs md:text-sm text-gray-800">{EXTRAS}</div>
            </div>
            <div className="flex justify-between bg-gray-200 p-2 mt-2 rounded-md shadow-sm">
              <div className="font-bold text-xs md:text-sm text-gray-800">Total</div>
              <div className="font-bold text-xs md:text-sm text-gray-800">{TOTAL}</div>
            </div>
          </div>

          {/* Bowlers Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
              <thead className="bg-[#4A0D34] text-white">
                <tr>
                  <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BOWLING</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">O</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">M</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">W</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">NB</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">WD</th>
                  <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">ECO</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {bowlers.map((bowler, index) => (
                  <tr key={index}>
                    <td className="px-2 py-1 text-sm font-medium text-gray-900">{bowler.name}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.overs}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.maidens}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.runs}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wickets}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.noBalls}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wides}</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.economy.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorecardData;