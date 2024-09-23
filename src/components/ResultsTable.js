
// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import backgroundImage from '../assets/images/ScoreCardTableBackGroundImage.png'; // Make sure to update the path to your image

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
//       className="flex justify-end w-full h-[500px]  py-4"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//        // backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Scorecard Section (right-aligned with fixed height) */}
//       <div className="w-3/5 p-6 py-8 mr-12">
//         <div className="overflow-hidden relative h-[300px]">
//           <table className="w-full table-auto text-white">
//             <thead className="bg-gray-600">
//               <tr>
//                 <th className="px-4 py-2">BATSMAN</th>
//                 <th className="px-4 py-2">R</th>
//                 <th className="px-4 py-2">B</th>
//                 <th className="px-4 py-2">4s</th>
//                 <th className="px-4 py-2">6s</th>
//                 <th className="px-4 py-2">50</th>
//                 <th className="px-4 py-2">100</th>
//                 <th className="px-4 py-2">SR</th>
//               </tr>
//             </thead>
//             <tbody>
//               {records.slice(currentIndex, currentIndex + recordsPerPage).map((record, idx) => (
//                 <tr key={idx} className="bg-gray-700 text-center">
//                   <td className="px-4 py-2">{record.batsman}</td>
//                   <td className="px-4 py-2">{record.runs}</td>
//                   <td className="px-4 py-2">{record.balls}</td>
//                   <td className="px-4 py-2">{record.fours}</td>
//                   <td className="px-4 py-2">{record.sixes}</td>
//                   <td className="px-4 py-2">{record.fifties}</td>
//                   <td className="px-4 py-2">{record.hundreds}</td>
//                   <td className="px-4 py-2">{record.strikeRate}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Slider controls */}
//           <div className="absolute bottom-0 left-0 w-full flex justify-between p-2">
//             <button
//               onClick={prevPage}
//               className={`text-white p-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={currentIndex === 0}
//             >
//               <FaArrowLeft />
//             </button>
//             <button
//               onClick={nextPage}
//               className={`text-white p-2 ${currentIndex + recordsPerPage >= records.length ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={currentIndex + recordsPerPage >= records.length}
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* Pagination dots */}
//         <div className="flex justify-center mt-4">
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
//   { batsman: 'Player 5', runs: 20, balls: 15, fours: 1, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 133.33 },
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
import backgroundImage from '../assets/images/ScoreCardTableBackGroundImage.png'; // Make sure to update the path to your image

const ScorecardSlider = ({ records }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const recordsPerPage = 6; // Limiting to 6 records (players) per page
  const totalPages = Math.ceil(records.length / recordsPerPage);
  const autoSlideInterval = 2000; // 2 seconds for auto-slide

  const nextPage = () => {
    if (currentIndex + recordsPerPage < records.length) {
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
        <div className="overflow-hidden relative h-auto md:h-[300px]">
          <table className="w-full table-auto text-white text-xs md:text-base">
            <thead className="bg-gray-600">
              <tr>
                <th className="px-2 md:px-4 py-2">BATSMAN</th>
                <th className="px-2 md:px-4 py-2">R</th>
                <th className="px-2 md:px-4 py-2">B</th>
                <th className="px-2 md:px-4 py-2">4s</th>
                <th className="px-2 md:px-4 py-2">6s</th>
                <th className="px-2 md:px-4 py-2">50</th>
                <th className="px-2 md:px-4 py-2">100</th>
                <th className="px-2 md:px-4 py-2">SR</th>
              </tr>
            </thead>
            <tbody>
              {records.slice(currentIndex, currentIndex + recordsPerPage).map((record, idx) => (
                <tr key={idx} className="bg-gray-700 text-center">
                  <td className="px-2 md:px-4 py-2">{record.batsman}</td>
                  <td className="px-2 md:px-4 py-2">{record.runs}</td>
                  <td className="px-2 md:px-4 py-2">{record.balls}</td>
                  <td className="px-2 md:px-4 py-2">{record.fours}</td>
                  <td className="px-2 md:px-4 py-2">{record.sixes}</td>
                  <td className="px-2 md:px-4 py-2">{record.fifties}</td>
                  <td className="px-2 md:px-4 py-2">{record.hundreds}</td>
                  <td className="px-2 md:px-4 py-2">{record.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Slider controls */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between p-2">
            <button
              onClick={prevPage}
              className={`text-white p-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextPage}
              className={`text-white p-2 ${currentIndex + recordsPerPage >= records.length ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentIndex + recordsPerPage >= records.length}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-4">
          {[...Array(totalPages)].map((_, pageIdx) => (
            <span
              key={pageIdx}
              className={`w-6 h-2 mx-1 rounded-full ${currentIndex / recordsPerPage === pageIdx ? 'bg-white' : 'bg-gray-500'}`}
              style={{
                width: currentIndex / recordsPerPage === pageIdx ? '40px' : '6px',
                height: '6px',
                borderRadius: '0',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Example records array for demonstration
const records = [
  { batsman: 'Player 1', runs: 50, balls: 30, fours: 4, sixes: 2, fifties: 1, hundreds: 0, strikeRate: 166.67 },
  { batsman: 'Player 2', runs: 40, balls: 25, fours: 5, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 160 },
  { batsman: 'Player 3', runs: 60, balls: 35, fours: 7, sixes: 3, fifties: 1, hundreds: 0, strikeRate: 171.43 },
  { batsman: 'Player 4', runs: 30, balls: 20, fours: 2, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 150 },
  { batsman: 'Player 5', runs: 20, balls: 15, fours: 1, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 133.33 },
  { batsman: 'Player 6', runs: 35, balls: 22, fours: 3, sixes: 2, fifties: 0, hundreds: 0, strikeRate: 159.09 },
  { batsman: 'Player 7', runs: 25, balls: 17, fours: 2, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 147.06 },
  { batsman: 'Player 1', runs: 50, balls: 30, fours: 4, sixes: 2, fifties: 1, hundreds: 0, strikeRate: 166.67 },
  { batsman: 'Player 2', runs: 40, balls: 25, fours: 5, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 160 },
  { batsman: 'Player 3', runs: 60, balls: 35, fours: 7, sixes: 3, fifties: 1, hundreds: 0, strikeRate: 171.43 },
  { batsman: 'Player 4', runs: 30, balls: 20, fours: 2, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 150 },
  { batsman: 'Player 5', runs: 20, balls: 15, fours: 1, sixes: 1, fifties: 0, hundreds: 0, strikeRate: 133.33 },
  // Add more records if needed
];

const App = () => {
  return (
    <div>
      <ScorecardSlider records={records} />
    </div>
  );
};

export default App;
