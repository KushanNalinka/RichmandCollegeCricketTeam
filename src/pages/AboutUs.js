
// import Navbar from '../components/MemberNavbar';
// import topImage from '../assets/images/BG3.png'; // Your local background image
// import '../index.css'; // Make sure to include your main CSS
// import Footer from '../components/Footer';

// const AboutUs = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />
      

//       {/* Top Section */}
//       <div
//         className="bg-cover bg-center bg-fixed h-48 flex items-center justify-center"
//         style={{ backgroundImage: `url(${topImage})` }}
//       ></div>

//       {/* About Richmond School Cricket Team Section */}
//       <div className="max-w-7xl mx-auto p-8 flex flex-col lg:flex-row items-center lg:space-x-12">
//         {/* Image on the left */}
//         <div className="lg:w-1/2 mb-6 lg:mb-0">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Richmond_College_Main_Hall.jpg/2560px-Richmond_College_Main_Hall.jpg" // Richmond College main hall image
//             alt="Richmond School Main Hall"
//             className="w-full rounded-lg shadow-md"
//           />
//         </div>

//         {/* Text on the right */}
//         <div className="lg:w-1/2 lg:pl-10">
//           <h2 className="text-left text-m font-bold text-gray-800 fancy-font">ABOUT RICHMOND SCHOOL CRICKET TEAM</h2>
//           <p className="pt-serif-font text-base text-gray-600 mt-6">
//             The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
//             Our dedication to fostering both athletic and academic excellence is the cornerstone of our cricketing journey.
//             The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
//             Our dedication to fostering both athletic and academic excellence is the cornerstone of our cricketing journey.
//             The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
//             Our dedication to fostering both athletic and academic excellence is the cornerstone of our cricketing journey.
//           </p>
//         </div>
//       </div>

//       {/* Our Journey Section */}
//       <div className="bg-gray-100 p-8 flex flex-col lg:flex-row items-start">
//         <div className="lg:w-1/2 mb-6 lg:mb-0">
//           <h2 className="text-left text-m font-bold text-gray-800 fancy-font">OUR JOURNEY</h2>
//           <p className="pt-serif-font text-m text-gray-600 mt-4">
//             Richmond School Cricket has produced top players who have gone on to represent national teams, with numerous
//             victories in inter-school championships. Below are some of the key moments in our journey.
//           </p>
//           <ul className="list-disc list-inside pt-serif-font text-m text-gray-600 mt-4">
//             <li>Inter-School Championship 2015 - Winners</li>
//             <li>Produced 5 National-Level Players</li>
//             <li>Inter-School Championship 2020 - Finalists</li>
//           </ul>
//         </div>

//         <div className="lg:w-1/2 flex flex-col lg:flex-row lg:space-x-4 justify-center">
//           <img
//             src="https://www.srilankasports.com/wp-content/uploads/2018/04/z_p16-Richmond-678x381.jpg"
//             alt="Richmondites Overcome Peterites to Retain U-19 Cricket Title"
//             className="w-full lg:w-1/2 rounded-lg shadow-md"
//           />
//           <img
//             src="http://www.sundaytimes.lk/130217/uploads/DSC_0088-300x226.jpg"
//             alt="Richmond Wins Second Time in Three Years"
//             className="w-full lg:w-1/2 rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Vision and Mission Section */}
//       <div className="max-w-7xl mx-auto p-8 text-center">
//         <h2 className="text-m font-bold text-gray-800 fancy-font">OUR MISSION</h2>
//         <p className="pt-serif-font text-lg text-gray-600 mt-4">
//           Our mission is to promote teamwork, discipline, and leadership through cricket, while instilling the values of
//           sportsmanship in every player.
//         </p>

//         <h2 className="text-xl font-bold text-gray-800 fancy-font mt-8">OUR VISION</h2>
//         <p className="pt-serif-font text-lg text-gray-600 mt-4">
//           Our vision is to develop future cricket stars and foster a sense of community among players and supporters.
//         </p>
//       </div>

//       {/* Gallery Section */}
//       <div className="bg-gray-100 p-8">
//         <h2 className="text-left text-m font-bold text-gray-800 fancy-font">OUR JOURNEY IN PICTURES</h2>
//         <div className="flex flex-wrap justify-center gap-6 mt-8">
//           {/* Change flex direction to row for horizontal alignment */}
//           <div className="flex flex-row space-x-6">
//             <img
//               src="https://xtreamyouth.com/xy_articleimages/2018-03-16_the-richmond-parade-2018_thumb1.jpg"
//               alt="Richmond Parade 2018"
//               className="w-1/4 rounded-lg shadow-md"
//             />
//             <img
//               src="https://www.xtreamyouth.com/xy_articleimages/2016-10-30_richmond-walk-16_thumb1.jpg"
//               alt="Richmond Walk 2016"
//               className="w-1/4 rounded-lg shadow-md"
//             />
//             <img
//               src="http://www.sundaytimes.lk/190317/uploads/Sandun-Mendis-and-Vimud-Sapnaka-put-on-a-62-run-partnership-for-the-6th-wicket-save-Richmond-from-being-asked-to-follow-on-resume-their-innings-on-day-two.jpg"
//               alt="Richmond Cricket Match"
//               className="w-1/4 rounded-lg shadow-md"
//             />
//             <img
//               src="https://i0.wp.com/quadrangle.lk/wp-content/uploads/RichmondCollegeGalle/Richmond-College-Galle-0025.jpg"
//               alt="Richmond College Galle"
//               className="w-1/4 rounded-lg shadow-md"
//             />
//           </div>
//         </div>

//       </div>
      
//       <Footer/>
//     </div>
//   );
// };

// export default AboutUs;


// import React from 'react';
// import Navbar from '../components/MemberNavbar';
// import Footer from '../components/Footer';
// import '../index.css'; 
// import topImageDesktop from '../assets/images/IMG5.png'; // Desktop image
// import topImageMobile from '../assets/images/MB1.png'; // Mobile image

// // SVG for the star shape
// const StarLogo = () => (
//   <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 2L13.09 8.26L19 8.27L14.63 11.5L15.9 17.74L12 14.6L8.09 17.74L9.37 11.5L5 8.27L10.91 8.26L12 2Z" fill="white"/>
//   </svg>
// );

// const AboutUs = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Top Image Section */}
//       {/* Mobile Image (visible only on small screens) */}
//       <div
//         className="bg-cover bg-center bg-fixed h-[100vh] md:hidden flex items-center justify-center"
//         style={{
//           backgroundImage: `url(${topImageMobile})`,
//         }}
//       >
//       </div>

//       {/* Desktop Image (visible only on medium and larger screens) */}
//       <div
//         className="hidden md:bg-cover md:bg-center md:bg-fixed md:h-[75vh] lg:h-[100vh] md:flex md:items-center md:justify-center"
//         style={{
//           backgroundImage: `url(${topImageDesktop})`,
//         }}
//       >
//       </div>

//     {/* Top Section */}
// <div className="bg-gradient-to-b to-[#00175F] from-[#4A0D34] text-white py-20 md:py-40">
//   <div className="max-w-screen-lg w-full mx-auto text-center px-6 sm:px-4">
//     <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug sm:leading-tight">
//       About <span className="italic">Richmond School</span><br />
//       Cricket Team<br />
//       <span className="italic">Cricket Team has a long-standing history</span>
//     </h1>
//     <div className="flex justify-center mt-4 sm:mt-6">
//       <StarLogo />
//     </div>
//     <p className="text-xs sm:text-sm lg:text-base mt-4 sm:mt-6 max-w-2xl mx-auto">
//       The Richmond School Cricket Team has a long-standing history of nurturing young talent and building champions.
//     </p>
//   </div>
// </div>


//     {/* New Heading Section */}
// <div className="bg-[#F9F9F7] py-10 sm:py-12 md:py-16 text-center">
//   <p className="text-gray-500 text-base sm:text-lg mb-2 sm:mb-4">
//     The Vision and Mission
//   </p>
//   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
//     The Richmond School <span> Cricket Team </span><br />
//     <span className="italic">The Richmond School Cricket Team</span>
//   </h2>
// </div>

//       {/* Benefits Section */}
//       <div className="bg-light-gray py-20">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//   <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
//     <h3 className="text-xl sm:text-2xl font-bold mb-4">The Richmond School Cricket Team</h3>
//     <p className="text-sm sm:text-base flex-grow">
//       The Richmond School Cricket Team has a long-standing history...
//     </p>
//   </div>
//   <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
//     <h3 className="text-xl sm:text-2xl font-bold mb-4">The Richmond School Cricket Team</h3>
//     <p className="text-sm sm:text-base flex-grow">
//       The Richmond School Cricket Team has a long-standing history...
//     </p>
//   </div>
//   <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
//     <h3 className="text-xl sm:text-2xl font-bold mb-4">The Richmond School Cricket Team</h3>
//     <p className="text-sm sm:text-base flex-grow">
//       The Richmond School Cricket Team has a long-standing history...
//     </p>
//   </div>
// </div>


//       {/* Footer */}
//       <Footer />
//     </div>
//     </div>
//   );
// };

// export default AboutUs;

// import React from 'react';
// import Navbar from '../components/MemberNavbar';
// import Footer from '../components/Footer';
// import '../index.css';
// import topImageDesktop from '../assets/images/IMG5.png'; // Desktop image
// import topImageMobile from '../assets/images/MB1.png'; // Mobile image
// // SVG for the star shape
// const StarLogo = () => (
//   <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 2L13.09 8.26L19 8.27L14.63 11.5L15.9 17.74L12 14.6L8.09 17.74L9.37 11.5L5 8.27L10.91 8.26L12 2Z" fill="white"/>
//   </svg>
// );
// const AboutUs = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />
//       {/* Top Image Section */}
//       {/* Mobile Image (visible only on small screens) */}
//       <div
//         className="bg-cover bg-center bg-fixed h-[100vh] md:hidden flex items-center justify-center"
//         style={{
//           backgroundImage: `url(${topImageMobile})`,
//         }}
//       >
//       </div>
//       {/* Desktop Image (visible only on medium and larger screens) */}
//       <div
//         className="hidden md:bg-cover md:bg-center md:bg-fixed md:h-[75vh] lg:h-[100vh] md:flex md:items-center md:justify-center"
//         style={{
//           backgroundImage: `url(${topImageDesktop})`,
//         }}
//       >
//       </div>
//     {/* Top Section */}
// <div className="bg-gradient-to-b to-[#00175F] from-[#4A0D34] text-white py-20 md:py-40">
//   <div className="max-w-screen-lg w-full mx-auto text-center px-6 sm:px-4">
//     <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug sm:leading-tight">
//     A Legacy   <span className="italic">of Excellence</span><br />

//       <span className="italic">The Proud History of Richmond College Cricket</span>
//     </h1>
//     <div className="flex justify-center mt-4 sm:mt-6">
//       <StarLogo />
//     </div>
//     <p className="text-xs sm:text-sm lg:text-base mt-4 sm:mt-6 max-w-2xl mx-auto">
//     For over a century, Richmond College has cultivated a deep passion for cricket, building a heritage of remarkable achievements, spirited rivalries, and celebrated players who have left an indelible mark on Sri Lankan cricket.
//     </p>
//   </div>
// </div>
//     {/* New Heading Section */}
// <div className="bg-[#F9F9F7] py-10 sm:py-12 md:py-16 text-center">
//   <p className="text-gray-500 text-base sm:text-lg mb-2 sm:mb-4">
//     The Vision and Mission
//   </p>
//   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C]">
//   To nurture a legacy of cricketing excellence at Richmond College,  <span>inspiring generations of sportsmanship, integrity, </span><br />
//     <span className="italic"> and leadership on and off the field</span>
//   </h2>
// </div>
//       {/* Benefits Section */}
//       <div className="bg-light-gray py-20">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//   <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
//     <h3 className="text-xl sm:text-2xl font-bold mb-4">Founding Years and First Victories</h3>
//     <p className="text-sm sm:text-base flex-grow">
//     Richmond College cricket began in 1888, with the first recorded match against All Saints’ College.
//      By 1899, Richmond achieved its first victory, and the game quickly became integral to school life.
//       Early match logs reveal memorable encounters, such as the celebrated win over Wesley College in 1901, when camaraderie and competitive spirit took root.

//        This period also saw the establishment of the Richmond–Mahinda rivalry in 1905, a fixture now affectionately known as the “Lovers' Quarrel.”
// h
//        These formative years were marked by Richmond’s passion for cricket and the development of match traditions that continue today.
//     </p>
//   </div>
//   <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
//     <h3 className="text-xl sm:text-2xl font-bold mb-4">The Development of Tradition and Rivalries</h3>
//     <p className="text-sm sm:text-base flex-grow">
//     Over the decades, Richmond College cricket matches became cornerstone events.

//      The annual Richmond–Mahinda match became Southern Sri Lanka’s biggest sporting event, evolving from one-day games to full-day fixtures, eventually transitioning to two-day games in 1930. Similarly, the Richmond–Wesley series, established in 1901, became formalized with the E.R. de Silva Trophy in 1973.
//      These rivalries grew in popularity, drawing crowds and capturing the college spirit, and have endured to this day as essential annual highlights.

//     </p>
//   </div>
//   <div className="bg-[#00175F] text-white p-6 sm:p-8 rounded-[30px] sm:rounded-[50px] shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col">
//     <h3 className="text-xl sm:text-2xl font-bold mb-4">Notable Figures and Legacy</h3>
//     <p className="text-sm sm:text-base flex-grow">
//     Richmond College has produced influential cricketers who have left their mark on the sport both locally and nationally.
//      Pioneers like E.M. Karunaratne and P.S. Thuduwewatta, known for his record 100-wicket season, as well as R.M.M. De Silva, who played for All Ceylon, laid a foundation of excellence.
//       Generations of Richmond alumni have gone on to represent regional and national teams, contributing to Sri Lanka’s cricket heritage.
//        Today, Richmond College cricket remains a proud legacy, fostering talent and a deep love for the game among its students.

//     </p>
//   </div>
// </div>
//       {/* Footer */}
//       <Footer />
//     </div>
//     </div>
//   );
// };
// export default AboutUs;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/MemberNavbar';
import backgroundImage from '../assets/images/flag.png';
import playerPlaceholderImage from '../assets/images/defaultPlayer.jpg'; // Placeholder image
import Footer from '../components/Footer';


const PlayerProfile = () => {
    const [players, setPlayers] = useState([]); // Stores list of players
    const [selectedPlayer, setSelectedPlayer] = useState(null); // Stores currently selected player
    const [playerStat, setPlayerStat] = useState([]); // Stores stats for the selected player
    const [showPlayerList, setShowPlayerList] = useState(false); // Toggle for mobile player list
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year
    const API_URL = process.env.REACT_APP_API_URL;
  
    // Fetch all players from the API when the component mounts or selectedYear changes
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(`${API_URL}admin/players/all`);
                const data = await response.json();

                // Filter players who are part of "Under 13" in the selected year
                const under13Players = data.filter((player) =>
                    player.teamDetails &&
                    player.teamDetails.some(
                        (team) => team.under === "Under 15" && parseInt(team.year, 10) === selectedYear
                    )
                );

                setPlayers(under13Players);

                // Set default selected player if data exists
                if (under13Players.length > 0) {
                    setSelectedPlayer(under13Players[0]); // Select first player by default
                }
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        };

        fetchPlayers();
    }, [selectedYear]);

    
   
    useEffect(() => {
        const fetchPlayerStats = async () => {
            if (selectedPlayer) {
                try {

                    const response = await fetch(`${API_URL}playerStats/all-stats/${selectedPlayer.playerId}`);

                    const data = await response.json();
                    console.log('Fetched player stats:', data); // Log the fetched response data
                    setPlayerStat(data); // No need to filter if all stats are relevant
                } catch (error) {
                    console.error('Error fetching player stats:', error);
                }
            }
        };
    
      

        // Fetch stats only if a player is selected
        if (selectedPlayer) {
            fetchPlayerStats();
        }
    }, [selectedPlayer]);

    // Function to handle year selection change
    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value, 10));
    };

    // Function to generate year options for the dropdown (e.g., last 10 years)
    const getYearOptions = () => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: 10 }, (_, i) => currentYear - i);
    };



   
    // Function to summarize player stats for display in the table
const summarizeStats = (type) => {
    if (!playerStat || !playerStat.length) {
        return {
            matches: 0,
            innings: 0,
            runs: 0,
            highestScore: 0,
            avg: 0,
            sr: 0,
            "100s": 0,
            "50s": 0,
            "4s": 0,
            "6s": 0,
            overs: 0,
            wickets: 0,
            runsConceded: 0,
            bowlingAvg: 0,
            economyRate: 0,
            best: "0/0",
            catches: 0,
            stumps: 0,
            runOuts: 0,
        };
    }

    const filteredStats = playerStat.filter(
        (stat) => stat.match.type === type
    );

    const summary = filteredStats.reduce(
        (acc, stat) => {
            acc.matches += 1; // Each stat is from a separate match
            acc.innings += parseInt(stat.inning, 10) || 0;
            acc.runs += stat.runs || 0;
            acc.highestScore = Math.max(acc.highestScore, stat.runs);
            acc.battingAvg = acc.innings > 0 ? (acc.runs / acc.innings).toFixed(2) : 0;
            acc.sr = stat.balls > 0 ? ((stat.runs / stat.balls) * 100).toFixed(2) : 0; // Strike rate
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

            // Calculate best bowling performance
            if (stat.wickets > acc.bestWickets || 
                (stat.wickets === acc.bestWickets && stat.runsConceded < acc.bestRunsConceded)) {
                acc.bestWickets = stat.wickets;
                acc.bestRunsConceded = stat.runsConceded;
            }

            return acc;
        },
        {
            matches: 0,
            innings: 0,
            runs: 0,
            highestScore: 0,
            avg: 0,
            sr: 0,
            overs: 0,
            "100s": 0,
            "50s": 0,
            "4s": 0,
            "6s": 0,
            wickets: 0,
            runsConceded: 0,
            bowlingAvg: 0,
            bestWickets: 0,
            bestRunsConceded: Infinity,
            economyRate: 0,
            best: "0/0",
            catches: 0,
            stumps: 0,
            runOuts: 0,
        }
    );

    // Calculate economy rate
    summary.economyRate = summary.overs > 0 ? (summary.runsConceded / summary.overs).toFixed(2) : 0;
    // Calculate bowling average
    summary.bowlingAvg = summary.wickets > 0 ? (summary.runsConceded / summary.wickets).toFixed(2) : 0;
    // Set the best bowling performance
    summary.best = `${summary.bestWickets}/${summary.bestRunsConceded !== Infinity ? summary.bestRunsConceded : 0}`;
    
    return summary;
};



    return (
        <div className="bg-gray-400 min-h-screen text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="max-w-screen pt-20">
                {/* Mobile Player List Toggle - comes before Header Section */}
                {/* Mobile Player List Toggle - only visible on mobile screens */}
<div className="md:hidden top-20 left-0 right-0 bg-gray-200 p-4 rounded-lg shadow-md z-10"> {/* Use md:hidden to hide on larger screens */}
    <button 
        onClick={() => setShowPlayerList(!showPlayerList)} 
        className="text-black font-bold flex justify-between items-center w-full"
    >
        Our Players
        <span>{showPlayerList ? '-' : '+'}</span>
    </button>
    {showPlayerList && (
        <div className="mt-4">
            <ul className="space-y-3 text-black">
                {players.map((player) => (
                    <li 
                        key={player.playerId} 
                        className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${player.playerId === selectedPlayer?.playerId ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`} 
                        onClick={() => { setSelectedPlayer(player); setShowPlayerList(false); }} // Close list when a player is selected
                    >
                        <img src={player.image || playerPlaceholderImage} alt={player.name} className="h-10 w-10 rounded-full mr-3 object-cover" />
                        {player.name}
                    </li>
                ))}
            </ul>
        </div>
    )}
</div>

                

                <div className="justify-center w-full px-4 md:px-10">
    <div className="relative bg-[#000000] rounded-lg shadow-md overflow-hidden mt-4 mb-8">
        <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-48 object-cover opacity-75"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start px-4 md:px-20 py-6 space-y-4 md:space-y-0">
            {/* Profile Image Container */}
            <div className="relative flex-shrink-0 mb-4 md:mb-0">
                {players.length > 0 ? (<img
                    src={selectedPlayer?.image || playerPlaceholderImage}
                    alt={selectedPlayer?.name}
                    className="h-24 w-24 md:h-40 md:w-40 rounded-full border-4 border-[#4A0D34] object-cover mt-0"
                />) : (<img
                    src={ playerPlaceholderImage}
                    alt="No image Available"
                    className="h-24 w-24 md:h-40 md:w-40 rounded-full border-4 border-[#4A0D34] object-cover"
                />)}
            </div>
            <div className="text-center md:text-left md:ml-8">
              
                <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-4"> {players.length > 0 ? (
        <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-4">{selectedPlayer.name}</h1>
    ) :  (
            <h1 className="text-xl md:text-5xl font-bold mt-2 md:mt-4">No Player Available</h1>
        
    )}</h1>
                <p className="text-gray-400 text-sm md:text-3xl mt-1 md:mt-2">
                Richmond Team Under 15 Year {selectedYear}
                                </p>
            </div>
               {/* Year Dropdown */}
               <div className="absolute top-4 right-4 md:top-8 md:right-10">
                <p className="text-sm md:text-base"> Select the Year</p>
                            <select
                                value={selectedYear}
                                onChange={handleYearChange}
                                className="bg-gray-200 text-gray-900 font-semibold py-2 px-4 md:py-3 md:px-8 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm md:text-base mt-1"
                            >
                                {getYearOptions().map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
        </div>
    </div>
</div>


            
                <div className="flex gap-6 justify-center px-10 md:flex-row flex-col">
                    {/* Player List for desktop */}
                    <div className="md:flex hidden bg-gray-200 rounded-lg shadow-md" style={{ width: '350px', flexShrink: 0, maxHeight: '469px', flexDirection: 'column' }}>
                        {/* Fixed Heading */}
                        <div className="p-4 border-b text-black border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 text-center">Our Players</h2>
                        </div>
                        {/* Scrollable Player List */}
                        <div className="p-4 overflow-y-auto" style={{ flexGrow: 1, maxHeight: 'calc(500px - 64px)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <p>
    {!players.length ? (
        <div className="max-w-screen pt-1  text-center text-red-950">
            <h1 className="text-2xl">No players for Richmond Team Under 15 {selectedYear}</h1>
        </div>
    ) : null}
</p>
                            <ul className="space-y-3 text-black" style={{ paddingRight: '10px' }}>
                                {players.map((player) => (
                                    <li key={player.playerId} className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white ${player.playerId === selectedPlayer?.playerId ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`} onClick={() => setSelectedPlayer(player)}>
                                        <img src={player.image || playerPlaceholderImage} alt={player.name} className="h-10 w-10 rounded-full mr-3 object-cover" />
                                        {player.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Player Details */}
                    {players.length > 0 && selectedPlayer && (
                        <div className="flex-grow text-gray-700 bg-gray-200 p-6 rounded-lg shadow-md ml-18">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4 text-center">Personal Information</h2>
                                {/* Personal Info Table (responsive for mobile) */}
                                <div className="hover:overflow-x-auto overflow-x-hidden">
                                    <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6 table-auto">
                                        <tbody>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Name:</td>
                                                <td className="py-2 px-5">{selectedPlayer.name}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Date of Birth:</td>
                                                <td className="py-2 px-5">{selectedPlayer.dateOfBirth}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Email:</td>
                                                <td className="py-2 px-5">{selectedPlayer.email}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Contact No:</td>
                                                <td className="py-2 px-5">{selectedPlayer.contactNo}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Batting Style:</td>
                                                <td className="py-2 px-5">{selectedPlayer.battingStyle}</td>
                                            </tr>
                                            <tr className="border-b border-gray-300">
                                                <td className="py-2 px-5 font-semibold text-gray-900">Bowling Style:</td>
                                                <td className="py-2 px-5">{selectedPlayer.bowlingStyle}</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-5 font-semibold text-gray-900">Role:</td>
                                                <td className="py-2 px-5">{selectedPlayer.playerRole}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md text-[black]">
                                <h2 className="text-xl font-bold mb-4 text-center text-[black]">Player Statistics</h2>
                                {/* Batting Stats Table (responsive and elegant for mobile) */}
                                <h3 className="text-lg font-bold mb-4 bg-[#00175F] text-white p-2">Batting and Fielding Stats</h3>
                                <div className="hover:overflow-x-auto overflow-x-hidden">
                                    <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6 table-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-5 text-center align-middle">Format</th>
                                                <th className="py-2 px-5 text-center align-middle">Matches</th>
                                                <th className="py-2 px-5 text-center align-middle">Innings</th>
                                                <th className="py-2 px-5 text-center align-middle">Runs</th>
                                                <th className="py-2 px-5 text-center align-middle">Highest Score</th>
                                                <th className="py-2 px-5 text-center align-middle">Avg</th>
                                                <th className="py-2 px-5 text-center align-middle">SR</th>
                                                <th className="py-2 px-5 text-center align-middle">100s</th>
                                                <th className="py-2 px-5 text-center align-middle">50s</th>
                                                <th className="py-2 px-5 text-center align-middle">4s</th>
                                                <th className="py-2 px-5 text-center align-middle">6s</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {["Test", "ODI", "T20"].map((type) => {
                                                const summary = summarizeStats(type);
                                                return (
                                                    <tr key={type} className="border-b border-gray-300">
                                                        <td className="py-2 px-5 text-center align-middle">{type}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.innings}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.runs}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.highestScore}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.battingAvg}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.sr}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary["100s"]}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary["50s"]}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary["4s"]}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary["6s"]}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Bowling Stats Table (responsive and elegant for mobile) */}
                                <h3 className="text-lg font-bold mb-4 bg-[#00175F] text-white p-2">Bowling Stats</h3>
                                <div className="hover:overflow-x-auto overflow-x-hidden">
                                    <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg table-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-5 text-center align-middle">Format</th>
                                                <th className="py-2 px-5 text-center align-middle">Inns</th>
                                                <th className="py-2 px-5 text-center align-middle">Overs</th>
                                                <th className="py-2 px-5 text-center align-middle">Matches</th>
                                                <th className="py-2 px-5 text-center align-middle">Wickets</th>
                                                <th className="py-2 px-5 text-center align-middle">Runs Conceded</th>
                                                <th className="py-2 px-5 text-center align-middle">Best</th>
                                                <th className="py-2 px-5 text-center align-middle">Avg</th>
                                                <th className="py-2 px-5 text-center align-middle">Economy Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {["Test", "ODI", "T20"].map((type) => {
                                                const summary = summarizeStats(type);
                                                return (
                                                    <tr key={type} className="border-b bg-white border-gray-300">
                                                        <td className="py-2 px-5 text-center align-middle">{type}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.innings}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.overs}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.wickets}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.runsConceded}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.best}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.bowlingAvg}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.economyRate}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>


                                 {/* Fielding Stats */}

                                 <br/>
                                 <h3 className="text-lg font-bold mb-4 bg-[#00175F] text-white p-2">Fielding Stats</h3>

                                <div className="hover:overflow-x-auto overflow-x-hidden">
                                    <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6 table-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-5 text-center align-middle">Format</th>
                                                <th className="py-2 px-5 text-center align-middle">Matches</th>
                                                <th className="py-2 px-5 text-center align-middle">Innings</th>
                                                <th className="py-2 px-5 text-center align-middle">Catches</th>
                                                <th className="py-2 px-5 text-center align-middle">Stumps</th>
                                                <th className="py-2 px-5 text-center align-middle">RunOuts</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {["Test", "ODI", "T20"].map((type) => {
                                                const summary = summarizeStats(type);
                                                return (
                                                    <tr key={type} className="border-b border-gray-300">
                                                        <td className="py-2 px-5 text-center align-middle">{type}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.matches}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.innings}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.catches}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.stumps}</td>
                                                        <td className="py-2 px-5 text-center align-middle">{summary.runOuts}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};




export default PlayerProfile;

