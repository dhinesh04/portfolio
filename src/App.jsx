import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App(){
    const [activeTab, setActiveTab] = useState("home");

     return(
        <Router>
            {/* <Navbar setActiveTab={setActiveTab}/> */}
            <header>
                <h1>Welcome to my portfolio!</h1>
            </header>
            <div className="tabs">
                <button onClick={() => setActiveTab("home")}>Home</button>
                <button onClick={() => setActiveTab("about")}>About</button>
                <button onClick={() => setActiveTab("projects")}>Projects</button>
                <button onClick={() => setActiveTab("contact")}>Contact</button>
            </div>
            {activeTab === "home" && <Home />}
            {activeTab === "about" && <About />}
            {activeTab === "projects" && <Projects />}
            {activeTab === "contact" && <Contact />}
            <Footer/>
        </Router>
    );
}

export default App;