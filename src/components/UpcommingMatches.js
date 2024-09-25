

// import React from "react"; 
// import richLogo from "../assets/images/RLogo.png"; // Adjust the path to your image location
// import mahiLogo from "../assets/images/MLogo.png"; // Adjust the path to your image location
// import titleImage from '../assets/images/Upcomming Matches.png'; // Image path for the title

// const MatchTable = () => {
//   const matches = [
//     {
//       date: "09/19/2024",
//       time: "8:30 A.M.",
//       team1: "RICH",
//       team2: "MAHI",
//       venue: "Richmond Cricket Ground",
//       team1Logo: richLogo,
//       team2Logo: mahiLogo,
//     },
//     {
//       date: "09/19/2024",
//       time: "8:30 A.M.",
//       team1: "RICH",
//       team2: "MAHI",
//       venue: "Richmond Cricket Ground",
//       team1Logo: richLogo,
//       team2Logo: mahiLogo,
//     },
//     {
//       date: "09/19/2024",
//       time: "8:30 A.M.",
//       team1: "RICH",
//       team2: "MAHI",
//       venue: "Richmond Cricket Ground",
//       team1Logo: richLogo,
//       team2Logo: mahiLogo,
//     },
//     // Add more matches as needed
//   ];

//   return (
//     <div className="w-full p-6">
//       {/* Title Image with Enlarged Effect */}
//       <div className="flex justify-center mb-8">
//         <img 
//           src={titleImage} 
//           alt="Upcoming Matches" 
//           className="w-full h-auto md:w-2/3 lg:w-1/2 transform scale-105 transition-transform duration-500" // Enlarged image with scaling effect
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
//         <table className="min-w-full border-collapse">
//           {/* Table Header */}
//           <thead className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
//             <tr>
//               <th className="px-4 py-2 text-left">Date</th>
//               <th className="px-4 py-2 text-left">Time</th>
//               <th className="px-4 py-2 text-left">Match</th>
//               <th className="px-4 py-2 text-left">Venue</th>
//             </tr>
//           </thead>
//           {/* Table Body */}
//           <tbody>
//             {matches.map((match, index) => (
//               <tr key={index} className="border-t border-gray-300">
//                 <td className="px-4 py-4 bg-blue-50">{match.date}</td>
//                 <td className="px-4 py-4 bg-blue-50">{match.time}</td>
//                 <td className="px-4 py-4 bg-blue-50 flex items-center">
//                   <img
//                     src={match.team1Logo}
//                     alt={`${match.team1} logo`}
//                     className="w-6 h-6 mr-2"
//                   />
//                   {match.team1}
//                   <span className="mx-2">vs</span>
//                   <img
//                     src={match.team2Logo}
//                     alt={`${match.team2} logo`}
//                     className="w-6 h-6 mr-2"
//                   />
//                   {match.team2}
//                 </td>
//                 <td className="px-4 py-4 bg-blue-50">{match.venue}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MatchTable;

import React from "react"; 
import richLogo from "../assets/images/RLogo.png"; // Adjust the path to your image location
import mahiLogo from "../assets/images/MLogo.png"; // Adjust the path to your image location


const MatchTable = () => {
  const matches = [
    {
      date: "09/19/2024",
      time: "8:30 A.M.",
      team1: "RICH",
      team2: "MAHI",
      venue: "Richmond Cricket Ground",
      team1Logo: richLogo,
      team2Logo: mahiLogo,
    },
    {
      date: "09/19/2024",
      time: "8:30 A.M.",
      team1: "RICH",
      team2: "MAHI",
      venue: "Richmond Cricket Ground",
      team1Logo: richLogo,
      team2Logo: mahiLogo,
    },
    {
      date: "09/19/2024",
      time: "8:30 A.M.",
      team1: "RICH",
      team2: "MAHI",
      venue: "Richmond Cricket Ground",
      team1Logo: richLogo,
      team2Logo: mahiLogo,
    },
    {
        date: "09/19/2024",
        time: "8:30 A.M.",
        team1: "RICH",
        team2: "MAHI",
        venue: "Richmond Cricket Ground",
        team1Logo: richLogo,
        team2Logo: mahiLogo,
      },
      {
        date: "09/19/2024",
        time: "8:30 A.M.",
        team1: "RICH",
        team2: "MAHI",
        venue: "Richmond Cricket Ground",
        team1Logo: richLogo,
        team2Logo: mahiLogo,
      },
      {
        date: "09/19/2024",
        time: "8:30 A.M.",
        team1: "RICH",
        team2: "MAHI",
        venue: "Richmond Cricket Ground",
        team1Logo: richLogo,
        team2Logo: mahiLogo,
      },
    // Add more matches as needed
  ];

  return (
    <div className="w-full p-4 md:p-6">
      

      

      <div className="relative w-full text-center">
      {/* Background text */}
    
      <h1 className="text-[4rem] md:text-[5rem] lg:text-[8rem] font-bold text-outline">MATCHES</h1>
      {/* Foreground text */}
      <h4 className="absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-6xl font-bold text-blue-900 uppercase">
        Upcoming
      </h4>
    </div>




      {/* Table */}
      <div className="overflow-x-auto bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
        <table className="min-w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
            <tr>
              <th className="px-2 md:px-4 py-2 text-left">Date</th>
              <th className="px-2 md:px-4 py-2 text-left">Time</th>
              <th className="px-2 md:px-4 py-2 text-left">Match</th>
              <th className="px-2 md:px-4 py-2 text-left">Venue</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {matches.map((match, index) => (
              <tr 
                key={index} 
                className={`border-t border-gray-300 ${index === 0 ? 'bg-blue-200 text-lg py-6' : 'bg-blue-50'}`}
                style={index === 0 ? { fontSize: "1.25rem", height: "80px" } : {}}
              >
                <td className={`px-2 md:px-4 py-4 ${index === 0 ? 'font-semibold' : ''}`}>
                  {match.date}
                </td>
                <td className={`px-2 md:px-4 py-4 ${index === 0 ? 'font-semibold' : ''}`}>
                  {match.time}
                </td>
                <td className={`px-2 md:px-4 py-4 flex items-center ${index === 0 ? 'font-semibold' : ''}`}>
                  <img
                    src={match.team1Logo}
                    alt={`${match.team1} logo`}
                    className={`w-6 h-6 mr-2 ${index === 0 ? 'w-10 h-10' : ''}`}
                  />
                  {match.team1}
                  <span className="mx-2">vs</span>
                  <img
                    src={match.team2Logo}
                    alt={`${match.team2} logo`}
                    className={`w-6 h-6 mr-2 ${index === 0 ? 'w-10 h-10' : ''}`}
                  />
                  {match.team2}
                </td>
                <td className={`px-2 md:px-4 py-4 ${index === 0 ? 'font-semibold' : ''}`}>
                  {match.venue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchTable;
