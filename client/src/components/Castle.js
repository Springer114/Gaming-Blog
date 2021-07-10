import React from "react";

const Castle = () => {
    return (
        <div className="castle">
            <div className="flags">
                <span className="flag"></span>
                <span className="flag"></span>
                <span className="flag"></span>
            </div>

            <div className="tower-tops">
                <span className="tower-top"></span>
                <span className="tower-top"></span>
                <span className="tower-top"></span>
            </div>
            <div className="tower-columns">
                <span className="tower-column"></span>
                <span className="tower-column"></span>
                <span className="tower-column"></span>
            </div>

            <div className="tower-middles">
                <span className="tower-middle"></span>
                <span className="tower-middle"></span>
                <span className="tower-middle"></span>
            </div>

            <div className="tower-bottoms">
                <span className="tower-bottom"></span>
                <span className="tower-door"></span>
                <span className="tower-door"></span>
                <span className="tower-bottom"></span>
            </div>
        </div>
    );
};

export default Castle;
