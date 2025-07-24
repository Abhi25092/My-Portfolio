import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { MdDriveFolderUpload } from 'react-icons/md';

function Navbar() {
    return(
        <nav className='navbar'>
            <h1>My Portfolio</h1>
            <ul>
                <li><Link to="home" smooth={true} duration={600}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={600}>About</Link></li>
                <li><Link to="projects" smooth={true} duration={600}>Projects</Link></li>
                <li><Link to="skills" smooth={true} duration={600}>Skills</Link></li>
                <li><Link to="contact" smooth={true} duration={600}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;