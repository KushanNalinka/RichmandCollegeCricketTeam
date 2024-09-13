import React from 'react';

const EditModal = ({ item, form, onInputChange, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Edit Team</h3>
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
              className="border border-gray-300 rounded-lg w-full py-2 px-3"
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
              className="border border-gray-300 rounded-lg w-full py-2 px-3"
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
              className="border border-gray-300 rounded-lg w-full py-2 px-3"
              placeholder="Enter captain's name"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
