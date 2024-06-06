import { useState } from 'react';
import './navbar.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="navbar">
                <div className="logo ">
                    <span>Portfolio</span>
                    <span className="bars" onClick={toggleNavbar}>
                        <i className="fa-solid fa-bars "></i>

                    </span>
                </div>
                <div className="menu ">
                    <ul className={`listItem ${isOpen ? 'listItem' : 'listClose'}`}>
                        <li className="listContent"><a href="#hero">Home</a></li>
                        <li className="listContent"><a href="#skill">Skills</a></li>
                        <li className="listContent"><a href="#project">Projects</a></li>
                        <li className="listContent"><a href="#service">Services</a></li>
                        <li className="listContent"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
