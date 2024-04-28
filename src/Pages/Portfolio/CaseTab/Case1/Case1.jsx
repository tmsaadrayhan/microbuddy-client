import dialfever from "../../../../assets/portfolio/case/dialfever.png";
import edit from "../../../../assets/portfolio/case/edit.svg";

const Case1 = () => {
  return (
    <div>
      Case One
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem]">
        <div className="relative h-[28rem] overflow-hidden rounded-2xl">
          <img
            className="transition-all ease-in-out delay-100 hover:translate-y-[-29.25rem] duration-[1500ms]"
            src={dialfever}
            alt=""
          />
          <button className="absolute portfolio-case-study-button-parent rounded-full bg-[#666AE5] text-white text-xl top-[20rem] right-[-8rem]">
            View Details
            <div className="portfolio-case-study-button-child absolute top-[0rem] left-[1rem] p-[.9rem]">
              <img src={edit} alt="" />
            </div>
          </button>
        </div>
        <div className="relative h-[28rem] overflow-hidden rounded-2xl">
          <img
            className="transition-all ease-in-out delay-100 hover:translate-y-[-29.25rem] duration-[1500ms]"
            src={dialfever}
            alt=""
          />
          <button className="absolute portfolio-case-study-button-parent rounded-full bg-[#666AE5] text-white text-xl top-[20rem] right-[-8rem]">
            View Details
            <div className="portfolio-case-study-button-child absolute top-[0rem] left-[1rem] p-[.9rem]">
              <img src={edit} alt="" />
            </div>
          </button>
        </div>
        <div className="relative h-[28rem] overflow-hidden rounded-2xl">
          <img
            className="transition-all ease-in-out delay-100 hover:translate-y-[-29.25rem] duration-[1500ms]"
            src={dialfever}
            alt=""
          />
          <button className="absolute portfolio-case-study-button-parent rounded-full bg-[#666AE5] text-white text-xl top-[20rem] right-[-8rem]">
            View Details
            <div className="portfolio-case-study-button-child absolute top-[0rem] left-[1rem] p-[.9rem]">
              <img src={edit} alt="" />
            </div>
          </button>
        </div>
        <div className="relative h-[28rem] overflow-hidden rounded-2xl">
          <img
            className="transition-all ease-in-out delay-100 hover:translate-y-[-29.25rem] duration-[1500ms]"
            src={dialfever}
            alt=""
          />
          <button className="absolute portfolio-case-study-button-parent rounded-full bg-[#666AE5] text-white text-xl top-[20rem] right-[-8rem]">
            View Details
            <div className="portfolio-case-study-button-child absolute top-[0rem] left-[1rem] p-[.9rem]">
              <img src={edit} alt="" />
            </div>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto w-fit mt-[3rem]">
          <button
            style={{ border: "1px solid #666AE5" }}
            className="transition-all ease-in-out duration-[600ms] text-[#666AE5] hover:text-[#FFFFFF] hover:bg-[#666AE5] text-2xl font-bold px-[2rem] py-[.5rem] rounded-xl mx-auto"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Case1;
