// import player1Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
// import player2Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
// import player3Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
// import player4Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
// const playersData = [
//     {
//         id: 1,
//         fullName: 'John Doe',
//         birthDate: '1987-05-15',
//         email: 'johndoe@example.com',
//         contactNo: '+1-555-123-4567',
//         battingStyle: 'Right-hand bat',
//         bowlingStyle: 'Right-arm fast',
//         playingRole: 'Batsman',
//         imageUrl: player1Image, // Replace with the actual image path
//         internationalCareer: '2007 - Present',
//         imageUrl: player1Image,
//         stats: [
//             { format: 'Test', matches: 55, innings:108 , runs: 3667, hs: '173 v BAN', avg: 40.29, sr: 58.16, '100s': 15, '50s': 33, '4s': 435, '6s': 33 },
//             { format: 'ODI', matches: 90, innings: 135, runs: 1865, hs: '93 v NED', avg: 25.90, sr: 78.59, '100s': 2, '50s': 10, '4s': 186, '6s': 17 },
//             { format: 'T20', matches: 40, innings: 71, runs: 800, hs: '60 v USA', avg: 30.00, sr: 120.00, '100s': 1, '50s': 5, '4s': 80, '6s': 15 }
//         ],
//         bowlingStats: [
//             { format: 'Test', innings: 100, overs: 1500, matches: 55, wickets: 120, runsConceded: 3500, best: '6/45', average: 29.16, economyRate: 2.33 },
//             { format: 'ODI', innings: 150, overs: 1350, matches: 90, wickets: 80, runsConceded: 2900, best: '4/30', average: 36.25, economyRate: 4.12 },
//             { format: 'T20', innings: 70, overs: 500, matches: 50, wickets: 30, runsConceded: 800, best: '3/20', average: 26.67, economyRate: 6.40 }
//         ]
//     },
//     {
//         id: 2,
//         fullName: 'Jane Smith',
//         birthDate: '1990-11-22',
//         email: 'janesmith@example.com',
//         contactNo: '+1-555-987-6543',
//         battingStyle: 'Left-hand bat',
//         bowlingStyle: 'Left-arm spin',
//         playingRole: 'All-rounder',
//         imageUrl: player2Image, // Replace with the actual image path
//         internationalCareer: '2010 - Present',
//         stats: [
//             { format: 'Test', matches: 55,innings:98, runs: 3667, hs: '173 v BAN', avg: 40.29, sr: 58.16, '100s': 15, '50s': 33, '4s': 435, '6s': 33 },
//             { format: 'ODI', matches: 90, innings:169, runs: 1865, hs: '93 v NED', avg: 25.90, sr: 78.59, '100s': 2, '50s': 10, '4s': 186, '6s': 17 },
//             { format: 'T20', matches: 40, innings:78, runs: 800, hs: '60 v USA', avg: 30.00, sr: 120.00, '100s': 1, '50s': 5, '4s': 80, '6s': 15 }
//         ],
//         bowlingStats: [
//             { format: 'Test', innings: 100, overs: 1500, matches: 55, wickets: 120, runsConceded: 3500, best: '6/45', average: 29.16, economyRate: 2.33 },
//             { format: 'ODI', innings: 150, overs: 1350, matches: 90, wickets: 80, runsConceded: 2900, best: '4/30', average: 36.25, economyRate: 4.12 },
//             { format: 'T20', innings: 70, overs: 500, matches: 50, wickets: 30, runsConceded: 800, best: '3/20', average: 26.67, economyRate: 6.40 }
//         ]
//     },
//     // More player data
// ];
// export  default playersData;

import player1Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
import player2Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
import player3Image from '../assets/images/dana.jpeg'; // Replace with the actual image path
import player4Image from '../assets/images/dana.jpeg'; // Replace with actual placeholder image path

const playersData = [];

// Fetch player data from the API
fetch("http://localhost:8080/api/admin/players/all")
    .then(response => response.json())
    .then(data => {
        data.forEach(player => {
            // Check if the player is part of the "Under 13" team
            if (player.teamsUnder.includes("Under 13")) {
                playersData.push({
                    id: player.playerId,
                    fullName: player.name,
                    birthDate: player.dateOfBirth,
                    email: player.email,
                    contactNo: player.contactNo,
                    battingStyle: player.battingStyle,
                    bowlingStyle: player.bowlingStyle,
                    playingRole: player.playerRole,
                    // Use player.image if available, otherwise use the placeholder
                   
                    internationalCareer: `${player.startDate} - ${player.endDate}`, // Assuming this for career duration
                    stats: [
                        { format: 'Test', matches: 55, innings: 108, runs: 3667, hs: '173 v BAN', avg: 40.29, sr: 58.16, '100s': 15, '50s': 33, '4s': 435, '6s': 33 },
                        { format: 'ODI', matches: 90, innings: 135, runs: 1865, hs: '93 v NED', avg: 25.90, sr: 78.59, '100s': 2, '50s': 10, '4s': 186, '6s': 17 },
                        { format: 'T20', matches: 40, innings: 71, runs: 800, hs: '60 v USA', avg: 30.00, sr: 120.00, '100s': 1, '50s': 5, '4s': 80, '6s': 15 }
                    ],
                    bowlingStats: [
                        { format: 'Test', innings: 100, overs: 1500, matches: 55, wickets: 120, runsConceded: 3500, best: '6/45', average: 29.16, economyRate: 2.33 },
                        { format: 'ODI', innings: 150, overs: 1350, matches: 90, wickets: 80, runsConceded: 2900, best: '4/30', average: 36.25, economyRate: 4.12 },
                        { format: 'T20', innings: 70, overs: 500, matches: 50, wickets: 30, runsConceded: 800, best: '3/20', average: 26.67, economyRate: 6.40 }
                    ]
                });
            }
        });
    })
    .catch(error => console.error('Error fetching player data:', error));

export default playersData;
