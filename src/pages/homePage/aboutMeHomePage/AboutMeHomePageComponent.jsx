import React from "react";
import "./AboutMeHomePageStyle.scss";
import me_2 from "../../../assets/image/me_2.jpg";
import me_8 from "../../../assets/image/me_8.jpg";
import me_9 from "../../../assets/image/me_9.jpeg";
import me_10 from "../../../assets/image/me_10.JPG";
import me_11 from "../../../assets/image/me_11.jpeg";
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
                I am looking for a position that I can contribute my knowledge
                and skills to thrive in coding field. With deligence, a desire
                to learn and an ambition, I want to achieve more. Becoming a
                dynamic, versatile developer is my goal in today's fast paced
                world.
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
              <img src={me_9} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
