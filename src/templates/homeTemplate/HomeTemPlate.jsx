import { Route } from "react-router-dom";
import FooterHomePageComponent from "../../pages/homePage/footerHomePage/FooterHomePageComponent";
import NavBarHiddenHomePageComponent from "../../pages/homePage/navbarHiddenHomePage/NavBarHiddenHomePageComponent";
import HeaderComponent from "./layout/Header/HeaderComponent";
const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div style={{ backgroundColor: "#323232" }}>
            <NavBarHiddenHomePageComponent />
            <HeaderComponent />
            <Component {...propsRoute} />
            <FooterHomePageComponent />
          </div>
        );
      }}
    ></Route>
  );
};
export default HomeTemplate;
