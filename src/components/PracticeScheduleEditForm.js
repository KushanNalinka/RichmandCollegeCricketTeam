import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { message } from "antd";

const PracticeScheduleEditForm = ({ onClose, practiceSchedule }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    venue: "",
    startTime: "",
    endTime: "",
    type: ""
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name.includes(".")) {
      const [mainKey, subKey] = name.split(".");
      setFormData({
        ...formData,
        [mainKey]: {
          ...formData[mainKey],
          [subKey]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleEdit = async e => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API_URL}/${practiceSchedule.id}`,
        formData
      );
      console.log("Form submitted succedded: ", response.data);
      message.success("Successfull!");
      setFormData({
        venue: "",
        startTime: "",
        endTime: "",
        type: ""
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed!");
    }
  };

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-gray-600 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <div className="flex justify-end ">
          <button
            onClick={onClose}
            className="flex relative items-center justify-end cursor-pointer text-xl text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-xl text-[#480D35] font-bold mb-4">
          Edit Practice Schedule Details
        </h2>
        <form
          onSubmit={handleEdit}
          className="grid grid-cols-1 md:grid-cols-1 gap-3"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="venue"
            >
              Venue
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="startTime"
            >
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="endTime"
            >
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#480D35] hover:bg-opacity-100 bg-opacity-95 text-white px-4 py-2 rounded-md w-full"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PracticeScheduleEditForm;
