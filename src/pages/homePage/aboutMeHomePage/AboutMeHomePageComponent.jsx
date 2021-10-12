import React from "react";
import "./AboutMeHomePageStyle.scss";
import me_1 from "../../../assets/image/me_1.jpg";
import me_2 from "../../../assets/image/me_2.jpg";
import { NavLink } from "react-router-dom";
export default function AboutMeHomePageComponent() {
  return (
    <div className="aboutMeHomePage">
      <div className="aboutMeHomePage_Title">
        <h3>About Me</h3>
      </div>
      <div className="aboutMeHomePage_Content">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="aboutMeHomePage_Detail">
              <p>
                I am looking for a chanllenging position that I can apply my
                knowledge and skills in the field of coding for professional
                growth. I want to achieve high career growth through a
                continuous learning process, keep my self dynamic, visonary and
                competitive with the changing scenario of the world.
              </p>
              <div className="aboutMeHomePage_Btn">
                <NavLink className="btn" to="/about">
                  More Info...
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="aboutMeHomePage_img">
              <img src={me_2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
