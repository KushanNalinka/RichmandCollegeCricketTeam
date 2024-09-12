import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus, FaClipboardList } from "react-icons/fa";
import MatchStatPopup from "../components/MatchStatPopUp.js"; // Import the new popup component
import { useNavigate } from "react-router-dom"; // Import useNavigate
import EditPopup from "../components/EditMatchDetailPopup.js"; // Import the EditPopup component
import FormPopup from "../components/MatchFormPopUp.js"; // Import the new FormPopup component
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import flag from "../assets/images/flagbg.png";
import Navbar from "../components/Navbar.js";
import NavbarToggleMenu from "../components/NavbarToggleMenu.js";
import HomeNavbar from "../components/HomeNavbar.js";
import ScoreCardPopup from "../components/ScoreCardPopup.js";
import PlayerFormPopup from "../components/ScoreCardPopup.js";

const MatchDetails = () => {
  const [matches, setMatches] = useState([
    {
      matchId:1,
      matchName: "Match 1",
      time: "2024-08-29T10:00",
      venue: "Stadium A",
      opponent: "Team X",
      tier: "Tier 1",
      division: "Division A",
      umpire: "John Doe",
      type: "ODI"
    },
    {
      matchId:2,
      matchName: "Match 2",
      time: "2024-08-30T14:00",
      venue: "Stadium B",
      opponent: "Team Y",
      tier: "Tier 2",
      division: "Division B",
      umpire: "Jane Smith",
      type: "T20"
    },
    {
      matchId:3,
      matchName: "Match 3",
      time: "2024-08-29T10:00",
      venue: "Stadium A",
      opponent: "Team X",
      tier: "Tier 1",
      division: "Division A",
      umpire: "John Doe",
      type: "ODI"
    },
    { 
      matchId:4,
      matchName: "Match 4",
      time: "2024-08-30T14:00",
      venue: "Stadium B",
      opponent: "Team Y",
      tier: "Tier 2",
      division: "Division B",
      umpire: "Jane Smith",
      type: "T20"
    },
    {
      matchId:1,
      matchName: "Match 1",
      time: "2024-08-29T10:00",
      venue: "Stadium A",
      opponent: "Team X",
      tier: "Tier 1",
      division: "Division A",
      umpire: "John Doe",
      type: "ODI"
    },
    {
      matchId:2,
      matchName: "Match 2",
      time: "2024-08-30T14:00",
      venue: "Stadium B",
      opponent: "Team Y",
      tier: "Tier 2",
      division: "Division B",
      umpire: "Jane Smith",
      type: "T20"
    },
    {
      matchId:3,
      matchName: "Match 3",
      time: "2024-08-29T10:00",
      venue: "Stadium A",
      opponent: "Team X",
      tier: "Tier 1",
      division: "Division A",
      umpire: "John Doe",
      type: "ODI"
    },
    { 
      matchId:4,
      matchName: "Match 4",
      time: "2024-08-30T14:00",
      venue: "Stadium B",
      opponent: "Team Y",
      tier: "Tier 2",
      division: "Division B",
      umpire: "Jane Smith",
      type: "T20"
    }
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [matchId, setMatchId] = useState(null);
  const navigate = useNavigate();
  const [currentMatchIndex, setCurrentMatchIndex] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for Edit Popup
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false); // State for Form Popup
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rowsPerPage = 4; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [isScorePopupOpen, setIsScorePopupOpen] = useState(false);
  

  const totalPages = Math.ceil(matches.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = matches.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleEdit = index => {
    setCurrentMatchIndex(index);
    setIsEditPopupOpen(true);
  };

  const handleDelete = index => {
    const updatedMatches = matches.filter((_, i) => i !== index);
    setMatches(updatedMatches);
  };

  const handleAddStat = index => {
    setCurrentMatchIndex(index);
    setIsPopupOpen(true); 
  };

  const handleAddScoreCard = (matchId) => {
    setMatchId(matchId); 
    // navigate(`/scorecard/${matchId}`);
    setIsScorePopupOpen(true);
  };
  const handleFormSubmit = playerData => {
    // Add matchId to player data and update the players state
    // setPlayers([...players, { ...playerData, matchId }]);
    //handleFormClose();
  };
  const handleEditPopupSubmit = updatedMatchData => {
    const updatedMatches = matches.map(
      (match, index) => (index === currentMatchIndex ? updatedMatchData : match)
    );
    setMatches(updatedMatches);
    setIsEditPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleFormPopupClose = () =>{
    setIsFormPopupOpen(false);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleEditPopupClose = () => {
    setIsEditPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleScorePopupClose = () => {
    setIsScorePopupOpen(false);
  };

  const handleFormPopupSubmit = newMatchData => {
    setMatches([...matches, newMatchData]);
    setIsFormPopupOpen(false);
  };

  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
    className="h-screen w-screen"
    style={{
      backgroundImage: `url(${flag})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    <HomeNavbar/>
    <div className=" flex relative top-24 p-2 w-full">
      <div className="lg:w-[5%]">
        <Navbar/>
      </div>  
      <div
        className="  h-full relative bg-gray-100 lg:w-[95%] w-[100%] lg:mx-3 lg:px-10 lg:py-5 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-lg"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <NavbarToggleMenu/>
          <h2 className="md:text-2xl text-xl mb-6 font-bold text-center font-popins text-gray-800">
            Match Details
          </h2>
          <button
            title="Add New"
            onClick={() => setIsFormPopupOpen(true)}
            className="bg-green-500 hover:bg-green-700 rounded-full p-1 text-white text-lg lg:text-2xl"
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md">
            <thead className=" bg-baseRed2 text-white rounded">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Match Name
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Time
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Venue
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Opponent
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Tier
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Division
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Umpire
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Type
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-300">
              {paginatedData.map((match, index) =>
                <tr
                  key={index}
                  className=" hover:bg-gray-50 h-full align-middle"
                >
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-800 font-bold">
                    {match.matchName}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.time}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.venue}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600 ">
                    {match.opponent}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.tier}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.division}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.umpire}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.type}
                  </td>
                  <td className="py-4 px-4 flex space-x-2 h-16 whitespace-nowrap text-sm text-gray-600">
                    <button
                      title="Edit"
                      onClick={() => handleEdit(index)}
                      className=" text-green-500 hover:text-green-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      title="Delete"
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleAddStat(index)}
                      title="Add"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaClipboardList />
                    </button>
                    <button
                      title="Add Score"
                      onClick={() => handleAddScoreCard(match.matchId)}
                      className="text-yellow-500 hover:text-yellow-700"
                    >
                      <FaPlus />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4 p-1 bg-white shadow-md rounded">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-700 rounded disabled:bg-gray-300"
          >
            <GrLinkPrevious style={{ color: "#fff" }} />
          </button>

          <div className="text-sm font-semibold">
            Page {currentPage} of {totalPages}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-700 rounded disabled:bg-gray-300"
          >
            <GrLinkNext style={{ color: "#fff" }} />
          </button>
        </div>
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
        onSubmit={statData => console.log("Match Stat Submitted:", statData)}
      />
      <EditPopup
        isOpen={isEditPopupOpen}
        onClose={handleEditPopupClose}
        onSubmit={handleEditPopupSubmit}
        matchData={matches[currentMatchIndex]}
      />
      {/* Player Form Popup */}
      <ScoreCardPopup    
        isOpen={isScorePopupOpen}
        onClose={handleScorePopupClose}
        onSubmit={handleAddScoreCard}
        matchId={matchId}
        
      />
    </div>
  </div>
  );
};

export default MatchDetails;
