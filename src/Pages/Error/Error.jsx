import error from "../../assets/error.png";
import Header from "../Header/Header";
import HeaderBG from "../Header/HeaderBG";
const Error = () => {
  return (
    <div>
      <Header></Header>
      <HeaderBG></HeaderBG>
      <img className="mx-auto mt-[2rem]" src={error} alt="" />
      <h1 className="text-center text-3xl md:text-[48px] lg:text-[80px] font-black text-[#636ADF] mt-[-1.5rem] md:mt-[-3rem]">
        PAGE NOT FOUND
      </h1>
      <p className="text-center text-md md:text-xl font-bold md:mt-[1rem]">
        Something went wrong
      </p>
    </div>
  );
};

export default Error;
