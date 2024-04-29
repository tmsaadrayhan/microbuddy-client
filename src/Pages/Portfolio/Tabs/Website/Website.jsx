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
import s11 from "../../../../assets/portfolio/website/travelwebsite.jpg";
import s12 from "../../../../assets/portfolio/website/vcardlandingpagedesign.jpg";

const Website = () => {
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
    { name: "Tabler Apps", title: "Technology", img: s11 },
    { name: "Tabler Apps", title: "Technology", img: s12 },
  ];
  return (
    <section>
      <div>
        Website
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

export default Website;
