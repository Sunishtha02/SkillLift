import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,NavLink } from 'react-router-dom';

function TutorDetails() {
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/tutors/${id}`)
      .then(response => setTutor(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!tutor) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details detailstut'>
    <center>
      <NavLink exact to="/tutorinfo">
      <img src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" className="backhome" style={{top:100}}/>
      </NavLink>
      <p><span className='title title1'><b>Username:</b></span> {tutor.Username}</p>
      <p><span className='title'><b>Course:</b></span> {tutor.Course}</p>
      <p><span className='title'><b>Cost:</b></span> ₹{tutor.Cost}</p>
      <p><span className='title'><b>Phone:</b></span> {tutor.MobNumber}</p>
    </center>
    </div>
  );
}

export default TutorDetails;
