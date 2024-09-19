import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import close icon

const FormPopup = ({ closeForm, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    contactNo: '',
    battingStyle: '',
    bowlingStyle: '',
    status: '',
    image: '',
    role: ''
  });
  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      if (files && files[0]) {
        const file = files[0];
        setImagePreview(URL.createObjectURL(file));
        setFormData({
          ...formData,
          [name]: file
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you should handle file upload to the server
    console.log('Form Data:', formData);
    closeForm();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-8 pt-2 mt-16 rounded-lg shadow-lg max-w-lg w-full relative">
        <div className='flex justify-end '>
          <button 
            onClick={closeForm} 
            className="flex relative items-center justify-end h-10 w-10 cursor-pointer text-xl text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            <FaTimes/>
          </button>
        </div>
        <h3 className="text-xl text-[#480D35] font-bold mb-4">Add New Player</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">DOB</label>
            <input 
              type="date" 
              name="dob" 
              value={formData.dob} 
              onChange={handleChange} 
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact No</label>
            <input 
              type="text" 
              name="contactNo" 
              value={formData.contactNo} 
              onChange={handleChange} 
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Batting Style</label>
            <input 
              type="text" 
              name="battingStyle" 
              value={formData.battingStyle} 
              onChange={handleChange} 
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bowling Style</label>
            <input 
              type="text" 
              name="bowlingStyle" 
              value={formData.bowlingStyle} 
              onChange={handleChange} 
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select 
              name="status" 
              value={formData.status} 
              onChange={handleChange} 
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
              required
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input 
              type="text" 
              name="role" 
              value={formData.role} 
              onChange={handleChange} 
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
              required 
            />
          </div>
          <div className=' col-span-2'>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input 
              type="file" 
              name="image" 
              accept="image/*"
              onChange={handleChange} 
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full" 
              required 
            />
            {imagePreview && (
              <img 
                src={imagePreview} 
                alt="Image Preview" 
                className="mt-4 w-20 h-20 rounded-full object-cover border border-gray-300" 
              />
            )}
          </div>
          <div className="col-span-2">
            <button 
              type="submit" 
              onClick={handleSubmit}
              className="bg-[#480D35] text-white py-2 px-4 rounded-lg hover:bg-[#5D1245] w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
