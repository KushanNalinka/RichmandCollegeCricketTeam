import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaClipboardList, FaPlusCircle } from 'react-icons/fa';
import MatchStatPopup from '../components/MatchStatPopUp.js'; // Import the new popup component
import ScoreCardPopup from '../components/ScoreCardPopup.js'; // Import the ScoreCardPopup component
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import EditPopup from '../components/EditMatchDetailPopup.js'; // Import the EditPopup component
import FormPopup from '../components/MatchFormPopUp.js'; // Import the new FormPopup component

const MatchDetails = () => {
  const [matches, setMatches] = useState([
    {
      matchName: 'Match 1',
      time: '2024-08-29T10:00',
      venue: 'Stadium A',
      opponent: 'Team X',
      tier: 'Tier 1',
      division: 'Division A',
      umpire: 'John Doe',
      type: 'ODI',
      // type: 'ODI',
    },
    {
      matchName: 'Match 2',
      time: '2024-08-30T14:00',
      venue: 'Stadium B',
      opponent: 'Team Y',
      tier: 'Tier 2',
      division: 'Division B',
      umpire: 'Jane Smith',
      type: 'T20',
    },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [currentMatchIndex, setCurrentMatchIndex] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for Edit Popup
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false); // State for Form Popup

  const handleEdit = (index) => {
    setCurrentMatchIndex(index);
    setIsEditPopupOpen(true);
  };

  const handleDelete = (index) => {
    const updatedMatches = matches.filter((_, i) => i !== index);
    setMatches(updatedMatches);
  };

  const handleAddStat = (index) => {
    setCurrentMatchIndex(index);
    setIsPopupOpen(true); // Open the popup when the button is clicked
  };

  const handleAddScoreCard = (index) => {
    const matchId = index; // Use index or a unique ID from your match data
    navigate(`/scorecard/${matchId}`);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleEditPopupClose = () => {
    setIsEditPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleEditPopupSubmit = (updatedMatchData) => {
    const updatedMatches = matches.map((match, index) =>
      index === currentMatchIndex ? updatedMatchData : match
    );
    setMatches(updatedMatches);
    setIsEditPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleFormPopupClose = () => {
    setIsFormPopupOpen(false);
  };

  const handleFormPopupSubmit = (newMatchData) => {
    setMatches([...matches, newMatchData]);
    setIsFormPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-500 p-8">
      {/* Table Section */}
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Match Details</h2>
          <button
            onClick={() => setIsFormPopupOpen(true)}
            className="text-green-500 hover:text-green-700 text-4xl"
          >
            <FaPlusCircle />
          </button>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-indigo-600 text-white">Match Name</th>
              <th className="py-2 px-4 bg-indigo-600 text-white">Time</th>
              <th className="py-2 px-4 bg-indigo-600 text-white">Venue</th>
              <th className="py-2 px-4 bg-indigo-600 text-white">Opponent</th>
              <th className="py-2 px-4 bg-indigo-600 text-white">Tier</th>
              <th className="py-2 px-4 bg-indigo-600 text-white">Division</th>
              <th className="py-2 px-4 bg-indigo-600 text-white">Umpire</th>
              <th className="py-2 px-4 bg-indigo-600 text-white">Type</th>
              <th className="py-2 px-4 bg-indigo-600 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{match.matchName}</td>
                <td className="py-2 px-4">{match.time}</td>
                <td className="py-2 px-4">{match.venue}</td>
                <td className="py-2 px-4">{match.opponent}</td>
                <td className="py-2 px-4">{match.tier}</td>
                <td className="py-2 px-4">{match.division}</td>
                <td className="py-2 px-4">{match.umpire}</td>
                <td className="py-2 px-4">{match.type}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => handleAddStat(index)}
                    className="text-green-500 hover:text-green-700"
                  >
                    <FaClipboardList />
                  </button>
                  <button
                    onClick={() => handleAddScoreCard(index)}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    <FaPlus />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for Adding Form */}
      <FormPopup
        isOpen={isFormPopupOpen}
        onClose={handleFormPopupClose}
        onSubmit={handleFormPopupSubmit}
      />
      <MatchStatPopup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        onSubmit={(statData) => console.log('Match Stat Submitted:', statData)}
      />
      <EditPopup
        isOpen={isEditPopupOpen}
        onClose={handleEditPopupClose}
        onSubmit={handleEditPopupSubmit}
        matchData={matches[currentMatchIndex]}
      />
    </div>
  );
};

export default MatchDetails;
