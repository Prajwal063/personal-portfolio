import React from "react";

import { qualifications, education } from "../../data/data";

const Resume = () => {
  return (
    <div id="qualification" className="container m-0 mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-700 sm:text-2xl">
          Qualification
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[100%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="pt-5 card-wrapper w-[95%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[75%] p-5 py-8 sm:py-8 sm:w-full sm:p-2">
          
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500 ">
              Experience
            </legend>

            <div className="relative">
              <div className="flex absolute left-[-320px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] "></div>

              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)]    p-3 rounded-lg m-0 mb-6 ">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Systems Engineer, C1.
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Tata Consultancy Services.
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  June 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Specializing in full-stack development and RESTful services. I bring extensive expertise in developing Java REST APIs from scratch, applying SDLC and Agile methodologies, and prioritizing code optimization to boost system efficiency. Proficient in Eclipse, Linux, AIX, Soap UI, SQL Developer, and Putty. Skilled in Java programming, Data Structures, Object-Oriented Programming (OOP) principles, MySQL, and MS SQL databases. Currently advancing my proficiency with Angular JS to broaden my technical capabilities and stay at the forefront of industry trends.
                </p>
              </div>

              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)]    p-3 rounded-lg m-0 mb-6">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Full Stack Developer.
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                CosmicTech.io
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  November 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Designed and developed responsive user interface from scratch using NextJS, Tailwind CSS, and JavaScript. Currently, working on backend development of the project. Regularly adapting and working according to client requirements, optimizing image and content loading times for enhanced performance. Continuously learning new features in NextJS and staying updated on emerging technologies.
                </p>
              </div>

              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-0 mb-6">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Developer Intern.
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Kennametal India Limited. 
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  August 2022 - September 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Worked on C# console application for collecting and analyzing license usage data, stored in a Microsoft Access database linked to Power BI. Automated to run every 60 minutes, improving license utilization by 94% across 67 licenses. Utilized C#, .NET framework, Text Mining, Regex functions, Task Scheduling, Batch programming, and VBScript. Experienced in time management, adapting to new technologies, and on-site internship.
                </p>
              </div>

              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-0 mb-6">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack Developer Intern.
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Exposys Data Labs. 
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  October 2022 - December 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Engaged in building a full-stack movie review application using Java and Spring Boot for the backend, React for the frontend, and MongoDB for the database. Handled critical aspects including endpoint creation, configuration management, dependency handling, environment variable setup, testing, and frontend development. Gain expertise in Java frameworks, server-side operations, and problem-solving during the first internship.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      
        <div className="right flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-8 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500">
              Education
            </legend>
            <div className=" relative">
              <div className="pt-5 design flex absolute left-[-120px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] "> 
              </div>
              <div className=" flex flex-col gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-0 mb-6">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.E, Computer Science and Engineering.
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  JSS Academy of Technical Education, Bengaluru.
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  2019 - 2023 |  CGPA : 8.45
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Recent graduate holding a Bachelor's in Computer Science and Engineering from JSS Academy of Technical Education, Bengaluru, with a CGPA of 8.45. Proficient in a variety of technologies including ReactJS, NextJS, NodeJS, ExpressJS, and MongoDB. Possesses advanced skills in Java, C#, JavaScript, and Python, with hands-on experience in frameworks such as Express, .NET, and Spring. Demonstrates a solid understanding of Data Structures, Algorithms, and Object-Oriented Programming principles.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

    </div>
  );
};

export default Resume;


