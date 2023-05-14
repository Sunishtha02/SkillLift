import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link ,NavLink} from 'react-router-dom';
import "./admin.css";

function GetCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='main'>
      <center>
      <h1 className='adhead'>Courses</h1>
      <NavLink exact to="/admin">
      <img src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" className="backhome" style={{top:65, left:510}}/>
      </NavLink>
      <table className='table1'>
        <thead>
          <tr>
            <th className='tbspc tbhd'>ID</th>
            <th className='tbhd'>COURSE</th>
          </tr>
        </thead>
        <tbody>
        {courses.map(course => (
          <tr key={course.courseId}>
            <td className='tbspc'>{course.courseId}</td>
            <td>{course.courseName}</td>
          </tr>
        ))}
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default GetCourse;