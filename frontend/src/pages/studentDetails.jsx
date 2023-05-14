import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import "./admin.css"

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/students/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details'>
      <center>
      <NavLink exact to="/studinfo">
      <img src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" className="backhome" style={{top:100}}/>
      </NavLink>
      <p><span className='title title1'><b>Username:</b></span> <br/>{student.Username}</p>
      <p><span className='title'><b>Mobile Number:</b></span> <br/> {student.MobNumber}</p>
      </center>
    </div>
  );
}

export default StudentDetails;
