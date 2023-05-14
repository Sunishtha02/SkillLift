import React from "react";
import "./admin.css";
import { NavLink } from "react-router-dom";
import Tutnav from "../components/tutnav";

function Admin(){
    return(
        <div className="main">
        <center>
            <h1 className="adhead">ADMIN PANEL</h1>
            <NavLink exact to="/home">
            <img src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" className="backhome"/>
            <img src="dvd2.jpg" className="extra"/>
            <img src="dvd2.jpg" className="extra" style={{left:860}}/>
            <img src="ruler.png" className="adrul"/>
            <img src="ruler.png" className="adrul adrul2"/>

            </NavLink>
            <NavLink exact to="/studinfo">
            <div className="adreg">
                REGISTERED <br/> STUDENTS
            </div>
            </NavLink>
            <NavLink exact to="/tutorinfo">
            <div className="adreg">
                REGISTERED <br/> TUTORS
            </div>
            </NavLink>
            <NavLink exact to="/getcourse">
            <div className="adreg">
                COURSES <br/> AVAILABLE
            </div>
            </NavLink>
        </center>
        </div>
    );
}

export default Admin;