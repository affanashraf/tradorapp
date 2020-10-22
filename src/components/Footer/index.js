import React from "react";
import "./Footer.css";
import "animate.css";
function Footer() {
  return (
    <div className="footer-container">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "85%",
          backgroundColor: "#fcbb5d",
        }}
      >
        <div className="footer-parts-container">
          <div className="footer-parts">
            <div className="footer-logo-container">
              {/* Logo */}
              <div>
                <div style={{ display: "flex" }}>
                  <text className="footer-logo">ALG</text>
                  <text className="footer-logo" style={{ color: "red" }}>
                    O
                  </text>
                  <text className="footer-logo">SUTRAS.COM</text>
                </div>
              </div>
              {/*  */}
              <text
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "Jost",
                  color: "#6fa6c0",
                  margin: "10px",
                }}
              >
                (A Division of PITTER SHARE BROKING PRIVATE LIMITED)
              </text>
              {/*  */}
              <text
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "Jost",
                  color: "#1c7365",
                  margin: "10px",
                }}
              >
                228A, A J C Bose Road, Landmark 8E
              </text>
              <text
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "Jost",
                  color: "#1c7365",
                  margin: "10px",
                }}
              >
                Kolkata(West Bengal), 700020, INDIA
              </text>
            </div>
            {/*  */}
            <div className="footer-column">
              <text>Useful Links</text>
              <text
                style={{
                  padding: "8px",
                  paddingLeft: "35px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ fontWeight: "700", marginRight: "5px" }}
                ></i>
                Home
              </text>
              <text
                style={{
                  padding: "8px",
                  paddingLeft: "35px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ fontWeight: "700", marginRight: "5px" }}
                ></i>
                About Us
              </text>
              <text
                style={{
                  padding: "8px",
                  paddingLeft: "35px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ fontWeight: "700", marginRight: "5px" }}
                ></i>
                Services
              </text>
              <text
                style={{
                  padding: "8px",
                  paddingLeft: "35px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ fontWeight: "700", marginRight: "5px" }}
                ></i>
                Terms of services
              </text>
              <text
                style={{
                  padding: "8px",
                  paddingLeft: "35px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ fontWeight: "700", marginRight: "5px" }}
                ></i>
                Privacy Policy
              </text>
            </div>
            {/*  */}
            <div className="footer-column">
              <text>Our Services</text>
              <text
                style={{
                  padding: "8px",
                  paddingLeft: "35px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ fontWeight: "700", marginRight: "5px" }}
                ></i>
                Algo Strategy Guidance
              </text>
              <text
                style={{
                  padding: "8px",
                  paddingLeft: "35px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ fontWeight: "700", marginRight: "5px" }}
                ></i>
                Automate Algo Trading
              </text>
              <text
                style={{
                  padding: "8px",
                  paddingLeft: "35px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ fontWeight: "700", marginRight: "5px" }}
                ></i>
                Backtesting Algo Strategies
              </text>
              <text
                style={{
                  padding: "8px",
                  paddingLeft: "35px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="fa fa-angle-right"
                  style={{ fontWeight: "700", marginRight: "5px" }}
                ></i>
                Trading Software Development
              </text>
            </div>
            {/*  */}
            <div className="footer-column">
              <text>Our School Networks</text>
              <text style={{ padding: "8px", paddingLeft: "35px" }}>
                Stay connected with us on your
              </text>
              <text style={{ padding: "8px", paddingLeft: "35px" }}>
                social media platforms
              </text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  fontSize: "25px",
                }}
              >
                <i
                  className="fa fa-facebook-f"
                  style={{ cursor: "pointer" }}
                ></i>
                <i className="fa fa-twitter" style={{ cursor: "pointer" }}></i>
                <i
                  className="fa fa-instagram"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "15%",
          backgroundColor: "black",
        }}
      >
        <div className="footer-bottom">
          <div
            className="footer-bottom-parts"
          >
            <text>
              <i className="fa fa-copyright"></i>
              Design & Develop by NUI kit 2020
            </text>
            <text>Phone: +1 5589 55488 55</text>
            <text>Email: enquiry@algosutras.com</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
