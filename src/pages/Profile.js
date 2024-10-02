
import React, { useState } from 'react';
import Navbar from '../components/HomeNavbar';
import backgroundImage from '../assets/images/flag.png';
import playersData from './PlayersData';

const PlayerProfile = () => {
    // Sort players alphabetically by fullName
    const sortedPlayers = [...playersData].sort((a, b) => a.fullName.localeCompare(b.fullName));
    const [selectedPlayer, setSelectedPlayer] = useState(sortedPlayers[0]);

    return (
        <div className="bg-gray-50 min-h-screen text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="max-w-screen pt-20">
                {/* Header Section */}
                <div className="justify-center w-full px-10">
                    <div className="relative bg-[#000000] rounded-lg shadow-md overflow-hidden mb-8 lef-20" >
                        <img
                            src={backgroundImage}
                            alt="Background"
                            className="w-full h-48 object-cover opacity-75"
                        />
                        <div className="absolute inset-0 flex items-center left-20 px-20 py-6">
                            {/* Profile Image Container */}
                            <div className="relative flex-shrink-0">
                                <img
                                    src={selectedPlayer.imageUrl}
                                    alt={selectedPlayer.fullName}
                                    className="h-40 w-40 rounded-full border-4 border-[#4A0D34] object-cover"
                                />
                            </div>
                            <div className="ml-8">
                                <h1 className="text-5xl font-bold">{selectedPlayer.fullName}</h1>
                                <p className="text-gray-400 text-xl">{selectedPlayer.careerStart} - {selectedPlayer.careerEnd || 'Present'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-6 justify-center px-10">
                    {/* Player List */}
                    <div 
                        className="bg-gray-200 rounded-lg shadow-md" 
                        style={{ 
                            width: '350px', 
                            flexShrink: 0, 
                            marginTop: '-0px',  
                            maxHeight: '469px',  
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Fixed Heading */}
                        <div className="p-4 border-b text-black border-gray-100">
                            <h2 className="text-xl font-bold text-gray-200">Our Players</h2>
                        </div>

                        {/* Scrollable Player List */}
                        <div 
                            className="p-4 overflow-y-auto"
                            style={{
                                flexGrow: 1,
                                maxHeight: 'calc(500px - 64px)', 
                                scrollbarWidth: 'none',  
                                msOverflowStyle: 'none',  
                            }}
                        >
                            <ul className="space-y-3 text-black" style={{ paddingRight: '10px' }}>  
                                {sortedPlayers.map((player) => (
                                    <li
                                        key={player.id}
                                        className={`cursor-pointer flex items-center p-3 rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 ${player.id === selectedPlayer.id ? 'bg-gray-100 font-bold' : 'bg-gray-100'}`}
                                        onClick={() => setSelectedPlayer(player)}
                                    >
                                        <img
                                            src={player.imageUrl}
                                            alt={player.fullName}
                                            className="h-10 w-10 rounded-full mr-3 object-cover"
                                        />
                                        {player.fullName}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Player Details */}
                    <div className="flex-grow text-gray-700 bg-gray-200 p-6 rounded-lg shadow-md ml-18">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-xl font-bold mb-4 text-center">Personal Information</h2>
                            {/* Personal Info Table */}
                            <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6">
                                <tbody>
                                    <tr className="border-b border-gray-300">
                                        <td className="py-2 px-5 font-semibold text-gray-900">Name:</td>
                                        <td className="py-2 px-5">{selectedPlayer.fullName}</td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="py-2 px-5 font-semibold text-gray-900">Date of Birth:</td>
                                        <td className="py-2 px-5">{selectedPlayer.birthDate}</td>
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
                                        <td className="py-2 px-5">{selectedPlayer.playingRole}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md text-[black]">
                            <h2 className="text-xl font-bold mb-4 text-center text-[black]">Player Statistics</h2>

                            {/* Batting Stats */}
                            <h3 className="text-lg font-bold mb-4">Batting and Fielding Stats</h3>
                            <table className="min-w-full bg-white border-gray-300 rounded-lg mb-6">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Format</th>
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Matches</th>
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Innings</th>
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Runs</th>
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Highest Score</th>
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Avg</th>
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">SR</th>
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">100s</th>
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">50s</th>
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">4s</th>
                                        <th className="py-2 px-5 text-center align-middle whitespace-nowrap">6s</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedPlayer.stats.map((stat) => (
                                        <tr key={stat.format} className="border-b border-gray-300">
                                            <td className="py-2 px-5 text-center align-middle">{stat.format}</td>
                                            <td className="py-2 px-5 text-center align-middle">{stat.matches}</td>
                                            <td className="py-2 px-5 text-center align-middle">{stat.innings}</td>
                                            <td className="py-2 px-5 text-center align-middle">{stat.runs}</td>
                                            <td className="py-2 px-5 text-center align-middle">{stat.hs}</td>
                                            <td className="py-2 px-5 text-center align-middle">{stat.avg}</td>
                                            <td className="py-2 px-5 text-center align-middle">{stat.sr}</td>
                                            <td className="py-2 px-5 text-center align-middle">{stat['100s']}</td>
                                            <td className="py-2 px-5 text-center align-middle">{stat['50s']}</td>
                                            <td className="py-2 px-5 text-center align-middle">{stat['4s']}</td>
                                            <td className="py-2 px-5 text-center align-middle">{stat['6s']}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                             {/* Bowling Stats */}
        <h3 className="text-lg font-bold mb-4">Bowling Stats</h3>
        <table className="min-w-full bg-white  border-gray-300 rounded-lg">
            <thead>
                <tr className="bg-gray-200">
                    <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Format</th>
                    <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Inns</th>
                    <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Overs</th>
                    <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Matches</th>
                    <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Wickets</th>
                    <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Runs Conceded</th>
                    <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Best</th>
                    <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Avg</th>
                    <th className="py-2 px-5 text-center align-middle whitespace-nowrap">Economy Rate</th>
                </tr>
            </thead>
            <tbody>
                {selectedPlayer.bowlingStats.map((stat) => (
                    <tr key={stat.format} className="border-b border-gray-300">
                        <td className="py-2 px-5 text-center align-middle">{stat.format}</td>
                        <td className="py-2 px-5 text-center align-middle">{stat.innings}</td>
                        <td className="py-2 px-5 text-center align-middle">{stat.overs}</td>
                        <td className="py-2 px-5 text-center align-middle">{stat.matches}</td>
                        <td className="py-2 px-5 text-center align-middle">{stat.wickets}</td>
                        <td className="py-2 px-5 text-center align-middle">{stat.runsConceded}</td>
                        <td className="py-2 px-5 text-center align-middle">{stat.best}</td>
                        <td className="py-2 px-5 text-center align-middle">{stat.average}</td>
                        <td className="py-2 px-5 text-center align-middle">{stat.economyRate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerProfile;
















