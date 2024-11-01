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



// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from '../hooks/UseAuth';


// const Login = () => {
//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
//   });
//   const [err, setError] = useState(null);
//   const [validationError, setValidationError] = useState({});

//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const API_URL = process.env.REACT_APP_API_URL;
//   useEffect(() => {
//     const savedUserData = localStorage.getItem("userData") || sessionStorage.getItem("userData");
//     if (savedUserData) {
//       const { username } = JSON.parse(savedUserData);
//       setInputs((prev) => ({ ...prev, username }));
//       setRememberMe(true); // assume they checked "Remember Me"
//       console.log("Pre-filled username:", username);
//     } else {
//       console.log("No saved user data found.");
//     }
//   }, []);
//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     console.log("Input changed:", e.target.name, e.target.value);

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

//     console.log("Form submitted with values:", inputs);

//     // Perform front-end validations
//     const errors = validateForm();
//     if (Object.keys(errors).length > 0) {
//       setValidationError(errors);

//       console.log("Validation errors:", errors);

//       return;
//     } else {
//       setValidationError({});
//     }
//     try {

//       // API call to backend for sign-in
//       const res = await axios.post(`${API_URL}auth/signin`, inputs);
//       console.log("Response from API:", res.data);
//       const userData = {
//         username: res.data.username,
//         roles: res.data.roles,
//         token: res.data.accessToken,
//         userId: res.data.playerId || res.data.coachId || res.data.officialId ,
//       };
//       // Save token based on Remember Me option
//       if (rememberMe) {
//         localStorage.setItem("userData", JSON.stringify(userData)); // persists even after closing browser
//         console.log("Saved user data to localStorage:", userData);
//       } else {
//         sessionStorage.setItem("userData", JSON.stringify(userData)); // only persists while the session is active
//         console.log("Saved user data to sessionStorage:", userData);
//       }
//       // Check if roles exist to navigate to admin or user dashboard
//       const roles = res.data.roles;

//       console.log("userData In login: ", userData);

//       if (roles.includes("ROLE_ADMIN")) {
//         login("admin", userData);
//         navigate("/player");
//       } else if (roles.includes("ROLE_COACH")) {
//         login("coach", userData);
//         navigate("/member");
//       } else if (roles.includes("ROLE_PLAYER")) {
//         login("player", userData);
//         navigate("/member");
//       } else if (roles.includes("ROLE_OFFICIAL")) {
//         login("official", userData);
//         navigate("/member");

//       } else {
//         setError("Unknown role, please contact support.");
//         return;
//       }

      
//     } catch (err) {
//       // Specific error handling for incorrect username or password
//       if (err.response) {
//         console.error("Error response from API:", err.response);

//         if (err.response.status === 500) {
//           setError("Invalid username or password. Please check your credentials and try again.");
//         } else if (err.response.status === 404) {
//           setError("Username not found. Please register or verify your username.");
//         } else {
//           setError("An unexpected error occurred. Please try again later.");
//         }
//       } else {
//         setError("Network error. Please check your connection and try again.");

//         console.error("Network error:", err);
//       }
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
//                 className={`text-sm mt-1 w-full px-4 py-2 border ${
//                   validationError.username ? "border-red-500" : "border-gray-300"
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
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
//                 className={`mt-1 w-full px-4 py-2 border ${
//                   validationError.password ? "border-red-500" : "border-gray-300"
//                 } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
//               />
//               {validationError.password && <p className="text-sm text-red-500">{validationError.password}</p>}
//             </div>
//             <div className="flex justify-between items-center">
//               <label className="inline-flex items-center">

//                 <input
//                   type="checkbox"
//                   className="form-checkbox text-purple-500"
//                   checked={rememberMe}
//                   onChange={(e) => {
//                     setRememberMe(e.target.checked);
//                     console.log("Remember Me changed:", e.target.checked);
//                   }}
//                 />

//                 <span className="ml-2 text-sm text-gray-600">Remember Me</span>
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 mt-6 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             >
//               Login
//             </button>
//             {/* Display error message */}
//             {err && <p className="text-sm text-red-500 text-center mt-2">{err}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const [err, setError] = useState(null);
  const [validationError, setValidationError] = useState({});

  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const savedUserData = localStorage.getItem("userData") || sessionStorage.getItem("userData");
    if (savedUserData) {
      const { username } = JSON.parse(savedUserData);
      setInputs((prev) => ({ ...prev, username }));
      setRememberMe(true); // assume they checked "Remember Me"
      console.log("Pre-filled username:", username);
    } else {
      console.log("No saved user data found.");
    }
  }, []);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("Input changed:", e.target.name, e.target.value);

  };
  const validateForm = () => {
    const errors = {};
    if (!inputs.username) {
      errors.username = "Username is required.";
    }
    if (!inputs.password) {
      errors.password = "Password is required.";
    } else if (inputs.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    dispatch({ type: "LOGIN_START" });
    console.log("Form submitted with values:", inputs);

    // Perform front-end validations
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationError(errors);

      console.log("Validation errors:", errors);

      return;
    } else {
      setValidationError({});
    }
    try {

      // API call to backend for sign-in
      const res = await axios.post(`${API_URL}auth/signin`, inputs);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log("Response from API:", res.data);
      const userData = {
        username: res.data.username,
        roles: res.data.roles,
        token: res.data.accessToken,
        userId: res.data.playerId || res.data.coachId || res.data.officialId ,
      };
      // Save token based on Remember Me option
      if (rememberMe) {
        localStorage.setItem("userData", JSON.stringify(userData)); // persists even after closing browser
        console.log("Saved user data to localStorage:", userData);
      } else {
        sessionStorage.setItem("userData", JSON.stringify(userData)); // only persists while the session is active
        console.log("Saved user data to sessionStorage:", userData);
      }
      // Check if roles exist to navigate to admin or user dashboard
      const roles = res.data.roles;

      console.log("userData In login: ", userData);

      if (roles.includes("ROLE_ADMIN")) {
        //login("admin", userData);
        navigate("/player");
      } else if (roles.includes("ROLE_COACH")) {
        //login("coach", userData);
        navigate("/member");
      } else if (roles.includes("ROLE_PLAYER")) {
        //login("player", userData);
        navigate("/member");
      } else if (roles.includes("ROLE_OFFICIAL")) {
       // login("official", userData);
        navigate("/member");

      } else {
        setError("Unknown role, please contact support.");
        return;
      }

      
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      // Specific error handling for incorrect username or password
      if (err.response) {
        console.error("Error response from API:", err.response);

        if (err.response.status === 500) {
          setError("Invalid username or password. Please check your credentials and try again.");
        } else if (err.response.status === 404) {
          setError("Username not found. Please register or verify your username.");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
      } else {
        setError("Network error. Please check your connection and try again.");

        console.error("Network error:", err);
      }
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
          <p className="text-center text-gray-500">Welcome back! Please login to your account.</p>
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
                placeholder="username"
                onChange={handleChange}
                value={inputs.username}
                className={`text-sm mt-1 w-full px-4 py-2 border ${
                  validationError.username ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {validationError.username && <p className="text-sm text-red-500">{validationError.username}</p>}
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
                value={inputs.password}
                className={`mt-1 w-full px-4 py-2 border ${
                  validationError.password ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {validationError.password && <p className="text-sm text-red-500">{validationError.password}</p>}
            </div>
            <div className="flex justify-between items-center">
              <label className="inline-flex items-center">

                <input
                  type="checkbox"
                  className="form-checkbox text-purple-500"
                  checked={rememberMe}
                  onChange={(e) => {
                    setRememberMe(e.target.checked);
                    console.log("Remember Me changed:", e.target.checked);
                  }}
                />

                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Login
            </button>
            {/* Display error message */}
            {err && <p className="text-sm text-red-500 text-center mt-2">{err}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;




