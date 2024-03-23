import imgLoad from "../../assets/loading.gif";
import img1 from "../../assets/cube.webp";
import img2 from "../../assets/career/welcome.png";
import img3 from "../../assets/career/career.webp";
import img4 from "../../assets/career/circuler.png";
import img5 from "../../assets/career/vector1.png";
import img6 from "../../assets/career/group298.png";
import img7 from "../../assets/career/vector.png";
import img8 from "../../assets/career/benefits.png";
import img9 from "../../assets/career/1.png";
import img10 from "../../assets/career/2.png";
import img11 from "../../assets/career/3.png";
import img12 from "../../assets/career/4.png";
import img13 from "../../assets/career/5.png";
import img14 from "../../assets/career/6.png";
import img15 from "../../assets/career/7.png";
import img16 from "../../assets/career/8.png";
import img17 from "../../assets/career/9.png";
import img18 from "../../assets/career/10.png";
import img19 from "../../assets/career/11.png";
import img20 from "../../assets/career/12.png";
import img21 from "../../assets/career/g1.webp";
import img22 from "../../assets/career/g2.webp";
import img23 from "../../assets/career/g3.webp";
import img24 from "../../assets/career/g4.webp";
import img25 from "../../assets/career/g5.webp";
import img26 from "../../assets/career/team.png";
import { Link } from "react-router-dom";
import "./Career.css";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect, useState } from "react";
import HeaderBG from "../Header/HeaderBG";

const Career = () => {
  // animateScroll.scrollToTop();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate async loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time

    return () => clearTimeout(timer);
  }, []);
  if (loading)
    return (
      <div className="w-full py-[15rem]">
        <img className="mx-auto" src={imgLoad} alt="" />
      </div>
    );
  else
    return (
      <div>
        <ScrollRestoration />
        <Helmet>
          <title>Career</title>
        </Helmet>
        <HeaderBG></HeaderBG>
        <div className="mx-[0rem] lg:mx-auto lg:w-[70rem]">
          {/*lg*/}
          <div className="relative hidden my-[5rem] lg:flex lg:items-center">
            
            <div className="career-from-left w-[37rem] mx-auto z-50">
              <div className="from-left">
                <div className="overflow-hidden">
                  <img className="pop-up" src={img2} alt="" />
                </div>
                <h1 className="mt-[-2.5rem] text-[40px] font-[700]">
                  MICROBUDDY'S CAREER
                </h1>
              </div>
              <div className="mt-[1.5rem] w-[32rem]">
                <div className="fade-in">
                  <p>
                    Join a dynamic team that shapes the future through
                    creativity and collaboration. Whether tech, design, or
                    support, your unique skills find a home here. we value your
                    unique talents. Experience a culture of collaboration and
                    growth, we’re offering more than a job. Shape the future
                    with MicroBuddy.
                  </p>
                </div>
              </div>
            </div>
            <div className="career-from-right">
              <div className="">
                <img className="w-full" src={img3} alt="" />
              </div>
            </div>
          </div>
          {/*sm and md*/}
          <div className="block lg:hidden gap-4 my-[5rem] lg:items-center">
            <div className="mx-[2rem] md:mx-auto">
              <img className="mx-auto" src={img2} alt="" />
              <div className="mt-[-1rem] md:mt-[-1.5rem] text-center md:mx-[1rem]">
                <h1 className="text-2xl md:text-6xl font-[700]">
                  MICROBUDDY'S CAREER
                </h1>
                <p>
                  Join a dynamic team that shapes the future through creativity
                  and collaboration. Whether tech, design, or support, your
                  unique skills find a home here. we value your unique talents.
                  Experience a culture of collaboration and growth, we’re
                  offering more than a job. Shape the future with MicroBuddy.
                </p>
              </div>
            </div>
            <div>
              <img className="w-full" src={img3} alt="" />
            </div>
          </div>
          <div className="mx-[2rem] md:mx-auto lg:w-[45rem]">
            <div className="overflow-hidden">
              <div className="pop-up">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="font-[700] text-[30px] md:text-4xl md:text-[50px] mt-[-25px] md:mt-[-40px]">
                Current Job Openings
              </h1>
              <p className="text-xl mt-[1rem]">
                Find your next job at Microbuddy.
              </p>
            </div>
          </div>
          <div className="mx-[0rem] md:mx-[2rem] lg:mx-auto blue-career-box rounded-xl lg:flex lg:content-center md:flex md:items-center my-[3rem] md:my-[5rem] py-[2rem] lg:w-[60rem]">
            <div className="md:w-3/5 lg:w-1/2 font-[700] mx-[2rem] md:mx-[0rem] md:ps-[4rem]">
              <h1 className="text-3xl text-center md:text-start mb-[2rem] ">
                Frontend Developer
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3">
                <div className="flex">
                  <img className="w-[2rem]" src={img5} alt="" />
                  <p className="ms-[1rem]">Marketing</p>
                </div>
                <div className="flex">
                  <img
                    className="w-[1.75rem] h-[1.75rem] ms-[1rem]"
                    src={img6}
                    alt=""
                  />
                  <p className="ms-[1rem]">Deadline</p>
                </div>
                <div className="flex ms-[0rem] mt-[1rem] md:mt-[0rem]">
                  <img
                    className="w-[2rem] mt-[-0.2rem] me-[0.5rem] md:ms-[1rem]"
                    src={img7}
                    alt=""
                  />
                  <p className="ms-[0.75rem]">Banasree</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end md:w-2/5 lg:w-1/2 md:pe-[4rem] mt-[2rem] md:mt-[0rem]">
              <Link to="/contact">
                <div className="button-border">
                  <button className="rounded-[10px] m-[0.1rem] bg-[#666AE5] text-[white] px-[2.25rem] py-[0.75rem]">
                    Apply Now
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="mx-[2rem] md:mx-auto md:w-[45rem]">
            <div className="overflow-hidden">
              <ScrollAnimation animateOnce={true} animateIn="pop-up">
                <img src={img8} alt="" />
              </ScrollAnimation>
            </div>
            <h1 className="text-center font-[700] text-4xl text-[30px] md:text-[50px] mt-[-25px] md:mt-[-40px] flex justify-center">
              <ScrollAnimation animateOnce={true} animateIn="move-left">
                Benefits
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="grow-from-0">
                @
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="move-right">
                Microbuddy
              </ScrollAnimation>
            </h1>
            <h1 className=" text-center md:font-[500] text-xl mt-[0rem] md:mt-[1rem]">
              Here are some of the perks you’ll enjoy at Microbuddy
            </h1>
          </div>
          <div className="mx-[2rem] lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[1rem] md:mt-[3rem]">
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem]">
              <p className="text-xl">
                Our medical insurance ensures your well-being is covered. We
                prioritize your health, providing peace of mind for whatever
                life throws your way.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">Medical Insurance</h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img9} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem]">
              <p className="text-xl">
                Work on your terms with our flexible arrangements. We support
                your unique needs, ensuring a balanced and productive work-life
                blend.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">Flexibility</h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img10} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem]">
              <p className="text-xl">
                Join us for delicious, communal meals. Beyond nourishment, we
                foster camaraderie and enjoyment in every bite.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">Office Meals</h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img11} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem] hidden md:block">
              <p className="text-xl">
                Celebrate parenthood with our supportive benefits. Take time off
                worry-free to bond with your newborn.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">
                    Maternity/ Paternity Benefits
                  </h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img12} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem] hidden md:block">
              <p className="text-xl">
                Experience a lively workplace where creativity thrives. Laughter
                and celebration are always welcome, making work enjoyable.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">Fun Office</h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img13} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem] hidden md:block">
              <p className="text-xl">
                Elevate your skills with our top-notch training programs. We
                invest in your growth for long-term success.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">Quality Trainings</h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img14} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem] hidden lg:block">
              <p className="text-xl">
                Progress in your career with ample opportunities. We're
                committed to helping you achieve your goals and aspirations.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">Career Growth</h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img15} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem] hidden lg:block">
              <p className="text-xl">
                Receive fair compensation for your efforts. Your contributions
                are valued and rewarded accordingly.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">Income Opportunity</h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img16} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem] hidden lg:block">
              <p className="text-xl">
                Collaborate with skilled professionals. Our diverse team fosters
                innovation and excellence.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">Qualified Team</h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img17} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem] hidden lg:block">
              <p className="text-xl">
                Secure your future with our financial plans. We're here to help
                you achieve your long-term goals.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">Savings & Investment</h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img18} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem] hidden lg:block">
              <p className="text-xl">
                Access financial support conveniently. We offer assistance for
                unexpected expenses, ensuring peace of mind.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">
                    Loan & Credit Facility
                  </h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img19} alt="" />
                </div>
              </div>
            </div>
            <div className="hover:scale-110 duration-300 blue-box-career p-[2rem] hidden lg:block">
              <p className="text-xl">
                Breathe easily in our green workspace. We prioritize your
                well-being with clean, refreshing air.
              </p>
              <div className="flex items-end">
                <div className="w-full">
                  <h1 className="text-2xl font-[700]">Clean Air</h1>
                </div>
                <div className="flex justify-end w-[6rem]">
                  <img className="" src={img20} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex mt-[3rem] lg:hidden">
            <button className="font-[500] text-lg mx-auto blue-career-box rounded-[10px] m-[0.1rem] bg-[#666AE5] text-[white] px-[2rem] py-[1.25rem] w-[12rem]">
              LEARN MORE
            </button>
          </div>
          <div className="mx-[2rem] md:mx-auto md:w-[45rem] mt-[4rem]">
            <div className="overflow-hidden">
              <ScrollAnimation animateOnce={true} animateIn="pop-up">
                <img src={img26} alt="" />
              </ScrollAnimation>
            </div>
            <div className="text-center">
              <h1 className="font-[700] text-[28px] md:text-[64px] mt-[-25px] md:mt-[-5rem]">
                Join Microbuddy Team
              </h1>
              <p className="text-xl">
                We would like a picture of You to be posted here.
              </p>
            </div>
          </div>
          <div className="block lg:hidden md:mt-[3rem]">
            <div className="flex">
              <div className="w-full overflow-hidden m-[0.25rem]">
                <img
                  className="hover:scale-110 duration-300 w-full"
                  src={img21}
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-[52%] overflow-hidden m-[0.25rem] ">
                <img className="hover:scale-110 duration-300" src={img22} />
              </div>
              <div className="w-[48%] overflow-hidden m-[0.25rem]">
                <img className="hover:scale-110 duration-300" src={img23} />
              </div>
            </div>
            <div className="flex">
              <div className="overflow-hidden m-[0.25rem]">
                <img className="hover:scale-110 duration-300" src={img24} />
              </div>
              <div className="overflow-hidden m-[0.25rem]">
                <img className="hover:scale-110 duration-300" src={img25} />
              </div>
            </div>
          </div>
          {/*lg*/}
          <div className="hidden lg:block mt-[3rem]">
            <div className="flex">
              <div className="overflow-hidden m-[0.25rem]">
                <img className="hover:scale-110 duration-300" src={img21} />
              </div>
              <div className="overflow-hidden m-[0.25rem]">
                <img className="hover:scale-110 duration-300" src={img22} />
              </div>
            </div>
            <div className="flex">
              <div className="overflow-hidden m-[0.25rem]">
                <img className="hover:scale-110 duration-300" src={img23} />
              </div>
              <div className="overflow-hidden m-[0.25rem]">
                <img className="hover:scale-110 duration-300" src={img24} />
              </div>
              <div className="overflow-hidden m-[0.25rem]">
                <img className="hover:scale-110 duration-300" src={img25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Career;
