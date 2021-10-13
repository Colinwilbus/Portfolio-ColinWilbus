import React, { useEffect, useRef, useState } from "react";
import "./ProjectPageStyle.scss";
import Slider from "react-slick";
import pj1 from "../../assets/image/pj1.png";
import pj2 from "../../assets/image/pj2.png";
import pj3 from "../../assets/image/pj3.png";
import pj5 from "../../assets/image/pj5.png";
import logoLodas from "../../assets/image/logoLodash.svg";
import logoAntd from "../../assets/image/logoAntd.svg";
import logoBs4 from "../../assets/image/logoBs4.png";
import logoReactRoute from "../../assets/image/logoReactRoute.png";
import logoReactRedux from "../../assets/image/logoRedux.svg";
import logoReactSaga from "../../assets/image/logoSaga.png";
import logoSass from "../../assets/image/logoSass.png";
import logoCss3Color from "../../assets/image/logoCss3Color.png";
import logoHtml5Color from "../../assets/image/logoHtml5Color.png";
import logoJsColor from "../../assets/image/logoJsColor.png";
import logoReactColor from "../../assets/image/logoReactColor.svg";
import logoSocketIo from "../../assets/image/logoSocketIo.svg";
export default function ProjectPage() {
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });
  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <i className="fa fa-chevron-up"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <i className="fa fa-chevron-down"></i>
      </div>
    );
  }

  const settingSlide = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="projectPage">
      <div className="projectPage__Title">
        <h1>Project</h1>
      </div>
      <div className="projectPage__content">
        <div className="projectPage__carousel container">
          <Slider
            asNavFor={state.nav1}
            ref={(slider) => (slider2.current = slider)}
            {...settingSlide}
          >
            <div className="projectPage__item">
              <div className="projectPage__img">
                <img src={pj1} alt="" />
              </div>
            </div>
            <div className="projectPage__item">
              <div className="projectPage__img">
                <img src={pj2} alt="" />
              </div>
            </div>
            <div className="projectPage__item">
              <div className="projectPage__img">
                <img src={pj3} alt="" />
              </div>
            </div>
            <div className="projectPage__item">
              <div className="projectPage__img">
                <img src={pj5} alt="" />
              </div>
            </div>
          </Slider>
        </div>
        <div className="projectPage__panel">
          <Slider
            asNavFor={state.nav2}
            ref={(slider) => (slider1.current = slider)}
          >
            <div className="projectPage__panelItem">
              <div className="row">
                <div className="col-12 col-lg-7">
                  <div className="projectPage__nameProject">
                    <h2>BOOKING TICKET WEBSITE</h2>
                  </div>
                  <div className="projectPage__info">
                    <h3>Overview</h3>
                    <p>
                      The Booking Ticket project supports users to book movie
                      tickets online quickly and conveniently before going to
                      the cinema. This project includes management and changing
                      data.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="projectPage__btn">
                    <div className="projectPage__button">
                      <a
                        className="btn"
                        href="https://b-movie.vercel.app/"
                        target="_blank"
                      >
                        View Project
                      </a>
                    </div>
                    <div className="projectPage__button">
                      <a
                        className="btn"
                        href="https://github.com/Colinwilbus/Project-TheMovie-Booking-React.git"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectPage__TechUse">
                <h3>Technology Used</h3>
                <div className="projectPage__TechUseList">
                  <div className="row">
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoHtml5Color} alt="" />
                        <p>Html5</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoJsColor} alt="" />
                        <p>JavaScrip</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoCss3Color} alt="" />
                        <p>Css</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoSass} alt="" />
                        <p>Sass</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoBs4} alt="" />
                        <p>Bootstrap</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoAntd} alt="" />
                        <p>Ant Design</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoLodas} alt="" />
                        <p>Lodash</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoReactColor} alt="" />
                        <p>ReactJs</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoReactRoute} alt="" />
                        <p>React Router </p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoReactRedux} alt="" />
                        <p>Redux </p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoReactSaga} alt="" />
                        <p>React Saga </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="projectPage__panelItem">
              <div className="row">
                <div className="col-12 col-lg-7">
                  <div className="projectPage__nameProject">
                    <h2>RESTAURANT WEBSITE</h2>
                  </div>
                  <div className="projectPage__info">
                    <h3>Overview</h3>
                    <p>
                      Restaurent website is used to introduce the restaurant and
                      the products which are followed each price segment of
                      restaurant. Users can choose food and make a reservation
                      before coming to the restaurant.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="projectPage__btn">
                    <div className="projectPage__button">
                      <a
                        className="btn"
                        href="https://restaurant-ochre-nine.vercel.app/"
                        target="_blank"
                      >
                        View Project
                      </a>
                    </div>
                    <div className="projectPage__button">
                      <a
                        className="btn"
                        href="https://github.com/Colinwilbus/BCCT01-BTTH-Nhom--NguyenVietBinh--PhamQuocKhanh.git"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectPage__TechUse">
                <h3>Technology Used</h3>
                <div className="projectPage__TechUseList">
                  <div className="row">
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoHtml5Color} alt="" />
                        <p>Html5</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoJsColor} alt="" />
                        <p>JavaScrip</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoCss3Color} alt="" />
                        <p>Css</p>
                      </div>
                    </div>

                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoBs4} alt="" />
                        <p>Bootstrap</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="projectPage__panelItem">
              <div className="row">
                <div className="col-12 col-lg-7">
                  <div className="projectPage__nameProject">
                    <h2>HOUSING WEBSITE</h2>
                  </div>
                  <div className="projectPage__info">
                    <h3>Overview</h3>
                    <p>
                      This website is about solving housing problems. User can
                      view and learn from the outside to the inside of a house
                      before going to the actual place.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="projectPage__btn">
                    <div className="projectPage__button">
                      <a
                        className="btn"
                        href="https://housing-lac.vercel.app/"
                        target="_blank"
                      >
                        View Project
                      </a>
                    </div>
                    <div className="projectPage__button">
                      <a
                        className="btn"
                        href="https://github.com/Colinwilbus/BCCT01-housing-NguyenVietBinh.git"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectPage__TechUse">
                <h3>Technology Used</h3>
                <div className="projectPage__TechUseList">
                  <div className="row">
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoHtml5Color} alt="" />
                        <p>Html5</p>
                      </div>
                    </div>

                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoCss3Color} alt="" />
                        <p>Css</p>
                      </div>
                    </div>

                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoBs4} alt="" />
                        <p>Bootstrap</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="projectPage__panelItem">
              <div className="row">
                <div className="col-12 col-lg-7">
                  <div className="projectPage__nameProject">
                    <h2>APP-CHAT WEBISTE</h2>
                  </div>
                  <div className="projectPage__info">
                    <h3>Overview</h3>
                    <p>
                      Online messaging app. User can create rooms for others to
                      join. The application supports sending the user's current
                      location.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="projectPage__btn">
                    <div className="projectPage__button">
                      <a
                        className="btn"
                        href="https://app-chat-cw.herokuapp.com/"
                        target="_blank"
                      >
                        View Project
                      </a>
                    </div>
                    <div className="projectPage__button">
                      <a
                        className="btn"
                        href="https://github.com/Colinwilbus/App-Chat-Cw.git"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectPage__TechUse">
                <h3>Technology Used</h3>
                <div className="projectPage__TechUseList">
                  <div className="row">
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoHtml5Color} alt="" />
                        <p>Html5</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoJsColor} alt="" />
                        <p>JavaScrip</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoCss3Color} alt="" />
                        <p>Css</p>
                      </div>
                    </div>

                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoBs4} alt="" />
                        <p>Bootstrap</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoSocketIo} alt="" />
                        <p>Socket.Io</p>
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
