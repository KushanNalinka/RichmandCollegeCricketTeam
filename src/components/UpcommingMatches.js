import React from "react";

const MatchTable = () => {
  const matches = [
    {
      date: "09/19/2024",
      time: "8:30 A.M.",
      team1: "RICH",
      team2: "MAHI",
      venue: "Richmond Cricket Ground",
      team1Logo: "https://path-to-rich-logo.com/logo.png",
      team2Logo: "https://path-to-mahi-logo.com/logo.png",
    },
    // Add more matches as needed
  ];

  return (
    <div className="w-full p-6">
      {/* Title */}
      <h1 className="text-6xl font-bold tracking-wide text-center text-blue-900 relative">
        MATCHES
        <span className="block text-4xl mt-2 text-blue-600 absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-10">UPCOMING</span>
      </h1>

      {/* Table */}
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Match</th>
              <th className="px-4 py-2 text-left">Venue</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {matches.map((match, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="px-4 py-4 bg-blue-50">{match.date}</td>
                <td className="px-4 py-4 bg-blue-50">{match.time}</td>
                <td className="px-4 py-4 bg-blue-50 flex items-center">
                  <img
                    src={match.team1Logo}
                    alt={`${match.team1} logo`}
                    className="w-6 h-6 mr-2"
                  />
                  {match.team1}
                  <span className="mx-2">vs</span>
                  <img
                    src={match.team2Logo}
                    alt={`${match.team2} logo`}
                    className="w-6 h-6 mr-2"
                  />
                  {match.team2}
                </td>
                <td className="px-4 py-4 bg-blue-50">{match.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchTable;
