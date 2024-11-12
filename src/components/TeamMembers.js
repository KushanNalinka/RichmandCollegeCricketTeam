import React, {useEffect, useState} from "react";
import axios from "axios"; 
import { FaTimes } from "react-icons/fa";

const TeamMembers = ({teamId, onClose}) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [members, setMembers] = useState();
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${API_URL}teams/${teamId}/players`); // Update with your API endpoint
        setMembers(response.data);
        console.log("players in team: ",response);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-lg w-full max-h-screen relative">
        <div className="flex justify-end items-center ">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl font-bold text-[#480D35]">Team Members</h2>
        <div className="relative pt-4">
            <div className=" bg-gray-100 custom-scrollbar p-1 hover:overflow-y-auto overflow-hidden max-h-[80vh] rounded-3xl px-5 py-5">
            {members && members.map((member) => (
                <ul key={member.playerId} className="flex items-center mb-2 ">
                <li className="flex items-center justify-center gap-3"><img className="w-10 h-10 rounded-full border border-gray-300 bg-white " alt={member.name} src={member.image}/>{member.name}</li>
                </ul>
                ))}
            </div>
        </div>
    </div>
</div>
  );
};

export default TeamMembers;
