// AuthContext

import Login from "./Login";

// import { createContext, useReducer, useEffect, useState } from "react";

// const INITIAL_STATE =  {
//   user: null,
//   accessToken: null,
//   roles: [],
//   loading: false,
//   error: null,
//   rememberMe: false, // Added "rememberMe" to global state
// };

// export const AuthContext = createContext(INITIAL_STATE);

// const AuthReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return { ...state, loading: true, error: null };
//     case "LOGIN_SUCCESS":
//       return {
//         ...state,
//         user: action.payload.user,
//         accessToken: action.payload.accessToken,
//         roles: action.payload.roles,
//         loading: false,
//         error: null,
//         rememberMe: action.payload.rememberMe,
//       };
//     case "LOGIN_FAILURE":
//       return { ...state, loading: false, error: action.payload };
//     case "LOGOUT":
//       return {
//         user: null,
//         accessToken: null,
//         roles: [],
//         loading: false,
//         error: null,
//         rememberMe: false,
//       };
//     default:
//       return state;
//   }
// };

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true); // To manage loading state

//   // Retrieve user data from localStorage or sessionStorage
//   const savedUserData = sessionStorage.getItem("userData");

//   // Check authentication status and restore user data on component mount
//   useEffect(() => {
//     if (savedUserData) {
//       try {
//         const parsedUserData = JSON.parse(savedUserData);
//         setIsAuthenticated(true);
//         dispatch({
//           type: "LOGIN_SUCCESS",
//           payload: {
//             user: parsedUserData.user,
//             accessToken: parsedUserData.accessToken,
//             roles: parsedUserData.roles,
//             rememberMe: parsedUserData.rememberMe,
//           },
//         });
//         console.log("user logged (useAuth) :", parsedUserData);
//       } catch (error) {
//         console.error("Error parsing user data from storage:", error);
//         setIsAuthenticated(false);
//       }
//     } else {
//       setIsAuthenticated(false);
//     }
//     setLoading(false);
//   }, []);

//   // Login function to set authentication and save user data
//   const login = (userData) => {
//     setIsAuthenticated(true);
//     dispatch({ type: "LOGIN_SUCCESS", payload: userData });

//      // Store user data in localStorage or sessionStorage based on rememberMe flag
//      const storage = userData.rememberMe ? localStorage : sessionStorage;
//      storage.setItem("userDataNew", JSON.stringify(userData));

//   };

//   // Logout function to clear authentication data
//   const logout = () => {
//     setIsAuthenticated(false);
//     dispatch({ type: "LOGOUT" });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         ...state,
//         dispatch,
//         login,
//         logout,
//         isAuthenticated,
//         loading,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };


// Login
// import axios from "axios";
// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [inputs, setInputs] = useState({ username: "", password: "" });
//   const { dispatch, loading, error } = useContext(AuthContext); // Access AuthContext
//   const [localRememberMe, setLocalRememberMe] = useState(false); // Local "Remember Me" state
//   const [validationError, setValidationError] = useState({});
//   const [err, setError] = useState(null);
//   const navigate = useNavigate();

//   const API_URL = process.env.REACT_APP_API_URL;

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!inputs.username) {
//       errors.username = "Username is required.";
//     }
//     if (!inputs.password) {
//       errors.password = "Password is required.";
//     } else if (inputs.password.length < 8) {
//       errors.password = "Password must be at least 8 characters long.";
//     }
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     dispatch({ type: "LOGIN_START" });

//     const errors = validateForm();
//     if (Object.keys(errors).length > 0) {
//       setValidationError(errors);
//       return;
//     } else {
//       setValidationError({});
//     }

//     try {
//       const res = await axios.post(`${API_URL}auth/signin`, inputs);
//       const { username, roles, accessToken, userId, rememberMe } = res.data;

//       const userData = {
//         user: { username, roles, userId },
//         accessToken,
//         roles,
//         rememberMe,
//       };

//       dispatch({ type: "LOGIN_SUCCESS", payload: userData });

//       // Navigate based on roles
//       if (roles.includes("ROLE_ADMIN")) {
//                 //login("admin", userData);
//                 navigate("/player");
//               } else if (roles.includes("ROLE_COACH")) {
//                 //login("coach", userData);
//                 navigate("/member");
//               } else if (roles.includes("ROLE_PLAYER")) {
//                 //login("player", userData);
//                 navigate("/member");
//               } else if (roles.includes("ROLE_OFFICIAL")) {
//                // login("official", userData);
//                 navigate("/member");
//               } else {
//                 setError("Unknown role, please contact support.");
//                 return;
//               }
//       console.log("user logged :", res.data);
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE", payload: err.response?.data || "Login failed" });
//       setError("Invalid username or password.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Section */}
//       <div className="hidden lg:flex w-1/2 bg-gradient-to-r from-[#00175F] to-[#4A0D34] items-center justify-center">
//         <div className="text-white text-center space-y-6">
//           <h1 className="text-5xl font-bold">Welcome Back!</h1>
//           <p className="text-xl">Login to access your account</p>
//         </div>
//       </div>
//       {/* Right Section */}
//       <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
//         <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
//           <h1 className="text-3xl font-bold text-gray-900 text-center">Login</h1>
//           <p className="text-center text-gray-500">Welcome back! Please login to your account.</p>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                 User Name
//               </label>
//               <input
//                 required
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="username"
//                 onChange={handleChange}
//                 value={inputs.username}
//                 className={`text-sm mt-1 w-full px-4 py-2 border ${validationError.username ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012D5E]`}
//               />
//               {validationError.username && <p className="text-sm text-red-500">{validationError.username}</p>}
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 required
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="********"
//                 onChange={handleChange}
//                 value={inputs.password}
//                 className={`mt-1 w-full px-4 py-2 border ${validationError.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#012D5E]`}
//               />
//               {validationError.password && <p className="text-sm text-red-500">{validationError.password}</p>}
//             </div>
//             <div className="flex justify-between items-center">
//               <label className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   className="form-checkbox text-purple-500"
//                   checked={localRememberMe}
//                   onChange={(e) => setLocalRememberMe(e.target.checked)}
//                 />
//                 <span className="ml-2 text-sm text-gray-600">Remember Me</span>
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 mt-6 bg-[#012D5E] text-white font-semibold rounded-lg hover:bg-[#012D5E] focus:outline-none focus:ring-2 focus:ring-[#012D5E]"
//             >
//               Login
//             </button>
//             {err && <p className="text-sm text-red-500 text-center mt-2">{err}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// index 

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import '@fontsource/inter'; // Import Inter font

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { AuthContextProvider } from "./context/AuthContext";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>
// );

// reportWebVitals();
