import React from "react";
import "./Login.css";
import ReCAPTCHA from "react-google-recaptcha";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useHistory } from "react-router-dom"

function Login() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const history = useHistory()
  return (
    <div className="login-conatiner">
      <div className="login-logo-desc">
        <div style={{ display: "flex" }}>
          <text className="login-logo">ALG</text>
          <text style={{ color: "red" }} className="login-logo">
            O
          </text>
          <text className="login-logo">SUTRAS</text>
        </div>

        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__zoomIn"
          duration="1"
        >
          <p className="login-lodo-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            venenatis lorem. Phasellus blandit bibendum lectus, hendrerit
            efficitur metus porta in. Curabitur ex turpis, volutpat et feugiat
            nec, laoreet a ligula. Nulla sagittis ultrices leo, et posuere arcu
            accumsan eu. Aenean tempor dictum nisl sed egestas. Curabitur
            ullamcorper ornare dolor ut rhoncus. Proin nisl est, malesuada a
            ligula eget, vestibulum gravida lectus.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__slideInDown"
          duration="1"
        >
          <div className="login-no-acount" onClick={()=>history.push("/signup")} >Don't have account?</div>
        </ScrollAnimation>
      </div>

      <div className="login-form-container">
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__flipInY"
          duration="1"
        >
          <div>
            <text className="login-title">SIGN IN</text>
          </div>
          <div className="login-form">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="login-form-label">EMAIL</label>
              <input
                className="login-form-txt-field"
                type="text"
                placeholder="someone@nui.com"
              ></input>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="login-form-label">PASSWORD</label>
              <input
                className="login-form-txt-field"
                type="password"
                placeholder="*****"
              ></input>
            </div>

            <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
            <input type="submit" className="login-btn" value="Login" onClick={()=>history.push("/")} ></input>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Login;
