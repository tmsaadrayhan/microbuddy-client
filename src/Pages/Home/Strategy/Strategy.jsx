import img1 from "../../../assets/strategy/service.webp";
import img2 from "../../../assets/strategy/strategy.png";
import "./Strategy.css";
import ScrollAnimation from "react-animate-on-scroll";
import StrategyInfo from "./StrategyInfo";
import StrategyInfoSm from "./StrategyInfoSm";

const Strategy = () => {
  const strategyDataLeft = [
    {
      header: "Data entry",
      detail:
        "Microbuddy provides efficient data entry solutions, ensuring accuracy and confidentiality, tailored to meet diverse business needs with prompt turnaround.",
    },
    {
      header: "Web/App Deployment",
      detail:
        "Seamless deployment services for web and app development projects, ensuring efficient and reliable delivery of digital solutions.",
    },
    {
      header: "Training and Documentation",
      detail:
        "Microbuddy offers comprehensive training and documentation services, ensuring smooth user adoption and proficiency in utilizing software and technology.",
    },
  ];
  const strategyDataRight = [
    {
      header: "SEO",
      detail:
        "Boost your online visibility with Microbuddy's expert SEO service. Drive traffic, enhance rankings, and dominate search engine results effectively.",
    },
    {
      header: "Updates and Maintenance",
      detail:
        "IT support is all about, comprehensive updates and maintenance services, ensuring your systems remain optimized.",
    },
    {
      header: "Consultation Services",
      detail:
        "Expert business guidance, specializing in microenterprise solutions, tailored strategies, and growth optimization. Your success is our priority.",
    },
  ];
  return (
    <section className="lg:max-w-[80rem] lg:mx-auto">
      <div className="text-center px-[1rem]">
        <header>
          <div className="overflow-hidden">
            <ScrollAnimation animateOnce={true} animateIn="pop-up">
              <h1 className="text-[60px] md:text-[120px] header">STRATEGY</h1>
            </ScrollAnimation>
          </div>
          <div className="text-[20px] md:text-[34px] lg:text-[43px] font-[700] mt-[-2.5rem] md:mt-[-5rem] lg:mt-[-6rem]">
            <h1 className="mb-[-0.5rem] md:mb-[-1rem]">A QUALITY IT SUPPORT</h1>
            <h1>FOR EVERYONE</h1>
          </div>
        </header>
      </div>
      {/*lg and md*/}
      <div className="hidden md:block lg:flex justify-normal items-center mx-auto px-[1rem]">
        <div className="z-[50] md:ms-[2rem] lg:ms-0">
          {strategyDataLeft.map((strategy) => (
            <StrategyInfo
              key={strategyDataLeft.indexOf(strategy)}
              index={strategyDataLeft.indexOf(strategy)}
              strategy={strategy}
              animateIn="home-from-left"
            ></StrategyInfo>
          ))}
        </div>
        <div className="col-span-1 mx-auto lg:mx-[-4rem]">
          <div className="hidden lg:block relative">
            <div>
              <img className="breathe mx-auto w-[40rem]" src={img1} alt="" />
            </div>
          </div>
          <img
            className="block lg:hidden mx-auto w-[40rem]"
            src={img1}
            alt=""
          />
        </div>
        <div className="z-[50] md:ms-[2rem] lg:ms-0">
          {strategyDataRight.map((strategy) => (
            <StrategyInfo
              key={strategyDataRight.indexOf(strategy)}
              index={strategyDataRight.indexOf(strategy) + 1}
              strategy={strategy}
              animateIn="home-from-right"
            ></StrategyInfo>
          ))}
        </div>
      </div>
      {/*sm*/}
      <div className="block md:hidden mx-auto overflow-hidden px-[1rem]">
        <div className="z-[50]">
          {strategyDataLeft.map((strategy) => (
            <StrategyInfoSm
              key={strategyDataLeft.indexOf(strategy)}
              index={strategyDataLeft.indexOf(strategy)}
              strategy={strategy}
            ></StrategyInfoSm>
          ))}
        </div>
        <div className="col-span-1 mx-auto">
          <ScrollAnimation
            animateOnce={true}
            duration={2}
            animateIn="grow-from-4"
          >
            <div className="block md:hidden">
              <img className="block mx-auto w-[40rem]" src={img1} alt="" />
            </div>
          </ScrollAnimation>
          <img className="hidden mx-auto w-[40rem]" src={img1} alt="" />
        </div>
        <div className="z-[50] lg:ms-0">
          {strategyDataRight.map((strategy) => (
            <StrategyInfoSm
              key={strategyDataRight.indexOf(strategy)}
              index={strategyDataRight.indexOf(strategy) + 1}
              strategy={strategy}
            ></StrategyInfoSm>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
