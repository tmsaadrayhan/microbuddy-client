import img from "../../../assets/portfolio/portfolio.png";
import img1 from "../../../assets/cube.webp";

const PortfolioHead = () => {
  return (
    <section>
      <div>
        <div className="text-center h-[10rem] relative">
          <div className="absolute top-0 bg-head h-[6rem] w-full "></div>
        </div>
        <div className="lg:max-w-[70rem] text-center mb-[3rem] mx-[2rem] lg:mx-auto relative">
          <div className="hidden lg:block absolute w-[8rem] right-[-10rem] lg:scale-x-[-1]">
            <img className="breathe" src={img1} alt="" />
          </div>
          <article>
            <div className="overflow-hidden">
              <div className="pop-up">
                <header>
                  <h1 className="header tracking-[.2em] text-[60px] md:text-[120px] lg:text-[150px] text-center">
                    Portfolio
                  </h1>
                </header>
              </div>
            </div>
            <div>
              <img
                className="w-[15rem] md:w-[30rem] mt-[-2.5rem] md:mt-[-6rem] mx-auto"
                src={img}
                alt=""
              />
              <p className="mt-[1rem]">
                MicroBuddy is all about you. We focus on crafting solutions that
                meet your needs, disrupt the norm, and show immense potential.
                We thrive in innovation, incubating ideas that promise
                guaranteed growth. With a team brimming with talent, we're
                committed to making a significant impact. Stay ahead of the
                curve with MicroBuddy – where customer-centricity meets
                disruptive potential.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHead;
