import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import imgLoad from "../../assets/loading.gif";
import img1 from "../../assets/7330e9ce4d8bcdb5788e27aabbcd4fc4.png";
import grow from "../../assets/content/grow.png";
import img2 from "../../assets/content/frame.png";
import how from "../../assets/content/how.png";
import img3 from "../../assets/content/group355.png";
import img4 from "../../assets/content/group356.png";
import img5 from "../../assets/content/group357.png";
import img6 from "../../assets/content/group358.png";
import img7 from "../../assets/content/line10.png";
import img8 from "../../assets/content/line9.png";

import img9 from "../../assets/services/group297.png";
import img10 from "../../assets/services/group296.png";
import img11 from "../../assets/services/group294.png";
import img12 from "../../assets/services/group295.png";

import img13 from "../../assets/content/writeimg.png";
import img14 from "../../assets/content/write.png";
import img15 from "../../assets/content/line12.png";

import img16 from "../../assets/content/group319.svg";
import img17 from "../../assets/content/group323.svg";
import img18 from "../../assets/content/group324.svg";
import img19 from "../../assets/content/group325.svg";
import img20 from "../../assets/content/vector.png";

import service from "../../assets/content/service.png";

import "./Content.css";
import Slider from "react-slick";
import ScrollAnimation from "react-animate-on-scroll";
import { animateScroll } from "react-scroll";
import { useEffect, useState } from "react";

const Content = () => {
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
          <title>Content</title>
        </Helmet>
        <div className="text-center h-[15rem] pt-[7rem] bg-head relative">
          <h1 className="text-6xl font-[500]">Content</h1>
          <p className="text-xl font-bold">
            <Link to="/">Home</Link> /{" "}
            <Link to="/content" className="underline text-[#666AE5]">
              Content
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
        <div className="lg:flex gap-4 lg:max-w-[70rem] mt-[2rem] lg:mt-0 mx-auto">
          <div className="px-[1rem] mx-auto text-start flex items-center">
            <div>
              <div className="overflow-hidden">
                <img className="w-[15rem] lg:w-auto pop-up" src={grow} alt="" />
              </div>
              <h1 className="text-[32px] md:text-6xl font-black mt-[-2rem] md:mt-[-3rem] text-[#C470FF]">
                INTERCONNECTED
              </h1>
              <h1 className="text-[18px] md:text-4xl font-[600]">
                RAPIDLY GROWING BUSINESS
              </h1>
              <div className="hidden md:block">
                <p className="text-lg">
                  We offer both design and software development to move faster
                  and
                </p>
                <p className="text-lg">deliver packaged value.</p>
                <p className="text-lg"> The future is here.</p>
              </div>
              <div className="md:hidden">
                <p className="text-lg">
                  We offer both design and software development to move faster
                  and deliver packaged value.The future is here.
                </p>
              </div>
              <button className="contact-now-button">
                CONTACT NOW
                <div className="flex justify-end">
                  <img
                    className="w-[6rem] mt-[-0.75rem] me-[-2rem]"
                    src={img20}
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="lg:max-w-[70rem] lg:mx-auto mt-[5rem] ">
          <div className="overflow-hidden">
            <ScrollAnimation animateOnce={true} animateIn="pop-up">
              <img className="w-[15rem] md:w-auto mx-auto" src={how} alt="" />
            </ScrollAnimation>
          </div>
          <h1 className="text-center text-3xl md:text-6xl font-black mt-[-2rem] md:mt-[-4rem]">
            How Microbuddy Work
          </h1>
          <p className="text-center md:mt-[0.5rem]">
            FOR RAPIDLY GROWING BUSINESS
          </p>
          <div>
            <div className="md:flex">
              {/*lg and md*/}
              <div className="md:w-1/2 overflow-hidden hidden md:block">
                <ScrollAnimation
                  animateOnce={true}
                  offset={300}
                  animateIn="from-right"
                >
                  <div className=" h-[17rem] lg:h-[19rem] md:pb-[5rem] md:p-[0rem] mt-[2rem] lg:mt-0">
                    <img className="mx-auto md:mx-0" src={img3} alt="" />
                    <div className="text-center md:text-start md:max-w-[25rem] my-[2rem] md:my-0">
                      <h1 className="text-4xl md:text-3xl font-[600]">
                        Customer Portal
                      </h1>
                      <p>
                        Chat with your account admin, change your plan, submit a
                        request, check invoices, and more.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              {/*sm*/}
              <div className="md:w-1/2 overflow-hidden md:hidden">
                <div className=" h-[17rem] lg:h-[19rem] md:pb-[5rem] md:p-[0rem] mt-[2rem] lg:mt-0">
                  <img className="mx-auto md:mx-0" src={img3} alt="" />
                  <div className="text-center md:text-start md:max-w-[25rem] my-[2rem] md:my-0">
                    <h1 className="text-4xl md:text-3xl font-[600]">
                      Customer Portal
                    </h1>
                    <p>
                      Chat with your account admin, change your plan, submit a
                      request, check invoices, and more.
                    </p>
                  </div>
                </div>
              </div>
              {/*Only sm*/}
              <img className="md:hidden" src={img15} />
              <ScrollAnimation
                animateOnce={true}
                offset={500}
                animateIn="increase1"
                duration={3}
              >
                <img
                  className="hidden md:block crop-top-half"
                  src={img8}
                  alt=""
                />
              </ScrollAnimation>
              {/*md and lg*/}
              <div className="overflow-hidden md:w-1/2 lg:h-[19rem] hidden md:block">
                <ScrollAnimation
                  animateOnce={true}
                  offset={300}
                  animateIn="from-down"
                >
                  <div className=" md:ps-[5rem] md:pb-[5rem] md:p-[0rem] mt-[2rem] lg:mt-0">
                    <img className="mx-auto md:mx-0" src={img4} alt="" />
                    <div className="text-center md:text-start max-w-[25rem] my-[2rem] md:my-0">
                      <h1 className="text-4xl md:text-3xl font-[600]">
                        Defined Timelines
                      </h1>
                      <p>
                        Get accurate time estimates on every request, updates
                        tickets whenever, edit priorities, and more.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              {/*sm*/}
              <div className="overflow-hidden md:w-1/2 lg:h-[19rem] md:hidden">
                <div className=" md:ps-[5rem] md:pb-[5rem] md:p-[0rem] mt-[2rem] lg:mt-0">
                  <img className="mx-auto md:mx-0" src={img4} alt="" />
                  <div className="text-center md:text-start max-w-[25rem] my-[2rem] md:my-0">
                    <h1 className="text-4xl md:text-3xl font-[600]">
                      Defined Timelines
                    </h1>
                    <p>
                      Get accurate time estimates on every request, updates
                      tickets whenever, edit priorities, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Only sm*/}
            <img className="md:hidden" src={img15} />
            <ScrollAnimation
              animateOnce={true}
              offset={50}
              duration={3}
              animateIn="increase1"
            >
              <img className="hidden md:block md:mt-[-23rem]" src={img7} />
            </ScrollAnimation>
            <div className="md:flex">
              {/*lg and md*/}
              <div className="md:w-1/2 overflow-hidden hidden md:block">
                <ScrollAnimation
                  animateOnce={true}
                  offset={0}
                  animateIn="from-up"
                >
                  <div className="h-[17rem] lg:h-[19rem] md:pt-[5rem] md:p-[0rem] mt-[2rem] lg:mt-0">
                    <img className="mx-auto md:mx-0" src={img5} alt="" />
                    <div className="text-center md:text-start max-w-[25rem] my-[2rem] md:my-0">
                      <h1 className="text-4xl md:text-3xl font-[600]">
                        Real-Time Status Tracking
                      </h1>
                      <p>
                        Chat with a personal advocate to ensure seamless and
                        open communication on any question you may have.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              {/*sm*/}
              <div className="md:w-1/2 overflow-hidden md:hidden">
                <div className="h-[17rem] lg:h-[19rem] md:pt-[5rem] md:p-[0rem] mt-[2rem] lg:mt-0">
                  <img className="mx-auto md:mx-0" src={img5} alt="" />
                  <div className="text-center md:text-start max-w-[25rem] my-[2rem] md:my-0">
                    <h1 className="text-4xl md:text-3xl font-[600]">
                      Real-Time Status Tracking
                    </h1>
                    <p>
                      Chat with a personal advocate to ensure seamless and open
                      communication on any question you may have.
                    </p>
                  </div>
                </div>
              </div>
              {/*Only sm*/}
              <img className="md:hidden" src={img15} />
              {/*lg and md*/}
              <div className="md:w-1/2 overflow-hidden hidden md:block">
                <ScrollAnimation
                  animateOnce={true}
                  offset={0}
                  animateIn="from-left"
                >
                  <div className="h-[17rem] lg:h-[19rem] md:ps-[5rem] md:pt-[5rem] md:p-[0rem] mt-[2rem] lg:mt-0">
                    <img className="mx-auto md:mx-0" src={img6} alt="" />
                    <div className="text-center md:text-start max-w-[25rem] my-[2rem] md:my-0">
                      <h1 className="text-4xl md:text-3xl font-[600]">
                        Personal Account Admin
                      </h1>
                      <p>
                        Chat with your account admin, change your plan, submit a
                        request, check invoices, and more.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              {/*sm*/}
              <div className="md:w-1/2 overflow-hidden md:hidden">
                <div className="h-[17rem] lg:h-[19rem] md:ps-[5rem] md:pt-[5rem] md:p-[0rem] mt-[2rem] lg:mt-0">
                  <img className="mx-auto md:mx-0" src={img6} alt="" />
                  <div className="text-center md:text-start max-w-[25rem] my-[2rem] md:my-0">
                    <h1 className="text-4xl md:text-3xl font-[600]">
                      Personal Account Admin
                    </h1>
                    <p>
                      Chat with your account admin, change your plan, submit a
                      request, check invoices, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[70rem] mt-[4rem] mx-auto lg:mt-[5rem]">
          <div className="text-center">
            <div className="overflow-hidden">
              <ScrollAnimation animateOnce={true} animateIn="pop-up">
                <img
                  className="px-[1rem] md:px-0 mx-auto"
                  src={service}
                  alt=""
                />
              </ScrollAnimation>
            </div>
            1qw
            <div className="w-fit mx-auto">
              <h1 className="text-4xl md:text-6xl font-black mt-[-2rem] md:mt-[-4rem]">
                Service You Get
              </h1>
              <p>FOR RAPIDLY GROWING BUSINESS</p>
              <div className="w-full hidden lg:flex justify-end">
                <img className="w-[5rem] breathe" src={img1} alt="" />
              </div>
            </div>
          </div>
          <div className="w-auto md:w-[40rem] lg:w-auto mx-auto">
            <div className="hidden lg:grid pt-[2rem] grid-cols-2 lg:grid-cols-4 gap-4 services  overflow-hidden px-[2rem]">
              <div className="mt-[5rem] one">
                <div className="mt-[5rem] mx-[1rem] rounded-xl  tech-service">
                  <img className="mt-[-5rem]" src={img9} alt="" />
                  <div className="mx-[1rem] mb-[2rem] fix-margin">
                    <h1 className="text-xl font-bold">App Development</h1>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img16} alt="" />
                      <p className="">User journey mapping</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img16} alt="" />
                      <p className="">Product Mockups</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem]" src={img16} alt="" />
                      <p className="">App Engineering</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img16} alt="" />
                      <p>QA Testing & Launch</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-[1rem] rounded-xl mt-[5rem] graphic-design two h-fit">
                <img className="mt-[-6rem]" src={img10} alt="" />
                <div className="mx-[1rem] mb-[2rem] fix-margin">
                  <h1 className="text-xl font-bold">App Development</h1>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img17} alt="" />
                    <p className="">User journey mapping</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img17} alt="" />
                    <p className="">Product Mockups</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem]" src={img17} alt="" />
                    <p className="">App Engineering</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img17} alt="" />
                    <p>QA Testing & Launch</p>
                  </div>
                </div>
              </div>
              <div className="pt-[5rem] three">
                <div className=" mx-[1rem] rounded-xl mt-[5rem] software-service">
                  <img className="mt-[-6rem]" src={img11} alt="" />
                  <div className="mx-[1rem] mb-[2rem] fix-margin">
                    <h1 className="text-xl font-bold">App Development</h1>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img18} alt="" />
                      <p className="">User journey mapping</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img18} alt="" />
                      <p className="">Product Mockups</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem]" src={img18} alt="" />
                      <p className="">App Engineering</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img18} alt="" />
                      <p>QA Testing & Launch</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-fit mx-[1rem] rounded-xl mt-[5rem] cloud-service four">
                <img className="mt-[-6rem]" src={img12} alt="" />
                <div className="mx-[1rem] mb-[2rem] fix-margin">
                  <h1 className="text-xl font-bold">App Development</h1>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img19} alt="" />
                    <p className="">User journey mapping</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img19} alt="" />
                    <p className="">Product Mockups</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem]" src={img19} alt="" />
                    <p className="">App Engineering</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img19} alt="" />
                    <p>QA Testing & Launch</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[2rem] hidden md:grid lg:hidden grid-cols-2 lg:grid-cols-4 gap-4 services pt-[1rem] overflow-hidden px-[2rem]">
              <div className="pt-[5rem]">
                <div className="mx-[1rem] rounded-xl mt-[5rem] tech-service">
                  <img className="mt-[-6rem]" src={img9} alt="" />
                  <div className="mx-[1rem] mb-[2rem] fix-margin">
                    <h1 className="text-xl font-bold">App Development</h1>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img16} alt="" />
                      <p className="">User journey mapping</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img16} alt="" />
                      <p className="">Product Mockups</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem]" src={img16} alt="" />
                      <p className="">App Engineering</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img16} alt="" />
                      <p>QA Testing & Launch</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-[1rem] rounded-xl h-[20rem] mt-[5rem] graphic-design">
                <img className="mt-[-6rem]" src={img10} alt="" />
                <div className="mx-[1rem] mb-[2rem] fix-margin">
                  <h1 className="text-xl font-bold">App Development</h1>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img17} alt="" />
                    <p className="">User journey mapping</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img17} alt="" />
                    <p className="">Product Mockups</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem]" src={img17} alt="" />
                    <p className="">App Engineering</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img17} alt="" />
                    <p>QA Testing & Launch</p>
                  </div>
                </div>
              </div>
              <div className="pt-[5rem]">
                <div className=" mx-[1rem] rounded-xl h-[20rem] mt-[5rem] software-service">
                  <img className="mt-[-6rem]" src={img11} alt="" />
                  <div className="mx-[1rem] mb-[2rem] fix-margin">
                    <h1 className="text-xl font-bold">App Development</h1>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img18} alt="" />
                      <p className="">User journey mapping</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img18} alt="" />
                      <p className="">Product Mockups</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem]" src={img18} alt="" />
                      <p className="">App Engineering</p>
                    </div>
                    <div className="flex mt-[1rem]">
                      <img className="me-[0.5rem] " src={img18} alt="" />
                      <p>QA Testing & Launch</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mx-[1rem] rounded-xl h-[20rem] mt-[5rem] cloud-service">
                <img className="mt-[-6rem]" src={img12} alt="" />
                <div className="mx-[1rem] mb-[2rem] fix-margin">
                  <h1 className="text-xl font-bold">App Development</h1>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img19} alt="" />
                    <p className="">User journey mapping</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img19} alt="" />
                    <p className="">Product Mockups</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem]" src={img19} alt="" />
                    <p className="">App Engineering</p>
                  </div>
                  <div className="flex mt-[1rem]">
                    <img className="me-[0.5rem] " src={img19} alt="" />
                    <p>QA Testing & Launch</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <Slider autoplay={true} arrows={false}>
                <div className="py-[7rem] px-[3rem] text-black">
                  <div className="mx-[1rem] rounded-xl tech-service">
                    <img className="my-[-6rem]" src={img9} alt="" />
                    <div className="mt-[4rem] mx-[1rem] mb-[2rem] fix-margin">
                      <h1 className="text-xl font-bold">App Development</h1>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img16} alt="" />
                        <p className="">User journey mapping</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img16} alt="" />
                        <p className="">Product Mockups</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem]" src={img16} alt="" />
                        <p className="">App Engineering</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img16} alt="" />
                        <p>QA Testing & Launch</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[7rem] px-[3rem] text-black">
                  <div className=" mx-[1rem] rounded-xl graphic-design">
                    <img className="my-[-6rem]" src={img10} alt="" />
                    <div className="mt-[4rem] mx-[1rem] mb-[2rem] fix-margin">
                      <h1 className="text-xl font-bold">App Development</h1>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img17} alt="" />
                        <p className="">User journey mapping</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img17} alt="" />
                        <p className="">Product Mockups</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem]" src={img17} alt="" />
                        <p className="">App Engineering</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img17} alt="" />
                        <p>QA Testing & Launch</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[7rem] px-[3rem] text-black">
                  <div className="mx-[1rem] rounded-xl software-service">
                    <img className="my-[-6rem]" src={img11} alt="" />
                    <div className="mt-[4rem] mx-[1rem] mb-[2rem] fix-margin">
                      <h1 className="text-xl font-bold">App Development</h1>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img18} alt="" />
                        <p className="">User journey mapping</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img18} alt="" />
                        <p className="">Product Mockups</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem]" src={img18} alt="" />
                        <p className="">App Engineering</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img18} alt="" />
                        <p>QA Testing & Launch</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[7rem] px-[3rem] text-black">
                  <div className=" mx-[1rem] rounded-xl cloud-service">
                    <img className="my-[-6rem]" src={img12} alt="" />
                    <div className="mt-[4rem] mx-[1rem] mb-[2rem] fix-margin">
                      <h1 className="text-xl font-bold">App Development</h1>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img19} alt="" />
                        <p className="">User journey mapping</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img19} alt="" />
                        <p className="">Product Mockups</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem]" src={img19} alt="" />
                        <p className="">App Engineering</p>
                      </div>
                      <div className="flex mt-[1rem]">
                        <img className="me-[0.5rem] " src={img19} alt="" />
                        <p>QA Testing & Launch</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[70rem] mb-[12rem] mx-auto">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <div className="hidden lg:flex justify-end">
                <img className="breathe w-[8rem]" src={img1} alt="" />
              </div>
              <div>
                <img src={img13} alt="" />
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end px-[1rem]">
              <div>
                <div className="w-full flex justify-center md:justify-end">
                  <div className="overflow-hidden w-fit">
                    <ScrollAnimation animateOnce={true} animateIn="pop-up">
                      <img className="px-[1rem] md:px-0" src={img14} alt="" />
                    </ScrollAnimation>
                  </div>
                </div>
                <h1 className="mt-[-3rem] text-6xl font-black text-center md:text-end text-[#666AE5]">
                  Write to US
                </h1>
                <p className="text-center md:text-end">
                  Share your thoughts or valuable feedback about any of our
                  services, and our team members will assist you in no time.
                </p>
                <form className="mt-[2rem] px-[1rem] md:px-[0]">
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div className="form-control">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input write-input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="input write-input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      className="input write-input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <textarea
                      className="input input-bordered rounded-xl w-full h-[10rem] mt-[1.75rem]"
                      name="message"
                      placeholder="Message....."
                    ></textarea>
                  </div>
                  <div className="flex justify-center mt-[1rem] mb-[1.5rem]">
                    <div className="button-parent relative">
                      <div className="write-button absolute left-[-5rem] form-control"></div>
                      <button
                        type="submit"
                        className="absolute left-[-5rem] text-wrap button-child w-[11rem]"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Content;
