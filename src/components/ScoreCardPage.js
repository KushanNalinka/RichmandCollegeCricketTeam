// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ScoreCardPage = () => {
//   const { matchId } = useParams(); // Extract matchId from URL parameters

//   const [players, setPlayers] = useState([
//     // Dummy data for players
//     {
//       playerName: 'Player 1',
//       runs: 45,
//       wickets: 2,
//       overs: 10,
//       runConceded: 55,
//       fours: 6,
//       sixes: 2,
//       fifties: 0,
//       hundreds: 0,
//       balls: 30,
//     },
//     {
//       playerName: 'Player 2',
//       runs: 78,
//       wickets: 0,
//       overs: 8,
//       runConceded: 45,
//       fours: 8,
//       sixes: 3,
//       fifties: 1,
//       hundreds: 0,
//       balls: 48,
//     },
//     {
//         playerName: 'Player 1',
//         runs: 45,
//         wickets: 2,
//         overs: 10,
//         runConceded: 55,
//         fours: 6,
//         sixes: 2,
//         fifties: 0,
//         hundreds: 0,
//         balls: 30,
//       },
//       {
//         playerName: 'Player 2',
//         runs: 78,
//         wickets: 0,
//         overs: 8,
//         runConceded: 45,
//         fours: 8,
//         sixes: 3,
//         fifties: 1,
//         hundreds: 0,
//         balls: 48,
//       },
//       {
//         playerName: 'Player 1',
//         runs: 45,
//         wickets: 2,
//         overs: 10,
//         runConceded: 55,
//         fours: 6,
//         sixes: 2,
//         fifties: 0,
//         hundreds: 0,
//         balls: 30,
//       },
//       {
//         playerName: 'Player 2',
//         runs: 78,
//         wickets: 0,
//         overs: 8,
//         runConceded: 45,
//         fours: 8,
//         sixes: 3,
//         fifties: 1,
//         hundreds: 0,
//         balls: 48,
//       },
//       {
//         playerName: 'Player 1',
//         runs: 45,
//         wickets: 2,
//         overs: 10,
//         runConceded: 55,
//         fours: 6,
//         sixes: 2,
//         fifties: 0,
//         hundreds: 0,
//         balls: 30,
//       },
//       {
//         playerName: 'Player 2',
//         runs: 78,
//         wickets: 0,
//         overs: 8,
//         runConceded: 45,
//         fours: 8,
//         sixes: 3,
//         fifties: 1,
//         hundreds: 0,
//         balls: 48,
//       },{
//         playerName: 'Player 1',
//         runs: 45,
//         wickets: 2,
//         overs: 10,
//         runConceded: 55,
//         fours: 6,
//         sixes: 2,
//         fifties: 0,
//         hundreds: 0,
//         balls: 30,
//       },
//       {
//         playerName: 'Player 2',
//         runs: 78,
//         wickets: 0,
//         overs: 8,
//         runConceded: 45,
//         fours: 8,
//         sixes: 3,
//         fifties: 1,
//         hundreds: 0,
//         balls: 48,
//       },{
//         playerName: 'Player 1',
//         runs: 45,
//         wickets: 2,
//         overs: 10,
//         runConceded: 55,
//         fours: 6,
//         sixes: 2,
//         fifties: 0,
//         hundreds: 0,
//         balls: 30,
//       },
//       {
//         playerName: 'Player 2',
//         runs: 78,
//         wickets: 0,
//         overs: 8,
//         runConceded: 45,
//         fours: 8,
//         sixes: 3,
//         fifties: 1,
//         hundreds: 0,
//         balls: 48,
//       },
//     // Add more players as needed
//   ]);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-8">
//       <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Scorecard for Match ID: {matchId}
//         </h2>
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 bg-blue-600 text-white">Player Name</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">Runs</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">Wickets</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">Overs</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">Run Conceded</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">4s</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">6s</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">50s</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">100s</th>
//               <th className="py-2 px-4 bg-blue-600 text-white">Balls</th>
//             </tr>
//           </thead>
//           <tbody>
//             {players.map((player, index) => (
//               <tr key={index} className="border-b">
//                 <td className="py-2 px-4">{player.playerName}</td>
//                 <td className="py-2 px-4">{player.runs}</td>
//                 <td className="py-2 px-4">{player.wickets}</td>
//                 <td className="py-2 px-4">{player.overs}</td>
//                 <td className="py-2 px-4">{player.runConceded}</td>
//                 <td className="py-2 px-4">{player.fours}</td>
//                 <td className="py-2 px-4">{player.sixes}</td>
//                 <td className="py-2 px-4">{player.fifties}</td>
//                 <td className="py-2 px-4">{player.hundreds}</td>
//                 <td className="py-2 px-4">{player.balls}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ScoreCardPage;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import PlayerFormPopup from '../components/ScoreCardPopup'; // Import the new form component

const ScoreCardPage = () => {
  const { matchId } = useParams(); // Extract matchId from URL parameters
  const [players, setPlayers] = useState([
    // Dummy data for players
    {
              playerName: 'Player 1',
              runs: 45,
              wickets: 2,
              overs: 10,
              runConceded: 55,
              fours: 6,
              sixes: 2,
              fifties: 0,
              hundreds: 0,
              balls: 30,
            },
            {
              playerName: 'Player 2',
              runs: 78,
              wickets: 0,
              overs: 8,
              runConceded: 45,
              fours: 8,
              sixes: 3,
              fifties: 1,
              hundreds: 0,
              balls: 48,
            },
            {
                playerName: 'Player 1',
                runs: 45,
                wickets: 2,
                overs: 10,
                runConceded: 55,
                fours: 6,
                sixes: 2,
                fifties: 0,
                hundreds: 0,
                balls: 30,
              },
              {
                playerName: 'Player 2',
                runs: 78,
                wickets: 0,
                overs: 8,
                runConceded: 45,
                fours: 8,
                sixes: 3,
                fifties: 1,
                hundreds: 0,
                balls: 48,
              },
              {
                playerName: 'Player 1',
                runs: 45,
                wickets: 2,
                overs: 10,
                runConceded: 55,
                fours: 6,
                sixes: 2,
                fifties: 0,
                hundreds: 0,
                balls: 30,
              },
              {
                playerName: 'Player 2',
                runs: 78,
                wickets: 0,
                overs: 8,
                runConceded: 45,
                fours: 8,
                sixes: 3,
                fifties: 1,
                hundreds: 0,
                balls: 48,
              },
              {
                playerName: 'Player 1',
                runs: 45,
                wickets: 2,
                overs: 10,
                runConceded: 55,
                fours: 6,
                sixes: 2,
                fifties: 0,
                hundreds: 0,
                balls: 30,
              },
              {
                playerName: 'Player 2',
                runs: 78,
                wickets: 0,
                overs: 8,
                runConceded: 45,
                fours: 8,
                sixes: 3,
                fifties: 1,
                hundreds: 0,
                balls: 48,
              },{
                playerName: 'Player 1',
                runs: 45,
                wickets: 2,
                overs: 10,
                runConceded: 55,
                fours: 6,
                sixes: 2,
                fifties: 0,
                hundreds: 0,
                balls: 30,
              },
              {
                playerName: 'Player 2',
                runs: 78,
                wickets: 0,
                overs: 8,
                runConceded: 45,
                fours: 8,
                sixes: 3,
                fifties: 1,
                hundreds: 0,
                balls: 48,
              },{
                playerName: 'Player 1',
                runs: 45,
                wickets: 2,
                overs: 10,
                runConceded: 55,
                fours: 6,
                sixes: 2,
                fifties: 0,
                hundreds: 0,
                balls: 30,
              },
              {
                playerName: 'Player 2',
                runs: 78,
                wickets: 0,
                overs: 8,
                runConceded: 45,
                fours: 8,
                sixes: 3,
                fifties: 1,
                hundreds: 0,
                balls: 48,
              },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => setIsFormOpen(true);
  const handleFormClose = () => setIsFormOpen(false);

  const handleFormSubmit = (playerData) => {
    // Add matchId to player data and update the players state
    setPlayers([...players, { ...playerData, matchId }]);
    handleFormClose();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-8 relative">
      {/* Plus Icon for Adding Player */}
      <button
        onClick={handleFormOpen}
        className="absolute top-4 left-4 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none"
      >
        <FaPlus size={30} />
      </button>

      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Scorecard for Match ID: {matchId}
        </h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-blue-600 text-white">Player Name</th>
              <th className="py-2 px-4 bg-blue-600 text-white">Runs</th>
              <th className="py-2 px-4 bg-blue-600 text-white">Wickets</th>
              <th className="py-2 px-4 bg-blue-600 text-white">Overs</th>
              <th className="py-2 px-4 bg-blue-600 text-white">Run Conceded</th>
              <th className="py-2 px-4 bg-blue-600 text-white">4s</th>
              <th className="py-2 px-4 bg-blue-600 text-white">6s</th>
              <th className="py-2 px-4 bg-blue-600 text-white">50s</th>
              <th className="py-2 px-4 bg-blue-600 text-white">100s</th>
              <th className="py-2 px-4 bg-blue-600 text-white">Balls</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{player.playerName}</td>
                <td className="py-2 px-4">{player.runs}</td>
                <td className="py-2 px-4">{player.wickets}</td>
                <td className="py-2 px-4">{player.overs}</td>
                <td className="py-2 px-4">{player.runConceded}</td>
                <td className="py-2 px-4">{player.fours}</td>
                <td className="py-2 px-4">{player.sixes}</td>
                <td className="py-2 px-4">{player.fifties}</td>
                <td className="py-2 px-4">{player.hundreds}</td>
                <td className="py-2 px-4">{player.balls}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Player Form Popup */}
      <PlayerFormPopup
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        matchId={matchId}
      />
    </div>
  );
};

export default ScoreCardPage;
