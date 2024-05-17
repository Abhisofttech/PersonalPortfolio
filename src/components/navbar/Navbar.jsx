import { useState } from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';


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
                        <li className="listContent"><NavLink to="/">Home</NavLink></li>
                        <li className="listContent"><NavLink to="/skill">Skills</NavLink></li>
                        <li className="listContent"><NavLink to="/project">Projects</NavLink></li>
                        <li className="listContent"><NavLink to="/service">Services</NavLink></li>
                        <li className="listContent"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
