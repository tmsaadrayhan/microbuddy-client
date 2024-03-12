
import PortFolioHeader from "./PortfolioHeader/PortFolioHeader";
import PortfolioHead from "./PortfolioHead/PortfolioHead";
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
      <div className="pt-[5rem] lg:w-[70rem] mx-[2rem] lg:mx-auto">
        <PortFolioHeader></PortFolioHeader>
        <p>This is all</p>
      </div>
    </div>
  );
};

export default Portfolio;
