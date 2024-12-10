// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import MemberNavbar from '../components/MemberNavbar';
// import back from "../assets/images/flag.png";
// import flag from "../assets/images/backDrop.png";
// import image from "../assets/images/kusal.png";
// import Footer from '../components/Footer';
// //import { useAuth } from "../hooks/UseAuth";

// const PlayerProfile = () => {
//  // const { user } = useAuth();
//   const [playerProfile, setPlayerProfile] = useState(null);
//   const [playerStat, setPlayerStat] = useState(null);
//   const API_URL = process.env.REACT_APP_API_URL;
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const fetchData = async () => {
//     const playerData = await axios.get( `${API_URL}admin/players/${user.playerId}`);
//     setPlayerProfile(playerData.data);

//     const playerStat = await axios.get( `${API_URL}playerStats/all-stats/${user.playerId}`);
//     setPlayerStat(playerStat.data);
//     console.log("player stack", playerStat);
//   };

//   fetchData();

//   }, []);

//   const summarizeStats = (type) => {
//     if (!playerStat || !playerStat.length) {
//         return {
//             matches: 0,
//             innings: 0,
//             runs: 0,
//             highestScore: 0,
//             avg: 0,
//             sr: 0,
//             "100s": 0,
//             "50s": 0,
//             "4s": 0,
//             "6s": 0,
//             overs: 0,
//             wickets: 0,
//             runsConceded: 0,
//             bowlingAvg: 0,
//             economyRate: 0,
//             best: "0/0",
//             catches: 0,
//             stumps: 0,
//             runOuts: 0,
//         };
//     }

//     const filteredStats = playerStat.filter(
//         (stat) => stat.match.type === type
//     );

//     const summary = filteredStats.reduce(
//         (acc, stat) => {
//             acc.matches += 1; // Each stat is from a separate match
//             acc.innings += parseInt(stat.inning, 10) || 0;
//             acc.runs += stat.runs || 0;
//             acc.highestScore = Math.max(acc.highestScore, stat.runs);
//             acc.battingAvg = acc.innings > 0 ? (acc.runs / acc.innings).toFixed(2) : 0;
//             acc.sr = stat.balls > 0 ? ((stat.runs / stat.balls) * 100).toFixed(2) : 0; // Strike rate
//             acc["100s"] += stat.centuries || 0;
//             acc["50s"] += stat.fifties || 0;
//             acc["4s"] += stat.fours || 0;
//             acc["6s"] += stat.sixers || 0;
//             acc.overs += stat.overs || 0;
//             acc.wickets += stat.wickets || 0;
//             acc.runsConceded += stat.runsConceded || 0;
//             acc.catches += stat.catches || 0;
//             acc.stumps += stat.stumps || 0;
//             acc.runOuts += stat.runOuts || 0; 

//             // Calculate best bowling performance
//             if (stat.wickets > acc.bestWickets || 
//                 (stat.wickets === acc.bestWickets && stat.runsConceded < acc.bestRunsConceded)) {
//                 acc.bestWickets = stat.wickets;
//                 acc.bestRunsConceded = stat.runsConceded;
//             }

//             return acc;
//         },
//         {
//             matches: 0,
//             innings: 0,
//             runs: 0,
//             highestScore: 0,
//             avg: 0,
//             sr: 0,
//             overs: 0,
//             "100s": 0,
//             "50s": 0,
//             "4s": 0,
//             "6s": 0,
//             wickets: 0,
//             runsConceded: 0,
//             bowlingAvg: 0,
//             bestWickets: 0,
//             bestRunsConceded: Infinity,
//             economyRate: 0,
//             best: "0/0",
//             catches: 0,
//             stumps: 0,
//             runOuts: 0,
//         }
//     );

//     // Calculate economy rate
//     summary.economyRate = summary.overs > 0 ? (summary.runsConceded / summary.overs).toFixed(2) : 0;
//     // Calculate bowling average
//     summary.bowlingAvg = summary.wickets > 0 ? (summary.runsConceded / summary.wickets).toFixed(2) : 0;
//     // Set the best bowling performance
//     summary.best = `${summary.bestWickets}/${summary.bestRunsConceded !== Infinity ? summary.bestRunsConceded : 0}`;
    
//     return summary;
// };

//   const calculateAge = (dob) => {
//     console.log("dob:", dob);
//     const birthDate = new Date(dob); // Parses the YYYY-MM-DD format
//     const today = new Date();
//     const age = today.getFullYear() - birthDate.getFullYear();
//     const monthDifference = today.getMonth() - birthDate.getMonth();
  
//     // Adjust if the birthday hasn't occurred yet this year
//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//       return age - 1;
//     }
//     return age;
//   };

//   return (
//     <>
    
//     <div
//       className={`flex relative justify-center lg:p-10 p-5 lg:pt-28 pt-28 h-auto items-stretch min-h-screen text-white w-full`}
//       style={{
//         backgroundImage: `url(${flag})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <MemberNavbar />
//             {/* Player Details */}
//             <div
//               className="h-full w-full p-5 rounded-lg lg:px-20 bg-white shadow-md"
//               style={{
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
//                 border: "1px solid rgba(255, 255, 255, 0.3)",
//               }}
//             >
//               <h1 className="text-2xl self-start p-2 pt-0 text-[#480D35] font-bold">
//                 Player Profile
//               </h1>
//               <div
//                 className="flex justify-center items-center w-full rounded-xl h-36 px-10 mb-6"
//                 style={{
//                   backgroundImage:` url(${back})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div className="relative top-10 rounded-full w-full h-full flex items-center justify-center">
//                   <div className=" -top-5 -left-5 absolute flex flex-col ">
//                     <h1 className="lg:text-4xl font-bold">{playerProfile?.name}</h1>
//                     {playerProfile?.dateOfBirth && (
//                       <p className="lg:text-xl text-sm">{calculateAge(playerProfile.dateOfBirth)} years old</p>
//                     )}
//                   </div>
//                   <img
                    
//                     src={`http://rcc.dockyardsoftware.com/images/${
//                       playerProfile?.image ? playerProfile.image.split('/').pop() : 'default.jpg'
//                     }?cacheBust=${Date.now()}`}
//                     alt={playerProfile?.name || 'Player'}
//                     className="w-32 h-32 rounded-full object-cover border bg-white border-gray-300"
//                   />
//                 </div>
                
//               </div>
//               <div className="flex items-center pt-5 justify-center">
//               <div className="bg-gray-100 py-4 px-2 w-full lg:p-6 lg:w-2/3 self-center rounded-lg">
//                 <h2 className="text-xl font-bold mb-4 text-black text-center">
//                   Personal Information
//                 </h2>
//                 {/* Personal Info Table */}
//                 <div className="flex hover:overflow-x-auto overflow-x-hidden" >
//                 <table className="min-w-full bg-gray-100 text-gray-950 rounded-lg">
//                   <tbody>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Name:</td>
//                       <td className="py-2 px-5">{playerProfile?.name}</td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Date of Birth:</td>
//                       <td className="py-2 px-5">
//                         {playerProfile?.dateOfBirth}
//                       </td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Email:</td>
//                       <td className="py-2 px-5">{playerProfile?.email}</td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Contact No:</td>
//                       <td className="py-2 px-5">
//                         {playerProfile?.contactNo}
//                       </td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Batting Style:</td>
//                       <td className="py-2 px-5">{playerProfile?.battingStyle}</td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Bowling Style:</td>
//                       <td className="py-2 px-5">{playerProfile?.bowlingStyle}</td>
//                     </tr>
//                     <tr className="bg-white rounded-lg border-2">
//                       <td className="py-2 px-5 font-semibold">Role:</td>
//                       <td className="py-2 px-5">{playerProfile?.playerRole}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 </div>
//               </div>
//               </div>
//               {/* The statistics section will remain as is, assuming it doesn't depend on the selectedPlayer */}
//               <div className="mt-6 bg-gray-200 w-full lg:p-6 px-2 py-4 text-black rounded-lg shadow-md">
//                 <h2 className="text-xl font-bold mb-4 text-center">
//                   Player Statistics
//                 </h2>
//                 {/* Batting Stats */}
//                 <h3 className="text-md text-white bg-[#00175f] p-2 font-bold mb-3">
//                   Batting Stats
//                 </h3>
//                 {/* Assuming the data structure of selectedPlayer.stats */}
//                 <div className="flex hover:overflow-x-auto overflow-x-hidden" >
//                 <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Format
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Matches
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Innings
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Runs
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Highest Score
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Avg
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         SR
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         100s
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         50s
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         4s
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         6s
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {["Test", "ODI", "T20"].map((type) => {
//                       const summary = summarizeStats(type);
//                       return (
//                         <tr
//                           key={type}
//                           className="border-b border-gray-300"
//                         >
//                           <td className="py-2 px-5 text-center align-middle">
//                             {type}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.matches}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.innings}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.runs}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.highestScore}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.battingAvg}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.sr}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary["100s"]}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary["50s"]}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary["4s"]}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary["6s"]}
//                           </td>
//                         </tr>
//                       )})}
//                   </tbody>
//                 </table>
//               </div>

//               <h3 className="text-md font-bold w-full p-2 bg-[#00175f] text-white mb-3">Bowling Stats</h3>
//               <div className="flex hover:overflow-x-auto overflow-x-hidden" >
//                 <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg mb-6">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Format
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Innings
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Overs
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Matches
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Wickets
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Runs Conceded
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Best
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Avg
//                       </th>
//                       <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                         Economy Rate
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                   {["Test", "ODI", "T20"].map((type) => {
//                       const summary = summarizeStats(type);
//                       return (
//                         <tr
//                           key={type}
//                           className="border-b bg-white border-gray-300"
//                         >
//                           <td className="py-2 px-5 text-center align-middle">
//                             {type}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.innings}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.overs}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.matches}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.wickets}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.runsConceded}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.best}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.bowlingAvg}
//                           </td>
//                           <td className="py-2 px-5 text-center align-middle">
//                             {summary.economyRate}
//                           </td>
//                         </tr>
//                       )})}
//                   </tbody>
//                 </table>
//                 </div>

//                 <h3 className="text-md font-bold w-full bg-[#00175f] p-2 text-white mb-3">Fielding Stats</h3>
//                 <div className="flex hover:overflow-x-auto overflow-x-hidden" >
//                   <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           Format
//                         </th>
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           Matches
//                         </th>
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           Innings
//                         </th>
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           Catches
//                         </th>
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           Stumps
//                         </th>
//                         <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
//                           RunOuts
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                     {["Test", "ODI", "T20"].map((type) => {
//                         const summary = summarizeStats(type);
//                         return (
//                           <tr
//                             key={type}
//                             className="border-b bg-white border-gray-300"
//                           >
//                             <td className="py-2 px-5 text-center align-middle">
//                               {type}
//                             </td>
//                             <td className="py-2 px-5 text-center align-middle">
//                               {summary.matches}
//                             </td>
//                             <td className="py-2 px-5 text-center align-middle">
//                               {summary.innings}
//                             </td>
//                             <td className="py-2 px-5 text-center align-middle">
//                               {summary.catches}
//                             </td>
//                             <td className="py-2 px-5 text-center align-middle">
//                               {summary.stumps}
//                             </td>
//                             <td className="py-2 px-5 text-center align-middle">
//                               {summary.runOuts}
//                             </td>
//                           </tr>
//                         )})}
//                     </tbody>
//                   </table>
//                 </div>

//               </div>
             
//             </div>
           
//       </div>
//        <Footer />
//        </>
//   );
// };

// export default PlayerProfile;


import React, { useState, useEffect } from "react";
import axios from "axios";
import MemberNavbar from '../components/MemberNavbar';
import back from "../assets/images/flag.png";
import flag from "../assets/images/backDrop.png";
import image from "../assets/images/kusal.png";
import Footer from '../components/Footer';

const PlayerProfile = () => {
  const [playerProfile, setPlayerProfile] = useState(null);
  const [playerStat, setPlayerStat] = useState(null);
  const [filterUnder, setFilterUnder] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      const playerData = await axios.get(`${API_URL}admin/players/${user.playerId}`);
      setPlayerProfile(playerData.data);


    const playerStat = await axios.get( `${API_URL}playerStats/all-stats/${user.playerId}`);
    setPlayerStat(playerStat.data);
    console.log("player stats", playerStat);
    console.log("player profile", playerProfile);
  };

  fetchData();

  }, []);

    const summarizeStats = (type) => {

      if (!playerStat || !playerStat.length) {
        return {
          matches: 0,
          battingInnings: 0,
          bawlingInnings: 0,
          runs: 0,
          highestScore: 0,
          avg: 0,
          sr: 0,
          catches:0,
          stumps:0,
          runOuts:0,
          balls:0,
          "100s": 0,
          "50s": 0,
          "4s": 0,
          "6s": 0,
          overs:0,
          wickets:0,
          runsConceded:0,
          bawlingAvg:0,
          battingAvg:0,
          bestValue:Infinity,
          economyRate:0,
          bestWickets: 0,
          bestRunsConceded: Infinity,
          
        };
      }
      const filteredStats = playerStat.filter(
        (stat) => stat.match.type === type &&
        (filterUnder ? stat.match.under === filterUnder : true) &&
        (filterYear ? stat.match.year === parseInt(filterYear) : true)
      );


    const summary = filteredStats.reduce(
      (acc, stat) => {
        acc.matches += 1;

        acc.balls += stat.balls || 0;

        acc["100s"] += stat.centuries || 0;
        acc["50s"] += stat.fifties || 0;
        acc["4s"] += stat.fours || 0;
        acc["6s"] += stat.sixers || 0;
        acc.overs += stat.overs || 0;
        acc.wickets += stat.wickets || 0;
        acc.runsConceded += stat.runsConceded || 0;
        acc.catches += stat.catches || 0;
        acc.stumps += stat.stumps || 0;
        acc.runOuts += stat.runOuts || 0;

        acc.bawlingInnings += Number(stat.inning) || 0;
        acc.runs += stat.runs || 0;

        const excludedHowOuts = ["Not out", "Retired Hurt", "Did not bat"];
        if (!excludedHowOuts.includes(stat.howOut)) {
          acc.battingInnings += 1; // Increment batting innings count
        };
        acc.highestScore = Math.max(acc.highestScore, stat.runs) || 0;

        const currentAverage = stat.wickets > 0 ? stat.runsConceded / stat.wickets : Infinity;
        acc.bestValue = Math.min(acc.bestValue, currentAverage).toFixed(2); 
        
        acc.battingAvg =  acc.battingInnings > 0 ? (acc.runs / acc.battingInnings).toFixed(2) : 0;
        acc.sr = acc.balls > 0 ? (acc.runs / acc.balls).toFixed(2) : 0; // Simplified SR calculation
        acc.bawlingAvg = acc.wickets > 0 ? (acc.runsConceded / acc.wickets).toFixed(2) : 0;
        acc.economyRate = acc.overs > 0 ? (acc.runsConceded / acc.overs).toFixed(2) : 0;

        if (
          stat.wickets > acc.bestWickets ||
          (stat.wickets === acc.bestWickets && stat.runsConceded < acc.bestRunsConceded)
        ) {
          acc.bestWickets = stat.wickets;
          acc.bestRunsConceded = stat.runsConceded;
        }

        return acc;
      },
      {
        matches: 0,
        balls: 0,
        battingInnings: 0,
        bawlingInnings:0,
        runs: 0,
        highestScore: 0,
        avg: 0,
        sr: 0,

        overs:0,
        wickets:0,
        runsConceded:0,
        bawlingAvg:0,
        battingAvg:0,
        bestValue:Infinity,
        bestWickets: 0,
        bestRunsConceded: Infinity,
        economyRate:0,
        catches:0,
        stumps:0,
        runOuts:0,
        balls:0,

        "100s": 0,
        "50s": 0,
        "4s": 0,
        "6s": 0,



      }
    );

    summary.economyRate = summary.overs > 0 ? (summary.runsConceded / summary.overs).toFixed(2) : 0;
    summary.bowlingAvg = summary.wickets > 0 ? (summary.runsConceded / summary.wickets).toFixed(2) : 0;
    summary.best = `${summary.bestWickets}/${summary.bestRunsConceded !== Infinity ? summary.bestRunsConceded : 0}`;

    return summary;
  };

  const calculateAge = (dob) => {
        console.log("dob:", dob);
        const birthDate = new Date(dob); // Parses the YYYY-MM-DD format
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
      
        // Adjust if the birthday hasn't occurred yet this year
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
          return age - 1;
        }
        return age;
      };


      const resetFilters = () => {
        setFilterUnder("");
        setFilterYear("");
      };

 

  return (
    <>
      <div
        className="flex relative justify-center lg:p-10 p-5 lg:pt-28 pt-28 h-auto items-stretch min-h-screen text-black w-full"
        style={{
          backgroundImage: `url(${flag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MemberNavbar />
        
          {/* Batting, Bowling, and Fielding Stats Tables */}

            {/* Player Details */}
            <div
              className="h-full w-full p-5 rounded-lg lg:px-20 bg-white shadow-md"
              style={{
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
             {/* <h1 className="text-2xl self-start p-2 pt-0 text-[#480D35] font-bold">
                Player Profile
              </h1>*/} 
              <div
                className="flex justify-center items-center w-full rounded-xl h-36 px-10 mb-6"
                style={{
                  backgroundImage:` url(${back})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative top-10 rounded-full w-full h-full flex items-center justify-center">
                  <div className=" -top-5 -left-5 absolute flex flex-col ">
                    <h1 className="lg:text-4xl font-bold text-white">{playerProfile?.name}</h1>
                    {playerProfile?.dateOfBirth && (
                      <p className="lg:text-xl text-sm text-white">{calculateAge(playerProfile.dateOfBirth)} years old</p>
                    )}
                  </div>

                  {playerProfile && <img
                    src={`http://rcc.dockyardsoftware.com/images/${ playerProfile.image ? playerProfile.image.split('/').pop() : 'default.jpg'}`}
                    alt={playerProfile?.name}

                    className="w-32 h-32 rounded-full object-cover border bg-white border-gray-300"
                  />
                   }
                  
                </div>
                
              </div>
              <div className="flex items-center pt-5 justify-center">
              <div className="bg-gray-100 py-4 px-2 w-full lg:p-6 lg:w-2/3 self-center rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-black text-center">
                  Personal Information
                </h2>
                {/* Personal Info Table */}
                <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full bg-gray-100 text-gray-950 rounded-lg">
                  <tbody>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Name:</td>
                      <td className="py-2 px-5">{playerProfile?.name}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Date of Birth:</td>
                      <td className="py-2 px-5">
                        {playerProfile?.dateOfBirth}
                      </td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Email:</td>
                      <td className="py-2 px-5">{playerProfile?.email}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Contact No:</td>
                      <td className="py-2 px-5">
                        {playerProfile?.contactNo}
                      </td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Batting Style:</td>
                      <td className="py-2 px-5">{playerProfile?.battingStyle}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Bowling Style:</td>
                      <td className="py-2 px-5">{playerProfile?.bowlingStyle}</td>
                    </tr>
                    <tr className="bg-white rounded-lg border-2">
                      <td className="py-2 px-5 font-semibold">Role:</td>
                      <td className="py-2 px-5">{playerProfile?.playerRole}</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
              </div>
              {/* The statistics section will remain as is, assuming it doesn't depend on the selectedPlayer */}
              <div className="mt-6 bg-gray-200 w-full lg:p-6 px-2 py-4 text-black rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Player Statistics
                </h2>
                <div className="flex flex-col lg:flex-row lg:justify-center gap-4 mb-6 items-center">
                  <select
                    value={filterUnder}
                    onChange={(e) => setFilterUnder(e.target.value)}
                    className="px-4 py-2 border rounded-md w-full lg:w-auto"
                  >
                    <option value="">Select Under</option>
                    {[...new Set(playerStat?.map((stat) => stat.match.under))].map((under) => (
                      <option key={under} value={under}>
                        {under}
                      </option>
                    ))}
                  </select>
                  <select
                    value={filterYear}
                    onChange={(e) => setFilterYear(e.target.value)}
                    className="px-4 py-2 border rounded-md w-full lg:w-auto"
                  >
                    <option value="">Select Year</option>
                    {[...new Set(playerStat?.map((stat) => stat.match.year))].map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 bg-[#00175F] text-white rounded-md w-full lg:w-auto"
                  >
                    Reset
                  </button>
                </div>
                {/* Batting Stats */}
                <h3 className="text-md text-white bg-[#00175f] p-2 font-bold mb-3">
                  Batting Stats
                </h3>
                {/* Assuming the data structure of selectedPlayer.stats */}
                <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Format
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Matches
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Innings
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Runs
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Highest Score
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Avg
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        SR
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        100s
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        50s
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        4s
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        6s
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Test", "ODI", "T20"].map((type) => {
                      const summary = summarizeStats(type);
                      return (
                        <tr
                          key={type}
                          className="border-b border-gray-300"
                        >
                          <td className="py-2 px-5 text-center align-middle">
                            {type}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.matches}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.bawlingInnings}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.runs}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.highestScore}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.battingAvg}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.sr}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["100s"]}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["50s"]}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["4s"]}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary["6s"]}
                          </td>
                        </tr>
                      )})}
                  </tbody>
                </table>
              </div>

              <h3 className="text-md font-bold w-full p-2 bg-[#00175f] text-white mb-3">Bowling Stats</h3>
              <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Format
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Innings
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Overs
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Matches
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Wickets
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Runs Conceded
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Best
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Avg
                      </th>
                      <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                        Economy Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {["Test", "ODI", "T20"].map((type) => {
                      const summary = summarizeStats(type);
                      return (
                        <tr
                          key={type}
                          className="border-b bg-white border-gray-300"
                        >
                          <td className="py-2 px-5 text-center align-middle">
                            {type}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.bawlingInnings}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.overs}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.matches}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.wickets}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.runsConceded}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.best}
                          </td>
                          <td className="py-2 px-5 text-center align-middle">

                            {summary.bawlingAvg}

                          </td>
                          <td className="py-2 px-5 text-center align-middle">
                            {summary.economyRate}
                          </td>
                        </tr>
                      )})}
                  </tbody>
                </table>
                </div>

                <h3 className="text-md font-bold w-full bg-[#00175f] p-2 text-white mb-3">Fielding Stats</h3>
                <div className="flex hover:overflow-x-auto overflow-x-hidden" >
                  <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          Format
                        </th>
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          Matches
                        </th>
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          Innings
                        </th>
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          Catches
                        </th>
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          Stumps
                        </th>
                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                          RunOuts
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {["Test", "ODI", "T20"].map((type) => {
                        const summary = summarizeStats(type);
                        return (
                          <tr
                            key={type}
                            className="border-b bg-white border-gray-300"
                          >
                            <td className="py-2 px-5 text-center align-middle">
                              {type}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {summary.matches}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {summary.bawlingInnings}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {summary.catches}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {summary.stumps}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {summary.runOuts}
                            </td>
                          </tr>
                        )})}
                    </tbody>
                  </table>
                </div>

              </div>
             </div>
           
         
        </div>
      
      <Footer />
    </>
  );
};

export default PlayerProfile;
