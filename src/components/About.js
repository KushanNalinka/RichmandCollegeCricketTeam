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
                        (team) => team.under === "Under 13" && parseInt(team.year, 10) === selectedYear
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

    // Fetch player stats based on the selected player
    useEffect(() => {
        const fetchPlayerStats = async () => {
            if (selectedPlayer) {
                try {
                    const response = await fetch(`${API_URL}playerStats/all-stats/${selectedPlayer.playerId}`);
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

    // Function to handle year selection change
    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value, 10));
    };

    // Function to generate year options for the dropdown (e.g., last 10 years)
    const getYearOptions = () => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: 10 }, (_, i) => currentYear - i);
    };

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

    return (
        <div className="bg-gray-400 min-h-screen text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
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
                                Under 13
                            </p>
                        </div>

                        {/* Year Dropdown */}
                        <div className="absolute top-4 right-4 md:top-8 md:right-10">
                            <select
                                value={selectedYear}
                                onChange={handleYearChange}
                                className="bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
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

            {/* Rest of the content */}
            <Footer />
        </div>
    );
};

export default PlayerProfile;
