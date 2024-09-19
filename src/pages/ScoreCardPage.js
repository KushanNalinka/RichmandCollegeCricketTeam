import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Navbar from "../components/Navbar.js";
import NavbarToggleMenu from "../components/NavbarToggleMenu.js";
import { FaEdit, FaTrash } from "react-icons/fa";
// import flag from "../assets/images/flagbg.png";
import flag from "../assets/images/backDrop.png";
import mahindaLogo from "../assets/images/MLogo.png";
import richmandLogo from "../assets/images/RLogo.png";
import thurstanLogo from "../assets/images/thurstanLogo.png";
import HomeNavbar from "../components/HomeNavbar.js";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const ScoreCardPage = () => {
  const { matchId } = useParams(); // Extract matchId from URL parameters
  const [isDropDownPressed, setIsDropDownPressed] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState();
  const [isEditPopupOpen, setIsEditPopupOpen] = useState();
  const [matches, setMatches] = useState([
    {
      id:1,
      matchId: 1,
      matchName: "Match",
      time: "2024-08-29T10:00",
      venue: "Stadium A",
      opponent: "Mahinda College, Galle",
      opponentLogo:mahindaLogo,
      tier: "Tier 1",
      division: "Division A",
      umpire: "John Doe",
      type: "ODI"
    },
    {
      id:2,
      matchId: 2,
      matchName: "Match 2",
      time: "2024-08-30T14:00",
      venue: "Stadium B",
      opponent: "Thurstan College, Colombo",
      opponentLogo:thurstanLogo,
      tier: "Tier 2",
      division: "Division B",
      umpire: "Jane Smith",
      type: "T20"
    },
    {
      id:3,
      matchId: 3,
      matchName: "Match 3",
      time: "2024-08-20T10:00",
      venue: "Stadium A",
      opponent: "Mahinda College, Galle",
      opponentLogo:mahindaLogo,
      tier: "Tier 1",
      division: "Division A",
      umpire: "John Doe",
      type: "ODI"
    },
    {
      id:4,
      matchId: 4,
      matchName: "Match 4",
      time: "2024-07-30T14:00",
      venue: "Stadium B",
      opponent: "Thurstan College, Colombo",
      opponentLogo:thurstanLogo,
      tier: "Tier 2",
      division: "Division B",
      umpire: "Jane Smith",
      type: "T20"
    },
    {
      id:5,
      matchId: 5,
      matchName: "Test Match 2",
      time: "2024-09-20T10:00",
      venue: "Stadium D",
      opponent: "Mahinda College,Galle",
      opponentLogo: mahindaLogo,
      tier: "Tier 1",
      division: "Division A",
      umpire: "Michael Scott",
      type: "Test",
      innings: [
        {
          inningId: 1,
          runs: 200,
          wickets: 5,
        },
        {
          inningId: 2,
          runs: 150,
          wickets: 10,
        },
      ],
    },
    {
      id:6,
      matchId: 6,
      matchName: "Test Match 2",
      time: "2024-09-21T10:00",
      venue: "Stadium D",
      opponent: "Mahinda College, Galle",
      opponentLogo: mahindaLogo,
      tier: "Tier 1",
      division: "Division A",
      umpire: "Michael Scott",
      type: "Test",
      innings: [
        {
          inningId: 1,
          runs: 200,
          wickets: 5,
        },
        {
          inningId: 2,
          runs: 150,
          wickets: 10,
        },
      ],
    },
  ]);
  const sortedMatches = matches.sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );

const [matchStackBatting, setMatchStackBatting] = useState([
  // Dummy data for batting side
  {
    id: 1,
    match_id: 1,
    player_id: 1,
    playerName: "Player 1",
    runs: 45,
    balls: 30,
    Maidens:40,
    fours: 6,
    sixes: 2,
    fifties: 0,
    hundreds: 0,
    strikeRate: 166.67
  },
  {
    id: 2,
    match_id: 1,
    player_id: 2,
    playerName: "Player 2",
    runs: 45,
    balls: 30,
    Maidens:40,
    fours: 6,
    sixes: 2,
    fifties: 0,
    hundreds: 0,
    strikeRate: 166.67
  },
  {
    id: 3,
    match_id: 1,
    player_id: 3,
    playerName: "Player 3",
    runs: 45,
    balls: 30,
    Maidens:40,
    fours: 6,
    sixes: 2,
    fifties: 0,
    hundreds: 0,
    strikeRate: 166.67
  },
  {
    id: 4,
    match_id: 2,
    player_id: 4,
    playerName: "Player 4",
    runs: 45,
    balls: 30,
    Maidens:40,
    fours: 6,
    sixes: 2,
    fifties: 0,
    hundreds: 0,
    strikeRate: 166.67
  },
  {
    id: 5,
    match_id: 2,
    player_id: 5,
    playerName: "Player 5",
    runs: 45,
    balls: 30,
    Maidens:40,
    fours: 6,
    sixes: 2,
    fifties: 0,
    hundreds: 0,
    strikeRate: 166.67
  },
  {
    id: 6,
    match_id: 2,
    player_id: 6,
    playerName: "Player 6",
    runs: 45,
    balls: 30,
    Maidens:40,
    fours: 6,
    sixes: 2,
    fifties: 0,
    hundreds: 0,
    strikeRate: 166.67
  }
]);

const [matchStackBowlig, setMatchStackBowling] = useState([
  // Dummy data for batting side
  {
    id: 1,
    match_id: 1,
    player_id: 1,
    playerName: "Player 1",
    overs: 10,
    Maidens:40,
    runConceded: 55,
    wickets: 2,
    wides:2,
    noBolls:1,
    economyRate: 7.8
  },
  {
    id: 2,
    match_id: 1,
    player_id: 2,
    playerName: "Player 2",
    overs: 10,
    Maidens:40,
    runConceded: 55,
    wickets: 2,
    wides:2,
    noBolls:1,
    economyRate: 7.8
  },
  {
    id: 3,
    match_id: 1,
    player_id: 3,
    playerName: "Player 3",
    overs: 10,
    Maidens:40,
    runConceded: 55,
    wickets: 2,
    wides:2,
    noBolls:1,
    economyRate: 7.8
  },
  {
    id: 4,
    match_id: 2,
    player_id: 4,
    playerName: "Player 4",
    overs: 10,
    Maidens:40,
    runConceded: 55,
    wickets: 2,
    wides:2,
    noBolls:1,
    economyRate: 7.8
  },
  {
    id: 5,
    match_id: 2,
    player_id: 5,
    playerName: "Player 5",
    overs: 10,
    Maidens:40,
    runConceded: 55,
    wickets: 2,
    wides:2,
    noBolls:1,
    economyRate: 7.8
  },
  {
    id: 6,
    match_id: 2,
    player_id: 6,
    playerName: "Player 6",
    overs: 10,
    Maidens:40,
    runConceded: 55,
    wickets: 2,
    wides:2,
    noBolls:1,
    economyRate: 7.8
  }
]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedInning, setSelectedInning] = useState({}); // Tracks selected inning per Test match
  const [pressedIndex, setPressedIndex] = useState({}); // Tracks dropdown state for each match
  const rowsPerPage = 6; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(matches.length / rowsPerPage);

  // Slice data for current page
  const paginatedData = sortedMatches.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Function to handle inning selection for a specific match
  const handleInningChange = (matchId, event) => {
    const newInning = event.target.value;
    setSelectedInning((prev) => ({
      ...prev,
      [matchId]: newInning, // Track selected inning for the specific match
    }));
  };

  // Function to toggle dropdown visibility for each match
  const toggleDropDown = (matchId) => {
    setPressedIndex((prev) => ({
      ...prev,
      [matchId]: !prev[matchId], // Toggle the dropdown state for each match
    }));
  };

  return (
    <div
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <HomeNavbar />
      <div className=" flex relative items-center top-32 p-2 w-full">
        <div className=" lg:w-[5%] ">
          <Navbar />
        </div>
        <div
          className=" h-full relative bg-gray-100 lg:w-[95%] w-[100%] lg:mx-3 lg:px-10 lg:py-5 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-lg"
          style={{
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)"
          }}
        >
          <h2 className="md:text-2xl text-xl mb-1 font-bold text-start text-[#480D35]">
            Scorecards
          </h2>
          {/* <div className="flex justify-between items-center mb-4">
          <NavbarToggleMenu/>
          <button
            onClick={handleFormOpen}
            className="bg-green-500 hover:bg-green-700 rounded-full p-1 text-white text-lg lg:text-2xl"
          >
            <FaPlus />
          </button>
        </div> */}
          <div
            className=" relative min-w-full divide-y divide-gray-300 max-h-[600px] bg-gray-300 flex flex-col hover:overflow-auto gap-2 overflow-hidden lg:py-2 lg:p-2 rounded-lg shadow-lg"
            style={{
              backdropFilter: "blur(5px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            {paginatedData.map((match) =>
  
              <div key={match.matchId} className="relative flex-grow ">
                <div className=" flex-grow flex min-w-[750px] items-center justify-between py-2 lg:px-5 px-3 text-lg bg-white rounded text-black">
                  <div className="flex gap-5 items-center">
                    <div className="flex flex-col items-center justify-center">
                      <img src={richmandLogo} alt={match.matchName} className="w-8 h-8"/>
                      <p className="lg:text-xs text-xxs text-center font-semibold uppercase" >Richmand College, Galle</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="w-[1px] h-4 bg-gradient-to-b from-transparent via-black to-transparent"></div>
                      <p className="lg:text-sm text-xs font-serif font-semibold text-[#08165A]">V<span className="lg:text-xl text-lg font-bold text-[#480D35]">S</span></p>
                      <div className="w-[1px] h-4 bg-gradient-to-b from-transparent via-black to-transparent"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img src={match.opponentLogo} alt={match.matchName} className="w-8 h-8"/>
                      <p className="lg:text-xs text-xxs text-center font-semibold uppercase">{match.opponent}</p>
                    </div>
                  </div>
                  <div>
                    <p className="lg:text-xl text-lg font-bold uppercase flex justify-between items-center text-[#08165A] font-sans">{match.matchName} <span className="text-[#480D35] px-5 text-sm"> - {match.type}</span> </p>
                    <p className="lg:hidden flex text-xs font-bold text-[#480D35]">{new Date(match.time).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })} </p>
                    <p className="flex lg:hidden text-xxs font-semibold">{match.venue} </p>
                    </div>
                  <div className="flex items-center justify-between lg:gap-5">
                    <div className="flex items-center gap-3">
                      {match.type === 'Test' && (
                        <div className="flex ">
                          {/* <label htmlFor={`inning-select-${match.matchId}`} className="text-xs font-bold font-serif">Select Inning:</label> */}
                          <select
                            className="text-xs border border-gray-400 hover:border-gray-600 hover:shadow-sm uppercase  p-1 rounded text-gray-700 px-2"
                            id={`inning-select-${match.matchId}`}
                            value={selectedInning[match.matchId] || 1}
                            onChange={(e) => handleInningChange(match.matchId, e)}
                          >
                            <option value="1" className="text-xs text-gray-700 px-3 ">Inning 1</option>
                            <option value="2" className=" text-xs text-gray-700 px-3 ">Inning 2</option>
                          </select>
                        </div>
                      ) 
                    }
                    <div>
                      <p className="lg:flex hidden text-sm font-bold text-[#480D35]">{new Date(match.time).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })} </p>
                      <p className="lg:flex hidden text-xs font-semibold">{match.venue} </p>
                    </div>
                    </div>
                    <button
                      className="flex text-2xl font-bold"
                      onClick={() => toggleDropDown(match.matchId)}
                    >
                      {pressedIndex[match.id]
                        ? <IoIosArrowDropup />
                        : <IoIosArrowDropdown />}
                    </button>
                  </div>
                 
                </div>
                <div
                  className={`${pressedIndex
                    ? ""
                    : "hidden"}`}
                >
                  {pressedIndex[match.matchId] &&
                   <>
                    <table className="min-w-[750px] md:min-w-full divide-y divide-gray-300 bg-white shadow-md">
                      <thead className=" bg-[#480D35] text-white rounded">
                        <tr>
                          <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                            Batting
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                            Runs
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                            Balls
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                            Maidens
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                            4s
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                            6s
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                            50s
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                            100s
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                            <p>strikeRate</p>
                          </th>
                          <th className="py-2 px-4 text-right text-xs font-semibold uppercase tracking-wider">
                            <p>150/7 (20 overs)</p>
                          </th>
                        </tr>
                      </thead>

                      <tbody className=" divide-y  divide-gray-300">
                        {matchStackBatting.map((player, index2) =>
                          <tr
                            key={index2}
                            className=" hover:bg-gray-50 h-full align-middle"
                          >
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-800 font-bold">
                              {player.playerName}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.runs}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.balls}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.Maidens}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.fours}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.sixes}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.fifties}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.hundreds}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.strikeRate}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <table className="min-w-[750px] md:min-w-full divide-y divide-gray-300 bg-white shadow-md">
                    <thead className=" bg-[#08165A] text-white rounded">
                      <tr>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          Bowling
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          Overs
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          Medians
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          Run Conceded
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          Wickets
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          No Bolls
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          Wide Bolls
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          <p>Economy Rate</p>
                        </th>
                        <th className="py-2 px-4 text-right text-xs font-semibold uppercase tracking-wider">
                          <p>190/7 (15.4 overs)</p>
                        </th>
                      </tr>
                    </thead>

                    <tbody className=" divide-y  divide-gray-300">
                      {matchStackBowlig.map((player, index3) =>
                        <tr
                          key={index3}
                          className=" hover:bg-gray-50 h-full align-middle"
                        >
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-800 font-bold">
                            {player.playerName}
                          </td>
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                            {player.overs}
                          </td>
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                            {player.Maidens}
                          </td>
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                            {player.runConceded}
                          </td>
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                            {player.wickets}
                          </td>
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                            {player.noBolls}
                          </td>
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                            {player.wides}
                          </td>
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                            {player.economyRate}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  </>
                  }
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mt-2 p-1 bg-white shadow-md rounded">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-700 rounded disabled:bg-gray-300"
            >
              <GrLinkPrevious style={{ color: "#fff" }} />
            </button>

            <div className="text-sm font-semibold">
              Page {currentPage} of {totalPages}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-1 py-1 text-lg lg:text-2xl bg-green-500 hover:bg-green-700 rounded disabled:bg-gray-300"
            >
              <GrLinkNext style={{ color: "#fff" }} />
            </button>
          </div>
        </div>

        {/* Player Form Popup
      <PlayerFormPopup
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        matchId={matchId}
      /> */}
      </div>
    </div>
  );
};

export default ScoreCardPage;