import React, { useEffect, useState  } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import Navbar from "../components/Navbar.js";
import NavbarToggleMenu from "../components/NavbarToggleMenu.js";
import flag from "../assets/images/backDrop3.png";
import { Link } from "react-router-dom";
import richmandLogo from "../assets/images/RLogo.png";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import logo from "../assets/images/RLogo.png";
import MainNavbarToggle from "../components/MainNavBarToggle";

const ScoreCardPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const { matchId } = useParams(); // Extract matchId from URL parameters
  const [matchSummary, setMatchSummary] = useState([]);
  const [playersStats, setPlayersStats] = useState([]);
  const [battingPlayerStats, setBattingPlayerStats] = useState([]);
  const [bawllingPlayerStats, setBawllingPlayerStats] = useState([]);
  const [inningNumber, setInningNumber] = useState(); 
  const [matchType, setMatchType] = useState(); 
  const [isDropDownPressed, setIsDropDownPressed] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState();
  const [isEditPopupOpen, setIsEditPopupOpen] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedInning, setSelectedInning] = useState({}); // Tracks selected inning per Test match
  const [pressedIndex, setPressedIndex] = useState({}); 
  const [currentMatchID, setCurrentMatchID] = useState(null);
  const rowsPerPage = 6; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(matchSummary.length / rowsPerPage);

  useEffect(() => {
    axios
      .get(`${API_URL}matchSummary/all`)
      .then(response => {
        const matchSummary = response.data;
        setMatchSummary(matchSummary);
        console.log("Match summary Data:", matchSummary);
      })
      .catch(error => {
        console.error("There was an error fetching the match data!", error);
      });
  }, []);

  const sortedMatches = matchSummary
    .filter(
      (match, index, self) =>
        self.findIndex((m) => m.matchId === match.matchId) === index
    ) // Ensuring unique matches by matchId
    .sort((a, b) => new Date(b.time) - new Date(a.time));

  useEffect(() => {
    console.log("matchID: ", currentMatchID);
    if(currentMatchID){
      axios
        .get(`${API_URL}playerStats/match/player-stats?matchId=${currentMatchID}`)
        .then(response => {
          const playersStats = response.data;
          // Apply inning filter only for Test matches
          if (matchType === "Test") {
            const inningStats = filterInningStats(playersStats, inningNumber);
            const battingStats = inningStats.filter(stat => stat.balls > 0);
            const bawlingStats = inningStats.filter(stat => stat.overs > 0);
            setBattingPlayerStats(battingStats);
            setBawllingPlayerStats(bawlingStats);
          } else {
            // For ODI and T20, show all stats (no inning filter needed)
            const battingStats = playersStats.filter(stat => stat.balls > 0);
            const bawlingStats = playersStats.filter(stat => stat.overs > 0);
            setBattingPlayerStats(battingStats);
            setBawllingPlayerStats(bawlingStats);
          }
          console.log("Player stats: ", battingPlayerStats[0]);
        })
        .catch(error => {
          console.error("There was an error fetching the player stats data!", error);
        });
      }  
  }, [currentMatchID, inningNumber, matchType]);

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

  const filterInningStats = (allInningsStats, inningNumber) => {
    return allInningsStats.filter(stat => stat.inning === inningNumber);
  };

  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Function to handle inning selection for a specific match
  const handleInningChange = ( e) => {
    setInningNumber(e.target.value);
    setPlayersStats(filterInningStats(playersStats, inningNumber));
  };

  // Function to toggle dropdown visibility for each match
  const toggleDropDown = (match) => {
  //   setPressedIndex((prev) => ({
  //     ...prev,
  //     [matchId]: !prev[matchId] // Toggle the dropdown state for each match
  // }));
  //   setCurrentMatchID(matchId);
    if (currentMatchID === match.matchId) {
      setCurrentMatchID(null); // Close the dropdown if the same match is pressed again
      setMatchType(null);
    } else {
      setCurrentMatchID(match.matchId); // Open the new dropdown and fetch its data
      setMatchType(match.type);
    }
  };

  return (
    <div className=" flex flex-col relative justify-center items-center bg-white">
      <div className=" flex relative justify-center items-stretch min-h-screen w-full">
        <div className="lg:flex hidden justify-center items-center w-[12%]  h-auto "
           style={{
            backgroundImage: `url(${flag})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Navbar />
        </div>
        <div className="w-[88%] py-5 flex flex-col items-center justify-center h-auto">
          <div className="flex justify-between w-full lg:px-10 py-3">
            <Link to={"/member"}>
              <img src={logo} className="h-12 w-12" />
            </Link >
            <MainNavbarToggle/>
          </div>
          <div className=" lg:w-[95%] h-full w-[100%] bg-gray-200 lg:px-5 p-5 rounded-lg shadow-lg" 
            style={{
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              
            }}
          >
            <div className="flex justify-between items-center content-center mb-3" >
              <NavbarToggleMenu />
              <h2 className="md:text-2xl text-lg font-bold text-center font-popins text-[#480D35]">
                Match Updates
              </h2>
            </div>
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
                <div className=" flex-grow flex min-w-[1010px] items-center justify-between py-2 lg:px-5 px-3 text-lg bg-white rounded text-black">
                  <div className="flex gap-5 items-center w-[40%]">
                    <div className="flex flex-col items-center justify-center w-[45%]">
                      <img src={richmandLogo} alt={match.matchName} className="w-8 h-8"/>
                      <p className="lg:text-xs text-xxs text-center font-semibold uppercase" >Richmond College, Galle</p>
                      <p className="lg:text-xs text-xxs text-center font-semibold uppercase" >{match.runs}/{match.wickets}</p>
                      <p className="lg:text-xs text-xxs text-center font-semibold" >{match.overs} </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[10%]">
                      <div className="w-[1px] h-4 bg-gradient-to-b from-transparent via-black to-transparent"></div>
                      <p className="lg:text-sm text-xs font-serif font-semibold text-[#08165A]">V<span className="lg:text-xl text-lg font-bold text-[#480D35]">S</span></p>
                      <div className="w-[1px] h-4 bg-gradient-to-b from-transparent via-black to-transparent"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[45%]">
                      <img src={match.logo} alt={match.matchName} className="w-8 h-8"/>
                      <p className="lg:text-xs text-xxs text-center font-semibold uppercase">{match.opposition}</p>
                      <p className="lg:text-xs text-xxs text-center font-semibold uppercase" >{match.oppositionRuns}/{match.oppositionWickets}</p>
                      <p className="lg:text-xs text-xxs text-center font-semibold" >{match.oppositionOvers}</p>
                    </div>
                  </div>
                  <div className="w-[20%] lg:w-[20%] justify-center flex ">
                    <p className="lg:text-sm text-lg text-center font-bold uppercase flex items-center  text-[#08165A] font-sans">{match.under}<span className="text-black px-3 text-md"> - </span> <span className="text-[#480D35] text-sm"> {match.type}</span> </p>
                  </div>
                  <div className="flex lg:w-[40%] w-[40%] items-center justify-end lg:gap-5">
                    <div className="flex items-center gap-3 tracking-wider">
                      {match.type === 'Test' && (
                        <div className={`flex tracking-wider justify-end`}>
                          {/* <label htmlFor={`inning-select-${match.matchId}`} className="text-xs font-bold font-serif">Select Inning:</label> */}
                          <select
                            className="text-xs border border-gray-400 hover:border-gray-600 hover:shadow-sm rounded text-gray-700 px-5 py-1 uppercase"
                            id="inning"
                            value={inningNumber}
                            onChange={handleInningChange}
                          >
                            <option value={0} selected disabled className="text-xs text-gray-700 px-3 ">Select Inning</option>
                            <option value={1} className="text-xs text-gray-700 px-3 ">Inning 1</option>
                            <option value={2} className=" text-xs text-gray-700 px-3 ">Inning 2</option>
                          </select>
                        </div>
                        ) 
                      }
                      <div className="w-36 lg:flex flex-col hidden ">
                        <p className="justify-end flex text-sm font-bold text-[#480D35]">{new Date(match.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })} </p>
                        <p className="lg:flex justify-end hidden text-xs font-semibold">{match.venue} </p>
                      </div>
                    </div>
                    <button
                      className="flex text-2xl font-bold"
                      onClick={() => toggleDropDown(match)}
                    >
                      {currentMatchID === match.matchId 
                        ? <IoIosArrowDropup />
                        : <IoIosArrowDropdown />}
                    </button>
                  </div>
                 
                </div>
                  {currentMatchID === match.matchId &&
                   <>
                    <table className="min-w-[1010px] items-stretch lg:min-w-full divide-y divide-gray-300 bg-white shadow-md">
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
                            <p>{match.runs}/{match.wickets}<span>({match.overs})</span></p>
                          </th>
                        </tr>
                      </thead>

                      <tbody className=" divide-y  divide-gray-300">
                        {battingPlayerStats && battingPlayerStats.map((player, index2) =>
                          <tr
                            key={index2}
                            className=" hover:bg-gray-50 h-full align-middle"
                          >
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-800 font-bold">
                              {player.player.name}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.runs}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.balls}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.fours}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.sixers}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.fifties}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.centuries}
                            </td>
                            <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                              {player.strikeRate}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <table className="min-w-[1010px] lg:min-w-full items-stretch divide-y divide-gray-300 bg-white shadow-md">
                    <thead className=" bg-[#08165A] text-white rounded">
                      <tr>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          Bowling
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          Overs
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          Run Conceded
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          Wickets
                        </th>
                        <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider">
                          <p>Economy Rate</p>
                        </th>
                        <th className="py-2 px-4 text-right text-xs font-semibold uppercase tracking-wider">
                          <p>{match.oppositionRuns}/{match.oppositionWickets}<span>({match.oppositionOvers})</span></p>
                        </th>
                      </tr>
                    </thead>

                    <tbody className=" divide-y  divide-gray-300">
                      {battingPlayerStats && bawllingPlayerStats.map((player, index3) =>
                        <tr
                          key={index3}
                          className=" hover:bg-gray-50 h-full align-middle"
                        >
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-800 font-bold">
                            {player.player.name}
                          </td>
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                            {player.overs}
                          </td>
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                            {player.runsConceded}
                          </td>
                          <td className=" px-4 h-8 whitespace-nowrap text-sm text-gray-600">
                            {player.wickets}
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
    </div>
  );
};

export default ScoreCardPage;