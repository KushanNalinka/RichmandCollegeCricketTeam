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

import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopLayer from '../components/TopLayer';
import topImage from '../assets/images/BG3.png'; 


const MATCH_INFO = [
  {
    date: "21 Jul 2024",
    stadiumLine1: "R. Premadasa International Cricket",
    stadiumLine2: "Stadium, Colombo",
    league: "RICHMOND VS MAHINDA T20 2024",
    result: "RICHMOND WON BY 9 WICKET",
    tossResult: "RICHMOND WON THE TOSS AND ELECTED TO FIELD",
  },
  {
    date: "22 Jul 2024",
    stadiumLine1: "Pallekele International Cricket",
    stadiumLine2: "Stadium, Kandy",
    league: "RICHMOND VS MAHINDA T20 2024",
    result: "RICHMOND WON BY 5 WICKETS",
    tossResult: "MAHINDA WON THE TOSS AND ELECTED TO BAT",
  },
  {
    date: "22 Jul 2024",
    stadiumLine1: "Pallekele International Cricket",
    stadiumLine2: "Stadium, Kandy",
    league: "RICHMOND VS MAHINDA T20 2024",
    result: "RICHMOND WON BY 5 WICKETS",
    tossResult: "MAHINDA WON THE TOSS AND ELECTED TO BAT",
  }
];

const TEAMS = [
  {
    name: "RICHMOND COLLEGE",
    score: "184/6",
    overs: "(20.0)",
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
  },
  {
    name: "MAHINDA COLLEGE",
    score: "185/1",
    overs: "(15.4)",
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
  },
  {
    name: "RICHMOND COLLEGE",
    score: "150/8",
    overs: "(20.0)",
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
  },
  {
    name: "MAHINDA COLLEGE",
    score: "151/9",
    overs: "(19.5)",
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
  },

  {
    name: "RICHMOND COLLEGE",
    score: "150/8",
    overs: "(20.0)",
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg'
  },
  {
    name: "MAHINDA COLLEGE",
    score: "151/9",
    overs: "(19.5)",
    logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG',
  },
];

export default function MatchInfo() {
  const navigate = useNavigate();

  const handleMatchCentreClick = (match, teams) => {
    // Navigatee to the scorecard page and pass scorecard data
    navigate('/scorecard', { state: { match, teams } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center">
      <div className="relative">
        {/* Ensure the TopLayer has enough height to be visible */}
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
          {/* Overlay the dropdown and buttons layout */}
          <div className="flex flex-col items-center justify-center text-white space-y-4 w-[21rem] text-xs mt-70 "> {/* Custom width */}
  <div className="flex space-x-6"> {/* Space between the dropdowns */}
    <select className="bg-transparent/30  rounded-2xl p-2 text-white w-[21rem] text-xs focus:outline-none "> {/* Set width using w-[21rem] */}
      <option>Under-13</option>
      <option>Under-15</option>
      <option>Under-17</option>
      <option>Under-19</option>
    </select>
    <select className="bg-transparent/30  rounded-2xl p-2 text-white w-[21rem] focus:outline-none "> {/* Set width using w-[21rem] */}
      <option>Test</option>
      <option>T20</option>
      <option>ODI</option>
    </select>
  </div>
  <div className="flex space-x-4">
  <button className="bg-[#001f3f] w-24 h-8 rounded-full text-white text-xxs font-semibold">Latest</button>
  <button className="bg-gray-400 w-24 h-8 rounded-full text-white text-xxs">Upcoming</button>
  <button className="bg-gray-400 w-24 h-8 rounded-full text-white text-xxs">Matches</button>
</div>

</div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center flex-grow mt-7 space-y-8">
        {MATCH_INFO.map((match, index) => (
          <div key={index} className="bg-[#012D5E]/70 text-white rounded-3xl shadow-lg p-4 md:p-6 w-full max-w-7xl md:h-40 h-auto flex flex-col md:flex-row items-center justify-between">
            {/* Left side (Team 1) */}
            <div className="flex flex-col items-center space-y-2 w-full md:w-1/4 mb-4 md:mb-0">
              <img
                src={TEAMS[index * 2].logo}
                alt={TEAMS[index * 2].name}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              />
              <div className="text-center">
                <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{TEAMS[index * 2].name.toUpperCase()}</h3>
                <p className="text-lg md:text-m font-bold mt-2">{TEAMS[index * 2].score}</p>
                <p className="text-xxs md:text-xs mt-1">{TEAMS[index * 2].overs}</p>
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
                src={TEAMS[index * 2 + 1].logo}
                alt={TEAMS[index * 2 + 1].name}
                className="w-12 h-12 md:w-12 md:h-12 rounded-full"
              />
              <div className="text-center">
                <h3 className="text-xxs md:text-xs font-semibold tracking-wide">{TEAMS[index * 2 + 1].name.toUpperCase()}</h3>
                <p className="text-lg md:text-m font-bold mt-2">{TEAMS[index * 2 + 1].score}</p>
                <p className="text-xxs md:text-xs mt-1">{TEAMS[index * 2 + 1].overs}</p>
              </div>
            </div>

            {/* Match details */}
            <div className="w-full md:w-1/2 p-4 md:p-6 text-left flex flex-col">
              <h4 className="text-sm md:text-base font-bold text-[#53A2F6] ">{match.league}</h4>
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
              <button
                className="mt-4 bg-[#4A0D34] text-white text-xxs md:text-xxs font-semibold px-4 md:px-6 py-1 rounded-full ml-auto w-35 h-10"
                onClick={() => handleMatchCentreClick(match, [TEAMS[index * 2], TEAMS[index * 2 + 1]])}
              >
                Score card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}