import React from "react";

import "./MainFrame.scss";

const MainFrame = ({ children }) => {
    return (
        <div id="main-frame-container">
            <div id="main-frame">
                {children}
            </div>
        </div>
    );
};

export default MainFrame;
