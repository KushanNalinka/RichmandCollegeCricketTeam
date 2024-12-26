import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { message } from "antd";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import flag from "../assets/images/backDrop3.png";
import logo from "../assets/images/RLogo.png";
import ball from "../assets/images/CricketBall-unscreen.gif";
import NavbarToggleMenu from "../components/NavbarToggleMenu";
import MainNavbarToggle from "../components/MainNavBarToggle";
import OfficialForm from "../components/OfficialsPopupForm";
import EditOfficialForm from "../components/EditOfficialForm";

const OfficialsTable = () => {
  const [officialData, setOfficialData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentOfficial, setCurrentOfficial] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [officialToDelete, setOfficialToDelete] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem('accessToken');
  const divRef = useRef(null);
  //console.log("access tocken in officials :", user.accessToken);
  //console.log("access tocken in officials :", user.accessToken);

  // State to store the height
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    // Fetch player data for playerId 4
    setUploading(true);
    axios
      .get(`${API_URL}officials/all`,{
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
    }, })
      .then(response => {
        const officials = response.data;
        setUploading(false);
        const sortedOfficials = officials.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn));
        setOfficialData(sortedOfficials);
        console.log("Officials Data:", response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the official data!", error);
      });
  }, [isSubmitted, isDeleted]);

  const updateRowsPerPage = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth >= 1440 && screenHeight >= 900) {
      setRowsPerPage(10); // Desktop screens
    } else if (screenWidth >= 1024 && screenWidth < 1440 && screenHeight >= 600 && screenHeight < 900) {
      setRowsPerPage(8); // Laptop screens
    } else {
      setRowsPerPage(7); // Smaller screens (tablets, mobile)
    }
  };

  useEffect(() => {
    updateRowsPerPage(); // Initial setup
    window.addEventListener('resize', updateRowsPerPage);
    return () => window.removeEventListener('resize', updateRowsPerPage);
  }, []);

  const handleEdit = official => {
    setCurrentOfficial(official);
    setIsEditFormOpen(true);
  };

  // Calculate total pages
  const totalPages = Math.ceil(officialData.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = officialData.slice(
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
    setOfficialToDelete(id);
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    setUploading(true);
    try{
      console.log("Delete Official: ", officialToDelete);
      const deleteOfficial = await axios.delete(
        `${API_URL}officials/delete/${officialToDelete}`,{
          headers: {
              'Authorization': `Bearer ${accessToken}`
      }, }
      );
      message.success("Successfully Deleted!");
      setShowDeleteModal(false);
      setIsDeleted(!isDeleted);
    } catch (error) {
      console.error("Error deleting official:", error);

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

  const handleSaveOfficials = official => {
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
            <div className="flex justify-between items-center content-center mb-3" >
              <NavbarToggleMenu />
              <h2 className="md:text-2xl text-xl font-bold text-center font-popins text-[#480D35]">
                Official Details
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
              <table className="min-w-full bg-gray-200  rounded-t-3xl shadow-md">
                <thead className=" text-white">
                  <tr className="bg-gradient-to-r from-[#00175f] to-[#480D35]">
                    <th className="px-4 py-3 lg:rounded-l-lg text-left text-xs font-bold uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Username
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Contact No
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-2 py-3 lg:rounded-r-lg text-left text-xs font-bold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                  <tr className=" h-2"></tr>
                </thead>
                <tbody className=" divide-y-2 divide-gray-300 ">
                  {paginatedData.map((item, index) =>
                    <tr key={index}
                      className="hover:bg-gray-50 h-full lg:rounded-lg bg-white align-middle text-gray-900">
                      <td className="px-4  py-4 h-14  lg:rounded-l-lg items-center text-wrap whitespace-nowrap text-sm font-bold text-black">
                        
                        {item.name.split(" ").slice(-2).join(" ")}
                      </td>
                      <td className="px-2 py-4 h-14  whitespace-nowrap text-sm ">
                        {item.username}
                      </td>
                      <td className="px-2 py-4 h-14 whitespace-nowrap text-sm " >
                        {item.email}
                      </td>
                      <td className="px-2 py-4 h-14 whitespace-nowrap text-sm ">
                        {item.contactNo}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap h-14 text-sm ">
                        {item.position}
                      </td>
                      <td className="px-2 py-4 lg:rounded-r-lg whitespace-nowrap h-14 text-sm space-x-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-green-500 hover:text-green-600 text-md"
                          aria-label="Edit"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(item.officialId)}
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
              <div className="fixed inset-0 flex justify-center items-center p-5 bg-gray-600 bg-opacity-75">
                <div className="bg-white rounded-3xl shadow-lg lg:p-8 p-5">
                  <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                  <p>Are you sure you want to delete this official?</p>
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
          {isFormOpen && <OfficialForm onClose={handleAddFormClose} isSubmitted={()=>setIsSubmitted(!isSubmitted)}/>}
          {isEditFormOpen &&
            <EditOfficialForm
              official={currentOfficial}
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
export default OfficialsTable;