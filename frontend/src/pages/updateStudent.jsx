import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams , NavLink} from 'react-router-dom';
import "../pages/admin.css";

function UpdateStudent() {
  const { id } = useParams(); 
  const [mobNumber, setMobNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Fetch the student data using the "id" parameter from the URL
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/students/${id}`);
        const studentData = response.data;
        setMobNumber(studentData.mobNumber);
        setUsername(studentData.username);
        setPassword(studentData.password);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentData();
  }, [id]);



  const handleUpdate = async () => {
    console.log('id:', id);
    try {
      const response = await axios.get(`http://localhost:3001/students/${id}`);
      const studentData = response.data;
      const updatedData = {
        mobNumber: mobNumber || studentData.mobNumber,
        username: username || studentData.username,
        password: password || studentData.password,
      };
      const updateResponse = await axios.put(`http://localhost:3001/students/${id}`, updatedData);
      console.log(updateResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div >
      <center><h2 className=' adhead updhead'>Update Data</h2></center>
      <NavLink exact to="/studinfo">
      <img src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" className="backhome" style={{top:480, left:640}}/>
      </NavLink>
      <div className='details detailstut updet'>
      <center>
      <label className='title title1'>
        Mobile Number: <br/>
        <input type="text"  className="upinp" value={mobNumber} onChange={(e) => setMobNumber(e.target.value)} />
      </label>
      <br />
      <label className='title'>
        Username: <br/>
        <input type="text" className="upinp" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label className='title'>
        Password:  <br/>
        <input type="text" className="upinp" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleUpdate} className='upbtn'>Update</button>
      </center>
      </div>
    </div>
  );
}

export default UpdateStudent;






