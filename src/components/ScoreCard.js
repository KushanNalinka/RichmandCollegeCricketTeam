
import React from 'react';
import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly

const ScoreCard = () => {
  return (
    <div className="flex justify-between items-center py-6 px-4 w-full max-w-4xl mx-auto mt-14 mb-14">
      {/* Left Badge */}
      <div className="flex items-center space-x-2">
        <img
          src={leftBadge}
          alt="Left Badge"
          className="w-44 h-44"
        />
      </div>

      {/* Middle Section (Score and Team Info) */}
      <div className="text-center">
        <div className="flex justify-center items-center space-x-2">
          {/* Winning Team */}
          <div className="flex flex-col items-end">
            <span className="text-green-600 text-sm font-bold">WIN</span> {/* WIN Label */}
            
            <span className="text-gray-700 text-lg font-bold mt-4">RICHMOND COLLEGE</span> {/* Team Name */}
          </div>

          {/* Score */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-white bg-[#4A0D34] w-20 h-20 flex items-center justify-center rounded-md">
              21/8
            </span>
            <span className="text-2xl font-bold text-white bg-[#00175F] w-20 h-20 flex items-center justify-center rounded-md">
              16/7
            </span>
          </div>

          {/* Losing Team */}
          <div className="flex flex-col items-start">
            <span className="text-red-600 text-sm font-bold">LOSS</span> {/* LOSS Label */}
            <span className="text-gray-700 text-lg font-bold mt-4">MAHINDA COLLEGE</span> {/* Team Name */}
          </div>
        </div>

        {/* Scoring Play Text */}
        <hr className='mt-6'/>
        <div className="text-gray-500 text-sm mt-4">
          Scoring Play: NU clk 46-yard field goal in Q3, Center J Cardona, Holder B Beringer
        </div>
      </div>

      {/* Right Badge */}
      <div className="flex items-center space-x-2">
        <img
          src={rightBadge}
          alt="Right Badge"
          className="w-44 h-44"
        />
      </div>
    </div>
  );
};

export default ScoreCard;
