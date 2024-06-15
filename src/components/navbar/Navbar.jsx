// import { useState } from 'react';
// import './navbar.css'


// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };
//     return (
//         <>
//             <div className="navbar">
//                 <div className="logo ">
//                     <span>Portfolio</span>
//                     <span className="bars" onClick={toggleNavbar}>
//                         <i className="fa-solid fa-bars "></i>

//                     </span>
//                 </div>
//                 <div className="menu ">
//                     <ul className={`listItem ${isOpen ? 'listItem' : 'listClose'}`}>
//                         <li className="listContent"><a href="#hero">Home</a></li>
//                         <li className="listContent"><a href="#skill">Skills</a></li>
//                         <li className="listContent"><a href="#project">Projects</a></li>
//                         <li className="listContent"><a href="#service">Services</a></li>
//                         <li className="listContent"><a href="#contact">Contact</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar

import React, { useState, useRef, useEffect } from 'react'; // Importing necessary hooks
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the menu's open/close status
    const menuRef = useRef(null); // Reference to the menu element
    const buttonRef = useRef(null); // Reference to the button element

    const toggleNavbar = () => {
        setIsOpen(!isOpen); // Toggle the menu's open/close status
    };

    const handleClickOutside = (event) => {
        // Function to handle clicks outside the menu and button
        if (menuRef.current && !menuRef.current.contains(event.target) &&
            buttonRef.current && !buttonRef.current.contains(event.target)) {
            setIsOpen(false); // Close the menu if the click is outside
        }
    };

    useEffect(() => {
        // Effect to add/remove event listener based on the menu's open/close status
        if (isOpen) {
            document.addEventListener('click', handleClickOutside); // Add event listener when menu is open
        } else {
            document.removeEventListener('click', handleClickOutside); // Remove event listener when menu is closed
        }

        return () => {
            document.removeEventListener('click', handleClickOutside); // Cleanup event listener on unmount
        };
    }, [isOpen]); // Dependency array to run the effect when isOpen changes

    return (
        <div className="navbar">
            <div className="logo">
                <span>Portfolio</span>
                <span className="bars" onClick={toggleNavbar} ref={buttonRef}>
                    {/* Reference to the button element */}
                    <i className="fa-solid fa-bars"></i>
                </span>
            </div>
            <div className="menu" ref={menuRef}>
                {/* Reference to the menu element */}
                <ul className={`listItem ${isOpen ? 'listItem' : 'listClose'}`}>
                    <li className="listContent"><a href="#hero">Home</a></li>
                    <li className="listContent"><a href="#skill">Skills</a></li>
                    <li className="listContent"><a href="#project">Projects</a></li>
                    <li className="listContent"><a href="#service">Services</a></li>
                    <li className="listContent"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
