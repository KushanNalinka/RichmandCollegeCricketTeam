



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopLayer from '../components/TopLayer';
// import topImage from '../assets/images/BG3.png';
// import Upcoming from '../components/Upcoming';
// import Footer from '../components/Footer';

// export default function MatchInfo() {
//   const [matchDataList, setMatchDataList] = useState([]);
//   const [filteredMatches, setFilteredMatches] = useState([]);
//   const [ageGroups, setAgeGroups] = useState([]);
//   const [matchTypes, setMatchTypes] = useState([]);
//   const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
//   const [selectedMatchType, setSelectedMatchType] = useState('All');
//   const [activeButton, setActiveButton] = useState('Latest');
//   const [showUpcoming, setShowUpcoming] = useState(false);
//   const API_URL = process.env.REACT_APP_API_URL;

//   const navigate = useNavigate();

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-GB', {
//       day: '2-digit',
//       month: 'short',
//       year: 'numeric',
//     });
//   };

//   const isUpcomingMatch = (matchDate) => {
//     const today = new Date();
//     const matchDay = new Date(matchDate);
//     return matchDay >= today.setHours(0, 0, 0, 0);
//   };

//   useEffect(() => {

//     fetch(`${API_URL}matchSummary/all`)

//       .then(response => response.json())
//       .then(data => {
//         setMatchDataList(data);
//         filterMatches(data, false, true);
        
//         // Extract unique age groups and match types from the data
//         const uniqueAgeGroups = Array.from(new Set(data.map(match => match.under)));
//         const uniqueMatchTypes = Array.from(new Set(data.map(match => match.type)));
        
//         // Set the state with the extracted unique values
//         setAgeGroups(['All', ...uniqueAgeGroups]); // Add 'All' as the first option
//         setMatchTypes(['All', ...uniqueMatchTypes]); // Add 'All' as the first option
//       })
//       .catch(error => console.error('Error fetching match summaries:', error));
//   }, []);

//   useEffect(() => {
//     if (activeButton === 'Latest') {
//       filterMatches(matchDataList, false, true);
//     } else if (activeButton === 'Upcoming') {
//       filterMatches(matchDataList, true);
//     } else {
//       filterMatches(matchDataList);
//     }
//   }, [selectedAgeGroup, selectedMatchType, activeButton]);

//   const filterMatches = (data = matchDataList, showOnlyUpcoming = false, latest = false) => {
//     let filtered = [...data];

//     if (selectedAgeGroup !== 'All') {
//       filtered = filtered.filter(match =>
//         match.under && match.under.toLowerCase() === selectedAgeGroup.toLowerCase()
//       );
//     }

//     if (selectedMatchType !== 'All') {
//       filtered = filtered.filter(match =>
//         match.type && match.type.toLowerCase() === selectedMatchType.toLowerCase()
//       );
//     }

//     if (showOnlyUpcoming) {
//       filtered = filtered.filter(match => isUpcomingMatch(match.date));
//     }

//     filtered.sort((a, b) => showOnlyUpcoming
//       ? new Date(a.date) - new Date(b.date)
//       : new Date(b.date) - new Date(a.date)
//     );

//     if (latest) {
//       const groupedMatches = filtered.reduce((acc, match) => {
//         if (!acc[match.type]) acc[match.type] = [];
//         acc[match.type].push(match);
//         return acc;
//       }, {});

//       filtered = [];
//       if (selectedMatchType === 'All') {
//         let count = 0;
//         Object.values(groupedMatches).forEach(group => {
//           const latestMatches = group.slice(0, 5);
//           filtered = filtered.concat(latestMatches);
//           count += latestMatches.length;
//           if (count >= 5) return;
//         });
//         filtered = filtered.slice(0, 5);
//       } else {
//         if (groupedMatches[selectedMatchType]) {
//           filtered = groupedMatches[selectedMatchType].slice(0, 5);
//         }
//       }
//     }

//     if (selectedMatchType === 'Test' || filtered.some(match => match.type.toLowerCase() === 'test')) {
//       const groupedByMatchId = filtered.reduce((acc, match) => {
//         if (match.type.toLowerCase() === 'test') {
//           if (!acc[match.matchId]) {
//             acc[match.matchId] = { ...match, innings: [] };
//           }
//           acc[match.matchId].innings.push({
//             runs: match.runs,
//             wickets: match.wickets,
//             overs: match.overs,
//             oppositionRuns: match.oppositionRuns,
//             oppositionWickets: match.oppositionWickets,
//             oppositionOvers: match.oppositionOvers,
//             result: match.result,
//           });
//           acc[match.matchId].result = match.result;
//         } else {
//           acc[match.matchId] = match;
//         }
//         return acc;
//       }, {});

//       filtered = Object.values(groupedByMatchId);
//     }

//     console.log("Final filtered matches: ", filtered);
//     setFilteredMatches(filtered);
//   };

//   const handleMatchCentreClick = (match) => {
//     const richmondLogo = require('../assets/images/LOGO.png');
  
//     navigate('/scorecard', {
//       state: {
//         match: {
//           matchId: match.matchId,
//           type: match.type,
//           league: `RICHMOND VS ${match.opposition.toUpperCase()} ${match.type.toUpperCase()}`,
//           date: formatDate(match.date),
//           result: match.result.toUpperCase(),
//           tossResult: match.tossResult,
//           stadiumLine1: match.venue.toUpperCase(),
//           stadiumLine2: "",
//         },
//         matchType: match.type,
//         teams: [
//           {
//             name: "Richmond College",
//             logo: richmondLogo,
//             score: match.innings && match.innings.length > 1
//               ? `${match.runs}/${match.wickets} & ${match.innings[1]?.runs}/${match.innings[1]?.wickets}`
//               : `${match.runs}/${match.wickets}`,
//             overs: match.innings && match.innings.length > 1
//               ? `${match.overs} & ${match.innings[1]?.overs}`
//               : match.overs,
//           },
//           {
//             name: match.opposition,
//             logo: match.logo,
//             score: match.innings && match.innings.length > 1
//               ? `${match.oppositionRuns}/${match.oppositionWickets} & ${match.innings[1]?.oppositionRuns}/${match.innings[1]?.oppositionWickets}`
//               : `${match.oppositionRuns}/${match.oppositionWickets}`,
//             overs: match.innings && match.innings.length > 1
//               ? `${match.oppositionOvers} & ${match.innings[1]?.oppositionOvers}`
//               : match.oppositionOvers,
//           }
//         ]
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center bg-gray-100">
//       <div className="relative">
//         <TopLayer />
//         <div
//           style={{
//             backgroundImage: `url(${topImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed',
//             height: '180px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <div className="flex flex-col items-center justify-center text-white space-y-4 w-full text-xs mt-70">
//             <div className="flex flex-row space-x-4 w-full max-w-[20rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem]">
//               <select
//                 className="bg-transparent/30 rounded-2xl p-2 pr-10 text-white w-full text-xs focus:outline-none"
//                 value={selectedAgeGroup}
//                 onChange={(e) => {
//                   setSelectedAgeGroup(e.target.value);
//                   filterMatches(matchDataList, false, activeButton === 'Latest');
//                 }}
//               >
//                 {ageGroups.map((ageGroup, index) => (
//                   <option key={index} value={ageGroup}>{ageGroup}</option>
//                 ))}
//               </select>

//               <select
//                 className="bg-transparent/30 rounded-2xl p-2 pr-8 text-white w-full text-xs focus:outline-none"
//                 value={selectedMatchType}
//                 onChange={(e) => {
//                   setSelectedMatchType(e.target.value);
//                   filterMatches(matchDataList, false, activeButton === 'Latest');
//                 }}
//               >
//                 {matchTypes.map((matchType, index) => (
//                   <option key={index} value={matchType}>{matchType}</option>
//                 ))}
//               </select>
//   </div>



//             <div className="flex space-x-4">
//               <button
//                 className={`w-24 h-8 rounded-full text-white text-xxs  ${activeButton === 'Latest' ? 'bg-[#001f3f]' : 'bg-gray-400'}`}
//                 onClick={() => {
//                   setActiveButton('Latest');
//                   filterMatches(matchDataList, false, true); // Show latest 5 matches per type
//                   setShowUpcoming(false);
//                 }}
//               >
//                 Latest
//               </button>
//               <button
//                 className={`w-24 h-8 rounded-full text-white text-xxs ${activeButton === 'Upcoming' ? 'bg-[#001f3f]' : 'bg-gray-400'}`}
//                 onClick={() => {
//                   setActiveButton('Upcoming');
//                   filterMatches(matchDataList, true); // Filter only upcoming matches
//                   setShowUpcoming(true);
//                 }}
//               >
//                 Upcoming
//               </button>
//               <button
//                 className={`w-24 h-8 rounded-full text-white text-xxs ${activeButton === 'Matches' ? 'bg-[#001f3f]' : 'bg-gray-400'}`}
//                 onClick={() => {
//                   setActiveButton('Matches');
//                   filterMatches(matchDataList); // Keep filters and show all matches
//                   setShowUpcoming(false);
//                 }}
//               >
//                 All Matches
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center flex-grow mt-7 space-y-4 px-4">
//   {showUpcoming ? (
//     <Upcoming selectedAgeGroup={selectedAgeGroup} selectedMatchType={selectedMatchType} />
//   ) : (
//     filteredMatches.map((matchData, index) => (
//       <div
//         key={index}
//         className="bg-white font-bold text-[#012D5E] rounded-3xl shadow-lg p-4 w-full max-w-5xl h-auto flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0"
//       >
//         {/* Richmond College Section */}
//         <div className="flex flex-row items-center justify-between w-full">
//           <div className="flex flex-col items-center w-full sm:w-1/2">
//             <img
//               src={require('../assets/images/LOGO.png')}
//               alt="RICHMOND COLLEGE"
//               className="w-10 h-10 sm:w-12 sm:h-12 "
//             />
//             <h3 className="text-xxs sm:text-sm text-[#012D5E] font-bold tracking-wide mt-2">RICHMOND COLLEGE</h3>
//             {matchData.type.toLowerCase() === 'test' && matchData.innings ? (
//               matchData.innings.map((inning, idx) => (
//                 <div key={idx} className="mt-2">
//                   <p className="text-sm sm:text-xs mt-2">{inning.runs}/{inning.wickets}</p>
//                   <p className="text-xxs sm:text-xxs  text-center">{inning.overs}</p>
//                 </div>
//               ))
//             ) : (
//               <>
//                 <p className="text-sm sm:text-xs mt-2">{matchData.runs}/{matchData.wickets}</p>
//                 <p className="text-xxs sm:text-xxs">{matchData.overs}</p>
//               </>
//             )}
//           </div>

//           {/* VS Divider */}
//           <div className="flex flex-col items-center justify-center">
//             <div className="h-6 md:h-10 w-px bg-gradient-to-b from-transparent via-[#012D5E] to-transparent sm:h-12" />
//             <span className="text-[#012D5E] text-sm sm:text-base my-2">VS</span>
//             <div className="h-6 md:h-10 w-px bg-gradient-to-t from-transparent via-[#012D5E] to-transparent sm:h-12 " />
//           </div>

//           {/* Opposition Section */}
//           <div className="flex flex-col items-center w-full sm:w-1/2">
//             <img
//               src={matchData.logo}
//               alt={matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"}
//               className="w-10 h-10 sm:w-12 sm:h-12 "
//             />
//             <h3 className="text-xxs sm:text-sm tracking-wide mt-2 font-bold">{matchData.opposition.toUpperCase()}</h3>
//             {matchData.type.toLowerCase() === 'test' && matchData.innings ? (
//               matchData.innings.map((inning, idx) => (
//                 <div key={idx} className="mt-2">
//                   <p className="text-sm sm:text-xs mt-2">{inning.oppositionRuns}/{inning.oppositionWickets}</p>
//                   <p className=" text-xxs sm:text-xxs text-center">{inning.oppositionOvers}</p>
//                 </div>
//               ))
//             ) : (
//               <>
//                 <p className="text-sm sm:text-xs mt-2">{matchData.oppositionRuns}/{matchData.oppositionWickets}</p>
//                 <p className="text-xxs sm:text-xxs">{matchData.oppositionOvers}</p>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Match Details Section */}
//         <div className="w-full sm:w-1/2 p-2 text-left flex flex-col items-start ">
//           <h4 className="text-xs sm:text-sm text-[#012D5E] mt-2 font-bold">
//             {matchData.result.toUpperCase()} ({matchData.type.toUpperCase()})
//           </h4>
//           <div className="flex justify-between mt-2 w-full">
//             <div className="flex flex-col text-left">
//               <p className="text-xxs sm:text-xxs text-black">{formatDate(matchData.date)}</p>
//               <p className="text-xxs sm:text-xxs text-black mt-2">{matchData.venue.toUpperCase()}</p>
//             </div>
//             <div className="flex flex-col text-right">
             
//               <p className="text-xxs sm:text-xs text-black mt-2">{matchData.tossResult}</p>
//             </div>
//           </div>
//           <div className="flex justify-end w-full mt-4">
//             <button
//               className="bg-[#012D5E] rounded-full h-8 sm:h-10 w-24 sm:w-28 text-xxs sm:text-xs text-white hover:bg-blue-700"
//               onClick={() => handleMatchCentreClick(matchData)}
//             >
//               Score Card
//             </button>
//           </div>
//         </div>
//       </div>
//           ))
//         )}


//       </div>

      
//              {/* Footer */}
//              <Footer/>
//     </div>
//   );
// }





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopLayer from '../components/TopLayer';
// import topImage from '../assets/images/BG3.png';
// import Upcoming from '../components/Upcoming';
// import Footer from '../components/Footer';

// export default function MatchInfo() {
//   const [matchDataList, setMatchDataList] = useState([]);
//   const [filteredMatches, setFilteredMatches] = useState([]);
//   const [ageGroups, setAgeGroups] = useState([]);
//   const [matchTypes, setMatchTypes] = useState([]);
//   const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
//   const [selectedMatchType, setSelectedMatchType] = useState('All');
//   const [activeButton, setActiveButton] = useState('Latest');
//   const [showUpcoming, setShowUpcoming] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const matchesPerPage = 5;
//   const API_URL = process.env.REACT_APP_API_URL;

//   const navigate = useNavigate();

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-GB', {
//       day: '2-digit',
//       month: 'short',
//       year: 'numeric',
//     });
//   };

//   const isUpcomingMatch = (matchDate) => {
//     const today = new Date();
//     const matchDay = new Date(matchDate);
//     return matchDay >= today.setHours(0, 0, 0, 0);
//   };

//   useEffect(() => {
//     fetch(`${API_URL}matchSummary/all`)
//       .then(response => response.json())
//       .then(data => {
//         setMatchDataList(data);
//         filterMatches(data, false, true);
        
//         // Extract unique age groups and match types from the data
//         const uniqueAgeGroups = Array.from(new Set(data.map(match => match.under)));
//         const uniqueMatchTypes = Array.from(new Set(data.map(match => match.type)));
        
//         setAgeGroups(['All', ...uniqueAgeGroups]);
//         setMatchTypes(['All', ...uniqueMatchTypes]);
//       })
//       .catch(error => console.error('Error fetching match summaries:', error));
//   }, []);

//   useEffect(() => {
//     if (activeButton === 'Latest') {
//       filterMatches(matchDataList, false, true);
//     } else if (activeButton === 'Upcoming') {
//       filterMatches(matchDataList, true);
//     } else {
//       filterMatches(matchDataList);
//     }
//   }, [selectedAgeGroup, selectedMatchType, activeButton, currentPage]);


//   // Inside your main component:

// const filterMatches = (data = matchDataList, showOnlyUpcoming = false, latest = false) => {
//   let filtered = [...data];

//   if (selectedAgeGroup !== 'All') {
//     filtered = filtered.filter(match => 
//       match.under && match.under.toLowerCase() === selectedAgeGroup.toLowerCase()
//     );
//   }

//   if (selectedMatchType !== 'All') {
//     filtered = filtered.filter(match => 
//       match.type && match.type.toLowerCase() === selectedMatchType.toLowerCase()
//     );
//   }

//   if (showOnlyUpcoming) {
//     filtered = filtered.filter(match => isUpcomingMatch(match.date));
//   }

//   filtered.sort((a, b) => showOnlyUpcoming 
//     ? new Date(a.date) - new Date(b.date) 
//     : new Date(b.date) - new Date(a.date)
//   );

//   if (latest) {
//     const groupedMatches = filtered.reduce((acc, match) => {
//       if (!acc[match.type]) acc[match.type] = [];
//       acc[match.type].push(match);
//       return acc;
//     }, {});

//     filtered = [];
//     if (selectedMatchType === 'All') {
//       let count = 0;
//       Object.values(groupedMatches).forEach(group => {
//         const latestMatches = group.slice(0, 5);
//         filtered = filtered.concat(latestMatches);
//         count += latestMatches.length;
//         if (count >= 5) return;
//       });
//       filtered = filtered.slice(0, 5);
//     } else {
//       if (groupedMatches[selectedMatchType]) {
//         filtered = groupedMatches[selectedMatchType].slice(0, 5);
//       }
//     }
//   }

//   setFilteredMatches(filtered);

//   // Only reset to the first page if filters have changed
//   if (selectedAgeGroup !== 'All' || selectedMatchType !== 'All' || activeButton !== 'Matches') {
//     setCurrentPage(1);
//   }
// };

// // Adjust handlePageChange to prevent unnecessary re-renders or state resets
// const handlePageChange = (page)  =>
//  {
//   if (page !== currentPage) {
//     setCurrentPage(page)
// ;
//   }
// };

//   const paginateMatches = filteredMatches.slice(
//     (currentPage - 1) * matchesPerPage,
//     currentPage * matchesPerPage
//   );

//   const totalPages = Math.ceil(filteredMatches.length / matchesPerPage);

 
//   const handleMatchCentreClick = (match) => {
//     const richmondLogo = require('../assets/images/LOGO.png');
  
//     navigate('/scorecard', {
//       state: {
//         match: {
//           matchId: match.matchId,
//           type: match.type,
//           league: `RICHMOND VS ${match.opposition.toUpperCase()} ${match.type.toUpperCase()}`,
//           date: formatDate(match.date),
//           result: match.result.toUpperCase(),
//           tossResult: match.tossResult,
//           stadiumLine1: match.venue.toUpperCase(),
//           stadiumLine2: "",
//         },
//         matchType: match.type,
//         teams: [
//           {
//             name: "Richmond College",
//             logo: richmondLogo,
//             score: match.innings && match.innings.length > 1
//               ? `${match.runs}/${match.wickets} & ${match.innings[1]?.runs}/${match.innings[1]?.wickets}`
//               : `${match.runs}/${match.wickets}`,
//             overs: match.innings && match.innings.length > 1
//               ? `${match.overs} & ${match.innings[1]?.overs}`
//               : match.overs,
//           },
//           {
//             name: match.opposition,
//             logo: match.logo,
//             score: match.innings && match.innings.length > 1
//               ? `${match.oppositionRuns}/${match.oppositionWickets} & ${match.innings[1]?.oppositionRuns}/${match.innings[1]?.oppositionWickets}`
//               : `${match.oppositionRuns}/${match.oppositionWickets}`,
//             overs: match.innings && match.innings.length > 1
//               ? `${match.oppositionOvers} & ${match.innings[1]?.oppositionOvers}`
//               : match.oppositionOvers,
//           }
//         ]
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center bg-gray-100">
//       <div className="relative">
//         <TopLayer />
//         <div
//           style={{
//             backgroundImage: `url(${topImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed',
//             height: '180px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <div className="flex flex-col items-center justify-center text-white space-y-4 w-full text-xs mt-70">
//             <div className="flex flex-row space-x-4 w-full max-w-[20rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem]">
//               <select
//                 className="bg-transparent/30 rounded-2xl p-2 pr-10 text-white w-full text-xs focus:outline-none"
//                 value={selectedAgeGroup}
//                 onChange={(e) => {
//                   setSelectedAgeGroup(e.target.value);
//                   filterMatches(matchDataList, false, activeButton === 'Latest');
//                 }}
//               >
//                 {ageGroups.map((ageGroup, index) => (
//                   <option key={index} value={ageGroup}>{ageGroup}</option>
//                 ))}
//               </select>

//               <select
//                 className="bg-transparent/30 rounded-2xl p-2 pr-8 text-white w-full text-xs focus:outline-none"
//                 value={selectedMatchType}
//                 onChange={(e) => {
//                   setSelectedMatchType(e.target.value);
//                   filterMatches(matchDataList, false, activeButton === 'Latest');
//                 }}
//               >
//                 {matchTypes.map((matchType, index) => (
//                   <option key={index} value={matchType}>{matchType}</option>
//                 ))}
//               </select>
//   </div>



//             <div className="flex space-x-4">
//               <button
//                 className={`w-24 h-8 rounded-full text-white text-xxs  ${activeButton === 'Latest' ? 'bg-[#001f3f]' : 'bg-gray-400'}`}
//                 onClick={() => {
//                   setActiveButton('Latest');
//                   filterMatches(matchDataList, false, true); // Show latest 5 matches per type
//                   setShowUpcoming(false);
//                 }}
//               >
//                 Latest
//               </button>
//               <button
//                 className={`w-24 h-8 rounded-full text-white text-xxs ${activeButton === 'Upcoming' ? 'bg-[#001f3f]' : 'bg-gray-400'}`}
//                 onClick={() => {
//                   setActiveButton('Upcoming');
//                   filterMatches(matchDataList, true); // Filter only upcoming matches
//                   setShowUpcoming(true);
//                 }}
//               >
//                 Upcoming
//               </button>
//               <button
//                 className={`w-24 h-8 rounded-full text-white text-xxs ${activeButton === 'Matches' ? 'bg-[#001f3f]' : 'bg-gray-400'}`}
//                 onClick={() => {
//                   setActiveButton('Matches');
//                   filterMatches(matchDataList); // Keep filters and show all matches
//                   setShowUpcoming(false);
//                 }}
//               >
//                 All Matches
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center flex-grow mt-7 space-y-4 px-4">
//       {showUpcoming ? (
//   <Upcoming selectedAgeGroup={selectedAgeGroup} selectedMatchType={selectedMatchType} />
// ) : (
//   paginateMatches.map((matchData, index) => (
//     <div
//       key={index}
//       className="bg-white font-bold text-[#012D5E] rounded-3xl shadow-lg p-4 w-full max-w-5xl h-auto flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0"
//     >
//         {/* {/ Richmond College Section /} */}
//         <div className="flex flex-row items-center justify-between w-full">
//           <div className="flex flex-col items-center w-full sm:w-1/2">
//             <img
//               src={require('../assets/images/LOGO.png')}
//               alt="RICHMOND COLLEGE"
//               className="w-10 h-10 sm:w-12 sm:h-12 "
//             />
//             <h3 className="text-xxs sm:text-sm text-[#012D5E] font-bold tracking-wide mt-2">RICHMOND COLLEGE</h3>
//             {matchData.type.toLowerCase() === 'test' && matchData.innings ? (
//               matchData.innings.map((inning, idx) => (
//                 <div key={idx} className="mt-2">
//                   <p className="text-sm sm:text-xs mt-2">{inning.runs}/{inning.wickets}</p>
//                   <p className="text-xxs sm:text-xxs  text-center">{inning.overs}</p>
//                 </div>
//               ))
//             ) : (
//               <>
//                 <p className="text-sm sm:text-xs mt-2">{matchData.runs}/{matchData.wickets}</p>
//                 <p className="text-xxs sm:text-xxs">{matchData.overs}</p>
//               </>
//             )}
//           </div>

//           {/* {/ VS Divider /} */}
//           <div className="flex flex-col items-center justify-center">
//             <div className="h-6 md:h-10 w-px bg-gradient-to-b from-transparent via-[#012D5E] to-transparent sm:h-12" />
//             <span className="text-[#012D5E] text-sm sm:text-base my-2">VS</span>
//             <div className="h-6 md:h-10 w-px bg-gradient-to-t from-transparent via-[#012D5E] to-transparent sm:h-12 " />
//           </div>
// {/* 
//           {/ Opposition Section /} */}
//           <div className="flex flex-col items-center w-full sm:w-1/2">
//             <img
//               src={matchData.logo}
//               alt={matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"}
//               className="w-10 h-10 sm:w-12 sm:h-12 "
//             />
//             <h3 className="text-xxs sm:text-sm tracking-wide mt-2 font-bold">{matchData.opposition.toUpperCase()}</h3>
//             {matchData.type.toLowerCase() === 'test' && matchData.innings ? (
//               matchData.innings.map((inning, idx) => (
//                 <div key={idx} className="mt-2">
//                   <p className="text-sm sm:text-xs mt-2">{inning.oppositionRuns}/{inning.oppositionWickets}</p>
//                   <p className=" text-xxs sm:text-xxs text-center">{inning.oppositionOvers}</p>
//                 </div>
//               ))
//             ) : (
//               <>
//                 <p className="text-sm sm:text-xs mt-2">{matchData.oppositionRuns}/{matchData.oppositionWickets}</p>
//                 <p className="text-xxs sm:text-xxs">{matchData.oppositionOvers}</p>
//               </>
//             )}
//           </div>
//         </div>

//         {/* {/ Match Details Section /} */}
//         <div className="w-full sm:w-1/2 p-2 text-left flex flex-col items-start ">
//           <h4 className="text-xs sm:text-sm text-[#012D5E] mt-2 font-bold">
//             {matchData.result.toUpperCase()} ({matchData.type.toUpperCase()})
//           </h4>
//           <div className="flex justify-between mt-2 w-full">
//             <div className="flex flex-col text-left">
//               <p className="text-xxs sm:text-xxs text-black">{formatDate(matchData.date)}</p>
//               <p className="text-xxs sm:text-xxs text-black mt-2">{matchData.venue.toUpperCase()}</p>
//             </div>
//             <div className="flex flex-col text-right">
             
//               <p className="text-xxs sm:text-xs text-black mt-2">{matchData.tossResult}</p>
//             </div>
//           </div>
//           <div className="flex justify-end w-full mt-4">
//             <button
//               className="bg-[#012D5E] rounded-full h-8 sm:h-10 w-24 sm:w-28 text-xxs sm:text-xs text-white hover:bg-blue-700"
//               onClick={() => handleMatchCentreClick(matchData)}
//             >
//               Score Card
//             </button>
//           </div>
//         </div>
//       </div>
//           ))
//         )}

//          {/* {/ Render paginated match items /} */}
//          <div className="match-list">
//           {paginateMatches.map((match, index) => (
//             <div key={index}>
//               {/* {/ Render each match item /} */}
//             </div>
//           ))}
//         </div>

//       {/* {/ Pagination controls /} */}
// {!showUpcoming && activeButton !== 'Latest' && (
//   <div className="pagination flex space-x-2 mt-4">
//     <button
//       disabled={currentPage === 1}
//       onClick={() => handlePageChange(currentPage - 1)}
//       className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded"
//     >
//       «
//     </button>
//     {Array.from({ length: totalPages }, (_, index) => (
//       <button
//         key={index}
//         onClick={() => handlePageChange(index + 1)}
//         className={`w-8 h-8 flex items-center justify-center rounded ${
//           currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-400'
//         }`}
//       >
//         {index + 1}
//       </button>
//     ))}
//     <button
//       disabled={currentPage === totalPages}
//       onClick={() => handlePageChange(currentPage + 1)}
//       className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded"
//     >
//       »
//     </button>
//   </div>
// )}

// </div>
  

// {/*       
//              {/ Footer /} */}
//              <Footer/>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopLayer from '../components/TopLayer';
import topImage from '../assets/images/BG3.png';
import Upcoming from '../components/Upcoming';
import Footer from '../components/Footer';

export default function MatchInfo() {
  const [matchDataList, setMatchDataList] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [ageGroups, setAgeGroups] = useState([]);
  const [matchTypes, setMatchTypes] = useState([]);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [selectedMatchType, setSelectedMatchType] = useState('All');
  const [activeButton, setActiveButton] = useState('Latest');
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const matchesPerPage = 5;
  const API_URL = process.env.REACT_APP_API_URL;

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
    return matchDay >= today.setHours(0, 0, 0, 0);
  };

  

  useEffect(() => {
    fetch(`${API_URL}matchSummary/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched match summaries:", data); // Log the API data
        setMatchDataList(data);
        filterMatches(data, false, true);
  
        // Extract unique age groups and match types from the data
        const uniqueAgeGroups = Array.from(
          new Set(data.map((match) => `${match.under}-${match.teamYear}`))
        );
        const uniqueMatchTypes = Array.from(new Set(data.map((match) => match.type)));
  
        // Set the state with the extracted unique values
        setAgeGroups(["All", ...uniqueAgeGroups]); // Add 'All' as the first option
        setMatchTypes(["All", ...uniqueMatchTypes]); // Add 'All' as the first option
      })
      .catch((error) => console.error("Error fetching match summaries:", error));
  }, []);
  

  useEffect(() => {
    if (activeButton === 'Latest') {
      filterMatches(matchDataList, false, true);
    } else if (activeButton === 'Upcoming') {
      filterMatches(matchDataList, true);
    } else {
      filterMatches(matchDataList);
    }
  }, [selectedAgeGroup, selectedMatchType, activeButton]);

  const filterMatches = (data = matchDataList, showOnlyUpcoming = false, latest = false) => {
    let filtered = [...data];
  
    if (selectedAgeGroup !== 'All') {
      filtered = filtered.filter(
        (match) =>
          `${match.under}-${match.teamYear}`.toLowerCase() === selectedAgeGroup.toLowerCase()
      );
    }
  
    if (selectedMatchType !== 'All') {
      filtered = filtered.filter(
        (match) =>
          match.type && match.type.toLowerCase() === selectedMatchType.toLowerCase()
      );
    }
  
    if (showOnlyUpcoming) {
      filtered = filtered.filter((match) => isUpcomingMatch(match.date));
    }
  
    // Sort matches based on upcoming or latest
    filtered.sort((a, b) =>
      showOnlyUpcoming
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );
  
    // Handle Test matches and group by match ID for multi-innings
    const consolidateTestMatches = (matches) => {
      const groupedByMatchId = matches.reduce((acc, match) => {
        if (match.type.toLowerCase() === 'test') {
          if (!acc[match.matchId]) {
            acc[match.matchId] = { ...match, innings: [] };
          }
          acc[match.matchId].innings.push({
            runs: match.runs,
            wickets: match.wickets,
            overs: match.overs,
            oppositionRuns: match.oppositionRuns,
            oppositionWickets: match.oppositionWickets,
            oppositionOvers: match.oppositionOvers,
          });
          acc[match.matchId].result = match.result; // Update result at match level
        } else {
          acc[match.matchId] = match;
        }
        return acc;
      }, {});
  
      return Object.values(groupedByMatchId);
    };
  
    if (selectedMatchType === 'Test' || filtered.some((match) => match.type.toLowerCase() === 'test')) {
      filtered = consolidateTestMatches(filtered);
    }
  
    // Handle latest matches logic
    if (latest) {
      const groupedMatches = filtered.reduce((acc, match) => {
        if (!acc[match.type]) acc[match.type] = [];
        acc[match.type].push(match);
        return acc;
      }, {});
  
      filtered = [];
      if (selectedMatchType === 'All') {
        let count = 0;
        Object.values(groupedMatches).forEach((group) => {
          const latestMatches = group.slice(0, 5);
          filtered = filtered.concat(latestMatches);
          count += latestMatches.length;
          if (count >= 5) return;
        });
        filtered = filtered.slice(0, 5);
      } else if (groupedMatches[selectedMatchType]) {
        filtered = groupedMatches[selectedMatchType].slice(0, 5);
      }
    }
  
    console.log("Final filtered matches: ", filtered);
    setFilteredMatches(filtered);
  };
  

  const handleMatchCentreClick = (match) => {
    const richmondLogo = require('../assets/images/LOGO.png');
  
    navigate('/scorecard', {
      state: {
        match: {
          matchId: match.matchId,
          type: match.type,
          league: `RICHMOND VS ${match.opposition.toUpperCase()} ${match.type.toUpperCase()}`,
          date: formatDate(match.date),
          result: match.result.toUpperCase(),
          tossResult: match.tossResult,
          stadiumLine1: match.venue.toUpperCase(),
          stadiumLine2: "",
        },
        matchType: match.type,
        teams: [
          {
            name: "Richmond College",
            logo: richmondLogo,
            score: match.innings && match.innings.length > 1
              ? `${match.runs}/${match.wickets} & ${match.innings[1]?.runs}/${match.innings[1]?.wickets}`
              : `${match.runs}/${match.wickets}`,
            overs: match.innings && match.innings.length > 1
              ? `${match.overs} & ${match.innings[1]?.overs}`
              : match.overs,
          },
          {
            name: match.opposition,
            logo: match.logo,
            score: match.innings && match.innings.length > 1
              ? `${match.oppositionRuns}/${match.oppositionWickets} & ${match.innings[1]?.oppositionRuns}/${match.innings[1]?.oppositionWickets}`
              : `${match.oppositionRuns}/${match.oppositionWickets}`,
            overs: match.innings && match.innings.length > 1
              ? `${match.oppositionOvers} & ${match.innings[1]?.oppositionOvers}`
              : match.oppositionOvers,
          }
        ]
      }
    });
  };

  // Adjust handlePageChange to prevent unnecessary re-renders or state resets
const handlePageChange = (page)  =>
  {
   if (page !== currentPage) {
     setCurrentPage(page)
 ;
   }
 };
 
   const paginateMatches = filteredMatches.slice(
     (currentPage - 1) * matchesPerPage,
     currentPage * matchesPerPage
   );
 
   const totalPages = Math.ceil(filteredMatches.length / matchesPerPage);
 

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-gray-100">
      <div className="relative">
        <TopLayer />
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
    filterMatches(matchDataList, false, activeButton === 'Latest');
  }}
>
  {ageGroups.map((ageGroup, index) => (
    <option key={index} value={ageGroup}>{ageGroup}</option>
  ))}
</select>

              <select
                className="bg-transparent/30 rounded-2xl p-2 pr-8 text-white w-full text-xs focus:outline-none"
                value={selectedMatchType}
                onChange={(e) => {
                  setSelectedMatchType(e.target.value);
                  filterMatches(matchDataList, false, activeButton === 'Latest');
                }}
              >
                {matchTypes.map((matchType, index) => (
                  <option key={index} value={matchType}>{matchType}</option>
                ))}
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
  {paginateMatches.length === 0 ? (
    <p className="text-black text-center col-span-2">
      No matches available for the selected .
    </p>
  ) : (
    paginateMatches.map((matchData, index) => (
      <div
        key={index}
        className="bg-white font-bold text-[#012D5E] rounded-3xl shadow-lg p-4 w-full max-w-5xl h-auto flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0"
      >
        {/* Richmond College Section */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center w-full sm:w-1/2">
            <img
              src={require('../assets/images/LOGO.png')}
              alt="RICHMOND COLLEGE"
              className="w-10 h-10 sm:w-12 sm:h-12 "
            />
            <h3 className="text-xxs sm:text-sm text-[#012D5E] font-bold tracking-wide mt-2">RICHMOND COLLEGE</h3>
            {matchData.type.toLowerCase() === 'test' && matchData.innings ? (
              matchData.innings.map((inning, idx) => (
                <div key={idx} className="mt-2">
                  <p className="text-sm sm:text-xs mt-2">{inning.runs}/{inning.wickets}</p>
                  <p className="text-xxs sm:text-xxs  text-center">{inning.overs}</p>
                </div>
              ))
            ) : (
              <>
                <p className="text-sm sm:text-xs mt-2">{matchData.runs}/{matchData.wickets}</p>
                <p className="text-xxs sm:text-xxs">{matchData.overs}</p>
              </>
            )}
          </div>

          <div className="flex flex-col justify-center items-center w-[10%]">
                      <div className="w-[1px] h-7 bg-gradient-to-b from-transparent via-black to-transparent"></div>
                      <p className="lg:text-sm text-xs font-serif font-semibold text-[#08165A]">V<span className="lg:text-xl text-lg font-bold text-[#480D35]">S</span></p>
                      <div className="w-[1px] h-7 bg-gradient-to-b from-transparent via-black to-transparent"></div>
                    </div>
          {/* Opposition Section */}
          <div className="flex flex-col items-center w-full sm:w-1/2">
            <img
              // src={matchData.logo}
              src={`${`http://rcc.dockyardsoftware.com/images/${ matchData.logo ? matchData.logo .split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
              alt={matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"}
              className="w-10 h-10 sm:w-12 sm:h-12 "
            />
            <h3 className="text-xxs sm:text-sm tracking-wide mt-2 font-bold">{matchData.opposition.toUpperCase()}</h3>
            {matchData.type.toLowerCase() === 'test' && matchData.innings ? (
              matchData.innings.map((inning, idx) => (
                <div key={idx} className="mt-2">
                  <p className="text-sm sm:text-xs mt-2">{inning.oppositionRuns}/{inning.oppositionWickets}</p>
                  <p className=" text-xxs sm:text-xxs text-center">{inning.oppositionOvers}</p>
                </div>
              ))
            ) : (
              <>
                <p className="text-sm sm:text-xs mt-2">{matchData.oppositionRuns}/{matchData.oppositionWickets}</p>
                <p className="text-xxs sm:text-xxs">{matchData.oppositionOvers}</p>
              </>
            )}
          </div>
        </div>

        {/* Match Details Section */}
        <div className="w-full sm:w-1/2 p-2 text-left flex flex-col items-start ">
          <h4 className="text-xs sm:text-sm text-[#012D5E] mt-2 font-bold">
            {matchData.result.toUpperCase()} ({matchData.type.toUpperCase()})
          </h4>
          <div className="flex justify-between mt-2 w-full">
            <div className="flex flex-col text-left">
              <p className="text-xxs sm:text-xxs text-black">{formatDate(matchData.date)}</p>
              <p className="text-xxs sm:text-xxs text-black mt-2">{matchData.venue.toUpperCase()}</p>
            </div>
            <div className="flex flex-col text-right">
             
              <p className="text-xxs sm:text-xs text-black mt-2">{matchData.tossResult}</p>
            </div>
          </div>
          <div className="flex justify-end w-full mt-4">
            <button
              className="bg-[#4A0D34] rounded-full h-8 sm:h-10 w-24 sm:w-28 text-xxs sm:text-xs text-white hover:bg-[#3d122d]"
              onClick={() => handleMatchCentreClick(matchData)}
            >
              Score Card
            </button>
          </div>
        </div>

      </div>


))
)}

 {/* {/ Render paginated match items /} */}
 <div className="match-list">
  {paginateMatches.map((match, index) => (
    <div key={index}>
      {/* {/ Render each match item /} */}
    </div>
  ))}
</div>

{/* {/ Pagination controls /} */}
{!showUpcoming && activeButton !== 'Latest' && (
<div className="pagination flex space-x-2 mt-4">
<button
    disabled={currentPage === 1}
    onClick={() => handlePageChange(currentPage - 1)}
    className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded"
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
    className="w-8 h-8 flex items-center justify-center bg-gray-400 rounded"
>
»
</button>
</div>
)}

</div>


{/*       
     {/ Footer /} */}
     <Footer/>
</div>
);
}


