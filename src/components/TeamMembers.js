import React from "react";
import { FaTimes } from "react-icons/fa";

const TeamMembers = ({members, onClose}) => {
  
  return (
    <div className="fixed inset-0 pt-16 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white py-5 px-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#480D35]">
            Team Members
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            <FaTimes />
          </button>
        </div>
        <div className="relative">
            <div className="border overflow-auto h-40 border-gray-300 rounded-lg mt-2 px-3 py-2">
            {members.map((member) => (
                <ul key={member.playerId} className="flex items-center mb-2">
                    <li>{member.name}</li>
                </ul>
                ))}
            </div>
        </div>
    </div>
</div>
  );
};

export default TeamMembers;
