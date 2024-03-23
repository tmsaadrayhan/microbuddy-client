import "./OurService.css";
import img1 from "../../../assets/cube.webp";
import img2 from "../../../assets/services/calender.webp";
import img3 from "../../../assets/services/group297.png";
import img4 from "../../../assets/services/group296.png";
import img5 from "../../../assets/services/group294.png";
import img6 from "../../../assets/services/group295.png";
import img7 from "../../../assets/services/ourservice.png";
import img8 from "../../../assets/services/services.png";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const OurService = () => {
  return (
    <div className="service-bg relative">
      <div className="lg:max-w-[70rem] mx-auto lg:flex gap-4">
        {/*sm and md*/}
        <div className="flex lg:hidden justify-end mx-[1rem] md:mx-[3rem]">
          <div className="text-end w-full mx-auto md:max-w-[35rem] md:mb-[10rem]">
            <div>
              <h1 className="gradient-text text-7xl md:text-9xl font-bold z-[-1rem]">
                SERVICES
              </h1>
            </div>
            <div className="mt-[-2.5rem] md:mt-[-4.5rem]">
              <div className="flex justify-end">
                <img className="w-[14rem] md:w-[30rem]" src={img7} alt="" />
              </div>
            </div>
            <div className="mb-6">
              <p>
                MicroBuddy combines innovation with excellence, providing a wide
                array of services to enhance your business. Our Cloud Service
                delivers boundless scalability and top-notch security, while our
                Tech Service streamlines operations in the ever-evolving tech
                environment.
              </p>
            </div>
            <div>
              <Link to="./it-service">
                <button className="primary-button">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
        {/*lg and md*/}
        <div className="md:max-w-[35rem] mx-auto">
          {/*lg*/}
          <div className="hidden lg:grid grid-cols-2 gap-4 mt-[-2] services">
            <ScrollAnimation
              animateOnce={true}
              delay={500}
              duration={2}
              animateIn="service-from-left"
              className="pt-[5rem]"
            >
              <div className="mx-[1rem] rounded-xl h-fit mt-[1rem] tech-service">
                <img className="my-[-6rem]" src={img3} alt="" />
                <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                  <h1 className="text-[24px] my-[0.5rem] font-bold">
                    Tech Service
                  </h1>
                  <p>
                    MicroBuddy's Tech Support streamlines complexity, enhancing
                    digital environments for seamless operations and innovation.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              duration={2}
              animateIn="service-from-left"
              className=" mx-[1rem] rounded-xl h-fit mt-[1rem] graphic-design "
            >
              <img className="my-[-6rem]" src={img4} alt="" />
              <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                <h1 className="text-[24px] my-[0.5rem] font-bold">
                  Graphic Design
                </h1>
                <p>
                  MicroBuddy's Graphic Design Service transforms ideas into
                  compelling visuals, bolstering brand influence through
                  creative mastery.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              delay={500}
              duration={2}
              animateIn="service-from-left"
              className="mx-[1rem] rounded-xl h-fit mt-[1rem] software-service"
            >
              <img className="my-[-6rem]" src={img5} alt="" />
              <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                <h1 className="text-[24px] my-[0.5rem] font-bold">
                  Software Service
                </h1>
                <p>
                  MicroBuddy's Software Service specializes in creating bespoke
                  solutions, turning concepts into effective outcomes, fostering
                  innovation, and achieving success.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              duration={2}
              animateIn="service-from-left"
              className="mt-[-4rem] mx-[1rem] rounded-xl h-fit cloud-service"
            >
              <img className="my-[-6rem]" src={img6} alt="" />
              <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                <h1 className="text-[24px] my-[0.5rem] font-bold">
                  Cloud Service
                </h1>
                <p>
                  MicroBuddy's Cloud Service ensures infinite scalability,
                  robust security, and uninterrupted operation for effortless
                  adjustment in the digital world.
                </p>
              </div>
            </ScrollAnimation>
          </div>
          {/*md*/}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 mt-[5rem] services">
            <div className="pt-[5rem]">
              <div className="mx-[1rem] rounded-xl h-[17rem] tech-service">
                <img className="my-[-6rem]" src={img3} alt="" />
                <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                  <h1 className="text-[24px] my-[0.5rem] font-bold ">
                    Tech Service
                  </h1>
                  <p>
                    MicroBuddy's Tech Support streamlines complexity, enhancing
                    digital environments for seamless operations and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className=" mx-[1rem] rounded-xl h-[17rem] graphic-design">
              <img className="my-[-6rem]" src={img4} alt="" />
              <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                <h1 className="text-[24px] my-[0.5rem] font-bold">
                  Graphic Design
                </h1>
                <p>
                  MicroBuddy's Graphic Design Service transforms ideas into
                  compelling visuals, bolstering brand influence through
                  creative mastery.
                </p>
              </div>
            </div>
            <div className="mx-[1rem] rounded-xl h-[17rem] software-service">
              <img className="my-[-6rem]" src={img5} alt="" />
              <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                <h1 className="text-[24px] my-[0.5rem] font-bold">
                  Software Service
                </h1>
                <p>
                  MicroBuddy's Software Service specializes in creating bespoke
                  solutions, turning concepts into effective outcomes, fostering
                  innovation, and achieving success.
                </p>
              </div>
            </div>
            <div className="mt-[-5rem] mx-[1rem] rounded-xl h-[17rem] cloud-service">
              <img className="my-[-6rem]" src={img6} alt="" />
              <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                <h1 className="text-[24px] my-[0.5rem] font-bold">
                  Cloud Service
                </h1>
                <p>
                  MicroBuddy's Cloud Service ensures infinite scalability,
                  robust security, and uninterrupted operation for effortless
                  adjustment in the digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*sm*/}
        <div className="block md:hidden">
          <Slider autoplay={true} arrows={false}>
            <div className="px-[1rem] py-[7rem] text-black">
              <div className="mx-[1rem] rounded-xl tech-service">
                <img className="my-[-6rem]" src={img3} alt="" />
                <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                  <h1 className="text-[24px] my-[0.5rem] font-bold">
                    Tech Service
                  </h1>
                  <p>
                    MicroBuddy's Tech Support streamlines complexity, enhancing
                    digital environments for seamless operations and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[1rem] py-[7rem] text-black">
              <div className=" mx-[1rem] rounded-xl graphic-design">
                <img className="my-[-6rem]" src={img4} alt="" />
                <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                  <h1 className="text-[24px] my-[0.5rem] font-bold">
                    Graphic Design
                  </h1>
                  <p>
                    MicroBuddy's Graphic Design Service transforms ideas into
                    compelling visuals, bolstering brand influence through
                    creative mastery.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[1rem] py-[7rem] text-black">
              <div className="mx-[1rem] rounded-xl software-service">
                <img className="my-[-6rem]" src={img5} alt="" />
                <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                  <h1 className="text-[24px] my-[0.5rem] font-bold">
                    Software Service
                  </h1>
                  <p>
                    MicroBuddy's Software Service specializes in creating
                    bespoke solutions, turning concepts into effective outcomes,
                    fostering innovation, and achieving success.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-[1rem] py-[7rem] text-black">
              <div className=" mx-[1rem] rounded-xl cloud-service">
                <img className="my-[-6rem]" src={img6} alt="" />
                <div className="mt-[3rem] mx-[1rem] mb-[1rem]">
                  <h1 className="text-[24px] my-[0.5rem] font-bold">
                    Cloud Service
                  </h1>
                  <p>
                    MicroBuddy's Cloud Service ensures infinite scalability,
                    robust security, and uninterrupted operation for effortless
                    adjustment in the digital world.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        {/*lg*/}
        <div className="hidden lg:flex text-end relative w-1/2 mx-[1rem] items-center">
          <div>
            <div className="mirror w-[6rem] absolute right-4 top-[13rem] z-[1]">
              <div className="relative">
                <img className="breathe" src={img1} alt="" />
              </div>
            </div>
            <div>
              <div className="hidden lg:block overflow-hidden">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <img src={img8} alt="" />
                </ScrollAnimation>
              </div>
            </div>
            <div className="mt-[-3rem]">
              <div className="flex justify-end">
                <img className="max-w-[32rem]" src={img7} alt="" />
              </div>
            </div>
            <div className="mb-6 text-end">
              <p className="">
                MicroBuddy combines innovation with excellence, providing a wide
                array of services to enhance your business. Our Cloud Service
                delivers boundless scalability and top-notch security, while our
                Tech Service streamlines operations in the ever-evolving tech
                environment
              </p>
            </div>
            <div>
              <Link to="/it-service">
                <button className="primary-button">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*lg*/}
      <div className="hidden lg:block">
        <ScrollAnimation animateOnce={true} animateIn="home-from-right">
          <img
            className="absolute bottom-[-3rem] right-[0px] w-[22rem]"
            src={img2}
            alt=""
          />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default OurService;
