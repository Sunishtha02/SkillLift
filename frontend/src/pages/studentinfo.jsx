import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link ,NavLink} from 'react-router-dom';
import "./admin.css";

function StudInfo() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/students/${id}`)
      .then(() => {
        setStudents(students.filter(student => student.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='main'>
      <center>
      <h1 className="adhead">Student List</h1>
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
        {students.map(student => (
          <tr key={student.id}>
            <td className="tbspc">{student.id}</td>
            <td className="tbspc"><Link to={`/students/${student.id}`}><span className='unm'>{student.Username}</span></Link></td>
            <td className='operation'><Link to={`/students/${student.id}/edit`}><button className='editbtn'>Edit</button></Link>
            <button onClick={() => handleDelete(student.id)} className='dltbtn'>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default StudInfo;