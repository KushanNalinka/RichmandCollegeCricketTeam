import React, { useState } from 'react';
import backgroundImage from '../assets/images/Trophy.png'; // Update the path to your image


const ResultsTable = ({ matchId }) => {
  const [currentTable, setCurrentTable] = useState('batsmen'); // State to toggle between Batsmen and Bowlers tables

  const batsmen = [
    
  ];

  // Sample bowlers data
  const bowlers = [
   

  ];

  // Constants for extras and total
  const EXTRAS = 12;
  const TOTAL = "192/6 (20 overs)";

  // Function to handle table switch
  const toggleTable = () => {
    setCurrentTable(currentTable === 'batsmen' ? 'bowlers' : 'batsmen');
  };

  return (
    <div
      className="flex justify-end w-full h-auto md:h-[500px] py-4"

      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Scorecard Section (right-aligned with fixed height on large screens) */}
      <div className="w-full md:w-3/5 p-4 md:p-6 py-8 mr-0 md:mr-12">
        {/* Additional Sections */}
        
        <div className="p-6 max-w-screen-xl mx-auto mt-5">
          {/* Top Bar */}
           
          <div className="flex items-center justify-between bg-gray-300 p-2 rounded-t-lg shadow-md">
            <div className="flex items-center">
              <select
                className="px-3 py-1 bg-gray-100 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-64 text-xs"
                defaultValue="1st Inning"
              >
                <option value="1st INNING">1st Inning</option>
                <option value="2nd INNING">2nd Inning</option>
              </select>
            </div>
            <div className="text-gray-700 font-medium text-sm">
              180/5 (15.4 overs)
            </div>
          </div>

          {/* Batsmen or Bowlers Table */}
          <div className="table-container overflow-x-auto overflow-y-auto mb-8 h-72">
            {currentTable === 'batsmen' ? (
              <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
                <thead className="bg-[#4A0D34] text-white">
                  <tr>
                    <th className="px-2 py-2 text-left text-xs font-medium uppercase tracking-wider">BATTING</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">R</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">B</th>
                   
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">4s</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">6s</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">50</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">100</th>
                    <th className="px-2 py-2 text-center text-xs font-medium uppercase tracking-wider">SR</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {batsmen.map((batsman, index) => (
                    <tr key={index}>
                      <td className="px-2 py-2 text-sm font-medium text-gray-900">{batsman.name}</td>
                      <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.runs}</td>
                      <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.balls}</td>
                     
                      <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.fours}</td>
                      <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.sixes}</td>
                      <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.fifty}</td>
                      <td className="px-2 py-2 text-sm text-center text-gray-500">{batsman.hundred}</td>
                      <td className="px-2 py-2 text-sm text-center text-gray-500">{}</td>
                    </tr>
                  ))}
                  {/* EXTRAS row */}
                  <tr>
                    <td className="px-2 py-1 text-sm font-medium text-gray-900">EXTRAS</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500" colSpan="8">
                      {EXTRAS}
                    </td>
                  </tr>
                  {/* TOTAL row */}
                  <tr>
                    <td className="px-2 py-1 text-sm font-bold text-gray-900">TOTAL</td>
                    <td className="px-2 py-1 text-sm text-center text-gray-500" colSpan="8">
                      {TOTAL}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
                <thead className="bg-[#4A0D34] text-white">
                  <tr>
                    <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BOWLING</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">O</th>
                   
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">W</th>
                    
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">ECO</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bowlers.map((bowler, index) => (
                    <tr key={index}>
                      <td className="px-2 py-1 text-sm font-medium text-gray-900">{bowler.name}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.overs}</td>
                     
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.runsConceded}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wickets}</td>
                     
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mb-8">
            <button
              className="bg-[#4A0D34] text-white text-sm font-medium px-4 py-2 rounded-lg"
              onClick={toggleTable}
            >
              {currentTable === 'batsmen' ? 'Show Bowlers' : 'Show Batsmen'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;
