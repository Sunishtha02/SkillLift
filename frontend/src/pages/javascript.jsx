import React, { useState, useEffect } from 'react';
import Studnav from "../components/studnav";
import axios from 'axios'
import "../pages/scat.css";
import Cookies from 'js-cookie';

function Javascript(){
    const [studentId, setStudentId] = useState(null);
    const [books, setBooks] = useState([]);
      
    useEffect(() => {
    axios.get("http://localhost:3001/js")
        .then((res)=>{
            setBooks(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);
  
    function enroll(studentId, teacherId) {
        console.log("enroll function called with studentId=", studentId, "and teacherId=", teacherId);
        fetch('http://localhost:3001/enroll', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentId, teacherId }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
      
    useEffect(() => {
        const storedId = Cookies.get('studentId');
        if (storedId) {
            setStudentId(storedId);
        }
    }, []);

    return(
        <div>
            <Studnav/>
            <div className="inmn">
                {books.map((teacher) => (
                <div key={teacher.id} className="inmn2">
                    <img src="profile.png" className="pr"/>
                    <center><div className="name">Professor {teacher.Username} <br/> Cost: ₹{teacher.Cost}</div></center>
                    <button className='enr' onClick={() => enroll(studentId, teacher.id)}>Enroll</button>
                </div>
                ))}
            </div>
            
        </div>
    );
}

export default Javascript;