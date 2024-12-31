import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus,FaChevronDown, FaChevronUp } from "react-icons/fa";
import PlayerForm from "../components/PlayerForm";
import EditPlayerForm from "../components/EditPlayerForm";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Navbar from "../components/Navbar";
// import flag from "../assets/images/flagbg.png";
import ball from "../assets/images/CricketBall-unscreen.gif";
import flag from "../assets/images/backDrop3.png";
import NavbarToggleMenu from "../components/NavbarToggleMenu";
import HomeNavbar from "../components/HomeNavbar";
import logo from "../assets/images/RLogo.png";
import MainNavbarToggle from "../components/MainNavBarToggle";
import CoachForm from "../components/CoachFormPopup";
import EditCoachForm from "../components/EditCoachPopup";

const CoachTable = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem('accessToken');
  const [coachData, setCoachData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentCoach, setCurrentCoach] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [coachToDelete, setCoachToDelete] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [filteredCoaches, setFilteredCoaches] = useState([]);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [statusOptions, setStatusOptions] = useState([]);
  const [filters, setFilters] = useState({ status: ''});

  useEffect(() => {
    loadCoaches();
    updateRowsPerPage(); // Initial setup
    window.addEventListener('resize', updateRowsPerPage);
    return () => window.removeEventListener('resize', updateRowsPerPage);
  }, [isSubmitted, isDeleted]);

  const loadCoaches = async () => {
    setUploading(true);
    axios
    .get(`${API_URL}coaches/all`,{
          headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
      }, })
      .then((response) => {
        const coaches = response.data;
        setUploading(false);
        const sortedCoaches = coaches.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn));
        setCoachData(sortedCoaches);
        console.log("All coaches:", coaches);
      })
      .catch((error) => {
        console.error("There was an error fetching the coach data!", error);
      });
  };

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
    const filtered = coachData.filter(coach => {
      return (
        (filters.status ? coach.status === filters.status : true)  
      );
    });
    setFilteredCoaches(filtered);
  }, [filters, coachData]); 

    // Sort players by status before slicing for pagination
  // const sortedPlayerData = [...coachData].sort((a, b) => {
  //   // Move "Active" players to the top
  //   if (a.status === "Active" && b.status !== "Active") return -1;
  //   if (a.status !== "Active" && b.status === "Active") return 1;
  //   return 0;
  // });

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1);
    setShowStatusDropdown(false);
  }; 

  // Calculate total pages
  const totalPages = Math.ceil(filteredCoaches.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = filteredCoaches.slice(
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

  const handleEdit = coach => {
    setCurrentCoach(coach);
    setIsEditFormOpen(true);
  };

  const handleDelete = id => {
    setCoachToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    setUploading(true);
    try{
      const deleteCoach = await axios.delete(`${API_URL}coaches/${coachToDelete}`,{
          headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
      }, });
      message.success("Successfully Deleted!");
      setShowDeleteModal(false);
      setIsDeleted(!isDeleted);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1500);
    } catch (error) {
      console.error("Error deleting coach:", error);

      if (error.response && error.response.data && error.response.data.message) {
        message.error(`Failed to delete: ${error.response.data.message}`);
      } else {
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setUploading(false);
    }
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
      <div className="lg:flex hidden justify-center items-center w-[12%] h-auto "
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
          <div className="flex justify-between items-center content-center mb-3">
            <NavbarToggleMenu />
              <h2 className="md:text-2xl text-xl font-bold font-popins text-[#480D35]">
                Coach Details
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
          <div className="flex overflow-x-auto">
            <table className=" min-w-full divide-gray-30 bg-gray-200 shadow-md">
              <thead className=" text-white">
                <tr className="lg:rounded bg-gradient-to-r from-[#00175f] to-[#480D35]">
                  <th className="pl-4 py-3 relative lg:rounded-l-lg text-left text-xs font-semibold uppercase tracking-wider">
                    STATUS
                    <button onClick={() => setShowStatusDropdown(!showStatusDropdown)} className="ml-2">
                    {showStatusDropdown? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {showStatusDropdown && (
                      <div className="absolute h-[74px] overflow-auto custom-scrollbar mt-1 z-50 bg-white border rounded shadow-lg">
                        <button onClick={() => handleFilterChange("status", "")} className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200">All</button>
                        <button onClick={() => handleFilterChange("status", "Active")} className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200">Active</button>
                        <button onClick={() => handleFilterChange("status", "Inactive")} className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-200">Inactive</button>
                      </div>
                    )}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    COACH
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    DOB
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    EMAIL
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Contact No
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    ADDRESS
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    DESCRIPTION
                  </th>
                  <th className="px-4 py-3 lg:rounded-r-lg text-left text-xs font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
                <tr className=" h-2"></tr>
              </thead>
              <tbody className=" divide-y-2 divide-gray-300">
              {paginatedData && paginatedData.length === 0 ? (
                  <tr className="hover:bg-gray-50 h-full lg:rounded-lg bg-white align-middle text-gray-900">
                  <td colSpan={8} className="px-4 py-4 h-20 lg:rounded-lg text-center  whitespace-nowrap text-sm">
                      There is no data available
                  </td>
                  </tr>
                  ):(
                paginatedData.map((item, index) =>
                  <tr
                    key={item.coachId}
                    className=" hover:bg-gray-50 lg:rounded-lg bg-white h-full align-middle"
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
                          src={`${`http://rcc.dockyardsoftware.com/images/${ item.image ? item.image.split('/').pop() : 'default.jpg'}`}?cacheBust=${Date.now()}`}
                          alt={item.name}
                          className="h-12 w-12 rounded-full object-cover border border-gray-300"
                        />
                        {/* Use truncate or text wrapping for small screens */}
                        <span className="truncate whitespace-nowrap">
                          {item.name.split(' ').slice(-2).join(' ')}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2 h-14  whitespace-nowrap text-sm text-gray-600">
                      {item.dateOfBirth}
                    </td>
                    <td className="px-4 py-4 h-14 whitespace-nowrap text-sm text-gray-600">
                      {item.email}
                    </td>
                    <td className="px-4 py-4 h-14 whitespace-nowrap text-sm text-gray-600">
                      {item.contactNo}
                    </td>
                    <td className="px-4 py-4 h-14 whitespace-nowrap text-sm text-gray-600">
                      {item.address}
                    </td>
                    <td className="px-4 py-4 h-14 whitespace-nowrap text-sm text-gray-600">
                      {item.description}
                    </td>
                    <td className="px-4 py-4 lg:rounded-r-lg whitespace-nowrap h-14 text-sm text-gray-600 space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-green-500 hover:text-green-600 text-md"
                        aria-label="Edit"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      {/* <button
                        onClick={() => handleDelete(item.coachId)}
                        className="text-red-500 hover:text-red-600 text-md"
                        aria-label="Delete"
                        title="Delete"
                      >
                        <FaTrash />
                      </button> */}
                    </td>
                  </tr>
                ))}
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
          <div className="fixed inset-0 flex justify-center p-5 items-center bg-gray-600 bg-opacity-75">
            <div className="bg-white rounded-3xl shadow-lg lg:p-8 p-5">
              <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
              <p>Are you sure you want to delete this coach?</p>
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
        {isFormOpen &&
          <CoachForm onClose={handleAddFormClose} isSubmitted={()=>setIsSubmitted(!isSubmitted)} />}
        {isEditFormOpen &&
          <EditCoachForm
            coach={currentCoach}
            onClose={handleEditFormClose}
            isSubmitted={()=>setIsSubmitted(!isSubmitted)}
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

export default CoachTable;