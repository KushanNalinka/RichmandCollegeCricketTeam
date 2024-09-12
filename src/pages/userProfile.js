import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import HomeNavbar from '../components/HomeNavbar';
import Navbar from '../components/Navbar';
import flag from "../assets/images/flagbg.png";
import profilePic from "../assets/images/kusal.png"

const UserProfile = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    status: '',
    level: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
        className="h-screen w-screen"
        style={{
        backgroundImage: `url(${flag})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
        }}
        >
            <HomeNavbar/>
        <div className=" flex relative top-24 p-2 w-full">
            <div className="lg:w-[5%]">
                <Navbar/>
            </div>  
            <div
                className="  h-full relative bg-gray-100 lg:w-[95%] b- w-[100%] lg:mx-3 lg:px-20 lg:pt-10 p-5 lg:rounded-tl-[3rem] rounded-lg shadow-lg"
                style={{
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)"
            }}
            >
            <h1 className='text-2xl font-bold text-[#802F3B]'>Edit Your Profile</h1>    
            <div className="flex justify-center pt-5 bg-[#802F3B] rounded-xl h-32 items-end mb-6">
                <div className='relative top-5 rounded-full  bg-white '>
                    <img src={profilePic} alt='' className='bg-cover w-24 h-24 rounded-full'/>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <h1 className='text-xl font-bold text-[#802F3B]'>Personal Information</h1>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Second Name</label>
                        <input
                            type="text"
                            name="Second Name"
                            value={formData.secondName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Age</label>
                        <input
                            type="text"
                            name="venue"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Access Level</label>
                        <input
                            type="text"
                            name="opponent"
                            value={formData.level}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="venue"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700">Phone</label>
                        <input
                            type="text"
                            name="opponent"
                            value={formData.level}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-center items-center">
                        <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-4"
                        >
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                        Save
                        </button>
                    </div>
            </form>
        </div>

    </div>
            
        </div>  
  );
};

export default UserProfile;