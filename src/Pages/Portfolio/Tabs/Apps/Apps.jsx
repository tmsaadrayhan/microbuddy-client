import { useState } from "react";
import s1 from "../../../../assets/portfolio/app/dorpon/cover.webp";
import s2 from "../../../../assets/portfolio/app/expense-wizerd/cover.webp";
import s3 from "../../../../assets/portfolio/app/home-gym-master/cover.webp";
import s4 from "../../../../assets/portfolio/app/ibadat/cover.webp";
import s5 from "../../../../assets/portfolio/app/tiles-tango/banner.webp";

const Apps = () => {
  const [learnMore, setLearnMore] = useState(false);
  const handleLearnMore = () => {
    setLearnMore(!learnMore);
    console.log(learnMore);
  };
  const all = [
    { title: "dorpon", img: s1 },
    { title: "expense wizerd", img: s2 },
    { title: "home gym master", img: s3 },
    { title: "ibadat", img: s4 },
    { title: "tiles tango", img: s5 },
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

export default Apps;
