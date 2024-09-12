// import React from "react";
// import AnimatedCounter from "./Counter";

// const stats = [
//   { label: "Tennis Courts", value: 14 },
//   { label: "Professional Coaches", value: 37 },
//   { label: "Club Members", value: 205 },
//   { label: "Worldcups Won", value: 16 },
// ];

// const StatsSection = () => {
//   return (
//     <div className="flex justify-center items-center py-10 space-x-12 bg-white">
//       {stats.map((stat) => (
//         <div key={stat.label} className="text-center">
//           <div className="text-4xl font-bold text-black">
//             <AnimatedCounter from={0} to={stat.value} />
//           </div>
//           <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatsSection;

import React from "react";
import AnimatedCounter from "./Counter"; // Make sure path is correct

const stats = [
  { label: "Tennis Courts", value: 14 },
  { label: "Professional Coaches", value: 37 },
  { label: "Club Members", value: 205 },
  { label: "Worldcups Won", value: 16 },
];

const StatsSection = () => {
  return (
    <div className="flex justify-center items-center py-10 space-x-28 bg-white">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-8xl font-bold text-black">
            <AnimatedCounter from={0} to={stat.value} />
          </div>
          <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;