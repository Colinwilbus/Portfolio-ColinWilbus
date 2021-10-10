import React from "react";
import "./AboutPageStyle.scss";
import Slider from "react-slick";
import me_6 from "../../assets/image/me_6.JPG";
import me_1 from "../../assets/image/me_1.jpg";
import me_3 from "../../assets/image/me_3.jpg";
import me_5 from "../../assets/image/me_5.jpg";
import avt from "../../assets/image/avt.jpg";
import AchievementAboutPage from "./achievementAboutPage/AchievementAboutPage";
export default function AboutPage() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <div className="aboutPage">
      <div className="aboutPage__Title">
        <h1>About Me</h1>
      </div>
      <div className="aboutPage__content container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="aboutPage__detail">
              <p>Hi, I am Viet Binh</p>
              <h3>A Front End Developer</h3>
              <p>I'm live on Ho Chi Minh City, Viet Nam.</p>
              <div className="aboutPage__detailContent">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aspernatur a, adipisci aperiam, est porro exercitationem
                  mollitia magni amet laborum nemo vero delectus perferendis
                  illo consectetur! Dolorem numquam vel ipsa dolorum?
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="aboutPage__img">
              <Slider {...settings}>
                <div className="carouselhomePage__item">
                  <img src={me_3} alt="" style={{ objectPosition: "top" }} />
                </div>
                <div className="carouselhomePage__item">
                  <img src={me_5} alt="" />
                </div>
                <div className="carouselhomePage__item">
                  <img src={me_6} alt="" />
                </div>
                <div className="carouselhomePage__item">
                  <img src={avt} alt="" style={{ objectPosition: "bottom" }} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="aboutPage__achievement">
          <AchievementAboutPage />
        </div>
      </div>
    </div>
  );
}
