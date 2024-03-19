import ScrollAnimation from "react-animate-on-scroll";
import img1 from "../../../assets/project/group289.png";
import img2 from "../../../assets/project/project.png";
import img3 from "../../../assets/7330e9ce4d8bcdb5788e27aabbcd4fc4.png";
import "./Project.css";
import { Formik } from "formik";
import axios from "axios";

const Project = () => {
  return (
    <div>
      <div className="mx-[1rem] md:mx-[5rem] lg:max-w-[70rem] lg:mx-auto lg:flex gap-[5rem]">
        {/*lg*/}
        <div className="hidden lg:flex">
          <div className="mt-[5rem] me-[-2rem]">
            <div className="relative">
              <img className="breathe" src={img3} alt="" />
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
                .post("http://localhost:5000/project-email", values)
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
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
            <img src={img3} alt="" />
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
