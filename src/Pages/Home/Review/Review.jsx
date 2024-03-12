import img1 from "../../../assets/review/map2.png";
import img1Md from "../../../assets/review/group299md.png";
import img2 from "../../../assets/review/avatar.png";
import img3 from "../../../assets/7330e9ce4d8bcdb5788e27aabbcd4fc4.png";
import img4 from "../../../assets/review/reviews.png";
import Rating from "react-rating";
import { IoIosArrowBack, IoIosArrowForward, IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";
import { useRef } from "react";

const Review = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <div>
      <div className="relative lg:max-w-[70rem] mx-auto mt-[4rem] lg:mb-[-11rem]">
        <div className="text-center font-[700] lg:mb-[-5rem]">
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
        <img className="lg:mt-[7rem] -z-50 hidden lg:block" src={img1} alt="" />
        <img
          className="mx-auto w-full -z-50 block lg:hidden"
          src={img1Md}
          alt=""
        />
        <div className="hidden lg:block z-50 w-[8rem] absolute bottom-[23rem] left-[500px]">
          <div className="relative">
            <img className="breathe" src={img3} alt="" />
          </div>
        </div>
        {/*lg*/}
        <div className="max-w-[60rem] -z-10 lg:-mt-[25rem] mb-[5rem] lg:mb-[15rem] mx-auto hidden lg:block">
          <div className="hidden lg:block absolute z-[50] left-[3rem] bottom-[14rem] ">
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
            <div className="p-[1rem] lg:p-[3rem] text-black">
              <div className="bg-white mx-auto rounded-[3rem] border blue-box">
                <div className="flex ">
                  <div className="w-[15rem] md:w-[15rem] pt-[2rem] px-[1rem] md:p-[3rem]">
                    <img src={img2} />
                  </div>

                  <div className="py-[5rem] lg:w-[30rem] text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">John</h1>
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
                    <p className="py-6 md:text-xl">
                      Personalization assumed up an excess of position in the
                      showcasing space and has made each and every one of
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[1rem] lg:p-[3rem] text-black">
              <div className="bg-white mx-auto rounded-[3rem] border blue-box">
                <div className="flex ">
                  <div className="w-[15rem] md:w-[15rem] pt-[2rem] px-[1rem] md:p-[3rem]">
                    <img src={img2} />
                  </div>

                  <div className="py-[5rem] lg:w-[30rem] text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">John</h1>
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
                    <p className="py-6 md:text-xl">
                      Personalization assumed up an excess of position in the
                      showcasing space and has made each and every one of
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[1rem] lg:p-[3rem] text-black">
              <div className="bg-white mx-auto rounded-[3rem] border blue-box">
                <div className="flex ">
                  <div className="w-[15rem] md:w-[15rem] pt-[2rem] px-[1rem] md:p-[3rem]">
                    <img src={img2} />
                  </div>

                  <div className="py-[5rem] lg:w-[30rem] text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">John</h1>
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
                    <p className="py-6 md:text-xl">
                      Personalization assumed up an excess of position in the
                      showcasing space and has made each and every one of
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="hidden lg:block absolute right-[3rem] bottom-[14rem] ">
            <button onClick={next}>
              <IoIosArrowForward className="text-[#666ae580] text-[40px]" />
            </button>
          </div>
        </div>
        {/*md and sm*/}
        <div className="lg:w-[60rem] -z-10 lg:-mt-[25rem] mb-[5rem] lg:mb-[15rem] mx-auto lg:hidden">
          <Slider overScan={1} autoplay={true} arrows={false}>
            <div className="p-[1rem] lg:p-[3rem] text-black">
              <div className="bg-white mx-auto rounded-xl border blue-box">
                <div className="flex ">
                  <div className="w-[15rem] md:w-[12rem] pt-[2rem] px-[1rem] md:p-[1rem]">
                    <img src={img2} />
                  </div>

                  <div className="py-[3rem] lg:w-[30rem] text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">John</h1>
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
                    <p className="py-6 md:text-xl">
                      Personalization assumed up an excess of position in the
                      showcasing space and has made each and every one of
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[1rem] lg:p-[3rem] text-black">
              <div className="bg-white mx-auto rounded-xl border blue-box">
                <div className="flex ">
                  <div className="w-[15rem] md:w-[12rem] pt-[2rem] px-[1rem] md:p-[1rem]">
                    <img src={img2} />
                  </div>

                  <div className="py-[3rem] lg:w-[30rem] text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">John</h1>
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
                    <p className="py-6 md:text-xl">
                      Personalization assumed up an excess of position in the
                      showcasing space and has made each and every one of
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[1rem] lg:p-[3rem] text-black">
              <div className="bg-white mx-auto rounded-xl border blue-box">
                <div className="flex ">
                  <div className="w-[15rem] md:w-[12rem] pt-[2rem] px-[1rem] md:p-[1rem]">
                    <img src={img2} />
                  </div>

                  <div className="py-[3rem] lg:w-[30rem] text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">John</h1>
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
                    <p className="py-6 md:text-xl">
                      Personalization assumed up an excess of position in the
                      showcasing space and has made each and every one of
                    </p>
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
