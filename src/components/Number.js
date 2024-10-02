

// import React from "react";
// import AnimatedCounter from "./Counter"; // Make sure path is correct

// const stats = [
//   { label: "Tennis Courts", value: 14 },
//   { label: "Professional Coaches", value: 37 },
//   { label: "Club Members", value: 205 },
//   { label: "Worldcups Won", value: 16 },
// ];

// const StatsSection = () => {
//   return (
//     <div className="flex justify-center items-center py-10 space-x-28 bg-white">
//       {stats.map((stat) => (
//         <div key={stat.label} className="text-center">
//           <div className="text-8xl font-bold text-black">
//             <AnimatedCounter from={0} to={stat.value} />
//           </div>
//           <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatsSection;

// import React from "react";
// import AnimatedCounter from "./Counter"; // Make sure path is correct

// const stats = [
//   { label: "Tennis Courts", value: 14 },
//   { label: "Professional Coaches", value: 37 },
//   { label: "Club Members", value: 205 },
//   { label: "Worldcups Won", value: 16 },
// ];

// const StatsSection = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center py-10 space-y-8 md:space-y-0 md:space-x-28 bg-white">
//       {stats.map((stat) => (
//         <div key={stat.label} className="text-center">
//           <div className="text-5xl md:text-[8rem] font-bold text-black">
//             <AnimatedCounter from={0} to={stat.value} />
//           </div>
//           <p className="text-md md:text-lg text-gray-600 mt-2">{stat.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatsSection;
import React from "react";
import AnimatedCounter from "./Counter"; // Make sure path is correct
import CricketBallIcon from "../assets/images/CricketBall.gif"; // Import the SVG icon

const stats = [
  
  { label: "Big Matches Won", value: 37 },
  { label: "Club Members", value: 205 },
  { label: " Professional Coaches", value: 16 },
];

const StatsSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-10 space-y-8 md:space-y-0 md:space-x-28 bg-white">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center flex flex-col items-center">
          <div className="text-5xl md:text-[8rem] font-bold text-black flex items-center">
            <AnimatedCounter from={0} to={stat.value} />
            <img src={CricketBallIcon} alt="Cricket Ball Icon" className="w-10 h-10 mx-4" /> {/* Cricket ball icon */}
          </div>
          <p className="text-md md:text-lg text-gray-600 mt-2 ">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;

