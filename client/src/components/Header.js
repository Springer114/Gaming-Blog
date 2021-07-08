import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from "../views/Home";
import About from "../views/About";


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
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        );
    }
}
