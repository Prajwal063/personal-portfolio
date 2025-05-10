import React from "react";

import { qualifications, education } from "../../data/data";

const Resume = () => {
  return (
    <div id="qualification" className="container m-auto mt-16">
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
                Engineered a microservice architecture, integrating Realex payment services, JWT authentication, and cookies for session management. Implemented audit logging and debugging for troubleshooting using the ELK stack for log aggregation and analysis across all environments, documenting services with Swagger. Ensured high-quality code through unit testing with JUnit and Mockito, writing secure, optimized code to improve performance and integrity. Applied design patterns to enhance system design and maintainability. Streamlined deployment with Docker and Kubernetes, reducing downtime by 30% and increasing efficiency by 15%. Integrated Redis caching, reducing latency by 25%. Leveraged version control tools to manage code effectively. Collaborated with cross-functional teams, demonstrating strong communication skills to align backend with frontend, enabling early platform launches and boosting adoption.
                </p>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Streamlined deployment with Docker and Kubernetes, reducing downtime by 30% and increasing efficiency by 15%. Integrated Redis caching, reducing latency by 25%. Leveraged version control tools to manage code effectively. Collaborated with cross-functional teams, demonstrating strong communication skills to align backend with frontend, enabling early platform launches and boosting adoption.
                </p>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                <strong> Key Accomplishments:</strong>
                  <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Engineered high-performance RESTful APIs, reducing data retrieval time by 40%. Decomposed a complex user journey into 10+ microservices, improving scalability by 50%, flexibility by 30%, and maintainability by 40%. Achieved over 95% code quality with SonarQube for continuous improvement. Contributed across all SDLC phases, delivering high-quality solutions under tight deadlines, driving revenue growth. Supported post-deployment hyper-care, resolved critical defects, and reviewed over 100 pull requests to ensure service stability for 3 million+ users.
                  </p>
                </p>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  <strong> Key Skills & Technologies:</strong>
                  <p className=" text-[.9rem] text-justify break-words text-gray-500">
                    Languages & Frameworks: Java, Spring Boot, SQL, RESTEasy, Data Structures & Algorithms
                    <p className=" text-[.9rem] text-justify break-words text-gray-500"></p>
                    Tools & Technologies: Git, Guthub Actions, Gitlab JUnit, Mockito, Docker, Kubernetes, Jenkins, Maven, ELK stack, Postman, Linux, AIX
                    <p className=" text-[.9rem] text-justify break-words text-gray-500"></p>
                    Cloud Platforms & Architecture: AWS, Microservices, Monolithic
                    <p className=" text-[.9rem] text-justify break-words text-gray-500"></p>
                    Databases: MySQL, MongoDB, PostgreSQL
                    <p className=" text-[.9rem] text-justify break-words text-gray-500"></p>
                    Methodologies: Agile, SDLC, CI/CD, Application Resiliency, Security, System Design
                  </p>
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
                  November 2023 - June 2024
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Designed responsive UIs using Next.js, Tailwind CSS, and JavaScript. Used Git for version control and conducted code reviews for high code quality. Involved in enhancing backend development for project functionality. Regularly adapting and working according to client requirements, optimizing image and content loading times for enhanced performance. Actively pursuing knowledge of new features and current with emerging technologies.
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
                Created a full-stack movie review platform utilizing Java, Spring Framework, React.js, and MongoDB. Oversaw endpoint creation, configuration management, dependency handling, and environment variable setup. Gained expertise in various Java frameworks, server-side operations, client-server inter-process communication, advanced problem-solving, code review, and software development best practices.
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
                Developed a C# console application to collect and analyze license usage data in AccessDB, enhancing utilization by 98%. Implemented an automated server solution running every 60 minutes, optimizing license management.    Expertise in crafting and reviewing code using C#, .NET, text mining, regular expressions (Regex), Task Scheduling, Batch Programming, and VBScript.
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
                Graduate holding a Bachelor's in Computer Science and Engineering from JSS Academy of Technical Education, Bengaluru, with a CGPA of 8.45. Proficient in a variety of technologies including ReactJS, NextJS, NodeJS, ExpressJS, and MongoDB. Possesses advanced skills in Java, C#, JavaScript, and Python, with hands-on experience in frameworks such as Express, .NET, and Spring. Demonstrates a solid understanding of Data Structures, Algorithms, and Object-Oriented Programming principles.
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


