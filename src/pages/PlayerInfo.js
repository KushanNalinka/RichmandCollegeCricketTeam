import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { message } from "antd";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";
import PlayerForm from "../components/PlayerForm";
import EditPlayerForm from "../components/EditPlayerForm";
import ball from "../assets/images/CricketBall-unscreen.gif";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Navbar from "../components/Navbar";
import flag from "../assets/images/backDrop3.png";
import logo from "../assets/images/RLogo.png";
import NavbarToggleMenu from "../components/NavbarToggleMenu";
import MainNavbarToggle from "../components/MainNavBarToggle";


const TableComponent = () => {
  const [playerData, setPlayerData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState(null);
  const [uploading, setUploading] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const divRef = useRef(null);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showBowlingDropdown, setShowBowlingDropdown] = useState(false);
  const [showBattingDropdown, setShowBattingDropdown] = useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [statusOptions, setStatusOptions] = useState([]);
  const [bowlingOptions, setBowlingOptions] = useState([]);
  const [battingOptions, setBattingOptions] = useState([]);
  const [roleOptions, setRoleOptions] = useState([]);
  const [filters, setFilters] = useState({ status: '', bowlingStyle: '', battingStyle: '', playerRole: '' });
  
  // State to store the height
  const [divHeight, setDivHeight] = useState(0);
  // const statusOptions = ["Active", "Inactive"];
  // const roleOptions = ["Bowler","Batter", "Top Order Batter", "Wicketkeeper Batter", "Allrounder", "Bawlling Allrounder", "Batting Allrounder"];
  // const bowlingOptions = ["RAF","RAFM","RAMF","RAM","RAMS","RASM","RAS","LAF", "LAFM", "LAMF", "LAM","LAMS", "LASM","LAL", "OB", "LB", "LBG", "SLAO","SRAO","OS","SLAWS", "SRAWS", "N/A"];
  // const battingOptions = ["LHB","RHB"]

  useEffect(() => {
    // Fetch player data for playerId 4
    setUploading(true);
    axios
      .get(`${API_URL}admin/players/all`)
      .then(response => {
        setUploading(false);
        const players = response.data;
        const sortedPlayers = players.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn));
        setPlayerData(sortedPlayers);
        setStatusOptions([...new Set(players.map(player => player.status))]);
        setBowlingOptions([...new Set(players.map(player => player.bowlingStyle))]);
        setBattingOptions([...new Set(players.map(player => player.battingStyle))]);
        setRoleOptions([...new Set(players.map(player => player.playerRole))]);
        console.log("Player Data:", response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the player data!", error);
      });
      updateRowsPerPage(); // Initial setup
    window.addEventListener('resize', updateRowsPerPage);
    return () => window.removeEventListener('resize', updateRowsPerPage);
  }, [isSubmitted, isDeleted]);

    const updateRowsPerPage = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth >= 1440 && screenHeight >= 900) {
      setRowsPerPage(10); // Desktop screens
    } else if (screenWidth >= 1024 && screenWidth < 1440 && screenHeight >= 600 && screenHeight < 900) {
      setRowsPerPage(8); // Laptop screens
    } else {
      setRowsPerPage(6); // Smaller screens (tablets, mobile)
    }
  };

  useEffect(() => {
    const filtered = playerData.filter(player => {
      return (
        (filters.status ? player.status === filters.status : true) &&
        (filters.bowlingStyle ? player.bowlingStyle === filters.bowlingStyle : true) &&
        (filters.battingStyle ? player.battingStyle === filters.battingStyle : true) &&
        (filters.playerRole ? player.playerRole === filters.playerRole : true)
      );
    });
    setFilteredPlayers(filtered);
  }, [filters, playerData]);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1);
    setShowStatusDropdown(false);
    setShowBowlingDropdown(false);
    setShowBattingDropdown(false);
    setShowRoleDropdown(false);
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredPlayers.length / rowsPerPage);

  // Slice data for the current page after sorting
  const paginatedData = filteredPlayers.slice(
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

  const handleEdit = player => {
    setCurrentPlayer(player);
    setIsEditFormOpen(true);
  };

// Sort players by status before slicing for pagination
// const sortedPlayerData = [...playerData].sort((a, b) => {
//   // Move "Active" players to the top
//   if (a.status === "Active" && b.status !== "Active") return -1;
//   if (a.status !== "Active" && b.status === "Active") return 1;
//   return 0;
// });

  const handleDelete = id => {
    setPlayerToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    setUploading(true);
    try{
      const deletePayer = await axios.delete(
        `${API_URL}admin/players/delete/${playerToDelete}`
      );
      message.success("Successfully Deleted!");
      setShowDeleteModal(false);
      setIsDeleted(!isDeleted);
    } catch (error) {
      console.error("Error deleting player:", error);

      if (error.response && error.response.data && error.response.data.message) {
        message.error(`Failed to delete: ${error.response.data.message}`);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
    }
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSavePlayer = player => {
    // Logic to save player information, including image upload if necessary
    setIsFormOpen(false);
  };

  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAddFormClose = () => {
    setIsFormOpen(false);
  };

  const handleEditFormClose = () => {
    setIsEditFormOpen(false);
  };

  return (
    <div className=" flex flex-col relative justify-center items-center bg-white">
      <div className=" flex relative justify-center items-stretch min-h-screen w-full">
        <div className="lg:flex hidden justify-center items-center w-[12%] h-auto"
           style={{
            backgroundImage: `url(${flag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navbar />
        </div>
        <div className="w-[88%] h-auto py-5 flex flex-col items-center justify-center">
          <div className="flex justify-between w-full lg:px-10 pt-3">
            <Link to={"/member"}>
              <img src={logo} className="h-12 w-12" />
            </Link >
            <MainNavbarToggle/>
          </div>
          <div className=" lg:w-[95%] h-full w-[100%] bg-gray-200 lg:px-5 p-5 rounded-lg shadow-lg" 
            style={{
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              
            }}
            
          >
            <div className="flex justify-between items-center content-center mb-3" >
              <NavbarToggleMenu />
              <h2 className="md:text-2xl text-xl font-bold text-center font-popins text-[#480D35]">
                Player Details
              </h2>
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-green-500 hover hover:bg-green-600 text-white rounded-full p-1 lg:text-2xl text-lg"
                aria-label="Add"
                title="Add New"
              >
                <FaPlus />
              </button>
            </div>
            <div className="flex overflow-x-auto" >
              <table className="min-w-full divide-gray-300 bg-gray-200  shadow-md">
                <thead className=" text-white">
                  <tr className="lg:rounded bg-gradient-to-r from-[#00175f] to-[#480D35]">
                    <th className="relative px-4 py-3 lg:rounded-l-lg text-left text-xs font-bold uppercase tracking-wider">
                      Status
                      <button onClick={() => setShowStatusDropdown(!showStatusDropdown)} className="ml-2">
                        {showStatusDropdown? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {showStatusDropdown && (
                        <div className="absolute mt-1 bg-white h-[74px] hover:overflow-auto custom-scrollbar overflow-hidden border rounded shadow-lg">
                          <button onClick={() => handleFilterChange("status", "")} className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-200">All</button>
                          {statusOptions.map(status => (
                            <button
                              key={status}
                              onClick={() => handleFilterChange("status", status)}
                              className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-200"
                            >
                              {status}
                            </button>
                          ))}
                        </div>
                      )}
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      DOB
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Contact No
                    </th>
                    <th className=" relative px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Batting Style
                      <button onClick={() => setShowBattingDropdown(!showBattingDropdown)} className="ml-2">
                      {showBattingDropdown? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {showBattingDropdown && (
                        <div className="absolute h-[74px] hover:overflow-auto custom-scrollbar overflow-hidden mt-1 bg-white border rounded shadow-lg">
                          <button onClick={() => handleFilterChange("battingStyle", "")} className="block px-4 py-2 text-left w-full text-sm text-gray-700 hover:bg-gray-200">All</button>
                          {battingOptions.map(style => (
                            <button
                              key={style}
                              onClick={() => handleFilterChange("battingStyle", style)}
                              className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-200"
                            >
                              {style}
                            </button>
                          ))}
                        </div>
                      )}
                    </th>
                    <th className="relative px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Bowling Style
                      <button onClick={() => setShowBowlingDropdown(!showBowlingDropdown)} className="ml-2">
                        {showBowlingDropdown? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {showBowlingDropdown && (
                        <div className="absolute mt-1 bg-white h-[74px] hover:overflow-auto custom-scrollbar overflow-hidden border rounded shadow-lg">
                          <button onClick={() => handleFilterChange("bowlingStyle", "")} className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-200">All</button>
                          {bowlingOptions.map(style => (
                            <button
                              key={style}
                              onClick={() => handleFilterChange("bowlingStyle", style)}
                              className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-200"
                            >
                              {style}
                            </button>
                          ))}
                        </div>
                      )}
                    </th>
                    {/* { <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Image</th> /} */}
                    <th className="relative px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Role
                      <button onClick={() => setShowRoleDropdown(!showRoleDropdown)} className="ml-2">
                        {showRoleDropdown? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {showRoleDropdown && (
                        <div className="absolute mt-1 h-[74px] hover:overflow-auto custom-scrollbar overflow-hidden bg-white border rounded shadow-lg">
                          <button onClick={() => handleFilterChange("playerRole", "")} className="block px-4 py-2 text-left w-full text-sm text-gray-700 hover:bg-gray-200">All</button>
                          {roleOptions.map(role => (
                            <button
                              key={role}
                              onClick={() => handleFilterChange("playerRole", role)}
                              className="block px-4 py-2 text-left w-full text-sm text-gray-700 hover:bg-gray-200"
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      )}
                    </th>
                    <th className="px-4 py-3 lg:rounded-r-lg text-left text-xs font-bold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                  <tr className=" h-2"></tr>
                </thead>
                <tbody className=" divide-y-2 divide-gray-300 ">
                {paginatedData && paginatedData.length === 0 ? (
                  <tr className="hover:bg-gray-50 h-full lg:rounded-lg bg-white align-middle text-gray-900">
                  <td colSpan={9} className="px-4 py-4 h-20 lg:rounded-lg text-center  whitespace-nowrap text-sm">
                      There is no data available
                  </td>
                  </tr>
                  ):(
                    paginatedData.map((item, index) =>
                      <tr
                        key={index}
                        className=" hover:bg-gray-50 lg:rounded-lg h-full bg-white align-middle text-gray-900"
                      >
                        <td className={`px-4 py-2 lg:rounded-l-lg h-14 whitespace-nowrap text-sm`}>
                          <div
                            className={`flex items-center justify-center h-6 w-6  ${item.status ==
                            "Active"
                              ? "bg-green-500 p-3 rounded-full font-bold text-green-500"
                              : "bg-slate-300 p-3 text-slate-600 font-bold rounded-full"}`}
                          />
                        </td>
                        <td className="gap-4 px-4 py-2 items-center text-wrap justify-start text-sm font-bold text-gray-900">
                          <div className="flex items-center justify-start gap-2 ">
                            <img
                              // src={`http://rcc.dockyardsoftware.com/images/${ item.image ? item.image.split('/').pop() : 'default.jpg'}`}
                              src={`${item.image}?cacheBust=${Date.now()}`}
                              //src={item.image}
                              alt={item.name}
                              className="h-12 w-12 rounded-full object-cover border border-gray-300"
                            />
                           
                            <span className="truncate whitespace-nowrap">
                              {item.name.split(" ").slice(-2).join(" ")}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 h-14  whitespace-nowrap text-sm ">
                          {item.dateOfBirth}
                        </td>
                        <td className="px-4 py-4 h-14 whitespace-nowrap text-sm " >
                          {item.email}
                          {/* {`http://rcc.dockyardsoftware.com/${ item.image ? item.image.split('/').pop() : 'default.jpg'}`} */}
                        </td>
                        <td className="px-4 py-4 h-14 whitespace-nowrap text-sm ">
                          {item.contactNo}
                        </td>
                        <td className="px-4 py-4 h-14 whitespace-nowrap text-sm ">
                          {item.battingStyle}
                        </td>
                        <td className="px-4 py-4 h-14 whitespace-nowrap text-sm ">
                          {item.bowlingStyle}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap h-14 text-sm ">
                          {item.playerRole}
                        </td>
                        <td className="px-4 py-4 lg:rounded-r-lg whitespace-nowrap h-14 text-sm space-x-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="text-green-500 hover:text-green-600 text-md"
                            aria-label="Edit"
                            title="Edit"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(item.playerId)}
                            className="text-red-500 hover:text-red-600 text-md"
                            aria-label="Delete"
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    )
                  )}  
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex w-[95%] justify-between items-center mt-1 p-1 bg-white shadow-md rounded">
              <button
                onClick={handlePrevPage}
                title="Prev"
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
                title="Next"
                disabled={currentPage === totalPages}
                className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-600 rounded disabled:bg-gray-300"
              >
                <GrLinkNext style={{ color: "#fff" }} />
              </button>
          </div>
          {showDeleteModal && (
              <div className={`fixed inset-0 flex justify-center items-center p-5 bg-gray-600 bg-opacity-75`}>
                <div className={` ${uploading? "opacity-80": "bg-opacity-100"} bg-white rounded-3xl shadow-lg lg:p-8 p-5`}>
                  <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                  <p>Are you sure you want to delete this player?</p>
                  <div className="flex justify-end mt-4 space-x-2">
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
              </div>
            )}
          {isFormOpen && <PlayerForm onClose={handleAddFormClose} isSubmitted={()=>setIsSubmitted(!isSubmitted)} />}
          {isEditFormOpen &&
            <EditPlayerForm
              player={currentPlayer}
              onClose={handleEditFormClose}
              isSubmitted={()=>setIsSubmitted(!isSubmitted)}
            />
          }
        </div>
        {uploading && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
              <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
            </div>
          )}
      </div>
    </div>
  );
};
export default TableComponent;
