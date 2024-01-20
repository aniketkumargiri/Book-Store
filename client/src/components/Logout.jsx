/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setRole }) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/logout")
      .then((res) => {
        if (res.data.logout) {
          setRole("");
          navigate("/");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default Logout;
