import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className="header-component">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <nav>
                    <ul className="d-flex">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/doctors">Doctors</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        {
                            user.email ?
                                <div>
                                    <li className="text-white">{user?.displayName}</li>
                                    <button onClick={logOut}>Log Out</button>
                                </div>
                                :
                                <li><Link className="login-li" to="/login">Login</Link></li>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;