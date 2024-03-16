import img1 from "../../../assets/youtube/youtube.png";
import img2 from "../../../assets/webproject/projects.png";
import img3 from "../../../assets/youtube/youtubelogo1.png";
import img4 from "../../../assets/youtube/group293.png";
import img5 from "../../../assets/youtube/group398.png";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const YouTube = () => {
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
    <div className="lg:mx-auto">
      <div className="lg:max-w-[90rem] lg:mx-auto relative">
        <div className="text-center flex justify-center lg:justify-end lg:mb-[0] relative lg:mx-[0rem]">
          <div className="md:m-[1rem] md:m-[0rem] lg:ms-[10rem] lg:w-[35rem] lg:absolute lg:right-[0rem] lg:top-[-3rem]">
            <div className="overflow-hidden">
              <ScrollAnimation animateOnce={true} animateIn="pop-up">
                <img src={img2} alt="" />
              </ScrollAnimation>
            </div>
            <h1 className="font-[700] text-4xl md:text-5xl mt-[-25px] md:mt-[-40px]">
              YOUTUBE CHANNEL
            </h1>
          </div>
        </div>
        <div>
          {/*lg*/}
          <div className="hidden lg:block">
            <div className="absolute right-[116rem] w-[12rem] md:rounded-2xl">
              <div className="pt-[5rem] ps-[2rem] pb-[3rem] lg:mx-[auto] lg:px-[10rem] text-black">
                <div className="blue-box w-[108rem] rounded-3xl lg:flex lg:items-center justify-end lg:ps-[10rem] h-[35rem]"></div>
              </div>
            </div>
            <Slider
              className="hidden lg:block"
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div>
                <div className="flex items-center me-[10rem]">
                  <div className="bg-[#F0F0F0] mx-[auto] lg:mx-[0] md:w-[30rem] text-center md:rounded-xl mb-[5rem]">
                    <img className="my-[-1rem]" src={img3} alt="" />
                    <img className="w-full" src={img4} alt="" />
                    <div className="md:m-[1rem]">
                      <h1 className="font-bold">SpeedyBuddy</h1>
                      <p>
                        Welcome to Speed Codding, Speedy Budddy is the ultimate
                        destination for programmers and coding enthusiasts who
                        want to improve their coding skills and knowledge in the
                        most efficient way possible.
                      </p>
                    </div>
                    <button className="btn btn-error text-white rounded-full mb-[1rem]">
                      Subscribe Now
                    </button>
                  </div>
                  <div className="text-end md:text-center lg:text-start lg:mx-[0] md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      1. Speedy Buddy
                    </h1>
                    <p className="text-[#666AE5] text-xl my-[1rem]">
                      Code Learning
                    </p>
                    <p>
                      Learn to code faster and more effectively with Speedy
                      Buddy. Our concise tutorials cover web development, data
                      science, machine learning, and more. Subscribe to our
                      channel and join our passionate community today.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center me-[10rem]">
                  <div className="bg-[#F0F0F0] mx-[auto] lg:mx-[0] md:max-w-[30rem] text-center rounded-xl mb-[5rem]">
                    <img className="my-[-1rem]" src={img3} alt="" />
                    <img className="w-full" src={img5} alt="" />
                    <div className="md:m-[1rem]">
                      <h1 className="font-bold">SpeedyBuddy</h1>
                      <p>
                        Welcome to Speed Codding, Speedy Budddy is the ultimate
                        destination for programmers and coding enthusiasts who
                        want to improve their coding skills and knowledge in the
                        most efficient way possible.
                      </p>
                    </div>
                    <button className="btn btn-error text-white rounded-full mb-[1rem]">
                      Subscribe Now
                    </button>
                  </div>
                  <div className="text-end md:text-center lg:text-start md:mx-auto lg:mx-[0] md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      2. Design Buddy-
                    </h1>
                    <p className="text-[#666AE5] text-xl my-[1rem]">
                      Code Learning
                    </p>
                    <p>
                      Design Buddy is here to improve your design skills with
                      our fast-paced tutorial videos from Microbuddyy’s best
                      designers. From beginner to pro, we cover Adobe Photoshop,
                      Illustrator, Figma, and more. Join now to unlock your
                      potential!
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="hidden lg:block absolute right-[15rem] bottom-[5rem]">
              <button className="btn" onClick={previous}>
                <IoIosArrowBack />
              </button>
              <button className="btn ms-[1rem]" onClick={next}>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          {/*md and sm*/}
          <div className="lg:hidden ms-[-2rem] md:ms-[-2rem] md:rounded-2xl mx:mx-auto">
            <Slider fade={false} autoplay={true} arrows={false}>
              <div className="pt-[5rem] ps-[2rem] pb-[3rem]  lg:px-[10rem] text-black">
                <div className="blue-box lg:max-w-[110rem] rounded-3xl lg:flex lg:items-center justify-end lg:ps-[10rem]">
                  <div className="bg-[#F0F0F0] mx-[auto] lg:mx-[0] md:w-[30rem] text-center md:rounded-xl mt-[-5rem] mb-[5rem]">
                    <img className="my-[-1rem]" src={img3} alt="" />
                    <img className="mx-auto" src={img4} alt="" />
                    <div className="md:m-[1rem]">
                      <h1 className="font-bold">SpeedyBuddy</h1>
                      <p>
                        Welcome to Speed Codding, Speedy Budddy is the ultimate
                        destination for programmers and coding enthusiasts who
                        want to improve their coding skills and knowledge in the
                        most efficient way possible.
                      </p>
                    </div>
                    <button className="btn btn-error text-white rounded-full mb-[1rem]">
                      Subscribe Now
                    </button>
                  </div>
                  <div className="text-end md:text-center lg:text-start md:mx-auto lg:mx-[0] md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      1. Speedy Buddy
                    </h1>
                    <p className="text-[#666AE5] text-xl my-[1rem]">
                      Code Learning
                    </p>
                    <p>
                      Learn to code faster and more effectively with Speedy
                      Buddy. Our concise tutorials cover web development, data
                      science, machine learning, and more. Subscribe to our
                      channel and join our passionate community today.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-[5rem] ps-[2rem] pb-[3rem] lg:mx-[auto] lg:px-[10rem] text-black">
                <div className="blue-box lg:max-w-[110rem] rounded-3xl lg:flex lg:items-center justify-end lg:ps-[10rem]">
                  <div className="bg-[#F0F0F0] mx-[auto] lg:mx-[0] md:w-[30rem] text-center md:rounded-xl mt-[-5rem] mb-[5rem]">
                    <img className="my-[-1rem]" src={img3} alt="" />
                    <img className="mx-auto" src={img5} alt="" />
                    <div className="md:m-[1rem]">
                      <h1 className="font-bold">SpeedyBuddy</h1>
                      <p>
                        Welcome to Speed Codding, Speedy Budddy is the ultimate
                        destination for programmers and coding enthusiasts who
                        want to improve their coding skills and knowledge in the
                        most efficient way possible.
                      </p>
                    </div>
                    <button className="btn btn-error text-white rounded-full mb-[1rem]">
                      Subscribe Now
                    </button>
                  </div>
                  <div className="text-end md:text-center lg:text-start md:mx-auto lg:mx-[0] md:w-[30rem] m-4 p-[2rem]">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      2. Design Buddy-
                    </h1>
                    <p className="text-[#666AE5] text-xl my-[1rem]">
                      Code Learning
                    </p>
                    <p>
                      Design Buddy is here to improve your design skills with
                      our fast-paced tutorial videos from Microbuddyy’s best
                      designers. From beginner to pro, we cover Adobe Photoshop,
                      Illustrator, Figma, and more. Join now to unlock your
                      potential!
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <img
            className=" hidden lg:block absolute w-[6rem] right-[2rem] top-[6rem]"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default YouTube;
