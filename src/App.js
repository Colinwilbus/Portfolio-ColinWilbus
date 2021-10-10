import HomePage from "./pages/homePage/Home.page";
// setup slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// setup antd
import "antd/dist/antd.css";
// setup Aos
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomeTemplate from "./templates/homeTemplate/HomeTemPlate";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <HomeTemplate exact path="/about" Component={AboutPage} />
        <HomeTemplate exact path="/contact" Component={ContactPage} />
        <HomeTemplate exact path="/project" Component={ProjectPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
