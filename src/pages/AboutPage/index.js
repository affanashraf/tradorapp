import React from "react";
import "./AboutPage.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

function AboutPage() {
  return (
    <div className="about-page-container">
      <div>
        <img src="/images/about.png" style={{ width: "100%" }} />
      </div>

      <div className="about-page-txt">
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInLeft"
          duration="1"
        >
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <text className="about-page-title">Excepteur sint</text>
              <text className="about-page-title">occaeuiecat cupidatat.</text>
            </div>
            <i className="fa fa-user-circle" style={{cursor:"pointer",fontSize:"50px"}} ></i>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInLeft"
          duration="1.5"
        >
          <div className="about-page-line">
            <p className="about-page-desc">
              Nam a maximus neque. Aliquam sodales ante ex, at auctor enim
              hendrerit non. Duis quis ligula vestibulum, cursus justo ac,
              pulvinar risus. Etiam posuere lobortis turpis a ultricies. Mauris
              non eleifend nulla. Aliquam ac orci eget leo placerat consectetur
              a vel tellus. Sed eu risus malesuada purus iaculis placerat
              efficitur et leo. Aliquam nec neque arcu. Pellentesque ac
              elementum felis. Pellentesque tristique ligula ut convallis
              mollis. Nullam finibus eget nunc quis semper. Proin ut ornare leo,
              vitae ornare elit. Nunc vestibulum ipsum nulla, id faucibus nulla
              maximus eget. Suspendisse potenti. Aliquam vel bibendum dui.
            </p>

            <p className="about-page-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget venenatis lorem. Phasellus blandit bibendum lectus, hendrerit
              efficitur metus porta in. Curabitur ex turpis, volutpat et feugiat
              nec, laoreet a ligula. Nulla sagittis ultrices leo, et posuere
              arcu accumsan eu. Aenean tempor dictum nisl sed egestas.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInRight"
          duration="1.5"
        >
          <div className="about-page-line">
            <p className="about-page-desc">
              Ut id nibh vulputate, dignissim justo a, rutrum urna. Nulla
              facilisi. Integer ultricies turpis eu sapien convallis, vitae
              sagittis lorem vestibulum. Nullam ac velit diam. Pellentesque
              vitae vehicula nisl. Praesent faucibus lectus id eros finibus
              tempor vitae non metus. Maecenas nec elit lorem. Fusce id risus
              turpis. Ut sagittis tellus id feugiat pellentesque. Donec iaculis
              justo eget erat aliquam mattis.
            </p>
            <p className="about-page-desc">
              'Nullam quis dapibus sem, non faucibus lectus. Etiam at sodales
              dui, id cursus urna. Nunc vitae nisl eros. Vestibulum condimentum
              luctus pharetra.'
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default AboutPage;
