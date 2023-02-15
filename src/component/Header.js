import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <>
            <nav className="main-nav">
            {/* 1st logo */}
                <div className="logo">
                    <h2>
                        <span>F</span>amous
                        <span>C</span>hicken
                    </h2>
                </div>
                {/* 2nd Menu */}

                <div className ={ showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li><NavLink to = "/">Home</NavLink></li>
                        <li><NavLink to ="/about">About</NavLink></li>
                        <li><NavLink to ="/menu">Menu</NavLink></li>
                        <li><NavLink to ="/checkout">Checkout</NavLink></li>
                        <li><NavLink to ="/contact">Contact</NavLink></li>
                    </ul>
                </div>

                {/* 3rd Links */}
                
                <div className="extra-links">
                <ul>
                        <li>
                            <a href="#">Register</a>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>   
                    </ul>
                    {/* Hamburger Menu */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                            </a>
                    </div>
                    </div>
            </nav>
        </>
    );
}

export default Navbar