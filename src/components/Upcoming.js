import React, { useState, useEffect } from 'react';

// Function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
const API_URL = process.env.REACT_APP_API_URL;

// Function to check if a match is upcoming (future date)
const isUpcomingMatch = (matchDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset today's time to midnight for accurate comparison
  const matchDateObj = new Date(matchDate);
  
  // Ensure match date is strictly after today
  return matchDateObj > today;
};

export default function Upcoming() {
  const [matchDataList, setMatchDataList] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}matches/all`)
      .then(response => response.json())
      .then(data => {
        // Filter only the upcoming matches (strictly after today's date)
        const upcomingMatches = data.filter(match => isUpcomingMatch(match.date));
        setMatchDataList(upcomingMatches);
      })
      .catch(error => console.error('Error fetching match summaries:', error));
  }, []);

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
                src="https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg"
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
              <img
                src="https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG"
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
