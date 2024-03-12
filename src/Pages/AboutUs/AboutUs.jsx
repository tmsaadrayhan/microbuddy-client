import imgLoad from "../../assets/loading.gif";
import "./AboutUs.css";
import img1 from "../../assets/7330e9ce4d8bcdb5788e27aabbcd4fc4.png";

import img1Md from "../../assets/review/group299md.png";
import img2 from "../../assets/aboutus/mission.png";
import img3 from "../../assets/aboutus/untitled81.png";
import img4 from "../../assets/aboutus/vision.png";
import img5 from "../../assets/aboutus/untitled71.png";
import img6 from "../../assets/aboutus/career.png";
import img7 from "../../assets/aboutus/besteployee2.png";
import img8 from "../../assets/aboutus/clients.png";

import img9 from "../../assets/companies/1.png";
import img10 from "../../assets/companies/2.png";
import img11 from "../../assets/companies/3.png";
import img12 from "../../assets/companies/4.png";
import img13 from "../../assets/companies/5.png";
import img14 from "../../assets/companies/6.png";
import img15 from "../../assets/companies/7.png";

import img16 from "../../assets/review/map2.png";
import img17 from "../../assets/review/avatar.png";
import img19 from "../../assets/review/reviews.png";

import { Link } from "react-router-dom";
import Rating from "react-rating";
import { Helmet } from "react-helmet";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdStar,
  IoMdStarOutline,
} from "react-icons/io";
import ScrollAnimation from "react-animate-on-scroll";
import { animateScroll } from "react-scroll";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import Slider from "react-slick";

const CountUpOnScroll = ({ end }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedOnce, setAnimatedOnce] = useState(false);

  const { number } = useSpring({
    to: async (next) => {
      if (isVisible && !animatedOnce) {
        await next({ number: end });
        setAnimatedOnce(true);
      }
    },
    from: { number: 0 },
    config: { duration: 1500 }, // Adjust animation duration as needed
  });
  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible) => setIsVisible(visible)}
    >
      <animated.span>
        {number.interpolate((val) => Math.floor(val))}
      </animated.span>
    </VisibilitySensor>
  );
};

const AboutUs = () => {
  animateScroll.scrollToTop();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate async loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // Simulating a 2-second loading time

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
          <title>
            Microbuddy | Contact Us for Help & Office Location Guidance
          </title>
          <meta
            name="description"
            content="Metadata- We acknowledge that every individual is unique, and we aim to supply diverse needs and preferences."
          />
        </Helmet>
        <div className="text-center h-[15rem] pt-[7rem] bg-head relative">
          <h1 className="text-6xl font-[500]">About Us</h1>
          <p className="text-xl font-bold">
            <Link to="/">Home</Link> /{" "}
            <Link to="/about-us" className="underline text-[#666AE5]">
              About Us
            </Link>
          </p>
          <div className="hidden lg:block absolute w-[4rem] md:w-[7rem] lg:w-[9rem] right-[3rem] md:right-[5rem] lg:right-[3rem] bottom-[-1rem] md:bottom-[-2rem] lg:scale-x-[-1]">
            <div className="relative">
              <img className="breathe" src={img1} alt="" />
            </div>
          </div>
          <img
            className="block lg:hidden absolute w-[4rem] md:w-[7rem] right-[3rem] md:right-[5rem] bottom-[-1rem] md:bottom-[-2rem]"
            src={img1}
            alt=""
          />
        </div>
        <div className="lg:max-w-[70rem] lg:mx-auto">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 items-center my-[5rem] mx-[1rem] lg:mx-[0rem]">
            <div className="absolute w-[7rem] top-[9rem] left-[-10rem]">
              <div className="relative">
                <img className="breathe" src={img1} alt="" />
              </div>
            </div>
            <div className="about-from-left hidden lg:block">
              <div className="overflow-hidden">
                <div className="pop-up">
                  <img src={img2} alt="" />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-4xl text-[#EEBE67]">
                  OUR MISSION
                </h1>
                <h1>
                  At MicroBuddy, we're here to make your digital dreams a
                  reality.
                </h1>
                <p>
                  We create stunning websites, user-friendly apps, impactful
                  marketing strategies, and captivating videos. Our focus is on
                  blending exciting innovation with what you really need. We're
                  not just about technology – we're about you. Your success is
                  our success, and together, we'll bring your vision to life.
                </p>
              </div>
            </div>
            <div className="lg:hidden">
              <div className="overflow-hidden">
                <div className="pop-up">
                  <img src={img2} alt="" />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-4xl text-[#EEBE67]">
                  OUR MISSION
                </h1>

                <p>
                  At MicroBuddy, we're here to make your digital dreams a
                  reality. We create stunning websites, user-friendly apps,
                  impactful marketing strategies, and captivating videos. Our
                  focus is on blending exciting innovation with what you need.
                  We're not just about technology – we're about you. Your
                  success is our success, and together, we'll bring your vision
                  to life.
                </p>
              </div>
            </div>
            <div className="w-full hidden lg:flex justify-end about-grow-from-0">
              <img src={img3} alt="" />
            </div>
            <div className="lg:hidden">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 flex items-center my-[5rem] mx-[1rem] lg:mx-[0rem]">
            <div className="absolute w-[7rem] top-[9rem] right-[-10rem] hidden lg:block">
              <div className="relative">
                <img className="breathe" src={img1} alt="" />
              </div>
            </div>
            <ScrollAnimation
              animateOnce={true}
              delay={1000}
              duration={2}
              animateIn="grow-from-0"
              className="hidden lg:block w-full lg:w-[40rem] lg:ms-[-5rem]"
            >
              <img src={img5} alt="" />
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              duration={2}
              animateIn="about-from-right"
              className="hidden lg:block"
            >
              <div className="flex justify-end">
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <img src={img4} alt="" />
                  </ScrollAnimation>
                </div>
              </div>

              <div className="text-end">
                <h1 className="font-bold text-4xl text-[#0766CB]">
                  OUR VISION
                </h1>

                <p>
                  We envision a digital world where innovation and
                  client-centric thinking come together seamlessly. We're driven
                  to create websites, apps, marketing, and videos that not only
                  impress but also empower. Our vision is a future where
                  businesses thrive with our tech-savvy solutions, making a
                  global impact through our partnership and pioneering spirit.
                </p>
              </div>
            </ScrollAnimation>
            <div className="lg:hidden">
              <div className="flex justify-end">
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <img src={img4} alt="" />
                  </ScrollAnimation>
                </div>
              </div>

              <div className="text-end">
                <h1 className="font-bold text-4xl text-[#0766CB]">
                  OUR VISION
                </h1>
                <h1>
                  We envision a digital world where innovation and
                  client-centric thinking come together seamlessly.
                </h1>
                <p>
                  We're driven to create websites, apps, marketing, and videos
                  that not only impress but also empower. Our vision is a future
                  where businesses thrive with our tech-savvy solutions, making
                  a global impact through our partnership and pioneering
                  spirit."
                </p>
              </div>
            </div>
            <div className="block lg:hidden w-full lg:w-[40rem]">
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 flex items-center my-[5rem] mx-[1rem] lg:mx-[0rem]">
            <div className="absolute w-[7rem] top-[9rem] left-[-10rem]">
              <div className="relative">
                <img className="breathe" src={img1} alt="" />
              </div>
            </div>
            <ScrollAnimation
              animateOnce={true}
              duration={2}
              animateIn="about-from-left"
              className="hidden lg:block"
            >
              <div className="overflow-hidden">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <img src={img6} alt="" />
                </ScrollAnimation>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[#F55498]">
                  MICROBUDDY CAREERS
                </h1>
                <h1>
                  Welcome to MicroBuddy's Careers – where innovation meets
                  opportunity.
                </h1>
                <p>
                  Join a dynamic team that shapes the future through creativity
                  and collaboration. Whether tech, design, or support, your
                  unique skills find a home here. we value your unique talents.
                  Experience a culture of collaboration and growth, we’re
                  offering more than a job. Shape the future with MicroBuddy.
                </p>
              </div>
            </ScrollAnimation>
            <div className="lg:hidden">
              <div className="overflow-hidden">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <img src={img6} alt="" />
                </ScrollAnimation>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[#F55498]">
                  MICROBUDDY CAREERS
                </h1>
                <h1>
                  Welcome to MicroBuddy's Careers – where innovation meets
                  opportunity.
                </h1>
                <p>
                  Join a dynamic team that shapes the future through creativity
                  and collaboration. Whether tech, design, or support, your
                  unique skills find a home here. we value your unique talents.
                  Experience a culture of collaboration and growth, we’re
                  offering more than a job. Shape the future with MicroBuddy.
                </p>
              </div>
            </div>
            <ScrollAnimation
              animateOnce={true}
              animateIn="grow-from-0"
              delay={1000}
              duration={2}
              className="hidden lg:block lg:w-[40rem]"
            >
              <img src={img7} alt="" />
            </ScrollAnimation>
            <div className="lg:hidden">
              <img src={img7} alt="" />
            </div>
          </div>
          <div className="flex justify-center text-center mx-[1rem] lg:mx-[0rem]">
            <div>
              <div className="overflow-hidden">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <img src={img8} alt="" />
                </ScrollAnimation>
              </div>
              <h1 className=" tracking-[0.6em] text-2xl md:text-6xl font-bold mt-[-1rem] md:mt-[-3rem]">
                OUR CLIENTS
              </h1>
            </div>
          </div>
          <div className="lg:max-w-[70rem] lg:mx-auto company hidden lg:flex pt-[3rem] mx-[1rem]">
            <div className="bg-white w-[200px] h-[200px] flex items-center">
              <img src={img9} alt="" />
            </div>
            <div className="bg-white w-[200px] h-[200px] flex items-center">
              <img src={img10} alt="" />
            </div>
            <div className="bg-white w-[200px] h-[200px] flex items-center">
              <img src={img11} alt="" />
            </div>
            <div className="bg-white w-[200px] h-[200px] flex items-center">
              <img src={img12} alt="" />
            </div>
            <div className="bg-white w-[200px] h-[200px] flex items-center">
              <img src={img13} alt="" />
            </div>
            <div className="bg-white w-[200px] h-[200px] snap-center flex items-center">
              <img src={img14} alt="" />
            </div>
            <div className="bg-white w-[200px] h-[200px] snap-center flex items-center">
              <img src={img15} alt="" />
            </div>
          </div>
          <div className="hidden md:block lg:hidden mx-auto">
            <Slider autoplay={true} arrows={false} slidesToShow={4}>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img9} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img10} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img11} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img12} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img13} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img14} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img15} alt="" />
                </div>
              </div>
            </Slider>
          </div>
          <div className="block md:hidden mx-auto">
            <Slider autoplay={true} arrows={false} slidesToShow={2}>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img9} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img10} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img11} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img12} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img13} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img14} alt="" />
                </div>
              </div>
              <div className="company mx-">
                <div className="bg-white w-[150px] h-[100px] flex items-center">
                  <img src={img15} alt="" />
                </div>
              </div>
            </Slider>
          </div>
          <div className="mt-20 relative max-w-[70rem] lg:mx-auto">
            <div className="text-center font-[700] lg:mb-[-11rem]">
              <div className="mx-[1rem] md:mx-auto md:w-[40rem]">
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <img src={img19} alt="" />
                  </ScrollAnimation>
                </div>
              </div>
              <h1 className="md:text-4xl lg:text-5xl mt-[-1.25rem] md:mt-[-2rem] lg:mt-[-2rem]">
                WE HAVE CUSTOMERS WORLDWIDE-
              </h1>
              <h1 className="md:text-4xl lg:text-5xl">READ WHAT THEY SAY.</h1>
            </div>
            <img
              className="lg:mt-[7rem] -z-50 hidden lg:block"
              src={img16}
              alt=""
            />
            <img
              className="mx-auto w-full -z-50 block lg:hidden"
              src={img1Md}
              alt=""
            />
            <div className="hidden lg:block z-50 w-[7rem] absolute top-[0rem] left-[0rem]">
              <div className="relative">
                <img className="breathe" src={img1} alt="" />
              </div>
            </div>
            <div className="lg:w-[60rem] -z-10 lg:-mt-[25rem] mb-[5rem] ms-[-1rem] lg:mx-auto">
              <Slider
                prevArrow={<IoIosArrowBack />}
                nextArrow={<IoIosArrowForward />}
                overScan={1}
                autoplay={true}
              >
                <div className="ps-[1rem] py-[5rem] lg:p-[3rem] text-black">
                  <div className="bg-white mx-auto rounded-xl border blue-box">
                    <div className="flex ">
                      <div className="w-[15rem] md:w-[12rem] pt-[2rem] px-[1rem] md:p-[1rem]">
                        <img src={img17} />
                      </div>

                      <div className="py-[3rem] lg:w-[30rem] text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">John</h1>
                        <Rating
                          fullSymbol={
                            <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                          }
                          emptySymbol={
                            <IoMdStarOutline className="text-[#FFD600] text-4xl md:text-5xl" />
                          }
                          readonly={true}
                          placeholderSymbol={
                            <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                          }
                          placeholderRating={5}
                        />
                        <p className="py-6 md:text-xl">
                          Personalization assumed up an excess of position in
                          the showcasing space and has made each and every one
                          of
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-[1rem] py-[5rem] lg:p-[3rem] text-black">
                  <div className="bg-white mx-auto rounded-xl border blue-box">
                    <div className="flex ">
                      <div className="w-[15rem] md:w-[12rem] pt-[2rem] px-[1rem] md:p-[1rem]">
                        <img src={img17} />
                      </div>

                      <div className="py-[3rem] lg:w-[30rem] text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">John</h1>
                        <Rating
                          fullSymbol={
                            <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                          }
                          emptySymbol={
                            <IoMdStarOutline className="text-[#FFD600] text-4xl md:text-5xl" />
                          }
                          readonly={true}
                          placeholderSymbol={
                            <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                          }
                          placeholderRating={5}
                        />
                        <p className="py-6 md:text-xl">
                          Personalization assumed up an excess of position in
                          the showcasing space and has made each and every one
                          of
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-[1rem] py-[5rem] lg:p-[3rem] text-black">
                  <div className="bg-white mx-auto rounded-xl border blue-box">
                    <div className="flex ">
                      <div className="w-[15rem] md:w-[12rem] pt-[2rem] px-[1rem] md:p-[1rem]">
                        <img src={img17} />
                      </div>

                      <div className="py-[3rem] lg:w-[30rem] text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">John</h1>
                        <Rating
                          fullSymbol={
                            <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                          }
                          emptySymbol={
                            <IoMdStarOutline className="text-[#FFD600] text-4xl md:text-5xl" />
                          }
                          readonly={true}
                          placeholderSymbol={
                            <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                          }
                          placeholderRating={5}
                        />
                        <p className="py-6 md:text-xl">
                          Personalization assumed up an excess of position in
                          the showcasing space and has made each and every one
                          of
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="bg-[#666AE5] text-white py-[5rem]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:w-[70rem] mx-auto relative">
            <div className="hidden lg:block absolute top-[-8rem] right-[20rem] w-[6rem]">
              <div className="relative">
                <img className="breathe" src={img1} alt="" />
              </div>
            </div>
            <div className="text-center font-bold">
              <h1 className="text-5xl lg:text-7xl">
                <CountUpOnScroll end={3} />+
              </h1>
              <p>Business Year</p>
            </div>
            <div className="text-center font-bold">
              <h1 className="text-5xl lg:text-7xl">
                <CountUpOnScroll end={200} />+
              </h1>
              <p>Clients</p>
            </div>
            <div className="text-center font-bold col-span-2 md:col-span-1">
              <h1 className="text-5xl lg:text-7xl">
                <CountUpOnScroll end={540} />+
              </h1>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;
