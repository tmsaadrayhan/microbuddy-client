import PortFolioHeader from "./PortfolioHeader/PortFolioHeader";
import PortfolioHead from "./PortfolioHead/PortfolioHead";
import img1 from "../../assets/portfolio/ads/rectangle54.png";
import img2 from "../../assets/portfolio/ads/rectangle55.png";
import img3 from "../../assets/portfolio/ads/rectangle56.png";
import img4 from "../../assets/portfolio/ads/rectangle57.png";
import img5 from "../../assets/portfolio/ads/rectangle58.png";
import img6 from "../../assets/portfolio/ads/rectangle59.png";
import img7 from "../../assets/portfolio/ads/rectangle60.png";
import img8 from "../../assets/portfolio/ads/rectangle61.png";
import img9 from "../../assets/portfolio/ads/rectangle62.png";
import img10 from "../../assets/portfolio/ads/rectangle63.png";
import img11 from "../../assets/portfolio/ads/rectangle64.png";
import { Helmet } from "react-helmet";
import { animateScroll } from "react-scroll";

const Portfolio = () => {
  return (
    <div>
      {animateScroll.scrollToTop()}
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <PortfolioHead></PortfolioHead>
      <div className="pt-[5rem] lg:max-w-[82rem] px-[1rem] lg:mx-auto">
        <PortFolioHeader></PortFolioHeader>
        <div className="hidden lg:block w-full portfolio-item mb-[5rem]">
          <div className="flex">
            <div className="flex w-[65%]">
              <div className="w-2/3">
                <img src={img1} />
              </div>
              <div className="w-1/3 h-full">
                <div className="h-3/5">
                  <img className="h-full" src={img2} alt="" />
                </div>
                <div className="h-2/5">
                  <img className="h-full" src={img3} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[35%]">
              <div className="flex h-2/5">
                <div className="w-1/2">
                  <img className="h-full" src={img6} alt="" />
                </div>
                <div className="w-1/2">
                  <img className="h-full" src={img5} alt="" />
                </div>
              </div>
              <div className="h-3/5">
                <img className="h-full" src={img4} alt="" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[45%]">
              <img className="h-full" src={img7} alt="" />
            </div>
            <div className="w-[55%] flex">
              <div className="w-3/5">
                <div className="flex">
                  <div className="w-1/2">
                    <img src={img8} alt="" />
                  </div>
                  <div className="w-1/2">
                    <img src={img11} alt="" />
                  </div>
                </div>
                <div>
                  <img src={img9} alt="" />
                </div>
              </div>
              <div className="w-2/5">
                <img className="h-full" src={img10} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden w-full portfolio-item portfolio-item mb-[5rem]">
          <div className="flex">
            <div className="w-[60%]">
              <img className="w-full h-full" src={img1} alt="" />
            </div>
            <div className="w-[40%]">
              <div>
                <img className="w-full" src={img2} alt="" />
              </div>
              <div>
                <img className="w-full" src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[65%]">
              <img className="w-full" src={img4} alt="" />
            </div>
            <div className="w-[35%]">
              <img className="w-full h-full" src={img6} alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="w-[60%]">
              <img className="w-full" src={img9} alt="" />
            </div>
            <div className="w-[40%]">
              <img className="w-full" src={img5} alt="" />
            </div>
          </div>
          <div>
            <img className="w-full" src={img7} alt="" />
          </div>
          <div className="flex">
            <div className="w-1/2">
              <div>
                <img className="w-full" src={img8} alt="" />
              </div>
              <div>
                <img className="w-full" src={img11} alt="" />
              </div>
            </div>
            <div className="w-1/2">
              <img className=" w-full" src={img10} alt="" />
            </div>
          </div>
        </div>
        <div className="block md:hidden w-full portfolio-item portfolio-item mb-[5rem]">
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="flex">
            <div className="w-[60%]">
              <img src={img2} alt="" />
            </div>
            <div className="w-[40%]">
              <div>
                <img src={img6} alt="" />
              </div>
              <div>
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={img9} alt="" />
          </div>
          <div>
            <img src={img7} alt="" />
          </div>
          <div className="flex">
            <div>
              <img src={img8} alt="" />
            </div>
            <div>
              <img src={img10} alt="" />
            </div>
          </div>
          <div className="w-full">
            <img className="w-full" src={img11} alt="" />
          </div>
        </div>
        <div
          className="max-w-[65rem] mx-auto rounded-3xl p-[3rem] text-center lg:text-start"
          style={{ boxShadow: ".25rem .25rem .5rem #00000080" }}
        >
          <h1 className="text-3xl lg:text-[50px] font-bold">
            Our portfolio includes projects that are:
          </h1>
          <div className="text-xl">
            <ul>
              <li className="my-[1rem]">
                <span className="font-bold">• Customer-centric:</span> <br />
                Prioritizing solutions that address pressing customer needs
                rather than being solely driven by technology.
              </li>
              <li className="my-[1rem]">
                <span className="font-bold">• Solution-focused:</span> <br />
                Displays clear strategic value to MicroBuddy that stands on its
                own.
              </li>
              <li className="my-[1rem]">
                <span className="font-bold">• Disruptive/High-potential:</span>
                <br /> Showing promise in benefiting a broad range of users and
                possessing significant growth potential.
              </li>
              <li className="my-[1rem]">
                <span className="font-bold">• Unproven:</span> <br />{" "}
                Introducing fresh ideas that offer a competitive edge in the
                current market landscape, without existing widespread adoption.
              </li>
              <li className="my-[1rem]">
                <span className="font-bold">
                  • Are suitable for incubation:
                </span>
                <br /> Capable of being tested through small-scale market
                experiments to validate market hypotheses.
              </li>
              <li className="my-[1rem]">
                <span className="font-bold">• Are supported by talent:</span>
                <br /> Accessible expertise within MicroBuddy to support the
                development and success of the idea.
              </li>
            </ul>
            <p>View about us {">>"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
