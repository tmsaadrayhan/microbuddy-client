import "./Why.css";
import img1 from "../../../assets/why/group309.png";
import img2 from "../../../assets/7330e9ce4d8bcdb5788e27aabbcd4fc4.png";
import img3 from "../../../assets/why/group301.png";
import img4 from "../../../assets/why/business.png";
import ScrollAnimation from "react-animate-on-scroll";

const Why = () => {
  return (
    <div className="md:mt-12">
      <div className="max-w-[70rem] mx-auto lg:flex">
        <div className="relative md:max-w-[47rem] lg:w-1/2 mx-auto px-[1rem]">
          <div className="overflow-hidden">
            <ScrollAnimation animateOnce={true} animateIn="pop-up">
              <h1 className="text-[100px] md:text-[180px] why-head">WHY</h1>
            </ScrollAnimation>
          </div>
          <h1 className="text-5xl font-bold mt-[-4rem] md:mt-[-7rem] mb-[0.5rem]">
            We help
          </h1>
          <div className="mb-[-1rem] mt-[-2rem]">
            <img src={img4} alt="" />
          </div>
          <h1 className="text-5xl font-bold mb-[0.5rem]">Growing up</h1>
          <p>
            We go for analysis, development, and seamless implementation.
            Convert any action taken from your vision. Evaluate processes, and
            gain comparative growth insights. Your trusted partner for strategic
            growth & the best IT Support you didn’t know you will need.
          </p>
          <div className="flex">
            <img src={img3} alt="" />

            <div className="ms-[-2rem]">
              <p className="mt-[1rem] mb-[2.32rem]">Planning & Analysis</p>
              <p className="mb-[2.32rem]">Requirements</p>
              <p className="mb-[2.32rem]">Design</p>
              <p className="mb-[2.32rem]">Development</p>
              <p className="mb-[2.32rem]">Testing</p>
              <p className="mb-[2.32rem]">Deployment</p>
              <p className="mb-[2.32rem]">Maintenance</p>
            </div>
          </div>
          <div className="hidden lg:block absolute top-5 md:right-[5rem] lg:right-[-5rem] w-32">
            <div className="relative">
              <img className="breathe z-50" src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex px-[1rem] items-center">
          <ScrollAnimation
            animateOnce={true}
            duration={2}
            animateIn="from-right"
          >
            <img className="-z-50" src={img1} alt="" />
          </ScrollAnimation>
        </div>
        <div className="lg:hidden overflow-hidden px-[1rem]">
          <ScrollAnimation
            animateOnce={true}
            duration={2}
            animateIn="from-right"
          >
            <div className="h-full flex items-center">
              <div>
                <img className="-z-50" src={img1} alt="" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Why;
