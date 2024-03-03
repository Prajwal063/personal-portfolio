import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn, FaPhoneAlt  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[250px]  mt-16 sm:h-[250px]">
      <div className=" bg-gradient-to-r from-purple-100 to-blue-300 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className=" font-bold text-4xl sm:text-2xl">
          Let's Talk
        </h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="tel:+91 9535771654"
            className="box font-small text-black  flex items-center justify-center flex-col">
            <FaPhoneAlt className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Phone</p>
          </a>

          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://api.whatsapp.com/send?phone=9535771654"
            className="box font-small text-black  flex items-center justify-center flex-col">
              <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
                <p>WhatsApp</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1600"
            href="https://www.instagram.com/prajwalp06/?igsh=MW8ydXgwZjR6aTNheg%3D%3D"
            className="box font-small text-black  flex items-center justify-center flex-col">
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>

          <a
            data-aos="fade-up"
            data-aos-duration="1800"
            href="https://www.linkedin.com/in/prajwal-p-26251a1b8/"
            className="box font-small text-black  flex items-center justify-center flex-col">
            <FaLinkedinIn className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </a>

          <a
            data-aos="fade-up"
            data-aos-duration="2000"
            href="mailto:prajwalpr2@gmail.com"
            className="box font-small text-black  flex items-center justify-center flex-col">
            <SiGmail className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Gmail</p>
          </a>

        </div>

        <div className="sm:text-[8px] text-gray-600">
          | Copyright &copy; <span>Prajwal Portfolio </span>  ©️ All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
