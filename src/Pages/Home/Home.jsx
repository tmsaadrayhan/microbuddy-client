import MicrobuddyImg from "../../assets/microbuddy.png";
import img1 from "../../assets/402495e8c7e8b4828c4572ce8a158898.png";
import img3 from "../../assets/cube.webp";
import imgLoad from "../../assets/loading.gif";
import "./Home.css";
import { Link } from "react-router-dom";
import Companies from "./Companies/Companies";
import OurService from "./OurService/OurService";
import Why from "./Why/Why";
import Strategy from "./Strategy/Strategy";
import Review from "./Review/Review";
import Project from "./Project/Project";
import Projects from "./Projects/Projects";
import WebProject from "./WebProjects/WebProject";
import YouTube from "./YouTube/YouTube";
import { Helmet } from "react-helmet";
import { animateScroll } from "react-scroll";
import { useEffect, useState } from "react";

const Home = () => {
  animateScroll.scrollToTop();
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
      <div>
        <Helmet>
          <title>MICROBUDDY-IT SUPPORT & SERVICES</title>
          <meta
            name="description"
            content="Microbuddy offers IT support & services that drive business success, including website & app development, software solutions, design, digital marketing & more."
          />
        </Helmet>
        <div className="bg-head ">
          <div className="relative lg:flex gap-4 pt-20 lg:max-w-[70rem] mx-[0] lg:mx-auto items-center">
            <div className="mx-auto">
              <div className="left-text text-wrap lg:pe-[5rem] mx-auto md:max-w-[30rem] lg:max-w-[35rem]">
                <p className="text-7xl md:text-9xl font-bold text-gradient">
                  DIGITAL
                </p>
                <div className="pl-6 md:pl-8 mt-[-2rem] md:mt-[-4rem] overflow-hidden">
                  <p className="text-2xl md:text-4xl font-bold">
                    Seeking Top-Notch
                  </p>
                  <p className="text-5xl md:text-7xl font-bold">IT Support ?</p>
                  <img
                    className="ms-[-0.5rem] mb-[-1rem] w-[25rem] "
                    src={MicrobuddyImg}
                    alt=""
                  />
                  <p className="text-4xl font-black">Got You Covered.</p>
                  <div className="max-w-[24rem]">
                    <p>
                      Highly cost-effective IT support that completely
                      transforms your experience is our mission.
                    </p>
                    <p>
                      Transform your IT experience with highly affordable
                      support and efficient solutions is our core mission.
                    </p>
                  </div>
                  {/*lg and md*/}
                  <div className="hidden md:flex items-center mt-4 mb-[2rem]">
                    <div>
                      <Link to="/contact">
                        <button className="primary-button me-[1rem] w-[8rem]">
                          Get Started
                        </button>
                      </Link>
                    </div>

                    <Link
                      to="https://calendly.com/microbuddyy/30min"
                      className="flex items-center text-xl text-[#666ae5]"
                    >
                      <div className="me-[.2rem]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="49"
                          height="41"
                          viewBox="0 0 49 41"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1_513)">
                            <path
                              d="M24.4595 32.5492C22.7614 32.492 21.1199 32.1779 19.5491 31.5352C19.252 31.4067 19.0255 31.4496 18.7708 31.5924C17.8086 32.1493 16.8322 32.692 15.8699 33.2346C15.4454 33.4774 14.9925 33.6631 14.5397 33.306C14.1293 32.9633 14.0586 32.5063 14.1718 31.9922C14.4123 30.9212 14.6529 29.8358 14.851 28.7648C14.8935 28.5792 14.8369 28.3078 14.7095 28.165C12.1906 25.2803 11.2001 21.8958 11.4548 18.0972C11.851 12.3135 16.3652 7.30104 22.0397 6.35852C27.8133 5.40172 33.2048 7.88654 35.8793 12.8134C39.9123 20.2393 36.3605 30.15 27.2897 32.1779C26.3699 32.3778 25.4076 32.4206 24.4595 32.5492ZM31.0822 21.7673C32.4406 21.7673 33.5444 20.682 33.5586 19.311C33.5727 17.9687 32.4548 16.8262 31.1105 16.8262C29.752 16.8262 28.6623 17.9115 28.6482 19.2825C28.6482 20.6677 29.7237 21.7673 31.0822 21.7673ZM24.4595 21.7673C25.8322 21.7673 26.9076 20.682 26.9076 19.311C26.9076 17.9401 25.818 16.8405 24.4595 16.8405C23.101 16.8405 22.0114 17.9401 22.0114 19.311C22.0255 20.682 23.0869 21.7673 24.4595 21.7673ZM17.8227 21.7673C19.1954 21.7673 20.2708 20.6963 20.285 19.311C20.2991 17.9401 19.2095 16.8262 17.851 16.8262C16.5067 16.8262 15.3888 17.9401 15.3746 19.2825C15.3605 20.6534 16.4642 21.7673 17.8227 21.7673Z"
                              fill="#666AE5"
                            />
                            <path
                              d="M6.34634 13.9132C6.96898 11.8711 7.86049 9.94323 9.11992 8.201C12.4454 3.64548 16.8888 0.989289 22.4643 0.375223C31.436 -0.62442 39.7426 4.93074 42.4737 13.5277C42.5303 13.699 42.7284 13.9418 42.8841 13.9418C45.4878 14.1132 46.9878 15.684 47.7803 17.9975C48.9407 21.3963 48.6435 24.6951 46.7473 27.7797C45.9265 29.0935 44.8228 30.1646 43.1954 30.3074C42.4171 30.3788 41.5963 30.1503 40.818 29.9647C40.3511 29.8504 40.1105 29.9361 39.8275 30.336C37.2237 34.0204 33.7426 36.4623 29.4265 37.6762C29.2709 37.719 29.1294 37.7761 28.9878 37.819C28.9737 37.8618 28.9454 37.8904 28.9454 37.9332C28.8322 39.7183 28.2803 40.2467 26.5114 40.2467C24.9973 40.2467 23.469 40.2467 21.9548 40.2467C20.7945 40.2467 20.0303 39.4898 20.002 38.3188C19.9878 37.9475 19.9878 37.5762 20.0161 37.1906C20.0728 36.2053 20.8086 35.4484 21.785 35.4198C22.719 35.3913 23.6529 35.4198 24.5869 35.4056C30.6294 35.3199 35.1294 32.5352 38.3275 27.437C39.3746 25.7804 39.7143 23.924 39.9407 22.0389C40.0539 21.125 40.1954 20.211 40.3511 19.297C40.6058 17.7833 40.2944 16.3124 39.8558 14.8843C37.9171 8.61514 33.7284 4.73081 27.3605 3.40271C18.9407 1.66048 10.4218 7.54409 8.752 16.0411C8.38407 17.9404 8.66709 19.754 8.93596 21.5819C9.23313 23.5669 9.54445 25.5519 9.82747 27.537C10.0256 28.9793 9.61521 29.5934 8.22841 29.9504C7.50672 30.136 6.74257 30.336 6.00672 30.2931C4.05389 30.1931 2.82275 28.9365 1.94539 27.337C0.21898 24.1953 0.00671583 20.8965 1.32275 17.5691C2.0586 15.7269 3.43124 14.4845 5.38407 13.9989C5.66709 13.9561 5.97841 13.9561 6.34634 13.9132Z"
                              fill="#666AE5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_513">
                              <rect
                                width="48"
                                height="40"
                                fill="white"
                                transform="translate(0.459961 0.260742)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p>Book a meeting</p>
                    </Link>
                  </div>
                  {/*sm*/}
                  <div className="flex flex-wrap md:hidden items-center mt-4 mb-[2rem]">
                    <div className="home-from-left">
                      <Link to="/contact">
                        <button className="primary-button me-[1rem] w-[8rem]">
                          Get Started
                        </button>
                      </Link>
                    </div>
                    <div className="flex home-from-right ">
                      <Link
                        to="https://calendly.com/microbuddyy/30min"
                        className="flex items-center text-xl text-[#666ae5]"
                      >
                        <div className="me-[.2rem]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="49"
                            height="41"
                            viewBox="0 0 49 41"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_1_513)">
                              <path
                                d="M24.4595 32.5492C22.7614 32.492 21.1199 32.1779 19.5491 31.5352C19.252 31.4067 19.0255 31.4496 18.7708 31.5924C17.8086 32.1493 16.8322 32.692 15.8699 33.2346C15.4454 33.4774 14.9925 33.6631 14.5397 33.306C14.1293 32.9633 14.0586 32.5063 14.1718 31.9922C14.4123 30.9212 14.6529 29.8358 14.851 28.7648C14.8935 28.5792 14.8369 28.3078 14.7095 28.165C12.1906 25.2803 11.2001 21.8958 11.4548 18.0972C11.851 12.3135 16.3652 7.30104 22.0397 6.35852C27.8133 5.40172 33.2048 7.88654 35.8793 12.8134C39.9123 20.2393 36.3605 30.15 27.2897 32.1779C26.3699 32.3778 25.4076 32.4206 24.4595 32.5492ZM31.0822 21.7673C32.4406 21.7673 33.5444 20.682 33.5586 19.311C33.5727 17.9687 32.4548 16.8262 31.1105 16.8262C29.752 16.8262 28.6623 17.9115 28.6482 19.2825C28.6482 20.6677 29.7237 21.7673 31.0822 21.7673ZM24.4595 21.7673C25.8322 21.7673 26.9076 20.682 26.9076 19.311C26.9076 17.9401 25.818 16.8405 24.4595 16.8405C23.101 16.8405 22.0114 17.9401 22.0114 19.311C22.0255 20.682 23.0869 21.7673 24.4595 21.7673ZM17.8227 21.7673C19.1954 21.7673 20.2708 20.6963 20.285 19.311C20.2991 17.9401 19.2095 16.8262 17.851 16.8262C16.5067 16.8262 15.3888 17.9401 15.3746 19.2825C15.3605 20.6534 16.4642 21.7673 17.8227 21.7673Z"
                                fill="#666AE5"
                              />
                              <path
                                d="M6.34634 13.9132C6.96898 11.8711 7.86049 9.94323 9.11992 8.201C12.4454 3.64548 16.8888 0.989289 22.4643 0.375223C31.436 -0.62442 39.7426 4.93074 42.4737 13.5277C42.5303 13.699 42.7284 13.9418 42.8841 13.9418C45.4878 14.1132 46.9878 15.684 47.7803 17.9975C48.9407 21.3963 48.6435 24.6951 46.7473 27.7797C45.9265 29.0935 44.8228 30.1646 43.1954 30.3074C42.4171 30.3788 41.5963 30.1503 40.818 29.9647C40.3511 29.8504 40.1105 29.9361 39.8275 30.336C37.2237 34.0204 33.7426 36.4623 29.4265 37.6762C29.2709 37.719 29.1294 37.7761 28.9878 37.819C28.9737 37.8618 28.9454 37.8904 28.9454 37.9332C28.8322 39.7183 28.2803 40.2467 26.5114 40.2467C24.9973 40.2467 23.469 40.2467 21.9548 40.2467C20.7945 40.2467 20.0303 39.4898 20.002 38.3188C19.9878 37.9475 19.9878 37.5762 20.0161 37.1906C20.0728 36.2053 20.8086 35.4484 21.785 35.4198C22.719 35.3913 23.6529 35.4198 24.5869 35.4056C30.6294 35.3199 35.1294 32.5352 38.3275 27.437C39.3746 25.7804 39.7143 23.924 39.9407 22.0389C40.0539 21.125 40.1954 20.211 40.3511 19.297C40.6058 17.7833 40.2944 16.3124 39.8558 14.8843C37.9171 8.61514 33.7284 4.73081 27.3605 3.40271C18.9407 1.66048 10.4218 7.54409 8.752 16.0411C8.38407 17.9404 8.66709 19.754 8.93596 21.5819C9.23313 23.5669 9.54445 25.5519 9.82747 27.537C10.0256 28.9793 9.61521 29.5934 8.22841 29.9504C7.50672 30.136 6.74257 30.336 6.00672 30.2931C4.05389 30.1931 2.82275 28.9365 1.94539 27.337C0.21898 24.1953 0.00671583 20.8965 1.32275 17.5691C2.0586 15.7269 3.43124 14.4845 5.38407 13.9989C5.66709 13.9561 5.97841 13.9561 6.34634 13.9132Z"
                                fill="#666AE5"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_513">
                                <rect
                                  width="48"
                                  height="40"
                                  fill="white"
                                  transform="translate(0.459961 0.260742)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p className="text-nowrap">Book a meeting</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:mx-[0] relative ">
              <div className="hidden lg:block absolute w-[6.5rem] bottom-[80px] -left-[125px]">
                <div className="relative">
                  <img className="breathe" src={img3} alt="" />
                </div>
              </div>

              <img className="mx-auto pt-[5rem]" src={img1} alt="" />
            </div>
            <div className="absolute hidden lg:block w-[8rem] top-[120px] -right-[150px]">
              <div className="relative scale-x-[-1]">
                <img className="breathe" src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>

        <Companies></Companies>
        <OurService></OurService>
        <Why></Why>
        <Strategy></Strategy>
        <Review></Review>
        <Project></Project>
        <Projects></Projects>
        <YouTube></YouTube>
        <WebProject></WebProject>
      </div>
    );
};

export default Home;
