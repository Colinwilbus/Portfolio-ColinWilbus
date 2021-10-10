import React from "react";
import "./AboutMeHomePageStyle.scss";
import me_1 from "../../../assets/image/me_1.jpg";
import me_2 from "../../../assets/image/me_2.jpg";
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur tempora, vero temporibus blanditiis dicta eveniet ipsa,
                id cumque facilis alias quidem commodi dolor eaque nihil
                suscipit corporis ea, adipisci eius. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis impedit assumenda,
                porro veritatis nulla at, tempore ullam sequi mollitia, quisquam
                est voluptatibus accusantium illo labore ad repellat ducimus non
                maiores?
              </p>
              <div className="aboutMeHomePage_Btn">
                <button className="btn">More Info...</button>
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
