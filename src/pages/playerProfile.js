// import React, { useState } from 'react';
// import HomeNavbar from '../components/HomeNavbar';
// import Navbar from '../components/Navbar';
// import flag from "../assets/images/flagbg.png";
// import profilePic from "../assets/images/kusal.png"
// import { FaCamera } from 'react-icons/fa';

// const AddPlayer = ({ isOpen, onClose, onSubmit }) => {
//   const [isImageAdded, setIsImageAdded] = useState(false);  
//   const [formData, setFormData] = useState({
//     image:'',
//     firstName: '',
//     lastName: '',
//     age: '',
//     email: '',
//     level: '',
//     phone:''
//   });
  
//   const [imagePreview, setImagePreview] = useState('');

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === 'image') {
//       //isImageAdded(false);  
//       if (files && files[0]) {
//         const file = files[0];
//         setImagePreview(URL.createObjectURL(file));
//         setFormData({
//           ...formData,
//           [name]: file
//         });
//         setIsImageAdded(true);
//       }
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     // Here you should handle file upload to the server
//     console.log('Form Data:', formData);
//     onClose();
//   };

//   return (
//     <div
//         className="h-screen w-screen"
//         style={{
//         backgroundImage: `url(${flag})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center"
//         }}
//         >
//             <HomeNavbar/>
//         <div className=" flex relative top-24 p-2 w-full">
//             <div className="lg:w-[5%]">
//                 <Navbar/>
//             </div>  
//             <div
//                 className="  h-full relative bg-gray-100 lg:w-[95%] b- w-[100%] lg:mx-3 lg:px-20 lg:pt-10 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-lg"
//                 style={{
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//                 border: "1px solid rgba(255, 255, 255, 0.3)"
//             }}
//             >
//             <h1 className='text-2xl font-bold text-[#802F3B]'>Edit Your Profile</h1>    
//             <div className="flex justify-center pt-5 bg-[#802F3B] rounded-xl h-32 items-end mb-6">
//                 <div className='relative flex items-center justify-center top-5 rounded-full w-28 h-28 bg-white '>
//                     {!isImageAdded?
//                          <>
//                          <input 
//                            type="file" 
//                            name="image" 
//                            accept="image/*" 
//                            onChange={handleChange} 
//                            className="absolute opacity-0 w-full h-full cursor-pointer" 
//                            required
//                          />
//                          <FaCamera className="text-4xl text-gray-600 cursor-pointer" />
//                        </>
//                          :imagePreview && 
//                          <div className='w-full h-full flex items-center justify-center' >
//                             <img 
//                             src={imagePreview} 
//                             alt="Image Preview" 
//                             className=" w-24 h-24 rounded-full object-cover border border-gray-300" 
//                             />
//                             <>
//                                 <input 
//                                     type="file" 
//                                     name="image" 
//                                     accept="image/*" 
//                                     onChange={handleChange} 
//                                     className="absolute opacity-0 w-10 h-10 cursor-pointer" 
//                                     required
//                                 />
//                             </>
//                         </div>    
                    
//                     }
                
//                     {/* <img src={profilePic} alt='' className='bg-cover w-24 h-24 rounded-full'/> */}
//                 </div>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <h1 className='text-xl font-bold text-[#802F3B]'>Personal Information</h1>
//                 <div className="grid grid-cols-2 gap-6">
//                     <div>
//                         <label className="block mb-2 text-gray-700">First Name</label>
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-gray-700">Second Name</label>
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={formData.secondName}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-gray-700">Age</label>
//                         <input
//                             type="text"
//                             name="age"
//                             value={formData.age}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-gray-700">Access Level</label>
//                         <input
//                             type="text"
//                             name="level"
//                             value={formData.level}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-gray-700">Email Address</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.age}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block mb-2 text-gray-700">Phone</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             value={formData.level}
//                             onChange={handleChange}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                             required
//                         />
//                     </div>
//                 </div>
//                 <div className="mt-6 flex justify-center items-center">
//                         <button
//                         type="button"
//                         onClick={onClose}
//                         className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-4"
//                         >
//                         Cancel
//                         </button>
//                         <button
//                         type="submit"
//                         className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//                         >
//                         Save
//                         </button>
//                     </div>
//             </form>
//         </div>

//     </div>
            
//         </div>  
//   );
// };

// export default AddPlayer;
import React, { useState } from "react";
import Navbar from "../components/HomeNavbar";
import backgroundImage from "../assets/images/Score_table_back_Image.png";
import playersData from "./PlayersData";
import back from "../assets/images/flag.png";
import PlayerProfileForm from "../components/playerProfileForm";
import flag from "../assets/images/backDrop.png";
import image from "../assets/images/kusal.png";

const PlayerProfile = () => {
  const [isPlayerProfileUpdated, setIsPlayerProfileUpdated] = useState(false);
  // Sort players alphabetically by fullName
  const sortedPlayers = [...playersData].sort((a, b) =>
    a.fullName.localeCompare(b.fullName)
  );
  const [selectedPlayer, setSelectedPlayer] = useState(sortedPlayers[0]);
  const [playerProfile, setPlayerProfile] = useState([
    {
      id: 1,
      image: `${image}`,
      name: "Kusal Mendis",
      dateOfBirth: "1999-07-23",
      age: "29",
      email: "kusal.mendis@gmail.com",
      battingStyle: "Left-side bat",
      bowlingStyle: "Right-side spin",
      role: "All-rounder",
      careerStart: "2024-04-23",
      careerEnd: "",
      contactNumber: "0789089789"
    },
    {
      id: 2,
      image: `${image}`,
      name: "Kusal Mendis",
      dateOfBirth: "1999-07-23",
      age: "29",
      email: "kusal.mendis@gmail.com",
      battingStyle: "Left-side bat",
      bowlingStyle: "Right-side spin",
      role: "All-rounder",
      careerStart: "2024-04-23",
      careerEnd: "",
      contactNumber: "0789089789"
    }
  ]);

  const handleSavePlayerProfile = e => {
    console.log("get Profile:", e);
    setPlayerProfile([
      ...playerProfile,
      {
        ...e,
        id: playerProfile.id + 1
      }
    ]);
    setIsPlayerProfileUpdated(true);
  };

  return (
    <div
      className={` text-white w-full`}
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Navbar */}
      <Navbar />

      <div className="max-w-screen-full pt-32  p-10">
        {!isPlayerProfileUpdated
          ? <div>
              <div className="flex gap-6 w-full items-center lg:px-5 justify-center">
                {/* Player Details */}

                <div
                  className="flex-grow flex-col flex bg p-8 items-center justify-center rounded-lg lg:px-20 bg-white shadow-md ml-18"
                  style={{
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.3)"
                  }}
                >
                  <h1 className="text-2xl self-start p-2 pt-0 text-[#480D35] font-bold">Player Profile</h1>
                  <div
                    className="flex justify-center items-center w-full rounded-xl h-36 px-10 mb-6"
                    style={{
                      backgroundImage: `url(${back})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  >
                    <div className="relative  top-10 rounded-full w-full h-full flex items-center justify-center">
                      <img
                        src={playerProfile[playerProfile.length - 1].image}
                        alt={playerProfile[playerProfile.length - 1].name}
                        className=" w-32 h-32 rounded-full object-cover border bg-white border-gray-300"
                      />
                    </div>
                    <div className="top-24 absolute flex flex-col left-28">
                      <h1 className="text-5xl font-bold">
                        {playerProfile[playerProfile.length - 1].name}
                      </h1>
                      <p className=" text-xl">
                        {playerProfile[playerProfile.length - 1].careerStart} -{" "}
                        {playerProfile[playerProfile.length - 1].careerEnd ||
                          "Present"}
                      </p>
                    </div>

                    {/* <img src={profilePic} alt='' className='bg-cover w-24 h-24 rounded-full'/> */}
                  </div>
                  <div className="bg-gray-100 p-6 w-2/3 self-center rounded-lg">
                    <h2 className="text-xl font-bold mb-4 text-black text-center">
                      Personal Information
                    </h2>
                    {/* Personal Info Table */}
                    <table className="min-w-full bg-gray-100 text-gray-950 rounded-lg">
                      <tbody>
                        <tr className="bg-white rounded-lg border-2">
                          <td className="py-2 px-5 font-semibold">Name:</td>
                          <td className="py-2 px-5">
                            {playerProfile[playerProfile.length - 1].name}
                          </td>
                        </tr>
                        <tr className="bg-white  rounded-lg border-2">
                          <td className="py-2 px-5 font-semibold">
                            Date of Birth:
                          </td>
                          <td className="py-2 px-5">
                            {
                              playerProfile[playerProfile.length - 1]
                                .dateOfBirth
                            }
                          </td>
                        </tr>
                        <tr className="bg-white  rounded-lg border-2">
                          <td className="py-2 px-5 font-semibold ">Email:</td>
                          <td className="py-2 px-5">
                            {playerProfile[playerProfile.length - 1].email}
                          </td>
                        </tr>
                        <tr className="bg-white  rounded-lg border-2">
                          <td className="py-2 px-5 font-semibold ">
                            Contact No:
                          </td>
                          <td className="py-2 px-5">
                            {
                              playerProfile[playerProfile.length - 1]
                                .contactNumber
                            }
                          </td>
                        </tr>
                        <tr className="bg-white  rounded-lg border-2">
                          <td className="py-2 px-5 font-semibold ">
                            Batting Style:
                          </td>
                          <td className="py-2 px-5">
                            {
                              playerProfile[playerProfile.length - 1]
                                .battingStyle
                            }
                          </td>
                        </tr>
                        <tr className="bg-white  rounded-lg border-2">
                          <td className="py-2 px-5 font-semibold ">
                            Bowling Style:
                          </td>
                          <td className="py-2 px-5">
                            {
                              playerProfile[playerProfile.length - 1]
                                .bowlingStyle
                            }
                          </td>
                        </tr>
                        <tr className="bg-white  rounded-lg border-2">
                          <td className="py-2 px-5 font-semibold ">Role:</td>
                          <td className="py-2 px-5">
                            {playerProfile[playerProfile.length - 1].role}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 bg-gray-200 w-full p-6 text-black rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4 text-center">
                      Player Statistics
                    </h2>

                    {/* Batting Stats */}
                    <h3 className="text-lg font-bold mb-4">
                      Batting and Fielding Stats
                    </h3>
                    <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg mb-6">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Format
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Matches
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Innings
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Runs
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Highest Score
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Avg
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            SR
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            100s
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            50s
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            4s
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            6s
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedPlayer.stats.map(stat =>
                          <tr
                            key={stat.format}
                            className="border-b border-gray-300"
                          >
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.format}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.matches}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.innings}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.runs}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.hs}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.avg}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.sr}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat["100s"]}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat["50s"]}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat["4s"]}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat["6s"]}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>

                    {/* Bowling Stats */}
                    <h3 className="text-lg font-bold mb-4">Bowling Stats</h3>
                    <table className="min-w-full text-black bg-gray-100 border border-gray-300 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Format
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Inns
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Overs
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Matches
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Wickets
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Runs Conceded
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Best
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Avg
                          </th>
                          <th className="py-2 px-5 text-center align-middle whitespace-nowrap">
                            Economy Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedPlayer.bowlingStats.map(stat =>
                          <tr
                            key={stat.format}
                            className="border-b bg-white border-gray-300"
                          >
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.format}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.innings}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.overs}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.matches}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.wickets}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.runsConceded}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.best}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.average}
                            </td>
                            <td className="py-2 px-5 text-center align-middle">
                              {stat.economyRate}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          : <PlayerProfileForm onSubmit={handleSavePlayerProfile} />}
        {/* Main Content */}
      </div>
    </div>
  );
};

export default PlayerProfile;

