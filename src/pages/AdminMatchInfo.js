import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminTopLayer from '../components/AdminTopLayer';
import topImage from '../assets/images/BG3.png';
import Upcoming from '../components/Upcoming';

export default function MatchInfo() {
  const [matchDataList, setMatchDataList] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [selectedMatchType, setSelectedMatchType] = useState('All');
  const [activeButton, setActiveButton] = useState('Latest');
  const [showUpcoming, setShowUpcoming] = useState(false);

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const isUpcomingMatch = (matchDate) => {
    const today = new Date();
    const matchDay = new Date(matchDate);
    return matchDay >= today.setHours(0, 0, 0, 0); // Compare ignoring the time part
  };

  useEffect(() => {
    fetch("matchSummary/all")
      .then(response => response.json())
      .then(data => {
        setMatchDataList(data);
        filterMatches(data, false, true); // Filter matches immediately for latest
      })
      .catch(error => console.error('Error fetching match summaries:', error));
  }, []);

  const filterMatches = (data = matchDataList, showOnlyUpcoming = false, latest = false) => {
    let filtered = data;

    // Filter by age group
    if (selectedAgeGroup !== 'All') {
        filtered = filtered.filter(match =>
            match.under && match.under.toLowerCase() === selectedAgeGroup.toLowerCase()
        );
    }

    // Filter by match type
    if (selectedMatchType !== 'All') {
        filtered = filtered.filter(match =>
            match.type && match.type.toLowerCase() === selectedMatchType.toLowerCase()
        );
    }

    // Filter for upcoming matches if the "Upcoming" button is selected
    if (showOnlyUpcoming) {
        filtered = filtered.filter(match => isUpcomingMatch(match.date));
    }

    // Sort the filtered matches by date (ascending order for upcoming matches)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort descending for latest matches

    // Get the latest 5 matches per type without date sorting
    if (latest) {
        const groupedMatches = filtered.reduce((acc, match) => {
            if (!acc[match.type]) acc[match.type] = [];
            acc[match.type].push(match);
            return acc;
        }, {});

        filtered = []; // Reset filtered matches

        // If selectedMatchType is "All", get latest 5 from each type
        if (selectedMatchType === 'All') {
            // Store matches count to limit overall to 5
            let count = 0;
            Object.values(groupedMatches).forEach(group => {
                const latestMatches = group.slice(0, 5); // Get latest 5 for this type
                filtered = filtered.concat(latestMatches);
                count += latestMatches.length;
                if (count >= 5) {
                    return; // Stop adding if we've reached 5
                }
            });
            // Limit final filtered to 5 total if it exceeds
            filtered = filtered.slice(0, 5);
        } else {
            // If a specific match type is selected, only get the latest 5 for that type
            if (groupedMatches[selectedMatchType]) {
                filtered = groupedMatches[selectedMatchType].slice(0, 5);
            }
        }
    }

    // Sort the filtered matches by date (ascending order for upcoming matches)
    if (showOnlyUpcoming) {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredMatches(filtered);
};

  const handleMatchCentreClick = (match) => {
    navigate('/scorecard', {
      state: {
        match: {
          matchId: match.matchId,
          league: `RICHMOND VS ${match.opposition.toUpperCase()} ${match.type.toUpperCase()}`,
          date: formatDate(match.date),
          result: match.result.toUpperCase(),
          tossResult: match.tossResult,
          stadiumLine1: match.venue.toUpperCase(),
          stadiumLine2: "",
        },
        teams: [
          {
            name: "Richmond College",
            logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg',
            score: `${match.runs}/${match.wickets}`,
            overs: match.overs,
          },
          {
            name: match.opposition,
            logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
            score: `${match.oppositionRuns}/${match.oppositionWickets}`,
            overs: match.oppositionOvers,
          }
        ]
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <div className="relative">
        <AdminTopLayer />
        <div
          style={{
            backgroundImage: `url(${topImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            height: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
         <div className="flex flex-col items-center justify-center text-white space-y-4 w-full text-xs mt-70">
  <div className="flex flex-row space-x-4 w-full max-w-[20rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem]">
    <select
      className="bg-transparent/30 rounded-2xl p-2 pr-10 text-white w-full text-xs focus:outline-none"
      value={selectedAgeGroup}
      onChange={(e) => {
        setSelectedAgeGroup(e.target.value);
        filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
      }}
    >
      <option>Under 13</option>
      <option>Under 15</option>
      <option>Under 17</option>
      <option>Under 19</option>
      <option>All</option>
    </select>

    <select
      className="bg-transparent/30 rounded-2xl p-2 pr-8 text-white w-full text-xs focus:outline-none"
      value={selectedMatchType}
      onChange={(e) => {
        setSelectedMatchType(e.target.value);
        filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
      }}
    >
      <option>Test</option>
      <option>T20</option>
      <option>ODI</option>
      <option>All</option>
    </select>
  </div>



            <div className="flex space-x-4">
              <button
                className={`w-24 h-8 rounded-full text-white text-xxs  ${activeButton === 'Latest' ? 'bg-[#001f3f]' : 'bg-gray-400'}`}
                onClick={() => {
                  setActiveButton('Latest');
                  filterMatches(matchDataList, false, true); // Show latest 5 matches per type
                  setShowUpcoming(false);
                }}
              >
                Latest
              </button>
              <button
                className={`w-24 h-8 rounded-full text-white text-xxs ${activeButton === 'Upcoming' ? 'bg-[#001f3f]' : 'bg-gray-400'}`}
                onClick={() => {
                  setActiveButton('Upcoming');
                  filterMatches(matchDataList, true); // Filter only upcoming matches
                  setShowUpcoming(true);
                }}
              >
                Upcoming
              </button>
              <button
                className={`w-24 h-8 rounded-full text-white text-xxs ${activeButton === 'Matches' ? 'bg-[#001f3f]' : 'bg-gray-400'}`}
                onClick={() => {
                  setActiveButton('Matches');
                  filterMatches(matchDataList); // Keep filters and show all matches
                  setShowUpcoming(false);
                }}
              >
                All Matches
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center flex-grow mt-7 space-y-4 px-4">
        {showUpcoming ? (
          <Upcoming formatDate={formatDate} />
        ) : (
          filteredMatches.map((matchData, index) => (
            <div key={index} className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 w-full max-w-5xl h-auto flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
             <div className="flex items-center justify-around w-full">
  {/* Left side (Team 1) */}
  <div className="flex flex-col items-center space-y-2 w-full sm:w-1/4">
    <img
      src='https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
      alt="RICHMOND COLLEGE"
      className="w-10 h-10 rounded-full"
    />
    <div className="text-center">
      <h3 className="text-xs  tracking-wide">RICHMOND COLLEGE</h3>
      <p className="text-sm  mt-2">
        {matchData.runs}/{matchData.wickets}
      </p>
      <p className="text-xxs">{matchData.overs}</p>
    </div>
  </div>

  {/* VS Divider */}
  <div className="flex flex-col items-center justify-center">
    <div className="h-6 w-px bg-gradient-to-b from-transparent via-white to-transparent sm:h-12" />
    <span className="text-white text-sm my-2">VS</span>
    <div className="h-6 w-px bg-gradient-to-t from-transparent via-white to-transparent sm:h-12" />
  </div>

  {/* Right side (Team 2) */}
<div className="flex flex-col items-center space-y-2 w-full sm:w-1/4">
  <img
    src='https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG'
    alt={matchData.opposition.toUpperCase()}
    className="w-10 h-10 rounded-full"
  />
  <div className="text-center">
    <h3 className="text-xs tracking-wide">{matchData.opposition.toUpperCase()}</h3>
    <p className="text-sm mt-2">{matchData.oppositionRuns}/{matchData.oppositionWickets}</p>
    <p className="text-xxs">{matchData.oppositionOvers}</p>
  </div>
</div>
</div>

              {/* Match details */}
              <div className="w-full sm:w-1/2 p-2 text-left flex flex-col items-start">
                <h4 className="text-xs  text-[#53A2F6]">
                  RICHMOND VS {matchData.opposition.toUpperCase()} {matchData.type.toUpperCase()}
                </h4>
                <div className="flex justify-between mt-2 w-full">
                  <div className="flex flex-col text-left">
                    <p className="text-xxs text-white">{formatDate(matchData.date)}</p>
                    <p className="text-xxs text-white mt-2">{matchData.venue.toUpperCase()}</p>
                  </div>
          
                  <div className="flex flex-col text-right">
                    <p className="text-xs  text-white">{matchData.result.toUpperCase()}</p>
                    <p className="text-xxs text-white mt-2">{matchData.tossResult}</p>
                  </div>
                </div>
          
                {/* Button */}
                <div className="flex justify-end w-full mt-4">
                  <button 
                    className="bg-[#53A2F6] rounded-full h-8 w-24 text-xxs  text-white hover:bg-blue-700"
                    onClick={() => handleMatchCentreClick(matchData)}
                  >
                    Score Card
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
