import React from "react";
import Studnav from "../components/studnav";
import "../pages/categories.css";
import {NavLink} from "react-router-dom";

function Scat(){
    return(
        <div>
            <Studnav/>
            <img src="dvd2.jpg" className="side"/>
            <img src="dvd2.jpg" className="side side2"/>
            <div className="all">
                <div className="cf"> 
                    <NavLink className="slink" exact to="/english"><div className="pill c1"><center>English</center></div></NavLink>
                    <NavLink className="slink" exact to="/hindi"><div className="pill c2"><center>Hindi</center></div></NavLink>
                    <NavLink className="slink" exact to="/maths"><div className="pill c3"><center>Maths</center></div></NavLink>
                </div>
                <div className="cs">
                    <NavLink className="slink" exact to="/cplus"><div className="pill c4"><center>C++</center></div></NavLink>
                    <NavLink className="slink" exact to="/java"><div className="pill c5"><center>Java</center></div></NavLink>
                    <NavLink className="slink" exact to="/python"><div className="pill c6"><center>Python</center></div></NavLink>
                </div>
                <div className="ct">
                    <NavLink className="slink" exact to="/science"><div className="pill c7"><center>Science</center></div></NavLink>
                    <NavLink className="slink" exact to="/creact"><div className="pill c8"><center>React</center></div></NavLink>
                    <NavLink className="slink" exact to="/javascript"><div className="pill c9"><center>JavaScript</center></div></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Scat;