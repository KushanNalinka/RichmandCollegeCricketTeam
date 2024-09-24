

// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import backgroundImage from '../assets/images/ScoreCardTableBackGroundImage.png'; // Update the path to your image

// const ScorecardSlider = ({ records }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const recordsPerPage = 6; // Limiting to 6 records (players) per page
//   const totalPages = Math.ceil(records.length / recordsPerPage);
//   const autoSlideInterval = 2000; // 2 seconds for auto-slide

//   const nextPage = () => {
//     if (currentIndex + recordsPerPage < records.length) {
//       setCurrentIndex(currentIndex + recordsPerPage);
//     } else {
//       setCurrentIndex(0); // If reached the end, start from the beginning
//     }
//   };

//   const prevPage = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - recordsPerPage);
//     }
//   };

//   // Auto-slide effect
//   useEffect(() => {
//     const autoSlide = setInterval(() => {
//       nextPage();
//     }, autoSlideInterval);

//     // Cleanup the interval on component unmount or when currentIndex changes
//     return () => clearInterval(autoSlide);
//   }, [currentIndex]);

//   return (
//     <div
//       className="flex justify-end w-full h-auto md:h-[500px] py-4"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Scorecard Section (right-aligned with fixed height on large screens) */}
//       <div className="w-full md:w-3/5 p-4 md:p-6 py-8 mr-0 md:mr-12">
//         <div className="overflow-hidden relative h-auto md:h-[300px] rounded-lg shadow-lg bg-gray-800">
//           <table className="w-full table-auto text-white text-xs md:text-base rounded-t-lg overflow-hidden">
//             <thead className="bg-gray-700">
//               <tr>
//                 <th className="px-2 md:px-4 py-2">BATSMAN</th>
//                 <th className="px-2 md:px-4 py-2">R</th>
//                 <th className="px-2 md:px-4 py-2">B</th>
//                 <th className="px-2 md:px-4 py-2">4s</th>
//                 <th className="px-2 md:px-4 py-2">6s</th>
//                 <th className="px-2 md:px-4 py-2">50</th>
//                 <th className="px-2 md:px-4 py-2">100</th>
//                 <th className="px-2 md:px-4 py-2">SR</th>
//               </tr>
//             </thead>
//             <tbody>
//               {records.slice(currentIndex, currentIndex + recordsPerPage).map((record, idx) => (
//                 <tr key={idx} className="bg-gray-600 text-center">
//                   <td className="px-2 md:px-4 py-2">{record.batsman}</td>
//                   <td className="px-2 md:px-4 py-2">{record.runs}</td>
//                   <td className="px-2 md:px-4 py-2">{record.balls}</td>
//                   <td className="px-2 md:px-4 py-2">{record.fours}</td>
//                   <td className="px-2 md:px-4 py-2">{record.sixes}</td>
//                   <td className="px-2 md:px-4 py-2">{record.fifties}</td>
//                   <td className="px-2 md:px-4 py-2">{record.hundreds}</td>
//                   <td className="px-2 md:px-4 py-2">{record.strikeRate}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Slider controls - position fixed below the table */}
//           <div className="absolute inset-x-0 bottom-0 flex justify-between px-8 py-2 bg-gray-800">
//             <button
//               onClick={prevPage}
//               className={`text-white p-2 rounded-full bg-gray-700 shadow-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={currentIndex === 0}
//             >
//               <FaArrowLeft size={20} />
//             </button>
//             <button
//               onClick={nextPage}
//               className={`text-white p-2 rounded-full bg-gray-700 shadow-lg ${currentIndex + recordsPerPage >= records.length ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={currentIndex + recordsPerPage >= records.length}
//             >
//               <FaArrowRight size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Pagination dots */}
//         <div className="flex justify-center mt-8">
//           {[...Array(totalPages)].map((_, pageIdx) => (
//             <span
//               key={pageIdx}
//               className={`w-6 h-2 mx-1 rounded-full ${currentIndex / recordsPerPage === pageIdx ? 'bg-white' : 'bg-gray-500'}`}
//               style={{
//                 width: currentIndex / recordsPerPage === pageIdx ? '40px' : '6px',
//                 height: '6px',
//                 borderRadius: '0',
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example records array for demonstration
// const records = [
//   { batsman: 'Player 1', runs: 50, balls: 30, fours: 4, sixes: 2, fifties: 1, hundreds: 0, strikeRate: 166.67 },
//   { batsman: 'Player 2', runs: 40, balls: 25, fours: 5, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 160 },
//   { batsman: 'Player 3', runs: 60, balls: 35, fours: 7, sixes: 3, fifties: 1, hundreds: 0, strikeRate: 171.43 },
//   { batsman: 'Player 4', runs: 30, balls: 20, fours: 2, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 150 },
//   { batsman: 'Player 5', runs: 20, balls: 15, fours: 1, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 133.33 },
//   { batsman: 'Player 6', runs: 35, balls: 22, fours: 3, sixes: 2, fifties: 0, hundreds: 0, strikeRate: 159.09 },
//   { batsman: 'Player 7', runs: 25, balls: 17, fours: 2, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 147.06 },
//   { batsman: 'Player 1', runs: 50, balls: 30, fours: 4, sixes: 2, fifties: 1, hundreds: 0, strikeRate: 166.67 },
//   { batsman: 'Player 2', runs: 40, balls: 25, fours: 5, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 160 },
//   { batsman: 'Player 3', runs: 60, balls: 35, fours: 7, sixes: 3, fifties: 1, hundreds: 0, strikeRate: 171.43 },
//   { batsman: 'Player 4', runs: 30, balls: 20, fours: 2, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 150 },
//   // Add more records if needed
// ];

// const App = () => {
//   return (
//     <div>
//       <ScorecardSlider records={records} />
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import backgroundImage from '../assets/images/ScoreCardTableBackGroundImage.png'; // Update the path to your image

const ScorecardSlider = () => {
  const [currentTable, setCurrentTable] = useState('batsmen'); // State to toggle between Batsmen and Bowlers tables
  const [currentIndex, setCurrentIndex] = useState(0);
  const recordsPerPage = 6; // Limiting to 6 records (players) per page
  const autoSlideInterval = 2000; // 2 seconds for auto-slide

  const batsmen = [
    {
      name: 'Player 1',
      runs: 50,
      balls: 30,
      minutes: 45,
      fours: 4,
      sixes: 2,
      fifty: 1,
      hundred: 0,
      strikeRate: 166.67,
    },
    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },

    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },

    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },

    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },

    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },

    {
      name: 'Player 2',
      runs: 60,
      balls: 35,
      minutes: 50,
      fours: 5,
      sixes: 3,
      fifty: 1,
      hundred: 0,
      strikeRate: 171.43,
    },
  ];

  // Sample bowlers data
  const bowlers = [
    {
      name: 'Bowler 1',
      overs: 4,
      maidens: 0,
      runs: 30,
      wickets: 2,
      noBalls: 1,
      wides: 2,
      economy: 7.5,
      cost: 10,
    },
    {
      name: 'Bowler 2',
      overs: 4,
      maidens: 0,
      runs: 25,
      wickets: 3,
      noBalls: 0,
      wides: 1,
      economy: 6.25,
    },
    {
      name: 'Bowler 2',
      overs: 4,
      maidens: 0,
      runs: 25,
      wickets: 3,
      noBalls: 0,
      wides: 1,
      economy: 6.25,
    },
    {
      name: 'Bowler 2',
      overs: 4,
      maidens: 0,
      runs: 25,
      wickets: 3,
      noBalls: 0,
      wides: 1,
      economy: 6.25,
    },
    {
      name: 'Bowler 2',
      overs: 4,
      maidens: 0,
      runs: 25,
      wickets: 3,
      noBalls: 0,
      wides: 1,
      economy: 6.25,
    },
    {
      name: 'Bowler 2',
      overs: 4,
      maidens: 0,
      runs: 25,
      wickets: 3,
      noBalls: 0,
      wides: 1,
      economy: 6.25,
    },

    

  ];
  // Constants for extras and total
  const EXTRAS = 12;
  const TOTAL = "192/6 (20 overs)";

  // Function to handle table switch
  const toggleTable = () => {
    setCurrentTable(currentTable === 'batsmen' ? 'bowlers' : 'batsmen');
  };

  const nextPage = () => {
    if (currentIndex + recordsPerPage < batsmen.length) {
      setCurrentIndex(currentIndex + recordsPerPage);
    } else {
      setCurrentIndex(0); // If reached the end, start from the beginning
    }
  };

  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - recordsPerPage);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextPage();
    }, autoSlideInterval);

    // Cleanup the interval on component unmount or when currentIndex changes
    return () => clearInterval(autoSlide);
  }, [currentIndex]);

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
        <div className="p-6 max-w-screen-xl mx-auto mt-10">
          {/* Top Bar */}
          <div className="flex items-center justify-between bg-gray-300 p-2 rounded-t-lg shadow-md">
            <div className="flex items-center">
              <select
                className="px-3 py-1 bg-gray-100 rounded-xl border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-64 text-xs"
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
          <div className="overflow-x-auto mb-8">
            {currentTable === 'batsmen' ? (
              <table className="w-full table-auto divide-y divide-gray-300 bg-white border border-gray-200">
                <thead className="bg-[#4A0D34] text-white">
                  <tr>
                    <th className="px-2 py-1 text-left text-xs font-medium uppercase tracking-wider">BATTING</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">B</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">M</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">4s</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">6s</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">50</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">100</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">SR</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {batsmen.map((batsman, index) => (
                    <tr key={index}>
                      <td className="px-2 py-1 text-sm font-medium text-gray-900">{batsman.name}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.runs}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.balls}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.minutes}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.fours}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.sixes}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.fifty}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.hundred}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{batsman.strikeRate}</td>
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
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">M</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">R</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">W</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">NB</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">WD</th>
                    <th className="px-2 py-1 text-center text-xs font-medium uppercase tracking-wider">ECO</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bowlers.map((bowler, index) => (
                    <tr key={index}>
                      <td className="px-2 py-1 text-sm font-medium text-gray-900">{bowler.name}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.overs}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.maidens}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.runs}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wickets}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.noBalls}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.wides}</td>
                      <td className="px-2 py-1 text-sm text-center text-gray-500">{bowler.economy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination and Navigation Arrows */}
          <div className="flex justify-between items-center">
            <button
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={prevPage}
            >
              <FaArrowLeft />
            </button>
            <div>
              <button
                className={`px-4 py-2 rounded-lg ${currentTable === 'batsmen' ? 'bg-blue-500 text-white' : 'bg-gray-300'} mr-2`}
                onClick={() => setCurrentTable('batsmen')}
              >
                Batsmen
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${currentTable === 'bowlers' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => setCurrentTable('bowlers')}
              >
                Bowlers
              </button>
            </div>
            <button
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={nextPage}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorecardSlider;
