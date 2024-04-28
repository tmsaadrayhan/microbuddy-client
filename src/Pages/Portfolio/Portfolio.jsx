import "./portfolio.css";
import PortfolioHead from "./PortfolioHead/PortfolioHead";
import characteristics from "../../assets/portfolio/characteristics.png";
import studies from "../../assets/portfolio/studies.png";

import logo1 from "../../assets/portfolio/portfoliologos/logo1.png";
import logo2 from "../../assets/portfolio/portfoliologos/logo2.png";
import logo3 from "../../assets/portfolio/portfoliologos/logo3.png";
import logo4 from "../../assets/portfolio/portfoliologos/logo4.png";
import logo5 from "../../assets/portfolio/portfoliologos/logo5.png";
import logo6 from "../../assets/portfolio/portfoliologos/logo6.png";
import logo7 from "../../assets/portfolio/portfoliologos/logo7.png";

import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import imgLoad from "../../assets/loading.gif";
import All from "./Tabs/All/All";
import Website from "./Tabs/Website/Website";
import Apps from "./Tabs/Apps/Apps";
import BannerAndPoster from "./Tabs/BannerAndPoster/BannerAndPoster";
import VideoPromo from "./Tabs/VideoPromo/VideoPromo";
import Case1 from "./CaseTab/Case1/Case1";
import Case2 from "./CaseTab/Case2/Case2";
import Case3 from "./CaseTab/Case3/Case3";
import Case4 from "./CaseTab/Case4/Case4";

const Portfolio = () => {
  // animateScroll.scrollToTop()
  const [activeTab, setActiveTab] = useState(1);
  const [caseActiveTab, setCaseActiveTab] = useState(1);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleCaseTabClick = (index) => {
    setCaseActiveTab(index);
  };
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
          <title>Portfolio</title>
        </Helmet>
        <PortfolioHead></PortfolioHead>
        <section>
          <div className="flex flex-wrap justify-center gap-[4.5rem] bg-[#EEEEFF] py-[1rem] mt-[4rem]">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
            <img src={logo7} alt="" />
          </div>
        </section>
        <section>
          <div className="pt-[5rem] lg:max-w-[82rem] px-[1rem] lg:mx-auto">
            <div>
              <div className="flex flex-wrap justify-center gap-[1rem] text-nowrap text-xl overflow-hidden mb-[1rem]">
                <p
                  style={{ cursor: "pointer" }}
                  className={`${
                    activeTab === 1 &&
                    "text-primary underline underline-offset-[5px]"
                  } mx-[1rem]`}
                  onClick={() => handleTabClick(1)}
                >
                  All
                </p>
                <p
                  style={{ cursor: "pointer" }}
                  className={`${
                    activeTab === 2 &&
                    "text-primary underline underline-offset-[5px]"
                  } mx-[1rem]`}
                  onClick={() => handleTabClick(2)}
                >
                  Website
                </p>
                <p
                  style={{ cursor: "pointer" }}
                  className={`${
                    activeTab === 3 &&
                    "text-primary underline underline-offset-[5px]"
                  } mx-[1rem]`}
                  onClick={() => handleTabClick(3)}
                >
                  Apps
                </p>
                <p
                  style={{ cursor: "pointer" }}
                  className={`${
                    activeTab === 4 &&
                    "text-primary underline underline-offset-[5px]"
                  } mx-[1rem]`}
                  onClick={() => handleTabClick(4)}
                >
                  Banner & Poster
                </p>
                <p
                  style={{ cursor: "pointer" }}
                  className={`${
                    activeTab === 5 &&
                    "text-primary underline underline-offset-[5px]"
                  } mx-[1rem]`}
                  onClick={() => handleTabClick(5)}
                >
                  Video Promo
                </p>
              </div>

              <div className="mt-[2rem]">
                <div className={`${activeTab === 1 ? "block" : "hidden"}`}>
                  <All></All>
                </div>
                <div className={`${activeTab === 2 ? "block" : "hidden"}`}>
                  <Website></Website>
                </div>
                <div className={`${activeTab === 3 ? "block" : "hidden"}`}>
                  <Apps></Apps>
                </div>
                <div className={`${activeTab === 4 ? "block" : "hidden"}`}>
                  <BannerAndPoster></BannerAndPoster>
                </div>
                <div className={`${activeTab === 5 ? "block" : "hidden"}`}>
                  <VideoPromo></VideoPromo>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-[70rem] mx-auto rounded-3xl mt-[3rem] text-center">
            <article>
              <div className="overflow-hidden">
                <div className="pop-up">
                  <header>
                    <h1 className="header text-[60px] md:text-[130px] text-center">
                      PROJECT
                    </h1>
                  </header>
                </div>
              </div>
              <div>
                <img
                  className="w-[15rem] md:w-[30rem] mt-[-2.5rem] md:mt-[-6rem] mx-auto"
                  src={characteristics}
                  alt=""
                />
              </div>
              <hr
                style={{
                  borderTop: "1px solid #666AE5",
                  margin: "2.5rem 0rem 2rem 0rem",
                }}
              />
              <div className="">
                <ul>
                  <div className="mb-[1.2rem]">
                    <article>
                      <header>
                        <h1 className="font-bold text-[#666AE5]">
                          • Customer-centric:
                        </h1>
                      </header>
                      <p>
                        Prioritizing solutions that address pressing customer
                        needs rather than being solely driven by technology.
                      </p>
                    </article>
                  </div>
                  <div className="mb-[1.2rem]">
                    <article>
                      <header>
                        <h1 className="font-bold text-[#666AE5]">
                          • Solution-focused:
                        </h1>
                      </header>
                      <p>
                        Displays clear strategic value to MicroBuddy that stands
                        on its own.
                      </p>
                    </article>
                  </div>
                  <div className="mb-[1.2rem]">
                    <article>
                      <header>
                        <h1 className="font-bold text-[#666AE5]">
                          • Disruptive/High-potential:
                        </h1>
                      </header>
                      <p>
                        Showing promise in benefiting a broad range of users and
                        possessing significant growth potential.
                      </p>
                    </article>
                  </div>
                  <div className="mb-[1.2rem]">
                    <article>
                      <header>
                        <h1 className="font-bold text-[#666AE5]">
                          • Unproven:
                        </h1>
                      </header>
                      <p>
                        Introducing fresh ideas that offer a competitive edge in
                        the current market landscape, without existing
                        widespread adoption.
                      </p>
                    </article>
                  </div>
                  <div className="mb-[1.2rem]">
                    <article>
                      <header>
                        <h1 className="font-bold text-[#666AE5]">
                          • Are suitable for incubation:
                        </h1>
                      </header>
                      <p>
                        Capable of being tested through small-scale market
                        experiments to validate market hypotheses.
                      </p>
                    </article>
                  </div>
                  <div className="mb-[1.2rem]">
                    <article>
                      <header>
                        <h1 className="font-bold text-[#666AE5]">
                          • Are supported by talent:
                        </h1>
                      </header>
                      <p>
                        Accessible expertise within MicroBuddy to support the
                        development and success of the idea.
                      </p>
                    </article>
                  </div>
                </ul>
              </div>
            </article>
          </div>
        </section>
        <section>
          <div className="lg:max-w-[70rem] mx-auto">
            <div className="overflow-hidden">
              <div className="pop-up">
                <header>
                  <h1 className="header text-[100px] md:text-[200px] text-center">
                    CASE
                  </h1>
                </header>
              </div>
            </div>
            <img
              className="w-[15rem] md:w-[30rem] mt-[-4rem] md:mt-[-8rem] mx-auto"
              src={studies}
              alt=""
            />
            <hr
              style={{
                borderTop: "1px solid #666AE5",
                margin: "2.5rem 0rem 2rem 0rem",
              }}
            />
          </div>
          <div className="lg:max-w-[82rem] px-[1rem] lg:mx-auto">
            <div>
              <div className="flex flex-wrap justify-center gap-[1rem] text-nowrap text-xl overflow-hidden mb-[1rem]">
                <p
                  style={{ cursor: "pointer" }}
                  className={`${
                    caseActiveTab === 1 && "text-primary"
                  } mx-[1rem]`}
                  onClick={() => handleCaseTabClick(1)}
                >
                  Case One
                </p>
                <p
                  style={{ cursor: "pointer" }}
                  className={`${
                    caseActiveTab === 2 && "text-primary"
                  } mx-[1rem]`}
                  onClick={() => handleCaseTabClick(2)}
                >
                  Case Two
                </p>
                <p
                  style={{ cursor: "pointer" }}
                  className={`${
                    caseActiveTab === 3 && "text-primary"
                  } mx-[1rem]`}
                  onClick={() => handleCaseTabClick(3)}
                >
                  Case Three
                </p>
                <p
                  style={{ cursor: "pointer" }}
                  className={`${
                    caseActiveTab === 4 && "text-primary"
                  } mx-[1rem]`}
                  onClick={() => handleCaseTabClick(4)}
                >
                  Case Four
                </p>
              </div>

              <div className="mt-[2rem]">
                <div className={`${caseActiveTab === 1 ? "block" : "hidden"}`}>
                  <Case1></Case1>
                </div>
                <div className={`${caseActiveTab === 2 ? "block" : "hidden"}`}>
                  <Case2></Case2>
                </div>
                <div className={`${caseActiveTab === 3 ? "block" : "hidden"}`}>
                  <Case3></Case3>
                </div>
                <div className={`${caseActiveTab === 4 ? "block" : "hidden"}`}>
                  <Case4></Case4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Portfolio;
