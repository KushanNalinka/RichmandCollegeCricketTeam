

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Admin = () => {
//   const [admins, setAdmins] = useState([]);
//   const [newAdmin, setNewAdmin] = useState({ username: '', email: '', password: '' });
//   const [editAdminId, setEditAdminId] = useState(null);
//   const [editAdminData, setEditAdminData] = useState({ username: '', email: '', password: '' });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const API_URL = process.env.REACT_APP_API_URL; // Make sure this is defined in your environment

//   useEffect(() => {
//     // Check if main admin is logged in
//     const savedUserData =
//       localStorage.getItem('userData') || sessionStorage.getItem('userData');
//     if (!savedUserData) {
//       navigate('/not-authorized');
//       return;
//     }
//     const { username, roles, token } = JSON.parse(savedUserData);

//     if (username !== 'admin01' || !roles.includes('ROLE_ADMIN')) {
//       navigate('/not-authorized');
//       return;
//     }

//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


//     fetchAdmins();
//   }, [navigate]);

//   const fetchAdmins = async () => {
//     try {
//         const response = await axios.get(`${API_URL}admin/all`);

//       setAdmins(response.data);
//     } catch (error) {
//       console.error(error);
//       setMessage('Failed to load admins');
//     }
//   };

//   const handleCreateAdmin = async (e) => {
//     e.preventDefault();
//     try {
//       // Hardcode roles as ["ROLE_ADMIN"]
//       const payload = {
//         ...newAdmin,
//         roles: ["ROLE_ADMIN"],
//       };
//       const response = await axios.post(`${API_URL}auth/signup`, payload);

//       setMessage(response.data.message);
//       setNewAdmin({ username: '', email: '', password: '' });
//       fetchAdmins();
//     } catch (error) {
//       console.error(error);
//       setMessage(error.response?.data?.message || 'Error creating admin');
//     }
//   };

//   const startEditing = (admin) => {
//     setEditAdminId(admin.id);
//     setEditAdminData({ username: admin.username, email: admin.email, password: '' });
//   };

//   const handleEditAdmin = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await axios.put(`${API_URL}admin/${editAdminId}`, editAdminData);

//       setMessage(response.data.message);
//       setEditAdminId(null);
//       fetchAdmins();
//     } catch (error) {
//       console.error(error);
//       setMessage(error.response?.data?.message || 'Error updating admin');
//     }
//   };

//   const handleDeleteAdmin = async (id) => {
//     if (window.confirm('Are you sure you want to delete this admin?')) {
//       try {
//         const response = await axios.delete(`${API_URL}admin/${id}`);

//         setMessage(response.data.message);
//         fetchAdmins();
//       } catch (error) {
//         console.error(error);
//         setMessage('Error deleting admin');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Management</h1>

//         {message && (
//           <div className="mb-4 p-4 rounded bg-blue-100 text-blue-800 border border-blue-200">
//             {message}
//           </div>
//         )}

//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Existing Admins</h2>
//         <div className="overflow-x-auto rounded-lg shadow">
//           <table className="min-w-full bg-white">
//             <thead className="border-b bg-gray-100">
//               <tr>
//                 <th className="py-3 px-4 text-left font-medium text-gray-700">Username</th>
//                 <th className="py-3 px-4 text-left font-medium text-gray-700">Email</th>
//                 <th className="py-3 px-4 text-left font-medium text-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {admins.map((admin) => (
//                 <tr key={admin.id} className="border-b hover:bg-gray-50">
//                   <td className="py-3 px-4 text-gray-800">{admin.username}</td>
//                   <td className="py-3 px-4 text-gray-800">{admin.email}</td>
//                   <td className="py-3 px-4 flex space-x-2">
//                     <button
//                       onClick={() => startEditing(admin)}
//                       className="px-3 py-1 bg-[#012D5E] text-white text-sm rounded hover:bg-indigo-700 transition"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteAdmin(admin.id)}
//                       className="px-3 py-1 bg-[#4A0D34] text-white text-sm rounded hover:bg-red-700 transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {editAdminId && (
//           <div className="my-6 p-6 bg-white rounded-lg shadow space-y-4">
//             <h3 className="text-xl font-semibold text-gray-800">Edit Admin</h3>
//             <form onSubmit={handleEditAdmin} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Username:</label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   value={editAdminData.username}
//                   onChange={(e) =>
//                     setEditAdminData({ ...editAdminData, username: e.target.value })
//                   }
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email:</label>
//                 <input
//                   type="email"
//                   className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   value={editAdminData.email}
//                   onChange={(e) =>
//                     setEditAdminData({ ...editAdminData, email: e.target.value })
//                   }
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Password (leave blank if unchanged):
//                 </label>
//                 <input
//                   type="password"
//                   className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   value={editAdminData.password}
//                   onChange={(e) =>
//                     setEditAdminData({ ...editAdminData, password: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//                 >
//                   Update Admin
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setEditAdminId(null)}
//                   className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         <h2 className="text-2xl font-semibold text-gray-700 mt-10 mb-4">Add New Admin</h2>
//         <div className="p-6 bg-white rounded-lg shadow space-y-4">
//           <form onSubmit={handleCreateAdmin} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Username:</label>
//               <input
//                 type="text"
//                 required
//                 className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 value={newAdmin.username}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email:</label>
//               <input
//                 type="email"
//                 required
//                 className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 value={newAdmin.email}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Password:</label>
//               <input
//                 type="password"
//                 required
//                 className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 value={newAdmin.password}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
//               />
//             </div>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-[#012D5E] text-white font-semibold rounded hover:bg-blue-700 transition"
//             >
//               Create Admin
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;


import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

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

import { useNavigate } from 'react-router-dom';

import { message } from "antd";
import EditSubAdminsForm from "../components/EditSubAdminsForm";
import SubAdminForm from "../components/SubAdminForm";



const Admin= () => {
  const [adminData, setadminData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [currentadmin, setCurrentadmin] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const divRef = useRef(null);

    const [admins, setAdmins] = useState([]);
    const [newAdmin, setNewAdmin] = useState({ username: '', email: '', password: '' });
    const [editAdminId, setEditAdminId] = useState(null);
    const [editAdminData, setEditAdminData] = useState({ username: '', email: '', password: '' });
   
    const navigate = useNavigate();
  // State to store the height
  const [divHeight, setDivHeight] = useState(0);


//    useEffect(() => {
//       // Check if main admin is logged in
//       const savedUserData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
//       if (!savedUserData) {
//         navigate('/not-authorized');
//         return;
//       }
//       const { username, roles, token } = JSON.parse(savedUserData);
  
//       if (username !== 'admin01' || !roles.includes('ROLE_ADMIN')) {
//         navigate('/not-authorized');
//         return;
//       }
  
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      
//     fetchAdmins();
//   }, [navigate]);

  useEffect(() => {
    // Fetch player data for playerId 4
    setUploading(true);
    axios
      .get(`${API_URL}admin/all`)
      .then(response => {
        const admins = response.data;
        setUploading(false);
        const sortedAdmins = admins.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn));
        console.log('Fetched Admin Data:', response.data);
        setadminData(sortedAdmins);
      })
      .catch(error => {
        console.error("There was an error fetching the admin data!", error);
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

  const handleEdit = admin => {
    setCurrentadmin(admin);
    setIsEditFormOpen(true);
  };

  // Calculate total pages
  const totalPages = Math.ceil(adminData.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = adminData.slice(
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
    setAdminToDelete(id)
;
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDelete = async () => {
    setUploading(true);
    try {
      console.log("Delete admins: ", adminToDelete);
      const response = await axios.delete(`${API_URL}admin/${adminToDelete}`);
     message.success('Successfully deleted' );
    
      
      setShowDeleteModal(false);
      setIsDeleted(!isDeleted);
    } catch (error) {
      console.error("Error deleting admin:", error);
  
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
                Admin Details
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
                     Admin
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                    UserName
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                     Email
                    </th>
                    
                    <th className="px-2 py-3 text-left text-xs font-bold uppercase tracking-wider">
                    Contact
                    </th>
                  
                  
                    <th className="px-2 py-3 lg:rounded-r-lg text-left text-xs font-bold uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                  <tr className=" h-2"></tr>
                </thead>
                <tbody className="divide-y-2 divide-gray-300 ">
                {paginatedData.map((admin, index) => (
                    <tr
                    key={index}
                    className="hover:bg-gray-50 h-full lg:rounded-lg bg-white align-middle text-gray-900"
                    >
                    
                    <td className="px-2 py-4 h-14 whitespace-nowrap text-sm lg:rounded-l-lg">
                        {admin.name}
                    </td>
                    <td className="px-2 py-4 h-14 whitespace-nowrap text-sm lg:rounded-l-lg">
                        {admin.username}
                    </td>
                    <td className="px-2 py-4 h-14 whitespace-nowrap text-sm">
                        {admin.email}
                    </td>

                    <td className="px-2 py-4 h-14 whitespace-nowrap text-sm">
                        {admin.contactNo}
                    </td>
                   
                    <td className="px-2 py-4 lg:rounded-r-lg whitespace-nowrap h-14 text-sm space-x-2">
                        <button
                        onClick={() => handleEdit(admin)}
                        className="text-green-500 hover:text-green-600 text-md"
                        aria-label="Edit"
                        title="Edit"
                        >
                        <FaEdit />
                        </button>
                        <button
                        onClick={() => handleDelete(admin.id)}
                        className="text-red-500 hover:text-red-600 text-md"
                        aria-label="Delete"
                        title="Delete"
                        >
                        <FaTrash />
                        </button>
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
              <div className="fixed inset-0 flex justify-center items-center p-5 bg-gray-600 bg-opacity-75">
                <div className="bg-white rounded-3xl shadow-lg lg:p-8 p-5">
                  <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
                  <p>Are you sure you want to delete this admin?</p>
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
          {isFormOpen && <SubAdminForm onClose={handleAddFormClose} isSubmitted={()=>setIsSubmitted(!isSubmitted)}/>}
          {isEditFormOpen &&
            <EditSubAdminsForm
              admin={currentadmin}
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
export default Admin;