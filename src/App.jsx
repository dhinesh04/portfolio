import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";
import { FaGithub, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ProfExperience from "./sections/ProfExperience";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import ResearchExperience from "./sections/ResearchExperience";

function App(){

     return(
        <Router>
            <div className="container">
            <header>
                <h2>Dhinesh Sivakumar</h2>
                <p className="contact-info">
                    <span><FaLocationDot/>&nbsp; Columbus, OH</span>
                    <span><MdEmail/>&nbsp; dhineshkumar4645@gmail.com</span>
                    <span><FaPhoneAlt/>&nbsp;+1-614-554-9749</span>
                    <span><SiLeetcode/>&nbsp;<a href="https://leetcode.com/u/dhineshkumar4645/">LeetCode</a></span>
                    <span><FaGithub/>&nbsp;<a href="https://github.com/dhinesh04">Github</a></span>
                    <span><FaMedium/>&nbsp;<a href="https://medium.com/@dhinesh_kumar">Medium</a></span>
                </p>   
                </header> 
            <Skills/>
            <ProfExperience/>
            <ResearchExperience/>
            <Projects/>
            <Education/>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;