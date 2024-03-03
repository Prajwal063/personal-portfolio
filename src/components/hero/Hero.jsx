import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../../public/assets/Resume.pdf";
import image from "../../../public/assets/imagePortfolio.png"
import { SiGmail } from "react-icons/si";


const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-purple-100 to-blue-300 `}>
      <div className=" container pt-5 h-[780px] md:h-[100vh] md:flex-col-reverse sm:h-[750px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem] md:mt-10 sm:m-0"
            >
              Hello, I'm Prajwal P.
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Full Stack Developer", 2000, "Web Developer", 2000, "Software Developer", 2000,]}
              speed={45}
              wrapper="h2"
              repeat={Infinity}
              className="text-blue-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-4/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Systems Engineer, C1 at Tata Consultancy Services.
            </p>
            
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            {/* <a
              href=""
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-blue-500"
            >
              <span> example </span>
            </a> */}
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] text-white bg-black border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-blue-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/Prajwal063">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/prajwal-p-26251a1b8/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="mailto:prajwalpr2@gmail.com">
                  {" "}
                  <SiGmail className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[78%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className="h-[80%] w-full object-none md:h-[100%] md:m-0 sm:m-0 rounded-lg shadow-lg border-0"
              src={image}
              alt="mine"
              style={{borderRadius: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
