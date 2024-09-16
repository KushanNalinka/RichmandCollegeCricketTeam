import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import PlayerForm from "../components/PlayerForm";
import EditPlayerForm from "../components/EditPlayerForm";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Navbar from "../components/Navbar";
// import flag from "../assets/images/flagbg.png";
import flag from "../assets/images/backDrop.png";
import NavbarToggleMenu from "../components/NavbarToggleMenu";
import HomeNavbar from "../components/HomeNavbar";

// Sample data
const data = [
  // Sample data here...
  {
    name: "John Doe",
    dob: "1990-01-01",
    email: "john.doe@example.com",
    contactNo: "123-456-7890",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    status: "Active",
    image: "https://static.toiimg.com/photo/104624341/104624341.jpg", // Example image URL
    role: "Player"
  },
  {
    name: "Jane Smith",
    dob: "1992-02-02",
    email: "jane.smith@example.com",
    contactNo: "098-765-4321",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm spin",
    status: "Inactive",
    image: "https://static.toiimg.com/photo/104624442/104624442.jpg", // Example image URL
    role: "Coach"
  },
  {
    name: "Pathum Nissanke",
    dob: "1990-01-01",
    email: "john.doe@example.com",
    contactNo: "123-456-7890",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    status: "Active",
    image: "https://static.toiimg.com/photo/104624341/104624341.jpg", // Example image URL
    role: "Player"
  },
  {
    name: "Rajapakse",
    dob: "1992-02-02",
    email: "jane.smith@example.com",
    contactNo: "098-765-4321",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm spin",
    status: "Inactive",
    image: "https://static.toiimg.com/photo/104624442/104624442.jpg", // Example image URL
    role: "Coach"
  },
  {
    name: "John Doe",
    dob: "1990-01-01",
    email: "john.doe@example.com",
    contactNo: "123-456-7890",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    status: "Active",
    image: "https://static.toiimg.com/photo/104624341/104624341.jpg", // Example image URL
    role: "Player"
  },
  {
    name: "Jane Smith",
    dob: "1992-02-02",
    email: "jane.smith@example.com",
    contactNo: "098-765-4321",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm spin",
    status: "Inactive",
    image: "https://static.toiimg.com/photo/104624442/104624442.jpg", // Example image URL
    role: "Coach"
  },
  {
    name: "Pathum Nissanke",
    dob: "1990-01-01",
    email: "john.doe@example.com",
    contactNo: "123-456-7890",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    status: "Active",
    image: "https://static.toiimg.com/photo/104624341/104624341.jpg", // Example image URL
    role: "Player"
  },
  {
    name: "Rajapakse",
    dob: "1992-02-02",
    email: "jane.smith@example.com",
    contactNo: "098-765-4321",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Left-arm spin",
    status: "Inactive",
    image: "https://static.toiimg.com/photo/104624442/104624442.jpg", // Example image URL
    role: "Coach"
  }
];

const TableComponent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rowsPerPage = 6; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = data.slice(
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

  const handleDelete = index => {
    console.log("Delete row:", index);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSavePlayer = player => {
    // Logic to save player information, including image upload if necessary
    setIsFormOpen(false);
  };

  const handleSaveEditPlayer = player => {
    // Logic to save edited player information, including image upload if necessary
    console.log("Player updated:", player);
    setIsEditFormOpen(false);
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
      <HomeNavbar />
      <div className=" flex relative items-center top-20 p-2 w-full">
        <div className=" lg:w-[5%] ">
          <Navbar />
        </div>
        {/* <div className=" md:w-[85%] w-[100%] lg:mx-3 "> */}
        <div
          className=" h-full relative bg-gray-100 lg:w-[95%] w-[100%] lg:mx-3 lg:px-10 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-lg"
          style={{
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)"
          }}
        >
          <div className="flex justify-between items-center content-center mb-3">
            <NavbarToggleMenu />
              <h2 className="md:text-2xl text-lg font-bold font-popins text-[#480D35]">
                Player Details
              </h2>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-green-700 hover hover:bg-green-600 text-white rounded-full p-1 lg:text-2xl text-lg"
              aria-label="Add"
              title="Add New"
            >
              <FaPlus />
            </button>
          </div>
          <div className="flex overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300 bg-white shadow-md">
              <thead className=" bg-[#480D35] text-white rounded">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    DOB
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Contact No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Batting Style
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Bowling Style
                  </th>
                  {/* <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Image</th> */}
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-300">
                {paginatedData.map((item, index) =>
                  <tr
                    key={index}
                    className=" hover:bg-gray-50 h-full align-middle"
                  >
                    <td className={`px-6 py-4 h-14 whitespace-nowrap text-sm text-gray-600`}>
                      <div
                        className={`flex items-center justify-center h-10 w-10  ${item.status ==
                        "Active"
                          ? "bg-green-300 p-5 rounded-full font-bold text-green-700"
                          : "bg-slate-300 p-5 text-slate-600 font-bold rounded-full"}`}
                      />
                    </td>
                    <td className="flex gap-4 px-4  py-2 items-center text-wrap justify-start whitespace-nowrap text-sm font-bold hover:bg-gray-300 text-gray-900">

                        <img
                          src={item.image}
                          alt={item.name}
                          className=" w-[30%] h-14 rounded-full object-cover border border-gray-300"
                        />
                    
                      
                        {item.name}
                      
                    </td>
                    <td className="px-6 py-4 h-14  whitespace-nowrap text-sm text-gray-600">
                      {item.dob}
                    </td>
                    <td className="px-6 py-4 h-14 whitespace-nowrap text-sm text-gray-600">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 h-14 whitespace-nowrap text-sm text-gray-600">
                      {item.contactNo}
                    </td>
                    <td className="px-6 py-4 h-14 whitespace-nowrap text-sm text-gray-600">
                      {item.battingStyle}
                    </td>
                    <td className="px-6 py-4 h-14 whitespace-nowrap text-sm text-gray-600">
                      {item.bowlingStyle}
                    </td>
                    {/* <td className="px-6 py-4 h-16 whitespace-nowrap">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover border border-gray-300" />
                  </td> */}
                    <td className="px-6 py-4 whitespace-nowrap h-14 text-sm text-gray-600">
                      {item.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap h-14 text-sm text-gray-600 space-x-4">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-green-700 hover:text-green-600 text-md"
                        aria-label="Edit"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-700 hover:text-red-600 text-md"
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
              className="px-1 py-1 text-lg lg:text-2xl bg-green-700 hover:bg-green-600 rounded disabled:bg-gray-300"
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
              className="px-1 py-1 text-lg lg:text-2xl bg-green-700 hover:bg-green-600 rounded disabled:bg-gray-300"
            >
              <GrLinkNext style={{ color: "#fff" }} />
            </button>
          </div>
        </div>
        {isFormOpen &&
          <PlayerForm closeForm={() => setIsFormOpen(false)} onSave={handleSavePlayer} />}
        {isEditFormOpen &&
          <EditPlayerForm
            player={currentPlayer}
            onClose={() => setIsEditFormOpen(false)}
            onSave={handleSaveEditPlayer}
          />}
      </div>
    </div>
  );
};

export default TableComponent;
