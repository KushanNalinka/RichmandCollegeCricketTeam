import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { message } from "antd";
import { FaTrash, FaEdit, FaUsers, FaPlus } from "react-icons/fa";
import EditModal from "../components/TeamEditModal"; // Import the EditModal component
import AddNewModal from "../components/TeamAddNewModal"; // Import the AddNewModal component
import flag from "../assets/images/backDrop3.png";
import HomeNavbar from "../components/HomeNavbar";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Navbar from "../components/Navbar";
import NavbarToggleMenu from "../components/NavbarToggleMenu";
import TeamMembers from "../components/TeamMembers";
import logo from "../assets/images/RLogo.png";
import MainNavbarToggle from "../components/MainNavBarToggle";

const TableComponent = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [teams, setTeams] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isTeamMembersOpen, setIsTeamMembersOpen] = useState(false);
  const [form, setForm] = useState({ under: "", year: "", captain: "" });
  const [editItem, setEditItem] = useState(null);
  const [teamMembers, setTeamMembers] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rowsPerPage = 5; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [teamToDelete, setTeamToDelete] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      console.log("members:", teamMembers);
      try {
        const response = await axios.get(`${API_URL}teams/all`); // Update with your API endpoint
        setTeams(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchTeams();
  }, []);

  const totalPages = Math.ceil(teams.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = teams.slice(
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

  const handleEdit = item => {
    setEditItem(item);
    setIsEditModalOpen(true);
  };

 

  const handleViewMembers = members => {
    console.log("selected team:" , members);
    setIsTeamMembersOpen(true);
    setTeamMembers(members);
  };

  const handleDelete = id => {
    setTeamToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    try{
      const deleteTeam = await axios.delete(`${API_URL}teams/${teamToDelete}`)
      message.success("Successfully Deleted!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
  } catch (error) {
    console.error("Error deleting match:", error);
    message.error("Failed!");
  }
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
      <div className="w-[88%] h-full py-5 flex flex-col items-center justify-center">
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
        <div className="flex justify-between items-center mb-4">
          <NavbarToggleMenu/>
          <h2 className="md:text-2xl text-lg font-bold  text-center text-[#480D35] ">Team Details</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className=" right-4 text-lg lg:text-2xl bg-green-500 hover:bg-green-600 transition-colors rounded-full p-1"
            title="Add New"
          >
            <FaPlus style={{color:"#fff"}}/>
          </button>
        </div>
          <div className="flex overflow-x-auto">
            <table className="min-w-full divide-gray-300 bg-gray-200 shadow-md">
              <thead className=" text-white">
                <tr className="rounded bg-gradient-to-r from-[#00175f] to-[#480D35]">
                  <th className="py-3 px-4 rounded-l-lg text-left text-xs font-semibold uppercase tracking-wider">
                    Under
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Year
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Captain
                  </th>
                  <th className="py-3 px-4 rounded-r-lg text-left text-xs font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
                <tr className=" h-2"></tr>
              </thead>
              <tbody className=" divide-y-2 divide-gray-300">
                {paginatedData.map((item,index) =>
                  <tr
                    key={item.teamId}
                    className=" hover:bg-gray-50 h-full rounded-lg bg-white align-middle"
                  >
                    <td className="py-4 px-4 rounded-l-lg h-16 whitespace-nowrap text-sm text-gray-800 font-bold">
                      {item.under}
                    </td>
                    <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.year}
                    </td>
                    <td className="py-4 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.captain}
                    </td>
                    <td className="py-4 px-4 rounded-r-lg space-x-2 h-16 whitespace-nowrap text-sm text-gray-600">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(item.teamId)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                      <button
                        onClick={() => handleViewMembers(item.players
                          
                        )}
                        className="text-green-500 hover:text-green-600 transition-colors"
                        title="Members"
                      >
                        <FaUsers />
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center p-1 bg-white shadow-md rounded mt-4">
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

        {/* Modal for adding new item */}
        {showDeleteModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
              <p>Are you sure you want to delete this team?</p>
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
        {isModalOpen &&
          <AddNewModal
            onClose={() => setIsModalOpen(false)}
          />}

        {/* Edit Modal */}
        {isEditModalOpen &&
          editItem &&
          <EditModal
            team={editItem}
            onClose={() => setIsEditModalOpen(false)}
           
          />}
          {isTeamMembersOpen &&
          teamMembers &&
          <TeamMembers
            members={teamMembers}
            onClose={() => setIsTeamMembersOpen(false)}
           
          />}
      </div>
      </div>
      </div>
  );
};

export default TableComponent;

