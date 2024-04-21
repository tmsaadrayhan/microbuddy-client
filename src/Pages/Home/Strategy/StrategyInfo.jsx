import ScrollAnimation from "react-animate-on-scroll";

const StrategyInfo = ({ animateIn, index, strategy }) => {
  const { header, detail } = strategy;
  return (
    <ScrollAnimation
      animateOnce={true}
      animateIn={animateIn}
      className={`lg:m${
        index % 2 == 0 ? "s" : "e"
      }-[3rem] strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto lg:mx-0`}
    >
      <article>
        <header className="lg:text-end">
          <h1 className="text-xl font-bold">{header}</h1>
        </header>
        <div className="flex lg:justify-end">
          <div className="w-[20rem] lg:text-end">
            <p>{detail}</p>
          </div>
        </div>
      </article>
    </ScrollAnimation>
  );
};

export default StrategyInfo;
