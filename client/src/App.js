import React from "react";
import Header from "./components/Header.js";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTree } from "@fortawesome/free-solid-svg-icons";

library.add( faTree );

const App = () => {
    return (
        <div className="App">
            <Header />
        </div>
    );
};

export default App;
