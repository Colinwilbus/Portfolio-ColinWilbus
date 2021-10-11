import React from "react";
import "./ContactPageStyle.scss";
import Slider from "react-slick";

import ct_1 from "../../assets/image/ct_1.jpg";
import ct_2 from "../../assets/image/ct_2.jpg";
import ct_3 from "../../assets/image/ct_3.jpg";
import ct_4 from "../../assets/image/ct_4.jpg";
import ct_5 from "../../assets/image/ct_5.jpg";
import ct_6 from "../../assets/image/ct_6.jpg";

export default function ContactPage() {
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
  };
  return (
    <div className="contactPage">
      <div className="contactPage__Title">
        <h1>Contact</h1>
      </div>
      <div className="contactPage__content container">
        <div className="row contactPage__reverser">
          <div className="col-12 col-lg-6">
            <div className="contactPage__detail">
              <div className="contactPage__item">
                <p>
                  <i className="fa fa-mobile-alt"></i>
                  <span>0969341695</span>
                </p>
              </div>
              <div className="contactPage__item">
                <p>
                  <i className="fa fa-envelope"></i>
                  <span>binh.nv2695@gmail.com</span>
                </p>
              </div>
              <div className="contactPage__item">
                <p>
                  <i className="fa fa-map-marker-alt"></i>
                  <span>Ba Diem, Hoc Mon, Ho Chi Minh City</span>
                </p>
              </div>
              <div className="contactPage__item">
                <div className="contactPage__map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.50658744147!2d106.60680301417226!3d10.849021160817642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a39d132ed29%3A0xc1c05f3f78a6815!2zNjUvMyDhuqVwIEjhuq11IEzDom4sIELDoCDEkGnhu4NtLCBIw7NjIE3DtG4sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1633921821783!5m2!1svi!2s"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="contactPage__img">
              <Slider {...settings}>
                <div>
                  <img src={ct_5} style={{ objectPosition: "right" }} />
                </div>
                <div>
                  <img src={ct_3} />
                </div>
                <div>
                  <img src={ct_1} />
                </div>
                <div>
                  <img src={ct_4} />
                </div>
                <div>
                  <img src={ct_2} />
                </div>
                <div>
                  <img src={ct_6} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
