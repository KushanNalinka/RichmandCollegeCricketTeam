import React, { useEffect, useState }  from 'react';

import { FaUserShield, FaMoneyCheckAlt, FaHandHoldingHeart, FaUtensils, FaCashRegister } from 'react-icons/fa'; // Import the icons
import { Bar, Line, Pie } from 'react-chartjs-2';
import Navbar from '../components/AdminNavbar';

function AdminDashboard() {
  // Dummy data for charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Users',
        data: [12000, 19000, 3000, 5000, 20000, 30000, 45000],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

 

  const pieChartData = {
    labels: ['Active', 'Inactive', 'Pending'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }
    ]
  };

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    const [totalUsers, setTotalUsers] = useState(0);
    const [activeUserRoles, setActiveUserRoles] = useState(0);
    const [usersWithoutRoles, setUsersWithoutRoles] = useState(0);
    const [userRolesData, setUserRolesData] = useState({
      labels: [],
      datasets: [
        {
          label: 'Number of Users',
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });

    useEffect(() => {
      const fetchTotalUsers = async () => {
        try {
          const response = await fetch('https://localhost:7269/api/Account/total-users');
          const data = await response.json();
          setTotalUsers(data.totalUsers);
        } catch (error) {
          console.error('Error fetching total users:', error);
        }
      };
  
      
      const fetchActiveUserRoles = async () => {
        try {
          const response = await fetch('https://localhost:7269/api/Account/users-per-role');
          const data = await response.json();
          const roleCount = data.length;
          setActiveUserRoles(roleCount);

           // Calculate users without roles
        const usersWithoutRolesCount = data.find(role => role.role === "string")?.userCount || 0;
        setUsersWithoutRoles(usersWithoutRolesCount);
  
          // Prepare chart data
          const labels = data.map(role => role.role);
          const counts = data.map(role => role.userCount);
  
          setUserRolesData({
            labels,
            datasets: [
              {
                label: 'Number of Users',
                data: counts,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          });
        } catch (error) {
          console.error('Error fetching active user roles:', error);
        }
      };
  
  
      fetchTotalUsers();
      fetchActiveUserRoles();
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="flex flex-1">
    {/* Sidebar */}
<aside className="w-64 bg-white-300 shadow-lg">
  <nav className="mt-6">
    <div className="p-4 mb-2 hover:bg-yellow-400 bg-[#24256D] text-white border-b border-gray-400 cursor-pointer rounded-md">
      <a href="#" className="flex items-center">
        <FaUserShield className="text-lg mr-3" /> {/* Admin Dashboard Icon */}
        <span>Admin Dashboard</span>
      </a>
    </div>
    <div className="p-4 mb-2 hover:bg-yellow-400 bg-[#24256D] text-white border-b border-gray-400 cursor-pointer rounded-md">
      <a href="http://localhost:3000/accounts" className="flex items-center">
        <FaMoneyCheckAlt className="text-lg mr-3" /> {/* Accountant Dashboard Icon */}
        <span>Accountant Dashboard</span>
      </a>
    </div>
    <div className="p-4 mb-2 hover:bg-yellow-400 bg-[#24256D] text-white border-b border-gray-400 cursor-pointer rounded-md">
      <a href="http://localhost:3000/food" className="flex items-center">
        <FaHandHoldingHeart className="text-lg mr-3" /> {/* Welfare Dashboard Icon */}
        <span>Welfare Dashboard</span>
      </a>
    </div>
    <div className="p-4 mb-2 hover:bg-yellow-400 bg-[#24256D] text-white border-b border-gray-400 cursor-pointer rounded-md">
      <a href="http://localhost:3000/canteen" className="flex items-center">
        <FaUtensils className="text-lg mr-3" /> {/* Canteen Dashboard Icon */}
        <span>Canteen Dashboard</span>
      </a>
    </div>
    <div className="p-4 hover:bg-yellow-400 bg-[#24256D] text-white cursor-pointer rounded-md">
      <a href="http://localhost:3000/cashier" className="flex items-center">
        <FaCashRegister className="text-lg mr-3" /> {/* Cashier Dashboard Icon */}
        <span>Cashier Dashboard</span>
      </a>
    </div>
  </nav>
</aside>




        {/* Main Content */}
        <main className="flex-1 p-5 bg-blue-100">
         

          <div className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div className="bg-[#24256D] text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold">Total Users</h4>
                <p className="text-4xl font-bold mt-2">{totalUsers.toLocaleString()}</p>
              </div>
              <div className="bg-gray-400 text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold">Active User Roles</h4>
                <p className="text-4xl font-bold mt-2">{activeUserRoles.toLocaleString()}</p>
              </div>
              <div className="bg-[#FFC10C] text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold">Users Without Roles</h4>
                <p className="text-4xl font-bold mt-2">{usersWithoutRoles.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-700">Users Over Time</h4>
                <Line data={lineChartData} />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-700">Number of Users per Role</h4>
                <Bar data={userRolesData} />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-700">User Status</h4>
                <Pie data={pieChartData} />
              </div>
            </div>
          </div>

         
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
