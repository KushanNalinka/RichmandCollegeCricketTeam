import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { message } from "antd";
import { FaTrash, FaEdit, FaUsers, FaPlus, FaChevronDown, FaChevronUp  } from "react-icons/fa";
import EditModal from "../components/TeamEditModal"; // Import the EditModal component
import AddNewModal from "../components/TeamAddNewModal"; // Import the AddNewModal component
import flag from "../assets/images/backDrop3.png";
import HomeNavbar from "../components/HomeNavbar";
import ball from "../assets/images/CricketBall-unscreen.gif";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
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
  const [teamId, setTeamId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [teamToDelete, setTeamToDelete] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [filters, setFilters] = useState({ year: "", under: "" });
  const [showUnderDropdown, setShowUnderDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [yearOptions, setYearOptions] = useState([]);
  const [underOptions, setUnderOptions] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setUploading(true);
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${API_URL}teams/all`); // Update with your API endpoint
        setUploading(false);
        const sortedTeams = response.data.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn));

        setTeams(sortedTeams);
        setFilteredTeams(sortedTeams);
        console.log(sortedTeams);
        
        // Extract unique year and under options
        const uniqueYears = [...new Set(response.data.map(team => team.year))];
        const uniqueUnders = [...new Set(response.data.map(team => team.under))];
        setYearOptions(uniqueYears);
        setUnderOptions(uniqueUnders);

        updateRowsPerPage(); // Initial setup
        window.addEventListener('resize', updateRowsPerPage);
        return () => window.removeEventListener('resize', updateRowsPerPage);

      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
  
    fetchTeams();
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
    const filtered = teams.filter(team => {
      return (
        (filters.year ? team.year === parseInt(filters.year) : true) &&
        (filters.under ? team.under === filters.under : true)
      );
    });
    setFilteredTeams(filtered);
  }, [filters, teams]);

  const totalPages = Math.ceil(filteredTeams.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = filteredTeams.slice(
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

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1);
    setShowUnderDropdown(false);
    setShowYearDropdown(false);
  };

  const handleEdit = item => {
    setEditItem(item);
    setIsEditModalOpen(true);
  };

 

  const handleViewMembers = teamId => {
    console.log("selected team:" , teamId);
    setIsTeamMembersOpen(true);
    setTeamId(teamId);
  };

  const handleDelete = id => {
    setTeamToDelete(id)
;
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

  const handleAddFormClose = () => {
    setIsModalOpen(false);
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1500);
  };

  const handleEditFormClose = () => {
    setIsEditModalOpen(false)
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1500);
  };

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1990; i--) {
    years.push(i);
  }

  return (
    <div className=" flex flex-col relative justify-center items-center bg-white">
    <div className=" flex relative justify-center items-stretch min-h-screen w-full">
      <div className="lg:flex hidden justify-center items-center w-[12%] h-auto "
         style={{
          backgroundImage: `url(${flag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
      </div>
      <div className="w-[88%] h-auto py-5  flex flex-col items-center justify-center">
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
          <div className="flex justify-between items-center mb-3">
            <NavbarToggleMenu/>
            <h2 className="md:text-2xl text-xl font-bold text-center text-[#480D35] ">Team Details</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className=" right-4 text-lg lg:text-2xl bg-green-500 hover:bg-green-600 transition-colors rounded-full p-1"
              title="Add New"
            >
              <FaPlus style={{color:"#fff"}}/>
            </button>
          </div>
          <div className="flex overflow-x-auto">
            <table className="min-w-full min-h-full divide-gray-300 bg-gray-200 shadow-md">
              <thead className=" text-white">
                <tr className="lg:rounded bg-gradient-to-r from-[#00175f] to-[#480D35]">
                  <th className="relative py-3 px-4 lg:rounded-l-lg text-left text-xs font-semibold uppercase tracking-wider">
                    Under
                    <button
                        onClick={() => setShowUnderDropdown(!showUnderDropdown)}
                        className="ml-2 text-white"
                      >
                        {showUnderDropdown? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {showUnderDropdown && (
                        <div className="absolute mt-1 bg-white h-[74px] hover:overflow-y-auto custom-scrollbar overflow-y-hidden border rounded shadow-lg">
                           <button
                            onClick={() => handleFilterChange("under", "")}
                            className="block px-4 py-2 text-sm text-start text-gray-700 w-full hover:bg-gray-200"
                          >
                            All
                          </button>
                          {underOptions.map(under => (
                            <button
                              key={under}
                              onClick={() => handleFilterChange("under", under)}
                              className="block px-4 py-2 text-sm text-start text-gray-700 w-full hover:bg-gray-200"
                            >
                              {under}
                            </button>
                          ))}
                        </div>
                      )}
                  </th>
                  <th className=" relative py-3 px-4 flex text-left text-xs font-semibold uppercase tracking-wider">
                    Year
                    <button
                        onClick={() => setShowYearDropdown(!showYearDropdown)}
                        className="ml-2 text-white"
                      >
                        {showYearDropdown? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {showYearDropdown && (
                        <div className="absolute mt-5 bg-white border h-[74px] hover:overflow-y-auto custom-scrollbar overflow-y-hidden rounded shadow-lg">
                          <button
                            onClick={() => handleFilterChange("year", "")}
                            className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                          >
                            All
                          </button>
                          {yearOptions.map(year => (
                            <button
                              key={year}
                              onClick={() => handleFilterChange("year", year)}
                              className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200"
                            >
                              {year}
                            </button>
                          ))}
                          
                        </div>
                      )}
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Captain
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                    Vice Captain
                  </th>
                  <th className="py-3 px-4 lg:rounded-r-lg text-left text-xs font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
                <tr className=" h-2"></tr>
              </thead>
              <tbody className=" divide-y-2 divide-gray-300">
              {paginatedData && paginatedData.length === 0 ? (
                  <tr className="hover:bg-gray-50 h-full lg:rounded-lg bg-white align-middle text-gray-900">
                  <td colSpan={5} className="px-4 py-4 h-20 lg:rounded-lg text-center  whitespace-nowrap text-sm">
                      There is no data available
                  </td>
                  </tr>
                  ):(
                paginatedData.map((item,index) =>
                  <tr
                    key={item.teamId}
                    className=" hover:bg-gray-50 h-full lg:rounded-lg bg-white align-middle"
                  >
                    <td className="py-2 px-4 h-16 lg:rounded-l-lg whitespace-nowrap text-sm text-gray-800 font-bold">
                      {item.under}
                    </td>
                    <td className="py-2 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.year}
                    </td>
                    <td className="py-2 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.captain}
                    </td>
                    <td className="py-2 px-4 h-16 whitespace-nowrap text-sm text-gray-600">
                      {item.viceCaptain}
                    </td>
                    <td className="py-2 px-4 lg:rounded-r-lg space-x-2 h-16 whitespace-nowrap items-center text-sm text-gray-600">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      {/* <button
                        onClick={() => handleDelete(item.teamId)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        <FaTrash />
                      </button> */}
                      <button
                        onClick={() => handleViewMembers(item.teamId)}
                        className="text-green-500 hover:text-green-600 transition-colors"
                        title="Members"
                      >
                        <FaUsers />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
         <div className="flex justify-between w-[95%] items-center p-1 bg-white shadow-md rounded mt-1">
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


         {/* Modal for adding new item */}

        {showDeleteModal && (
          <div className="fixed inset-0 flex justify-center items-center p-5 bg-gray-600 bg-opacity-75">
            <div className="bg-white rounded-3xl shadow-lg lg:p-8 p-5">
              <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
              <p>Are you sure you want to delete this team?</p>
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
        {isModalOpen &&
          <AddNewModal
            onClose={handleAddFormClose}
            isSubmitted={()=>setIsSubmitted(!isSubmitted)}
          />}

         {/* Edit Modal  */}

        {isEditModalOpen &&
          editItem &&
          <EditModal
            team={editItem}
            onClose={handleEditFormClose}
            isSubmitted={()=>setIsSubmitted(!isSubmitted)}
          />}
          {isTeamMembersOpen &&
          teamId &&
          <TeamMembers
            teamId={teamId}
            onClose={() => setIsTeamMembersOpen(false)}
           
          />}
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
