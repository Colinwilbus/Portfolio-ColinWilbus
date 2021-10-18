import React, { useEffect } from "react";
import Slider from "react-slick";
import { settings } from "./CarouselHomepageSetting";
import cr1 from "../../../assets/image/cr1.JPG";
import cr2 from "../../../assets/image/cr2.JPG";
import cr3 from "../../../assets/image/cr3.jpg";
import me_4 from "../../../assets/image/me_4.jpg";
import "./CarouselHomePageStyle.scss";

export default function CarouselHomePageComponent(props) {
  return (
    <div className="carouselhomePage">
      <Slider {...settings}>
        <div className="carouselhomePage__item">
          <img src={cr3} alt="" />
        </div>
        <div className="carouselhomePage__item">
          <img src={cr2} alt="" />
        </div>
        <div className="carouselhomePage__item">
          <img src={cr1} alt="" />
        </div>
      </Slider>
      <div className="carouselhomePage__info">
        <div className="carouselhomePage__content">
          <div className="carouselhomePage__overlay">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="carouselhomePage__avt">
                  <div className="carouselhomePage__img">
                    <img src={me_4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="carouselhomePage__detail">
                  <h4>Nguyen Viet Binh</h4>
                  <p>Front End Developer</p>

                  <p>Ho Chi Minh City</p>
                  <div className="carouselhomePage__btn">
                    <a
                      className="btn"
                      href="https://drive.google.com/file/d/1wk7WXgrQbHDpVgpP4x42gZF66NqCtkIM/view?usp=sharing"
                      target="_blank"
                    >
                      Download my CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carouselhomePage__title">
              <p>Everyday is a new begining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
