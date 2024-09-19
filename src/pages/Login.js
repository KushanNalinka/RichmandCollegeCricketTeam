// import axios from "axios";
// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/authContext";

// const Login = () => {
//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
//   });
//   const [err, setError] = useState(null);

//   const navigate = useNavigate();

//   const { login } = useContext(AuthContext);

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(inputs);
//       navigate("/");
//     } catch (err) {
//       setError(err.response.data);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
//         <h1 className="text-2xl font-bold text-center text-gray-900">Login</h1>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             required
//             type="text"
//             placeholder="Username"
//             name="username"
//             onChange={handleChange}
//             className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <input
//             required
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={handleChange}
//             className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <button
//             type="submit"
//             className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             Login
//           </button>
//           {err && <p className="text-sm text-red-500">{err}</p>}
//           <span className="block text-center text-gray-700">
//             Don't you have an account?{" "}
//             <Link to="/register" className="text-blue-500 hover:underline">
//               Register
//             </Link>
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import backgroundImage from "../assets/images/BG1.png"; // Import the background image

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the username is "Admin" and the password is "123456"
      if (inputs.username === "Admin" && inputs.password === "123456") {
        navigate("/adminDashboard"); // Redirect to the admin dashboard
      } else {
        // If not admin, proceed with normal login
        await login(inputs);
        navigate("/"); // Redirect to home page after login
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image as background
        backgroundSize: "cover", // Cover the whole screen
        backgroundPosition: "center", // Center the image
      }}
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-80 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
          {err && <p className="text-sm text-red-500">{err}</p>}
          <span className="block text-center text-gray-700">
            Don't you have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
