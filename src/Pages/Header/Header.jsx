import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import img from "../../assets/bac62aa036fa50494277cb7a86b3706c.png";
import img1 from "../../assets/header/group221.png";
import img2 from "../../assets/header/frame.png";
import img3 from "../../assets/header/frame1.png";
import img4 from "../../assets/header/frame3.png";
import img5 from "../../assets/header/x.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <nav className="navbar absolute-center w-full lg:max-w-[90rem] mt-[2rem] md:mt-[3rem]">
      <div className="navbar-start z-50 w-[10rem] md:w-[20rem] lg:w-[20rem]">
        <Link to="/">
          <img src={img} alt="Logo" />
        </Link>
      </div>
      <div className="hidden lg:flex text-nowrap text-sm font-[600] w-full mx-auto">
        <div className="mx-auto flex items-center">
          <NavLink className="z-[50] space-a" to="/">
            Home
          </NavLink>

          <NavLink className="z-[50] space-a" to="/how-it-works">
            How IT Works
          </NavLink>
          <NavLink className="z-[50] space-a" to="/it-service">
            IT Service
          </NavLink>

          <NavLink className="z-[50] space-a" to="/about-us">
            About Us
          </NavLink>

          <div className="flex justify-center items-center ms-[-1.7rem] mb-[-0.1rem]">
            <button className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 font-semibold hover:translate-y-[-.15rem] hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
              <IoIosArrowDown />
              <div className="absolute opacity-0 group-hover:opacity-100 bg-[#fff] group-hover:backdrop-blur-md group-hover:text-sm translate-y-[-3.5rem] group-hover:-translate-y-[-2rem] duration-700 rounded-xl overflow-hidden scale-[.2] group-hover:scale-[1]">
                <div className="my-[1rem]">
                  <NavLink className="z-[50] space-a" to="/career">
                    Career
                  </NavLink>
                </div>
                <div className="my-[1rem]">
                  <NavLink className="z-[50] space-a" to="/portfolio">
                    Portfolio
                  </NavLink>
                </div>

                <div className="my-[1rem]">
                  <NavLink className="z-[50] space-a" to="/contact">
                    Contact
                  </NavLink>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-end w-full lg:w-fit">
        <div className="hidden lg:flex items-center z-50">
          <a
            href="mailto:info@microbuddy.tech"
            className="pe-[1rem] text-[#666AE5] font-bold"
          >
            info@microbuddy.tech
          </a>
          <Link to="/contact">
            <button className="w-[9rem] text-nowrap contact-us-button">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="z-[50] block lg:hidden">
          <button onClick={toggleDrawer}>
            <img
              className="w-[1.5rem] md:w-[3rem] m-[1rem]"
              src={img1}
              alt=""
            />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="bg-[#00000025] backdrop-blur-md overflow-y-auto"
            enableOverlay={false}
          >
            <div className="">
              <div className="mt-[3rem]">
                <div>
                  <Link className="text-xl font-[700] ms-[1rem] z-[50]" to="/">
                    Home
                  </Link>
                </div>
                <div className="divider"></div>
                <div>
                  <Link
                    className="text-xl font-[700] ms-[1rem] z-[50]"
                    to="/how-it-works"
                  >
                    How IT Works
                  </Link>
                </div>
                <div className="divider"></div>
                <div>
                  <Link
                    className="text-xl font-[700] ms-[1rem] z-[50]"
                    to="/it-service"
                  >
                    IT Service
                  </Link>
                </div>
                <div className="divider"></div>
                <div>
                  <Link
                    className="text-xl font-[700] ms-[1rem] z-[50]"
                    to="/about-us"
                  >
                    About Us
                  </Link>
                </div>
                <div className="divider"></div>
                <div>
                  <Link
                    className="text-xl font-[700] ms-[1rem] z-[50]"
                    to="/career"
                  >
                    Career
                  </Link>
                </div>
                <div className="divider"></div>
                <div>
                  <Link
                    className="text-xl font-[700] ms-[1rem] z-[50]"
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                </div>
                <div className="divider"></div>
                <div>
                  <Link
                    className="text-xl font-[700] ms-[1rem] z-[50]"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="text-xl">
                <div className="ms-[1rem] mt-[3rem]">
                  <p>Want to talk to us?</p>
                  <p className="font-bold">info@microbuddy.tech</p>
                  <p className="font-bold">FOLLOW US</p>
                  <div className="flex">
                    <Link>
                      <img
                        className="w-[2.5rem] m-[0.2rem]"
                        src={img2}
                        alt=""
                      />
                    </Link>
                    <Link>
                      <img
                        className="w-[2.5rem] m-[0.2rem]"
                        src={img3}
                        alt=""
                      />
                    </Link>
                    <Link>
                      <img
                        className="w-[2.5rem] m-[0.2rem]"
                        src={img4}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[1rem] right-[1rem]">
              <img onClick={handleClose} src={img5} />
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Header;
