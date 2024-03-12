import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import ITService from "../Pages/ITService/ITService";
import Portfolio from "../Pages/Portfolio/Portfolio";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Ads from "../Pages/Portfolio/Ads/Ads";
import Apps from "../Pages/Portfolio/Apps/Apps";
import Banner from "../Pages/Portfolio/Banner/Banner";
import Website from "../Pages/Portfolio/Website/Website";
import Career from "../Pages/Career/Career";
import Content from "../Pages/Content/Content";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/it-service",
        element: <ITService></ITService>,
      },
      {
        path: "/all",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/ads",
        element: <Ads></Ads>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/banner",
        element: <Banner></Banner>,
      },
      {
        path: "/Website",
        element: <Website></Website>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },

      {
        path: "/content",
        element: <Content></Content>,
      },
    ],
  },
]);
