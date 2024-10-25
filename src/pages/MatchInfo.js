// import React from 'react';
// import Navbar from '../components/HomeNavbar'; // Ensure this path is correct based on your project structure

// export default function MatchInfo() {
//   return (
//     <div>
//       <Navbar />

//       {/* Date Header */}
//       <div className="bg-blue-900 mx-4 p-2 mt-20">
//         <div className="text-white font-bold text-lg">
//           Latest
//         </div>
//       </div>

//       {/* Match Info Container */}
//       <div className="relative flex flex-col md:flex-row justify-between items-start mx-6 my-4 p--2 border border-gray-300 bg-white shadow-lg rounded-xl overflow-hidden">
        
//         {/* Left-side red border */}
//         <div className="absolute top-0 left-0 w-2 h-full bg-red-500 rounded-tr-full rounded-br-full"></div>

//         {/* Match Info Card (Left Side) */}
//         <div className="flex-1 mr-4">
//           {/* Match Status */}
//           <div className="flex items-center justify-between pb-4 mb-4">
//             <div className="flex items-center">
//               <span className="bg-green-500 text-white text-sm font-bold py-1 px-3 rounded-full">TEST</span>
//               <span className="bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full ml-2">2024/09/03</span>
//             </div>
//           </div>

//           {/* Match Details */}
//           <div className="mt-4 pb-4 mb-4">
//             <div className="text-gray-800 text-lg font-semibold">
//               Richmond vs Mahinda, 2024 - 2nd Test
//             </div>
//             <div className="text-gray-500 text-sm">
//               Bandaranayaka Cricket Stadium, Colombo
//             </div>
//           </div>
//         </div>

//         {/* Teams and Scores (Middle) */}
//         <div className="flex flex-col justify-between flex-1 mx-4">
//           <div className="flex flex-col items-start pb-4 mb-4">
//             {/* Team 1 */}
//             <div className="flex items-center mb-4">
//               <img src="path_to_pakistan_flag.png" alt="Pakistan" className="w-12 h-8 mr-3" />
//               <div className="flex flex-col">
//                 <span className="text-black font-bold text-xl">Richmond</span>
//                 <span className="text-gray-800 font-semibold text-lg">274 & 172 (46.4)</span>
//               </div>
//             </div>

//             {/* Team 2 */}
//             <div className="flex items-center">
//               <img src="path_to_bangladesh_flag.png" alt="Bangladesh" className="w-12 h-8 mr-3" />
//               <div className="flex flex-col">
//                 <span className="text-black font-bold text-xl">Mahinda</span>
//                 <span className="text-gray-800 font-semibold text-lg">262 & 122/2 (34.0)</span>
//               </div>
//             </div>

//             <div className="mt-4 text-gray-600">
//               Bangladesh needs 113 runs to win with 8 wickets remaining
//             </div>
//           </div>
//         </div>

//         {/* Match Centre Button (Right Side) */}
//         <div className="absolute bottom-4 right-4">
//           <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
//             More Detail
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import Navbar from '../components/HomeNavbar';
// import Blue from '../assets/images/Blue1.png';
// import './MatchInfo.css';

// export default function MatchInfo() {
//   const matches = [
//     {
//       type: 'Upcoming',
//       result: '6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', date: '2024/7/8', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', time: '3:30 PM', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Upcoming Match',
//     },
//     {
//       type: 'Latest',
//       result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Richmond won by 7 wickets (with 18 balls remaining)',
//     },
//     {
//       type: 'Latest',
//       result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Richmond won by 7 wickets (with 18 balls remaining)',
//     },
//     {
//       type: 'Upcoming',
//       result: '6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', date: '2024/7/8', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', time: '3:30 PM', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Upcoming Match',
//     },
//     {
//       type: 'Latest',
//       result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Richmond won by 7 wickets (with 18 balls remaining)',
//     },
//     {
//       type: 'Upcoming',
//       result: '6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', date: '2024/7/8', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', time: '3:30 PM', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Upcoming Match',
//     },

//     {
//       type: 'Latest',
//       result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Richmond won by 7 wickets (with 18 balls remaining)',
//     },
//     {
//       type: 'Upcoming',
//       result: '6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', date: '2024/7/8', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', time: '3:30 PM', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Upcoming Match',
//     },
//     // Additional matches can be added here...
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10">
//         <Navbar />
//       </div>

//       <div
//         className="relative flex flex-col items-center justify-center text-white"
//         style={{
//           backgroundImage: `url(${Blue})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           height: '250px', // Adjust this height based on your design
//         }}
//       >
//         <div className="absolute top-12 left-0 right-0 bg-opacity-50 p-4 flex justify-left items-left space-x-8">
//           <button className="animated-button">Latest</button>
//           <button className="animated-button">Upcoming</button>
//           <button className="animated-button">Past Matches</button>
//         </div>
//         <div className="flex flex-col justify-center items-center h-full pt-16">
//           <h1 className="text-3xl font-bold">RICHMOND MATCHES</h1>
//         </div>
//       </div>

//       {/* Matches Section */}
//       <div className="flex-grow flex flex-col items-center p-4 overflow-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {matches.map((match, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-2xl shadow-lg flex flex-col"
//               style={{ height: '160px' }}
//             >
//               {/* Match Result */}
//               <div className="text-gray-500 text-xxs mb-2">{match.result}</div>

//               {/* Team Names and Scores */}
//               <div className="flex flex-col justify-between h-full">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center space-x-2">
//                     <img src={match.team1.logo} alt={`${match.team1.name} logo`} className="w-5 h-5" />
//                     <div className="text-sm font-semibold">{match.team1.name}</div>
//                   </div>
//                   {match.type === 'Latest' ? (
//                     <div className="text-xs font-semibold">{match.team1.score}</div>
//                   ) : (
//                     <div className="text-xs font-semibold">{match.team1.date}</div>
//                   )}
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-2">
//                     <img src={match.team2.logo} alt={`${match.team2.name} logo`} className="w-5 h-5" />
//                     <div className="text-sm font-semibold">{match.team2.name}</div>
//                   </div>
//                   {match.type === 'Latest' ? (
//                     <div className="text-xs font-semibold flex items-center space-x-2">
//                       <div className="text-gray-500">{match.team2.overs}</div>
//                       <div>{match.team2.score}</div>
//                     </div>
//                   ) : (
//                     <div className="text-xs font-semibold">{match.team2.time}</div>
//                   )}
//                 </div>
//               </div>

//               {/* Match Status */}
//               <div className="text-xxs font-medium text-gray-800 mt-2 mb-2">{match.status}</div>

//               {/* Divider Line */}
//               <hr className="border-t border-gray-300 my-2" />

//               {/* Hardcoded Buttons */}
//               <div className="flex space-x-4 text-grey-500 text-xs">
//                 {match.type === 'Upcoming' ? (
//                   <button className="hover:underline">View Details</button>
//                 ) : (
//                   <button className="hover:underline">View More</button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import Navbar from '../components/HomeNavbar';
// import TopLayer from '../components/TopLayer';


// const MATCH_INFO = [
//   {
//     date: "21 Jul 2024",
//     stadiumLine1: "R. Premadasa International Cricket",
//     stadiumLine2: "Stadium, Colombo",
//     league: "RICHMOND VS MAHINDA T20 2024",
//     result: "RICHMOND WON BY 9 WICKET",
//     tossResult: "RICHMOND WON THE TOSS AND ELECTED TO FIELD",
//   },
//   {
//     date: "22 Jul 2024",
//     stadiumLine1: "Pallekele International Cricket",
//     stadiumLine2: "Stadium, Kandy",
//     league: "RICHMOND VS MAHINDA T20 2024",
//     result: "RICHMOND WON BY 5 WICKETS",
//     tossResult: "MAHINDA WON THE TOSS AND ELECTED TO BAT",
//   }
// ];

// const TEAMS = [
//   {
//     name: "MAHINDA COLLEGE",
//     score: "184/6",
//     overs: "(20.0)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//   },
//   {
//     name: "RICHMOND COLLEGE",
//     score: "185/1",
//     overs: "(15.4)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//   },
//   {
//     name: "RICHMOND COLLEGE",
//     score: "150/8",
//     overs: "(20.0)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//   },
//   {
//     name: "MAHINDA COLLEGE",
//     score: "151/9",
//     overs: "(19.5)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//   },
// ];

// export default function MatchInfo() {
//   return (
//     <div
//       className="min-h-screen flex flex-col bg-cover bg-center" // Added background properties
    
//     >
//       {/* Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-10">
//       <TopLayer/>
//         <Navbar />
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col items-center flex-grow mt-74 space-y-8">
//         {MATCH_INFO.map((match, index) => (
//           <div key={index} className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-5xl md:h-60 h-auto flex flex-col md:flex-row items-center justify-between">
//             {/* Left side (Team 1) */}
//             <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
//               <img
//                 src={TEAMS[index * 2].logo}
//                 alt={TEAMS[index * 2].name}
//                 className="w-12 h-12 md:w-16 md:h-16 rounded-full"
//               />
//               <div className="text-center">
//                 <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{TEAMS[index * 2].name.toUpperCase()}</h3>
//                 <p className="text-lg md:text-xl font-bold mt-2">{TEAMS[index * 2].score}</p>
//                 <p className="text-xxs md:text-xs mt-1">{TEAMS[index * 2].overs}</p>
//               </div>
//             </div>

//             {/* VS Divider */}
//             <div className="flex flex-col items-center justify-center -mx-4 mb-4 md:mb-0">
//               <div className="h-8 md:h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
//               <span className="text-white text-sm md:text-xl my-2">VS</span>
//               <div className="h-8 md:h-12 w-px bg-gradient-to-t from-transparent via-white to-transparent" />
//             </div>

//             {/* Right side (Team 2) */}
//             <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
//               <img
//                 src={TEAMS[index * 2 + 1].logo}
//                 alt={TEAMS[index * 2 + 1].name}
//                 className="w-12 h-12 md:w-16 md:h-16 rounded-full"
//               />
//               <div className="text-center">
//                 <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{TEAMS[index * 2 + 1].name.toUpperCase()}</h3>
//                 <p className="text-lg md:text-xl font-bold mt-2">{TEAMS[index * 2 + 1].score}</p>
//                 <p className="text-xxs md:text-xs mt-1">{TEAMS[index * 2 + 1].overs}</p>
//               </div>
//             </div>

//             {/* Match details */}
//             <div className="w-full md:w-1/2 p-4 md:p-6 text-left">
//               <h4 className="text-sm md:text-base font-bold text-[#53A2F6] ">{match.league}</h4>
//               <div className="flex justify-between mt-2">
//                 <div className="flex flex-col">
//                   <p className="text-xxs md:text-xxs text-white">{match.date}</p>
//                   <p className="text-xxs md:text-xxs text-white mt-2">{match.stadiumLine1}</p>
//                   <p className="text-xxs md:text-xxs text-white">{match.stadiumLine2}</p>
//                 </div>

//                 <div className="flex flex-col text-right">
//                   <p className="text-xs md:text-sm font-bold text-white">{match.result}</p>
//                   <p className="text-xxs md:text-xxs mt-1 text-gray-400 mt-2">{match.tossResult}</p>
//                 </div>
//               </div>

//               <button className="mt-4 bg-[#EAA500] text-white text-xxs md:text-xxs font-semibold px-4 md:px-6 py-1 rounded-full">
//                 MATCH CENTRE
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopLayer from '../components/TopLayer';
// import topImage from '../assets/images/BG3.png'; 


// const MATCH_INFO = [
//   {
//     date: "21 Jul 2024",
//     stadiumLine1: "R. Premadasa International Cricket",
//     stadiumLine2: "Stadium, Colombo",
//     league: "RICHMOND VS MAHINDA T20 2024",
//     result: "RICHMOND WON BY 9 WICKET",
//     tossResult: "RICHMOND WON THE TOSS AND ELECTED TO FIELD",
//   },
//   {
//     date: "22 Jul 2024",
//     stadiumLine1: "Pallekele International Cricket",
//     stadiumLine2: "Stadium, Kandy",
//     league: "RICHMOND VS MAHINDA T20 2024",
//     result: "RICHMOND WON BY 5 WICKETS",
//     tossResult: "MAHINDA WON THE TOSS AND ELECTED TO BAT",
//   },
//   {
//     date: "22 Jul 2024",
//     stadiumLine1: "Pallekele International Cricket",
//     stadiumLine2: "Stadium, Kandy",
//     league: "RICHMOND VS MAHINDA T20 2024",
//     result: "RICHMOND WON BY 5 WICKETS",
//     tossResult: "MAHINDA WON THE TOSS AND ELECTED TO BAT",
//   }
// ];

// const TEAMS = [
//   {
//     name: "RICHMOND COLLEGE",
//     score: "184/6",
//     overs: "(20.0)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//   },
//   {
//     name: "MAHINDA COLLEGE",
//     score: "185/1",
//     overs: "(15.4)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//   },
//   {
//     name: "RICHMOND COLLEGE",
//     score: "150/8",
//     overs: "(20.0)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//   },
//   {
//     name: "MAHINDA COLLEGE",
//     score: "151/9",
//     overs: "(19.5)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//   },

//   {
//     name: "RICHMOND COLLEGE",
//     score: "150/8",
//     overs: "(20.0)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//   },
//   {
//     name: "MAHINDA COLLEGE",
//     score: "151/9",
//     overs: "(19.5)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//   },
// ];

// export default function MatchInfo() {
//   const navigate = useNavigate();

//   const handleMatchCentreClick = (match, teams) => {
//     // Navigatee to the scorecard page and pass scorecard data
//     navigate('/scorecard', { state: { match, teams } });
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center">
//       <div className="relative">
//         {/* Ensure the TopLayer has enough height to be visible */}
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
//           {/* Overlay the dropdown and buttons layout */}
//           <div className="flex flex-col items-center justify-center text-white space-y-4 w-[21rem] text-xs mt-70 "> {/* Custom width */}
//   <div className="flex space-x-6"> {/* Space between the dropdowns */}
//     <select className="bg-transparent/30  rounded-2xl p-2 text-white w-[21rem] text-xs focus:outline-none "> {/* Set width using w-[21rem] */}
//       <option>Under-13</option>
//       <option>Under-15</option>
//       <option>Under-17</option>
//       <option>Under-19</option>
//     </select>
//     <select className="bg-transparent/30  rounded-2xl p-2 text-white w-[21rem] focus:outline-none "> {/* Set width using w-[21rem] */}
//       <option>Test</option>
//       <option>T20</option>
//       <option>ODI</option>
//     </select>
//   </div>
//   <div className="flex space-x-4">
//   <button className="bg-[#001f3f] w-24 h-8 rounded-full text-white text-xxs font-semibold">Latest</button>
//   <button className="bg-gray-400 w-24 h-8 rounded-full text-white text-xxs">Upcoming</button>
//   <button className="bg-gray-400 w-24 h-8 rounded-full text-white text-xxs">Matches</button>
// </div>

// </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col items-center flex-grow mt-7 space-y-8">
//         {MATCH_INFO.map((match, index) => (
//           <div key={index} className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-7xl md:h-40 h-auto flex flex-col md:flex-row items-center justify-between">
//             {/* Left side (Team 1) */}
//             <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
//               <img
//                 src={TEAMS[index * 2].logo}
//                 alt={TEAMS[index * 2].name}
//                 className="w-8 h-8 md:w-12 md:h-12 rounded-full"
//               />
//               <div className="text-center">
//                 <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{TEAMS[index * 2].name.toUpperCase()}</h3>
//                 <p className="text-lg md:text-m font-bold mt-2">{TEAMS[index * 2].score}</p>
//                 <p className="text-xxs md:text-xs mt-1">{TEAMS[index * 2].overs}</p>
//               </div>
//             </div>

//             {/* VS Divider */}
//             <div className="flex flex-col items-center justify-center -mx-4 mb-4 md:mb-0">
//               <div className="h-8 md:h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
//               <span className="text-white text-sm md:text-xl my-2">VS</span>
//               <div className="h-8 md:h-12 w-px bg-gradient-to-t from-transparent via-white to-transparent" />
//             </div>

//             {/* Right side (Team 2) */}
//             <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
//               <img
//                 src={TEAMS[index * 2 + 1].logo}
//                 alt={TEAMS[index * 2 + 1].name}
//                 className="w-12 h-12 md:w-12 md:h-12 rounded-full"
//               />
//               <div className="text-center">
//                 <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{TEAMS[index * 2 + 1].name.toUpperCase()}</h3>
//                 <p className="text-lg md:text-m font-bold mt-2">{TEAMS[index * 2 + 1].score}</p>
//                 <p className="text-xxs md:text-xs mt-1">{TEAMS[index * 2 + 1].overs}</p>
//               </div>
//             </div>

//             {/* Match details */}
//             <div className="w-full md:w-1/2 p-4 md:p-6 text-left flex flex-col">
//               <h4 className="text-sm md:text-base font-bold text-[#53A2F6] ">{match.league}</h4>
//               <div className="flex justify-between mt-2">
//                 <div className="flex flex-col">
//                   <p className="text-xxs md:text-xxs text-white">{match.date}</p>
//                   <p className="text-xxs md:text-xxs text-white mt-2">{match.stadiumLine1}</p>
//                   <p className="text-xxs md:text-xxs text-white">{match.stadiumLine2}</p>
//                 </div>
//                 <div className="flex flex-col text-right">
//                   <p className="text-xs md:text-sm font-bold text-white">{match.result}</p>
//                   <p className="text-xxs md:text-xxs mt-1 text-gray-400 mt-2">{match.tossResult}</p>
//                 </div>
//               </div>
//               <button
//                 className="mt-4 bg-[#4A0D34] text-white text-xxs md:text-xxs font-semibold px-4 md:px-6 py-1 rounded-full ml-auto w-35 h-10"
//                 onClick={() => handleMatchCentreClick(match, [TEAMS[index * 2], TEAMS[index * 2 + 1]])}
//               >
//                 Score card
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import Navbar from '../components/HomeNavbar'; // Ensure this path is correct based on your project structure

// export default function MatchInfo() {
//   return (
//     <div>
//       <Navbar />

//       {/* Date Header */}
//       <div className="bg-blue-900 mx-4 p-2 mt-20">
//         <div className="text-white font-bold text-lg">
//           Latest
//         </div>
//       </div>

//       {/* Match Info Container */}
//       <div className="relative flex flex-col md:flex-row justify-between items-start mx-6 my-4 p--2 border border-gray-300 bg-white shadow-lg rounded-xl overflow-hidden">
        
//         {/* Left-side red border */}
//         <div className="absolute top-0 left-0 w-2 h-full bg-red-500 rounded-tr-full rounded-br-full"></div>

//         {/* Match Info Card (Left Side) */}
//         <div className="flex-1 mr-4">
//           {/* Match Status */}
//           <div className="flex items-center justify-between pb-4 mb-4">
//             <div className="flex items-center">
//               <span className="bg-green-500 text-white text-sm font-bold py-1 px-3 rounded-full">TEST</span>
//               <span className="bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full ml-2">2024/09/03</span>
//             </div>
//           </div>

//           {/* Match Details */}
//           <div className="mt-4 pb-4 mb-4">
//             <div className="text-gray-800 text-lg font-semibold">
//               Richmond vs Mahinda, 2024 - 2nd Test
//             </div>
//             <div className="text-gray-500 text-sm">
//               Bandaranayaka Cricket Stadium, Colombo
//             </div>
//           </div>
//         </div>

//         {/* Teams and Scores (Middle) */}
//         <div className="flex flex-col justify-between flex-1 mx-4">
//           <div className="flex flex-col items-start pb-4 mb-4">
//             {/* Team 1 */}
//             <div className="flex items-center mb-4">
//               <img src="path_to_pakistan_flag.png" alt="Pakistan" className="w-12 h-8 mr-3" />
//               <div className="flex flex-col">
//                 <span className="text-black font-bold text-xl">Richmond</span>
//                 <span className="text-gray-800 font-semibold text-lg">274 & 172 (46.4)</span>
//               </div>
//             </div>

//             {/* Team 2 */}
//             <div className="flex items-center">
//               <img src="path_to_bangladesh_flag.png" alt="Bangladesh" className="w-12 h-8 mr-3" />
//               <div className="flex flex-col">
//                 <span className="text-black font-bold text-xl">Mahinda</span>
//                 <span className="text-gray-800 font-semibold text-lg">262 & 122/2 (34.0)</span>
//               </div>
//             </div>

//             <div className="mt-4 text-gray-600">
//               Bangladesh needs 113 runs to win with 8 wickets remaining
//             </div>
//           </div>
//         </div>

//         {/* Match Centre Button (Right Side) */}
//         <div className="absolute bottom-4 right-4">
//           <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
//             More Detail
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import Navbar from '../components/HomeNavbar';
// import Blue from '../assets/images/Blue1.png';
// import './MatchInfo.css';

// export default function MatchInfo() {
//   const matches = [
//     {
//       type: 'Upcoming',
//       result: '6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', date: '2024/7/8', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', time: '3:30 PM', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Upcoming Match',
//     },
//     {
//       type: 'Latest',
//       result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Richmond won by 7 wickets (with 18 balls remaining)',
//     },
//     {
//       type: 'Latest',
//       result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Richmond won by 7 wickets (with 18 balls remaining)',
//     },
//     {
//       type: 'Upcoming',
//       result: '6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', date: '2024/7/8', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', time: '3:30 PM', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Upcoming Match',
//     },
//     {
//       type: 'Latest',
//       result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Richmond won by 7 wickets (with 18 balls remaining)',
//     },
//     {
//       type: 'Upcoming',
//       result: '6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', date: '2024/7/8', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', time: '3:30 PM', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Upcoming Match',
//     },

//     {
//       type: 'Latest',
//       result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Richmond won by 7 wickets (with 18 balls remaining)',
//     },
//     {
//       type: 'Upcoming',
//       result: '6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
//       team1: { name: 'Richmond', date: '2024/7/8', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
//       team2: { name: 'Mahinda', time: '3:30 PM', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
//       status: 'Upcoming Match',
//     },
//     // Additional matches can be added here...
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <div className="fixed top-0 left-0 right-0 z-10">
//         <Navbar />
//       </div>

//       <div
//         className="relative flex flex-col items-center justify-center text-white"
//         style={{
//           backgroundImage: `url(${Blue})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           height: '250px', // Adjust this height based on your design
//         }}
//       >
//         <div className="absolute top-12 left-0 right-0 bg-opacity-50 p-4 flex justify-left items-left space-x-8">
//           <button className="animated-button">Latest</button>
//           <button className="animated-button">Upcoming</button>
//           <button className="animated-button">Past Matches</button>
//         </div>
//         <div className="flex flex-col justify-center items-center h-full pt-16">
//           <h1 className="text-3xl font-bold">RICHMOND MATCHES</h1>
//         </div>
//       </div>

//       {/* Matches Section */}
//       <div className="flex-grow flex flex-col items-center p-4 overflow-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {matches.map((match, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-2xl shadow-lg flex flex-col"
//               style={{ height: '160px' }}
//             >
//               {/* Match Result */}
//               <div className="text-gray-500 text-xxs mb-2">{match.result}</div>

//               {/* Team Names and Scores */}
//               <div className="flex flex-col justify-between h-full">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center space-x-2">
//                     <img src={match.team1.logo} alt={`${match.team1.name} logo`} className="w-5 h-5" />
//                     <div className="text-sm font-semibold">{match.team1.name}</div>
//                   </div>
//                   {match.type === 'Latest' ? (
//                     <div className="text-xs font-semibold">{match.team1.score}</div>
//                   ) : (
//                     <div className="text-xs font-semibold">{match.team1.date}</div>
//                   )}
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-2">
//                     <img src={match.team2.logo} alt={`${match.team2.name} logo`} className="w-5 h-5" />
//                     <div className="text-sm font-semibold">{match.team2.name}</div>
//                   </div>
//                   {match.type === 'Latest' ? (
//                     <div className="text-xs font-semibold flex items-center space-x-2">
//                       <div className="text-gray-500">{match.team2.overs}</div>
//                       <div>{match.team2.score}</div>
//                     </div>
//                   ) : (
//                     <div className="text-xs font-semibold">{match.team2.time}</div>
//                   )}
//                 </div>
//               </div>

//               {/* Match Status */}
//               <div className="text-xxs font-medium text-gray-800 mt-2 mb-2">{match.status}</div>

//               {/* Divider Line */}
//               <hr className="border-t border-gray-300 my-2" />

//               {/* Hardcoded Buttons */}
//               <div className="flex space-x-4 text-grey-500 text-xs">
//                 {match.type === 'Upcoming' ? (
//                   <button className="hover:underline">View Details</button>
//                 ) : (
//                   <button className="hover:underline">View More</button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import Navbar from '../components/HomeNavbar';
// import TopLayer from '../components/TopLayer';


// const MATCH_INFO = [
//   {
//     date: "21 Jul 2024",
//     stadiumLine1: "R. Premadasa International Cricket",
//     stadiumLine2: "Stadium, Colombo",
//     league: "RICHMOND VS MAHINDA T20 2024",
//     result: "RICHMOND WON BY 9 WICKET",
//     tossResult: "RICHMOND WON THE TOSS AND ELECTED TO FIELD",
//   },
//   {
//     date: "22 Jul 2024",
//     stadiumLine1: "Pallekele International Cricket",
//     stadiumLine2: "Stadium, Kandy",
//     league: "RICHMOND VS MAHINDA T20 2024",
//     result: "RICHMOND WON BY 5 WICKETS",
//     tossResult: "MAHINDA WON THE TOSS AND ELECTED TO BAT",
//   }
// ];

// const TEAMS = [
//   {
//     name: "MAHINDA COLLEGE",
//     score: "184/6",
//     overs: "(20.0)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//   },
//   {
//     name: "RICHMOND COLLEGE",
//     score: "185/1",
//     overs: "(15.4)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//   },
//   {
//     name: "RICHMOND COLLEGE",
//     score: "150/8",
//     overs: "(20.0)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//   },
//   {
//     name: "MAHINDA COLLEGE",
//     score: "151/9",
//     overs: "(19.5)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//   },
// ];

// export default function MatchInfo() {
//   return (
//     <div
//       className="min-h-screen flex flex-col bg-cover bg-center" // Added background properties
    
//     >
//       {/* Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-10">
//       <TopLayer/>
//         <Navbar />
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col items-center flex-grow mt-74 space-y-8">
//         {MATCH_INFO.map((match, index) => (
//           <div key={index} className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-5xl md:h-60 h-auto flex flex-col md:flex-row items-center justify-between">
//             {/* Left side (Team 1) */}
//             <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
//               <img
//                 src={TEAMS[index * 2].logo}
//                 alt={TEAMS[index * 2].name}
//                 className="w-12 h-12 md:w-16 md:h-16 rounded-full"
//               />
//               <div className="text-center">
//                 <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{TEAMS[index * 2].name.toUpperCase()}</h3>
//                 <p className="text-lg md:text-xl font-bold mt-2">{TEAMS[index * 2].score}</p>
//                 <p className="text-xxs md:text-xs mt-1">{TEAMS[index * 2].overs}</p>
//               </div>
//             </div>

//             {/* VS Divider */}
//             <div className="flex flex-col items-center justify-center -mx-4 mb-4 md:mb-0">
//               <div className="h-8 md:h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
//               <span className="text-white text-sm md:text-xl my-2">VS</span>
//               <div className="h-8 md:h-12 w-px bg-gradient-to-t from-transparent via-white to-transparent" />
//             </div>

//             {/* Right side (Team 2) */}
//             <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
//               <img
//                 src={TEAMS[index * 2 + 1].logo}
//                 alt={TEAMS[index * 2 + 1].name}
//                 className="w-12 h-12 md:w-16 md:h-16 rounded-full"
//               />
//               <div className="text-center">
//                 <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{TEAMS[index * 2 + 1].name.toUpperCase()}</h3>
//                 <p className="text-lg md:text-xl font-bold mt-2">{TEAMS[index * 2 + 1].score}</p>
//                 <p className="text-xxs md:text-xs mt-1">{TEAMS[index * 2 + 1].overs}</p>
//               </div>
//             </div>

//             {/* Match details */}
//             <div className="w-full md:w-1/2 p-4 md:p-6 text-left">
//               <h4 className="text-sm md:text-base font-bold text-[#53A2F6] ">{match.league}</h4>
//               <div className="flex justify-between mt-2">
//                 <div className="flex flex-col">
//                   <p className="text-xxs md:text-xxs text-white">{match.date}</p>
//                   <p className="text-xxs md:text-xxs text-white mt-2">{match.stadiumLine1}</p>
//                   <p className="text-xxs md:text-xxs text-white">{match.stadiumLine2}</p>
//                 </div>

//                 <div className="flex flex-col text-right">
//                   <p className="text-xs md:text-sm font-bold text-white">{match.result}</p>
//                   <p className="text-xxs md:text-xxs mt-1 text-gray-400 mt-2">{match.tossResult}</p>
//                 </div>
//               </div>

//               <button className="mt-4 bg-[#EAA500] text-white text-xxs md:text-xxs font-semibold px-4 md:px-6 py-1 rounded-full">
//                 MATCH CENTRE
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopLayer from '../components/TopLayer';
// import topImage from '../assets/images/BG3.png'; 


// const MATCH_INFO = [
//   {
//     date: "21 Jul 2024",
//     stadiumLine1: "R. Premadasa International Cricket",
//     stadiumLine2: "Stadium, Colombo",
//     league: "RICHMOND VS MAHINDA T20 2024",
//     result: "RICHMOND WON BY 9 WICKET",
//     tossResult: "RICHMOND WON THE TOSS AND ELECTED TO FIELD",
//   },
//   {
//     date: "22 Jul 2024",
//     stadiumLine1: "Pallekele International Cricket",
//     stadiumLine2: "Stadium, Kandy",
//     league: "RICHMOND VS MAHINDA T20 2024",
//     result: "RICHMOND WON BY 5 WICKETS",
//     tossResult: "MAHINDA WON THE TOSS AND ELECTED TO BAT",
//   },
//   {
//     date: "22 Jul 2024",
//     stadiumLine1: "Pallekele International Cricket",
//     stadiumLine2: "Stadium, Kandy",
//     league: "RICHMOND VS MAHINDA T20 2024",
//     result: "RICHMOND WON BY 5 WICKETS",
//     tossResult: "MAHINDA WON THE TOSS AND ELECTED TO BAT",
//   }
// ];

// const TEAMS = [
//   {
//     name: "MAHINDA COLLEGE",
//     score: "184",
//     wicket:"6",
//     overs: "(20.0)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//   },
//   {
//     name: "RICHMOND COLLEGE",
//     score: "185",
//     wicket:"6",
//     overs: "(15.4)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//   },
//   {
//     name: "RICHMOND COLLEGE",
//     score: "150",
//     wicket:"6",
//     overs: "(20.0)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//   },
//   {
//     name: "MAHINDA COLLEGE",
//     score: "151",
//     wicket:"6",
//     overs: "(19.5)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//   },

//   {
//     name: "RICHMOND COLLEGE",
//     score: "150",
//     wicket:"6",
//     overs: "(20.0)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//   },
//   {
//     name: "MAHINDA COLLEGE",
//     score: "151",
//     wicket:"6",
//     overs: "(19.5)",
//     logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//   },
// ];

// export default function MatchInfo() {
//   const navigate = useNavigate();

//   const handleMatchCentreClick = (match, teams) => {
//     // Navigate to the scorecard page and pass scorecard data
//     navigate('/scorecard', { state: { match, teams } });
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center">
//       <div className="relative">
//         {/* Ensure the TopLayer has enough height to be visible */}
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
//           {/* Overlay the dropdown and buttons layout */}
//           <div className="flex flex-col items-center justify-center text-white space-y-4 w-[21rem] text-xs mt-70 "> {/* Custom width */}
//   <div className="flex space-x-6"> {/* Space between the dropdowns */}
//     <select className="bg-transparent/30  rounded-2xl p-2 text-white w-[21rem] text-xs focus:outline-none "> {/* Set width using w-[21rem] */}
//       <option>Under-13</option>
//       <option>Under-15</option>
//       <option>Under-17</option>
//       <option>Under-19</option>
//     </select>
//     <select className="bg-transparent/30  rounded-2xl p-2 text-white w-[21rem] focus:outline-none "> {/* Set width using w-[21rem] */}
//       <option>Test</option>
//       <option>T20</option>
//       <option>ODI</option>
//     </select>
//   </div>
//   <div className="flex space-x-4">
//   <button className="bg-[#001f3f] w-24 h-8 rounded-full text-white text-xxs font-semibold">Latest</button>
//   <button className="bg-gray-400 w-24 h-8 rounded-full text-white text-xxs">Upcoming</button>
//   <button className="bg-gray-400 w-24 h-8 rounded-full text-white text-xxs">Matches</button>
// </div>

// </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col items-center flex-grow mt-7 space-y-8">
//         {MATCH_INFO.map((match, index) => (
//           <div key={index} className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-7xl md:h-40 h-auto flex flex-col md:flex-row items-center justify-between">
//            {/* Left side (Team 1) */}
// <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
//   <img
//     src={TEAMS[index * 2].logo}
//     alt={TEAMS[index * 2].name}
//     className="w-8 h-8 md:w-12 md:h-12 rounded-full"
//   />
//   <div className="text-center">
//     <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{TEAMS[index * 2].name.toUpperCase()}</h3>
//     <p className="text-lg md:text-m font-bold mt-2">
//       {TEAMS[index * 2].score}/{TEAMS[index * 2].wicket} {/* Show score/wicket */}
//     </p>
//     <p className="text-xxs md:text-xs mt-1">{TEAMS[index * 2].overs}</p>
//   </div>
// </div>
//             {/* VS Divider */}
//             <div className="flex flex-col items-center justify-center -mx-4 mb-4 md:mb-0">
//               <div className="h-8 md:h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
//               <span className="text-white text-sm md:text-xl my-2">VS</span>
//               <div className="h-8 md:h-12 w-px bg-gradient-to-t from-transparent via-white to-transparent" />
//             </div>

//           {/* Right side (Team 2) */}
// <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
//   <img
//     src={TEAMS[index * 2 + 1].logo}
//     alt={TEAMS[index * 2 + 1].name}
//     className="w-8 h-8 md:w-12 md:h-12 rounded-full"
//   />
//   <div className="text-center">
//     <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{TEAMS[index * 2 + 1].name.toUpperCase()}</h3>
//     <p className="text-lg md:text-m font-bold mt-2">
//       {TEAMS[index * 2 + 1].score}/{TEAMS[index * 2 + 1].wicket} {/* Show score/wicket */}
//     </p>
//     <p className="text-xxs md:text-xs mt-1">{TEAMS[index * 2 + 1].overs}</p>
//   </div>
// </div>

//             {/* Match details */}
//             <div className="w-full md:w-1/2 p-4 md:p-6 text-left flex flex-col">
//               <h4 className="text-sm md:text-base font-bold text-[#53A2F6] ">{match.league}</h4>
//               <div className="flex justify-between mt-2">
//                 <div className="flex flex-col">
//                   <p className="text-xxs md:text-xxs text-white">{match.date}</p>
//                   <p className="text-xxs md:text-xxs text-white mt-2">{match.stadiumLine1}</p>
//                   <p className="text-xxs md:text-xxs text-white">{match.stadiumLine2}</p>
//                 </div>
//                 <div className="flex flex-col text-right">
//                   <p className="text-xs md:text-sm font-bold text-white">{match.result}</p>
//                   <p className="text-xxs md:text-xxs mt-1 text-gray-400 mt-2">{match.tossResult}</p>
//                 </div>
//               </div>
//               <button
//                 className="mt-4 bg-[#4A0D34] text-white text-xxs md:text-xxs font-semibold px-4 md:px-6 py-1 rounded-full ml-auto w-35 h-10"
//                 onClick={() => handleMatchCentreClick(match, [TEAMS[index * 2], TEAMS[index * 2 + 1]])}
//               >
//                 Score card
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopLayer from '../components/TopLayer';
// import topImage from '../assets/images/BG3.png';

// export default function MatchInfo() {
//   const [matchData, setMatchData] = useState(null);
//   const navigate = useNavigate();

//   // Function to format the date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-GB', {
//       day: '2-digit',
//       month: 'short', // "short" format for the month, e.g., "Sep"
//       year: 'numeric',
//     });
//   };

//   // Fetch match summary from the backend
//   useEffect(() => {
//     fetch("http://localhost:8080/api/matchSummary/match/3") // Replace with your correct endpoint for matchId
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setMatchData(data[0]); // Assuming you get an array of match summaries and you only need the first one
//       })
//       .catch(error => console.error('Error fetching match summary:', error));
//   }, []);

//   const handleMatchCentreClick = (match) => {
//     const teams = [
//       { name: "Richmond College", logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg', score: `${match.runs}/${match.wickets}`, overs: match.overs },
//       { name: match.opposition, logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG', score: `${match.oppositionRuns}/${match.oppositionWickets}`, overs: match.oppositionOvers }
//     ];
//     navigate('/scorecard', { state: { match, teams } });
//   };
  
//   if (!matchData) return <div>Loading...</div>;

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center">
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
      //     <div className="flex flex-col items-center justify-center text-white space-y-4 w-[21rem] text-xs mt-70 ">
      //       <div className="flex space-x-6">
      //         <select className="bg-transparent/30 rounded-2xl p-2 text-white w-[21rem] text-xs focus:outline-none">
      //           <option>Under-13</option>
      //           <option>Under-15</option>
      //           <option>Under-17</option>
      //           <option>Under-19</option>
      //         </select>
      //         <select className="bg-transparent/30 rounded-2xl p-2 text-white w-[21rem] focus:outline-none">
      //           <option>Test</option>
      //           <option>T20</option>
      //           <option>ODI</option>
      //         </select>
      //       </div>
      //       <div className="flex space-x-4">
      //         <button className="bg-[#001f3f] w-24 h-8 rounded-full text-white text-xxs font-semibold">Latest</button>
      //         <button className="bg-gray-400 w-24 h-8 rounded-full text-white text-xxs">Upcoming</button>
      //         <button className="bg-gray-400 w-24 h-8 rounded-full text-white text-xxs">Matches</button>
      //       </div>
      //     </div>
      //   </div>
      // </div>

//       {/* Main content */}
//       <div className="flex flex-col items-center flex-grow mt-7 space-y-8">
//         <div className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-7xl md:h-40 h-auto flex flex-col md:flex-row items-center justify-between">
//           {/* Left side (Team 1) */}
//           <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
//             <img
//               src='https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' // Hardcoded logo for Richmond College
//               alt="RICHMOND COLLEGE"
//               className="w-8 h-8 md:w-12 md:h-12 rounded-full"
//             />
//             <div className="text-center">
//               <h3 className="text-xxs md:text-xs font-semibold tracking-wide">RICHMOND COLLEGE</h3>
//               <p className="text-lg md:text-m font-bold mt-2">
//                 {matchData.runs}/{matchData.wickets} {/* Fetch runs/wickets */}
//               </p>
//               <p className="text-xxs md:text-xs mt-1">{matchData.overs}</p> {/* Fetch overs */}
//             </div>
//           </div>
          
//           {/* VS Divider */}
//           <div className="flex flex-col items-center justify-center -mx-4 mb-4 md:mb-0">
//             <div className="h-8 md:h-12 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
//             <span className="text-white text-sm md:text-xl my-2">VS</span>
//             <div className="h-8 md:h-12 w-px bg-gradient-to-t from-transparent via-white to-transparent" />
//           </div>

//           {/* Right side (Team 2) */}
//           <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
//             <img
//               src='https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' // Hardcoded logo for Mahinda College
//               alt="MAHINDA COLLEGE"
//               className="w-8 h-8 md:w-12 md:h-12 rounded-full"
//             />
//             <div className="text-center">
//               <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{matchData.opposition.toUpperCase()}</h3>
//               <p className="text-lg md:text-m font-bold mt-2">
//                 {matchData.oppositionRuns}/{matchData.oppositionWickets} {/* Fetch opposition runs/wickets */}
//               </p>
//               <p className="text-xxs md:text-xs mt-1">{matchData.oppositionOvers}</p> {/* Fetch opposition overs */}
//             </div>
//           </div>

//           {/* Match details */}
//           <div className="w-full md:w-1/2 p-4 md:p-6 text-left flex flex-col">
//   <h4 className="text-xl md:text-xl font-bold text-[#53A2F6] ">
//     RICHMOND VS {matchData.opposition.toUpperCase()} {matchData.type.toUpperCase()}
//   </h4>
//   <div className="flex justify-between mt-2">
//     <div className="flex flex-col">
//       <p className="text-xs md:text-xs text-white">
//         {formatDate(matchData.date)} {/* Formatted date */}
//       </p>
//       <p className="text-xs md:text-xs text-white mt-2">
//         {matchData.venue.toUpperCase()}
//       </p>
//     </div>
  
//               <div className="flex flex-col text-right">
//                 <p className="text-xs md:text-sm font-bold text-white">{matchData.result.toUpperCase()}</p>
//                 <p className="text-xxs md:text-xxs mt-1 text-gray-400 mt-2">{matchData.tossResult}</p>
//               </div>
//             </div>
//             <button
//               className="mt-4 bg-[#4A0D34] text-white text-xxs md:text-xxs font-semibold px-4 md:px-6 py-1 rounded-full ml-auto w-35 h-10"
//               onClick={() => handleMatchCentreClick(matchData)}
//             >
//               Score card
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopLayer from '../components/TopLayer';
// import topImage from '../assets/images/BG3.png';
// import Upcoming from '../components/Upcoming';

// export default function MatchInfo() {
//   const [matchDataList, setMatchDataList] = useState([]);
//   const [filteredMatches, setFilteredMatches] = useState([]);
//   const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
//   const [selectedMatchType, setSelectedMatchType] = useState('All');
//   const [activeButton, setActiveButton] = useState('Latest');
//   const [showUpcoming, setShowUpcoming] = useState(false);

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
//     return matchDay >= today.setHours(0, 0, 0, 0); // Compare ignoring the time part
//   };

//   useEffect(() => {
//     fetch("http://localhost:8080/api/matchSummary/all")
//       .then(response => response.json())
//       .then(data => {
//         setMatchDataList(data);
//         filterMatches(data, false, true); // Filter matches immediately for latest
//       })
//       .catch(error => console.error('Error fetching match summaries:', error));
//   }, []);

//   const filterMatches = (data = matchDataList, showOnlyUpcoming = false, latest = false) => {
//     let filtered = data;

//     // Filter by age group
//     if (selectedAgeGroup !== 'All') {
//         filtered = filtered.filter(match =>
//             match.under && match.under.toLowerCase() === selectedAgeGroup.toLowerCase()
//         );
//     }

//     // Filter by match type
//     if (selectedMatchType !== 'All') {
//         filtered = filtered.filter(match =>
//             match.type && match.type.toLowerCase() === selectedMatchType.toLowerCase()
//         );
//     }

//     // Filter for upcoming matches if the "Upcoming" button is selected
//     if (showOnlyUpcoming) {
//         filtered = filtered.filter(match => isUpcomingMatch(match.date));
//     }

//     // Sort the filtered matches by date (ascending order for upcoming matches)
//     filtered.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort descending for latest matches

//     // Get the latest 5 matches per type without date sorting
//     if (latest) {
//         const groupedMatches = filtered.reduce((acc, match) => {
//             if (!acc[match.type]) acc[match.type] = [];
//             acc[match.type].push(match);
//             return acc;
//         }, {});

//         filtered = []; // Reset filtered matches

//         // If selectedMatchType is "All", get latest 5 from each type
//         if (selectedMatchType === 'All') {
//             // Store matches count to limit overall to 5
//             let count = 0;
//             Object.values(groupedMatches).forEach(group => {
//                 const latestMatches = group.slice(0, 5); // Get latest 5 for this type
//                 filtered = filtered.concat(latestMatches);
//                 count += latestMatches.length;
//                 if (count >= 5) {
//                     return; // Stop adding if we've reached 5
//                 }
//             });
//             // Limit final filtered to 5 total if it exceeds
//             filtered = filtered.slice(0, 5);
//         } else {
//             // If a specific match type is selected, only get the latest 5 for that type
//             if (groupedMatches[selectedMatchType]) {
//                 filtered = groupedMatches[selectedMatchType].slice(0, 5);
//             }
//         }
//     }

//     // Sort the filtered matches by date (ascending order for upcoming matches)
//     if (showOnlyUpcoming) {
//         filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
//     }

//     setFilteredMatches(filtered);
// };

//   const handleMatchCentreClick = (match) => {
//     navigate('/scorecard', {
//       state: {
//         match: {
//           matchId: match.matchId,
//           league: `RICHMOND VS ${match.opposition.toUpperCase()} ${match.type.toUpperCase()}`,
//           date: formatDate(match.date),
//           result: match.result.toUpperCase(),
//           tossResult: match.tossResult,
//           stadiumLine1: match.venue.toUpperCase(),
//           stadiumLine2: "",
//         },
//         teams: [
//           {
//             name: "Richmond College",
//             logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg',
//             score: `${match.runs}/${match.wickets}`,
//             overs: match.overs,
//           },
//           {
//             name: match.opposition,
//             logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//             score: `${match.oppositionRuns}/${match.oppositionWickets}`,
//             overs: match.oppositionOvers,
//           }
//         ]
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center">
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
//          <div className="flex flex-col items-center justify-center text-white space-y-4 w-full text-xs mt-70">
//   <div className="flex flex-row space-x-4 w-full max-w-[20rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem]">
//     <select
//       className="bg-transparent/30 rounded-2xl p-2 pr-10 text-white w-full text-xs focus:outline-none"
//       value={selectedAgeGroup}
//       onChange={(e) => {
//         setSelectedAgeGroup(e.target.value);
//         filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
//       }}
//     >
//       <option>Under 13</option>
//       <option>Under 15</option>
//       <option>Under 17</option>
//       <option>Under 19</option>
//       <option>All</option>
//     </select>

//     <select
//       className="bg-transparent/30 rounded-2xl p-2 pr-8 text-white w-full text-xs focus:outline-none"
//       value={selectedMatchType}
//       onChange={(e) => {
//         setSelectedMatchType(e.target.value);
//         filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
//       }}
//     >
//       <option>Test</option>
//       <option>T20</option>
//       <option>ODI</option>
//       <option>All</option>
//     </select>
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
//         {showUpcoming ? (
//           <Upcoming formatDate={formatDate} />
//         ) : (
//           filteredMatches.map((matchData, index) => (
//             <div key={index} className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 w-full max-w-5xl h-auto flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
//              <div className="flex items-center justify-around w-full">
//   {/* Left side (Team 1) */}
//   <div className="flex flex-col items-center space-y-2 w-full sm:w-1/4">
//     <img
//       src='https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//       alt="RICHMOND COLLEGE"
//       className="w-10 h-10 rounded-full"
//     />
//     <div className="text-center">
//       <h3 className="text-xs  tracking-wide">RICHMOND COLLEGE</h3>
//       <p className="text-sm  mt-2">
//         {matchData.runs}/{matchData.wickets}
//       </p>
//       <p className="text-xxs">{matchData.overs}</p>
//     </div>
//   </div>

//   {/* VS Divider */}
//   <div className="flex flex-col items-center justify-center">
//     <div className="h-6 w-px bg-gradient-to-b from-transparent via-white to-transparent sm:h-12" />
//     <span className="text-white text-sm my-2">VS</span>
//     <div className="h-6 w-px bg-gradient-to-t from-transparent via-white to-transparent sm:h-12" />
//   </div>

//   {/* Right side (Team 2) */}
// <div className="flex flex-col items-center space-y-2 w-full sm:w-1/4">
//   <img
//     src='https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG'
//     alt={matchData.opposition.toUpperCase()}
//     className="w-10 h-10 rounded-full"
//   />
//   <div className="text-center">
//     <h3 className="text-xs tracking-wide">{matchData.opposition.toUpperCase()}</h3>
//     <p className="text-sm mt-2">{matchData.oppositionRuns}/{matchData.oppositionWickets}</p>
//     <p className="text-xxs">{matchData.oppositionOvers}</p>
//   </div>
// </div>
// </div>

//               {/* Match details */}
//               <div className="w-full sm:w-1/2 p-2 text-left flex flex-col items-start">
//                 <h4 className="text-xs  text-[#53A2F6]">
//                   RICHMOND VS {matchData.opposition.toUpperCase()} {matchData.type.toUpperCase()}
//                 </h4>
//                 <div className="flex justify-between mt-2 w-full">
//                   <div className="flex flex-col text-left">
//                     <p className="text-xxs text-white">{formatDate(matchData.date)}</p>
//                     <p className="text-xxs text-white mt-2">{matchData.venue.toUpperCase()}</p>
//                   </div>
          
//                   <div className="flex flex-col text-right">
//                     <p className="text-xs  text-white">{matchData.result.toUpperCase()}</p>
//                     <p className="text-xxs text-white mt-2">{matchData.tossResult}</p>
//                   </div>
//                 </div>
          
//                 {/* Button */}
//                 <div className="flex justify-end w-full mt-4">
//                   <button 
//                     className="bg-[#53A2F6] rounded-full h-8 w-24 text-xxs  text-white hover:bg-blue-700"
//                     onClick={() => handleMatchCentreClick(matchData)}
//                   >
//                     Score Card
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopLayer from '../components/TopLayer';
// import topImage from '../assets/images/BG3.png';
// import Upcoming from '../components/Upcoming';

// export default function MatchInfo() {
//   const [matchDataList, setMatchDataList] = useState([]);
//   const [filteredMatches, setFilteredMatches] = useState([]);
//   const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
//   const [selectedMatchType, setSelectedMatchType] = useState('All');
//   const [activeButton, setActiveButton] = useState('Latest');
//   const [showUpcoming, setShowUpcoming] = useState(false);

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
//     return matchDay >= today.setHours(0, 0, 0, 0); // Compare ignoring the time part
//   };

//   useEffect(() => {
//     fetch("http://localhost:8080/api/matchSummary/all")
//       .then(response => response.json())
//       .then(data => {
//         setMatchDataList(data);
//         filterMatches(data, false, true); // Filter matches immediately for latest
//       })
//       .catch(error => console.error('Error fetching match summaries:', error));
//   }, []);

//   const filterMatches = (data = matchDataList, showOnlyUpcoming = false, latest = false) => {
//     console.log("Original match data: ", data);
    
//     let filtered = data;
  
//     // Filter by age group
//     if (selectedAgeGroup !== 'All') {
//       filtered = filtered.filter(match =>
//         match.under && match.under.toLowerCase() === selectedAgeGroup.toLowerCase()
//       );
//       console.log("After filtering by age group: ", filtered);
//     }
  
//     // Filter by match type
//     if (selectedMatchType !== 'All') {
//       filtered = filtered.filter(match =>
//         match.type && match.type.toLowerCase() === selectedMatchType.toLowerCase()
//       );
//       console.log("After filtering by match type: ", filtered);
//     }
  
//     // Filter for upcoming matches if the "Upcoming" button is selected
//     if (showOnlyUpcoming) {
//       filtered = filtered.filter(match => isUpcomingMatch(match.date));
//       console.log("After filtering for upcoming matches: ", filtered);
//     }

//       // Group Test matches by matchId and merge summaries if selected
//       if (selectedMatchType === 'Test' || filtered.some(match => match.type.toLowerCase() === 'test')) {
//         const groupedByMatchId = filtered.reduce((acc, match) => {
//             if (match.type.toLowerCase() === 'test') {
//                 if (!acc[match.matchId]) {
//                     acc[match.matchId] = { ...match, innings: [] };
//                 }
//                 acc[match.matchId].innings.push({
//                     runs: match.runs,
//                     wickets: match.wickets,
//                     overs: match.overs,
//                     oppositionRuns: match.oppositionRuns,
//                     oppositionWickets: match.oppositionWickets,
//                     oppositionOvers: match.oppositionOvers,
//                     result: match.result,
//                 });
//                 acc[match.matchId].result = match.result;
//             } else {
//                 acc[match.matchId] = match;
//             }
//             return acc;
//         }, {});

//         // Convert the object back to an array
//         filtered = Object.values(groupedByMatchId);
//     }

  
//     // Sort for latest or upcoming matches
//     filtered.sort((a, b) => showOnlyUpcoming
//       ? new Date(a.date) - new Date(b.date)
//       : new Date(b.date) - new Date(a.date)
//     );
//     console.log("After sorting: ", filtered);
  
//     // Get the latest 5 matches per type without date sorting
//     if (latest) {
//       const groupedMatches = filtered.reduce((acc, match) => {
//         if (!acc[match.type]) acc[match.type] = [];
//         acc[match.type].push(match);
//         return acc;
//       }, {});
//       console.log("Grouped matches by type: ", groupedMatches);
  
//       filtered = []; // Reset filtered matches
//       if (selectedMatchType === 'All') {
//         let count = 0;
//         Object.values(groupedMatches).forEach(group => {
//           const latestMatches = group.slice(0, 5); // Get latest 5 for this type
//           filtered = filtered.concat(latestMatches);
//           count += latestMatches.length;
//           if (count >= 5) return; // Stop adding if we've reached 5
//         });
//         filtered = filtered.slice(0, 5);
//         console.log("After limiting to 5 matches (All types): ", filtered);
//       } else {
//         if (groupedMatches[selectedMatchType]) {
//           filtered = groupedMatches[selectedMatchType].slice(0, 5);
//           console.log(`After limiting to 5 matches for ${selectedMatchType}: `, filtered);
//         }
//       }
//     }
  
//     console.log("Final filtered matches: ", filtered);
//     setFilteredMatches(filtered);
//   };



//   const handleMatchCentreClick = (match) => {
//     navigate('/scorecard', {
//       state: {
//         match: {
//           matchId: match.matchId,
//           league: `RICHMOND VS ${match.opposition.toUpperCase()} ${match.type.toUpperCase()}`,
//           date: formatDate(match.date),
//           result: match.result.toUpperCase(),
//           tossResult: match.tossResult,
//           stadiumLine1: match.venue.toUpperCase(),
//           stadiumLine2: "",
//         },
//         teams: [
//           {
//             name: "Richmond College",
//             logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg',
//             score: `${match.runs}/${match.wickets}`,
//             overs: match.overs,
//           },
//           {
//             name: match.opposition,
//             logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
//             score: `${match.oppositionRuns}/${match.oppositionWickets}`,
//             overs: match.oppositionOvers,
//           }
//         ]
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center">
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
//          <div className="flex flex-col items-center justify-center text-white space-y-4 w-full text-xs mt-70">
//   <div className="flex flex-row space-x-4 w-full max-w-[20rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem]">
//     <select
//       className="bg-transparent/30 rounded-2xl p-2 pr-10 text-white w-full text-xs focus:outline-none"
//       value={selectedAgeGroup}
//       onChange={(e) => {
//         setSelectedAgeGroup(e.target.value);
//         filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
//       }}
//     >
//       <option>Under 13</option>
//       <option>Under 15</option>
//       <option>Under 17</option>
//       <option>Under 19</option>
//       <option>All</option>
//     </select>

//     <select
//       className="bg-transparent/30 rounded-2xl p-2 pr-8 text-white w-full text-xs focus:outline-none"
//       value={selectedMatchType}
//       onChange={(e) => {
//         setSelectedMatchType(e.target.value);
//         filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
//       }}
//     >
//       <option>Test</option>
//       <option>T20</option>
//       <option>ODI</option>
//       <option>All</option>
//     </select>
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
//         {showUpcoming ? (
//           <Upcoming formatDate={formatDate} />
//         ) : (
//           filteredMatches.map((matchData, index) => (
//             <div key={index} className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 w-full max-w-5xl h-auto flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
//              <div className="flex items-center justify-around w-full">
//   {/* Left side (Team 1) */}
//   <div className="flex flex-col items-center space-y-2 w-full sm:w-1/4">
//     <img
//       src='https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
//       alt="RICHMOND COLLEGE"
//       className="w-10 h-10 rounded-full"
//     />
//     <div className="text-center">
//       <h3 className="text-xs  tracking-wide">RICHMOND COLLEGE</h3>
//       <p className="text-sm  mt-2">
//         {matchData.runs}/{matchData.wickets}
//       </p>
//       <p className="text-xxs">{matchData.overs}</p>
//     </div>
//   </div>

//   {/* VS Divider */}
//   <div className="flex flex-col items-center justify-center">
//     <div className="h-6 w-px bg-gradient-to-b from-transparent via-white to-transparent sm:h-12" />
//     <span className="text-white text-sm my-2">VS</span>
//     <div className="h-6 w-px bg-gradient-to-t from-transparent via-white to-transparent sm:h-12" />
//   </div>

//   {/* Right side (Team 2) */}
// <div className="flex flex-col items-center space-y-2 w-full sm:w-1/4">
//   <img
//     src='https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG'
//     alt={matchData.opposition.toUpperCase()}
//     className="w-10 h-10 rounded-full"
//   />
//   <div className="text-center">
//     <h3 className="text-xs tracking-wide">{matchData.opposition.toUpperCase()}</h3>
//     <p className="text-sm mt-2">{matchData.oppositionRuns}/{matchData.oppositionWickets}</p>
//     <p className="text-xxs">{matchData.oppositionOvers}</p>
//   </div>
// </div>
// </div>

//               {/* Match details */}
//               <div className="w-full sm:w-1/2 p-2 text-left flex flex-col items-start">
//                 <h4 className="text-xs  text-[#53A2F6]">
//                   RICHMOND VS {matchData.opposition.toUpperCase()} {matchData.type.toUpperCase()}
//                 </h4>
//                 <div className="flex justify-between mt-2 w-full">
//                   <div className="flex flex-col text-left">
//                     <p className="text-xxs text-white">{formatDate(matchData.date)}</p>
//                     <p className="text-xxs text-white mt-2">{matchData.venue.toUpperCase()}</p>
//                   </div>
          
//                   <div className="flex flex-col text-right">
//                     <p className="text-xs  text-white">{matchData.result.toUpperCase()}</p>
//                     <p className="text-xxs text-white mt-2">{matchData.tossResult}</p>
//                   </div>
//                 </div>
          
//                 {/* Button */}
//                 <div className="flex justify-end w-full mt-4">
//                   <button 
//                     className="bg-[#53A2F6] rounded-full h-8 w-24 text-xxs  text-white hover:bg-blue-700"
//                     onClick={() => handleMatchCentreClick(matchData)}
//                   >
//                     Score Card
//                   </button>
//                 </div>


                
//               </div>
              
//             </div>

            
//           ))
//         )}

        
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopLayer from '../components/TopLayer';
// import topImage from '../assets/images/BG3.png';
// import Upcoming from '../components/Upcoming';

// export default function MatchInfo() {
//   const [matchDataList, setMatchDataList] = useState([]);
//   const [filteredMatches, setFilteredMatches] = useState([]);
//   const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
//   const [selectedMatchType, setSelectedMatchType] = useState('All');
//   const [activeButton, setActiveButton] = useState('Latest');
//   const [showUpcoming, setShowUpcoming] = useState(false);

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
//     return matchDay >= today.setHours(0, 0, 0, 0); // Compare ignoring the time part
//   };

//   useEffect(() => {
//     fetch("http://localhost:8080/api/matchSummary/all")
//       .then(response => response.json())
//       .then(data => {
//         setMatchDataList(data);
//         filterMatches(data, false, true); // Filter matches immediately for latest
//       })
//       .catch(error => console.error('Error fetching match summaries:', error));
//   }, []);

//   // This useEffect will trigger filtering whenever any relevant state changes
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
//     let filtered = [...data]; // Make a copy to avoid mutating the original data

//     // Filter by age group
//     if (selectedAgeGroup !== 'All') {
//       filtered = filtered.filter(match =>
//         match.under && match.under.toLowerCase() === selectedAgeGroup.toLowerCase()
//       );
//     }

//     // Filter by match type
//     if (selectedMatchType !== 'All') {
//       filtered = filtered.filter(match =>
//         match.type && match.type.toLowerCase() === selectedMatchType.toLowerCase()
//       );
//     }

//     // Filter for upcoming matches
//     if (showOnlyUpcoming) {
//       filtered = filtered.filter(match => isUpcomingMatch(match.date));
//     }

//     // Sort for latest or upcoming matches
//     filtered.sort((a, b) => showOnlyUpcoming
//       ? new Date(a.date) - new Date(b.date)
//       : new Date(b.date) - new Date(a.date)
//     );

//     // Get the latest 5 matches if `latest` is true
//     if (latest) {
//       const groupedMatches = filtered.reduce((acc, match) => {
//         if (!acc[match.type]) acc[match.type] = [];
//         acc[match.type].push(match);
//         return acc;
//       }, {});

//       filtered = []; // Reset filtered matches
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

//     // Group Test matches by matchId and merge summaries if selected
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

//       // Convert the object back to an array
//       filtered = Object.values(groupedByMatchId);
//     }

//     console.log("Final filtered matches: ", filtered);
//     setFilteredMatches(filtered);
//   };

//   const handleMatchCentreClick = (match) => {
//     // Dynamically load Richmond College logo from the assets folder
//     const richmondLogo = require('../assets/images/LOGO.png'); // Richmond College logo
  
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
//         matchType: match.type, // Pass match type to check for "Test"
//         teams: [
//           {
//             name: "Richmond College",
//             logo: richmondLogo, // Use dynamically imported Richmond logo
//             score: match.innings && match.innings.length > 1
//               ? `${match.runs}/${match.wickets} & ${match.innings[1]?.runs}/${match.innings[1]?.wickets}`
//               : `${match.runs}/${match.wickets}`, // Show second inning only if exists
//             overs: match.innings && match.innings.length > 1
//               ? `${match.overs} & ${match.innings[1]?.overs}`
//               : match.overs, // Show second inning overs only if exists
//           },
//           {
//             name: match.opposition,
//             logo: match.logo, // Opposition logo from the API response
//             score: match.innings && match.innings.length > 1
//               ? `${match.oppositionRuns}/${match.oppositionWickets} & ${match.innings[1]?.oppositionRuns}/${match.innings[1]?.oppositionWickets}`
//               : `${match.oppositionRuns}/${match.oppositionWickets}`, // Show second inning score if exists
//             overs: match.innings && match.innings.length > 1
//               ? `${match.oppositionOvers} & ${match.innings[1]?.oppositionOvers}`
//               : match.oppositionOvers, // Show second inning overs if exists
//           }
//         ]
//       }
//     });
//   };
  

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center">
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
//          <div className="flex flex-col items-center justify-center text-white space-y-4 w-full text-xs mt-70">
//   <div className="flex flex-row space-x-4 w-full max-w-[20rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem]">
//     <select
//       className="bg-transparent/30 rounded-2xl p-2 pr-10 text-white w-full text-xs focus:outline-none"
//       value={selectedAgeGroup}
//       onChange={(e) => {
//         setSelectedAgeGroup(e.target.value);
//         filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
//       }}
//     >
//       <option>Under 13</option>
//       <option>Under 15</option>
//       <option>Under 17</option>
//       <option>Under 19</option>
//       <option>All</option>
//     </select>

//     <select
//       className="bg-transparent/30 rounded-2xl p-2 pr-8 text-white w-full text-xs focus:outline-none"
//       value={selectedMatchType}
//       onChange={(e) => {
//         setSelectedMatchType(e.target.value);
//         filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
//       }}
//     >
//       <option>Test</option>
//       <option>T20</option>
//       <option>ODI</option>
//       <option>All</option>
//     </select>
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
     
//  <div className="flex flex-col items-center flex-grow mt-7 space-y-4 px-4">
//       {showUpcoming ? ( <Upcoming selectedAgeGroup={selectedAgeGroup} selectedMatchType={selectedMatchType} />
//        ) : ( filteredMatches.map((matchData, index) => (
//             <div key={index} className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 w-full max-w-5xl h-auto flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
//      {matchData.type.toLowerCase() === 'test' && matchData.innings ? (
//   <div className="w-full flex flex-col items-center space-y-4">
//      <div className="flex flex-row items-center justify-between w-full">
//       {/* Richmond College - Innings */}
//       <div className="flex flex-col items-center w-1/2">
//       <img
//                 src={require('../assets/images/LOGO.png')} // Dynamic import for assets in React
//                 alt="RICHMOND COLLEGE"
//                 className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
//               />
//          <h3 className="text-xs tracking-wide mt-2">RICHMOND COLLEGE</h3>
        
//         {matchData.innings && matchData.innings.map((inning, idx) => (
//   <div key={idx} className="mt-2">
//     <p className="text-sm mt-2">{inning.runs}/{inning.wickets}</p>
//     <p className="text-xxs items-center justify-center ">{inning.overs}</p>
//   </div>
// ))}

//       </div>

//      {/* VS Divider */}
// <div className="flex flex-col items-center justify-center">
//     <div className="h-6 w-px bg-gradient-to-b from-transparent via-white to-transparent sm:h-12" />
//     <span className="text-white text-sm my-2">VS</span>
//     <div className="h-6 w-px bg-gradient-to-t from-transparent via-white to-transparent sm:h-12" />
//   </div>

//        {/* Opposition Team - Innings */}
//        <div className="flex flex-col items-center w-1/2">
//        <img
//                 src={matchData.logo}  // <-- Use the logo from match data
//                 alt={matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"}
//                 className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
//               />
//         <h3 className="text-xs tracking-wide mt-2">{matchData.opposition.toUpperCase()}</h3>
//         {matchData.innings.map((inning, idx) => (
//           <div key={idx} className="mt-2">
//              <p className="text-sm mt-2">{inning.oppositionRuns}/{inning.oppositionWickets}</p>
//             <p className="text-xxs">{inning.oppositionOvers}</p>
//           </div>
//         ))}
//       </div>

//       {/* Match details */}
//       <div className="w-full sm:w-1/2 p-2 text-left flex flex-col items-start">
//       <h4 className="text-xs text-[#53A2F6] mt-2">
//                       RICHMOND VS {matchData.opposition.toUpperCase()} {matchData.type.toUpperCase()}
//                     </h4>
//                     <div className="flex justify-between mt-2 w-full">
//             <div className="flex flex-col text-left">
//               <p className="text-xxs text-white">{formatDate(matchData.date)}</p>
//                          <p className="text-xxs text-white mt-2">{matchData.venue.toUpperCase()}</p>
//             </div>
//             <div className="flex flex-col text-right">
//               <p className="text-xxs text-white">{matchData.result.toUpperCase()}</p>
//                         <p className="text-xxs text-white mt-2">{matchData.tossResult}</p>
//                       </div>
//                     </div>
//                     {/* Scorecard button */}
//                     <div className="flex justify-end w-full mt-4">
//                       <button 
//                         className="bg-[#53A2F6] rounded-full h-8 w-24 text-xxs text-white hover:bg-blue-700"
//                         onClick={() => handleMatchCentreClick(matchData)}
//                       >
//                         Score Card
//                       </button>
//                     </div>
//                     </div>

//     </div>
//   </div>
// ) : (
             
//                 <>
//                     {/* Horizontal Layout for Teams */}
//         <div className="flex flex-row items-center justify-between w-full">
//           {/* Team 1 */}
//           <div className="flex flex-col items-center w-1/2">
//           <img
//                 src={require('../assets/images/LOGO.png')} // Dynamic import for assets in React
//                 alt="RICHMOND COLLEGE"
//                 className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
//               />
//             <h3 className="text-xs tracking-wide mt-2">RICHMOND COLLEGE</h3>
//             <p className="text-sm mt-2">{matchData.runs}/{matchData.wickets}</p>
//             <p className="text-xxs">{matchData.overs}</p>
//           </div>
// {/* VS Divider */}
// <div className="flex flex-col items-center justify-center">
//     <div className="h-6 w-px bg-gradient-to-b from-transparent via-white to-transparent sm:h-12" />
//     <span className="text-white text-sm my-2">VS</span>
//     <div className="h-6 w-px bg-gradient-to-t from-transparent via-white to-transparent sm:h-12" />
//   </div>

//           {/* Team 2 */}
//           <div className="flex flex-col items-center w-1/2">
//           <img
//                 src={matchData.logo}  // <-- Use the logo from match data
//                 alt={matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"}
//                 className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
//               />
//             <h3 className="text-xs tracking-wide mt-2">{matchData.opposition.toUpperCase()}</h3>
//             <p className="text-sm mt-2">{matchData.oppositionRuns}/{matchData.oppositionWickets}</p>
//             <p className="text-xxs">{matchData.oppositionOvers}</p>
//           </div>
//         </div>

//         {/* Match details */}
//         <div className="w-full sm:w-1/2 p-2 text-left flex flex-col items-start">
//           <h4 className="text-xs text-[#53A2F6] mt-2">
//             RICHMOND VS {matchData.opposition.toUpperCase()} {matchData.type.toUpperCase()}
//           </h4>
//           <div className="flex justify-between mt-2 w-full">
//             <div className="flex flex-col text-left">
//               <p className="text-xxs text-white">{formatDate(matchData.date)}</p>
//               <p className="text-xxs text-white mt-2">{matchData.venue.toUpperCase()}</p>
//             </div>
//             <div className="flex flex-col text-right">
//               <p className="text-xxs text-white">{matchData.result.toUpperCase()}</p>
//               <p className="text-xxs text-white mt-2">{matchData.tossResult}</p>
//             </div>
//           </div>
//           {/* Scorecard button */}
//           <div className="flex justify-end w-full mt-4">
//             <button
//               className="bg-[#53A2F6] rounded-full h-8 w-24 text-xxs text-white hover:bg-blue-700"
//               onClick={() => handleMatchCentreClick(matchData)}
//             >
//               Score Card
//             </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );                        
// }




// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TopLayer from '../components/TopLayer';
// import topImage from '../assets/images/BG3.png';
// import Upcoming from '../components/Upcoming';

// export default function MatchInfo() {
//   const [matchDataList, setMatchDataList] = useState([]);
//   const [filteredMatches, setFilteredMatches] = useState([]);
//   const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
//   const [selectedMatchType, setSelectedMatchType] = useState('All');
//   const [activeButton, setActiveButton] = useState('Latest');
//   const [showUpcoming, setShowUpcoming] = useState(false);

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
//     return matchDay >= today.setHours(0, 0, 0, 0); // Compare ignoring the time part
//   };

//   useEffect(() => {
//     fetch("http://localhost:8080/api/matchSummary/all")
//       .then(response => response.json())
//       .then(data => {
//         setMatchDataList(data);
//         filterMatches(data, false, true); // Filter matches immediately for latest
//       })
//       .catch(error => console.error('Error fetching match summaries:', error));
//   }, []);

//   // This useEffect will trigger filtering whenever any relevant state changes
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
//     let filtered = [...data]; // Make a copy to avoid mutating the original data

//     // Filter by age group
//     if (selectedAgeGroup !== 'All') {
//       filtered = filtered.filter(match =>
//         match.under && match.under.toLowerCase() === selectedAgeGroup.toLowerCase()
//       );
//     }

//     // Filter by match type
//     if (selectedMatchType !== 'All') {
//       filtered = filtered.filter(match =>
//         match.type && match.type.toLowerCase() === selectedMatchType.toLowerCase()
//       );
//     }

//     // Filter for upcoming matches
//     if (showOnlyUpcoming) {
//       filtered = filtered.filter(match => isUpcomingMatch(match.date));
//     }

//     // Sort for latest or upcoming matches
//     filtered.sort((a, b) => showOnlyUpcoming
//       ? new Date(a.date) - new Date(b.date)
//       : new Date(b.date) - new Date(a.date)
//     );

//     // Get the latest 5 matches if `latest` is true
//     if (latest) {
//       const groupedMatches = filtered.reduce((acc, match) => {
//         if (!acc[match.type]) acc[match.type] = [];
//         acc[match.type].push(match);
//         return acc;
//       }, {});

//       filtered = []; // Reset filtered matches
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

//     // Group Test matches by matchId and merge summaries if selected
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

//       // Convert the object back to an array
//       filtered = Object.values(groupedByMatchId);
//     }

//     console.log("Final filtered matches: ", filtered);
//     setFilteredMatches(filtered);
//   };

//   const handleMatchCentreClick = (match) => {
//     // Dynamically load Richmond College logo from the assets folder
//     const richmondLogo = require('../assets/images/LOGO.png'); // Richmond College logo
  
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
//         matchType: match.type, // Pass match type to check for "Test"
//         teams: [
//           {
//             name: "Richmond College",
//             logo: richmondLogo, // Use dynamically imported Richmond logo
//             score: match.innings && match.innings.length > 1
//               ? `${match.runs}/${match.wickets} & ${match.innings[1]?.runs}/${match.innings[1]?.wickets}`
//               : `${match.runs}/${match.wickets}`, // Show second inning only if exists
//             overs: match.innings && match.innings.length > 1
//               ? `${match.overs} & ${match.innings[1]?.overs}`
//               : match.overs, // Show second inning overs only if exists
//           },
//           {
//             name: match.opposition,
//             logo: match.logo, // Opposition logo from the API response
//             score: match.innings && match.innings.length > 1
//               ? `${match.oppositionRuns}/${match.oppositionWickets} & ${match.innings[1]?.oppositionRuns}/${match.innings[1]?.oppositionWickets}`
//               : `${match.oppositionRuns}/${match.oppositionWickets}`, // Show second inning score if exists
//             overs: match.innings && match.innings.length > 1
//               ? `${match.oppositionOvers} & ${match.innings[1]?.oppositionOvers}`
//               : match.oppositionOvers, // Show second inning overs if exists
//           }
//         ]
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-cover bg-center">
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
//          <div className="flex flex-col items-center justify-center text-white space-y-4 w-full text-xs mt-70">
//   <div className="flex flex-row space-x-4 w-full max-w-[20rem] sm:max-w-[30rem] md:max-w-[35rem] lg:max-w-[40rem]">
//     <select
//       className="bg-transparent/30 rounded-2xl p-2 pr-10 text-white w-full text-xs focus:outline-none"
//       value={selectedAgeGroup}
//       onChange={(e) => {
//         setSelectedAgeGroup(e.target.value);
//         filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
//       }}
//     >
//       <option>Under 13</option>
//       <option>Under 15</option>
//       <option>Under 17</option>
//       <option>Under 19</option>
//       <option>All</option>
//     </select>

//     <select
//       className="bg-transparent/30 rounded-2xl p-2 pr-8 text-white w-full text-xs focus:outline-none"
//       value={selectedMatchType}
//       onChange={(e) => {
//         setSelectedMatchType(e.target.value);
//         filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
//       }}
//     >
//       <option>Test</option>
//       <option>T20</option>
//       <option>ODI</option>
//       <option>All</option>
//     </select>
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
//         className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 w-full max-w-5xl h-auto flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0"
//       >
//         {/* Richmond College Section */}
//         <div className="flex flex-row items-center justify-between w-full">
//           <div className="flex flex-col items-center w-full sm:w-1/2">
//             <img
//               src={require('../assets/images/LOGO.png')}
//               alt="RICHMOND COLLEGE"
//               className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
//             />
//             <h3 className="text-xxs sm:text-sm font-semibold tracking-wide mt-2">RICHMOND COLLEGE</h3>
//             {matchData.type.toLowerCase() === 'test' && matchData.innings ? (
//               matchData.innings.map((inning, idx) => (
//                 <div key={idx} className="mt-2">
//                   <p className="text-sm sm:text-xs mt-2">{inning.runs}/{inning.wickets}</p>
//                   <p className="text-xxs sm:text-xxs">{inning.overs}</p>
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
//             <div className="h-6 sm:h-8 md:h-10 w-px bg-gradient-to-b from-transparent via-white to-transparent sm:h-12" />
//             <span className="text-white text-sm sm:text-base my-2">VS</span>
//             <div className="h-6 sm:h-8 md:h-10 w-px bg-gradient-to-t from-transparent via-white to-transparent sm:h-12" />
//           </div>

//           {/* Opposition Section */}
//           <div className="flex flex-col items-center w-full sm:w-1/2">
//             <img
//               src={matchData.logo}
//               alt={matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"}
//               className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
//             />
//             <h3 className="text-xxs sm:text-sm tracking-wide mt-2 font-semibold">{matchData.opposition.toUpperCase()}</h3>
//             {matchData.type.toLowerCase() === 'test' && matchData.innings ? (
//               matchData.innings.map((inning, idx) => (
//                 <div key={idx} className="mt-2">
//                   <p className="text-sm sm:text-xs mt-2">{inning.oppositionRuns}/{inning.oppositionWickets}</p>
//                   <p className="text-xxs sm:text-xxs justify-center items-center">{inning.oppositionOvers}</p>
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
//         <div className="w-full sm:w-1/2 p-2 text-left flex flex-col items-start">
//           <h4 className="text-xs sm:text-sm text-[#53A2F6] mt-2 font-semibold">
//             RICHMOND VS {matchData.opposition.toUpperCase()} {matchData.type.toUpperCase()}
//           </h4>
//           <div className="flex justify-between mt-2 w-full">
//             <div className="flex flex-col text-left">
//               <p className="text-xxs sm:text-xxs text-white">{formatDate(matchData.date)}</p>
//               <p className="text-xxs sm:text-xxs text-white mt-2">{matchData.venue.toUpperCase()}</p>
//             </div>
//             <div className="flex flex-col text-right">
//               <p className="text-xxs sm:text-xs text-white">{matchData.result.toUpperCase()}</p>
//               <p className="text-xxs sm:text-xs text-white mt-2">{matchData.tossResult}</p>
//             </div>
//           </div>
//           <div className="flex justify-end w-full mt-4">
//             <button
//               className="bg-[#53A2F6] rounded-full h-8 sm:h-10 w-24 sm:w-28 text-xxs sm:text-xs text-white hover:bg-blue-700"
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
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopLayer from '../components/TopLayer';
import topImage from '../assets/images/BG3.png';
import Upcoming from '../components/Upcoming';
import Footer from '../components/Footer';  // Make sure this is only imported once

export default function MatchInfo() {
  const [matchDataList, setMatchDataList] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [selectedMatchType, setSelectedMatchType] = useState('All');
  const [activeButton, setActiveButton] = useState('Latest');
  const [showUpcoming, setShowUpcoming] = useState(false);
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
    return matchDay >= today.setHours(0, 0, 0, 0); // Compare ignoring the time part
  };

  useEffect(() => {

    fetch(`${API_URL}matchSummary/all`)

      .then(response => response.json())
      .then(data => {
        setMatchDataList(data);
        filterMatches(data, false, true); // Filter matches immediately for latest
      })
      .catch(error => console.error('Error fetching match summaries:', error));
  }, []);

  // This useEffect will trigger filtering whenever any relevant state changes
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
    let filtered = [...data]; // Make a copy to avoid mutating the original data

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

    // Filter for upcoming matches
    if (showOnlyUpcoming) {
      filtered = filtered.filter(match => isUpcomingMatch(match.date));
    }

    // Sort for latest or upcoming matches
    filtered.sort((a, b) => showOnlyUpcoming
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date)
    );

    // Get the latest 5 matches if `latest` is true
    if (latest) {
      const groupedMatches = filtered.reduce((acc, match) => {
        if (!acc[match.type]) acc[match.type] = [];
        acc[match.type].push(match);
        return acc;
      }, {});

      filtered = []; // Reset filtered matches
      if (selectedMatchType === 'All') {
        let count = 0;
        Object.values(groupedMatches).forEach(group => {
          const latestMatches = group.slice(0, 5);
          filtered = filtered.concat(latestMatches);
          count += latestMatches.length;
          if (count >= 5) return;
        });
        filtered = filtered.slice(0, 5);
      } else {
        if (groupedMatches[selectedMatchType]) {
          filtered = groupedMatches[selectedMatchType].slice(0, 5);
        }
      }
    }

    // Group Test matches by matchId and merge summaries if selected
    if (selectedMatchType === 'Test' || filtered.some(match => match.type.toLowerCase() === 'test')) {
      const groupedByMatchId = filtered.reduce((acc, match) => {
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
            result: match.result,
          });
          acc[match.matchId].result = match.result;
        } else {
          acc[match.matchId] = match;
        }
        return acc;
      }, {});

      // Convert the object back to an array
      filtered = Object.values(groupedByMatchId);
    }

    console.log("Final filtered matches: ", filtered);
    setFilteredMatches(filtered);
  };

  const handleMatchCentreClick = (match) => {
    // Dynamically load Richmond College logo from the assets folder
    const richmondLogo = require('../assets/images/LOGO.png'); // Richmond College logo
  
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
        matchType: match.type, // Pass match type to check for "Test"
        teams: [
          {
            name: "Richmond College",
            logo: richmondLogo, // Use dynamically imported Richmond logo
            score: match.innings && match.innings.length > 1
              ? `${match.runs}/${match.wickets} & ${match.innings[1]?.runs}/${match.innings[1]?.wickets}`
              : `${match.runs}/${match.wickets}`, // Show second inning only if exists
            overs: match.innings && match.innings.length > 1
              ? `${match.overs} & ${match.innings[1]?.overs}`
              : match.overs, // Show second inning overs only if exists
          },
          {
            name: match.opposition,
            logo: match.logo, // Opposition logo from the API response
            score: match.innings && match.innings.length > 1
              ? `${match.oppositionRuns}/${match.oppositionWickets} & ${match.innings[1]?.oppositionRuns}/${match.innings[1]?.oppositionWickets}`
              : `${match.oppositionRuns}/${match.oppositionWickets}`, // Show second inning score if exists
            overs: match.innings && match.innings.length > 1
              ? `${match.oppositionOvers} & ${match.innings[1]?.oppositionOvers}`
              : match.oppositionOvers, // Show second inning overs if exists
          }
        ]
      }
    });
  };

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
        filterMatches(matchDataList, false, activeButton === 'Latest'); // Trigger filtering on change
      }}
    >
      <option>Under 13</option>
      <option>Under 15</option>
      <option>Under 17</option>
      <option>Under 19</option>
      <option>Richmond legend  over  40
      </option>
      <option>Richmond legend over 50</option>
      <option>Old boys
      </option>
      <option>Academy</option>
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
    <Upcoming selectedAgeGroup={selectedAgeGroup} selectedMatchType={selectedMatchType} />
  ) : (
    filteredMatches.map((matchData, index) => (
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
                  <p className="text-xxs sm:text-xxs text-xxs sm:text-xxs text-center">{inning.overs}</p>
                </div>
              ))
            ) : (
              <>
                <p className="text-sm sm:text-xs mt-2">{matchData.runs}/{matchData.wickets}</p>
                <p className="text-xxs sm:text-xxs">{matchData.overs}</p>
              </>
            )}
          </div>

          {/* VS Divider */}
          <div className="flex flex-col items-center justify-center">
            <div className="h-6 sm:h-8 md:h-10 w-px bg-gradient-to-b from-transparent via-[#012D5E] to-transparent sm:h-12" />
            <span className="text-[#012D5E] text-sm sm:text-base my-2">VS</span>
            <div className="h-6 sm:h-8 md:h-10 w-px bg-gradient-to-t from-transparent via-[#012D5E] to-transparent sm:h-12 " />
          </div>

          {/* Opposition Section */}
          <div className="flex flex-col items-center w-full sm:w-1/2">
            <img
              src={matchData.logo}
              alt={matchData.opposition ? matchData.opposition.toUpperCase() : "UNKNOWN OPPONENT"}
              className="w-10 h-10 sm:w-12 sm:h-12 "
            />
            <h3 className="text-xxs sm:text-sm tracking-wide mt-2 font-bold">{matchData.opposition.toUpperCase()}</h3>
            {matchData.type.toLowerCase() === 'test' && matchData.innings ? (
              matchData.innings.map((inning, idx) => (
                <div key={idx} className="mt-2">
                  <p className="text-sm sm:text-xs mt-2">{inning.oppositionRuns}/{inning.oppositionWickets}</p>
                  <p className="text-xxs sm:text-xxs text-xxs sm:text-xxs text-center">{inning.oppositionOvers}</p>
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
            RICHMOND VS {matchData.opposition.toUpperCase()} {matchData.type.toUpperCase()}
          </h4>
          <div className="flex justify-between mt-2 w-full">
            <div className="flex flex-col text-left">
              <p className="text-xxs sm:text-xxs text-black">{formatDate(matchData.date)}</p>
              <p className="text-xxs sm:text-xxs text-black mt-2">{matchData.venue.toUpperCase()}</p>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-xxs sm:text-xs text-black">{matchData.result.toUpperCase()}</p>
              <p className="text-xxs sm:text-xs text-black mt-2">{matchData.tossResult}</p>
            </div>
          </div>
          <div className="flex justify-end w-full mt-4">
            <button
              className="bg-[#012D5E] rounded-full h-8 sm:h-10 w-24 sm:w-28 text-xxs sm:text-xs text-white hover:bg-blue-700"
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

      
             {/* Footer */}
             <Footer/>
    </div>
  );
}
