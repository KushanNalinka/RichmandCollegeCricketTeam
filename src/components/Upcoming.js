import React, { useState, useEffect } from 'react';
// Helper functions for date formatting and upcoming match check
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};


const isUpcomingMatch = (matchDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const matchDateObj = new Date(matchDate);
  return matchDateObj > today;
};
// Filter function for upcoming matches
const filterMatches = (data, selectedAgeGroup, selectedMatchType) => {
  console.log("Filtering matches with:", { selectedAgeGroup, selectedMatchType }); // Debug log
  let filtered = data;
  console.log("Filtered data:", filtered);
  // Apply age group filter
  if (selectedAgeGroup !== 'All') {
    filtered = filtered.filter(match =>
      match.under && match.under.toLowerCase() === selectedAgeGroup.toLowerCase()
    );
  }
  // Apply match type filter
  if (selectedMatchType !== 'All') {
    filtered = filtered.filter(match =>
      match.type && match.type.toLowerCase() === selectedMatchType.toLowerCase()
    );
  }
  // Filter only upcoming matches
  const upcomingFiltered = filtered.filter(match => isUpcomingMatch(match.date));
  console.log("Upcoming matches after filtering:", upcomingFiltered); // Debug log
  return upcomingFiltered;
};
export default function Upcoming({ selectedAgeGroup, selectedMatchType }) {
  const [matchDataList, setMatchDataList] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:8080/api/matches/all")
      .then(response => response.json())
      .then(data => {
        const upcomingMatches = filterMatches(data, selectedAgeGroup, selectedMatchType);
        setMatchDataList(upcomingMatches);
      })
      .catch(error => console.error('Error fetching match summaries:', error));
  }, [selectedAgeGroup, selectedMatchType]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7 px-4">
      {matchDataList.length === 0 ? (
        <p className="text-white text-center col-span-2">No upcoming matches available.</p>
      ) : (
        matchDataList.map((matchData, index) => (
          <div
            key={index}
            className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 w-full max-w-5xl h-auto flex flex-row items-center justify-between space-x-4"
          >
            {/* Richmond College Info */}
            <div className="flex flex-col items-center space-y-2 w-1/4">
            <img
                src={require('../assets/images/LOGO.png')} // Dynamic import for assets in React
                alt="RICHMOND COLLEGE"
                className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
              />
              <div className="text-center">
                <h3 className="text-xxs font-semibold tracking-wide sm:text-xs">
                  RICHMOND COLLEGE
                </h3>
                <p className="text-xxs mt-2 sm:text-xs">Upcoming</p>
              </div>
            </div>
            {/* VS Section */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-6 w-px bg-gradient-to-b from-transparent via-white to-transparent sm:h-12" />
              <span className="text-white text-sm sm:text-sm my-2">VS</span>
              <div className="h-6 w-px bg-gradient-to-t from-transparent via-white to-transparent sm:h-12" />
            </div>
            {/* Opposition Info */}
            <div className="flex flex-col items-center space-y-2 w-1/4">
              {/* Dynamically load opposition logo */}
              <img
                src={matchData.logo}  // <-- Use the logo from match data
                alt={matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"}
                className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
              />
              <div className="text-center">
                <h3 className="text-xxs font-semibold tracking-wide sm:text-xs">
                  {matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"}
                </h3>
                <p className="text-xxs mt-2 sm:text-xs">Upcoming</p>
              </div>
            </div>
            {/* Match Info */}
            <div className="w-1/2 p-2 text-left flex flex-col items-start">
              <h4 className="text-xxs font-bold text-[#53A2F6] sm:text-xs">
                RICHMOND VS {matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"} {matchData.type ? matchData.type.toUpperCase() : ""}
              </h4>
              <p className="text-xxs sm:text-xs mt-2 text-[#B4CDDC]">
                {matchData.venue ? matchData.venue : "Unknown Venue"} - {matchData.date ? formatDate(matchData.date) : "Unknown Date"} at {matchData.time ? matchData.time : "Unknown Time"}
              </p>
              <p className="text-xxs sm:text-xs mt-2 font-semibold">
                Upcoming Match
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
