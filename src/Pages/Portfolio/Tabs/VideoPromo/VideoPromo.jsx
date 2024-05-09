import { useState } from "react";

const VideoPromo = () => {
  const [learnMore, setLearnMore] = useState(false);
  const handleLearnMore = () => {
    setLearnMore(!learnMore);
    console.log(learnMore);
  };
  const all = [
    { link: "https://www.youtube.com/embed/xDHHYBWf0no?si=UUulQCwZwXeRFvXy" },
    { link: "https://www.youtube.com/embed/_qOXSKg4lh0?si=ZGuoRt5ptUlnO_qa" },
    { link: "https://www.youtube.com/embed/XIXsRltc_1Q?si=BoU_U86GnGE69mJq" },
    { link: "https://www.youtube.com/embed/CDc2tCypjMo?si=e-eUz-FBNF5h9kg9" },
    { link: "https://www.youtube.com/embed/4mAtuTltrY4?si=nQrBRjTc0rW6YnrB" },
  ];
  return (
    <section>
      <div>
        {/* lg and md */}
        <div className="hidden md:flex flex-wrap justify-center">
          {!learnMore
            ? all.slice(0, 6).map((currentelement, index) => (
                <div
                  key={index}
                  className={`h-[20rem] relative ${
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
                  } m-[.5rem] rounded-xl border`}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={currentelement.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="rounded-xl"
                    allowFullScreen
                  ></iframe>
                </div>
              ))
            : all.map((currentelement, index) => (
                <div
                  key={index}
                  className={`h-[20rem] relative ${
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
                  } m-[.5rem] rounded-xl border`}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={currentelement.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="rounded-xl"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
        </div>
        {/* sm */}
        <div className="md:hidden flex-wrap justify-center">
          {!learnMore
            ? all.slice(0, 3).map((currentelement, index) => (
                <div
                  key={index}
                  className={`h-[20rem] relative m-[.5rem] rounded-xl border`}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={currentelement.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="rounded-xl"
                    allowFullScreen
                  ></iframe>
                </div>
              ))
            : all.map((currentelement, index) => (
                <div
                  key={index}
                  className={`h-[20rem] relative m-[.5rem] rounded-xl border`}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={currentelement.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="rounded-xl"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
        </div>
        {/* lg and md */}
        <div className="hidden md:block">
          {all.length > 6 && (
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
          )}
        </div>
        {/* sm */}
        <div className="md:hidden">
          {all.length > 3 && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoPromo;
