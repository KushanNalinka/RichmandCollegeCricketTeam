import React, { useState, useEffect} from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { message } from 'antd';

const MatchStatPopup = ({ matchId,isOpen, onClose }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [statData, setStatData] = useState({
    inning: '',
    oppositionOvers: '', // Make sure the casing is correct
    runs: '',
    wickets: '',
    overs: '',
    oppositionRuns: '',
    oppositionWickets: '',
    result: '',
    match: {
      matchId: '', // matchId must be a valid existing ID
    }
  });

  useEffect(() => {
    if (matchId) {
        setStatData(prevState => ({ ...prevState, match:{matchId:matchId} }));
    }
  }, [matchId]); 
  console.log("matchId2:", matchId);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setStatData({
        ...statData,
        [mainKey]: {
          ...statData[mainKey],
          [subKey]: value
        }
      });
    } else {
      setStatData({
        ...statData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(statData); // Log to verify structure before making request

    try {
      const response = await axios.post(
        `${API_URL}matchSummary/add`,
        statData
      );
      message.success("Successful!");
      setStatData({
        inning: '',
        oppositionOvers: '', // Make sure the casing is correct
        runs: '',
        wickets: '',
        overs: '',
        oppositionRuns: '',
        oppositionWickets: '',
        result: '',
        match: {
          matchId: '', // matchId must be a valid existing ID
        }
      })
      setTimeout(() => {
          window.location.reload();
        }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className='flex justify-end '>
          <button 
              onClick={onClose} 
              className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
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
              <select
                type="text"
                name="inning"
                value={statData.inning}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md "
              >
                <option value="">Select Status</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">opposition Overs</label>
              <input
                type="number"
                name="oppositionOvers"
                value={statData.oppositionOvers}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
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
                className="w-full px-3 py-2 border rounded-md"
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
                className="w-full px-3 py-2 border rounded-md "
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
                className="w-full px-3 py-2 border rounded-md "
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
                className="w-full px-3 py-2 border rounded-md"
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
                className="w-full px-3 py-2 border rounded-md "
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
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4 pt-4 col-span-2">
          
            <button
              type="submit"
              className="px-4 py-2 bg-[#480D35] hover:bg-opacity-100 bg-opacity-95 text-white w-full rounded-md transition"
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
