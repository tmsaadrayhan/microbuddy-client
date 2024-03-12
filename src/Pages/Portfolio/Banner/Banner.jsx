import React from "react";
import PortfolioHead from "../PortfolioHead/PortfolioHead";
import PortFolioHeader from "../PortfolioHeader/PortFolioHeader";

const Banner = () => {
  return (
    <div>
      <PortfolioHead></PortfolioHead>
      <div className="pt-[5rem] w-[70rem] mx-auto">
        <PortFolioHeader></PortFolioHeader>
        <p>this is Banner</p>
      </div>
    </div>
  );
};

export default Banner;
