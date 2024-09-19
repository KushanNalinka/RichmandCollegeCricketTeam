// src/components/AddNewModal.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const AddNewModal = ({ form, onInputChange, onClose, onAdd }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-8 pt-2 rounded-lg shadow-lg w-full max-w-md">
        <div className='flex justify-end '>
            <button 
              onClick={onClose} 
              className="flex relative items-center justify-end h-10 w-10 cursor-pointer text-xl text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <FaTimes/>
            </button>
          </div>
        <h3 className="text-xl text-[#480D35] font-bold mb-4">Add New Team</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="under">
              Under
            </label>
            <input
              type="text"
              id="under"
              name="under"
              value={form.under}
              onChange={onInputChange}
              className="border border-gray-300 rounded-lg w-full py-2 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter team name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={form.year}
              onChange={onInputChange}
              className="border border-gray-300 rounded-lg w-full py-2 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter year"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="captain">
              Captain
            </label>
            <input
              type="text"
              id="captain"
              name="captain"
              value={form.captain}
              onChange={onInputChange}
              className="border border-gray-300 rounded-lg w-full py-2 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter captain's name"
            />
          </div>
          <div className="flex justify-end space-x-2 ">
            <button
              type="button"
              onClick={onAdd}
              className="bg-[#480D35] text-white w-full py-2 px-4 rounded-lg hover:bg-[#5D1245]"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewModal;
