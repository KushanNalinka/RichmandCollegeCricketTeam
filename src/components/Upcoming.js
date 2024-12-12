
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';


// Helper functions for date formatting and upcoming match check
const API_URL = process.env.REACT_APP_API_URL;
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
  console.log("Filtering matches with:", { selectedAgeGroup, selectedMatchType });
  let filtered = data;
  
  if (selectedAgeGroup !== 'All') {
    filtered = filtered.filter(
      (match) =>
        `${match.under}-${match.teamYear}`.toLowerCase() === selectedAgeGroup.toLowerCase()
    );
  }


  if (selectedMatchType !== 'All') {
    filtered = filtered.filter(match =>
      match.type && match.type.toLowerCase() === selectedMatchType.toLowerCase()
    );
  }

  return filtered.filter(match => isUpcomingMatch(match.date));
};

export default function Upcoming({ selectedAgeGroup, selectedMatchType }) {
  const [matchDataList, setMatchDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;  // Set the limit of items per page

  useEffect(() => {
    fetch(`${API_URL}/matches/all`)
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Matches:", data); // Log all fetched matches
        const upcomingMatches = filterMatches(data, selectedAgeGroup, selectedMatchType);
        console.log("Filtered Matches:", upcomingMatches); // Log matches after applying filters
        setMatchDataList(upcomingMatches);
      })
      .catch(error => console.error('Error fetching match summaries:', error));
  }, [selectedAgeGroup, selectedMatchType]);

  // Calculate the matches to show on the current page
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentMatches = matchDataList.slice(startIdx, startIdx + itemsPerPage);
  const totalPages = Math.ceil(matchDataList.length / itemsPerPage);

 
   const handlePageChange = (page)=> {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page)
;

    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7 px-4">
        {currentMatches.length === 0 ? (
          <p className="text-black text-center col-span-2">No upcoming matches available.</p>
        ) : (
          currentMatches.map((matchData, index) => (
            <div
              key={index}
              className="bg-white text-[#012D5E] rounded-3xl shadow-lg p-4 w-full max-w-5xl h-auto flex flex-row items-center justify-between space-x-4 font-bold"
            >
              {/* {/ Richmond College Info /} */}
              <div className="flex flex-col items-center space-y-2 w-1/4 font-bold">
                <img
                  src={require('../assets/images/LOGO.png')}
                  alt="RICHMOND COLLEGE"
                  className="w-10 h-10 sm:w-10 sm:h-10"
                />
                <div className="text-center">
                  <h3 className="text-xxs font-semibold tracking-wide sm:text-xs">
                    RICHMOND COLLEGE
                  </h3>
                  <p className="text-xxs mt-2 sm:text-xs">Upcoming</p>
                </div>
              </div>
            
          <div className="flex flex-col justify-center items-center w-[10%]">
                      <div className="w-[1px] h-4 bg-gradient-to-b from-transparent via-black to-transparent"></div>
                      <p className="lg:text-sm text-xs font-serif font-semibold text-[#08165A]">V<span className="lg:text-lg text-lg font-bold text-[#480D35]">S</span></p>
                      <div className="w-[1px] h-4 bg-gradient-to-b from-transparent via-black to-transparent"></div>
                    </div>
              {/* {/ Opposition Info /} */}
              <div className="flex flex-col items-center space-y-2 w-1/4">
                <img
                   src={`${`http://rcc.dockyardsoftware.com/images/${ matchData.logo ? matchData.logo .split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
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
              {/* {/ Match Info /} */}
              <div className="w-1/2 p-2 text-left flex flex-col items-start text-[#012D5E] font-bold">
                <h4 className="text-xxs font-bold text-[#53A2F6] sm:text-xs">
                  RICHMOND VS {matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"} {matchData.type ? matchData.type.toUpperCase() : ""}
                </h4>
                <p className="text-xxs sm:text-xs mt-2 text-black">
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
     {/* {/ Pagination controls /} */}
<div className="pagination flex justify-center space-x-2 mt-4">
  <button
    disabled={currentPage === 1}
    onClick={() => handlePageChange(currentPage - 1)}
    className={`w-8 h-8 flex items-center justify-center rounded ${
      currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-400'
    }`}
  >
    «
  </button>
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => handlePageChange(index + 1)}
      className={`w-8 h-8 flex items-center justify-center rounded ${
        currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-400'
      }`}
    >
      {index + 1}
    </button>
  ))}
  <button
    disabled={currentPage === totalPages}
    onClick={() => handlePageChange(currentPage + 1)}
    className={`w-8 h-8 flex items-center justify-center rounded ${
      currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-400'
    }`}
  >
    »
  </button>
</div>
<Footer/>
</div>

  );
}
