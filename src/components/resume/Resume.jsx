import React from "react";

const Resume = () => {
  return (
    <div id="qualification" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Qualification
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[95%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[75%] p-5 py-12 sm:py-8 sm:w-full sm:p-2">
          
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500 ">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-320px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                {/* <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[600px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div> */}
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-4">
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
                Currently employed at Tata Consultancy Services as a C1 Systems Engineer, specializing in website and mobile application planning and development. Maintained and updated 24 critical applications including databases, Elastic Search, and Chatbot, resulting in a 97% improvement in User Experience, while reducing webchat query wait times to under 10 seconds. Proficient in Linux, AIX, Soap UI, SQL Developer, Excel, Putty, and FileZilla. Utilized Java, OOP, and SQL for programming and optimization. Currently expanding skill set with Angular framework.
                </p>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-4">
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
                  Developed a C# console application for collecting and analyzing license usage data, stored in a Microsoft Access database linked to Power BI. Automated to run every 60 minutes, improving license utilization by 94% across 67 licenses. Utilized C#, .NET framework, Text Mining, Regex functions, Task Scheduling, Batch programming, and VBScript. Experienced in time management, adapting to new technologies, and on-site internship.
                </p>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-4">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack Developer Intern.
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Exposys Data Labs. 
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  September 2022 - Novemeber 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Developed a full-stack movie review application using Java and Spring Boot for the backend, React for the frontend, and MongoDB for the database. Managed critical aspects including endpoint creation, configuration management, dependency handling, environment variable setup, testing, and frontend development. Gain expertise in Java frameworks, server-side operations, and problem-solving during the first internship.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-120px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                {/* <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div> */}
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-5">
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

// As a recent graduate with a Bachelor's degree in Computer Science and Engineering from JSS Academy of Technical Education, Bengaluru, I am driven by a strong passion for software development. Specializing in object-oriented programming languages such as Java and C#, alongside a keen interest in web development, I am committed to continuous learning and strive to devise innovative solutions. With a dedicated work ethic and a focus on personal and professional growth, I have consistently achieved success.

// Proficient in backend technologies including Node.js, Express.js, and MongoDB, I possess a diverse skill set. I excel in programming languages such as Java, C#, JavaScript, and Python, and have experience with frameworks such as Express, .NET, and Spring. Additionally, I have a solid understanding of Data Structures and Algorithms and am well-versed in Object-Oriented Programming concepts.
