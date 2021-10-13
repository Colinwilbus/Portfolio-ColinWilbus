import React from "react";
import "./AchievementAboutPageStyle.scss";
import { Tabs, Steps } from "antd";

import logoLodas from "../../../assets/image/logoLodash.svg";
import logoAntd from "../../../assets/image/logoAntd.svg";
import logoBs4 from "../../../assets/image/logoBs4.png";
import logoReactRoute from "../../../assets/image/logoReactRoute.png";
import logoReactRedux from "../../../assets/image/logoRedux.svg";
import logoReactSaga from "../../../assets/image/logoSaga.png";
import logoSass from "../../../assets/image/logoSass.png";
import logoCss3Color from "../../../assets/image/logoCss3Color.png";
import logoHtml5Color from "../../../assets/image/logoHtml5Color.png";
import logoJsColor from "../../../assets/image/logoJsColor.png";
import logoReactColor from "../../../assets/image/logoReactColor.svg";
import logoSocketIo from "../../../assets/image/logoSocketIo.svg";
import logoSql from "../../../assets/image/mysql-logo.svg";
import logoNodeJs from "../../../assets/image/logoNodeJs.png";
import logoLR from "../../../assets/image/logoLR.png";

function callback(key) {
  console.log(key);
}
const { Step } = Steps;
const { TabPane } = Tabs;
export default function AchievementAboutPage() {
  return (
    <div className="achievementAboutPage">
      <div className="achievementAboutPage__content">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Educations" key="1">
            <div className="achievementAboutPage__item">
              <Steps progressDot current={-1} direction="vertical">
                <Step
                  title="April 2021 - October 2021"
                  description={
                    <div>
                      <p>CyberSoft Academy</p>
                      <p>ReactJs - NodeJs</p>
                    </div>
                  }
                />
                <Step
                  title="2015 - 2020 "
                  description={
                    <div>
                      <p>Tran Dai Nghia University</p>
                      <p>Information Technology (Applied Informatics)</p>
                    </div>
                  }
                />
              </Steps>
            </div>
          </TabPane>
          <TabPane tab="Works" key="2">
            <div className="achievementAboutPage__item">
              <Steps progressDot current={-1} direction="vertical">
                <Step
                  title="2020 - 2021"
                  description={
                    <div>
                      <p>Citigo Software</p>
                      <p>
                        Technical support specialist ( Support customers to use
                        software, install and repair equipment, design HTML, CSS
                        templates )
                      </p>
                    </div>
                  }
                />
                <Step
                  title="2019 - 2020"
                  description={
                    <div>
                      <p>Rumor Agency</p>
                      <p>Design website ( design website with Wordpress )</p>
                    </div>
                  }
                />
                <Step
                  title="2014 - 2019"
                  description={
                    <div>
                      <p>Seara Sports Systems</p>
                      <p>
                        Technician ( Repair and installation of machinery and
                        equipment )
                      </p>
                    </div>
                  }
                />
              </Steps>
            </div>
          </TabPane>
          <TabPane tab="Favorites" key="3">
            <div className="achievementAboutPage__item">
              <ul>
                <li>Music</li>
                <li>Photograph</li>
                <li>Reading Book</li>
                <li>Swimming</li>
                <li>Party</li>
              </ul>
            </div>
          </TabPane>
          <TabPane tab="Skills" key="4">
            <div className="achievementAboutPage__item">
              <div className="row">
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoHtml5Color} alt="" />
                    <p>Htm5</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoCss3Color} alt="" />
                    <p>Css3</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoJsColor} alt="" />
                    <p>JavaScrip</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoSass} alt="" />
                    <p>Sass</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoBs4} alt="" />
                    <p>Bootstrap</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoAntd} alt="" />
                    <p>Ant.Design</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoLodas} alt="" />
                    <p>Lodash</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoReactColor} alt="" />
                    <p>ReactJs</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoReactRedux} alt="" />
                    <p>Redux</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoReactRoute} alt="" />
                    <p>React.Router</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoReactSaga} alt="" />
                    <p>React.Saga</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoSocketIo} alt="" />
                    <p>Socket.io</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoNodeJs} alt="" />
                    <p>NodeJs</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoSql} alt="" />
                    <p>My SQL</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="achievementAboutPage__img">
                    <img src={logoLR} alt="" />
                    <p>Lightroom</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
