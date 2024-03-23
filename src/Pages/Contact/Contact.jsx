import { Link } from "react-router-dom";
import imgLoad from "../../assets/loading.gif";
import img1 from "../../assets/cube.webp";
import img2 from "../../assets/contact/contact.webp";
import img3 from "../../assets/contact/contact.png";
import img4 from "../../assets/contact/group298.png";
import img5 from "../../assets/footer/group.png";
import img6 from "../../assets/footer/group1.png";
import img7 from "../../assets/footer/group2.png";
import "./Contact.css";
import { Helmet } from "react-helmet";
import { animateScroll } from "react-scroll";
import { Formik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import HeaderBG from "../Header/HeaderBG";

const Contact = () => {
  animateScroll.scrollToTop();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate async loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time

    return () => clearTimeout(timer);
  }, []);
  if (loading)
    return (
      <div className="w-full py-[15rem]">
        <img className="mx-auto" src={imgLoad} alt="" />
      </div>
    );
  else
    return (
      <div className="relative">
        <Helmet>
          <title>
            Microbuddy | Contact Us for Help & Office Location Guidance
          </title>
          <meta
            name="description"
            content="Microbuddy is here to help. Discover our office locations and different ways to contact us so that we can provide you with the support you need."
          />
        </Helmet>
        <Link to={"https://www.google.com/"}>
          <div className="bg-[#000000] w-full absolute bottom-[5rem] md:bottom-[7rem] lg:bottom-[0rem]">
            <img className="w-full opacity-[.5] " src={img4} alt="" />
          </div>
        </Link>
        <Helmet>
          <title>Contact</title>
        </Helmet>
        <HeaderBG></HeaderBG>
        <div className="pt-[5rem] lg:max-w-[70rem] lg:mx-auto pb-[18rem] md:pb-[30rem] lg:pb-[50rem] mb-[-10rem] relative">
          <div className="hidden lg:block absolute w-[4rem] right-[-10rem] ">
            <img className="breathe" src={img1} alt="" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-[1rem] lg:mx-[0rem]">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="lg:ms-[5rem]">
              <div className="overflow-hidden">
                <div className="pop-up">
                  <img src={img3} alt="" />
                </div>
              </div>
              <div className=" mt-[-1rem] lg:mt-[-2rem]">
                <div>
                  <h1 className="text-[40px] font-[700] text-[#43D9B3]">
                    CONTACT US
                  </h1>
                  <p className="text-[#00000099]">
                    Get in touch to discuss your employee well-being needs
                    today. Please give us a call, drop us an email, or fill out
                    the contact form and we’ll get back to you.
                  </p>
                </div>

                <div className="flex lg:mt-[2rem]">
                  <div className="p-2 w-[5rem]">
                    <img className="w-[2.75rem]" src={img5} alt="" />
                  </div>
                  <div>
                    <p className="mt-[0.25rem] text-[#666AE5]">Our Phone</p>
                    <p className="mt-[-0.5rem] font-[300]">01894688850</p>
                  </div>
                </div>
                <div className="flex lg:mt-[0.5rem]">
                  <div className="p-2 w-[5rem]">
                    <img className="w-[2.75rem]" src={img6} alt="" />
                  </div>
                  <div>
                    <p className="mt-[0.25rem] text-[#666AE5]">Our Email</p>
                    <p className="mt-[-0.5rem] font-[300]">
                      info@microbuddy.tech
                    </p>
                  </div>
                </div>
                <div className="flex lg:mt-[0.5rem]">
                  <div className="p-1 w-[5rem]">
                    <img className="w-[3rem]" src={img7} alt="" />
                  </div>
                  <div>
                    <p className="mt-[0.25rem] text-[#666AE5]">Our Address</p>
                    <p className="mt-[-0.5rem] font-[300]">
                      House -11, Road - 01, Block - F, Banasree,
                    </p>
                    <p className="mt-[-0.25rem] font-[300]">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values) => {
                axios
                  .post("https://37.60.225.188:8081/email", values)
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
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form
                  className="pt-[3rem] lg:px-[4rem] mx-[0rem] md:mx-[2rem]  mt-[2rem] relative input-box card-body lg:mx-auto border rounded-xl bg-white pb-[5rem]"
                  onSubmit={handleSubmit}
                >
                  <div className="hidden lg:block absolute w-[5rem] md:w-[7rem] top-[-1rem] left-[7rem]">
                    <div className="relative">
                      <img className="breathe" src={img1} alt="" />
                    </div>
                  </div>
                  <img
                    className="block lg:hidden absolute w-[5rem] top-[-1rem] left-[5rem]"
                    src={img1}
                    alt=""
                  />
                  <h1 className="text-center text-3xl text-[#666AE5] font-[600]">
                    How Can We Help?
                  </h1>
                  <p className="text-center text-sm md:text-xl text-[#7A7A7A] md:mb-[2rem]">
                    Write us to request a quote or to schedule a consultation
                    with our team.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="form-control">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className="h-[3.5rem] input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className="h-[3.5rem] input input-bordered"
                      />
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                      className="h-[3.5rem] input input-bordered"
                    />
                  </div>
                  <div>
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Message....."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      className="input input-bordered rounded-xl w-full h-[10rem] mt-[1.75rem]"
                    />
                    <div className=" mt-[1rem] mb-[1.5rem]">
                      <div className="flex justify-center mt-[2rem] mb-[1.5rem] relative">
                        <div className="button-parent ">
                          <div className="contact-button absolute right-[0rem] form-control"></div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="absolute right-[0rem] text-rap button-child"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
            {/*<form
                form
                autoCapitalize="off"
                className="pt-[3rem] lg:px-[4rem] mx-[0rem] md:mx-[2rem]  mt-[2rem] relative input-box card-body lg:mx-auto border rounded-xl bg-white"
              >
                <div className="hidden lg:block absolute w-[5rem] md:w-[7rem] top-[-1rem] left-[7rem]">
                  <div className="relative">
                    <img className="breathe" src={img1} alt="" />
                  </div>
                </div>
                <img
                  className="block lg:hidden absolute w-[5rem] top-[-1rem] left-[5rem]"
                  src={img1}
                  alt=""
                />
                <h1 className="text-center text-3xl text-[#666AE5] font-[600]">
                  How Can We Help?
                </h1>
                <p className="text-center text-sm md:text-xl text-[#7A7A7A] md:mb-[2rem]">
                  Contact us to request a quote or to schedule a consultation
                  with our team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="name"
                      value={values.name}
                      className="h-[3.5rem] input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="h-[3.5rem] input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="text"
                    placeholder="Subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="subject"
                    value={values.subject}
                    className="h-[3.5rem] input input-bordered"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="input input-bordered rounded-xl w-full h-[10rem] mt-[1.75rem]"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="message"
                    value={values.message}
                    placeholder="Message....."
                  ></textarea>
                </div>
                {errors.password && touched.password && errors.password}
                <div className="flex justify-end mt-[1rem] mb-[1.5rem]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact-button py-[0.5rem] px-[3rem] rounded-xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>*/}
          </div>
        </div>
      </div>
    );
};

export default Contact;
