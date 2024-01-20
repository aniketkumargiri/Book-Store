/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [admins, setAdmins] = useState(0);
  const [students, setStudents] = useState(0);
  const [books, setBooks] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/dashboard")
      .then((res) => {
        if (res.data.ok) {
          setAdmins(res.data.admin);
          setStudents(res.data.student);
          setBooks(res.data.book);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="m-4 p-4 bg-yellow-200 rounded shadow-md w-72 h-36 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold">Total Admins</h2>
        <p className="text-3xl font-bold">{admins}</p>
      </div>

      <div className="m-4 p-4 bg-green-200 rounded shadow-md w-72 h-36 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold">Total Students</h2>
        <p className="text-3xl font-bold">{students}</p>
      </div>

      <div className="m-4 p-4 bg-blue-200 rounded shadow-md w-72 h-36 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold">Total Books</h2>
        <p className="text-3xl font-bold">{books}</p>
      </div>
    </div>
  );
};

export default Dashboard;
