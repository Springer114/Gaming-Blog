import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from "../views/Home";
import About from "../views/About";
import LoginForm from './LoginForm'
import RegisterForm from "./RegisterForm";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar">
                <span className="title">A Gaming Space</span>
                <FontAwesomeIcon icon="fa-solid fa-tree" />
                    <ul className="nav">
                        <li><Link to={"/"} className="nav-link">Home</Link></li>
                        <li><Link to={"/about"} className="nav-link">About</Link></li>
                        <li><Link to={"/login"} className="nav-link">Login</Link></li>
                        <li><Link to={"/register"} className="nav-link">Register</Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/register" component={RegisterForm} />
                </Switch>
            </Router>
        );
    }
}
