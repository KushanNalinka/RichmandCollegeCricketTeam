// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [inputs, setInputs] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8800/api/auth/register", inputs);
//       navigate("/login"); // Redirect to login after successful registration
//     } catch (err) {
//       setError("Registration failed. Please try again.");
//       console.error("Registration error:", err); // Log detailed error for debugging
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
//         <h1 className="text-2xl font-bold text-center text-gray-900">Register</h1>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             required
//             type="text"
//             placeholder="Username"
//             name="username"
//             value={inputs.username}
//             onChange={handleChange}
//             className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <input
//             required
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={inputs.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <input
//             required
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={inputs.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <button
//             type="submit"
//             className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             Register
//           </button>
//           {error && <p className="text-sm text-red-500">{error}</p>}
//           <span className="block text-center text-gray-700">
//             Do you have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error("Registration error:", err); // Log detailed error for debugging
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Register</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Username"
            name="username"
            value={inputs.username}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <span className="block text-center text-gray-700">
            Do you have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
