import React, { useRef, useState } from "react";
import logoCss from "../../../assets/image/logoCss.png";
import logoHtml from "../../../assets/image/logoHtml.png";
import logoJs from "../../../assets/image/LogoJs.png";
import logoReact from "../../../assets/image/logoReact.png";
import Slider from "react-slick";
import "./MySkillHomePageStyle.scss";
export default function MySkillHomePageComponent(prop) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="mySkillHomePage">
      <div className="mySkillHomePage__overlayContent">
        <div className="mySkillHomePage__overlay">
          <div className="mySkillHomePage__content">
            <div className="mySkillHomePage__detail">
              <Slider {...settings}>
                <div>
                  <img src={logoCss} />
                </div>
                <div>
                  <img src={logoHtml} />
                </div>
                <div>
                  <img src={logoJs} />
                </div>
                <div>
                  <img src={logoReact} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
