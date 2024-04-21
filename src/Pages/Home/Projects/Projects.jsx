import img1 from "../../../assets/projects/apps.png";
import img2 from "../../../assets/projects/projects.png";
import img3 from "../../../assets/projects/group290.png";
import img4 from "../../../assets/projects/group391.png";
import img5 from "../../../assets/projects/group392.png";
import img6 from "../../../assets/projects/group393.png";
import img7 from "../../../assets/projects/group394.png";

import "./Projects.css";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const appData = [
    {
      name: "Dorpon",
      heading: "Movie Streaming app",
      detail:
        "“Dorpon” is your movie theater on the got. Get ratings, cast & crew details, and discover trending movies and series. Our app offers comprehensive recommendations and keeps you up-to-date with the latest releases. Thanks to the developers at Microbuddyy!",
    },
    {
      name: "EXPENSE WIZARD",
      heading: "Financial app",
      detail:
        "Expense Wizard is the perfect tool for managing your finances. Its intuitive interface and robust features make money management effortless. Say goodbye to financial stress and hello to effortless control with Expense Wizard. Our talented developers made the app the perfect lost piece of the managing money puzzle for you.",
    },
    {
      name: "Ibadat",
      heading: "Religious app",
      detail:
        "Ibadat is an Islamic life companion app developed by Microbuddy for believers all over the world. It acts as an all-in-one guide to your daily routine. With features such as finding the Qibla, receiving prayer time alerts, reading the Quran, and locating nearby mosques, our app Ibadat is your daily companion in maintaining a well-lived life according to Islamic principles.",
    },
    {
      name: "Home Gym Master",
      heading: "Exercise app",
      detail:
        "Home Gym Master is one of the finest developments by Microbuddy. It is an app that assists you in creating a spirited workout environment tailored to your preferences. Whether you're a beginner just starting your fitness journey or a seasoned pro aiming to push your limits, our app adapts to your unique needs and goals, all from the comfort of your home.",
    },
  ];
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Enable fade effect
  };
  return (
    <section className="max-w-[90rem] lg:mx-auto relative">
      <div className="my-[5rem]">
        <div className="hidden lg:block absolute left-[0rem] top-[10rem]">
          <img src={img1} alt="" />
        </div>
        <div>
          <div className="flex md:justify-center">
            <div className="text-center mx-[2rem] md:mx-[0rem] lg:w-[35rem] static lg:absolute lg:left-[0rem] lg:top-[3rem]">
              <div className="overflow-hidden">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <img src={img2} alt="" />
                </ScrollAnimation>
              </div>
              <h1 className="font-[700] text-4xl md:text-7xl lg:text-5xl mt-[-30px] md:mt-[-40px]">
                DEVELOPED APPS
              </h1>
            </div>
          </div>
          {/*lg*/}
          <div className="hidden lg:block ms-[-8rem] mx-auto">
            <div className="absolute w-[150rem] top-[10rem] left-[13rem] text-black">
              <div className="ps-[2rem] pt-[1rem] blue-box h-[38rem] flex rounded-3xl"></div>
            </div>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
              {...settings}
              className="ms-[25rem] mt-[3rem]"
            >
              <div>
                <div className="flex items-center">
                  <div className="mx-[0rem] max-w-[40rem] m-4 p-[2rem]">
                    <h1 className="text-5xl font-bold">{appData[0].name}</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                      {appData[0].heading}
                    </p>
                    <p>{appData[0].detail}</p>
                  </div>
                  <img src={img3} alt="" />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="mx-[0rem] max-w-[40rem] m-4 p-[2rem]">
                    <h1 className="text-5xl font-bold">{appData[1].name}</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                      {appData[1].heading}
                    </p>
                    <p>{appData[1].detail}</p>
                  </div>
                  <img src={img4} alt="" />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="mx-[2rem] md:mx-[0rem] md:max-w-[40rem] m-4 p-[2rem]">
                    <h1 className="text-5xl font-bold">{appData[2].name}</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                      {appData[2].heading}
                    </p>
                    <p>{appData[2].detail}</p>
                  </div>
                  <img className="hidden md:block" src={img5} alt="" />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="mx-[2rem] md:mx-[0rem] md:max-w-[40rem] m-4 p-[2rem]">
                    <h1 className="text-5xl font-bold">{appData[3].name}</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                      {appData[3].heading}
                    </p>
                    <p>{appData[3].detail}</p>
                  </div>
                  <img className="hidden md:block" src={img6} alt="" />
                </div>
              </div>
            </Slider>
            <div className="absolute left-[16rem] bottom-[5rem]">
              <button className="btn" onClick={previous}>
                <IoIosArrowBack />
              </button>
              <button className="btn ms-[1rem]" onClick={next}>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          {/*md*/}
          <div className="hidden md:block lg:hidden lg:w-[150rem] lg:mx-auto">
            <Slider autoplay={true} arrows={false}>
              <div className="lg:px-[20rem] lg:pb-[3rem] pt-[2rem] md:pt-[5rem] lg:pt-[10rem] text-black">
                <div className=" pt-[1rem] blue-box lg:w-[120rem] rounded-3xl">
                  <img
                    className="mx-auto z-50 block md:hidden"
                    src={img3}
                    alt=""
                  />
                  <article className="mx-auto text-center m-4 p-[2rem]">
                    <header>
                      <h1 className="text-5xl font-bold">{appData[0].name}</h1>
                      <p className="text-[#666AE5] text-xl mb-[1rem]">
                        {appData[0].heading}
                      </p>
                    </header>
                    <p>{appData[0].detail}</p>
                  </article>
                </div>
              </div>
              <div className="lg:px-[20rem] lg:pb-[3rem] pt-[2rem] md:pt-[5rem] lg:pt-[10rem] text-black">
                <div className=" pt-[1rem] blue-box lg:w-[120rem] rounded-3xl">
                  <img
                    className="mx-auto text z-50 block md:hidden"
                    src={img4}
                    alt=""
                  />
                  <div className="text-center mx-auto md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-5xl font-bold">{appData[1].name}</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                      {appData[1].heading}
                    </p>
                    <p>{appData[1].detail}</p>
                  </div>
                </div>
              </div>
              <div className="lg:px-[20rem] lg:pb-[3rem] pt-[2rem] md:pt-[5rem] lg:pt-[10rem] text-black">
                <div className="pt-[1rem] blue-box lg:w-[120rem] rounded-3xl">
                  <img
                    className="mx-auto z-50 block md:hidden"
                    src={img5}
                    alt=""
                  />
                  <div className="text-center mx-auto md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-5xl font-bold">{appData[2].name}</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                      {appData[2].heading}
                    </p>
                    <p>{appData[2].detail}</p>
                  </div>
                </div>
              </div>
              <div className="pt-[2rem] md:pt-[5rem] lg:pt-[10rem] text-black">
                <div className="pt-[1rem] blue-box lg:w-[105rem] rounded-3xl">
                  <img
                    className="mx-auto z-50 block md:hidden"
                    src={img6}
                    alt=""
                  />
                  <div className="text-center mx-auto md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-5xl font-bold">{appData[3].name}</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                      {appData[3].heading}
                    </p>
                    <p>{appData[3].detail}</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          {/*sm*/}
          <div className="md:hidden lg:w-[150rem]  lg:mx-auto">
            <Slider autoplay={true} arrows={false}>
              <div className=" lg:px-[20rem] lg:pb-[3rem] pt-[2rem] md:pt-[5rem] lg:pt-[10rem] text-black">
                <div className=" pt-[1rem] blue-box md:flex lg:w-[120rem] rounded-3xl">
                  <img
                    className="z-50 block md:hidden mx-auto"
                    src={img3}
                    alt=""
                  />
                  <div className="mx-[2rem] md:mx-[0rem] md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-3xl font-bold">{appData[0].name}</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                    {appData[0].heading}
                    </p>
                    <p>
                    {appData[0].detail}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-[2rem] md:pt-[5rem] lg:pt-[10rem] text-black">
                <div className="pt-[1rem] blue-box md:flex lg:w-[120rem] rounded-3xl">
                  <img
                    className="z-50 block md:hidden mx-auto"
                    src={img4}
                    alt=""
                  />
                  <div className="mx-[rem] md:mx-[0rem] md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-3xl font-bold">{appData[1].name}</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                    {appData[1].heading}
                    </p>
                    <p>
                    {appData[0].detail}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" lg:px-[20rem] lg:pb-[3rem] pt-[2rem] md:pt-[5rem] lg:pt-[10rem] text-black">
                <div className=" pt-[1rem] blue-box md:flex lg:w-[120rem] rounded-3xl">
                  <img
                    className="z-50 block md:hidden mx-auto"
                    src={img5}
                    alt=""
                  />
                  <div className="mx-[rem] md:mx-[0rem] md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-3xl font-bold">{appData[3].heading}</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                      Religious app
                    </p>
                    <p>
                      Ibadat is an Islamic life companion app developed by
                      Microbuddy for believers all over the world. It acts as an
                      all-in-one guide to your daily routine. With features such
                      as finding the Qibla, receiving prayer time alerts,
                      reading the Quran, and locating nearby mosques, our app
                      Ibadat is your daily companion in maintaining a well-lived
                      life according to Islamic principles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:px-[20rem] lg:pb-[3rem] pt-[2rem] md:pt-[5rem] lg:pt-[10rem] text-black">
                <div className="pt-[1rem] blue-box md:flex lg:w-[105rem] rounded-3xl">
                  <img
                    className="z-50 block md:hidden mx-auto"
                    src={img6}
                    alt=""
                  />
                  <div className="mx-[rem] md:mx-[0rem] md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-3xl font-bold">4. Home Gym Master</h1>
                    <p className="text-[#666AE5] text-xl mb-[1rem]">
                      Exercise app
                    </p>
                    <p>
                      Home Gym Master is one of the finest developments by
                      Microbuddy. It is an app that assists you in creating a
                      spirited workout environment tailored to your preferences.
                      Whether you're a beginner just starting your fitness
                      journey or a seasoned pro aiming to push your limits, our
                      app adapts to your unique needs and goals, all from the
                      comfort of your home.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
