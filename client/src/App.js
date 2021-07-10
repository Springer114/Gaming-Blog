import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header.js";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import Register from "./views/Registration";
import Profile from "./views/UserProfile";
import "./index.css";

const App = () => {

    return (
        <div className="App">
            <Header />
            <Router>
                <Home path="/" />
                <About path="/about" />
                <Login path="/login" />
                <Register path="/register" />
                <Profile path="/users/:id" />
            </Router>
        </div>
    );
};

export default App;