import "./Companies.css";
import img1 from "../../../assets/companies/1.png";
import img2 from "../../../assets/companies/2.png";
import img3 from "../../../assets/companies/3.png";
import img4 from "../../../assets/companies/4.png";
import img5 from "../../../assets/companies/5.png";
import img6 from "../../../assets/companies/6.png";
import img7 from "../../../assets/companies/7.png";

import Slider from "react-slick";

const Companies = () => {
  return (
    <div className="mb-[5rem]">
      <div className="lg:max-w-[75rem] mx-[1rem] lg:mx-auto">
        <div className="hidden lg:block overflow-hidden h-[8rem] mt-[5rem]">
          <div className="pop-up">
            <h1 className="text-center header lg:text-[160px] lg:mt-[-3.5rem]">
              COMPANIES
            </h1>
          </div>
        </div>
        <h1 className="text-center header text-[55px] md:text-[100px] lg:hidden">
          COMPANIES
        </h1>
        <h1 className="text-center tracking-[0.5rem] md:tracking-[0.8rem] lg:tracking-[1.65rem] text-[22px] md:text-[35px] lg:text-[50px] mt-[-40px] md:mt-[-75px] lg:mt-[-75px] onHeader">
          We Help to Grow
        </h1>
      </div>
      <div className="lg:max-w-[75rem] mx-auto company hidden lg:flex pt-[3rem]">
        <div className="bg-white w-[200px] h-[200px] flex items-center">
          <img src={img1} alt="" />
        </div>
        <div className="bg-white w-[200px] h-[200px] flex items-center">
          <img src={img2} alt="" />
        </div>
        <div className="bg-white w-[200px] h-[200px] flex items-center">
          <img src={img3} alt="" />
        </div>
        <div className="bg-white w-[200px] h-[200px] flex items-center">
          <img src={img4} alt="" />
        </div>
        <div className="bg-white w-[200px] h-[200px] flex items-center">
          <img src={img5} alt="" />
        </div>
        <div className="bg-white w-[200px] h-[200px] snap-center flex items-center">
          <img src={img6} alt="" />
        </div>
        <div className="bg-white w-[200px] h-[200px] snap-center flex items-center">
          <img src={img7} alt="" />
        </div>
      </div>
      <div className="hidden md:block lg:hidden mx-auto">
        <Slider autoplay={true} arrows={false} slidesToShow={4}>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img7} alt="" />
            </div>
          </div>
        </Slider>
      </div>
      <div className="block md:hidden mx-auto">
        <Slider autoplay={true} arrows={false} slidesToShow={2}>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="company">
            <div className="bg-white w-[150px] h-[100px] flex items-center">
              <img src={img7} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Companies;
