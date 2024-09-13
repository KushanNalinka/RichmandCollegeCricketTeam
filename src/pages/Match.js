import React, { useState } from 'react';

const MatchForm = () => {
  const [formData, setFormData] = useState({
    matchName: '',
    time: '',
    venue: '',
    opponent: '',
    tier: '',
    division: '',
    umpire: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Match Details Form</h2>
        
        {/* Match Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Match Name</label>
          <input
            type="text"
            name="matchName"
            value={formData.matchName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Time */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Time</label>
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Venue */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Venue</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Opponent */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Opponent</label>
          <input
            type="text"
            name="opponent"
            value={formData.opponent}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Tier */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Tier</label>
          <input
            type="text"
            name="tier"
            value={formData.tier}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Division */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Division</label>
          <input
            type="text"
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Umpire */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Umpire</label>
          <input
            type="text"
            name="umpire"
            value={formData.umpire}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Type */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="" disabled>Select Match Type</option>
            <option value="Test">Test</option>
            <option value="ODI">ODI</option>
            <option value="T20">T20</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MatchForm;
