import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const name = event.target.name.value;
    const message = event.target.message.value;

    const mailtoLink = `mailto:prajwalpr2@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0D%0AFrom: ${email}`;

    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="container m-auto mt-10">
      {/* heading */}
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-700 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[100%] bg-gray-300 block"></span>
      </div>

      {/* card */}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end flex-col sm:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="text-5xl font-bold sm:text-3xl sm:mb-2 md:text-4xl md:mb-5">Get in touch</h1>
              <h3 className="text-xl sm:text-lg md:text-lg">
                For any questions or collaborations.
              </h3>
            </div>
          </div>
          <div className="flex p-5 items-center justify-center">
            <div
              data-aos="zoom-in"
              className="text-blue-500 font-extrabold text-4xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]"
            >
              <BsArrowRight className="sm:rotate-90" />
            </div>
          </div>
        </div>
        <div className="right flex-1">
          <form
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <label className="text-sm font-semibold" htmlFor="email">Your Email</label>
              <input
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full mt-1"
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-semibold" htmlFor="name">Your Name</label>
              <input
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full mt-1"
                type="text"
                name="name"
                placeholder="John"
                required
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-semibold" htmlFor="message">Your Message</label>
              <textarea
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full mt-1"
                rows="4"
                cols="50"
                name="message"
                placeholder="Write your message"
                required
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-800 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
