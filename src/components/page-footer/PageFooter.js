import React from "react";

import "./PageFooter.scss";

const PageFooter = ({ children, style, className }) => {
    return (
        <div id="page-footer-frame-container">
            <div id="page-footer" style={{style}} className={className}>
                {children}
            </div>
        </div>
    );
};

export default PageFooter;
