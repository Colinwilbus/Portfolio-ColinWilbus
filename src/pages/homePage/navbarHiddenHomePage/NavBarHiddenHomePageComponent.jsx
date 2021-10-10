import React from "react";
import "./NavBarHiddenHomePageStyle.scss";
import { NavLink } from "react-router-dom";

export default function NavBarHiddenHomePageComponent() {
  const changeNavberHidden = () => {
    const navBarHiden = document.querySelector("#navBarHiddenHomePageId");
    if (navBarHiden) {
      if (window.scrollY > 500) {
        navBarHiden.classList.add("navBarHiddenHomePage__active");
        navBarHiden.style.display = "block";
      } else {
        navBarHiden.classList.remove("navBarHiddenHomePage__active");
      }
    }
  };
  window.addEventListener("scroll", changeNavberHidden);
  return (
    <div className="navBarHiddenHomePage" id="navBarHiddenHomePageId">
      <div className="navBarHiddenHomePage__content">
        <nav className="navbar navbar-expand navbar-light ">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/home"
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/project"
                >
                  Project
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
