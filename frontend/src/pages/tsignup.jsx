import React, {useState} from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import "../pages/signup.css";

function Tsignup(){
    const [courseReg, setCourseReg]=useState('')
    const [usernameReg, setUsernameReg]=useState('')
    const [passwordReg, setPasswordReg]=useState('')
    const [mobReg, setMobReg]=useState('')
    const [costReg, setCostReg]=useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const tregister=()=>{
      Axios.post("http://localhost:3001/tregister", {
        Course: courseReg,
        Username:usernameReg,
        Password: passwordReg,
        MobNumber: mobReg,
        Cost: costReg
      }).then((response)=>{
        console.log(response);
        if(response.data === 'Tutor already exists') {
          setErrorMsg("Username already exists");
        } else if(response.data === 'fill all fields') {
          setErrorMsg("Please fill all the fields");
        }else{
          setErrorMsg("Congratulations!! You are now a tutor");
        }
      });
    };


  return(
    <div className="obox">
      <div>
        <center><NavLink exact to="/home"><h1 className="heading nhead">SkillLift</h1></NavLink></center>
        <center>
        <p className="para">Sign up to find the best tutors online.</p>
        <select id="course" name="course" className="opt" onChange={(e)=>{
            setCourseReg(e.target.value);
        }}>
            <option value="">Select a course</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Maths">Maths</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Science">Science</option>
            <option value="React">React</option>
            <option value="Javascript">JavaScript</option>
        </select><br/><br/>
        <center>
        <input type="text" className="inpbox" placeholder="Cost"  onChange={(e)=>{
            setCostReg(e.target.value);
        }}/>
        <input type="text" className="inpbox" placeholder="Username" onChange={(e)=>{
            setUsernameReg(e.target.value);
        }}/>   <br/>
        </center>
        <input type="password" className="inpbox" placeholder="Password" onChange={(e)=>{
            setPasswordReg(e.target.value);
        }}/>  
        <input type="text" className="inpbox" placeholder="Mobile Number" onChange={(e)=>{
            setMobReg(e.target.value);
        }}/>   <br/>
        {errorMsg && <p style={{color: 'red'}}>{errorMsg}</p>}
        <p>By signing up, you agree to our Terms , Privacy<br/> Policy and Cookies Policy .</p>
        <button onClick={tregister} className="btn sign">Sign up</button>
        </center>

      </div>
    </div>
  );
} 
export default Tsignup;