import React, { useState, useEffect } from 'react';
import Navbar from '../components/MemberNavbar';
import backgroundImage from '../assets/images/flag.png';
import playerPlaceholderImage from '../assets/images/dana.jpeg'; // Placeholder image
import Footer from '../components/Footer';

const PlayerProfile = () => {
    const [players, setPlayers] = useState([]); // Stores list of players
    const [selectedPlayer, setSelectedPlayer] = useState(null); // Stores currently selected player
    const [playerStat, setPlayerStat] = useState([]); // Stores stats for the selected player
    const [showPlayerList, setShowPlayerList] = useState(false); // Toggle for mobile player list
    const API_URL = process.env.REACT_APP_API_URL;
    
    // Fetch all players from the API when the component mounts
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(`${API_URL}admin/players/all`);
                const data = await response.json();

                const under13Players = data.filter((player) =>
                    player.teamsUnder.includes("Under 19")
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
    }, []);
    // Fetch all players from the API when the component mounts
// useEffect(() => {
//     const fetchPlayers = async () => {
//         try {
//             const response = await fetch(`${API_URL}admin/players/all`);
//             const data = await response.json();

//             // Get the current year
//             const currentYear = new Date().getFullYear();

//             // Filter players who are part of "Under 13" in the current year
//             const under13Players = data.filter((player) =>
//                 player.teamDetails.some(
//                     (team) => team.under === "Under 13" && parseInt(team.year, 10) === currentYear
//                 )
//             );

//             setPlayers(under13Players);

//             // Set default selected player if data exists
//             if (under13Players.length > 0) {
//                 setSelectedPlayer(under13Players[0]); // Select first player by default
//             }
//         } catch (error) {
//             console.error('Error fetching player data:', error);
//         }
//     };

//     fetchPlayers();
// }, []);


    // Fetch player stats based on the selected player
    useEffect(() => {
        const fetchPlayerStats = async () => {
            if (selectedPlayer) {
                try {
                    const response = await fetch(`http://localhost:8080/api/playerStats/all-stats/${selectedPlayer.playerId}`);
                    const data = await response.json();
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

    if (!players.length) {
        return (
            <div className="bg-gray-400 min-h-screen text-white">
                <Navbar />
                <div className="max-w-screen pt-20 text-center">
                    <h1 className="text-4xl">Loading players...</h1>
                </div>
            </div>
        );
    }

    // Function to summarize player stats for display in the table
    // const summarizeStats = (type) => {
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
    //         };
    //     }

    //     const filteredStats = playerStat.filter(
    //         (stat) => stat.match.type === type
    //     );

    //     const summary = filteredStats.reduce(
    //         (acc, stat) => {
    //             acc.matches += 1; // Since each stat is from a separate match
    //             acc.innings += parseInt(stat.inning, 10) || 0;
    //             acc.runs += stat.runs || 0;
    //             acc.highestScore = Math.max(acc.highestScore, stat.runs);
    //             acc.battingAvg = acc.innings > 0 ? (acc.runs / acc.innings).toFixed(2) : 0;
    //             acc.sr = stat.balls > 0 ? ((stat.runs / stat.balls) * 100).toFixed(2) : 0; // Strike rate calculation
    //             acc["100s"] += stat.centuries || 0;
    //             acc["50s"] += stat.fifties || 0;
    //             acc["4s"] += stat.fours || 0;
    //             acc["6s"] += stat.sixers || 0;
    //             acc.overs += stat.overs || 0;
    //             acc.wickets += stat.wickets || 0;
    //             acc.runsConceded += stat.runsConceded || 0;
    //             acc.bowlingAvg = acc.wickets > 0 ? (acc.runsConceded / acc.wickets).toFixed(2) : 0;
    //             acc.economyRate = acc.runsConceded / acc.balls;
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
    //         }
    //     );

    //     return summary;
    // };
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
                <img
                    src={selectedPlayer?.image || playerPlaceholderImage}
                    alt={selectedPlayer?.name}
                    className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-[#4A0D34] object-cover"
                />
            </div>
            <div className="text-center ml-8 md:text-left">
                <h1 className="text-2xl md:text-5xl font-bold">{selectedPlayer?.name}</h1>
                <p className="text-gray-400 text-base md:text-3xl">
                                   Academy 19
                                </p>
            </div>
        </div>
    </div>
</div>


            
                <div className="flex gap-6 justify-center px-10 md:flex-row flex-col">
                    {/* Player List for desktop */}
                    <div className="md:flex hidden bg-gray-200 rounded-lg shadow-md" style={{ width: '350px', flexShrink: 0, maxHeight: '469px', flexDirection: 'column' }}>
                        {/* Fixed Heading */}
                        <div className="p-4 border-b text-black border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">Our Players</h2>
                        </div>
                        {/* Scrollable Player List */}
                        <div className="p-4 overflow-y-auto" style={{ flexGrow: 1, maxHeight: 'calc(500px - 64px)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <ul className="space-y-3 text-black" style={{ paddingRight: '10px' }}>
                                {players.map((player) => (
                                    <li key={player.playerId} className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${player.playerId === selectedPlayer?.playerId ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`} onClick={() => setSelectedPlayer(player)}>
                                        <img src={player.image || playerPlaceholderImage} alt={player.name} className="h-10 w-10 rounded-full mr-3 object-cover" />
                                        {player.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Player Details */}
                    {selectedPlayer && (
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
                                <h3 className="text-lg font-bold mb-4">Batting and Fielding Stats</h3>
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
                                <h3 className="text-lg font-bold mb-4">Bowling Stats</h3>
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
