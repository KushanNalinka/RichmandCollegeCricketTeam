// import React, { useState } from 'react';

// const MatchStatPopup = ({ isOpen, onClose, onSubmit }) => {
//   const [statData, setStatData] = useState({
//     inning: '',
//     captain: '',
//     runs: '',
//     wickets: '',
//     overs: '',
//     oppositionRuns: '',
//     oppositionWickets: '',
//     result: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStatData({ ...statData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(statData);
//     onClose(); // Close the popup after submission
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-xl font-bold mb-4 text-gray-800">Add Match Stat</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Inning</label>
//             <input
//               type="text"
//               name="inning"
//               value={statData.inning}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Captain</label>
//             <input
//               type="text"
//               name="captain"
//               value={statData.captain}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Runs</label>
//             <input
//               type="number"
//               name="runs"
//               value={statData.runs}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Wickets</label>
//             <input
//               type="number"
//               name="wickets"
//               value={statData.wickets}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Overs</label>
//             <input
//               type="number"
//               name="overs"
//               value={statData.overs}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Opposition Runs</label>
//             <input
//               type="number"
//               name="oppositionRuns"
//               value={statData.oppositionRuns}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Opposition Wickets</label>
//             <input
//               type="number"
//               name="oppositionWickets"
//               value={statData.oppositionWickets}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Result</label>
//             <input
//               type="text"
//               name="result"
//               value={statData.result}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MatchStatPopup;
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const MatchStatPopup = ({ isOpen, onClose, onSubmit }) => {
  const [statData, setStatData] = useState({
    inning: '',
    captain: '',
    runs: '',
    wickets: '',
    overs: '',
    oppositionRuns: '',
    oppositionWickets: '',
    result: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatData({ ...statData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(statData);
    onClose(); // Close the popup after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white p-8 pt-2 rounded-lg shadow-lg max-w-lg w-full">
        <div className='flex justify-end '>
          <button 
              onClick={onClose} 
              className="flex relative items-center justify-end h-10 w-10 cursor-pointer text-xl text-gray-600 hover:text-gray-800"
              aria-label="Close"
          >
              <FaTimes/>
          </button>
        </div>
        <h2 className="text-xl font-bold mb-6 text-[#480D35]">Add Match Stat</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Inning</label>
              <input
                type="text"
                name="inning"
                value={statData.inning}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Captain</label>
              <input
                type="text"
                name="captain"
                value={statData.captain}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Runs</label>
              <input
                type="number"
                name="runs"
                value={statData.runs}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Wickets</label>
              <input
                type="number"
                name="wickets"
                value={statData.wickets}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Overs</label>
              <input
                type="number"
                name="overs"
                value={statData.overs}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Opposition Runs</label>
              <input
                type="number"
                name="oppositionRuns"
                value={statData.oppositionRuns}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Opposition Wickets</label>
              <input
                type="number"
                name="oppositionWickets"
                value={statData.oppositionWickets}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Result</label>
              <input
                type="text"
                name="result"
                value={statData.result}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4 pt-4 col-span-2">
          
            <button
              type="submit"
              className="px-4 py-2 bg-[#480D35]  hover:bg-[#5D1245] text-white w-full rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MatchStatPopup;
