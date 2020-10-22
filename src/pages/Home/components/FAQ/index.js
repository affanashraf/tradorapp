import React from "react";
import "./FAQ.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

function FAQ() {
  return (
    <div style={{width:"100%"}} >
      <div className="faq-title">
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInLeft"
          duration="1"
        >
          <text>F.A.Q</text>
        </ScrollAnimation>
      </div>
      <div className="faq-parts">
        <div className="faq-icon">
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__fadeInLeft"
            duration="1"
          >
            <img src="/images/faq.png" style={{ width: "100%" }} />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation
            animateOnce={true}
            animateIn="animate__fadeInRight"
            duration="0.5"
          >
            <div className="faq-question-list">
              <div className="faq-question">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <text className="faq-ques-txt">Why do we use it?</text>
                  <text className="faq-ques-read-answer">Read Answer</text>
                </div>
                <div>
                  <i
                    className="fa fa-sort-down"
                    style={{
                      color: "#016a66",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>

              <div className="faq-question">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <text className="faq-ques-txt">Where can I get some?</text>
                  <text className="faq-ques-read-answer">Read Answer</text>
                </div>
                <div>
                  <i
                    className="fa fa-sort-down"
                    style={{
                      color: "#016a66",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>

              <div className="faq-question">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <text className="faq-ques-txt">What is Lorem Ipsum?</text>
                  <text className="faq-ques-read-answer">Read Answer</text>
                </div>
                <div>
                  <i
                    className="fa fa-sort-down"
                    style={{
                      color: "#016a66",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>

              <div className="faq-question">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <text className="faq-ques-txt">Where does it come from?</text>
                  <text className="faq-ques-read-answer">Read Answer</text>
                </div>
                <div>
                  <i
                    className="fa fa-sort-down"
                    style={{
                      color: "#016a66",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  ></i>
                </div>
              </div>
              <div className="faq-view-more">
                <text
                  style={{
                    color: "#016a66",
                  }}
                >
                  View More
                </text>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
