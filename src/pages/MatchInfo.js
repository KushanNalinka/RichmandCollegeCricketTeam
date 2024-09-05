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


import React from 'react';
import Navbar from '../components/HomeNavbar';
import Blue from '../assets/images/Blue1.png';
import './MatchInfo.css';

export default function MatchInfo() {
  const matches = [
    {
      result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
      team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
      team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
      status: 'Richmond won by 7 wickets (with 18 balls remaining)',
      links: ['View More'],
    },

    {
      result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
      team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
      team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
      status: 'Richmond won by 7 wickets (with 18 balls remaining)',
      links: ['View More'],
    },

    {
      result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
      team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
      team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
      status: 'Richmond won by 7 wickets (with 18 balls remaining)',
      links: ['View More'],
    },

    {
      result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
      team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
      team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
      status: 'Richmond won by 7 wickets (with 18 balls remaining)',
      links: ['View More'],
    },
    
    {
      result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
      team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
      team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
      status: 'Richmond won by 7 wickets (with 18 balls remaining)',
      links: ['View More'],
    },
    
    {
      result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
      team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
      team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
      status: 'Richmond won by 7 wickets (with 18 balls remaining)',
      links: ['View More'],
    },
    
    {
      result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
      team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
      team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
      status: 'Richmond won by 7 wickets (with 18 balls remaining)',
      links: ['View More'],
    },
    
    {
      result: 'RESULT • 6th Match • CPL 2024 • T20 • Bandaranyaka Stadium',
      team1: { name: 'Richmond', score: '142/7', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Richmond_College_Crest.jpg' },
      team2: { name: 'Mahinda', score: '144/3', overs: '17/20 ov, T:143', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/MahindaCollegeLogo.JPG' },
      status: 'Richmond won by 7 wickets (with 18 balls remaining)',
      links: ['View More'],
    },
    
    // Add more matches if needed...
  ];

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
//         <div className="absolute top-12 left-0 right-0 bg-opacity-50  p-4 flex justify-left items-left space-x-8">
//           <button className="text-sm font-semibold hover:underline">Latest</button>
//           <button className="text-sm font-semibold hover:underline">Upcoming</button>
//           <button className="text-sm font-semibold hover:underline">Past Matches</button>
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
//               style={{ height: '180px' }}
//             >
//               {/* Match Result */}
//               <div className="text-gray-500 text-xxs mb-2">{match.result}</div>

//               {/* Team Names and Scores */}
//               <div className="flex flex-col justify-between h-full">
//                 {/* First Team */}
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center space-x-2">
//                     <img src={match.team1.logo} alt={`${match.team1.name} logo`} className="w-5 h-5" />
//                     <div className="text-sm font-semibold">{match.team1.name}</div>
//                   </div>
//                   <div className="text-xs font-semibold">{match.team1.score}</div>
//                 </div>

//                 {/* Second Team */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-2">
//                     <img src={match.team2.logo} alt={`${match.team2.name} logo`} className="w-5 h-5" />
//                     <div className="text-sm font-semibold">{match.team2.name}</div>
//                   </div>
//                   <div className="text-xs font-semibold flex items-center space-x-2">
//                     <div className="text-gray-500">{match.team2.overs}</div>
//                     <div>{match.team2.score}</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Match Status */}
//               <div className="text-xxs font-medium text-gray-800 mt-2 mb-2">{match.status}</div>

//               {/* Divider Line */}
//               <hr className="border-t border-gray-300 my-2" />

//               {/* Links */}
//               <div className="flex space-x-4 text-blue-500 text-sm">
//                 {match.links.map((link, idx) => (
//                   <button key={idx} className="hover:underline">{link}</button>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      <div
        className="relative flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${Blue})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '250px', // Adjust this height based on your design
        }}
      >
        <div className="absolute top-12 left-0 right-0 bg-opacity-50 p-4 flex justify-left items-left space-x-8">
          <button className="animated-button">Latest</button>
          <button className="animated-button">Upcoming</button>
          <button className="animated-button">Past Matches</button>
        </div>
        <div className="flex flex-col justify-center items-center h-full pt-16">
          <h1 className="text-3xl font-bold">RICHMOND MATCHES</h1>
        </div>
      </div>

      {/* Matches Section */}
      <div className="flex-grow flex flex-col items-center p-4 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {matches.map((match, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-lg flex flex-col"
              style={{ height: '180px' }}
            >
              {/* Match Result */}
              <div className="text-gray-500 text-xxs mb-2">{match.result}</div>

              {/* Team Names and Scores */}
              <div className="flex flex-col justify-between h-full">
                {/* First Team */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <img src={match.team1.logo} alt={`${match.team1.name} logo`} className="w-5 h-5" />
                    <div className="text-sm font-semibold">{match.team1.name}</div>
                  </div>
                  <div className="text-xs font-semibold">{match.team1.score}</div>
                </div>

                {/* Second Team */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src={match.team2.logo} alt={`${match.team2.name} logo`} className="w-5 h-5" />
                    <div className="text-sm font-semibold">{match.team2.name}</div>
                  </div>
                  <div className="text-xs font-semibold flex items-center space-x-2">
                    <div className="text-gray-500">{match.team2.overs}</div>
                    <div>{match.team2.score}</div>
                  </div>
                </div>
              </div>

              {/* Match Status */}
              <div className="text-xxs font-medium text-gray-800 mt-2 mb-2">{match.status}</div>

              {/* Divider Line */}
              <hr className="border-t border-gray-300 my-2" />

              {/* Links */}
              <div className="flex space-x-4 text-blue-500 text-sm">
                {match.links.map((link, idx) => (
                  <button key={idx} className="hover:underline">{link}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}