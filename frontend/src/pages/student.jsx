import React from "react";
import Studnav from "../components/studnav";
import "../pages/student.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function Student(props){
    const[username, setUsername]=useState('');
    useEffect(() => {
        const storedUsername = Cookies.get('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
    return(
        <div>
            <Studnav/>
            <div className="head">Welcome Back, {username}!!</div>
            <img src="hey.gif"  className="hi" />
            <img src="bk.png" className="bk"/>
            <div className="bx1" >Enroll for courses <br/> at the best prices.</div>
            <div className="offer">Get <span style={{color:"#FF3131"}}>50%</span> discount on courses. <br/> Offer valid till 12 pm today !!</div>
            <div className="lrn">Learn from the best tutors <br/> online with SkillLift!! </div>
            <img src="https://thumbs.dreamstime.com/b/shape-human-brain-scienctific-symbols-formulas-equations-math-chemistry-biology-physics-geometry-black-background-d-117087484.jpg" className=" formula" />
            <img src="arrow.gif" className="arw"/>
        </div>
    );
}

export default Student;