import React from "react";
import "./AppBar.css";
function AppBar() {
  return (
    <div className="app-bar-container">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div className="app-bar">
          {/* Logo */}
          <div className="app-bar-logo-container">
            <text className="app-bar-logo">ALG</text>
            <text
              style={{ color: "red", fontSize: "40px" }}
              className="signup-logo"
            >
              O
            </text>
            <text className="app-bar-logo">SUTRAS</text>
          </div>
          {/* Links */}
          <div className="app-bar-links-container">
            <text className="app-bar-link">FEED</text>
            <text className="app-bar-link">AUTHORS</text>
            <text className="app-bar-link">EXPLORE</text>
            <text className="app-bar-link">BLOG</text>
            <text className="app-bar-link">CONTACT</text>
            <button className="app-bar-get-started" >Get Started </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
