import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home";
import ITService from "../Pages/ITService/ITService";
import Portfolio from "../Pages/Portfolio/Portfolio";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
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
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
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
        path: "/how-it-works",
        element: <Content></Content>,
      },
    ],
  },
]);
