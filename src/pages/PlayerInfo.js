import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { message } from "antd";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import PlayerForm from "../components/PlayerForm";
import EditPlayerForm from "../components/EditPlayerForm";
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
  const [rowsPerPage, setRowsPerPage] = useState(6); // Default rows per page
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;
  const divRef = useRef(null);

  // State to store the height
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    // Fetch player data for playerId 4
    axios
      .get(`${API_URL}admin/players/all`)
      .then(response => {
        const players = response.data;
        setPlayerData(players);
        console.log("Player Data:", response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the player data!", error);
      });
  }, []);

  useEffect(() => {

    if (divRef.current) {
      setDivHeight(divRef.current.offsetHeight);
    }
  }, []);

  const handleEdit = player => {
    setCurrentPlayer(player);
    setIsEditFormOpen(true);
  };

  // Calculate total pages
  const totalPages = Math.ceil(playerData.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = playerData.slice(
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

  const handleDelete = id => {
    setPlayerToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    try{
      const deletePayer = await axios.delete(
        `${API_URL}admin/players/delete/${playerToDelete}`
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
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1500);
  };

  const handleEditFormClose = () => {
    setIsEditFormOpen(false);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1500);
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
          <div className="flex justify-between w-full lg:px-10 py-3">
             <MainNavbarToggle/>
             <img src={logo} className="h-12 w-12"/>
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
              <h2 className="md:text-2xl text-lg font-bold text-center font-popins text-[#480D35]">
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
                    <th className="px-4 py-3 lg:rounded-l-lg text-left text-xs font-bold uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      DOB
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Contact No
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Batting Style
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Bowling Style
                    </th>
                    {/* <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Image</th> */}
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-2 py-3 lg:rounded-r-lg text-left text-xs font-bold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                  <tr className=" h-2"></tr>
                </thead>
                <tbody className=" divide-y-2 divide-gray-300 ">
                  {paginatedData.map((item, index) =>
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
                            src={item.image}
                            alt={item.name}
                            className="h-10 w-10 rounded-full object-cover border border-gray-300"
                          />
                          {/* Use truncate or text wrapping for small screens */}
                          <span className="truncate whitespace-nowrap">
                            {item.name.split(" ").slice(-2).join(" ")}
                          </span>
                        </div>
                      </td>
                      <td className="px-2 py-4 h-14  whitespace-nowrap text-sm ">
                        {item.dateOfBirth}
                      </td>
                      <td className="px-2 py-4 h-14 whitespace-nowrap text-sm " >
                        {item.email}
                      </td>
                      <td className="px-2 py-4 h-14 whitespace-nowrap text-sm ">
                        {item.contactNo}
                      </td>
                      <td className="px-2 py-4 h-14 whitespace-nowrap text-sm ">
                        {item.battingStyle}
                      </td>
                      <td className="px-2 py-4 h-14 whitespace-nowrap text-sm ">
                        {item.bowlingStyle}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap h-14 text-sm ">
                        {item.playerRole}
                      </td>
                      <td className="px-2 py-4 lg:rounded-r-lg whitespace-nowrap h-14 text-sm space-x-4">
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
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-4 p-1 bg-white shadow-md rounded">
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
          </div>
          {showDeleteModal && (
              <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-75">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                  <p>Are you sure you want to delete this player?</p>
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
              </div>
            )}
          {isFormOpen && <PlayerForm onClose={handleAddFormClose} />}
          {isEditFormOpen &&
            <EditPlayerForm
              player={currentPlayer}
              onClose={handleEditFormClose}
            />}
        </div>
      </div>
    </div>
  );
};
export default TableComponent;
