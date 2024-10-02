import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { TbScoreboard } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidCricketBall } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div
                className={`md:flex hidden flex-col justify-center  rounded-tr-md items-center`}
            >
                <ul className="flex flex-col w-full items-center justify-center mt-5 pl-1">
                    <Link to={"/adminDashboard"} className={` group flex flex-col gap-2 pl-2 py-4 cursor-pointer text-2xl items-center text-center justify-center p-2 text-white w-full `}>
                        {" "}<MdDashboard /> <span className="text-sm  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">Dashboard</span>
                    </Link>
                    <Link to={"/player"} className=" group flex flex-col gap-2 pl-2 py-4 items-center text-2xl text-center justify-center p-2 text-white w-full">
                        {" "}<BsPersonFill /> <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">Player</span>
                    </Link >
                    <Link to={"/match"} className=" group flex flex-col gap-2 py-4 pl-2 cursor-pointer text-2xl items-center justify-center p-2  text-white w-full ">
                        {" "}<BiSolidCricketBall /> <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">Matches</span>
                    </Link>
                    <Link to={"/admin-scorecard"} className=" group flex flex-col pl-2 gap-2 py-4 text-2xl cursor-pointer items-center justify-center p-2  text-white w-full">
                        {" "}<TbScoreboard /> <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">Score</span>
                    </Link>
                    <Link to={"/team"} className=" gap-3 flex flex-col group cursor-pointer pl-2 py-4 text-2xl items-center justify-center p-2  text-white w-full">
                        {" "}<RiTeamFill /> <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">Team</span>
                    </Link>
                </ul>
            </div>
        </>
       
    );

};
export default Navbar;