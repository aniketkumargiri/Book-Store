/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/student/register",
        {
          roll,
          username,
          password,
          grade,
        }
      );

      if (response.data.registered) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-gray-100 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl text-pink-800 font-semibold mb-4">
          Add Student
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="roll" className="block text-gray-600 mb-2">
              Roll No:
            </label>
            <input
              type="text"
              id="roll"
              name="roll"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter Roll No"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 mb-2">
              User Name:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="grade" className="block text-gray-600 mb-2">
              Grade:
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
