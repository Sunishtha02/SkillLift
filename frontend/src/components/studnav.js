import React from "react";
import "../App.css";
import {NavLink} from "react-router-dom";
import {FaUserGraduate} from 'react-icons/fa';
import {RiShutDownLine} from 'react-icons/ri';
import { BsSearch} from "react-icons/bs";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';


function Studnav(){
    const[username, setUsername]=useState('');
    useEffect(() => {
        const storedUsername = Cookies.get('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
    return(
        <div className="nav">
            <ul id="nav">
                <li><NavLink className="link" exact to="/student"><FaUserGraduate className="icon"></FaUserGraduate></NavLink></li>
                <li className="itm1 cat"><NavLink className="link" exact to="/scat">Categories</NavLink></li>
                <li>
                    <form className="search">
                        <button type="submit"><BsSearch></BsSearch></button>
                        <input type="text" placeholder="Search for courses" />
                    </form>
                </li>
                <li className="itm1 class" ><NavLink className="link" exact to="/classroom">Classroom</NavLink></li>
                <li className="itm1 un">
                    <NavLink className="link" exact to="/student">{username}</NavLink> &nbsp;
                    <img src="online.png" height="11px"/>
                </li>
                <li className="logout">
                    <NavLink className="link" exact to="/home"><RiShutDownLine className="icon"></RiShutDownLine></NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Studnav;