// // src/components/ScoreCardPopup.js

// import React, { useState } from 'react';

// const ScoreCardPopup = ({ isOpen, onClose, onSubmit }) => {
//   const [scoreData, setScoreData] = useState({
//     playerName: '',  // New field for player name
//     inning: '',
//     runs: '',
//     wickets: '',
//     overs: '',
//     runConceded: '',
//     fours: '',
//     sixes: '',
//     fifties: '',
//     hundreds: '',
//     balls: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setScoreData({ ...scoreData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(scoreData);
//     onClose();
//     setScoreData({
//       playerName: '',  // Resetting player name
//       inning: '',
//       runs: '',
//       wickets: '',
//       overs: '',
//       runConceded: '',
//       fours: '',
//       sixes: '',
//       fifties: '',
//       hundreds: '',
//       balls: '',
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Score Card</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="mb-4 col-span-2">
//               <label className="block text-gray-700 font-semibold mb-2">Player Name</label>
//               <input
//                 type="text"
//                 name="playerName"
//                 value={scoreData.playerName}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Inning</label>
//               <input
//                 type="text"
//                 name="inning"
//                 value={scoreData.inning}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Runs</label>
//               <input
//                 type="number"
//                 name="runs"
//                 value={scoreData.runs}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Wickets</label>
//               <input
//                 type="number"
//                 name="wickets"
//                 value={scoreData.wickets}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Overs</label>
//               <input
//                 type="text"
//                 name="overs"
//                 value={scoreData.overs}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Run Conceded</label>
//               <input
//                 type="number"
//                 name="runConceded"
//                 value={scoreData.runConceded}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">4s</label>
//               <input
//                 type="number"
//                 name="fours"
//                 value={scoreData.fours}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">6s</label>
//               <input
//                 type="number"
//                 name="sixes"
//                 value={scoreData.sixes}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">50s</label>
//               <input
//                 type="number"
//                 name="fifties"
//                 value={scoreData.fifties}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">100s</label>
//               <input
//                 type="number"
//                 name="hundreds"
//                 value={scoreData.hundreds}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Balls</label>
//               <input
//                 type="number"
//                 name="balls"
//                 value={scoreData.balls}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//           </div>
//           <div className="text-center mt-6">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//             >
//               Submit
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ml-4"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ScoreCardPopup;
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const PlayerFormPopup = ({ isOpen, onClose, onSubmit, matchId }) => {
  const [formData, setFormData] = useState({
    playerName: '',
    runs: '',
    wickets: '',
    overs: '',
    runConceded: '',
    fours: '',
    sixes: '',
    fifties: '',
    hundreds: '',
    balls: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Add Player Statistics</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayerFormPopup;
