import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopLayer from '../components/TopLayer';
import topImage from '../assets/images/BG3.png';
import Footer from '../components/Footer';

const ScorecardData = () => {
  const location = useLocation();
  const { match, teams, matchType } = location.state || {};
  const [playerStats, setPlayerStats] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;
  const [selectedInning, setSelectedInning] = useState('1st');

  useEffect(() => {
    if (match) {
      fetch(`${API_URL}playerStats/match/player-stats?matchId=${match.matchId}`)

        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched player stats:', data);
          setPlayerStats(data);
        })
        .catch((error) => console.error('Error fetching player stats:', error));
    }
  }, [match]);

  if (!match || !teams) {
    return <div>No match data found</div>;
  }

  // Filter batting and bowling data based on selected inning
  const filteredStats = playerStats.filter((stat) => stat.inning === (selectedInning === '1st' ? '1' : '2'));
  const battingStats = filteredStats.filter((stat) => stat.balls > 0); // Batting stats
  const bowlingStats = filteredStats.filter((stat) => stat.overs > 0); // Bowling stats

  // Calculate total runs for batting
  const totalRuns = battingStats.reduce((sum, batsman) => sum + batsman.runs, 0);

  // Calculate total wickets for bowling
  const totalWickets = bowlingStats.reduce((sum, bowler) => sum + bowler.wickets, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="relative">
        <TopLayer />
        <div
          style={{
            backgroundImage: `url(${topImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: "relative",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-center space-y-2 w-full md:w-1/4">
                  <img src={teams[0].logo} alt={teams[0].name} className="w-10 h-10  text-xs" />
                  <div className="text-center">
                    <h3 className="text-xxxs md:text-xs tracking-wide font-semibold">{teams[0].name.toUpperCase()}</h3>
                    <p className="text-xxxs md:text-xs mt-2 font-semibold">{teams[0].score}</p>
                    <p className="text-xxxs md:text-xs mt-1 font-semibold">{teams[0].overs}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mx-4">
                  <div className="h-8 md:h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
                  <span className="text-white text-xs md:text-sm my-2 font-semibold">VS</span>
                  <div className="h-8 md:h-12 w-px bg-gradient-to-t from-transparent via-white to-transparent" />
                </div>
                <div className="flex flex-col items-center space-y-2 w-full md:w-1/4">
                  <img src=  {`${`http://rcc.dockyardsoftware.com/images/${ teams[1].logo ? teams[1].logo .split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}

                  alt={teams[1].name}
                   className="w-10 h-10 " />

                  <div className="text-center">
                    <h3 className="text-xxxs md:text-xs tracking-wide font-semibold">{teams[1].name.toUpperCase()}</h3>
                    <p className="text-xxxs md:text-xs mt-2 font-semibold">{teams[1].score}</p>
                    <p className="text-xxxs md:text-xs mt-1 font-semibold">{teams[1].overs}</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4 md:p-6 text-left font-semibold">
                <h4 className="text-xxxs md:text-base font-bold text-[#53A2F6]">{match.league}</h4>
                <div className="flex justify-between mt-2">
                  <div className="flex flex-col">
                    <p className="text-xxxs md:text-xxs text-white">{match.date}</p>
                    <p className="text-xxxs md:text-xxs text-white mt-2">{match.stadiumLine1}</p>
                    <p className="text-xxxs md:text-xxs text-white">{match.stadiumLine2}</p>
                  </div>
                  <div className="flex flex-col text-right">
                    <p className="text-xxxs md:text-xxs text-white">{match.result}</p>
                    <p className="text-xxs md:text-xxs  text-gray-400 mt-2">{match.tossResult}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 max-w-screen-xl mx-auto mt-4 sm:mt-6">
  <div className="overflow-x-auto">
    <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
      <tbody>
        <tr className="bg-gray-200">
          <td colSpan="7" className="px-2 py-2 sm:px-3">
            <div className="flex justify-between items-center">
              {matchType === 'Test' && (
                <select
                  className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-100 rounded-xl border border-gray-400 w-48 sm:w-64 text-xs"
                  value={selectedInning}
                  onChange={(e) => {
                    setSelectedInning(e.target.value);
                    console.log('Selected Inning:', e.target.value); // Logs the selected inning
                  }}
                >
                  <option value="1st">1st Inning</option>
                  <option value="2nd">2nd Inning</option>
                </select>
              )}
              <div className="text-gray-700 font-medium text-xs sm:text-sm text-right">
                {selectedInning === '1st' ? (
                  <span>
                    Score: {typeof teams[0].score === 'string' && teams[0].score.includes('&') ? teams[0].score.split(' & ')[0] : teams[0].score} 
                    ({typeof teams[0].overs === 'string' && teams[0].overs.includes('&') ? teams[0].overs.split(' & ')[0] : teams[0].overs} overs)
                  </span>
                ) : (
                  <span>
                    Score: {typeof teams[0].score === 'string' && teams[0].score.includes('&') ? teams[0].score.split(' & ')[1] : 'N/A'} 
                    ({typeof teams[0].overs === 'string' && teams[0].overs.includes('&') ? teams[0].overs.split(' & ')[1] : 'N/A'} overs)
                  </span>
                )}
              </div>
            </div>
          </td>
        </tr>

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
        <td className="px-2 py-1 text-sm font-medium text-gray-900 text-left">
          <span className="font-medium">{batsman.player.name}</span>
          {batsman.howOut && (
            <span className="text-gray-500 text-xxs ml-2">({batsman.howOut})</span>
          )}
        </td>
        <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.runs}</td>
        <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.balls}</td>
        <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.fours}</td>
        <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.sixers}</td>
        <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.fifties}</td>
        <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.centuries}</td>
        <td className="px-2 py-1 text-sm text-center text-gray-500">{strikeRate}</td>
      </tr>
    );
  })}
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
        <thead className="bg-[#012D5E] text-white">
          <tr>
            <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BOWLING</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">O</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">W</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">M</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">Nb</th>
            <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">Wb</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bowlingStats.map((bowler, index) => (
            <tr key={index}>
              <td className="px-2 py-1 text-sm font-medium text-gray-900 ">{bowler.player.name}</td>
              <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.overs}</td>
              <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.runsConceded}</td>
              <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wickets}</td>
              <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.maidens}</td>
              <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.noBalls}</td>
              <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wides}</td>
            
            </tr>
          ))}
          {/* Total Wickets Row
          <tr className="bg-gray-100">
            <td className="px-2 py-1 text-sm font-bold text-gray-900">Total</td>
            <td className="px-2 py-1 text-sm font-bold text-center text-gray-900"></td>
            <td className="px-2 py-1 text-sm font-bold text-center text-gray-900"></td>
            <td className="px-2 py-1 text-sm font-bold text-center text-gray-900">{totalWickets}</td>
            <td className="px-2 py-1 text-sm font-bold text-center text-gray-900"></td>
           
            <td className="px-2 py-1 text-sm font-bold text-center text-gray-900"></td>
          </tr> */}
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
    <Footer/>
    </div>
  );
};

export default ScorecardData;
