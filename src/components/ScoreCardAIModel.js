import React, { useState } from 'react';
import axios from 'axios';
import { FaTimes } from "react-icons/fa";
import { useDropzone } from 'react-dropzone';

const ScoreCardAIModel = ({ onClose, matchId }) => {
  const [batsmanFile, setBatsmanFile] = useState(null);
  const [bowlerFile, setBowlerFile] = useState(null);
  const [tableData, setTableData] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 

  // Drag-and-drop for batsman image
  const { getRootProps: getBatsmanRootProps, getInputProps: getBatsmanInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setBatsmanFile(acceptedFiles[0]);
    },
    accept: { 'image/*': [] },
    multiple: false
  });

  // Drag-and-drop for bowler image
  const { getRootProps: getBowlerRootProps, getInputProps: getBowlerInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setBowlerFile(acceptedFiles[0]);
    },
    accept: { 'image/*': [] },
    multiple: false
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!batsmanFile || !bowlerFile) {
      alert("Upload both ScoreCard Images");
      return;
    }

    const formData = new FormData();
    formData.append('batsman_file', batsmanFile);
    formData.append('bowler_file', bowlerFile);

    setIsLoading(true);

    try {
      const response = await axios.post('http://scorecardimagenlp-production.up.railway.app/run-scorecard', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (Array.isArray(response.data)) {
        setTableData(response.data);
      } else {
        console.error('Expected an array in response but got:', response.data);
        setTableData([]);
      }

    } catch (error) {
      console.error('Error uploading files:', error);
      setTableData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event, rowIndex, field) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][field] = event.target.value;
    setTableData(updatedTableData);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl max-h-full overflow-y-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            <FaTimes />
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-[#480D35]">
          Add Player Score Details of the Match
        </h2>
        <p className="mb-6">Upload detailed score images of teams</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div
              {...getBatsmanRootProps()}
              className="w-1/2 p-4 border-dashed border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer"
            >
              <input {...getBatsmanInputProps()} />
              {batsmanFile ? (
                <p className="text-blue-600">{batsmanFile.name}</p>
              ) : (
                <p className="text-gray-600">Drag & drop Batsman Image or Click to Upload</p>
              )}
            </div>
            <div
              {...getBowlerRootProps()}
              className="w-1/2 p-4 border-dashed border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer"
            >
              <input {...getBowlerInputProps()} />
              {bowlerFile ? (
                <p className="text-blue-600">{bowlerFile.name}</p>
              ) : (
                <p className="text-gray-600">Drag & drop Bowler Image or Click to Upload</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#480D35] hover:bg-opacity-100 bg-opacity-95 text-white py-2 rounded-md transition"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Upload and Process'}
          </button>
        </form>

        {isLoading ? (
          <div className="mt-6 text-center">
            <p className=" hover:bg-opacity-100 bg-opacity-95">Loading...</p>
          </div>
        ) : (
          <>
            {tableData.length > 0 && (
              <div className="overflow-x-auto mt-6">
                <table className="min-w-full bg-white border rounded-lg">
                  <thead>
                    <tr className="bg-[#480D35] hover:bg-opacity-100 bg-opacity-95 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Player Name</th>
                      <th className="py-3 px-6 text-left">Fours</th>
                      <th className="py-3 px-6 text-left">Sixes</th>
                      <th className="py-3 px-6 text-left">Balls Faced</th>
                      <th className="py-3 px-6 text-left">Total Runs</th>
                      <th className="py-3 px-6 text-left">Overs</th>
                      <th className="py-3 px-6 text-left">Runs</th>
                      <th className="py-3 px-6 text-left">Wickets</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {tableData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <input
                            type="text"
                            value={row.name}
                            onChange={(event) => handleInputChange(event, index, 'name')}
                            className="border-b border-gray-300 outline-none focus:border-[#480D35]"
                          />
                        </td>
                        <td className="py-3 px-6 text-left">
                          <input
                            type="number"
                            value={row.fours}
                            onChange={(event) => handleInputChange(event, index, 'fours')}
                            className="border-b border-gray-300 outline-none focus:border-[#480D35]"
                          />
                        </td>
                        <td className="py-3 px-6 text-left">
                          <input
                            type="number"
                            value={row.sixes}
                            onChange={(event) => handleInputChange(event, index, 'sixes')}
                            className="border-b border-gray-300 outline-none focus:border-[#480D35]"
                          />
                        </td>
                        <td className="py-3 px-6 text-left">
                          <input
                            type="number"
                            value={row.balls_faced}
                            onChange={(event) => handleInputChange(event, index, 'balls_faced')}
                            className="border-b border-gray-300 outline-none focus:border-[#480D35]"
                          />
                        </td>
                        <td className="py-3 px-6 text-left">
                          <input
                            type="number"
                            value={row.total_runs}
                            onChange={(event) => handleInputChange(event, index, 'total_runs')}
                            className="border-b border-gray-300 outline-none focus:border-[#480D35]"
                          />
                        </td>
                        <td className="py-3 px-6 text-left">
                          <input
                            type="number"
                            value={row.overs}
                            onChange={(event) => handleInputChange(event, index, 'overs')}
                            className="border-b border-gray-300 outline-none focus:border-[#480D35]"
                          />
                        </td>
                        <td className="py-3 px-6 text-left">
                          <input
                            type="number"
                            value={row.runs}
                            onChange={(event) => handleInputChange(event, index, 'runs')}
                            className="border-b border-gray-300 outline-none focus:border-[#480D35]"
                          />
                        </td>
                        <td className="py-3 px-6 text-left">
                          <input
                            type="number"
                            value={row.wickets}
                            onChange={(event) => handleInputChange(event, index, 'wickets')}
                            className="border-b border-gray-300 outline-none focus:border-[#480D35]"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ScoreCardAIModel;