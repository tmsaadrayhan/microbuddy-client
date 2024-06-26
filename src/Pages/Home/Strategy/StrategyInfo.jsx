import ScrollAnimation from "react-animate-on-scroll";

const StrategyInfo = ({ animateIn, index, strategy }) => {
  const { header, detail } = strategy;
  return (
    <ScrollAnimation
      animateOnce={true}
      animateIn={animateIn}
      className={index % 2 == 0 ? "lg:ps-[3rem]" : "lg:pe-[3rem]"}
    >
      <article className="strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto lg:mx-0">
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
