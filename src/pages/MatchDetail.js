
import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { FaEdit, FaTrash, FaPlus, FaClipboardList } from "react-icons/fa";
import MatchStatPopup from "../components/MatchStatPopUp.js"; // Import the new popup component
import { useNavigate } from "react-router-dom"; // Import useNavigate
import EditPopup from "../components/EditMatchDetailPopup.js"; // Import the EditPopup component
import FormPopup from "../components/MatchFormPopUp.js"; // Import the new FormPopup component
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import flag from "../assets/images/backDrop.png";
import Navbar from "../components/Navbar.js";
import NavbarToggleMenu from "../components/NavbarToggleMenu.js";
import HomeNavbar from "../components/HomeNavbar.js";
import ScoreCardPopup from "../components/ScoreCardPopup.js";
import PlayerFormPopup from "../components/ScoreCardPopup.js";


const MatchDetails = () => {
 
  const [matches,setMatches] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [matchId, setMatchId] = useState(null);
  const [currentMatch, setCurrentMatch] = useState(null);
  const navigate = useNavigate();
  const [currentMatchIndex, setCurrentMatchIndex] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for Edit Popup
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false); // State for Form Popup
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rowsPerPage = 5; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [isScorePopupOpen, setIsScorePopupOpen] = useState(false);


  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/matches/all"); // Update with your API endpoint
        setMatches(response.data);
        console.log(response)
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

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

  const handleEdit = (match) => {
    console.log("match:", match);
    setCurrentMatch(match);
    setIsEditPopupOpen(true);
  };

  const handleDelete = index => {
    const updatedMatches = matches.filter((_, i) => i !== index);
    setMatches(updatedMatches);
  };

  const handleAddStat = id => {
    setMatchId(id)
    setCurrentMatchIndex(id);
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

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setCurrentMatchIndex(null);
  };

  const handleEditPopupClose = () => {
    setIsEditPopupOpen(false);
    setCurrentMatch(null);
  };

  const handleScorePopupClose = () => {
    setIsScorePopupOpen(false);
    setMatchId(null);
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
    className=""
    style={{
      backgroundImage: `url(${flag})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100vw", // Full viewport width
      height: "full", // Full viewport height
      minHeight: "100vh", // Minimum height to cover full screen
    }}
  >
    <HomeNavbar/>
    <div className=" flex relative items-center pt-32 p-2 w-full">
      <div className="w-[5%]">
        <Navbar/>
      </div>  
      <div
        className="  h-full relative bg-gray-100 lg:w-[95%] w-[100%] lg:px-10 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-lg"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }}
      >
        <div className="flex justify-between items-center mb-3">
          <NavbarToggleMenu/>
          <h2 className="md:text-2xl text-lg font-bold text-center font-popins text-[#480D35]">
            Match Details
          </h2>
          <button
            title="Add New"
            onClick={() => setIsFormPopupOpen(true)}
            className="bg-green-700 hover:bg-green-600 rounded-full p-1 text-white text-lg lg:text-2xl"
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md">
            <thead className=" bg-[#480D35] text-white rounded">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                  Date
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
                  key={match.matchId}
                  className=" hover:bg-gray-50 h-full align-middle"
                >
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-800 font-bold">
                    {match.date}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.time}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.venue}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600 ">
                    {match.opposition}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.tier}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.division}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.umpires}
                  </td>
                  <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                    {match.type}
                  </td>
                  <td className="py-4 px-4 flex space-x-2 h-16 whitespace-nowrap text-sm text-gray-600">
                    <button
                      title="Edit"
                      onClick={() => handleEdit(match)}
                      className=" text-green-700 hover:text-green-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      title="Delete"
                      className="text-red-700 hover:text-red-600"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleAddStat(match.matchId)}
                      title="Add"
                      className="text-blue-700 hover:text-blue-600"
                    >
                      <FaClipboardList />
                    </button>
                    <button
                      title="Add Score"
                      onClick={() => handleAddScoreCard(match.matchId)}
                      className="text-yellow-700 hover:text-yellow-600"
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
            className="px-1 py-1 text-lg lg:text-2xl bg-green-700 hover:bg-green-600 rounded disabled:bg-gray-300"
          >
            <GrLinkPrevious style={{ color: "#fff" }} />
          </button>
        
          <div className="text-sm font-semibold">
            Page {currentPage} of {totalPages}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-1 py-1 text-lg lg:text-2xl bg-green-700 hover:bg-green-600 rounded disabled:bg-gray-300"
          >
            <GrLinkNext style={{ color: "#fff" }} />
          </button>
        </div>
      </div>

      {/* Popup for Adding Form */}
      {isFormPopupOpen && <FormPopup
        onClose={()=>setIsFormPopupOpen(false)}
      />}
      <MatchStatPopup
        matchId={matchId}
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        onSubmit={statData => console.log("Match Stat Submitted:", statData)}
      />
      {isEditPopupOpen && 
      <EditPopup
        onClose={handleEditPopupClose}
        match={currentMatch}
      />}
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

