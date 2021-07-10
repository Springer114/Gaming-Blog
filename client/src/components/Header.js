import React from "react";
import { Link } from "@reach/router";

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="site-name">
                    <i className="fa fa-gamepad" aria-hidden="true"></i>
                    <span className="title">A Gaming Space</span>
                </div>
                <ul className="nav">
                    <li><Link to={"/"} className="nav-link">Home</Link></li>
                    <li><Link to={"/about"} className="nav-link">About</Link></li>
                    <li><Link to={"/users/:id"} className="nav-link">Profile</Link></li>
                    <li><Link to={"/login"} className="nav-link">Login</Link></li>
                    <li><Link to={"/register"} className="nav-link">Register</Link></li>
                </ul>
            </nav>
            <hr />
        </div>
    );
}

export default Header