import img1 from "../../../assets/youtube/youtube.png";
import img2 from "../../../assets/webproject/projects.png";
import img3 from "../../../assets/youtube/youtubelogo1.png";
import img4 from "../../../assets/youtube/group293.png";
import img5 from "../../../assets/youtube/group398.png";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdDescription } from "react-icons/md";

const YouTube = () => {
  const youtubeData = [
    {
      channel: {
        name: "SpeedyBuddy",
        description:
          "Welcome to Speed Codding, Speedy Budddy is the ultimate destination for programmers and coding enthusiasts who want to improve their coding skills and knowledge in the most efficient way possible.",
      },
      slide: {
        name: "Speedy Buddy",
        title: "Code Learning",
        description:
          "Learn to code faster and more effectively with Speedy Buddy. Our concise tutorials cover web development, data science, machine learning, and more. Subscribe to our channel and join our passionate community today.",
      },
    },
    {
      channel: {
        name: "DesignBuddy",
        description:
          "Welcome to Speed Codding, Speedy Budddy is the ultimate destination for programmers and coding enthusiasts who want to improve their coding skills and knowledge in the most efficient way possible.",
      },
      slide: {
        name: "Design Buddy",
        title: "Design Content",
        description:
          "Design Buddy is here to improve your design skills with our fast-paced tutorial videos from Microbuddyy’s best designers. From beginner to pro, we cover Adobe Photoshop, Illustrator, Figma, and more. Join now to unlock your potential!",
      },
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
    <section>
      <div className="lg:mx-auto">
        <div className="lg:max-w-[90rem] lg:mx-auto relative">
          <div className="text-center flex justify-center lg:justify-end lg:mb-[0] relative lg:mx-[0rem]">
            <div className="m-[1rem] lg:ms-[10rem] lg:w-[35rem] lg:absolute lg:right-[0rem] lg:top-[0rem]">
              <div className="overflow-hidden">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <h1 className="header text-[60px] md:text-[100px]">
                    PROJECTS
                  </h1>
                </ScrollAnimation>
              </div>
              <h1 className="font-[700] text-3xl md:text-5xl mt-[-2.5rem] md:mt-[-4rem]">
                YOUTUBE CHANNEL
              </h1>
            </div>
          </div>
          {/*lg*/}
          <div className="hidden lg:block mt-[5rem]">
            <div className="absolute right-[116rem] top-[7rem] w-[12rem] md:rounded-2xl">
              <div className="pt-[5rem] ps-[2rem] pb-[3rem] lg:mx-[auto] lg:px-[10rem] text-black">
                <div className="blue-box w-[108rem] rounded-3xl lg:flex lg:items-center justify-end lg:ps-[10rem] h-[35rem]"></div>
              </div>
            </div>
            <div>
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
                      <article className="md:m-[1rem]">
                        <header className="font-bold">
                          <h1>{youtubeData[0].channel.name}</h1>
                        </header>
                        <p>{youtubeData[0].channel.description}</p>
                      </article>
                      <Link to="http://www.youtube.com/@speedybuddyy">
                        <button className="btn btn-error text-white rounded-full mb-[1rem]">
                          Subscribe Now
                        </button>
                      </Link>
                    </div>
                    <article className="text-end md:text-center lg:text-start lg:mx-[0] md:w-[30rem] m-4 p-[2rem]">
                      <header>
                        <h1 className="text-4xl md:text-5xl font-bold">
                          {youtubeData[0].slide.name}
                        </h1>
                        <p className="text-[#666AE5] text-xl my-[1rem]">
                          {youtubeData[0].slide.title}
                        </p>
                      </header>
                      <p>{youtubeData[0].slide.description}</p>
                    </article>
                  </div>
                </div>
                <div>
                  <div className="flex items-center me-[10rem]">
                    <div className="bg-[#F0F0F0] mx-[auto] lg:mx-[0] md:max-w-[30rem] text-center rounded-xl mb-[5rem]">
                      <img className="my-[-1rem]" src={img3} alt="" />
                      <img className="w-full" src={img5} alt="" />
                      <article className="md:m-[1rem]">
                        <header className="font-bold">
                          <h1>{youtubeData[1].channel.name}</h1>
                        </header>
                        <p>{youtubeData[1].channel.description}</p>
                      </article>

                      <Link to="http://www.youtube.com/@DesignBuddy0">
                        <button className="btn btn-error text-white rounded-full mb-[1rem]">
                          Subscribe Now
                        </button>
                      </Link>
                    </div>
                    <article className="text-end md:text-center lg:text-start md:mx-auto lg:mx-[0] md:w-[30rem] m-4 p-[2rem]">
                      <header>
                        <h1 className="text-4xl md:text-5xl font-bold">
                          {youtubeData[1].slide.name}
                        </h1>
                        <p className="text-[#666AE5] text-xl my-[1rem]">
                          {youtubeData[1].slide.title}
                        </p>
                      </header>
                      <p>{youtubeData[1].slide.description}</p>
                    </article>
                  </div>
                </div>
              </Slider>
            </div>
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
                    <article className="md:m-[1rem]">
                      <header>
                        <h1 className="font-bold">
                          {youtubeData[0].channel.name}
                        </h1>
                      </header>
                      <p>{youtubeData[0].channel.description}</p>
                    </article>
                    <Link to="http://www.youtube.com/@speedybuddyy">
                      <button className="btn btn-error text-white rounded-full mb-[1rem]">
                        Subscribe Now
                      </button>
                    </Link>
                  </div>
                  <article className="text-end md:text-center lg:text-start md:mx-auto lg:mx-[0] md:w-[30rem] m-4 p-[2rem]">
                    <header>
                      <h1 className="text-4xl md:text-5xl font-bold">
                        {youtubeData[0].slide.name}
                      </h1>
                      <p className="text-[#666AE5] text-xl my-[1rem]">
                        {youtubeData[0].slide.title}
                      </p>
                    </header>
                    <p>{youtubeData[0].slide.description}</p>
                  </article>
                </div>
              </div>
              <div className="pt-[5rem] ps-[2rem] pb-[3rem] lg:mx-[auto] lg:px-[10rem] text-black">
                <div className="blue-box lg:max-w-[110rem] rounded-3xl lg:flex lg:items-center justify-end lg:ps-[10rem]">
                  <div className="bg-[#F0F0F0] mx-[auto] lg:mx-[0] md:w-[30rem] text-center md:rounded-xl mt-[-5rem] mb-[5rem]">
                    <img className="my-[-1rem]" src={img3} alt="" />
                    <img className="mx-auto" src={img5} alt="" />
                    <article className="md:m-[1rem]">
                      <header>
                        <h1 className="font-bold">
                          {youtubeData[1].channel.name}
                        </h1>
                      </header>
                      <p>{youtubeData[1].channel.name}</p>
                    </article>
                    <Link to="http://www.youtube.com/@DesignBuddy0">
                      <button className="btn btn-error text-white rounded-full mb-[1rem]">
                        Subscribe Now
                      </button>
                    </Link>
                  </div>
                  <article className="text-end md:text-center lg:text-start md:mx-auto lg:mx-[0] md:w-[30rem] m-4 p-[2rem]">
                    <header>
                      <h1 className="text-4xl md:text-5xl font-bold">
                        {youtubeData[1].slide.name}
                      </h1>
                      <p className="text-[#666AE5] text-xl my-[1rem]">
                        {youtubeData[1].slide.title}
                      </p>
                    </header>
                    <p>{youtubeData[1].slide.description}</p>
                  </article>
                </div>
              </div>
            </Slider>
          </div>
          {/* only lg */}
          <img
            className="hidden lg:block absolute w-[6rem] right-[2rem] top-[13rem]"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default YouTube;
