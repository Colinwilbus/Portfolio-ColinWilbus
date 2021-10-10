import React from "react";
import "./MyprojectHomePageStyle.scss";
import pj1 from "../../../assets/image/pj1.png";
import pj2 from "../../../assets/image/pj2.png";
import pj3 from "../../../assets/image/pj3.png";
import pj4 from "../../../assets/image/pj4.png";
import Slider from "react-slick";

export default function MyprojectHomePageComponent() {
  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
  };
  return (
    <div className="myprojectHomePage">
      <div className="myprojectHomePage_Title">
        <h3>Project</h3>
      </div>
      <div className="myprojectHomePage__content">
        <div className="myprojectHomePage__carousel">
          <Slider {...settings}>
            <div>
              <div className="myprojectHomePage__item">
                <div className="row">
                  <div className="col 12 col-lg-7">
                    <div className="myprojectHomePage__img">
                      <img src={pj1} alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <div className="myprojectHomePage__detail">
                      <h3> PROJECT BOOKING TICKET ONLINE</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, unde error dolor neque dolores iste
                        cupiditate vero officia ipsum distinctio repudiandae.
                        Ullam quisquam ducimus corporis voluptate laborum atque,
                        et earum!
                      </p>
                      <div className="myprojectHomePage__btn">
                        <div className="myprojectHomePage__button">
                          <button className="btn">Detail</button>
                        </div>
                        <div className="myprojectHomePage__button">
                          <button className="btn">Go to Site</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="myprojectHomePage__item">
                <div className="row">
                  <div className=" col-12 col-lg-7">
                    <div className="myprojectHomePage__img">
                      <img src={pj2} alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <div className="myprojectHomePage__detail">
                      <h3> PROJECT BOOKING TICKET ONLINE</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, unde error dolor neque dolores iste
                        cupiditate vero officia ipsum distinctio repudiandae.
                        Ullam quisquam ducimus corporis voluptate laborum atque,
                        et earum!
                      </p>
                      <div className="myprojectHomePage__btn">
                        <div className="myprojectHomePage__button">
                          <button className="btn">Detail</button>
                        </div>
                        <div className="myprojectHomePage__button">
                          <button className="btn">Go to Site</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="myprojectHomePage__item">
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <div className="myprojectHomePage__img">
                      <img src={pj3} alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <div className="myprojectHomePage__detail">
                      <h3> PROJECT BOOKING TICKET ONLINE</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, unde error dolor neque dolores iste
                        cupiditate vero officia ipsum distinctio repudiandae.
                        Ullam quisquam ducimus corporis voluptate laborum atque,
                        et earum!
                      </p>
                      <div className="myprojectHomePage__btn">
                        <div className="myprojectHomePage__button">
                          <button className="btn">Detail</button>
                        </div>
                        <div className="myprojectHomePage__button">
                          <button className="btn">Go to Site</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="myprojectHomePage__item">
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <div className="myprojectHomePage__img">
                      <img src={pj4} alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <div className="myprojectHomePage__detail">
                      <h3> PROJECT BOOKING TICKET ONLINE</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, unde error dolor neque dolores iste
                        cupiditate vero officia ipsum distinctio repudiandae.
                        Ullam quisquam ducimus corporis voluptate laborum atque,
                        et earum!
                      </p>
                      <div className="myprojectHomePage__btn">
                        <div className="myprojectHomePage__button">
                          <button className="btn">Detail</button>
                        </div>
                        <div className="myprojectHomePage__button">
                          <button className="btn">Go to Site</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
