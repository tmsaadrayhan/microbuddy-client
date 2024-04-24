import img1 from "../../../assets/webproject/frame4.png";
import img2 from "../../../assets/webproject/projects.png";
import img3 from "../../../assets/webproject/group2911.png";
import img4 from "../../../assets/webproject/group272.png";
import img5 from "../../../assets/webproject/dorga.png";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdDescription } from "react-icons/md";

const WebProject = () => {
  const webData = [
    {
      name: "Xerrat",
      title: "Blog Website",
      description:
        "Xerrat is a concern of Microbuddy that offers a broad spectrum of information and expertise to our visitors. We have a team of experienced blog writers who provide the best insights on various topics. Through our blogs, we aim to provide our visitors with a wide range of information and knowledge.",
    },
    {
      name: "Portifai",
      title: "Blog Website",
      description:
        "Not only IT support, we also help to create free visually appealing portfolios to showcase your professional achievements and stand out.",
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Enable fade effect
  };
  return (
    <div>
      <div className="lg:max-w-[90rem] lg:mx-auto lg:my-[5rem] relative mt-[2rem]">
        <div className="flex justify-center lg:justify-start lg:absolute left-[0rem] top-[3rem] mx-[1rem]">
          <div className="text-center lg:w-[35rem]">
            <div className="overflow-hidden ">
              <ScrollAnimation animateOnce={true} animateIn="pop-up">
              <h1 className="header text-[60px] md:text-[100px]">PROJECTS</h1>
              </ScrollAnimation>
            </div>
            <header>
              <h1 className="font-[700] text-4xl md:text-5xl mt-[-3rem] md:mt-[-4rem]">
                WEBSITE
              </h1>
            </header>
          </div>
        </div>
        <div className="mt-[1rem] md:mt-[0rem]">
          <div className="hidden lg:block lg:absolute lg:top-[14rem] lg:left-[0rem]">
            <img className="w-[6.5rem]" src={img1} alt="" />
          </div>
          {/*lg*/}
          <div className="hidden lg:block ms-[-2rem] lg:h-[43rem]">
            <div className="absolute top-[3rem] pt-[2rem] lg:pt-[10rem] ps-[2rem] lg:px-[5rem] pb-[3rem] text-black">
              <div className="blue-box flex h-[30rem] items-center justify-start w-[110rem] rounded-3xl mx-[0rem] ms-[5rem] ps-[3rem] pe-[15rem] pb-[2rem]"></div>
            </div>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
              className="ms-[12rem] pt-[10rem]"
            >
              <div>
                <div className="flex items-center">
                  <div className="mx-[0rem] lg:w-[30rem] p-[2rem]">
                    <article className="md:w-[30rem]">
                      <header>
                        <h1 className="text-5xl font-bold">
                          {webData[0].name}
                        </h1>
                        <p className="text-[#666AE5] text-xl mb-[1rem]">
                          {webData[0].title}
                        </p>
                      </header>
                      <div className="w-[20rem]">
                        <p>{webData[0].description}</p>
                      </div>
                    </article>
                  </div>
                  <img className="ms-[-10rem]" src={img3} alt="" />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="mx-[2rem] md:mx-[0rem] lg:w-[30rem] p-[2rem]">
                    <article className="md:w-[30rem]">
                      <header>
                        <h1 className="text-5xl font-bold">
                          {webData[1].name}
                        </h1>
                        <p className="text-[#666AE5] text-xl mb-[1rem]">
                          {webData[1].title}
                        </p>
                      </header>
                      <div className="w-[20rem]">
                        <p>{webData[1].description}</p>
                      </div>
                    </article>
                  </div>
                  <img className="ms-[-10rem]" src={img4} alt="" />
                </div>
              </div>
            </Slider>
            <div className="absolute left-[13rem] bottom-[5rem]">
              <button className="btn" onClick={previous}>
                <IoIosArrowBack />
              </button>
              <button className="btn ms-[1rem]" onClick={next}>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          {/*sm and md*/}
          <div className="lg:hidden lg:w-[130rem] ms-[-2rem] ">
            <Slider autoplay={true} arrows={false}>
              <div className="pt-[2rem] lg:pt-[10rem] ps-[2rem] lg:px-[5rem] pb-[3rem] text-black">
                <div className="blue-box md:flex items-center justify-center lg:justify-start lg:w-[110rem] rounded-3xl mx-auto lg:mx-[0rem] lg:ms-[5rem] lg:ps-[3rem] lg:pe-[15rem] pb-[2rem]">
                  <div className="lg:w-[30rem] p-[2rem]">
                    <img src={img3} alt="" />
                    <article className="text-center mx-auto md:max-w-[30rem]">
                      <header>
                        <h1 className="text-5xl font-bold">
                          {webData[0].name}
                        </h1>
                        <p className="text-[#666AE5] text-xl mb-[1rem]">
                          {webData[0].title}
                        </p>
                      </header>
                      <div>
                        <p>{webData[0].description}</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="pt-[2rem] lg:pt-[10rem] ps-[2rem] lg:px-[5rem] pb-[3rem] text-black">
                <div className="blue-box md:flex items-center justify-center lg:justify-start lg:w-[110rem] rounded-3xl mx-auto lg:mx-[0rem] lg:ms-[5rem] lg:ps-[3rem] lg:pe-[15rem] pb-[2rem]">
                  <div className="mx-[2rem] md:mx-[0rem] lg:w-[30rem]  p-[2rem]">
                    <img className="hidden lg:block" src={img4} alt="" />
                    <article className="mx-auto text-center md:max-w-[30rem]">
                      <header>
                        <h1 className="text-5xl font-bold">
                          {webData[1].name}
                        </h1>
                        <p className="text-[#666AE5] text-xl mb-[1rem]">
                          {webData[1].title}
                        </p>
                      </header>
                      <div>
                        <p>{webData[1].description}</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProject;
