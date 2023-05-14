import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Tutnav from "../components/tutnav";

const Class = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState(null);
  const tutorId = Cookies.get("tutorId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/enr/${tutorId}`
        );
        setEnrollments(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [tutorId]);

  return (
    <div>
      <Tutnav />
      <div className="ob">
      <div className="enrhead" ><u>Enrollments</u></div>
      {error && <p>{error}</p>}
      {enrollments.length > 0 ? (
        <center>
        <table className="table1">
          <thead>
            <tr>
              <th className="tbspc tbhd">ID</th>
              <th className="tbspc tbhd">NAME</th>
              <th className="tbhd">MOBILE NUMBER</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id}>
                <td className="tbspc">{enrollment.id}</td>
                <td className="tbspc">{enrollment.Username}</td>
                <td>{enrollment.MobNumber}</td>
              </tr>
            ))}
            </tbody>
        </table>
        </center>
      ) : (
        <center><p className="noenr">No enrollments found.</p></center>
      )}
      </div>
    </div>
  );
};

export default Class;


