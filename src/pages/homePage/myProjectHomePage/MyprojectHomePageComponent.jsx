import React from "react";
import "./MyprojectHomePageStyle.scss";
import pj1 from "../../../assets/image/pj1.png";
import pj2 from "../../../assets/image/pj2.png";
import pj3 from "../../../assets/image/pj3.png";
import pj5 from "../../../assets/image/pj5.png";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

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
                      <h3>BOOKING TICKET WEBSITE</h3>
                      <p>
                        The Booking Ticket project supports users to book movie
                        tickets online quickly and conveniently before going to
                        the cinema. This project includes management and
                        changing data <br />
                        ...
                      </p>
                      <div className="myprojectHomePage__btn">
                        <div className="myprojectHomePage__button">
                          <NavLink className="btn" to="/project">
                            Detail
                          </NavLink>
                        </div>
                        <div className="myprojectHomePage__button">
                          <a
                            className="btn"
                            href="https://b-movie.vercel.app/"
                            target="_blank"
                          >
                            Go to Site
                          </a>
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
                      <h3>RESTAURANT WEBSITE</h3>
                      <p>
                        Restaurent website is used to introduce the restaurant
                        and the products which are followed each price segment
                        of restaurant. Users can choose food and make a
                        reservation before coming to the restaurant
                      </p>
                      <div className="myprojectHomePage__btn">
                        <div className="myprojectHomePage__button">
                          <NavLink className="btn" to="/project">
                            Detail
                          </NavLink>
                        </div>
                        <div className="myprojectHomePage__button">
                          <a
                            className="btn"
                            href="https://restaurant-ochre-nine.vercel.app/"
                            target="_blank"
                          >
                            Go to Site
                          </a>
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
                      <h3> HOUSING WEBSITE</h3>
                      <p>
                        This website is about solving housing problems. User can
                        view and learn from the outside to the inside of a house
                        before going to the actual place
                        <br />
                        ...
                      </p>
                      <div className="myprojectHomePage__btn">
                        <div className="myprojectHomePage__button">
                          <NavLink className="btn" to="/project">
                            Detail
                          </NavLink>
                        </div>
                        <div className="myprojectHomePage__button">
                          <a
                            className="btn"
                            href="https://housing-lac.vercel.app/"
                            target="_blank"
                          >
                            Go to Site
                          </a>
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
                      <img src={pj5} alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-5">
                    <div className="myprojectHomePage__detail">
                      <h3>APP-CHAT WEBSITE</h3>
                      <p>
                        Online messaging app. Users can create rooms for others
                        to join the chat. The application supports sending the
                        user's current location
                        <br />
                        ...
                      </p>
                      <div className="myprojectHomePage__btn">
                        <div className="myprojectHomePage__button">
                          <NavLink className="btn" to="/project">
                            Detail
                          </NavLink>
                        </div>
                        <div className="myprojectHomePage__button">
                          <a
                            className="btn"
                            href="https://app-chat-cw.vercel.app/"
                            target="_blank"
                          >
                            Go to Site
                          </a>
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
