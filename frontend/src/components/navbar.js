import React from "react";
import "../App.css";
import {NavLink} from "react-router-dom";
import {FaUserGraduate} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';

function Navbar(){
  return(
    <div className="nav">
      <ul id="nav">
        <li><NavLink className="link" exact to="/"><FaUserGraduate className="icon"></FaUserGraduate></NavLink></li>
        <li className="itm cat"><NavLink className="link" exact to="/categories">Categories</NavLink></li>
        <li>
            <form className="search">
                <NavLink exact to="/categories"><button type="submit" style={{cursor:"pointer"}}><BsSearch></BsSearch></button></NavLink>
                <input type="text" placeholder="Search for courses" />
            </form>
        </li>
        <li className="itm tch" ><NavLink className="link" exact to="/tsignup">Teach here</NavLink></li>
        <li className="itm lgin">
          <NavLink className="link" exact to="/login">Log in</NavLink>
        </li>
        <li className="itm ">
          <NavLink className="link" exact to="/signup">Sign up</NavLink>
        </li>
    </ul>
    </div>
  );
}

export default Navbar;