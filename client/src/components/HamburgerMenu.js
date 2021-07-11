import React, { useState } from "react";

const Hamburger = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div className={isActive ? null : "open"}>
            <span className="hamburger" onClick={handleToggle}>
                <span class="line line-top"></span>
                <span class="line line-middle"></span>
                <span class="line line-bottom"></span>
            </span>
        </div>
    );
};

export default Hamburger;
