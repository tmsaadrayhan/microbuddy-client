import burgerPage from "../../../../assets/portfolio/all/cff1e01770931351.png";

const Website = () => {
  return (
    <section>
      <div>
        Website
        <div className="md:flex">
          <div className="relative portfolio-image-container w-full md:w-[45%] my-[.5rem] md:m-[.5rem] overflow-hidden rounded-xl ">
            <div className="w-[37rem] hover:scale-[1.5] duration-1000">
              <img className="portfolio-image" src={burgerPage} alt="" />
            </div>
            <div className="absolute portfolio-image-text bottom-[-5rem] text-white p-[1rem]">
              <header>
                <h1 className="text-2xl font-[700]">Tabler App</h1>
                <h1 className="text-xl">
                  •<span className="text-[#80FCDC]">Technology</span>
                </h1>
              </header>
            </div>
          </div>
          <div className="relative portfolio-image-container w-full md:w-[25%] my-[.5rem] md:m-[.5rem] overflow-hidden rounded-xl">
            <div className="w-[37rem] hover:scale-[1.5] duration-1000">
              <img src={burgerPage} alt="" />
            </div>
            <div className="absolute portfolio-image-text bottom-[-5rem] text-white p-[1rem]">
              <header>
                <h1 className="text-2xl font-[700]">Tabler App</h1>
                <h1 className="text-xl">
                  •<span className="text-[#80FCDC]">Technology</span>
                </h1>
              </header>
            </div>
          </div>
          <div className="relative portfolio-image-container w-full md:w-[25%] my-[.5rem] md:m-[.5rem] overflow-hidden rounded-xl">
            <div className="w-[37rem] hover:scale-[1.5] duration-1000">
              <img src={burgerPage} alt="" />
            </div>
            <div className="absolute portfolio-image-text bottom-[-5rem] text-white p-[1rem]">
              <header>
                <h1 className="text-2xl font-[700]">Tabler App</h1>
                <h1 className="text-xl">
                  •<span className="text-[#80FCDC]">Technology</span>
                </h1>
              </header>
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <div className="relative portfolio-image-container w-[35%] m-[.5rem] overflow-hidden rounded-xl">
            <div className="w-[28rem] hover:scale-[1.5] duration-1000">
              <img src={burgerPage} alt="" />
            </div>
            <div className="absolute portfolio-image-text bottom-[-5rem] text-white p-[1rem]">
              <header>
                <h1 className="text-2xl font-[700]">Tabler App</h1>
                <h1 className="text-xl">
                  •<span className="text-[#80FCDC]">Technology</span>
                </h1>
              </header>
            </div>
          </div>
          <div className="relative portfolio-image-container w-[25%] m-[.5rem] overflow-hidden rounded-xl">
            <div className="w-[28rem] hover:scale-[1.5] duration-1000">
              <img src={burgerPage} alt="" />
            </div>
            <div className="absolute portfolio-image-text bottom-[-5rem] text-white p-[1rem]">
              <header>
                <h1 className="text-2xl font-[700]">Tabler App</h1>
                <h1 className="text-xl">
                  •<span className="text-[#80FCDC]">Technology</span>
                </h1>
              </header>
            </div>
          </div>
          <div className="relative portfolio-image-container w-[35%] m-[.5rem] overflow-hidden rounded-xl">
            <div className="w-[28rem] hover:scale-[1.5] duration-1000">
              <img src={burgerPage} alt="" />
            </div>
            <div className="absolute portfolio-image-text bottom-[-5rem] text-white p-[1rem]">
              <header>
                <h1 className="text-2xl font-[700]">Tabler App</h1>
                <h1 className="text-xl">
                  •<span className="text-[#80FCDC]">Technology</span>
                </h1>
              </header>
            </div>
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
    </section>
  );
};

export default Website;
