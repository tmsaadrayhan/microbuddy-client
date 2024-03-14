import img from "../../../assets/portfolio/portfolio.png";
import img1 from "../../../assets/7330e9ce4d8bcdb5788e27aabbcd4fc4.png";

const PortfolioHead = () => {
  return (
    <div>
      <div className="text-center h-[10rem] relative">
        <div className="absolute top-0 bg-head h-[6rem] w-full "></div>
      </div>
      <div className="lg:max-w-[70rem] text-center mb-[3rem] mx-[2rem] lg:mx-auto relative">
        <div className="hidden lg:block absolute w-[8rem] right-[-10rem] lg:scale-x-[-1]">
          <img className="breathe" src={img1} alt="" />
        </div>
        <div className="overflow-hidden">
          <div className="pop-up">
            <img className="mx-auto" src={img} alt="" />
          </div>
        </div>
        <div>
          <h1 className="tracking-[0.6em] text-3xl md:text-6xl lg:text-6xl mt-[-1rem] lg:mt-[-4rem] font-bold">
            Portfolio
          </h1>
          <p>
            MicroBuddy is all about you. We focus on crafting solutions that
            meet your needs, disrupt the norm, and show immense potential. We
            thrive in innovation, incubating ideas that promise guaranteed
            growth. With a team brimming with talent, we're committed to making
            a significant impact. Stay ahead of the curve with MicroBuddy –
            where customer-centricity meets disruptive potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHead;
