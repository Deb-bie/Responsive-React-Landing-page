import React , { useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LinkR } from 'react-scroll';


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        Zubi
                        <MdFingerprint className="navbar-icon" />
                    </Link>

                    <div className="nav-icon"  onClick={handleClick} >
                        {click ? <FaTimes /> :<FaBars /> }
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link exact to='/' activeClassName="active" className="nav-links" onClick={handleClick}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link exact to='/about' activeClassName="active" className="nav-links" onClick={handleClick}>
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link exact to='/services' activeClassName="active" className="nav-links" onClick={handleClick}>
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link exact to='/signup' activeClassName="active" className="nav-links" onClick={handleClick}>
                                Sign Up
                            </Link>
                        </li>

                        <div className="nav-button">
                            <Link to='/signin' className="nav-btn-link">Sign In</Link>
                        </div>

                    </ul>

                    
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar
