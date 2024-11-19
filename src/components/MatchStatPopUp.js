import React, { useState, useEffect} from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import ball from "./../assets/images/CricketBall-unscreen.gif";
import { message } from 'antd';
import { GiClick } from "react-icons/gi";

const MatchStatPopup = ({ matchId, matchType, onClose, isSubmitted }) => {
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
  const [uploading, setUploading] = useState(false);
  const [statData, setStatData] = useState(initialStatData);
  const [selectedIning, setSelectedIning] = useState(statData.inning);
  const [errors, setErrors] = useState({});
  console.log("selected inning in stat data: ", statData.inning);

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
  }, [onClose, matchType, matchId]);

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
              setStatData({...initialStatData, inning:selectedIning}); // Use initial statData if no summary data is available
              setIsSummaryExists(false);
            }
          }
        })
        .catch(error => {
          console.error("Error fetching match summary:", error);
          setStatData({...initialStatData, inning:selectedIning}); // Use initial statData on error
        });
        console.log("Is summary exists:", isSummaryExists);
  
    if (selectedIning) {
      console.log("Updated selected inning:", selectedIning);
      setStatData({...statData, inning:selectedIning});
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
      setStatData({
        ...statData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (matchType === "Test" && !statData.inning) {
      newErrors.inning = "Inning is required.";
      message.error("Please select an inning before submitting.");
    }
    if (!statData.overs) {
      newErrors.overs = "Overs are required.";
    }
    if (!statData.runs) {
      newErrors.runs = "Runs are required.";
    }
    if (!statData.wickets) {
      newErrors.wickets = "Wickets are required.";
    }
    if (!statData.oppositionOvers) {
      newErrors.oppositionOvers = "Opposition Overs are required.";
    }
    if (!statData.oppositionRuns) {
      newErrors.oppositionRuns = "Opposition Runs are required.";
    }
    if (!statData.oppositionWickets) {
      newErrors.oppositionWickets = "Opposition Wickets are required.";
    }
    if (!(matchType === "Test" && statData.inning === "1") && !statData.result) {
      newErrors.result = "Result is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      message.error("Please fix validation errors before submitting");
      return;
      };
      
      setUploading(true);
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
      isSubmitted();
      // setTimeout(() => {
      //     window.location.reload();
      //   }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);

        if (error.response && error.response.data && error.response.data.message) {
          message.error(`Failed to submit: ${error.response.data.message}`);
        } else {
          message.error("An unexpected error occurred. Please try again later.");
        }
      } finally {
        setUploading(false);
        onClose();
      }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      message.error("Please fix validation errors before submitting");
      return;
    };

    setUploading(true);
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
      isSubmitted();
      // setTimeout(() => {
      //     window.location.reload();
      //   }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);

        if (error.response && error.response.data && error.response.data.message) {
          message.error(`Failed to submit: ${error.response.data.message}`);
        } else {
          message.error("An unexpected error occurred. Please try again later.");
        }
      } finally {
        setUploading(false);
        onClose();
      }
  };

  const handleClose = () =>{
    setIsSummaryExists(false);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto py-10 min-h-screen">
      <div className="flex items-center justify-center">
      <div className={`bg-white ${uploading? "opacity-80": "bg-opacity-100"} p-8 rounded-3xl shadow-lg max-w-xl w-full relative`}>
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
         
            {
              matchType==="Test"?(
                <div className="col-span-1">
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
                  {errors.inning && <p className="text-red-500 text-xs mt-1">{errors.inning}</p>}
                </div>
              ):(
                <div className="col-span-1">
                  <label className="block text-black text-sm font-semibold">Inning</label>
                  <input
                     type="text"
                     name="inning"
                     value={1}
                     onChange={handleChange}
                     disabled
                     className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
                  />
                  {errors.inning && <p className="text-red-500 text-xs mt-1">{errors.inning}</p>}
                </div>
              )
            }
            <p className="col-span-1 md:col-span-2 text-md text-[#480D35] font-semibold">Richmond match stats details</p>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">Overs</label>
              <input
                type="number"
                name="overs"
                min={0}
                value={statData.overs}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
              {errors.overs && <p className="text-red-500 text-xs mt-1">{errors.overs}</p>}
            </div>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">Runs</label>
              <input
                type="number"
                name="runs"
                min={0}
                value={statData.runs}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
              {errors.runs && <p className="text-red-500 text-xs mt-1">{errors.runs}</p>}
            </div>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">Wickets</label>
              <input
                type="number"
                name="wickets"
                min={0}
                value={statData.wickets}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f] "
              />
              {errors.wickets && <p className="text-red-500 text-xs mt-1">{errors.wickets}</p>}
            </div>
            <p className="col-span-1 md:col-span-2 text-md text-[#480D35] font-semibold">Opposition match stats details</p>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">Opposition Overs</label>
              <input
                type="number"
                name="oppositionOvers"
                min={0}
                value={statData.oppositionOvers}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
              {errors.oppositionOvers && <p className="text-red-500 text-xs mt-1">{errors.oppositionOvers}</p>}
            </div>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">Opposition Runs</label>
              <input
                type="number"
                name="oppositionRuns"
                min={0}
                value={statData.oppositionRuns}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
              {errors.oppositionRuns && <p className="text-red-500 text-xs mt-1">{errors.oppositionRuns}</p>}
            </div>
            <div className="col-span-1">
              <label className="block text-black text-sm font-semibold">Opposition Wickets</label>
              <input
                type="number"
                name="oppositionWickets"
                min={0}
                value={statData.oppositionWickets}
                onChange={handleChange}
                required
                className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
              />
              {errors.oppositionWickets && <p className="text-red-500 text-xs mt-1">{errors.oppositionWickets}</p>}
            </div>
           
            {(matchType==="Test" && selectedIning==="1")?(
              <div className="col-span-1 md:col-span-2">
                <label className="block text-black text-sm font-semibold">Result</label>
                  <input
                     type="text"
                     name="result"
                     value={statData.result}
                     onChange={handleChange}
                     readOnly
                     placeholder="This is restricted for inning 1."
                     className="w-full px-3 py-1 border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#00175f]"
                   />
                 </div>
                ):(
                  <div className="col-span-1 md:col-span-2">
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
                      {errors.result && <p className="text-red-500 text-xs mt-1">{errors.result}</p>}
                    </div>
                  )}
          {isSummaryExists?(
              <div className="flex justify-end col-span-1 pt-4 md:col-span-2">
                <button
                  onClick={handleUpdate}
                  type="submit"
                  className="relative bg-gradient-to-r from-[#00175f] to-[#480D35] text-white px-4 py-2 w-full rounded-md before:absolute before:inset-0 before:bg-white/10 hover:before:bg-black/0 before:rounded-md before:pointer-events-none"
                >
                  Update
                </button>
              </div>
            ):(
              <div className="flex justify-end col-span-1 pt-4 md:col-span-2">
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
      {uploading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <img src={ball} alt="Loading..." className="w-20 h-20 bg-transparent" />
        </div>
      )}
    </div>
  );
};

export default MatchStatPopup;
