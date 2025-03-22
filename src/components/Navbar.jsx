import { Link } from "react-router-dom";
function Navbar({setActiveTab}) {
    return (
        <nav>
            <Link to = "/" onClick={() => setActiveTab("home")}>Home </Link> 
            <Link to = "/about" onClick={() => setActiveTab("about")}>About </Link> 
            <Link to = "/projects" onClick={() => setActiveTab("projects")}>Projects </Link> 
            <Link to = "/contact" onClick={() => setActiveTab("contact")}>Contact </Link> 
        </nav>
    );
}

export default Navbar;