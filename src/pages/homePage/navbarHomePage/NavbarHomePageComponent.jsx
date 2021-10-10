import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarHomePageStyle.scss";
export default function NavbarHomePageComponent() {
  return (
    <div className="navbarHome">
      <div className="navbarHome__content">
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
