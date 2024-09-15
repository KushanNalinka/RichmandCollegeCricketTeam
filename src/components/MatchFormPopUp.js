// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';

// const FormPopup = ({ isOpen, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     matchName: '',
//     time: '',
//     venue: '',
//     opponent: '',
//     tier: '',
//     division: '',
//     umpire: '',
//     type: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div
//       className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">Add Match Details</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-600 hover:text-gray-800 text-2xl"
//           >
//             <FaTimes />
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block mb-2 text-gray-700">Match Name</label>
//               <input
//                 type="text"
//                 name="matchName"
//                 value={formData.matchName}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Time</label>
//               <input
//                 type="datetime-local"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Venue</label>
//               <input
//                 type="text"
//                 name="venue"
//                 value={formData.venue}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Opponent</label>
//               <input
//                 type="text"
//                 name="opponent"
//                 value={formData.opponent}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Tier</label>
//               <input
//                 type="text"
//                 name="tier"
//                 value={formData.tier}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Division</label>
//               <input
//                 type="text"
//                 name="division"
//                 value={formData.division}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Umpire</label>
//               <input
//                 type="text"
//                 name="umpire"
//                 value={formData.umpire}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700">Type</label>
//               <input
//                 type="text"
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mt-6 flex justify-end">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-4"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//             >
//               Add Match
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormPopup;
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const FormPopup = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    matchName: '',
    time: '',
    venue: '',
    opponent: '',
    tier: '',
    division: '',
    umpire: '',
    type: 'Test', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#480D35]">Add Match Details</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            <FaTimes />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
       
            <div>
              <label className="block mb-2 text-gray-700">Match Name</label>
              <input
                type="text"
                name="matchName"
                value={formData.matchName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Time</label>
              <input
                type="datetime-local"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Venue</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Opponent</label>
              <input
                type="text"
                name="opponent"
                value={formData.opponent}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Tier</label>
              <input
                type="text"
                name="tier"
                value={formData.tier}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Division</label>
              <input
                type="text"
                name="division"
                value={formData.division}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Umpire</label>
              <input
                type="text"
                name="umpire"
                value={formData.umpire}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="Test">Test</option>
                <option value="ODI">ODI</option>
                <option value="T20">T20</option>
              </select>
            </div>
       
          <div className='col-span-2 mt-4'>
            <button
              type="submit"
              className="bg-[#480D35] hover:bg-[#5D1245] text-white px-4 py-2 w-full rounded-lg"
            >
              Add Match
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
