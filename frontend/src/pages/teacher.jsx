import React from "react";
import Tutnav from "../components/tutnav";
import "../pages/teacher.css";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function Teacher(){
    const[username, setUsername]=useState('');
    const [course, setCourse] = useState('');
    const [cost, setCost]=useState('');
    const [totalEnrollments, setTotalEnrollments] = useState(0);
    useEffect(() => {
        const storedUsername = Cookies.get('username');
        const storedCourse = Cookies.get('course');
        const storedCost= Cookies.get('cost');
        const tutorId= Cookies.get('tutorId');
        if (storedUsername) {
          setUsername(storedUsername);
        }
        if (storedCourse) {
          setCourse(storedCourse);
        }
        if(storedCost){
          setCost(storedCost);
        }

        const fetchData = async () => {
            try {
              const response = await fetch(`http://localhost:3001/enr/count/${tutorId}`);
              const { totalEnrollments } = await response.json();
              setTotalEnrollments(totalEnrollments);
              console.log("hello"+totalEnrollments);
            } catch (err) {
              console.error(err);
            }
        };
          fetchData();
      }, []);
    return(
        <div>
            <Tutnav/>
            <img src="bk.png" className="bk"/>
            <img src="bk.png" className="bk bk2"/>
            <img src="ruler.png" className="ruler"/>
            <img src="ruler.png" className="ruler ruler2"/>
            <div className="head">Welcome Back, {username} !!</div>
            <img src="hey.gif"  className="hi" />
            <div className="crs"><center><b>Course-</b> {course}<br/> <b>Cost-</b> ₹{cost} <br/> <b>By-</b> Professor {username}<br/> <b>Total Enrollments-</b> {totalEnrollments}</center></div>
            <img src="profile.png"  className="profile"/>
        </div>
    );
}

export default Teacher;