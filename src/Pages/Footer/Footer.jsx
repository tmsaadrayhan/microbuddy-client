import { Link } from "react-router-dom";
import "./Footer.css";
import img from "../../assets/bac62aa036fa50494277cb7a86b3706c.png";
import img1 from "../../assets/footer/line7.png";
import img2 from "../../assets/footer/vector.png";
import img3 from "../../assets/footer/linkedin.png";
import img4 from "../../assets/footer/instagram.png";
import img5 from "../../assets/footer/facebook.png";
import img6 from "../../assets/footer/group.png";
import img7 from "../../assets/footer/group1.png";
import img8 from "../../assets/footer/group2.png";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
    <footer className="relative text-[black]">
      {/* footer head*/}
      <div id="footer-parent" className="hidden lg:block">
        <ScrollAnimation
          duration={1}
          animateIn="grow-from-x0"
          animateOnce={true}
          className="footer-head "
          animatePreScroll={false}
        >
          <div className="mt-[15rem] md:mt-[10rem] text-center md:text-start">
            <div className="absolute-center  lg:mt-[0] bg-[#14133B] lg:rounded-3xl">
              <ScrollAnimation
                animateOnce={true}
                duration={1.5}
                animateIn="fade-in"
              >
                <div className="md:flex w-full lg:w-[65rem] items-center z-up mx-auto lg:my-[0] pt-[2rem] md:pt-[0rem] h-[20rem] md:h-[15rem] lg:h-[10rem] text-white">
                  <div className="md:ms-[4rem] md:w-1/2 lg:w-3/5">
                    <div>
                      <div className="flex justify-center md:justify-start">
                        <div className="flex items-center">
                          <img className="me-[1rem]" src={img1} />
                          <h1 className="text-lg">Let's Get in Touch</h1>
                        </div>
                      </div>

                      <h1 className="text-3xl">
                        Let's talk about your business IT Support Needs.
                      </h1>
                    </div>
                  </div>

                  <div className="md:w-1/2 lg:w-2/5 flex justify-center mt-[1rem] md:mt-[0]">
                    <Link to="/contact">
                      <button className="flex p primary-button rounded-xl border-4 text-lg">
                        Get Started Now
                      </button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="block lg:hidden mt-[15rem] md:mt-[10rem] text-center md:text-start">
        <div className="absolute-center bg-[#14133B] lg:rounded-3xl md:flex w-full lg:w-[65rem] items-center z-up mx-auto lg:my-[0] pt-[2rem] md:pt-[0rem] md:h-[15rem] lg:h-[10rem] text-white">
          <div className="md:ms-[4rem] md:w-1/2 lg:w-3/5">
            <div>
              <div className="flex justify-center md:justify-start">
                <div className="flex items-center">
                  <img className="me-[1rem]" src={img1} />
                  <p className="text-lg">Let's Get in Touch</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold py-[1rem]">
                Let's talk about your business IT Support Needs.
              </h1>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-2/5 flex justify-center mt-[1rem] md:mt-[0] my-[3rem]">
            <Link to="/contact">
              <button className="bg-[#666AE5] py-[0.75rem] rounded-xl px-[2rem] border-4 text-lg">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* footer main*/}
      <div className="bg-[#EEEEFA]">
        <div className="lg:flex mx-auto lg:max-w-[100rem] pt-[15rem] lg:pt-[7rem] p-10 lg:px-[1rem]">
          <div className="w-full lg:w-2/5">
            <div className="text-center w-[18rem] md:w-[25rem] lg:max-w-[20rem] mx-auto flex justify-center md:justify-start">
              <div className="my-[2rem] lg:mb-[0rem]">
                <img className="mx-auto lg:mx-[0rem] lg:w-[10rem]" src={img} />
                <p className="text-start">
                  Personalization assumed up an excess of position in the
                  showcasing space and has made each and every one of
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:w-3/5 grid grid-cols-2 md:grid-cols-4">
            <div className="mb-[1rem]">
              <h6 className="footer-header my-[1rem]">Pages</h6>
              <Link to="/" className="link link-hover">
                <p className="my-[0.25rem]">Home</p>
              </Link>
              <Link to="/how-it-works" className="link link-hover">
                <p className="my-[0.25rem]">How It Works</p>
              </Link>
              <Link to="/it-service" className="link link-hover">
                <p className="my-[0.25rem]">IT Service</p>
              </Link>
              <Link to="/portfolio" className="link link-hover">
                <p className="my-[0.25rem]">Portfolio</p>
              </Link>
            </div>
            <div className="flex justify-end md:justify-start">
              <div>
                <h6 className="footer-header my-[1rem]">About</h6>
                <Link to="/about-us" className="link link-hover">
                  <p className="my-[0.25rem]">About Us</p>
                </Link>
                <Link to="/contact" className="link link-hover">
                  <p className="my-[0.25rem]">Contact Us</p>
                </Link>
                <Link to="/career" className="link link-hover">
                  <p className="my-[0.25rem]">Career</p>
                </Link>
              </div>
            </div>
            <div className="col-span-2 mt-[1rem]">
              <div className="text-center md:text-start w-auto">
                <h6 className="footer-header mb-[2rem] md:mb-[.75rem]">
                  Address
                </h6>
                <img
                  className="w-[4rem] block md:hidden mx-auto"
                  src={img6}
                  alt=""
                />
                <div className="flex justify-center md:justify-start md:mx-[0]">
                  <div className="hidden md:block p-2 w-[4rem]">
                    <img src={img6} alt="" />
                  </div>
                  <div>
                    <p className="text-[#666AE5] font-[500]">Our Phone</p>
                    <p>01894688850</p>
                  </div>
                </div>
                <img
                  className="w-[4rem] mt-[2rem] block md:hidden mx-auto"
                  src={img7}
                  alt=""
                />
                <div className="flex">
                  <div className="hidden md:block p-2 w-[4rem]">
                    <img src={img7} alt="" />
                  </div>
                  <div className="mx-auto md:mx-0 p-1">
                    <p className="text-[#666AE5] font-[500]">Our Email</p>
                    <p>info@microbuddy.tech</p>
                  </div>
                </div>
                <img
                  className="mt-[2rem] w-[4rem] block md:hidden mx-auto"
                  src={img8}
                  alt=""
                />
                <div className="flex">
                  <div className="hidden md:block p-2 w-[4rem] ">
                    <img className="w-full" src={img8} alt="" />
                  </div>
                  <div className="mx-auto lg:mx-[0rem] p-1 ">
                    <p className="text-[#666AE5] font-[500]">Our Address</p>
                    <p>House -11, Road - 01, Block - F, Banasree,</p>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider lg:w-[80rem] my-[0rem] mx-auto"></div>
        <div className="px-[2rem] lg:mx-auto lg:max-w-[80rem] mx-auto">
          <div className="flex justify-center md:justify-end pb-[3rem]">
            <div className="p-[0.4rem] flex items-center w-[2rem]">
              <a href="https://twitter.com/MicroBuddy72305" target="_blank">
                <img className="h-[1.25rem]" src={img2} alt="Twitter" />
              </a>
            </div>
            <div className="p-[0.4rem] flex items-center w-[2rem]">
              <a
                href="https://www.linkedin.com/company/89942470/admin/feed/posts/"
                target="_blank"
              >
                <img className="h-[1.25rem]" src={img3} alt="Linkedin" />
              </a>
            </div>
            <div className="p-[0.4rem] flex items-center w-[2rem]">
              <a href="https://www.instagram.com/microbuddyy/" target="_blank">
                <img className="h-[1.25rem]" src={img4} alt="Instagram" />
              </a>
            </div>
            <div className="p-[0.4rem] flex items-center w-[2rem]">
              <a
                href="https://www.facebook.com/microbuddy.tech"
                target="_blank"
              >
                <img className="h-[1.25rem]" src={img5} alt="FaceBook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
