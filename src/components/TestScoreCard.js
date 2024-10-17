import React from 'react';
import leftBadge from '../assets/images/RLogo.png'; // Adjust the path accordingly
import rightBadge from '../assets/images/MLogo.png'; // Adjust the path accordingly

const ScoreCard = () => {
  return (
    <>
    {/* Title Section */}
    <div className="ml-20">
        <p className="text-[48px] font-extrabold text-[#00175F] stroke-2">RECENT MATCH  RESULTS</p>
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
                <span className="text-4xl font-bold text-white bg-[#00175F] w-24 h-24 flex items-center justify-center rounded-lg">258/8</span>
                <span className="text-4xl font-bold text-white bg-[#FF0000] w-24 h-24 flex items-center justify-center rounded-lg">125/9</span>
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
