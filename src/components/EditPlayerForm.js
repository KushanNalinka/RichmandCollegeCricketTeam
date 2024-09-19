// src/components/EditPlayerForm.jsx

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 

const EditPlayerForm = ({ player, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...player });
    const [imagePreview, setImagePreview] = useState(player.image);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData((prevState) => ({
                    ...prevState,
                    image: file,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPlayer = { ...formData, image: imagePreview };
        onSave(updatedPlayer);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-white px-8 py-2 pb-8  mt-16 rounded-lg shadow-lg max-w-lg w-full relative">
                <div className='flex justify-end '>
                    <button 
                        onClick={onClose} 
                        className="flex relative items-center justify-end h-10 w-10 cursor-pointer text-xl text-gray-600 hover:text-gray-800"
                        aria-label="Close"
                    >
                        <FaTimes/>
                    </button>
                </div>
                <h2 className="text-xl text-[#480D35] font-bold mb-4">Edit Player</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div >
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div >
                        <label className="block text-gray-700">DOB</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div >
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div >
                        <label className="block text-gray-700">Contact No</label>
                        <input
                            type="text"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div >
                        <label className="block text-gray-700">Batting Style</label>
                        <input
                            type="text"
                            name="battingStyle"
                            value={formData.battingStyle}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div >
                        <label className="block text-gray-700">Bowling Style</label>
                        <input
                            type="text"
                            name="bowlingStyle"
                            value={formData.bowlingStyle}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700">Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {imagePreview && (
                            <img src={imagePreview} alt="Preview" className="mt-2 w-20 h-20 rounded-full object-cover border border-gray-300" />
                        )}
                    </div>
                    <div className="flex justify-end col-span-2">
                       
                        <button
                            type="submit"
                            className="bg-[#480D35] hover:bg-[#5D1245] text-white px-4 py-2 rounded-md w-full"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPlayerForm;
