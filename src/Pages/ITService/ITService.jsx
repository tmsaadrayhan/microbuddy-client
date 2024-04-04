import img from "../../assets/services/services.png";
import imgLoad from "../../assets/loading.gif";

import img1 from "../../assets/cube.webp";
import img2 from "../../assets/services/group297.png";
import img3 from "../../assets/services/group296.png";
import img4 from "../../assets/services/group294.png";
import img5 from "../../assets/services/group295.png";

import img6 from "../../assets/services/tech.png";
import img7 from "../../assets/services/tech.webp";
import img8 from "../../assets/services/design.png";
import img9 from "../../assets/services/graphic.webp";
import img10 from "../../assets/services/software.png";
import img11 from "../../assets/services/software.webp";
import img12 from "../../assets/services/cloud.png";
import img13 from "../../assets/services/cloud.webp";
import img14 from "../../assets/services/ourservice.png";

import { Helmet } from "react-helmet";
import Slider from "react-slick";
import ScrollAnimation from "react-animate-on-scroll";
import { animateScroll } from "react-scroll";
import "./ITService.css";
import { useEffect, useRef, useState } from "react";
import HeaderBG from "../Header/HeaderBG";

const ITService = () => {
  animateScroll.scrollToTop();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const handleClick1 = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick4 = () => {
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };
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
            Empower Your Fast-Growing Business with Unified Teams, Integrated
            Cloud Software, Cutting-Edge Tech, and Dynamic Graphic Solutions |
            Microbuddy
          </title>
          <meta
            name="description"
            content="Discover how Microbuddy can accelerate your fast-growing business with unified teams, integrated cloud software, cutting-edge tech, and dynamic graphic solutions. Elevate your possibilities with our comprehensive services. Contact us today!"
          />
        </Helmet>
        <HeaderBG></HeaderBG>

        <div className="pt-[5rem] lg:max-w-[70rem] lg:mx-auto relative">
          <div className="hidden lg:block absolute w-[8rem] right-[-10rem]">
            <img className="breathe" src={img1} alt="" />
          </div>
          <div className="text-end md:text-center mx-[1rem] lg:mx-[0rem]">
            <div className="flex justify-center">
              <div className="overflow-hidden">
                <div className="pop-up">
                  <img className="w-[60rem]" src={img} alt="" />
                </div>
              </div>
            </div>
            <h1 className="hidden md:block text-6xl tracking-[1.5rem] lg:tracking-[1.5rem] mt-[-3rem] lg:mt-[-4rem] font-bold ms-[1rem]">
              OUR SERVICES
            </h1>
            <div className="flex md:hidden justify-end mt-[-2rem]">
              <img className="w-[20rem]" src={img14} alt="" />
            </div>
            <p>
              MicroBuddy combines innovation with excellence, providing a wide
              array of services to enhance your business. Our Cloud Service
              delivers boundless scalability and top-notch security, while our
              Tech Service streamlines operations in the ever-evolving tech
              environment.
            </p>
          </div>

          <div className="w-auto md:w-[40rem] lg:w-auto mx-auto">
            {/*lg*/}
            <div className="hidden lg:grid pt-[2rem] px-[2rem] grid-cols-4 gap-4 services overflow-hidden">
              <div onClick={handleClick1} className="pt-[5rem] one">
                <div className="mx-[1rem] rounded-xl mt-[5rem] tech-service">
                  <img className="mt-[-6rem]" src={img2} alt="" />
                  <div className="mx-[1rem] mb-[2rem]">
                    <h1 className="text-xl font-bold">Tech Service</h1>
                    <p>
                      MicroBuddy's Tech Support streamlines complexity,
                      enhancing digital environments for seamless operations and
                      innovation.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={handleClick2}
                className="mx-[1rem] rounded-xl mt-[5rem] graphic-design two h-fit"
              >
                <img className="mt-[-6rem]" src={img3} alt="" />
                <div className="mx-[1rem] mb-[2rem]">
                  <h1 className="text-xl font-bold">Graphic Design</h1>
                  <p>
                    MicroBuddy's Graphic Design Service transforms ideas into
                    compelling visuals, bolstering brand influence through
                    creative mastery.
                  </p>
                </div>
              </div>
              <div onClick={handleClick3} className="pt-[5rem] three">
                <div className="mx-[1rem] rounded-xl mt-[5rem] software-service">
                  <img className="mt-[-6rem]" src={img4} alt="" />
                  <div className="mx-[1rem] mb-[2rem]">
                    <h1 className="text-xl font-bold">Software Service</h1>
                    <p>
                      MicroBuddy's Software Service specializes in creating
                      bespoke solutions, turning concepts into effective
                      outcomes, fostering innovation, and achieving success.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={handleClick4}
                className=" mx-[1rem] rounded-xl mt-[5rem] cloud-service four h-fit"
              >
                <img className="mt-[-6rem]" src={img5} alt="" />
                <div className="mx-[1rem] mb-[2rem]">
                  <h1 className="text-xl font-bold">Cloud Service</h1>
                  <p>
                    MicroBuddy's Cloud Service ensures infinite scalability,
                    robust security, and uninterrupted operation for effortless
                    adjustment in the digital world.
                  </p>
                </div>
              </div>
            </div>
            {/*md*/}
            <div className="mt-[2rem] hidden md:grid lg:hidden grid-cols-2 lg:grid-cols-4 gap-4 services pt-[1rem] overflow-hidden">
              <div onClick={handleClick1} className="pt-[5rem]">
                <div className="mx-[1rem] rounded-xl h-[20rem] mt-[5rem] tech-service">
                  <img className="mt-[-6rem]" src={img2} alt="" />
                  <div className="mx-[1rem] mb-[2rem]">
                    <h1 className="text-xl font-bold">Tech Service</h1>
                    <p>
                      MicroBuddy's Tech Support streamlines complexity,
                      enhancing digital environments for seamless operations and
                      innovation.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={handleClick2}
                className="mx-[1rem] rounded-xl h-[20rem] mt-[5rem] graphic-design"
              >
                <img className="mt-[-6rem]" src={img3} alt="" />
                <div className="mx-[1rem] mb-[2rem]">
                  <h1 className="text-xl font-bold">Graphic Design</h1>
                  <p>
                    MicroBuddy's Graphic Design Service transforms ideas into
                    compelling visuals, bolstering brand influence through
                    creative mastery.
                  </p>
                </div>
              </div>
              <div onClick={handleClick3} className="pt-[5rem]">
                <div className=" mx-[1rem] rounded-xl h-[20rem] mt-[5rem] software-service">
                  <img className="mt-[-6rem]" src={img4} alt="" />
                  <div className="mx-[1rem] mb-[2rem]">
                    <h1 className="text-xl font-bold">Tech Service</h1>
                    <p>
                      MicroBuddy's Software Service specializes in creating
                      bespoke solutions, turning concepts into effective
                      outcomes, fostering innovation, and achieving success.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={handleClick4}
                className=" mx-[1rem] rounded-xl h-[20rem] mt-[5rem] cloud-service"
              >
                <img className="mt-[-6rem]" src={img5} alt="" />
                <div className="mx-[1rem] mb-[2rem]">
                  <h1 className="text-xl font-bold">Cloud Service</h1>
                  <p>
                    MicroBuddy's Cloud Service ensures infinite scalability,
                    robust security, and uninterrupted operation for effortless
                    adjustment in the digital world.
                  </p>
                </div>
              </div>
            </div>
            {/*sm*/}
            <div className="block md:hidden">
              <Slider autoplay={true} arrows={false}>
                <div className="py-[7rem] px-[3rem] text-black">
                  <div className="mx-[1rem] rounded-xl tech-service">
                    <img className="my-[-6rem]" src={img2} alt="" />
                    <div className="mt-[3rem] mx-[1rem] mb-[2rem]">
                      <h1 className="text-[24px] my-[0.5rem] font-bold">
                        Tech Service
                      </h1>
                      <p>
                        MicroBuddy's Tech Support streamlines complexity,
                        enhancing digital environments for seamless operations
                        and innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-[7rem] px-[3rem] text-black">
                  <div className=" mx-[1rem] rounded-xl graphic-design">
                    <img className="my-[-6rem]" src={img3} alt="" />
                    <div className="mt-[3rem] mx-[1rem] mb-[2rem]">
                      <h1 className="text-[24px] my-[0.5rem] font-bold">
                        Graphic Design
                      </h1>
                      <p>
                        MicroBuddy's Graphic Design Service transforms ideas
                        into compelling visuals, bolstering brand influence
                        through creative mastery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-[7rem] px-[3rem] text-black">
                  <div className="mx-[1rem] rounded-xl software-service">
                    <img className="my-[-6rem]" src={img4} alt="" />
                    <div className="mt-[3rem] mx-[1rem] mb-[2rem]">
                      <h1 className="text-[24px] my-[0.5rem] font-bold">
                        Tech Service
                      </h1>
                      <p>
                        MicroBuddy's Software Service specializes in creating
                        bespoke solutions, turning concepts into effective
                        outcomes, fostering innovation, and achieving success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-[7rem] px-[3rem] text-black">
                  <div className=" mx-[1rem] rounded-xl cloud-service">
                    <img className="my-[-6rem]" src={img5} alt="" />
                    <div className="mt-[3rem] mx-[1rem] mb-[2rem]">
                      <h1 className="text-[24px] my-[0.5rem] font-bold">
                        Cloud Service
                      </h1>
                      <p>
                        MicroBuddy's Cloud Service ensures infinite scalability,
                        robust security, and uninterrupted operation for
                        effortless adjustment in the digital world.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div
            ref={ref1}
            className="lg:flex gap-4 my-[5rem] items-center mx-[1rem] lg:mx-[0rem]"
          >
            {/*lg*/}
            <ScrollAnimation
              animateOnce={true}
              animateIn="it-from-left"
              className="hidden lg:block mt-[-1rem] w-1/2"
            >
              <div className="overflow-hidden mb-[-3rem]">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <img src={img6} alt="" />
                </ScrollAnimation>
              </div>
              <h1 className="text-4xl font-[700] text-[#886CFF]">
                TECH SERVICE
              </h1>
              <p className="text-lg">
                MicroBuddy's Tech Support streamlines complexity, enhancing
                digital environments for seamless operations and innovation.
              </p>
              <div className="ms-[-1rem]">
                <div className="blue-shadow">
                  <h1 className="text-xl font-bold">Native App</h1>
                  <p>
                    Build custom apps designed to your needs with Microbuddy's
                    expertise.
                  </p>
                </div>
                <div className="blue-shadow">
                  <h1 className="text-xl font-bold">CROSS-PLATFORM</h1>
                  <p>
                    Reach wider audiences seamlessly with our versatile app
                    solutions.
                  </p>
                </div>
                <div className="blue-shadow">
                  <h1 className="text-xl font-bold">Web Development</h1>
                  <p>
                    Craft engaging and functional websites with our expert
                    development team.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            {/*md and sm*/}
            <div className="lg:hidden">
              <div className="overflow-hidden">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <img src={img6} alt="" />
                </ScrollAnimation>
              </div>
              <div className="mt-[-1rem] md:mt-[-3rem]">
                <h1 className="text-4xl font-[700] text-[#886CFF]">
                  TECH SERVICE
                </h1>
                <p className="text-lg">
                  MicroBuddy's Tech Support streamlines complexity, enhancing
                  digital environments for seamless operations and innovation.
                </p>
                <div className="mx-[-1rem] md:mx-[0rem] md:ms-[-1rem]">
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">Native App</h1>
                    <p>
                      Build custom apps designed to your needs with Microbuddy's
                      expertise.
                    </p>
                  </div>
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">CROSS-PLATFORM</h1>
                    <p>
                      Reach wider audiences seamlessly with our versatile app
                      solutions.
                    </p>
                  </div>
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">Web Development</h1>
                    <p>
                      Craft engaging and functional websites with our expert
                      development team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ScrollAnimation
              animateOnce={true}
              delay={1000}
              animateIn="grow-from-0"
              className="w-1/2"
            >
              <ScrollAnimation
                animateOnce={true}
                duration={4}
                delay={1000}
                animateIn="breathe"
              >
                <img className="w-full" src={img7} alt="" />
              </ScrollAnimation>
            </ScrollAnimation>
          </div>
          <div
            ref={ref2}
            className="lg:flex gap-4 my-[5rem] items-center mx-[1rem] lg:mx-[0rem]"
          >
            {/*lg*/}
            <div className="hidden lg:block w-1/2">
              <img className="w-full" src={img9} alt="" />
            </div>
            <div className="flex justify-end lg:w-1/2">
              {/*lg*/}
              <ScrollAnimation
                animateOnce={true}
                animateIn="it-from-right"
                className="hidden lg:block "
              >
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <img src={img8} alt="" />
                  </ScrollAnimation>
                </div>
                <div className="mt-[-1rem] md:mt-[-1.5rem] text-end">
                  <h1 className="text-4xl font-[700] text-[#886CFF]">
                    Graphic Design
                  </h1>
                  <p className="text-lg">
                    MicroBuddy's Graphic Design Service transforms ideas into
                    compelling visuals, bolstering brand influence through
                    creative mastery.
                  </p>
                  <div className="me-[-1rem]">
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">UI/UX DESIGN</h1>
                      <p>
                        Enhance user experience and engagement with our
                        intuitive design solutions.
                      </p>
                    </div>
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">PRINT DESIGN</h1>
                      <p>
                        Bring your brand to life with eye-catching print
                        materials designed by us.
                      </p>
                    </div>
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">MOTION GRAPHICS</h1>
                      <p>
                        Add dynamic visuals to your projects with Microbuddy's
                        motion graphics expertise.
                      </p>
                    </div>
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">
                        CUSTOM CONTENT DESIGN
                      </h1>
                      <p>
                        Stand out with unique content designed specifically for
                        your brand
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              {/*md and sm*/}
              <div className="lg:hidden">
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <img className="md:w-[30rem]" src={img8} alt="" />
                  </ScrollAnimation>
                </div>
                <div className="md:w-[30rem] mt-[-1rem] md:mt-[-1.5rem] text-end">
                  <h1 className="text-4xl font-[700] text-[#886CFF]">
                    Graphic Design
                  </h1>
                  <p className="text-lg">
                    MicroBuddy's Graphic Design Service transforms ideas into
                    compelling visuals, bolstering brand influence through
                    creative mastery.
                  </p>
                  <div className="mx-[-1rem] md:mx-[0rem] md:me-[-1rem]">
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">UI/UX DESIGN</h1>
                      <p>
                        Enhance user experience and engagement with our
                        intuitive design solutions.
                      </p>
                    </div>
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">PRINT DESIGN</h1>
                      <p>
                        Bring your brand to life with eye-catching print
                        materials designed by us.
                      </p>
                    </div>
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">MOTION GRAPHICS</h1>
                      <p>
                        Add dynamic visuals to your projects with Microbuddy's
                        motion graphics expertise.
                      </p>
                    </div>
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">
                        CUSTOM CONTENT DESIGN
                      </h1>
                      <p>
                        Stand out with unique content designed specifically for
                        your brand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <img className="w-full" src={img9} alt="" />
            </div>
          </div>
          <div
            ref={ref3}
            className="lg:flex gap-4 my-[5rem] items-center mx-[1rem] lg:mx-[0rem]"
          >
            {/*lg*/}
            <ScrollAnimation
              animateOnce={true}
              animateIn="it-from-left"
              className="hidden lg:block w-1/2"
            >
              <div className="overflow-hidden">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <img src={img10} alt="" />
                </ScrollAnimation>
              </div>
              <div className="mt-[-1rem] md:mt-[-1.5rem]">
                <h1 className="text-4xl font-[700] text-[#0081F5]">
                  SOFTWARE SERVICE
                </h1>
                <p className="text-lg">
                  MicroBuddy's Software Service specializes in creating bespoke
                  solutions, turning concepts into effective outcomes, fostering
                  innovation, and achieving success.
                </p>
                <div className="ms-[-1rem]">
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">Software Prototyping </h1>
                    <p>
                      Test and refine your ideas quickly with our efficient
                      prototyping services.
                    </p>
                  </div>
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">System Integration</h1>
                    <p>
                      Seamlessly connect your systems for improved efficiency
                      and performance.
                    </p>
                  </div>
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">Quality Assurance</h1>
                    <p>
                      Ensure flawless performance with our thorough quality
                      assurance processes.
                    </p>
                  </div>
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">Mobile Optimization</h1>
                    <p>
                      Optimize your mobile presence for improved user experience
                      and performance.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            {/*md and sm*/}
            <div className="lg:hidden">
              <div className="overflow-hidden">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <img className="md:w-[35rem]" src={img10} alt="" />
                </ScrollAnimation>
              </div>
              <div className="mt-[-1rem] md:mt-[-1.5rem] md:w-[28rem]">
                <h1 className="text-4xl font-[700] text-[#0081F5]">
                  SOFTWARE SERVICE
                </h1>
                <p className="text-lg">
                  MicroBuddy's Software Service specializes in creating bespoke
                  solutions, turning concepts into effective outcomes, fostering
                  innovation, and achieving success.
                </p>
                <div className="mx-[-1rem] md:mx-[0rem] md:ms-[-1rem]">
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">Software Prototyping </h1>
                    <p>
                      Test and refine your ideas quickly with our efficient
                      prototyping services.
                    </p>
                  </div>
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">System Integration</h1>
                    <p>
                      Seamlessly connect your systems for improved efficiency
                      and performance.
                    </p>
                  </div>
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">Quality Assurance</h1>
                    <p>
                      Ensure flawless performance with our thorough quality
                      assurance processes.
                    </p>
                  </div>
                  <div className="blue-shadow">
                    <h1 className="text-xl font-bold">Mobile Optimization</h1>
                    <p>
                      Optimize your mobile presence for improved user experience
                      and performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ScrollAnimation
              delay={1000}
              animateOnce={true}
              animateIn="grow-from-0"
              className="hidden lg:block w-1/2"
            >
              <img className="w-full breathe" src={img11} alt="" />
            </ScrollAnimation>
            <div className="lg:hidden">
              <img className="w-full breathe" src={img11} alt="" />
            </div>
          </div>
          <div
            ref={ref4}
            className="lg:flex gap-4 my-[5rem] items-center mx-[1rem] lg:mx-[0rem]"
          >
            <ScrollAnimation
              delay={1000}
              animateOnce={true}
              animateIn="grow-from-0"
              className="w-1/2"
            >
              <div className="hidden lg:block">
                <img className="w-full breathe" src={img13} alt="" />
              </div>
            </ScrollAnimation>
            <div className="flex justify-end lg:w-1/2">
              {/*lg*/}
              <ScrollAnimation
                animateOnce={true}
                animateIn="it-from-right"
                className="hidden lg:block"
              >
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <img className="w-auto md:w-[28rem]" src={img12} alt="" />
                  </ScrollAnimation>
                </div>
                <div className="w-auto mt-[-1rem] md:mt-[-2rem] text-end">
                  <h1 className="text-4xl font-[700] text-[#F55498]">
                    CLOUD SERVICE
                  </h1>
                  <p className="text-lg">
                    MicroBuddy's Cloud Service ensures infinite scalability,
                    robust security, and uninterrupted operation for effortless
                    adjustment in the digital world.
                  </p>
                  <div className="me-[-1rem]">
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">
                        Server & Hosting Management
                      </h1>
                      <p>
                        Keep your online presence secure and running smoothly
                        with our expert management.
                      </p>
                    </div>
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">Software Deployment</h1>
                      <p>
                        Keep your online presence secure and running smoothly
                        with our expert management.
                      </p>
                    </div>
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">Developer Support</h1>
                      <p>
                        Get the assistance you need to keep your projects on
                        track and successful.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              {/*md and sm*/}
              <div className="lg:hidden">
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <img className="w-auto md:w-[28rem]" src={img12} alt="" />
                  </ScrollAnimation>
                </div>
                <div className="w-auto md:w-[28rem] mt-[-1rem] md:mt-[-2rem] text-end">
                  <h1 className="text-4xl font-[700] text-[#F55498]">
                    CLOUD SERVICE
                  </h1>
                  <p>
                    MicroBuddy's Cloud Service ensures infinite scalability,
                    robust security, and uninterrupted operation for effortless
                    adjustment in the digital world.
                  </p>
                  <div className="mx-[-1rem] md:mx-[0rem] md:me-[-1rem]">
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">
                        Server & Hosting Management
                      </h1>
                      <p>
                        Keep your online presence secure and running smoothly
                        with our expert management.
                      </p>
                    </div>
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">Software Deployment</h1>
                      <p>
                        Keep your online presence secure and running smoothly
                        with our expert management.
                      </p>
                    </div>
                    <div className="blue-shadow">
                      <h1 className="text-xl font-bold">Developer Support</h1>
                      <p>
                        Get the assistance you need to keep your projects on
                        track and successful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <img className="w-full breathe" src={img13} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ITService;
