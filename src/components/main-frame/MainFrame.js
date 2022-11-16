import React from "react";

import "./MainFrame.scss";

const MainFrame = ({ children, style, className }) => {
    return (
        <div id="main-frame-container">
            <div id="main-frame" style={{style}} className={className}>
                {children}
            </div>
        </div>
    );
};

export default MainFrame;
