import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';

function UpdateTutor() {
  const { id } = useParams(); 
  const [course, setCourse] = useState('');
  const [cost, setCost] = useState('');
  const [mobNumber, setMobNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Fetch the student data using the "id" parameter from the URL
    const fetchTutorData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/tutors/${id}`);
        const tutorData = response.data;
        setCourse(tutorData.course);
        setCost(tutorData.cost);
        setMobNumber(tutorData.mobNumber);
        setUsername(tutorData.username);
        setPassword(tutorData.password);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTutorData();
  }, [id]);


  const handleUpdate = async () => {
    console.log('id:', id);
    try {
      const response = await axios.get(`http://localhost:3001/tutors/${id}`);
      const tutorData = response.data;
      const updatedData = {
        course: course || tutorData.course,
        cost: cost || tutorData.cost,
        mobNumber: mobNumber || tutorData.mobNumber,
        username: username || tutorData.username,
        password: password || tutorData.password,
      };
      const updateResponse = await axios.put(`http://localhost:3001/tutors/${id}`, updatedData);
      console.log(updateResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <center><h2 className=' adhead updhead'>Update Data</h2></center>
      <NavLink exact to="/tutorinfo">
      <img src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" className="backhome" style={{top:480, left:640}}/>
      </NavLink>
      <div className='updettut'>
      <center>
      <label className='title title1'>
        Course:
        <input type="text"  className="upinp upinp2" value={course} onChange={(e) => setCourse(e.target.value)} />
      </label>
      <br/>
      <label className='title'>
        Cost:
        <input type="text" className="upinp upinp2" value={cost} onChange={(e) => setCost(e.target.value)} />
      </label>
      <br/>
      <label className='title'>
        Mobile Number:
        <input type="text" className="upinp upinp2" value={mobNumber} onChange={(e) => setMobNumber(e.target.value)} />
      </label>
      <br/>
      <label className='title'>
        Username:
        <input type="text" className="upinp upinp2" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label className='title'>
        Password: 
        <input type="text" className="upinp upinp2" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleUpdate} className='upbtn'>Update</button>
      </center>
      </div>
    </div>
  );
}

export default UpdateTutor;






