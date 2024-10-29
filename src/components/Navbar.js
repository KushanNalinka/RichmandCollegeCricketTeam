import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { TbScoreboard } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaPersonWalkingWithCane } from "react-icons/fa6";
import { MdOutlineNewspaper } from "react-icons/md";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("");
    const location = useLocation();

    // Set active link based on the current location
    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    // Function to apply active styles
    const getLinkClass = (path) => {
        return path === activeLink 
            ? "bg-gray-300 bg-opacity-20"
            : "hover:bg-gray-300 hover:bg-opacity-20";
    };

    return (
        <>
            <div className={`flex h-full w-full flex-col justify-center items-center border border-[#00175F]`}>
                <div className=" w-full py-2 px-2 border-b border-[#00175F] flex items-center ">
                    <h1 className=" h-20 py-5 pl-4 relative  text-white text-2xl font-bold">RCC Admin</h1>
                </div>
                <ul className="flex flex-col w-full h-full">
                    <Link onClick={() => setActiveLink("/player")}  to={"/player"} className={`${getLinkClass("/player")} group flex flex-wrap gap-3 pl-4 py-4 items-center text-2xl text-center p-2 text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<FaPeopleGroup className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Players</span>
                    </Link >
                    <Link to={"/match"} onClick={() => setActiveLink("/match")}  className={`${getLinkClass("/match")} group flex flex-wrap gap-3 py-4 pl-4 cursor-pointer text-2xl items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<BiSolidCricketBall className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Matches</span>
                    </Link>
                    <Link to={"/admin-scorecard"} className={`${getLinkClass("/admin-scorecard")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<TbScoreboard className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Score</span>
                    </Link>
                    <Link to={"/team"} className={`${getLinkClass("/team")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<RiTeamFill className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Teams</span>
                    </Link>
                    <Link to={"/coachInfo"} className={`${getLinkClass("/coachInfo")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<MdPeople className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">Coaches</span>
                    </Link>
                    <Link to={"/official"} className={`${getLinkClass("/official")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<MdPeople className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">officials</span>
                    </Link>
                    <Link to={"/news-create"} className={`${getLinkClass("/news-create")} group flex flex-wrap pl-4 gap-3 py-4 text-2xl cursor-pointer items-center p-2  text-white w-full hover:bg-gray-300 hover:bg-opacity-20`}>
                        {" "}<MdOutlineNewspaper className="text-white"/> <span className="text-sm text-white transition-opacity duration-300 mt-1">News</span>
                    </Link>
                </ul>
            </div>
        </>   
    );
};
export default Navbar;