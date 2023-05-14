import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import "./admin.css";

function TutorInfo() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tutors')
      .then(response => setTutors(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/tutors/${id}`)
      .then(() => {
        setTutors(tutors.filter(tutor => tutor.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='main'>
      <center>
      <h1 className="adhead">Tutor List</h1>
      <NavLink exact to="/admin">
      <img src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" className="backhome" style={{top:65, left:480}}/>
      </NavLink>
      <table className='table1'>
        <thead>
          <tr>
            <th className='tbspc tbhd'>ID</th>
            <th className='tbspc tbhd'>NAME</th>
            <th className='tbhd'>OPERATIONS</th>
          </tr>
        </thead>
        <tbody>
        {tutors.map(tutor => (
          <tr key={tutor.id}>
            <td className="tbspc">{tutor.id}</td>
            <td className="tbspc"><Link to={`/tutors/${tutor.id}`}><span className='unm'>{tutor.Username}</span></Link></td>
            <td className='operation'><Link to={`/tutors/${tutor.id}/edit`}><button className='editbtn'>Edit</button></Link>
            <button onClick={() => handleDelete(tutor.id)} className='dltbtn'>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default TutorInfo;