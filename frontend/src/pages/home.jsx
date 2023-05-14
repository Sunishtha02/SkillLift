import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import "../pages/home.css";

function Home(){
    return(
        <div>
            <Navbar/>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/015/952/original/glowing-blue-and-pink-neon-line-box-pattern-free-video.jpg" className="headimg"/>
            <div className="wlcm">Welcome to SkillLift !!</div>
            <div className="boxf">
                <div className="inf">
                    <img src="https://images.pond5.com/neon-cross-mark-x-symbol-footage-122695446_iconl.jpeg" className="cross" />
                    <span className="info">Don't let the geography <br/> limit your learning potential.<br/></span>
                    <img src="https://dschondog.files.wordpress.com/2012/03/neon-arrow-right-icon-black-250.jpg?w=250" className="arrow"/>
                    <span className="info info2"> With SkillLift, you can learn <br/>anywhere, anytime!!</span>
                    <img src="https://img.gifmagazine.net/gifmagazine/images/4335402/original.gif" className="lgs"/>
                    <NavLink exact to="/signup"><span className="lgstxt">Let's get started!!</span></NavLink>
                </div>
                <img src="https://images.pond5.com/swinging-light-bulb-black-background-footage-086288595_prevstill.jpeg"  className="bulb"/>
                <img src="https://media3.giphy.com/media/GezZQ4piN3jXwMeQWe/giphy.gif?cid=6c09b9521md4tp8mxfphwz2tlffng0q4fczlj3icke935rqr&ep=v1_stickers_related&rid=giphy.gif&ct=s" className="graph" />
                <span className="compic">
                    <img src="../tutpic.png" height="360px"/>
                </span>
                <img src="dvd.jpg" className="dvd"/>
            </div>
            <div className="boxs">
                <div className="about"><center>About Us</center></div>
                <img src="abtbox.png" className="abtbox"/>
                <img src="abtbox.png" className="abtbox" style={{marginLeft:300}}/>
                <img src="abtbox.png" className="abtbox" style={{marginLeft:600}}/>
                <img src="abtbox.png" className="abtbox" style={{marginLeft:900}}/>
                <div className="abouttext">
                    <div className="abt" style={{marginLeft:70, marginRight:65}}>
                        <span className="abttxt">Our platform connects students with qualified and experienced tutors from around the world, making learning accessible, convenient, and enjoyable.</span>
                    </div>
                    <div className="abt" style={{marginRight:60}}>
                        <span className="abttxt">Our tutors are carefully selected and trained to provide personalized attention and effective guidance. They are available 24/7 to answer your questions and help you reach your goals.</span>
                    </div>
                    <div className="abt" style={{marginRight:62}}>
                        <span className="abttxt">All of our tutors use our state-of-the-art virtual learning environment which includes features such as video conferencing, interactive whiteboards, and more.</span>
                    </div>
                    <div className="abt">
                        <span className="abttxt">Join the thousands of students who have already improved their grades, confidence, and knowledge with our platform. Sign up now and start learning with one of our expert tutors.</span>
                    </div>
                </div>
                <img src="dvd.jpg" className="dvd" style={{top:500}}/>
            </div>
            <div>
                <img src="edu.png" className="edu"/>
                <img src="dvd.jpg" className="dvd" style={{top:1710}}/>
            </div>
            <div>
                <img src="ruler.png" className="ruler" style={{marginTop:-120, left:20}}/>
                <img src="ruler.png" className="ruler ruler2"/>
                <img src="ruler.png" className="ruler" style={{marginTop:0, left:20}}/>
                <img src="ruler.png" className="ruler ruler2"/>
                <center>
                <iframe className="yt" width="692" height="361" src="https://www.youtube.com/embed/5JKgUoY9pTg" title="The Era of Online Learning | Niema Moshiri | TEDxUCSD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </center>
            </div>
        </div>
    );
}

export default Home;