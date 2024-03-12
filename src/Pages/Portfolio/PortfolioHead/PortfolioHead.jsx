
import { Link } from "react-router-dom";

import img from "../../../assets/portfolio/portfolio.png";
import img1 from "../../../assets/7330e9ce4d8bcdb5788e27aabbcd4fc4.png";

const PortfolioHead = () => {
  return (
    <div>
      <div className="text-center h-[15rem] pt-[7rem] bg-head relative">
        <h1 className="text-6xl font-[500]">Portfolio</h1>
        <p className="text-xl font-bold">
          <Link to="/">Home</Link> /{" "}
          <Link to="/all" className="underline text-[#666AE5]">
            Portfolio
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
      <div className="lg:w-[70rem] text-center mb-[5rem] mx-[2rem] mt-[2rem] lg:mx-auto">
        <div className="overflow-hidden">
          <div className="pop-up">
            <img className="lg:ms-[5rem]" src={img} alt="" />
          </div>
        </div>
        <div>
          <h1 className=" tracking-[0.6em] text-3xl md:text-6xl lg:text-6xl mt-[-1rem] lg:mt-[-4rem] font-bold">
            Portfolio
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHead;
