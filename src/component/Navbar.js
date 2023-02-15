import React, { useState } from "react";
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
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="#">Category</a>
                        </li>
                        <li>
                            <a href="#">Cart</a>
                        </li>
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
            {/* Hero Section */}
            <section className="hero-section">
            <p>Welcome</p>
            <h1>Hi</h1>
            </section>

        </>
    );
}

export default Navbar