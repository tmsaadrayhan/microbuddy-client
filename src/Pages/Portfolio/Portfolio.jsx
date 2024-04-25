import "./portfolio.css";
import PortfolioHead from "./PortfolioHead/PortfolioHead";
import burgerPage from "../../assets/portfolio/all/cff1e01770931351.png";
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

const Portfolio = () => {
  // animateScroll.scrollToTop()
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index) => {
    setActiveTab(index);
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
          <div className="flex justify-center gap-[4.5rem] bg-[#EEEEFF] ">
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
              <div className="flex justify-center text-xl overflow-hidden md:overflow-hidden mb-[1rem]">
                <p
                  className={`${activeTab === 1 && "text-primary"} mx-[1rem]`}
                  onClick={() => handleTabClick(1)}
                >
                  All
                </p>
                <p
                  className={`${activeTab === 2 && "text-primary"} mx-[1rem]`}
                  onClick={() => handleTabClick(2)}
                >
                  Ads Design
                </p>
                <p
                  className={`${activeTab === 3 && "text-primary"} mx-[1rem]`}
                  onClick={() => handleTabClick(3)}
                >
                  Apps
                </p>
                <p
                  className={`${activeTab === 4 && "text-primary"} mx-[1rem]`}
                  onClick={() => handleTabClick(4)}
                >
                  Banner & Poster
                </p>
                <p
                  className={`${activeTab === 5 && "text-primary"} mx-[1rem]`}
                  onClick={() => handleTabClick(5)}
                >
                  Website
                </p>
              </div>

              <div className={`${activeTab === 1 ? "block" : "hidden"}`}>
                <div className="flex">
                  <div className="w-[45%] m-[.5rem] overflow-hidden rounded-xl">
                    <div className="w-[37rem] hover:scale-[1.5] duration-1000">
                      <img src={burgerPage} alt="" />
                    </div>
                  </div>
                  <div className="w-[25%] m-[.5rem] overflow-hidden rounded-xl">
                    <div className="w-[37rem] hover:scale-[1.5] duration-1000">
                      <img src={burgerPage} alt="" />
                    </div>
                  </div>
                  <div className="w-[25%] m-[.5rem] overflow-hidden rounded-xl">
                    <div className="w-[37rem] hover:scale-[1.5] duration-1000">
                      <img src={burgerPage} alt="" />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[35%] m-[.5rem] overflow-hidden rounded-xl">
                    <div className="w-[28rem] hover:scale-[1.5] duration-1000">
                      <img src={burgerPage} alt="" />
                    </div>
                  </div>
                  <div className="w-[25%] m-[.5rem] overflow-hidden rounded-xl">
                    <div className="w-[28rem] hover:scale-[1.5] duration-1000">
                      <img src={burgerPage} alt="" />
                    </div>
                  </div>
                  <div className="w-[35%] m-[.5rem] overflow-hidden rounded-xl">
                    <div className="w-[28rem] hover:scale-[1.5] duration-1000">
                      <img src={burgerPage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${activeTab === 2 ? "block" : "hidden"}`}>
                Ads Design
              </div>
              <div className={`${activeTab === 3 ? "block" : "hidden"}`}>
                Apps
              </div>
              <div className={`${activeTab === 4 ? "block" : "hidden"}`}>
                Banner & Poster
              </div>
              <div className={`${activeTab === 5 ? "block" : "hidden"}`}>
                Website
              </div>
            </div>

            <div className="max-w-[70rem] mx-auto rounded-3xl mt-[3rem] text-center">
              <article>
                <div className="overflow-hidden">
                  <div className="pop-up">
                    <header>
                      <h1 className="header text-[60px] md:text-[120px] lg:text-[150px] text-center">
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
                <div className="text-xl">
                  <ul>
                    <div className="mb-[1.2rem]">
                      <article>
                        <header>
                          <h1>
                            <span className="font-bold text-[#666AE5]">
                              • Customer-centric:
                            </span>
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
                          <h1>
                            <span className="font-bold text-[#666AE5]">
                              • Solution-focused:
                            </span>
                          </h1>
                        </header>
                        <p>
                          Displays clear strategic value to MicroBuddy that
                          stands on its own.
                        </p>
                      </article>
                    </div>
                    <div className="mb-[1.2rem]">
                      <article>
                        <header>
                          <h1>
                            <span className="font-bold text-[#666AE5]">
                              • Disruptive/High-potential:
                            </span>
                          </h1>
                        </header>
                        <p>
                          Showing promise in benefiting a broad range of users
                          and possessing significant growth potential.
                        </p>
                      </article>
                    </div>
                    <div className="mb-[1.2rem]">
                      <article>
                        <header>
                          <h1>
                            <span className="font-bold text-[#666AE5]">
                              • Unproven:
                            </span>
                          </h1>
                        </header>
                        <p>
                          Introducing fresh ideas that offer a competitive edge
                          in the current market landscape, without existing
                          widespread adoption.
                        </p>
                      </article>
                    </div>
                    <div className="mb-[1.2rem]">
                      <article>
                        <header>
                          <h1>
                            <span className="font-bold text-[#666AE5]">
                              • Are suitable for incubation:
                            </span>
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
                          <h1>
                            <span className="font-bold text-[#666AE5]">
                              • Are supported by talent:
                            </span>
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
          </div>
        </section>
        <section>
          <div className="overflow-hidden">
            <div className="pop-up">
              <header>
                <h1 className="header text-[60px] md:text-[120px] lg:text-[150px] text-center">
                  PROJECT
                </h1>
              </header>
            </div>
          </div>
            <img
              className="w-[15rem] md:w-[30rem] mt-[-2.5rem] md:mt-[-6rem] mx-auto"
              src={studies}
              alt=""
            />
          </div>
        </section>
      </div>
    );
};

export default Portfolio;
