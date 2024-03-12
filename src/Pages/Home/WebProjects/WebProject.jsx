import img1 from "../../../assets/webproject/frame4.png";
import img2 from "../../../assets/webproject/projects.png";
import img3 from "../../../assets/webproject/group2911.png";
import img4 from "../../../assets/webproject/group272.png";
import img5 from "../../../assets/webproject/dorga.png";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const WebProject = () => {
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
                <img src={img2} alt="" />
              </ScrollAnimation>
            </div>
            <h1 className="font-[700] text-4xl md:text-5xl mt-[-25px] md:mt-[-40px]">
              Websites
            </h1>
          </div>
        </div>
        <div className="mt-[1rem] md:mt-[0rem]">
          <div className="hidden lg:block lg:absolute lg:top-[10rem] lg:left-[0rem]">
            <img className="w-[6.5rem]" src={img1} alt="" />
          </div>
          {/*lg*/}
          <div className="hidden lg:block ms-[-2rem] lg:h-[40rem]">
            <div className="absolute pt-[2rem] lg:pt-[10rem] ps-[2rem] lg:px-[5rem] pb-[3rem] text-black">
              <div className="blue-box md:flex h-[30rem] items-center justify-center lg:justify-start lg:w-[110rem] rounded-3xl mx-auto lg:mx-[0rem] lg:ms-[5rem] lg:ps-[3rem] lg:pe-[15rem] pb-[2rem]"></div>
            </div>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
              className="ms-[12rem] pt-[5rem]"
            >
              <div>
                <div className="flex items-center">
                  <div className="mx-[2rem] md:mx-[0rem] lg:w-[30rem]  p-[2rem]">
                    <div className="md:w-[30rem]">
                      <h1 className="text-5xl font-bold">1. Xerrat</h1>
                      <div className="w-[20rem]">
                        <p className="text-[#666AE5] text-xl mb-[1rem]">
                          Blog Website
                        </p>
                        <p>
                          Xerrat is a concern of Microbuddy that offers a broad
                          spectrum of information and expertise to our visitors.
                          We have a team of experienced blog writers who provide
                          the best insights on various topics. Through our
                          blogs, we aim to provide our visitors with a wide
                          range of information and knowledge.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="ms-[-10rem] hidden lg:block"
                    src={img3}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="mx-[2rem] md:mx-[0rem] lg:w-[30rem] p-[2rem]">
                    <div className="md:w-[30rem]">
                      <h1 className="text-5xl font-bold">2. Portifai</h1>
                      <div className="w-[20rem]">
                        <p className="text-[#666AE5] text-xl mb-[1rem]">
                          Blog Website
                        </p>
                        <p>
                          Not only IT support, we also help to create free
                          visually appealing portfolios to showcase your
                          professional achievements and stand out.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="ms-[-10rem] hidden lg:block"
                    src={img4}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="mx-[2rem] md:mx-[0rem] lg:w-[30rem]  p-[2rem]">
                    <div className="md:w-[30rem]">
                      <h1 className="text-5xl font-bold">2. Portifai</h1>
                      <div className="w-[20rem]">
                        <p className="text-[#666AE5] text-xl mb-[1rem]">
                          Blog Website
                        </p>
                        <p>
                          Not only IT support, we also help to create free
                          visually appealing portfolios to showcase your
                          professional achievements and stand out.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="ms-[-10rem] hidden lg:block"
                    src={img5}
                    alt=""
                  />
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
              <div className="pt-[2rem] lg:pt-[10rem] ps-[2rem] lg:px-[5rem]  pb-[3rem] text-black">
                <div className="blue-box md:flex items-center justify-center lg:justify-start lg:w-[110rem] rounded-3xl mx-auto lg:mx-[0rem] lg:ms-[5rem] lg:ps-[3rem] lg:pe-[15rem] pb-[2rem]">
                  <div className="lg:w-[30rem] p-[2rem]">
                    <img src={img3} alt="" />
                    <div className="text-center mx-auto md:max-w-[30rem]">
                      <h1 className="text-5xl font-bold">1. Xerrat</h1>
                      <div>
                        <p className="text-[#666AE5] text-xl mb-[1rem]">
                          Blog Website
                        </p>
                        <p>
                          Xerrat is a concern of Microbuddy that offers a broad
                          spectrum of information and expertise to our visitors.
                          We have a team of experienced blog writers who provide
                          the best insights on various topics. Through our
                          blogs, we aim to provide our visitors with a wide
                          range of information and knowledge.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[2rem] lg:pt-[10rem] ps-[2rem] lg:px-[5rem] pb-[3rem] text-black">
                <div className="blue-box md:flex items-center justify-center lg:justify-start lg:w-[110rem] rounded-3xl mx-auto lg:mx-[0rem] lg:ms-[5rem] lg:ps-[3rem] lg:pe-[15rem] pb-[2rem]">
                  <div className="mx-[2rem] md:mx-[0rem] lg:w-[30rem]  p-[2rem]">
                    <img className="hidden lg:block" src={img4} alt="" />
                    <div className="mx-auto text-center md:max-w-[30rem]">
                      <h1 className="text-5xl font-bold">2. Portifai</h1>
                      <div>
                        <p className="text-[#666AE5] text-xl mb-[1rem]">
                          Blog Website
                        </p>
                        <p>
                          Not only IT support, we also help to create free
                          visually appealing portfolios to showcase your
                          professional achievements and stand out.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[2rem] lg:pt-[10rem] ps-[2rem] lg:px-[5rem] pb-[3rem] text-black">
                <div className="blue-box md:flex items-center justify-center lg:justify-start lg:w-[110rem] rounded-3xl mx-auto lg:mx-[0rem] lg:ms-[5rem] lg:ps-[3rem] lg:pe-[15rem] pb-[2rem]">
                  <div className="mx-[2rem] md:mx-[0rem] lg:w-[30rem]  p-[2rem]">
                    <img className="hidden lg:block" src={img5} alt="" />
                    <div className="mx-auto text-center md:max-w-[30rem]">
                      <h1 className="text-5xl font-bold">2. Portifai</h1>
                      <div>
                        <p className="text-[#666AE5] text-xl mb-[1rem]">
                          Blog Website
                        </p>
                        <p>
                          Not only IT support, we also help to create free
                          visually appealing portfolios to showcase your
                          professional achievements and stand out.
                        </p>
                      </div>
                    </div>
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
