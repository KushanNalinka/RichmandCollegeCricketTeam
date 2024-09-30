

// import React from 'react';
// import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
// import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly
// import backgroundImage from '../assets/images/ScoreCardBack.png'; // Background image path

// const ScoreCard = () => {
//   return (
//     <div
//       className="relative w-full h-screen"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Main Score Card */}
//       <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl py-10 px-10 flex justify-between items-center w-[95%]">
//         {/* Left Badge */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={leftBadge}
//             alt="Richmond College Badge"
//             className="w-36 h-36"
//           />
//         </div>

//         {/* Middle Section with inner white div */}
//         <div className="text-center w-1/2">
//           <div className="bg-white rounded-lg shadow-md px-8 py-6">
//             <div className="flex justify-center items-center space-x-8">
//               {/* Winning Team */}
//               <div className="flex flex-col items-end">
//                 <span className="text-blue-600 text-lg font-bold">WIN</span> {/* WIN Label */}
//                 <span className="text-gray-700 text-2xl font-bold mt-2">
//                   RICHMOND
//                 </span>{' '}
//                 {/* Team Name */}
//               </div>

//               {/* Score */}
//               <div className="flex items-center space-x-6">
//                 <span className="text-4xl font-bold text-white bg-[#00175F] w-24 h-24 flex items-center justify-center rounded-lg">
//                   258
//                 </span>
//                 <span className="text-4xl font-bold text-white bg-[#FF0000] w-24 h-24 flex items-center justify-center rounded-lg">
//                   125
//                 </span>
//               </div>

//               {/* Losing Team */}
//               <div className="flex flex-col items-start">
//                 <span className="text-red-600 text-lg font-bold">LOSE</span> {/* LOSS Label */}
//                 <span className="text-gray-700 text-2xl font-bold mt-2">
//                   MAHINDA
//                 </span>{' '}
//                 {/* Team Name */}
//               </div>
//             </div>

//             {/* Optional description or additional information */}
//             <p className="text-gray-500 text-xs mt-6">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry.
//             </p>
//           </div>
//         </div>

//         {/* Right Badge */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={rightBadge}
//             alt="Mahinda College Badge"
//             className="w-36 h-36"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScoreCard;

// import React from 'react';
// import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
// import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly
// import backgroundImage from '../assets/images/ScoreCardBack.png'; // Background image path

// const ScoreCard = () => {
//   return (
//     <div
//       className="relative w-full h-screen md:h-[80vh] flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Main Score Card */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl py-6 px-4 sm:px-10 md:py-10 md:px-10 flex flex-col md:flex-row justify-between items-center w-[95%] md:w-[90%] lg:w-[80%]">
//         {/* Left Badge */}
//         <div className="flex items-center space-x-2 mb-4 md:mb-0">
//           <img
//             src={leftBadge}
//             alt="Richmond College Badge"
//             className="w-24 h-24 md:w-36 md:h-36"
//           />
//         </div>

//         {/* Middle Section with inner white div */}
//         <div className="text-center w-full md:w-1/2 mb-4 md:mb-0">
//           <div className="bg-white rounded-lg shadow-md px-4 py-4 md:px-8 md:py-6">
//             <div className="flex justify-center items-center space-x-4 md:space-x-8">
//               {/* Winning Team */}
//               <div className="flex flex-col items-end">
//                 <span className="text-blue-600 text-sm md:text-lg font-bold">
//                   WIN
//                 </span>
//                 <span className="text-gray-700 text-lg md:text-2xl font-bold mt-2">
//                   RICHMOND
//                 </span>
//               </div>

//               {/* Score */}
//               <div className="flex items-center space-x-4 md:space-x-6">
//                 <span className="text-2xl md:text-4xl font-bold text-white bg-[#00175F] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg">
//                   258
//                 </span>
//                 <span className="text-2xl md:text-4xl font-bold text-white bg-[#FF0000] w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg">
//                   125
//                 </span>
//               </div>

//               {/* Losing Team */}
//               <div className="flex flex-col items-start">
//                 <span className="text-red-600 text-sm md:text-lg font-bold">
//                   LOSE
//                 </span>
//                 <span className="text-gray-700 text-lg md:text-2xl font-bold mt-2">
//                   MAHINDA
//                 </span>
//               </div>
//             </div>

//             {/* Optional description or additional information */}
//             <p className="text-gray-500 text-xs md:text-sm mt-4 md:mt-6">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             </p>
//           </div>
//         </div>

//         {/* Right Badge */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={rightBadge}
//             alt="Mahinda College Badge"
//             className="w-24 h-24 md:w-36 md:h-36"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScoreCard;


import React from 'react';
import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly

const ScoreCard = () => {
  return (
    <>
    {/* Title Section */}
    <div className="ml-20">
        <p className="text-[48px] italic font-extrabold text-[#4A0D34] stroke-2">RECENT MATCH  RESULTS</p>
      </div>
    
    <div className="w-full h-auto flex flex-col items-center  mt-1">
      

      {/* Main Score Card */}
      <div className="bg-white shadow-lg rounded-xl py-10 px-10 flex justify-between items-center w-[95%] mt-4 mb-8">
        {/* Left Badge */}
        <div className="flex items-center space-x-2">
          <img
            src={leftBadge}
            alt="Richmond College Badge"
            className="w-36 h-36"
          />
        </div>

        {/* Middle Section with inner white div */}
        <div className="text-center w-1/2">
          <div className="bg-white rounded-lg shadow-md px-8 py-6">
            <div className="flex justify-center items-center space-x-8">
              {/* Winning Team */}
              <div className="flex flex-col items-end">
                <span className="text-blue-600 text-lg font-bold">WIN</span> {/* WIN Label */}
                <span className="text-gray-700 text-2xl font-bold mt-2">RICHMOND</span> {/* Team Name */}
              </div>

              {/* Score */}
              <div className="flex items-center space-x-6">
                <span className="text-4xl font-bold text-white bg-[#00175F] w-24 h-24 flex items-center justify-center rounded-lg">258</span>
                <span className="text-4xl font-bold text-white bg-[#FF0000] w-24 h-24 flex items-center justify-center rounded-lg">125</span>
              </div>

              {/* Losing Team */}
              <div className="flex flex-col items-start">
                <span className="text-red-600 text-lg font-bold">LOSE</span> {/* LOSS Label */}
                <span className="text-gray-700 text-2xl font-bold mt-2">MAHINDA</span> {/* Team Name */}
              </div>
            </div>

            {/* Optional description or additional information */}
            <p className="text-gray-500 text-xs mt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>

        {/* Right Badge */}
        <div className="flex items-center space-x-2">
          <img
            src={rightBadge}
            alt="Mahinda College Badge"
            className="w-36 h-36"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default ScoreCard;
