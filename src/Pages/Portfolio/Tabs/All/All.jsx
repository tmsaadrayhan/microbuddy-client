import { useState } from "react";
import s1 from "../../../../assets/portfolio/website/1copy.jpg";
import s2 from "../../../../assets/portfolio/website/bandf.jpg";
import s3 from "../../../../assets/portfolio/website/errrorpage1.png";
import s4 from "../../../../assets/portfolio/website/finance.jpg";
import s5 from "../../../../assets/portfolio/website/gole.jpg";
import s6 from "../../../../assets/portfolio/website/jewellerysearchpage.jpg";
import s7 from "../../../../assets/portfolio/website/mockup.jpg";
import s8 from "../../../../assets/portfolio/website/pc.jpg";
import s9 from "../../../../assets/portfolio/website/realestatesearchpagedesign.jpg";
import s10 from "../../../../assets/portfolio/website/travel.jpg";
import s21 from "../../../../assets/portfolio/website/travelwebsite.jpg";
import s22 from "../../../../assets/portfolio/website/vcardlandingpagedesign.jpg";
import s23 from "../../../../assets/portfolio/app/22.jpg";
import s24 from "../../../../assets/portfolio/app/cover.jpg";
import s25 from "../../../../assets/portfolio/app/cover.png";
import s26 from "../../../../assets/portfolio/app/desktop2.jpg";
import s27 from "../../../../assets/portfolio/app/ibadat.jpg";
import s28 from "../../../../assets/portfolio/app/promotioncover.jpg";
import s29 from "../../../../assets/portfolio/app/slide1691.jpg";
import s30 from "../../../../assets/portfolio/app/tilestangocopy.jpg";
import s31 from "../../../../assets/portfolio/banner/1280pxby1280px.jpg";
import s32 from "../../../../assets/portfolio/banner/2.jpg";
import s33 from "../../../../assets/portfolio/banner/651c493cae015thumb900.webp";
import s34 from "../../../../assets/portfolio/banner/advertisementproductwithmobilemockupsocialmediapostdesign.jpg";
import s35 from "../../../../assets/portfolio/banner/appsbanner.jpg";
import s36 from "../../../../assets/portfolio/banner/banner1.jpg";
import s37 from "../../../../assets/portfolio/banner/banner12.jpg";
import s38 from "../../../../assets/portfolio/banner/bentechukwebsitebannerdesignfrommicrobuddy.jpg";
import s39 from "../../../../assets/portfolio/banner/church.jpg";
import s40 from "../../../../assets/portfolio/banner/contest.jpg";
import s41 from "../../../../assets/portfolio/banner/cover2.jpg";
import s42 from "../../../../assets/portfolio/banner/cover4.jpg";
import s43 from "../../../../assets/portfolio/banner/coverbanner.jpg";
import s44 from "../../../../assets/portfolio/banner/cristmasbanner.png";
import s45 from "../../../../assets/portfolio/banner/deliverykeylagbe.webp";
import s46 from "../../../../assets/portfolio/banner/emailcontest.png";
import s47 from "../../../../assets/portfolio/banner/event.png";
import s48 from "../../../../assets/portfolio/banner/fbbanner.png";
import s49 from "../../../../assets/portfolio/banner/fishbanner.jpg";
import s50 from "../../../../assets/portfolio/banner/flayerdesign.jpg";
import s51 from "../../../../assets/portfolio/banner/foodgraphicdesign.jpg";
import s52 from "../../../../assets/portfolio/banner/gadgetgig.jpg";
import s53 from "../../../../assets/portfolio/banner/gameofthorn.jpg";
import s54 from "../../../../assets/portfolio/banner/hiring.jpg";
import s55 from "../../../../assets/portfolio/banner/last.jpg";
import s56 from "../../../../assets/portfolio/banner/learningmanagement.jpg";
import s57 from "../../../../assets/portfolio/banner/linkedinbannerforconsultingimage.jpg";
import s58 from "../../../../assets/portfolio/banner/logokintech.jpg";
import s59 from "../../../../assets/portfolio/banner/logoproject.jpg";
import s60 from "../../../../assets/portfolio/banner/montthlybazarpending.webp";
import s61 from "../../../../assets/portfolio/banner/newspapaerads.jpg";
import s62 from "../../../../assets/portfolio/banner/personalinjurybusshelterad.jpg";
import s63 from "../../../../assets/portfolio/banner/popupbanner1.png";
import s64 from "../../../../assets/portfolio/banner/rollupbanner.png";
import s65 from "../../../../assets/portfolio/banner/socialmediaburgerpromoadvertisingdesign.jpg";
import s66 from "../../../../assets/portfolio/banner/socialmediapostwithsmartphonemockupdesign.jpg";
import s67 from "../../../../assets/portfolio/banner/stack1peq.png";
import s68 from "../../../../assets/portfolio/banner/untitled4.jpg";
import s69 from "../../../../assets/portfolio/banner/worldtravel.png";
import s70 from "../../../../assets/portfolio/banner/xbanner.jpg";
import s71 from "../../../../assets/portfolio/banner/youtubethumbnailfix2.jpg";

const All = () => {
  const [learnMore, setLearnMore] = useState(false);
  const handleLearnMore = () => {
    setLearnMore(!learnMore);
    console.log(learnMore);
  };
  const all = [
    { name: "Tabler Apps", title: "Technology", img: s1 },
    { name: "Tabler Apps", title: "Technology", img: s2 },
    { name: "Tabler Apps", title: "Technology", img: s3 },
    { name: "Tabler Apps", title: "Technology", img: s4 },
    { name: "Tabler Apps", title: "Technology", img: s5 },
    { name: "Tabler Apps", title: "Technology", img: s6 },
    { name: "Tabler Apps", title: "Technology", img: s7 },
    { name: "Tabler Apps", title: "Technology", img: s8 },
    { name: "Tabler Apps", title: "Technology", img: s9 },
    { name: "Tabler Apps", title: "Technology", img: s10 },
    { name: "Tabler Apps", title: "Technology", img: s21 },
    { name: "Tabler Apps", title: "Technology", img: s22 },
    { name: "Tabler Apps", title: "Technology", img: s23 },
    { name: "Tabler Apps", title: "Technology", img: s24 },
    { name: "Tabler Apps", title: "Technology", img: s25 },
    { name: "Tabler Apps", title: "Technology", img: s26 },
    { name: "Tabler Apps", title: "Technology", img: s27 },
    { name: "Tabler Apps", title: "Technology", img: s28 },
    { name: "Tabler Apps", title: "Technology", img: s29 },
    { name: "Tabler Apps", title: "Technology", img: s30 },
    { name: "Tabler Apps", title: "Technology", img: s31 },
    { name: "Tabler Apps", title: "Technology", img: s32 },
    { name: "Tabler Apps", title: "Technology", img: s33 },
    { name: "Tabler Apps", title: "Technology", img: s34 },
    { name: "Tabler Apps", title: "Technology", img: s35 },
    { name: "Tabler Apps", title: "Technology", img: s36 },
    { name: "Tabler Apps", title: "Technology", img: s37 },
    { name: "Tabler Apps", title: "Technology", img: s38 },
    { name: "Tabler Apps", title: "Technology", img: s39 },
    { name: "Tabler Apps", title: "Technology", img: s40 },
    { name: "Tabler Apps", title: "Technology", img: s41 },
    { name: "Tabler Apps", title: "Technology", img: s42 },
    { name: "Tabler Apps", title: "Technology", img: s43 },
    { name: "Tabler Apps", title: "Technology", img: s44 },
    { name: "Tabler Apps", title: "Technology", img: s45 },
    { name: "Tabler Apps", title: "Technology", img: s46 },
    { name: "Tabler Apps", title: "Technology", img: s47 },
    { name: "Tabler Apps", title: "Technology", img: s48 },
    { name: "Tabler Apps", title: "Technology", img: s49 },
    { name: "Tabler Apps", title: "Technology", img: s50 },
    { name: "Tabler Apps", title: "Technology", img: s51 },
    { name: "Tabler Apps", title: "Technology", img: s52 },
    { name: "Tabler Apps", title: "Technology", img: s53 },
    { name: "Tabler Apps", title: "Technology", img: s54 },
    { name: "Tabler Apps", title: "Technology", img: s55 },
    { name: "Tabler Apps", title: "Technology", img: s56 },
    { name: "Tabler Apps", title: "Technology", img: s57 },
    { name: "Tabler Apps", title: "Technology", img: s58 },
    { name: "Tabler Apps", title: "Technology", img: s59 },
    { name: "Tabler Apps", title: "Technology", img: s60 },
    { name: "Tabler Apps", title: "Technology", img: s61 },
    { name: "Tabler Apps", title: "Technology", img: s62 },
    { name: "Tabler Apps", title: "Technology", img: s63 },
    { name: "Tabler Apps", title: "Technology", img: s64 },
    { name: "Tabler Apps", title: "Technology", img: s65 },
    { name: "Tabler Apps", title: "Technology", img: s66 },
    { name: "Tabler Apps", title: "Technology", img: s67 },
    { name: "Tabler Apps", title: "Technology", img: s68 },
    { name: "Tabler Apps", title: "Technology", img: s69 },
    { name: "Tabler Apps", title: "Technology", img: s70 },
    { name: "Tabler Apps", title: "Technology", img: s71 },
  ];

  return (
    <section>
      <div>
        All
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
        <div className="w-full">
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
        </div>
      </div>
    </section>
  );
};

export default All;
