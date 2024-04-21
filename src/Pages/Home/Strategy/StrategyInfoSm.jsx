import ScrollAnimation from "react-animate-on-scroll";

const StrategyInfoSm = ({ index, strategy }) => {
  const { header, detail } = strategy;
  return (
    <div>
      <ScrollAnimation
        animateOnce={true}
        animateIn={`home-from-${index % 2 == 0 ? "left" : "right"}`}
        className="strategy-box bg-white m-[1rem] max-w-[30rem] p-[1rem] rounded-2xl mx-auto lg:mx-0"
      >
        <div>
          <h1 className="text-xl font-bold">{header}</h1>
        </div>
        <div className="flex">
          <div className="w-[20rem]">
            <p>{detail
            }</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default StrategyInfoSm;
