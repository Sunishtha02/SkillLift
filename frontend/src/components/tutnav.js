import React from "react";
import "../App.css";
import {NavLink} from "react-router-dom";
import {FaUserGraduate} from 'react-icons/fa';
import {RiShutDownLine} from 'react-icons/ri';
import { BsSearch} from "react-icons/bs";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';


function Tutnav(){
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
                <li><NavLink className="link" exact to="/tutor"><FaUserGraduate className="icon icon2"></FaUserGraduate></NavLink></li>
                <li className="itm class class2" ><NavLink className="link" exact to="/class">Classroom</NavLink></li>
                <li>
                    <form className="search search2">
                        <button type="submit" ><BsSearch></BsSearch></button>
                        <input type="text" placeholder="Search for courses" />
                    </form>
                </li>
                <li className="itm un un2">
                    <NavLink className="link" exact to="/tutor">{username}</NavLink> &nbsp;
                    <img src="online.png" height="11px"/>
                </li>
                <li className="logout">
                    <NavLink className="link" exact to="/home"><RiShutDownLine className="icon"></RiShutDownLine></NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Tutnav;