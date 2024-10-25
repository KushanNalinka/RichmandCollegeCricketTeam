import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus, FaClipboardList } from "react-icons/fa";
import { message } from "antd";
import MatchStatPopup from "../components/MatchStatPopUp.js"; // Import the new popup component
import { useNavigate } from "react-router-dom"; // Import useNavigate
import EditPopup from "../components/EditMatchDetailPopup.js"; // Import the EditPopup component
import FormPopup from "../components/MatchFormPopUp.js"; // Import the new FormPopup component
import { GrLinkNext } from "react-icons/gr";
import { MdAssignmentAdd } from "react-icons/md";
import { GrLinkPrevious } from "react-icons/gr";
import flag from "../assets/images/backDrop3.png";
import Navbar from "../components/Navbar.js";
import NavbarToggleMenu from "../components/NavbarToggleMenu.js";
import MainNavbarToggle from "../components/MainNavBarToggle";
import HomeNavbar from "../components/HomeNavbar.js";
import ScoreCardPopup from "../components/ScoreCardPopup.js";
import PlayerFormPopup from "../components/ScoreCardPopup.js";
import logo from "../assets/images/RLogo.png";
import ScoreCardAIModel from "../components/ScoreCardAIModel.js";

const MatchDetails = () => {
  const [matches, setMatches] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [matchId, setMatchId] = useState(null);
  const [matchType, setMatchType] = useState(null);
  const [currentMatch, setCurrentMatch] = useState(null);
  const navigate = useNavigate();
  const [currentMatchIndex, setCurrentMatchIndex] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for Edit Popup
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false); // State for Form Popup
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rowsPerPage = 6; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [isScorePopupOpen, setIsScorePopupOpen] = useState(false);
  const [isScorePopupAIOpen, setIsScorePopupAIOpen] = useState(false);
  const [choiseModelOpen, setChoiseModelOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [matchToDelete, setMatchToDelete] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`${API_URL}matches/all`); // Update with your API endpoint
        setMatches(response.data);
        console.log(response);
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

  const handleEdit = match => {
    console.log("match:", match);
    setCurrentMatch(match);
    setIsEditPopupOpen(true);
  };

  const handleDelete = id => {
    setMatchToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    try {
      const deleteMatch = await axios.delete(
        `${API_URL}matches/delete/${matchToDelete}`
      );
      message.success("Successfully Deleted!");
      setShowDeleteModal(false);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error deleting match:", error);
      message.error("Failed!");
    }
  };

  const handleAddStat = id => {
    setMatchId(id);
    setCurrentMatchIndex(id);
    setIsPopupOpen(true);
  };

  const handleAddScoreCard = match => {
    setMatchType(match.type);
    setMatchId(match.matchId);
    // navigate(`/scorecard/${matchId}`);
    setChoiseModelOpen(true);
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

  const handleAddPopupClose = () => {
    setIsFormPopupOpen(false);
    setCurrentMatchIndex(null);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setCurrentMatchIndex(null);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };
  const handleScorePopupAIOpen = () => {
    setIsScorePopupAIOpen(true);
    setChoiseModelOpen(false);
   
  };
  const handleScorePopupOpen = () => {
    setIsScorePopupOpen(true);
    setChoiseModelOpen(false);
   
  };

  const handleEditPopupClose = () => {
    setIsEditPopupOpen(false);
    setCurrentMatch(null);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const handleScorePopupClose = () => {
    setIsScorePopupOpen(false);
    setMatchId(null);
  };
  const handleScorePopupAIClose = () => {
    setIsScorePopupAIOpen(false);
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
    <div className=" flex flex-col relative justify-center items-center bg-white">
      <div className=" flex relative justify-center items-stretch min-h-screen w-full">
        <div
          className="lg:flex hidden justify-center items-center w-[12%] h-auto "
          style={{
            backgroundImage: `url(${flag})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <Navbar />
        </div>
        <div className="w-[88%] h-auto py-5 flex flex-col items-center justify-center">
          <div className="flex justify-between w-full lg:px-10 py-3">
            <MainNavbarToggle />
            <img src={logo} className="h-12 w-12" />
          </div>
          <div
            className=" lg:w-[95%] h-full w-[100%] bg-gray-200 lg:px-5 p-5 rounded-lg shadow-lg"
            style={{
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            <div className="flex justify-between items-center mb-3">
              <NavbarToggleMenu />
              <h2 className="md:text-2xl text-lg font-bold text-center font-popins text-[#480D35]">
                Match Details
              </h2>
              <button
                title="Add New"
                onClick={() => setIsFormPopupOpen(true)}
                className="bg-green-500 hover:bg-green-600 rounded-full p-1 text-white text-lg lg:text-2xl"
              >
                <FaPlus />
              </button>
            </div>
            <div className="flex overflow-x-auto">
              <table className="min-w-full divide-gray-300 bg-gray-200 shadow-md">
                <thead className=" text-white ">
                  <tr className="rounded bg-gradient-to-r from-[#00175f] to-[#480D35]">
                    <th className="py-3 px-4 lg:rounded-l-lg text-left text-xs font-semibold uppercase tracking-wider">
                      Opponent
                    </th>
                    <th className="py-3  px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Date
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Time
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Venue
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
                    <th className="py-3 lg:rounded-r-lg px-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                  <tr className=" h-2"></tr>
                </thead>
                <tbody className=" divide-y-2 divide-gray-300">
                  
                  {paginatedData.map((match, index) =>
                    <tr
                      key={match.matchId}
                      className=" hover:bg-gray-50 h-full lg:rounded-lg bg-white align-middle"
                    >
                      <td className="gap-4 px-4 lg:rounded-l-lg py-2 items-center text-wrap justify-start text-sm font-bold text-gray-900">
                        <div className="flex items-center justify-start gap-2 ">
                          <img
                            src={match.logo}
                            alt={match.matchId}
                            className="h-14 w-14 rounded-full object-cover border border-gray-300"
                          />
                          {/* Use truncate or text wrapping for small screens */}
                          <span className="truncate whitespace-nowrap">
                            {match.opposition}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600 ">
                        {match.date}
                      </td>
                      <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                        {match.time}
                      </td>
                      <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                        {match.venue}
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
                      <td className="py-4 px-4 lg:rounded-r-lg space-x-2 h-16 whitespace-nowrap text-sm text-gray-600">
                        <button
                          title="Edit"
                          onClick={() => handleEdit(match)}
                          className=" text-green-500 hover:text-green-600"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(match.matchId)}
                          title="Delete"
                          className="text-red-500 hover:text-red-600"
                        >
                          <FaTrash />
                        </button>
                        <button
                          onClick={() => handleAddStat(match.matchId)}
                          title="Add match stats"
                          className="text-yellow-500 hover:text-yellow-600"
                        >
                          <FaClipboardList />
                        </button>
                        <button
                          title="Add Score"
                          onClick={() => handleAddScoreCard(match)}
                          className=" text-blue-500 hover:text-blue-600"
                        >
                          <MdAssignmentAdd />
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
                className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-600 rounded disabled:bg-gray-300"
              >
                <GrLinkPrevious style={{ color: "#fff" }} />
              </button>

              <div className="text-sm font-semibold">
                Page {currentPage} of {totalPages}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-600 rounded disabled:bg-gray-300"
              >
                <GrLinkNext style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
          {showDeleteModal &&
            <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-75">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                <p>Are you sure you want to delete this match?</p>
                <div className="flex justify-end mt-4 space-x-4">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>}
          {choiseModelOpen &&
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-75">
              <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
                <h3 className="text-2xl font-bold text-[#480D35] mb-6 text-center">
                  Add Match Score Details
                </h3>
                <p className="text-center text-gray-700 mb-8">
                  How would you like to proceed?
                </p>

                <div className="flex flex-col space-y-4">
                  <button
                    onClick={handleScorePopupAIOpen}
                    className="w-full bg-[#00175f] bg-opacity-80 hover:bg-opacity-90 text-white font-medium py-3 rounded-md transition duration-300"
                  >
                    Upload Score Images for Two Teams
                  </button>
                  <button
                    onClick={handleScorePopupOpen}
                    className="w-full bg-[#480D35] bg-opacity-80 hover:bg-opacity-90 text-white font-medium py-3 rounded-md transition duration-300"
                  >
                    Add Player Score Details Manually
                  </button>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setChoiseModelOpen(false)}
                    className="text-white bg-gray-300 hover:bg-gray-400 py-2 px-6 rounded-md transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>}

          {/* Popup for Adding Form */}
          {isFormPopupOpen &&
            <FormPopup onClose={handleAddPopupClose} />}
          <MatchStatPopup
            matchId={matchId}
            isOpen={isPopupOpen}
            onClose={handlePopupClose}
            onSubmit={statData =>
              console.log("Match Stat Submitted:", statData)}
          />
          {isEditPopupOpen &&
            <EditPopup onClose={handleEditPopupClose} match={currentMatch} />}
          {/* Player Form Popup */}
          {isScorePopupOpen &&
            <ScoreCardPopup
              onClose={handleScorePopupClose}
              matchId={matchId}
              matchType={matchType}
            />}
           {isScorePopupAIOpen &&
            <ScoreCardAIModel
              onClose={handleScorePopupAIClose}
              matchId={matchId}
            />} 
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
