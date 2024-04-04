import ScrollAnimation from "react-animate-on-scroll";
import img1 from "../../../assets/project/idea.webp";
import img2 from "../../../assets/project/project.png";
import img3 from "../../../assets/cube.webp";
import successtoast from "../../../assets/successtoast.svg";
import errortoast from "../../../assets/errortoast.svg";
import successtoastbox from "../../../assets/successteastbox.svg";

import "./Project.css";
import { Formik } from "formik";
import axios from "axios";
import { RxCrossCircled } from "react-icons/rx";
import { CiCircleCheck } from "react-icons/ci";
import toast from "react-hot-toast";

const Project = () => {
  return (
    <div>
      <div className="mx-[1rem] md:mx-[5rem] lg:max-w-[70rem] lg:mx-auto lg:flex gap-[5rem]">
        {/*lg*/}
        <div className="hidden lg:flex">
          <div className="mt-[5rem] me-[-2rem]">
            <div className="relative">
              <img className="breathe w-[10rem]" src={img3} alt="" />
            </div>
          </div>
          <div>
            <img className="breathe" src={img1} alt="" />
          </div>
        </div>
        <div className="px-[1rem]">
          <div className="text-center">
            <div className="overflow-hidden">
              <ScrollAnimation animateOnce={true} animateIn="pop-up">
                <img className="mx-auto" src={img2} alt="" />
              </ScrollAnimation>
            </div>
            <div className="mt-[-2rem] md:mt-[-3rem] text-[30px] md:text-[50px] lg:text-[35px] font-[700]">
              <h1 className="mb-[-0.5rem]">
                Let’s Turn Your Project idea into a Reality !
              </h1>
            </div>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              whatsapp: "",
              project_category: "",
              project_detail: "",
            }}
            onSubmit={(values) => {
              axios
                .post("https://37.60.225.188:8081/project-email", values)
                .then(function (response) {
                  console.log(response);
                  toast.custom((t) => (
                    <div
                      className={`bg-[#12B569] kadwA px-6 py-4 shadow-md rounded-xl  ${
                        t.visible ? "animate-enter" : "animate-leave"
                      }`}
                    >
                      <div className="flex relative">
                        <img
                          className="absolute w-[4rem] top-[-1.75rem]"
                          src={successtoast}
                          alt=""
                        />
                        <div className="relative w-[4rem] ms-[-1.5rem] mb-[-1rem] overflow-hidden rounded-xl">
                          <img
                            className="absolute w-[4rem] left-[-1rem] bottom-[-1rem]"
                            src={successtoastbox}
                            alt=""
                          />
                        </div>
                        <div className="ms-[2rem]">
                          <h1 className="font-[600] text-2xl text-[#FFFFFF]">
                            Success!
                          </h1>
                          <p className=" text-[#FFFFFF]">Your email is sent!</p>
                        </div>
                        <button
                          className="text-[#FFFFFF] absolute right-[-.6rem] text-xl"
                          onClick={() => toast.dismiss(t.id)}
                        >
                          <RxCrossCircled />
                        </button>
                        <div className="overflow-hidden me-[-1.5rem] mb-[-1rem]">
                          <CiCircleCheck className="text-[120px] text-[#00000033] me-[-3rem] mb-[-2.5rem]" />
                        </div>
                      </div>
                    </div>
                  ));
                })
                .catch(function (error) {
                  console.log(error);
                  toast.custom((t) => (
                    <div
                      className={`bg-[#E4335B] kadwA px-6 py-4 shadow-md rounded-xl  ${
                        t.visible ? "animate-enter" : "animate-leave"
                      }`}
                    >
                      <div className="flex relative">
                        <img
                          className="absolute w-[4rem] top-[-1.75rem]"
                          src={errortoast}
                          alt=""
                        />
                        <div className="relative w-[4rem] ms-[-1.5rem] mb-[-1rem] overflow-hidden rounded-xl">
                          <img
                            className="absolute w-[4rem] left-[-1rem] bottom-[-1rem]"
                            src={successtoastbox}
                            alt=""
                          />
                        </div>
                        <div className="ms-[2rem]">
                          <h1 className="font-[600] text-2xl text-[#FFFFFF]">
                            Error!
                          </h1>
                          <p className=" text-[#FFFFFF]">An error occurred.</p>
                        </div>
                        <button
                          className="text-[#FFFFFF] absolute right-[-.6rem] text-xl"
                          onClick={() => toast.dismiss(t.id)}
                        >
                          <RxCrossCircled />
                        </button>
                        <div className="overflow-hidden me-[-1.5rem] mb-[-1rem]">
                          <CiCircleCheck className="text-[120px] text-[#00000033] me-[-3rem] mb-[-2.5rem]" />
                        </div>
                      </div>
                    </div>
                  ));
                });
              alert("Thanks for your response");
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className="card-body rounded-xl lg:mx-[0rem] mx-auto blue-border"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="input input-bordered"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="input input-bordered"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Whatsapp"
                      name="whatsapp"
                      className="input input-bordered"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.whatsapp}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Project Category"
                      name="project_category"
                      className="input input-bordered"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.project_category}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    className="project-textarea rounded-xl w-full h-[10rem] mt-4"
                    placeholder="Project details"
                    name="project_detail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.project_detail}
                  ></textarea>
                </div>

                <div className="mb-[2rem]">
                  <div className="flex justify-center mt-[1rem] mb-[1.5rem] relative">
                    <div className="button-parent ">
                      <div className="project-button absolute right-[0rem] form-control"></div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="absolute right-[0rem] text-nowrap button-child"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="lg:hidden flex mx-auto">
          <div className="mt-[5rem] me-[-2rem]">
            <img className="w-[10rem]" src={img3} alt="" />
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
