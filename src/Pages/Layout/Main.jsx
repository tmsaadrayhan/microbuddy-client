import Header from "../Header/Header";
import imgLoad from "../../assets/loading.gif";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate async loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time

    return () => clearTimeout(timer);
  }, []);
  if (loading)
    return (
      <div className="w-full py-[15rem]">
        <img className="mx-auto" src={imgLoad} alt="" />
      </div>
    );
  else
    return (
      <div className="font overflow-hidden">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Main;
