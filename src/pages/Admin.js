

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ username: '', email: '', password: '' });
  const [editAdminId, setEditAdminId] = useState(null);
  const [editAdminData, setEditAdminData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL; // Make sure this is defined in your environment

  useEffect(() => {
    // Check if main admin is logged in
    const savedUserData =
      localStorage.getItem('userData') || sessionStorage.getItem('userData');
    if (!savedUserData) {
      navigate('/not-authorized');
      return;
    }
    const { username, roles, token } = JSON.parse(savedUserData);

    if (username !== 'admin01' || !roles.includes('ROLE_ADMIN')) {
      navigate('/not-authorized');
      return;
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


    fetchAdmins();
  }, [navigate]);

  const fetchAdmins = async () => {
    try {
        const response = await axios.get(`${API_URL}admin/all`);

      setAdmins(response.data);
    } catch (error) {
      console.error(error);
      setMessage('Failed to load admins');
    }
  };

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      // Hardcode roles as ["ROLE_ADMIN"]
      const payload = {
        ...newAdmin,
        roles: ["ROLE_ADMIN"],
      };
      const response = await axios.post(`${API_URL}auth/signup`, payload);

      setMessage(response.data.message);
      setNewAdmin({ username: '', email: '', password: '' });
      fetchAdmins();
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || 'Error creating admin');
    }
  };

  const startEditing = (admin) => {
    setEditAdminId(admin.id);
    setEditAdminData({ username: admin.username, email: admin.email, password: '' });
  };

  const handleEditAdmin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.put(`${API_URL}admin/${editAdminId}`, editAdminData);

      setMessage(response.data.message);
      setEditAdminId(null);
      fetchAdmins();
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || 'Error updating admin');
    }
  };

  const handleDeleteAdmin = async (id) => {
    if (window.confirm('Are you sure you want to delete this admin?')) {
      try {
        const response = await axios.delete(`${API_URL}admin/${id}`);

        setMessage(response.data.message);
        fetchAdmins();
      } catch (error) {
        console.error(error);
        setMessage('Error deleting admin');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Management</h1>

        {message && (
          <div className="mb-4 p-4 rounded bg-blue-100 text-blue-800 border border-blue-200">
            {message}
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Existing Admins</h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white">
            <thead className="border-b bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left font-medium text-gray-700">Username</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700">Email</th>
                <th className="py-3 px-4 text-left font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{admin.username}</td>
                  <td className="py-3 px-4 text-gray-800">{admin.email}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button
                      onClick={() => startEditing(admin)}
                      className="px-3 py-1 bg-[#012D5E] text-white text-sm rounded hover:bg-indigo-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteAdmin(admin.id)}
                      className="px-3 py-1 bg-[#4A0D34] text-white text-sm rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editAdminId && (
          <div className="my-6 p-6 bg-white rounded-lg shadow space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Edit Admin</h3>
            <form onSubmit={handleEditAdmin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username:</label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={editAdminData.username}
                  onChange={(e) =>
                    setEditAdminData({ ...editAdminData, username: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                  type="email"
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={editAdminData.email}
                  onChange={(e) =>
                    setEditAdminData({ ...editAdminData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password (leave blank if unchanged):
                </label>
                <input
                  type="password"
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={editAdminData.password}
                  onChange={(e) =>
                    setEditAdminData({ ...editAdminData, password: e.target.value })
                  }
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Update Admin
                </button>
                <button
                  type="button"
                  onClick={() => setEditAdminId(null)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-700 mt-10 mb-4">Add New Admin</h2>
        <div className="p-6 bg-white rounded-lg shadow space-y-4">
          <form onSubmit={handleCreateAdmin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username:</label>
              <input
                type="text"
                required
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={newAdmin.username}
                onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                required
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={newAdmin.email}
                onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                required
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={newAdmin.password}
                onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#012D5E] text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Create Admin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;