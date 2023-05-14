import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Studnav from "../components/studnav";
import "../pages/student.css"

const Classroom = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState(null);
  const studentId = Cookies.get("studentId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/enrollments/${studentId}`
        );
        setEnrollments(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [studentId]);

  return (
    <div>
      <Studnav />
      <div className="mns">
      <div className="enrhead"><u>Enrollments</u></div>
      {error && <p>{error}</p>}
      {enrollments.length > 0 ? (
        <div className="enrcont">
            {enrollments.map((enrollment) => (
              <center>
              <div key={enrollment.id} className="enrollment">
                <div className="sub">{enrollment.Course}</div>
                <div className="rs">Price: <br/>₹ {enrollment.Cost}</div>
                <div className="professor">By:<br/>Professor {enrollment.Username}</div>
                <div className="mno">{enrollment.MobNumber}</div>
              </div>
              </center>
            ))}
        </div>
      ) : (
        <center><p className="noenr">No enrollments found.</p></center>
      )}
      </div>
    </div>
  );
};

export default Classroom;

