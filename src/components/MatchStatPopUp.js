import React, { useState, useEffect} from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { message } from 'antd';

const MatchStatPopup = ({ matchId, matchType, onClose }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [isSummaryExists, setIsSummaryExists] = useState(false);
  const initialStatData = {
    inning: matchType === "Test" ? '' : '1',
    oppositionOvers: '',
    runs: '',
    wickets: '',
    overs: '',
    oppositionRuns: '',
    oppositionWickets: '',
    result: '',
    match: {
      matchId: matchId, 
    }
  };
  const [statData, setStatData] = useState(initialStatData);
  const [selectedIning, setSelectedIning] = useState(statData.inning);
  console.log("selected inning normal: ", statData.inning);

  useEffect(() => {
    // Reset statData each time the popup is opened
    if (onClose) {
      setStatData({
        ...initialStatData,
        match: { matchId: matchId || '' }
      });
      setSelectedIning(null);
    }
    if (matchId) {
      setStatData(prevState => ({ ...prevState, match:{matchId:matchId} }));
    }
  }, [onClose, matchType, matchId]);;

  useEffect(() => {
    axios.get(`${API_URL}matchSummary/match/${matchId}`)
        .then(response => {
          const matchSummary = response.data;
          if (matchType === "T20" || matchType === "ODI") {
            if (matchSummary.length > 0) {
              setStatData(...matchSummary); // Set statData with received summary data
              setIsSummaryExists(true);
            } else {
              setStatData(initialStatData); // Use initial statData if no summary data is 
              setIsSummaryExists(false);
            }
            console.log("Match Summary Data:", matchSummary);
          }else if(matchType === "Test"){
            const matchInnings = matchSummary && matchSummary.filter(summary => summary.inning === selectedIning)
            if (matchInnings.length > 0) {
              setStatData(...matchInnings); // Set statData with received summary data
              setIsSummaryExists(true);
            } else {
              setStatData(initialStatData); // Use initial statData if no summary data is available
              setIsSummaryExists(false);
            }
          }
        })
        .catch(error => {
          console.error("Error fetching match summary:", error);
          setStatData(initialStatData); // Use initial statData on error
        });
        console.log("Is summary exists:", isSummaryExists);
  
    if (selectedIning) {
      console.log("Updated selected inning:", selectedIning);
    }
  }, [ matchType, matchId, selectedIning, isSummaryExists]);
  
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
    if( name === "inning"){
      setSelectedIning(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (matchType === "Test" && !statData.inning) {
      message.error("Please select an inning before submitting.");
      return;
    };
    console.log("add :" ,statData); // Log to verify structure before making request

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
      message.error("Failed submit!");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (matchType === "Test" && !statData.inning) {
      message.error("Please select an inning before submitting.");
      return;
    };
    console.log("update: ",statData); // Log to verify structure before making request
    try {
      const response = await axios.put(
        `${API_URL}matchSummary/update/${statData.id}`,
        statData
      );
      message.success("Successfully updated the match Summary!");
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
      message.error("Failed Edit!");
    }
  };

  const handleClose = () =>{
    setIsSummaryExists(false);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <div className='flex justify-end '>
          <button 
              onClick={handleClose} 
              className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
              aria-label="Close"
          >
              <FaTimes/>
          </button>
        </div>
        <h2 className="text-xl font-bold mb-6 text-[#480D35]">Add Match Stat</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-4">
            {
              matchType==="Test"?(
                <div>
                  <label className="block text-black text-sm font-semibold">Inning</label>
                  <select
                    type="text"
                    name="inning"
                    value={statData.inning}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
                  >            
                      <option value="" disabled selected>Select inning</option>
                      <option value="1">1</option> 
                      <option  value="2">2</option>
                  </select>
                </div>
              ):(
                <div>
                  <label className="block text-black text-sm font-semibold">Inning</label>
                  <input
                     type="text"
                     name="inning"
                     value={1}
                     onChange={handleChange}
                     disabled
                     className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
                  />
                </div>
              )
            }
            
            <div>
              <label className="block text-black text-sm font-semibold">Overs</label>
              <input
                type="number"
                name="overs"
                value={statData.overs}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
            </div>
            <div>
              <label className="block text-black text-sm font-semibold">Runs</label>
              <input
                type="number"
                name="runs"
                value={statData.runs}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
            </div>
            <div>
              <label className="block text-black text-sm font-semibold">Wickets</label>
              <input
                type="number"
                name="wickets"
                value={statData.wickets}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-black text-sm font-semibold">opposition Overs</label>
              <input
                type="number"
                name="oppositionOvers"
                value={statData.oppositionOvers}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
            </div>
            <div>
              <label className="block text-black text-sm font-semibold">Opposition Runs</label>
              <input
                type="number"
                name="oppositionRuns"
                value={statData.oppositionRuns}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
            </div>
            <div>
              <label className="block text-black text-sm font-semibold">Opposition Wickets</label>
              <input
                type="number"
                name="oppositionWickets"
                value={statData.oppositionWickets}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
            </div>
           
            {(matchType==="Test" && selectedIning==="1")?(
                   <div>
                   <label className="block text-black text-sm font-semibold">Result</label>
                   <input
                     type="text"
                     name="result"
                     value={statData.result}
                     onChange={handleChange}
                   
                     placeholder="This is restricted for inning 1."
                     className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                   />
                 </div>
                ):(
                  <div>
                  <label className="block text-black text-sm font-semibold">Result</label>
                  <input
                    type="text"
                    name="result"
                    value={statData.result}
                    onChange={handleChange}
                    required
                    placeholder="Victory for college A by X runs."
                    className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                  />
                </div>
                )}
          </div>
          {isSummaryExists?(
              <div className="flex justify-end space-x-4 pt-4 col-span-2">
                <button
                  onClick={handleUpdate}
                  type="submit"
                  className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
                >
                  Update
                </button>
              </div>
            ):(
              <div className="flex justify-end space-x-4 pt-4 col-span-2">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
                >
                  Submit
                </button>
              </div>
            )
          }
        </form>
      </div>
    </div>
  );
};

export default MatchStatPopup;
