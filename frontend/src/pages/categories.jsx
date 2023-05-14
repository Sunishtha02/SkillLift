import React from "react";
import Navbar from "../components/navbar";
import "../pages/categories.css";

function Categories(){
    return(
        <div className="main">
            <Navbar/>
            <img src="dvd2.jpg" className="side"/>
            <img src="dvd2.jpg" className="side side2"/>
            <div className="all">
                <div className="cf"> 
                    <div className="pill c1"><center>English</center></div>
                    <div className="pill c2"><center>Hindi</center></div>
                    <div className="pill c3"><center>Maths</center></div>
                </div>
                <div className="cs">
                    <div className="pill c4"><center>C++</center></div>
                    <div className="pill c5"><center>Java</center></div>
                    <div className="pill c6"><center>Python</center></div>
                </div>
                <div className="ct">
                    <div className="pill c7"><center>Science</center></div>
                    <div className="pill c8"><center>React</center></div>
                    <div className="pill c9"><center>JavaScript</center></div>
                </div>
            </div>
        </div>
    );
}

export default Categories;