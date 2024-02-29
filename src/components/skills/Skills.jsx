import React from "react";
import vuetify from "../../../public/assets/vuetify.png";
import java from "../../../public/assets/java.png";
import javascript from "../../../public/assets/javascript.png";
import materialui from "../../../public/assets/materialui.png";
import mysql from "../../../public/assets/mysql.png";
import nodejs from "../../../public/assets/nodejs.png";
import oracle from "../../../public/assets/oracle.png";
import spring from "../../../public/assets/spring.png";
import tailwind_css from "../../../public/assets/tailwind_css.png";
import git from "../../../public/assets/git.png";
import mongodb from "../../../public/assets/mongodb.png";
import docker from "../../../public/assets/docker.png";
import firebase from "../../../public/assets/firebase.png";
import postgresql from "../../../public/assets/postgresql.png";
import express from "../../../public/assets/express.png";
import cshrap from "../../../public/assets/cshrap.png";
import react from "../../../public/assets/react.png";
import typescript from "../../../public/assets/typescript.png";
import css from "../../../public/assets/css.png";
import html from "../../../public/assets/html.png";
import nextjs from "../../../public/assets/nextjs.png";


import WorkCard from "../../chip/WorkCard";


import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const frontend = ['HTML','CSS','Tailwind','Javascript','ReactJS','NextJS','Bootstrap'];
const backend = ['Java', 'C#', '.NET', 'Node Js', 'Express Js', 'SpringBoot'];
const database = ['MySql', 'MongoDB', 'PostgreSQL', 'Firebase', 'Elastic Search'];
const devops = ['Github', 'Gitlab', 'Docker','GIT','AWS',];


const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>

        {/* content*/}

        {/* first div */}
        <div className="flex md:flex-col left flex-1 flex items-center justify-center"> 

          {/* bg margin */} {/* div boxes */}
          <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-5 "> 

            {/* h1 div */}
            <div className="bg-white-200 w-64 h-64 p-2 m-0 text-[1.1rem] text-justify break-words overflow-auto ">
              <h1>Frontend</h1>
                {frontend.map((item, index) => (
                  <div key={index} className="text-[.9rem] text-justify break-words m-2 p-2 bg-blue-200 rounded -md shadow -lg inline-block">
                    {item}
                  </div>
                ))}
            </div>
          </div> 

          <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-5"> 
          <div className="bg-white-200 w-64 h-64 p-2 m-0 text-[1.1rem] text-justify break-words overflow-auto ">
              <h1>Backend</h1>
                {backend.map((item, index) => (
                  <div key={index} className="text-[.9rem] text-justify break-words m-2 p-2 bg-blue-200 rounded -md shadow -lg inline-block">
                    {item}
                  </div>
                ))}
            </div>
          </div>  

          <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-5">
          <div className="bg-white-200 w-64 h-64 p-2 m-0 text-[1.1rem] text-justify break-words overflow-auto">
              <h1>Database</h1>
                {database.map((item, index) => (
                  <div key={index} className="text-[.9rem] text-justify break-words m-2 p-2 bg-blue-200 rounded -md shadow -lg inline-block">
                    {item}
                  </div>
                ))}
            </div>
          </div>

          <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-5">
            <div className="bg-white-200 w-64 h-64 p-2 m-0 text-[1.1rem] text-justify break-words overflow-auto">
              <h1>Devops</h1>
                {devops.map((item, index) => (
                  <div key={index} className="text-[.9rem] text-justify break-words m-2 p-2 bg-blue-200 rounded -md shadow -lg inline-block">
                    {item}
                  </div>
                ))}
            </div>
          </div>     
        </div>

        {/* icons */}
        <div
          // data-aos="fade-up"
          // data-aos-duration="1200"
          className="container m-auto items-center justify-center mt-8 gap-8 md:gap-6 items-center justify-center"
        >
          <div className="flex-wrap flex space-x-8 md:space-x-5 animate-move-right-to-left p-10 items-center justify-center animate-bounce">
          <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={html}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={css}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={javascript}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={typescript}
            />

            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={java}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={cshrap}
            />

            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={git}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={docker}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={mysql}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={mongodb}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={nodejs}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={express}
            />

            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={oracle}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={firebase}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={spring}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={react}
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={nextjs}
            />       
            <img
              className="w-[40px] h-[35px] md:w-[35px] md:h-[35px]"
              src={tailwind_css}
            />

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
