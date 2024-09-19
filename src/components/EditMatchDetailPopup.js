// // src/components/EditPopup.js
// import React, { useState, useEffect } from 'react';

// const EditPopup = ({ isOpen, onClose, onSubmit, matchData }) => {
//   const [formData, setFormData] = useState(matchData);

//   useEffect(() => {
//     setFormData(matchData);
//   }, [matchData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Match Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-6">
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Match Name</label>
//               <input
//                 type="text"
//                 name="matchName"
//                 value={formData.matchName}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Time</label>
//               <input
//                 type="datetime-local"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Venue</label>
//               <input
//                 type="text"
//                 name="venue"
//                 value={formData.venue}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Opponent</label>
//               <input
//                 type="text"
//                 name="opponent"
//                 value={formData.opponent}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Tier</label>
//               <input
//                 type="text"
//                 name="tier"
//                 value={formData.tier}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Division</label>
//               <input
//                 type="text"
//                 name="division"
//                 value={formData.division}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Umpire</label>
//               <input
//                 type="text"
//                 name="umpire"
//                 value={formData.umpire}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Type</label>
//               <input
//                 type="text"
//                 name="type"
//                 value={formData.type}
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
//               Save Changes
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="ml-4 px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditPopup;
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const EditPopup = ({ isOpen, onClose, onSubmit, matchData }) => {
  const [formData, setFormData] = useState({
    matchName: '',
    time: '',
    venue: '',
    opponent: '',
    tier: '',
    division: '',
    umpire: '',
    type: ''
  });

  useEffect(() => {
    if (matchData) {
      setFormData({
        matchName: matchData.matchName || '',
        time: matchData.time || '',
        venue: matchData.venue || '',
        opponent: matchData.opponent || '',
        tier: matchData.tier || '',
        division: matchData.division || '',
        umpire: matchData.umpire || '',
        type: matchData.type || ''
      });
    }
  }, [matchData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
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
        <h2 className="text-xl text-[#480D35] font-bold mb-4">Edit Match</h2>
        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-3'>
      
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Match Name</label>
              <input
                type="text"
                name="matchName"
                value={formData.matchName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Time</label>
              <input
                type="datetime-local"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Venue</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Opponent</label>
              <input
                type="text"
                name="opponent"
                value={formData.opponent}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Tier</label>
              <input
                type="text"
                name="tier"
                value={formData.tier}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Division</label>
              <input
                type="text"
                name="division"
                value={formData.division}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Umpire</label>
              <input
                type="text"
                name="umpire"
                value={formData.umpire}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="px-4 py-2 bg-[#480D35] text-white rounded-md hover:bg-[#5D1245] w-full"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
