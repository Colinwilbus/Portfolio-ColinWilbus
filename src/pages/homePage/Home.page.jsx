import React, { useEffect } from "react";
import AboutMeHomePageComponent from "./aboutMeHomePage/AboutMeHomePageComponent";
import CarouselHomePageComponent from "./carouselHomePage/CarouselHomePageComponent";
import FooterHomePageComponent from "./footerHomePage/FooterHomePageComponent";
import "./Home.style.scss";
import MyprojectHomePageComponent from "./myProjectHomePage/MyprojectHomePageComponent";
import MySkillHomePageComponent from "./mySkillHomePage/MySkillHomePageComponent";
import NavBarHiddenHomePageComponent from "./navbarHiddenHomePage/NavBarHiddenHomePageComponent";
import NavbarHomePageComponent from "./navbarHomePage/NavbarHomePageComponent";

export default function HomePage() {
  return (
    <section className="portfolioHome">
      <div className="portfolioHome__content">
        <div className="portfolioHome__carousel">
          <CarouselHomePageComponent />
        </div>
        <div className="portfolioHome__navbar">
          <NavbarHomePageComponent />
        </div>
        <div className="portfolioHome__3d">
          <MySkillHomePageComponent />
        </div>
        <div className="portfolioHome__AboutMe container">
          <AboutMeHomePageComponent />
        </div>
        <div className="portfolioHome__Project container">
          <MyprojectHomePageComponent />
        </div>
        <div className="portfolioHome__Footer">
          <FooterHomePageComponent />
        </div>
        <NavBarHiddenHomePageComponent />
      </div>
    </section>
  );
}
