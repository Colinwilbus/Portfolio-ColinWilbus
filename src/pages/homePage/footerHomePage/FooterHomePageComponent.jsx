import React from "react";
import "./FooterHomePageStyle.scss";
import bgSocial from "../../../assets/image/bgftSocial.jpg";
export default function FooterHomePageComponent() {
  return (
    <div className="footerHomePage">
      <div className="footerHomePage__content container">
        <div className="footerHomePage__contact">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3>LINK</h3>
              <div className="footerHomePage__link">
                <ul>
                  <li>
                    <a href="#">
                      <span>HOME</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>ABOUT</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>PROJECT</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>CONTACT</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h3>SOCIAL</h3>
              <div className="footerHomePage__social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-github-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-pinterest-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-steam-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footerHomePage__deg">
          <p>© 2021 - Portfolio | Developed By Viet_Binh</p>
        </div>
      </div>
    </div>
  );
}
