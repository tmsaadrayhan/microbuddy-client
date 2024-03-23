import img1 from "../../../assets/strategy/service.webp";
import img2 from "../../../assets/strategy/strategy.png";
import "./Strategy.css";
import ScrollAnimation from "react-animate-on-scroll";

const Strategy = () => {
  return (
    <div className="lg:max-w-[80rem] lg:mx-auto">
      <div className="text-center px-[1rem]">
        <div className="overflow-hidden">
          <ScrollAnimation animateOnce={true} animateIn="pop-up">
            <img className="mx-auto w-[50rem]" src={img2} alt="" />
          </ScrollAnimation>
        </div>
        <div className="text-[20px] md:text-[34px] lg:text-[43px] font-[700] mt-[-2rem] md:mt-[-4rem]">
          <h1 className="mb-[-0.5rem] md:mb-[-1rem]">A QUALITY IT SUPPORT</h1>
          <h1>FOR EVERYONE</h1>
        </div>
      </div>
      {/*lg and md*/}
      <div className="hidden md:block lg:flex justify-normal items-center mx-auto px-[1rem]">
        <div className="z-[50] md:ms-[2rem] lg:ms-0">
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-left"
            className="lg:ms-[3rem] strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto lg:mx-0"
          >
            <div className="lg:text-end">
              <h1 className="text-xl font-bold">Data entry</h1>
            </div>
            <div className="flex lg:justify-end">
              <div className="w-[20rem] lg:text-end">
                <p>
                  Microbuddy provides efficient data entry solutions, ensuring
                  accuracy and confidentiality, tailored to meet diverse
                  business needs with prompt turnaround.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-left"
            className="lg:me-[3rem] strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto lg:mx-0"
          >
            <div className="lg:text-end">
              <h1 className="text-xl font-bold">Web/App Deployment</h1>
            </div>
            <div className="flex lg:justify-end">
              <div className="w-[20rem] lg:text-end">
                <p>
                  Seamless deployment services for web and app development
                  projects, ensuring efficient and reliable delivery of digital
                  solutions
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-left"
            className="lg:ms-[3rem] strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto lg:mx-0"
          >
            <div className="lg:text-end">
              <h1 className="text-xl font-bold">Training and Documentation</h1>
            </div>
            <div className="flex lg:justify-end">
              <div className="w-[20rem] lg:text-end">
                <p>
                  Microbuddy offers comprehensive training and documentation
                  services, ensuring smooth user adoption and proficiency in
                  utilizing software and technology.
                </p>
              </div>
            </div>
          </ScrollAnimation>
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
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-right"
            className="lg:me-[3rem] strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto lg:mx-0"
          >
            <div>
              <h1 className="text-xl font-bold">SEO</h1>
            </div>
            <div className="w-[20rem]">
              <p>
                Boost your online visibility with Microbuddy's expert SEO
                service. Drive traffic, enhance rankings, and dominate search
                engine results effectively
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-right"
            className="lg:ms-[3rem] strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto lg:mx-0"
          >
            <div>
              <h1 className="text-xl font-bold">Updates and Maintenance</h1>
            </div>
            <div className="w-[20rem]">
              <p>
                IT support is all about, comprehensive updates and maintenance
                services, ensuring your systems remain optimized.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-right"
            className="lg:me-[3rem] strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto lg:mx-0"
          >
            <div>
              <h1 className="text-xl font-bold">Consultation Services</h1>
            </div>
            <div className="w-[20rem]">
              <p>
                Expert business guidance, specializing in microenterprise
                solutions, tailored strategies, and growth optimization. Your
                success is our priority.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/*sm*/}
      <div className="block md:hidden mx-auto overflow-hidden px-[1rem]">
        <div className="z-[50]">
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-left"
            className="strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto lg:mx-0"
          >
            <div>
              <h1 className="text-xl font-bold">Data entry</h1>
            </div>
            <div className="flex">
              <div className="w-[20rem]">
                <p>
                  Microbuddy provides efficient data entry solutions, ensuring
                  accuracy and confidentiality, tailored to meet diverse
                  business needs with prompt turnaround.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-right"
            className="strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto"
          >
            <div>
              <h1 className="text-xl font-bold">Web/App Deployment</h1>
            </div>
            <div className="flex">
              <div className="w-[20rem]">
                <p>
                  Seamless deployment services for web and app development
                  projects, ensuring efficient and reliable delivery of digital
                  solutions
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-left"
            className="strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto "
          >
            <div>
              <h1 className="text-xl font-bold">Training and Documentation</h1>
            </div>
            <div className="flex lg:justify-end">
              <div className="w-[20rem] ">
                <p>
                  Microbuddy offers comprehensive training and documentation
                  services, ensuring smooth user adoption and proficiency in
                  utilizing software and technology.
                </p>
              </div>
            </div>
          </ScrollAnimation>
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
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-right"
            className="strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto"
          >
            <div>
              <h1 className="text-xl font-bold">SEO</h1>
            </div>
            <div className="flex ">
              <div className="w-[20rem]">
                <p>
                  Boost your online visibility with Microbuddy's expert SEO
                  service. Drive traffic, enhance rankings, and dominate search
                  engine results effectively
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-left"
            className="strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto"
          >
            <div>
              <h1 className="text-xl font-bold">Updates and Maintenance</h1>
            </div>
            <div className="flex">
              <div className="w-[20rem]">
                <p>
                  IT support is all about, comprehensive updates and maintenance
                  services, ensuring your systems remain optimized.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="home-from-right"
            className="strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto"
          >
            <div>
              <h1 className="text-xl font-bold">Consultation Services</h1>
            </div>
            <div className="flex">
              <div className="w-[20rem]">
                <p>
                  Expert business guidance, specializing in microenterprise
                  solutions, tailored strategies, and growth optimization. Your
                  success is our priority.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
