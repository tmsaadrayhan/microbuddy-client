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
import Feature from "./Feature";

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
  const techData = {
    title: "Tech Service",
    description:
      "MicroBuddy's Tech Support streamlines complexity, enhancing digital environments for seamless operations and innovation.",
    features: [
      {
        title: "Native App",
        description:
          "Build custom apps designed to your needs with Microbuddy's expertise.",
      },
      {
        title: "CROSS-PLATFORM",
        description:
          "Reach wider audiences seamlessly with our versatile app solutions.",
      },
      {
        title: "Web Development",
        description:
          "Craft engaging and functional websites with our expert development team.",
      },
    ],
  };
  const graphicsData = {
    title: "Graphic Design",
    description:
      "MicroBuddy's Graphic Design Service Turning concepts into impactful visuals, enhancing brand impact with creative expertise.",
    features: [
      {
        title: "UI/UX DESIGN",
        description:
          "Enhance user experience and engagement with our intuitive design solutions.",
      },
      {
        title: "PRINT DESIGN",
        description:
          "Bring your brand to life with eye-catching print materials designed by us.",
      },
      {
        title: "MOTION GRAPHICS",
        description:
          "Add dynamic visuals to your projects with Microbuddy's motion graphics expertise.",
      },
      {
        title: "CUSTOM CONTENT DESIGN",
        description:
          "Stand out with unique content designed specifically for your brand.",
      },
    ],
  };
  const softwareData = {
    title: "Software Service",
    description:
      "MicroBuddy’s Software Service crafts custom solutions, translating ideas into efficient reality, driving innovation and success.",
    features: [
      {
        title: "Software Prototyping",
        description:
          "Test and refine your ideas quickly with our efficient prototyping services.",
      },
      {
        title: "System Integration",
        description:
          "Seamlessly connect your systems for improved efficiency and performance.",
      },
      {
        title: "Quality Assurance",
        description:
          "Ensure flawless performance with our thorough quality assurance processes.",
      },
      {
        title: "Mobile Optimization",
        description:
          "Optimize your mobile presence for improved user experience and performance.",
      },
    ],
  };
  const cloudData = {
    title: "Cloud Service",
    description:
      "MicroBuddy’s Cloud Service delivers boundless scalability, security, and continuity for seamless adaptation in the digital landscape.",
    features: [
      {
        title: "Server & Hosting Management",
        description:
          "Keep your online presence secure and running smoothly with our expert management.Test and refine your ideas quickly with our efficient prototyping services.",
      },
      {
        title: "Software Deployment",
        description:
          "Keep your online presence secure and running smoothly with our expert management.",
      },
      {
        title: "Developer Support",
        description:
          "Get the assistance you need to keep your projects on track and successful.",
      },
    ],
  };
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
          <title>Microbuddy Services</title>
          <meta
            name="Microbuddy IT Services and solutions"
            content="Discover how Microbuddy can accelerate your fast-growing business with unified teams, integrated cloud software, cutting-edge tech, and dynamic graphic solutions. Elevate your possibilities with our comprehensive services. Contact us today!"
          />
        </Helmet>
        <HeaderBG></HeaderBG>

        <div className="pt-[5rem] lg:max-w-[70rem] lg:mx-auto relative">
          <section>
            <div className="hidden lg:block absolute w-[8rem] right-[-10rem]">
              <img className="breathe" src={img1} alt="" />
            </div>
          </section>
          <section>
            <article className="text-center mx-[1rem] lg:mx-[0rem]">
              <header>
                <div className="flex justify-center">
                  <div className="overflow-hidden">
                    <div className="pop-up">
                      <h1 className="tracking-[.5rem] md:tracking-[1.5rem] text-[45px] md:text-[110px] header">
                        SERVICES
                      </h1>
                    </div>
                  </div>
                </div>
                <h1 className="text-[25px] md:text-[50px] tracking-[.5rem] md:tracking-[1.5rem] lg:tracking-[1.5rem] mt-[-2rem] md:mt-[-5rem] font-bold ms-[1rem]">
                  OUR SERVICES
                </h1>
              </header>
              <p>
                MicroBuddy combines innovation with excellence, providing a wide
                array of services to enhance your business. Our Cloud Service
                delivers boundless scalability and top-notch security, while our
                Tech Service streamlines operations in the ever-evolving tech
                environment.
              </p>
            </article>
          </section>
          <section>
            <div className="w-auto md:w-[40rem] lg:w-auto mx-auto">
              {/*lg*/}
              <div className="hidden lg:grid pt-[2rem] px-[2rem] grid-cols-4 gap-4 services overflow-hidden">
                <div onClick={handleClick1} className="pt-[5rem] one">
                  <div className="mx-[1rem] rounded-xl mt-[5rem] tech-service">
                    <img className="mt-[-6rem]" src={img2} alt="" />
                    <article className="mx-[1rem] mb-[2rem]">
                      <header>
                        <h1 className="text-xl font-bold">{techData.title}</h1>
                      </header>
                      <p>{techData.description}</p>
                    </article>
                  </div>
                </div>
                <div
                  onClick={handleClick2}
                  className="mx-[1rem] rounded-xl mt-[5rem] graphic-design two h-fit"
                >
                  <img className="mt-[-6rem]" src={img3} alt="" />
                  <article className="mx-[1rem] mb-[2rem]">
                    <header>
                      <h1 className="text-xl font-bold">
                        {graphicsData.title}
                      </h1>
                    </header>
                    <p>{graphicsData.description}</p>
                  </article>
                </div>
                <div onClick={handleClick3} className="pt-[5rem] three">
                  <div className="mx-[1rem] rounded-xl mt-[5rem] software-service">
                    <img className="mt-[-6rem]" src={img4} alt="" />
                    <article className="mx-[1rem] mb-[2rem]">
                      <header>
                        <h1 className="text-xl font-bold">
                          {softwareData.title}
                        </h1>
                      </header>
                      <p>{softwareData.description}</p>
                    </article>
                  </div>
                </div>
                <div
                  onClick={handleClick4}
                  className=" mx-[1rem] rounded-xl mt-[5rem] cloud-service four h-fit"
                >
                  <img className="mt-[-6rem]" src={img5} alt="" />
                  <article className="mx-[1rem] mb-[2rem]">
                    <header>
                      <h1 className="text-xl font-bold">{cloudData.title}</h1>
                    </header>
                    <p>{cloudData.description}</p>
                  </article>
                </div>
              </div>
              {/*md*/}
              <div className="mt-[2rem] hidden md:grid lg:hidden grid-cols-2 lg:grid-cols-4 gap-4 services pt-[1rem] overflow-hidden">
                <div onClick={handleClick1} className="pt-[5rem]">
                  <div className="mx-[1rem] rounded-xl h-[20rem] mt-[5rem] tech-service">
                    <img className="mt-[-6rem]" src={img2} alt="" />
                    <article className="mx-[1rem] mb-[2rem]">
                      <header>
                        <h1 className="text-xl font-bold">{techData.title}</h1>
                      </header>
                      <p>{techData.description}</p>
                    </article>
                  </div>
                </div>
                <div
                  onClick={handleClick2}
                  className="mx-[1rem] rounded-xl h-[20rem] mt-[5rem] graphic-design"
                >
                  <img className="mt-[-6rem]" src={img3} alt="" />
                  <article className="mx-[1rem] mb-[2rem]">
                    <header>
                      <h1 className="text-xl font-bold">
                        {graphicsData.title}
                      </h1>
                    </header>
                    <p>{graphicsData.description}</p>
                  </article>
                </div>
                <div onClick={handleClick3} className="pt-[5rem]">
                  <div className=" mx-[1rem] rounded-xl h-[20rem] mt-[5rem] software-service">
                    <img className="mt-[-6rem]" src={img4} alt="" />
                    <article className="mx-[1rem] mb-[2rem]">
                      <header>
                        <h1 className="text-xl font-bold">
                          {softwareData.title}
                        </h1>
                      </header>
                      <p>{softwareData.description}</p>
                    </article>
                  </div>
                </div>
                <div
                  onClick={handleClick4}
                  className=" mx-[1rem] rounded-xl h-[20rem] mt-[5rem] cloud-service"
                >
                  <img className="mt-[-6rem]" src={img5} alt="" />
                  <article className="mx-[1rem] mb-[2rem]">
                    <header>
                      <h1 className="text-xl font-bold">{cloudData.title}</h1>
                    </header>
                    <p>{cloudData.description}</p>
                  </article>
                </div>
              </div>
              {/*sm*/}
              <div className="block md:hidden">
                <Slider autoplay={true} arrows={false}>
                  <div className="py-[7rem] px-[3rem] text-black">
                    <div className="mx-[1rem] rounded-xl tech-service">
                      <img className="my-[-6rem]" src={img2} alt="" />
                      <article className="mt-[3rem] mx-[1rem] mb-[2rem]">
                        <header>
                          <h1 className="text-[24px] my-[0.5rem] font-bold">
                            {techData.title}
                          </h1>
                        </header>
                        <p>{techData.description}</p>
                      </article>
                    </div>
                  </div>
                  <div className="py-[7rem] px-[3rem] text-black">
                    <div className=" mx-[1rem] rounded-xl graphic-design">
                      <img className="my-[-6rem]" src={img3} alt="" />
                      <article className="mt-[3rem] mx-[1rem] mb-[2rem]">
                        <header>
                          <h1 className="text-[24px] my-[0.5rem] font-bold">
                            {graphicsData.title}
                          </h1>
                        </header>
                        <p>{graphicsData.description}</p>
                      </article>
                    </div>
                  </div>
                  <div className="py-[7rem] px-[3rem] text-black">
                    <div className="mx-[1rem] rounded-xl software-service">
                      <img className="my-[-6rem]" src={img4} alt="" />
                      <article className="mt-[3rem] mx-[1rem] mb-[2rem]">
                        <header>
                          <h1 className="text-[24px] my-[0.5rem] font-bold">
                            {softwareData.title}
                          </h1>
                        </header>
                        <p>{softwareData.description}</p>
                      </article>
                    </div>
                  </div>
                  <div className="py-[7rem] px-[3rem] text-black">
                    <div className=" mx-[1rem] rounded-xl cloud-service">
                      <img className="my-[-6rem]" src={img5} alt="" />
                      <article className="mt-[3rem] mx-[1rem] mb-[2rem]">
                        <header>
                          <h1 className="text-[24px] my-[0.5rem] font-bold">
                            {cloudData.title}
                          </h1>
                        </header>
                        <p>{cloudData.description}</p>
                      </article>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
          <section>
            <div
              ref={ref1}
              className="lg:flex gap-4  items-center mx-[1rem] lg:mx-[0rem]"
            >
              {/*lg*/}
              <ScrollAnimation
                animateOnce={true}
                animateIn="it-from-left"
                className="hidden lg:block mt-[-1rem]"
              >
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <header>
                      <h1 className="header text-[170px]">TECH</h1>
                    </header>
                  </ScrollAnimation>
                </div>
                <article>
                  <header>
                    <h1 className="text-4xl mt-[-7rem] font-[700] text-[#886CFF]">
                      {techData.title}
                    </h1>
                  </header>
                  <p className="text-lg">{techData.description}</p>
                </article>
                <div className="ms-[-1rem]">
                  {techData.features.map((feature) => (
                    <Feature
                      key={techData.features.indexOf(feature)}
                      feature={feature}
                    ></Feature>
                  ))}
                </div>
              </ScrollAnimation>
              {/*md and sm*/}
              <div className="lg:hidden">
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <header>
                      <h1 className="header text-[100px] md:text-[170px]">
                        TECH
                      </h1>
                    </header>
                  </ScrollAnimation>
                </div>
                <div className="mt-[-4.5rem] md:mt-[-7rem]">
                  <article>
                    <header>
                      <h1 className="text-4xl font-[700] text-[#886CFF]">
                        {techData.title}
                      </h1>
                    </header>
                    <p className="text-lg">{techData.description}</p>
                  </article>
                  <div className="mx-[-1rem] md:mx-[0rem] md:ms-[-1rem]">
                    {techData.features.map((feature) => (
                      <Feature
                        key={techData.features.indexOf(feature)}
                        feature={feature}
                      ></Feature>
                    ))}
                  </div>
                </div>
              </div>
              <ScrollAnimation
                animateOnce={true}
                delay={1000}
                animateIn="grow-from-0"
                className=""
              >
                <ScrollAnimation
                  animateOnce={true}
                  duration={4}
                  delay={1000}
                  animateIn="breathe"
                  className="w-full"
                >
                  <img className="w-full" src={img7} alt="" />
                </ScrollAnimation>
              </ScrollAnimation>
            </div>
          </section>
          <section
            ref={ref2}
            className="lg:flex lg:gap-4 my-[5rem] items-center mx-[1rem] lg:mx-[0rem]"
          >
            {/*lg*/}
            <ScrollAnimation
              delay={1000}
              animateOnce={true}
              animateIn="grow-from-0"
              className="w-1/2"
            >
              <div className="hidden lg:block">
                <img className="w-full breathe" src={img9} alt="" />
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
                    <header>
                      <h1 className="header text-[130px] text-end">DESIGN</h1>
                    </header>
                  </ScrollAnimation>
                </div>
                <div className="w-auto mt-[-5.5rem] text-end">
                  <article>
                    <header>
                      <h1 className="text-4xl font-[700] text-[#00D362]">
                        {graphicsData.title}
                      </h1>
                    </header>
                    <p className="text-lg">{graphicsData.description}</p>
                  </article>
                  <div className="me-[-1rem]">
                    {graphicsData.features.map((feature) => (
                      <Feature
                        key={graphicsData.features.indexOf(feature)}
                        feature={feature}
                      ></Feature>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
              {/*md and sm*/}
              <div className="lg:hidden">
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <header>
                      <h1 className="header text-[80px] md:text-[170px] text-end">
                        DESIGN
                      </h1>
                    </header>
                  </ScrollAnimation>
                </div>
                <div className="mt-[-3.5rem] md:mt-[-7rem] text-end">
                  <article>
                    <header>
                      <h1 className="text-4xl font-[700] text-[#00D362]">
                        {graphicsData.title}
                      </h1>
                    </header>
                    <p className="text-lg">{graphicsData.description}</p>
                  </article>
                  <div className="mx-[-1rem] md:mx-[0rem] md:me-[-1rem]">
                    {graphicsData.features.map((feature) => (
                      <Feature
                        key={graphicsData.features.indexOf(feature)}
                        feature={feature}
                      ></Feature>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <img className="w-full" src={img9} alt="" />
            </div>
          </section>
          <section
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
                  <header>
                    <h1 className="header text-[80px]">SOFTWARE</h1>
                  </header>
                </ScrollAnimation>
              </div>
              <div className="mt-[-3.5rem]">
                <article>
                  <header>
                    <h1 className="text-4xl font-[700] text-[#0081F5]">
                      {softwareData.title}
                    </h1>
                  </header>
                  <p className="text-lg">{softwareData.description}</p>
                </article>
                <div className="ms-[-1rem]">
                  {softwareData.features.map((feature) => (
                    <Feature
                      key={softwareData.features.indexOf(feature)}
                      feature={feature}
                    ></Feature>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
            {/*md and sm*/}
            <div className="lg:hidden">
              <div className="overflow-hidden">
                <ScrollAnimation animateOnce={true} animateIn="pop-up">
                  <header>
                    <h1 className="header text-[55px] md:text-[100px]">SOFTWARE</h1>
                  </header>
                </ScrollAnimation>
              </div>
              <div className="mt-[-3rem] md:mt-[-4.5rem]">
                <article>
                  <header>
                    <h1 className="text-4xl font-[700] text-[#0081F5]">
                      {softwareData.title}
                    </h1>
                  </header>
                  <p className="text-lg">{softwareData.description}</p>
                </article>
                <div className="mx-[-1rem] md:mx-[0rem] md:ms-[-1rem]">
                  {softwareData.features.map((feature) => (
                    <Feature
                      key={softwareData.features.indexOf(feature)}
                      feature={feature}
                    ></Feature>
                  ))}
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
          </section>
          <section
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
                    <header>
                      <h1 className="header text-[150px] text-end">CLOUD</h1>
                    </header>
                  </ScrollAnimation>
                </div>
                <div className="w-auto mt-[-6.5rem] text-end">
                  <article>
                    <header>
                      <h1 className="text-4xl font-[700] text-[#F55498]">
                        {cloudData.title}
                      </h1>
                    </header>
                    <p className="text-lg">{cloudData.description}</p>
                  </article>
                  <div className="me-[-1rem]">
                    {cloudData.features.map((feature) => (
                      <Feature
                        key={cloudData.features.indexOf(feature)}
                        feature={feature}
                      ></Feature>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
              {/*md and sm*/}
              <div className="lg:hidden">
                <div className="overflow-hidden">
                  <ScrollAnimation animateOnce={true} animateIn="pop-up">
                    <header>
                      <h1 className="header text-[90px] md:text-[150px] text-end">CLOUD</h1>
                    </header>
                  </ScrollAnimation>
                </div>
                <div className="w-auto mt-[-4rem] md:mt-[-6.5rem] text-end">
                  <article>
                    <header>
                      <h1 className="text-4xl font-[700] text-[#F55498]">
                        {cloudData.title}
                      </h1>
                    </header>
                    <p>{cloudData.description}</p>
                  </article>
                  <div className="mx-[-1rem] md:mx-[0rem] md:me-[-1rem]">
                    {cloudData.features.map((feature) => (
                      <Feature
                        key={cloudData.features.indexOf(feature)}
                        feature={feature}
                      ></Feature>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <img className="w-full breathe" src={img13} alt="" />
            </div>
          </section>
        </div>
      </div>
    );
};

export default ITService;
