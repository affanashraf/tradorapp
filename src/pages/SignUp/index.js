import React from "react";
import "./SignUp.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import {useHistory} from "react-router-dom"
function SignUp() {
  const history = useHistory()
  return (
    <div className="signup-conatiner">
      <div className="signup-logo-desc">
        <div style={{ display: "flex" }}>
          <text className="signup-logo">ALG</text>
          <text style={{ color: "red" }} className="signup-logo">
            O
          </text>
          <text className="signup-logo">SUTRAS</text>
        </div>
        <ScrollAnimation
          animateIn="animate__zoomIn"
          animateOnce={true}
          duration="1"
        >
          <p className="signup-lodo-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            venenatis lorem. Phasellus blandit bibendum lectus, hendrerit
            efficitur metus porta in. Curabitur ex turpis, volutpat et feugiat
            nec, laoreet a ligula. Nulla sagittis ultrices leo, et posuere arcu
            accumsan eu. Aenean tempor dictum nisl sed egestas. Curabitur
            ullamcorper ornare dolor ut rhoncus. Proin nisl est, malesuada a
            ligula eget, vestibulum gravida lectus.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn="animate__slideInDown" duration="1">
          <div className="signup-no-acount" onClick={()=>history.push("/login")} >Already have an account</div>
        </ScrollAnimation>
      </div>
      <div className="signup-form-container">
        <div>
          <text className="signup-title">SIGN UP</text>
        </div>
        <div className="signup-form">
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__flipInY"
            duration="1"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="signup-form-label">FULL NAME</label>
              <input
                className="signup-form-txt-field"
                type="text"
                placeholder="John Doe"
              ></input>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="signup-form-label">EMAIL</label>
              <input
                className="signup-form-txt-field"
                type="text"
                placeholder="someone@nui.com"
              ></input>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="signup-form-label">PHONE NO.</label>
              <input
                className="signup-form-txt-field"
                type="text"
                placeholder="xxxxxxxxxx"
              ></input>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="signup-form-label">PASSWORD</label>
              <input
                className="signup-form-txt-field"
                type="password"
                placeholder="*****"
              ></input>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="signup-form-label">CONFIRM PASSWORD</label>
              <input
                className="signup-form-txt-field"
                type="password"
                placeholder="*****"
              ></input>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className="signup-term-condition"
                type="checkbox"
                style={{ margin: "15px" }}
              ></input>
              <label style={{ color: "#666666" }}>
                I agree the terms and conditions
              </label>
            </div>

            <input type="submit" className="signup-btn" value="Sign Up" onClick={()=>history.push("/")} ></input>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
