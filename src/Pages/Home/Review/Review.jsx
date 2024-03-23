import img1 from "../../../assets/review/map2.png";
import img1Md from "../../../assets/review/group299md.png";
import imgDZ from "../../../assets/review/dustinzhu.jpg";
import imgSA from "../../../assets/review/salmanalqahtani.jpg";
import imgSP from "../../../assets/review/salmanparvez.jpg";
import imgYB from "../../../assets/review/yashikababbar.jpg";
import img4 from "../../../assets/review/reviews.png";
import Rating from "react-rating";
import { IoIosArrowBack, IoIosArrowForward, IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
import { useRef, useState } from "react";

const Review = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const texts = [
    "Microbuddy exceeded my expectations with their IT service and support. Their team was incredibly responsive and knowledgeable, swiftly resolving any issues we encountered. From software glitches to hardware malfunctions, they tackled every challenge with professionalism and efficiency. Their proactive approach to maintenance has minimized downtime for our business, ensuring smooth operations at all times. I highly recommend Microbuddy to any company seeking reliable IT solutions and unparalleled support.",
    "Microbuddy has been instrumental in optimizing our IT infrastructure. Their support team is top-notch, always available to assist us with any technical issues quickly. What truly sets them apart is their dedication to understanding our unique business needs and providing tailored solutions. They've implemented innovative strategies that have streamlined our processes and enhanced productivity. With Microbuddy's expertise, we feel confident in our technology's reliability, allowing us to focus on our core objectives. I can't thank them enough for their exceptional service and support.",
    "Choosing Microbuddy for our IT service needs has been a game-changer for our organization. Their team is incredibly proactive, often resolving issues before we even notice them. Their depth of knowledge and expertise have been evident in every interaction we've had. From network security to software updates, they've consistently delivered high-quality solutions tailored to our requirements. Microbuddy has become an invaluable partner, empowering us to stay ahead in a fast-paced digital landscape. If you're seeking a reliable IT service provider, look no further than Microbuddy.",
    "Microbuddy has been a lifesaver for our small business. Their support team is always available and goes above and beyond to ensure our operations run smoothly. They've helped us transition to cloud-based solutions, significantly improving our efficiency and collaboration. What's truly remarkable is their commitment to customer satisfaction; they take the time to explain technical concepts in a way that's easy to understand, empowering us to make informed decisions. With Microbuddy handling our IT needs, we can focus on confidently growing our business. I highly recommend them to anyone in need of dependable IT services.",
  ];
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const toggleExpansion1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const toggleExpansion2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const toggleExpansion3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  const toggleExpansion4 = () => {
    setIsExpanded4(!isExpanded4);
  };

  return (
    <div>
      <div className="relative lg:max-w-[70rem] mx-auto mt-[4rem]">
        <div className="text-center font-[700] lg:mb-[rem]">
          <div className="mx-[1rem] md:mx-auto md:w-[40rem]">
            <div className="overflow-hidden">
              <ScrollAnimation animateOnce={true} animateIn="pop-up">
                <img src={img4} alt="" />
              </ScrollAnimation>
            </div>
          </div>
          <h1 className="md:text-4xl lg:text-5xl mt-[-1.25rem] md:mt-[-2rem] lg:mt-[-2rem]">
            WE HAVE CUSTOMERS WORLDWIDE-
          </h1>
          <h1 className="md:text-4xl lg:text-5xl">READ WHAT THEY SAY.</h1>
        </div>
        {/*lg*/}
        <img className="mt-[7rem] -z-50 hidden lg:block" src={img1} alt="" />
        {/*md and sm*/}
        <img
          className="mx-auto w-full -z-50 block lg:hidden"
          src={img1Md}
          alt=""
        />
        {/*lg*/}
        <div className="hidden lg:block max-w-[60rem] -z-10 -mt-[25rem] mx-auto">
          <div className="hidden lg:block absolute left-[3rem] top-[45rem]">
            <button onClick={previous}>
              <IoIosArrowBack className="text-[#666ae580] text-[40px]" />
            </button>
          </div>
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            overScan={1}
            autoplay={true}
            arrows={false}
          >
            <div className="p-[3rem] text-black">
              <div className="bg-white mx-auto rounded-[3rem] border blue-box">
                <div className="flex">
                  <div className="w-[15rem] px-[3rem] py-[4rem]">
                    <img className="rounded-full w-[10rem]" src={imgDZ} />
                  </div>
                  <div className="py-[5rem] w-[30rem] text-left">
                    <h1 className="text-5xl font-bold">Dustin Zhu</h1>
                    <Rating
                      fullSymbol={
                        <IoMdStar className="text-[#FFD600] text-5xl" />
                      }
                      emptySymbol={
                        <IoMdStarOutline className="text-[#FFD600] text-5xl" />
                      }
                      readonly={true}
                      placeholderSymbol={
                        <IoMdStar className="text-[#FFD600] text-5xl" />
                      }
                      placeholderRating={5}
                    />
                    {!isExpanded1 ? (
                      <p className="py-6 text-xl">
                        {texts[0].slice(0, 150)}
                        {".... "}
                        <span
                          onClick={toggleExpansion1}
                          className="text-primary underline"
                        >
                          Show more.
                        </span>
                      </p>
                    ) : (
                      <p className="py-6 text-xl">
                        {" "}
                        {texts[0]}{" "}
                        <span
                          onClick={toggleExpansion1}
                          className="text-primary underline"
                        >
                          {" "}
                          Show less
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[3rem] text-black">
              <div className="bg-white mx-auto rounded-[3rem] border blue-box">
                <div className="flex ">
                  <div className="w-[15rem] px-[3rem] py-[4rem]">
                    <img className="rounded-full" src={imgSA} />
                  </div>
                  <div className="py-[5rem] w-[30rem] text-left">
                    <h1 className="text-5xl font-bold">Salman Alqahtani</h1>

                    <Rating
                      fullSymbol={
                        <IoMdStar className="text-[#FFD600] text-5xl" />
                      }
                      emptySymbol={
                        <IoMdStarOutline className="text-[#FFD600] text-5xl" />
                      }
                      readonly={true}
                      placeholderSymbol={
                        <IoMdStar className="text-[#FFD600] text-5xl" />
                      }
                      placeholderRating={5}
                    />
                    {!isExpanded2 ? (
                      <p className="py-6 text-xl">
                        {texts[1].slice(0, 150)}
                        {".... "}
                        <span
                          onClick={toggleExpansion2}
                          className="text-primary underline"
                        >
                          Show more.
                        </span>
                      </p>
                    ) : (
                      <p className="py-6 text-xl">
                        {" "}
                        {texts[1]}{" "}
                        <span
                          onClick={toggleExpansion2}
                          className="text-primary underline"
                        >
                          {" "}
                          Show less
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[3rem] text-black">
              <div className="bg-white mx-auto rounded-[3rem] border blue-box">
                <div className="flex ">
                  <div className="w-[15rem] px-[3rem] py-[4rem]">
                    <img className="rounded-full" src={imgYB} />
                  </div>
                  <div className="py-[5rem] w-[30rem] text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      Yashika Babbar
                    </h1>
                    <Rating
                      fullSymbol={
                        <IoMdStar className="text-[#FFD600] text-5xl" />
                      }
                      emptySymbol={
                        <IoMdStarOutline className="text-[#FFD600] text-5xl" />
                      }
                      readonly={true}
                      placeholderSymbol={
                        <IoMdStar className="text-[#FFD600] text-5xl" />
                      }
                      placeholderRating={5}
                    />
                    {!isExpanded3 ? (
                      <p className="py-6 text-xl">
                        {texts[2].slice(0, 150)}
                        {".... "}
                        <span
                          onClick={toggleExpansion3}
                          className="text-primary underline"
                        >
                          Show more.
                        </span>
                      </p>
                    ) : (
                      <p className="py-6 text-xl">
                        {" "}
                        {texts[2]}{" "}
                        <span
                          onClick={toggleExpansion3}
                          className="text-primary underline"
                        >
                          {" "}
                          Show less
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[3rem] text-black">
              <div className="bg-white mx-auto rounded-[3rem] border blue-box">
                <div className="flex ">
                  <div className="w-[15rem] px-[3rem] py-[4rem]">
                    <img className="rounded-full" src={imgSP} />
                  </div>
                  <div className="py-[5rem] w-[30rem] text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      Salman Parvez
                    </h1>
                    <Rating
                      fullSymbol={
                        <IoMdStar className="text-[#FFD600] text-5xl" />
                      }
                      emptySymbol={
                        <IoMdStarOutline className="text-[#FFD600] text-5xl" />
                      }
                      readonly={true}
                      placeholderSymbol={
                        <IoMdStar className="text-[#FFD600] text-5xl" />
                      }
                      placeholderRating={5}
                    />
                    {!isExpanded4 ? (
                      <p className="py-6 text-xl">
                        {texts[3].slice(0, 150)}
                        {".... "}
                        <span
                          onClick={toggleExpansion4}
                          className="text-primary underline"
                        >
                          Show more.
                        </span>
                      </p>
                    ) : (
                      <p className="py-6 text-xl">
                        {" "}
                        {texts[3]}{" "}
                        <span
                          onClick={toggleExpansion4}
                          className="text-primary underline"
                        >
                          {" "}
                          Show less
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="hidden lg:block absolute right-[3rem] top-[45rem]">
            <button onClick={next}>
              <IoIosArrowForward className="text-[#666ae580] text-[40px]" />
            </button>
          </div>
        </div>
        {/*md and sm*/}
        <div className="-z-10 mb-[5rem] mx-auto lg:hidden ">
          <Slider overScan={1} autoplay={true} arrows={false}>
            <div className="px-[1rem] py-[2rem] text-black">
              <div className="bg-white mx-auto rounded-3xl blue-box px-[1rem]">
                <div>
                  <div className="mx-auto w-fit mt-[2rem]">
                    <img className="rounded-full w-[10rem]" src={imgDZ} />
                  </div>

                  <div className="py-[3rem] text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      Dustin Zhu
                    </h1>
                    <Rating
                      fullSymbol={
                        <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      emptySymbol={
                        <IoMdStarOutline className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      readonly={true}
                      placeholderSymbol={
                        <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      placeholderRating={5}
                    />
                    {!isExpanded1 ? (
                      <p className="py-6 text-xl">
                        {texts[0].slice(0, 150)}
                        {".... "}
                        <span
                          onClick={toggleExpansion1}
                          className="text-primary underline"
                        >
                          Show more.
                        </span>
                      </p>
                    ) : (
                      <p className="py-6 text-xl">
                        {" "}
                        {texts[0]}{" "}
                        <span
                          onClick={toggleExpansion1}
                          className="text-primary underline"
                        >
                          {" "}
                          Show less
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[1rem] py-[2rem] text-black">
              <div className="bg-white mx-auto rounded-3xl blue-box px-[1rem]">
                <div>
                  <div className="mx-auto w-fit mt-[2rem]">
                    <img className="rounded-full w-[10rem]" src={imgDZ} />
                  </div>

                  <div className="py-[3rem] text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      Salman Alqahtani
                    </h1>
                    <Rating
                      fullSymbol={
                        <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      emptySymbol={
                        <IoMdStarOutline className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      readonly={true}
                      placeholderSymbol={
                        <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      placeholderRating={5}
                    />
                    {!isExpanded2 ? (
                      <p className="py-6 text-xl">
                        {texts[1].slice(0, 150)}
                        {".... "}
                        <span
                          onClick={toggleExpansion2}
                          className="text-primary underline"
                        >
                          Show more.
                        </span>
                      </p>
                    ) : (
                      <p className="py-6 text-xl">
                        {" "}
                        {texts[1]}{" "}
                        <span
                          onClick={toggleExpansion2}
                          className="text-primary underline"
                        >
                          {" "}
                          Show less
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[1rem] py-[2rem] text-black">
              <div className="bg-white mx-auto rounded-3xl blue-box px-[1rem]">
                <div>
                  <div className="mx-auto w-fit mt-[2rem]">
                    <img className="rounded-full w-[10rem]" src={imgDZ} />
                  </div>

                  <div className="py-[3rem] text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      Yashika Babbar
                    </h1>
                    <Rating
                      fullSymbol={
                        <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      emptySymbol={
                        <IoMdStarOutline className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      readonly={true}
                      placeholderSymbol={
                        <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      placeholderRating={5}
                    />
                    {!isExpanded3 ? (
                      <p className="py-6 text-xl">
                        {texts[2].slice(0, 150)}
                        {".... "}
                        <span
                          onClick={toggleExpansion3}
                          className="text-primary underline"
                        >
                          Show more.
                        </span>
                      </p>
                    ) : (
                      <p className="py-6 text-xl">
                        {" "}
                        {texts[2]}{" "}
                        <span
                          onClick={toggleExpansion3}
                          className="text-primary underline"
                        >
                          {" "}
                          Show less
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[1rem] py-[2rem] text-black">
              <div className="bg-white mx-auto rounded-3xl blue-box px-[1rem]">
                <div>
                  <div className="mx-auto w-fit mt-[2rem]">
                    <img className="rounded-full w-[10rem]" src={imgDZ} />
                  </div>

                  <div className="py-[3rem] text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      Salman Parvez
                    </h1>
                    <Rating
                      fullSymbol={
                        <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      emptySymbol={
                        <IoMdStarOutline className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      readonly={true}
                      placeholderSymbol={
                        <IoMdStar className="text-[#FFD600] text-4xl md:text-5xl" />
                      }
                      placeholderRating={5}
                    />
                    {!isExpanded4 ? (
                      <p className="py-6 text-xl">
                        {texts[3].slice(0, 150)}
                        {".... "}
                        <span
                          onClick={toggleExpansion4}
                          className="text-primary underline"
                        >
                          Show more.
                        </span>
                      </p>
                    ) : (
                      <p className="py-6 text-xl">
                        {" "}
                        {texts[3]}{" "}
                        <span
                          onClick={toggleExpansion4}
                          className="text-primary underline"
                        >
                          {" "}
                          Show less
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
