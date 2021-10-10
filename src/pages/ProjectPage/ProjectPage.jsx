import React, { useEffect, useRef, useState } from "react";
import "./ProjectPageStyle.scss";
import Slider from "react-slick";
import pj1 from "../../assets/image/pj1.png";
import pj2 from "../../assets/image/pj2.png";
import pj3 from "../../assets/image/pj3.png";
import pj4 from "../../assets/image/pj4.png";
import logoHtml from "../../assets/image/logoHtml.png";
import logoJs from "../../assets/image/LogoJs.png";
import logoLodas from "../../assets/image/logoLodash.svg";
import logoAntd from "../../assets/image/logoAntd.svg";
import logoBs4 from "../../assets/image/logoBs4.png";
import logoCss from "../../assets/image/logoCss.png";
import logoReact from "../../assets/image/logoReact.png";
import logoReactRoute from "../../assets/image/logoReactRoute.png";
import logoReactRedux from "../../assets/image/logoRedux.svg";
import logoReactSaga from "../../assets/image/logoSaga.png";
import logoSass from "../../assets/image/logoSass.png";
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
                <img src={pj4} alt="" />
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
                    <h2>Project Booking Ticket Movie Online</h2>
                  </div>
                  <div className="projectPage__info">
                    <h3>Overview</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Neque incidunt itaque atque perspiciatis veniam eaque
                      repellat explicabo, porro ad aliquid nemo blanditiis, quos
                      culpa natus aut, quis odit non dolore!
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="projectPage__btn">
                    <div className="projectPage__button">
                      <button className="btn">View Project</button>
                    </div>
                    <div className="projectPage__button">
                      <button className="btn">Github</button>
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
                        <img src={logoHtml} alt="" />
                        <p>Html5</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoJs} alt="" />
                        <p>JavaScrip</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoCss} alt="" />
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
                        <img src={logoReact} alt="" />
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
                    <h2>Project Booking Ticket Movie Online</h2>
                  </div>
                  <div className="projectPage__info">
                    <h3>Overview</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Neque incidunt itaque atque perspiciatis veniam eaque
                      repellat explicabo, porro ad aliquid nemo blanditiis, quos
                      culpa natus aut, quis odit non dolore!
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="projectPage__btn">
                    <div className="projectPage__button">
                      <button className="btn">View Project</button>
                    </div>
                    <div className="projectPage__button">
                      <button className="btn">Github</button>
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
                        <img src={logoHtml} alt="" />
                        <p>Html5</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoJs} alt="" />
                        <p>JavaScrip</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoCss} alt="" />
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
                        <img src={logoReact} alt="" />
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
                    <h2>Project Booking Ticket Movie Online</h2>
                  </div>
                  <div className="projectPage__info">
                    <h3>Overview</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Neque incidunt itaque atque perspiciatis veniam eaque
                      repellat explicabo, porro ad aliquid nemo blanditiis, quos
                      culpa natus aut, quis odit non dolore!
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="projectPage__btn">
                    <div className="projectPage__button">
                      <button className="btn">View Project</button>
                    </div>
                    <div className="projectPage__button">
                      <button className="btn">Github</button>
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
                        <img src={logoHtml} alt="" />
                        <p>Html5</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoJs} alt="" />
                        <p>JavaScrip</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoCss} alt="" />
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
                        <img src={logoReact} alt="" />
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
                    <h2>Project Booking Ticket Movie Online</h2>
                  </div>
                  <div className="projectPage__info">
                    <h3>Overview</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Neque incidunt itaque atque perspiciatis veniam eaque
                      repellat explicabo, porro ad aliquid nemo blanditiis, quos
                      culpa natus aut, quis odit non dolore!
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="projectPage__btn">
                    <div className="projectPage__button">
                      <button className="btn">View Project</button>
                    </div>
                    <div className="projectPage__button">
                      <button className="btn">Github</button>
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
                        <img src={logoHtml} alt="" />
                        <p>Html5</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoJs} alt="" />
                        <p>JavaScrip</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoCss} alt="" />
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
                        <img src={logoReact} alt="" />
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
                    <h2>Project Booking Ticket Movie Online</h2>
                  </div>
                  <div className="projectPage__info">
                    <h3>Overview</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Neque incidunt itaque atque perspiciatis veniam eaque
                      repellat explicabo, porro ad aliquid nemo blanditiis, quos
                      culpa natus aut, quis odit non dolore!
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="projectPage__btn">
                    <div className="projectPage__button">
                      <button className="btn">View Project</button>
                    </div>
                    <div className="projectPage__button">
                      <button className="btn">Github</button>
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
                        <img src={logoHtml} alt="" />
                        <p>Html5</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoJs} alt="" />
                        <p>JavaScrip</p>
                      </div>
                    </div>
                    <div className="col-4 col-lg-2 projectPage__TechUseItem">
                      <div className="projectPage__TechUseItemDetail">
                        <img src={logoCss} alt="" />
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
                        <img src={logoReact} alt="" />
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
          </Slider>
        </div>
      </div>
    </div>
  );
}