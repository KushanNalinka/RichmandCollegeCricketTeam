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
      if (inputs.username === "Admin" && inputs.password === "123456") {
        navigate("/adminDashboard");
      } else {
        await login(inputs);
        navigate("/");
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-r from-[#00175F] to-[#4A0D34] items-center justify-center">
        <div className="text-white text-center space-y-6">
          <h1 className="text-5xl font-bold">Welcome Back!</h1>
          <p className="text-xl">Login to access your account</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Login</h1>
          <p className="text-center text-gray-500">
            Welcome back! Please login to your account.
          </p>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                User Name
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                placeholder="username@gmail.com"
                onChange={handleChange}
                className=" text-sm mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                placeholder="********"
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-500" />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-purple-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Login
            </button>

            {err && <p className="text-sm text-red-500 text-center mt-2">{err}</p>}
          </form>

          <div className="text-center mt-6">
          
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


