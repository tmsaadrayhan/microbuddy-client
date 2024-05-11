import { useState } from "react";

import s1 from "../../../../assets/portfolio/website/brown-&-fortunato.webp";
import s2 from "../../../../assets/portfolio/website/golactric.webp";
import s3 from "../../../../assets/portfolio/website/pietreionne.webp";
import s4 from "../../../../assets/portfolio/website/propseek-realty-Y-V-2nd-revised.webp";
import s5 from "../../../../assets/portfolio/website/brown-&-fortunato.webp";
import s6 from "../../../../assets/portfolio/website/real-estate-website-blue.webp";
import s7 from "../../../../assets/portfolio/website/real-estate-website-green.webp";
import s8 from "../../../../assets/portfolio/website/wealth-secret-chat-2v.webp";
import s9 from "../../../../assets/portfolio/app/dorpon/cover.webp";
import s10 from "../../../../assets/portfolio/app/expense-wizerd/cover.webp";
import s21 from "../../../../assets/portfolio/app/home-gym-master/cover.webp";
import s22 from "../../../../assets/portfolio/app/ibadat/cover.webp";
import s23 from "../../../../assets/portfolio/app/tiles-tango/banner.webp";
import s24 from "../../../../assets/portfolio/banner/banner-design--bentech-uk-.webp";
import s25 from "../../../../assets/portfolio/banner/banner-design--prominence-.webp";
import s26 from "../../../../assets/portfolio/banner/banner-design--s-&-you-.webp";
import s27 from "../../../../assets/portfolio/banner/book-cover-design--game-of-thorn-.webp";
import s28 from "../../../../assets/portfolio/banner/bus-shelter-ads-oracle-.webp";
import s29 from "../../../../assets/portfolio/banner/business-card--david-kay--crossborder-capital-advisore.webp";
import s30 from "../../../../assets/portfolio/banner/email-signature---josiah-ntiwaus--watu-care-service.webp";
import s31 from "../../../../assets/portfolio/banner/fb-banner--real-performance-coaching-llc-.webp";
import s32 from "../../../../assets/portfolio/banner/finance-beagle--banner-.webp";
import s33 from "../../../../assets/portfolio/banner/finance-beagle-1.webp";
import s34 from "../../../../assets/portfolio/banner/flayer---asana-distribution-.webp";
import s35 from "../../../../assets/portfolio/banner/killaket-cover-banner.webp";
import s36 from "../../../../assets/portfolio/banner/liflet-1-manly-church-.webp";
import s37 from "../../../../assets/portfolio/banner/liflet-2-manly-church-.webp";
import s38 from "../../../../assets/portfolio/banner/linkedin-banner-007-design-consulting-.webp";
import s39 from "../../../../assets/portfolio/banner/linkedine-banner--dr-saskia-vanderbent--saskia-law.webp";
import s40 from "../../../../assets/portfolio/banner/logo--kinetic-health-solution-.webp";
import s41 from "../../../../assets/portfolio/banner/logo--soluzione-riposo-.webp";
import s42 from "../../../../assets/portfolio/banner/newspapaer-ads--amigo-lng-.webp";
import s43 from "../../../../assets/portfolio/banner/rollup-banner--nurture-care-.webp";
import s44 from "../../../../assets/portfolio/banner/sticker-design--cisar-construction-.webp";
import s45 from "../../../../assets/portfolio/banner/t-shirt---salty-&-bit-.webp";
import s46 from "../../../../assets/portfolio/banner/website-banner--prahran-clothes-co-.webp";
import s47 from "../../../../assets/portfolio/banner/website-banner-3-prahran-clothes-co-.webp";
import s48 from "../../../../assets/portfolio/banner/x-banner--husbandry-pro-.webp";

const All = () => {
  const [learnMore, setLearnMore] = useState(false);
  const handleLearnMore = () => {
    setLearnMore(!learnMore);
    console.log(learnMore);
  };
  const all = [
    { title: "Brown & Fortunato", img: s1 },
    { title: "Golactric", img: s2 },
    { title: "Happier_Abroad", img: s3 },
    { title: "Pietreionne", img: s4 },
    { title: "Propseek_Realty_Y.V_2nd_Revised", img: s5 },
    { title: "Real Estate Website Blue", img: s6 },
    { title: "Real Estate Website Green", img: s7 },
    { title: "Wealth Secret Chat 2v", img: s8 },
    { title: "dorpon", img: s9 },
    { title: "expense wizerd", img: s10 },
    { title: "home gym master", img: s21 },
    { title: "ibadat", img: s22 },
    { title: "tiles tango", img: s23 },
    { name: "Bentech UK", title: "Banner design ", img: s24 },
    { name: "S & You", title: "Banner Design ", img: s25 },
    { name: "Prominence", title: "banner-design ", img: s26 },
    { name: "game of thorn", title: "Book cover design ", img: s27 },
    { name: "Oracle", title: "bus-shelter-ads", img: s28 },
    {
      name: "David kay Crossborder capital advisore",
      title: "Business-Card-",
      s29: s6,
    },
    {
      name: "Josiah Ntiwaus Watu care service",
      title: "email signature  ",
      s30: s7,
    },
    { name: "Real Performance Coaching LLC", title: "fb banner ", img: s31 },
    { name: "Banner", title: "Finance Beagle ", img: s32 },
    { title: "Finance Beagle 1", img: s33 },
    { name: " Asana Distribution", title: "Flayer ", img: s34 },
    { title: "Killaket cover banner", img: s35 },
    { name: "Manly church", title: "LIFLET-1", img: s36 },
    { name: "Manly church", title: "LIFLET-2", img: s37 },
    { name: "007 Design Consulting", title: "linkedin banner", img: s38 },
    {
      name: "Dr Saskia Vanderbent Saskia law",
      title: "LInkedine banner ",
      img: s39,
    },
    { name: "kinetic Health Solution", title: "Logo ", img: s40 },
    { name: "Soluzione Riposo", title: "logo ", img: s41 },
    { name: "Amigo LNG", title: "newspapaer ads ", img: s42 },
    { name: "Nurture Care", title: "rollup-banner ", img: s43 },
    { name: "Cisar construction", title: "sticker design ", img: s44 },
    { name: " Salty & bit", title: "T-shirt ", img: s45 },
    { name: "Prahran Clothes co", title: "website banner ", img: s46 },
    { name: "Prahran Clothes co", title: "website banner 3", img: s47 },
    { name: "Husbandry Pro", title: "x-banner ", img: s48 },
  ];

  return (
    <section>
      <div className="hidden md:flex flex-wrap justify-center">
        {!learnMore
          ? all.slice(0, 6).map((currentelement, index) => (
              <div
                key={index}
                className={`h-[20rem] relative portfolio-image-container ${
                  index % 6 == 0
                    ? "w-[40%]"
                    : index % 6 == 1
                    ? "w-[25%]"
                    : index % 6 == 2
                    ? "w-[25%]"
                    : index % 6 == 3
                    ? "w-[35%]"
                    : index % 6 == 4
                    ? "w-[20%]"
                    : "w-[35%]"
                } m-[.5rem] overflow-hidden rounded-xl`}
              >
                <div className="h-full hover:scale-[1.5] duration-1000">
                  <img
                    style={{ objectFit: "cover" }}
                    className="h-full w-full portfolio-image"
                    src={currentelement.img}
                    alt=""
                  />
                </div>
                <div className="absolute portfolio-image-text bottom-[-7rem] text-white p-[1rem]">
                  <header>
                    <h1 className="text-2xl font-[700]">
                      {currentelement.name}
                    </h1>
                    <h1 className="text-xl">
                      •
                      <span className="text-[#80FCDC]">
                        {currentelement.title}
                      </span>
                    </h1>
                  </header>
                </div>
              </div>
            ))
          : all.map((currentelement, index) => (
              <div
                key={index}
                className={`h-[20rem] relative portfolio-image-container ${
                  index % 6 == 0
                    ? "w-[40%]"
                    : index % 6 == 1
                    ? "w-[25%]"
                    : index % 6 == 2
                    ? "w-[25%]"
                    : index % 6 == 3
                    ? "w-[35%]"
                    : index % 6 == 4
                    ? "w-[20%]"
                    : "w-[35%]"
                } m-[.5rem] overflow-hidden rounded-xl`}
              >
                <div className="h-full hover:scale-[1.5] duration-1000">
                  <img
                    style={{ objectFit: "cover" }}
                    className="h-full w-full portfolio-image"
                    src={currentelement.img}
                    alt=""
                  />
                </div>
                <div className="absolute portfolio-image-text bottom-[-7rem] text-white p-[1rem]">
                  <header>
                    <h1 className="text-2xl font-[700]">
                      {currentelement.name}
                    </h1>
                    <h1 className="text-xl">
                      •
                      <span className="text-[#80FCDC]">
                        {currentelement.title}
                      </span>
                    </h1>
                  </header>
                </div>
              </div>
            ))}
      </div>
      <div className="md:hidden flex-wrap justify-center">
        {!learnMore
          ? all.slice(0, 3).map((currentelement, index) => (
              <div
                key={index}
                className={`h-[20rem] relative portfolio-image-container m-[.5rem] overflow-hidden rounded-xl`}
              >
                <div className="h-full hover:scale-[1.5] duration-1000">
                  <img
                    style={{ objectFit: "cover" }}
                    className="h-full w-full portfolio-image"
                    src={currentelement.img}
                    alt=""
                  />
                </div>
                <div className="absolute portfolio-image-text bottom-[-7rem] text-white p-[1rem]">
                  <header>
                    <h1 className="text-2xl font-[700]">
                      {currentelement.name}
                    </h1>
                    <h1 className="text-xl">
                      •
                      <span className="text-[#80FCDC]">
                        {currentelement.title}
                      </span>
                    </h1>
                  </header>
                </div>
              </div>
            ))
          : all.map((currentelement, index) => (
              <div
                key={index}
                className={`h-[20rem] relative portfolio-image-container m-[.5rem] overflow-hidden rounded-xl`}
              >
                <div className="h-full hover:scale-[1.5] duration-1000">
                  <img
                    style={{ objectFit: "cover" }}
                    className="h-full w-full portfolio-image"
                    src={currentelement.img}
                    alt=""
                  />
                </div>
                <div className="absolute portfolio-image-text bottom-[-7rem] text-white p-[1rem]">
                  <header>
                    <h1 className="text-2xl font-[700]">
                      {currentelement.name}
                    </h1>
                    <h1 className="text-xl">
                      •
                      <span className="text-[#80FCDC]">
                        {currentelement.title}
                      </span>
                    </h1>
                  </header>
                </div>
              </div>
            ))}
      </div>
      <div className="hidden md:block w-full">
        {all.length > 6 && (
          <div className="mx-auto w-fit mt-[3rem]">
            <button
              onClick={handleLearnMore}
              style={{ border: "1px solid #666AE5" }}
              className={`${
                learnMore && "hidden"
              } transition-all ease-in-out duration-[600ms] text-[#666AE5] hover:text-[#FFFFFF] hover:bg-[#666AE5] text-2xl font-bold px-[2rem] py-[.5rem] rounded-xl mx-auto`}
            >
              Load More
            </button>
            <button
              onClick={handleLearnMore}
              style={{ border: "1px solid #666AE5" }}
              className={`${
                !learnMore ? "hidden" : "block"
              } transition-all ease-in-out duration-[600ms] text-[#666AE5] hover:text-[#FFFFFF] hover:bg-[#666AE5] text-2xl font-bold px-[2rem] py-[.5rem] rounded-xl mx-auto`}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
      <div className="md:hidden w-full">
        {all.length > 3 && (
          <div className="mx-auto w-fit mt-[3rem]">
            <button
              onClick={handleLearnMore}
              style={{ border: "1px solid #666AE5" }}
              className={`${
                learnMore && "hidden"
              } transition-all ease-in-out duration-[600ms] text-[#666AE5] hover:text-[#FFFFFF] hover:bg-[#666AE5] text-2xl font-bold px-[2rem] py-[.5rem] rounded-xl mx-auto`}
            >
              Load More
            </button>
            <button
              onClick={handleLearnMore}
              style={{ border: "1px solid #666AE5" }}
              className={`${
                !learnMore ? "hidden" : "block"
              } transition-all ease-in-out duration-[600ms] text-[#666AE5] hover:text-[#FFFFFF] hover:bg-[#666AE5] text-2xl font-bold px-[2rem] py-[.5rem] rounded-xl mx-auto`}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default All;
