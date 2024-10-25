import React, { useState, useEffect } from "react";
import Navbar from "../components/MemberNavbar";
import backgroundFlag from "../assets/images/flag.png";
import Footer from "../components/Footer";

const CoachesProfile = () => {
    const [coachesData, setCoachesData] = useState([]);
    const [selectedCoach, setSelectedCoach] = useState(null);
    const [practiceSchedulesData, setPracticeSchedulesData] = useState([]);
    const [showCoachList, setShowCoachList] = useState(false); // For mobile responsiveness
    const API_URL = process.env.REACT_APP_API_URL;

    // Fetch data from the API when the component mounts
    useEffect(() => {
        const fetchCoachesData = async () => {
            try {
                const response = await fetch(`${API_URL}coaches/all`);
                const data = await response.json();
                setCoachesData(data);
                setSelectedCoach(data[0]); // Set the first coach as default
            } catch (error) {
                console.error("Error fetching coaches:", error);
            }
        };

        fetchCoachesData();
    }, []);

    // Fetch practice sessions when selectedCoach changes
    useEffect(() => {
        if (selectedCoach) {
            const fetchPracticeSessions = async () => {
                try {
                    const response = await fetch(
                        `${API_URL}practiseSessions/coach/${selectedCoach.coachId}`
                    );
                    const data = await response.json();
                    setPracticeSchedulesData(data);
                } catch (error) {
                    console.error("Error fetching practice sessions:", error);
                }
            };

            fetchPracticeSessions();
        }
    }, [selectedCoach]);

    if (!selectedCoach) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-400 min-h-screen text-white">
            <Navbar />
            <div className="max-w-screen-lg pt-24 mx-auto">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar: Our Coaches Section - Only visible on desktop (md and larger) */}
                    <div
                        className="hidden md:block bg-white rounded-lg shadow-md"
                        style={{
                            width: "350px",
                            flexShrink: 0,
                            marginTop: "0px",
                            maxHeight: "500px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div className="p-4 border-b border-gray-600">
                            <h2 className="text-xl font-bold text-black">Our Coaches</h2>
                        </div>
                        <div
                            className="p-4 overflow-y-auto"
                            style={{ flexGrow: 1, maxHeight: "calc(500px - 64px)" }}
                        >
                            <ul className="space-y-3">
                                {coachesData.map((coach) => (
                                    <li
                                        key={coach.coachId}
                                        className={`cursor-pointer p-3 rounded-lg ${
                                            coach.coachId === selectedCoach.coachId
                                                ? "bg-gray-200 font-bold"
                                                : "bg-gray-800"
                                        }`}
                                        onClick={() => setSelectedCoach(coach)}
                                    >
                                        <div className="flex items-center">
                                            <img
                                                src={coach.image}
                                                alt={coach.name}
                                                className="w-10 h-10 rounded-full object-cover mr-3"
                                            />
                                            {coach.name}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Coach Details */}
                    <div
                        className="flex-grow bg-gray-800 p-6 rounded-lg shadow-md"
                        style={{ minHeight: "500px" }}
                    >
                        <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-6">
                            <div
                                className="rounded-full overflow-hidden border-4 border-blue-500 mb-4 md:mb-0"
                                style={{ width: "150px", height: "150px" }}
                            >
                                <img
                                    src={selectedCoach.image}
                                    alt={selectedCoach.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold">
                                    {selectedCoach.name}
                                </h1>
                                <p className="text-white">
                                    Date of Birth:{" "}
                                    {new Date(selectedCoach.dateOfBirth).toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-white">Coach Information</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-gray-900 rounded-lg text-left">
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-4 text-gray-400 font-semibold">
                                                Contact:
                                            </td>
                                            <td className="py-2 px-4">{selectedCoach.contactNo}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 text-gray-400 font-semibold">
                                                Email:
                                            </td>
                                            <td className="py-2 px-4">{selectedCoach.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 text-gray-400 font-semibold">
                                                Address:
                                            </td>
                                            <td className="py-2 px-4">{selectedCoach.address}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 text-gray-400 font-semibold">
                                                Description:
                                            </td>
                                            <td className="py-2 px-4">{selectedCoach.description}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 text-gray-400 font-semibold">
                                                Date of Birth:
                                            </td>
                                            <td className="py-2 px-4">
                                                {selectedCoach.dateOfBirth}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Practice Schedules Table */}
                        <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-white">Practice Schedules</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-gray-900 rounded-lg">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 text-center text-gray-400">
                                                Venue
                                            </th>
                                            <th className="py-2 px-4 text-center text-gray-400">
                                                Start Time
                                            </th>
                                            <th className="py-2 px-4 text-center text-gray-400">
                                                End Time
                                            </th>
                                            <th className="py-2 px-4 text-center text-gray-400">
                                                Type
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {practiceSchedulesData.map((schedule) => (
                                            <tr key={schedule.pracId}>
                                                <td className="py-2 px-4 text-center">
                                                    {schedule.venue}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {schedule.starTime}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {schedule.endTime}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {schedule.pracType}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CoachesProfile;
