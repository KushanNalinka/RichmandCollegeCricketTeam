
import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { FaEdit, FaTrash, FaPlus, FaClipboardList } from "react-icons/fa";
import { message } from "antd";
import MatchStatPopup from "../components/MatchStatPopUp.js"; // Import the new popup component
import { useNavigate } from "react-router-dom"; // Import useNavigate
import EditPopup from "../components/EditMatchDetailPopup.js"; // Import the EditPopup component
import FormPopup from "../components/MatchFormPopUp.js"; // Import the new FormPopup component
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import flag from "../assets/images/backDrop3.png";
import Navbar from "../components/Navbar.js";
import NavbarToggleMenu from "../components/NavbarToggleMenu.js";
import MainNavbarToggle from "../components/MainNavBarToggle";
import HomeNavbar from "../components/HomeNavbar.js";
import ScoreCardPopup from "../components/ScoreCardPopup.js";
import PlayerFormPopup from "../components/ScoreCardPopup.js";
import logo from "../assets/images/RLogo.png";

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
  const API_URL = process.env.REACT_APP_API_URL;


  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`${API_URL}matches/all`); // Update with your API endpoint
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

  const handleDelete = async id => {
    try{
      const deleteMatch = await axios.delete(`${API_URL}matches/delete/${id}`)
      message.success("Successfully Deleted!");
      console.log("Delete row:", id);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
  } catch (error) {
    console.error("Error deleting match:", error);
    message.error("Failed!");
  }
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
    <div className=" flex flex-col relative h-screen justify-center items-center bg-white">
    <div className=" flex relative items-center justify-center h-full w-full">
      <div className="lg:flex hidden justify-center items-center w-[12%] h-full "
         style={{
          backgroundImage: `url(${flag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
      </div>
      <div className="w-[88%] h-full py-10 flex flex-col items-center justify-center">
        <div className="flex justify-between w-full lg:px-10 py-3">
           <MainNavbarToggle/>
           <img src={logo} className="h-12 w-12"/>
        </div>
        <div className=" lg:w-[95%] h-full w-[100%] bg-gray-100 lg:px-5 p-5 rounded-lg shadow-lg" 
          style={{
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            
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
            className="bg-green-600 hover:bg-green-700 rounded-full p-1 text-white text-lg lg:text-2xl"
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
                      className=" text-green-600 hover:text-green-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(match.matchId)}
                      title="Delete"
                      className="text-red-600 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleAddStat(match.matchId)}
                      title="Add"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <FaClipboardList />
                    </button>
                    <button
                      title="Add Score"
                      onClick={() => handleAddScoreCard(match.matchId)}
                      className="text-yellow-600 hover:text-yellow-700"
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
            className="px-1 py-1 text-lg lg:text-2xl bg-green-600 hover:bg-green-700 rounded disabled:bg-gray-300"
          >
            <GrLinkPrevious style={{ color: "#fff" }} />
          </button>
        
          <div className="text-sm font-semibold">
            Page {currentPage} of {totalPages}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-1 py-1 text-lg lg:text-2xl bg-green-600 hover:bg-green-700 rounded disabled:bg-gray-300"
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
      {isScorePopupOpen &&
          <ScoreCardPopup    
          onClose={handleScorePopupClose}
          matchId={matchId}
        />
      }
      
    </div>
  </div>
  </div>
  );
};

export default MatchDetails;

