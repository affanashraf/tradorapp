import React from "react";
import "./About.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import {useHistory} from "react-router-dom"
function About() {
  const history = useHistory()
  return (
    <div style={{ width: "1280px", height: "50vh", backgroundColor: "#fafafa" }}>
      <ScrollAnimation
        animateOnce={true}
        animateIn="animate__fadeInLeft"
        duration="1"
      >
        <text className="about-title">ABOUT</text>
      </ScrollAnimation>

      <div className="about-parts">
        <div className="about-txt">
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__fadeInDown"
            duration="1"
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__bounceIn"
            duration="1"
          >
            <ul style={{ listStyleType: "square" }}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Donec venenatis massa sit amet enim ornare, ac imperdiet arcu
              congue.
            </li>
            <li>Ut maximus magna nec interdum convallis.</li>
          </ul>
          </ScrollAnimation>
          
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__fadeInUp"
            duration="1"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in lobortis ipsum. Nam laoreet viverra sem, at
              sollicitudin lectus mollis sed. Nunc sit amet varius lorem. Ut non
              commodo ipsum. Sed ut leo a mauris dapibus commodo nec ut enim.
              Donec vel neque nisl. Nunc elementum semper augue et fringilla.
            </p>
          </ScrollAnimation>

          <button className="read-more" onClick={()=>history.push("/about")} >
            Read More
            <i
              style={{
                marginLeft: "5px",
              }}
              className="fa fa-arrow-right"
            ></i>
          </button>
        </div>
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInRight"
          duration="1"
        >
          <img
            src='/images/about.JPG'
            className="about-icon"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default About;
