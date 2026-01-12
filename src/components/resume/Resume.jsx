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
                Engineered and maintained scalable Java-based microservices using Spring Boot and RESTEasy, integrating JWT-based authentication, cookies, secure session management, and Realex payment services. Designed and implemented secure authentication and user account management workflows, including login, credential updates, and account recovery mechanisms. Built and optimized high-performance RESTful APIs following OOP principles, data structures, algorithms, and industry-standard design patterns to ensure scalability, maintainability, and data integrity.
                </p>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Implemented centralized audit logging, debugging, monitoring, and incident analysis using the ELK stack, Kibana dashboards, QRadar, and AppDynamics for proactive issue detection and SLA compliance across environments. Actively resolved defects and production issues assigned via Jira, performing root cause analysis, applying timely fixes, and validating solutions through regression testing within defined SLAs. Supported post-deployment hyper-care, participated in incident triage and hypercalls, and collaborated with support teams using ServiceNow to stabilize critical services and handle blocked user investigations.
                </p>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Ensured high-quality and secure code through extensive unit testing with JUnit and Mockito, achieving over 95% code quality using SonarQube, improving test coverage and overall code reliability. Streamlined CI/CD pipelines using Jenkins, GitHub Actions, Docker, and Kubernetes, reducing downtime by 30% and improving deployment efficiency by 15%. Integrated Redis caching to optimize performance, reducing application latency by 25%. Reviewed and validated 100+ pull requests, enforcing coding standards, security best practices, and backend stability for 3M+ users. Collaborated closely with cross-functional teams to align backend services with frontend requirements, enabling early releases and increased platform adoption.
                </p>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                <strong> Key Accomplishments:</strong>
                  <p className=" text-[.9rem] text-justify break-words text-gray-500">
                 Engineered high-performance RESTful APIs, reducing data retrieval time by 40%. Decomposed a complex user journey into 10+ microservices, improving scalability by 50%, flexibility by 30%, and maintainability by 40%.Achieved and maintained 95%+ code quality through continuous static analysis and testing. Resolved critical production defects during hyper-care, ensuring service continuity under tight deadlines. Contributed across all phases of the SDLC, delivering stable, revenue-impacting backend solutions.
                  </p>
                </p>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  <strong> Key Skills & Technologies:</strong>
                  <p className=" text-[.9rem] text-justify break-words text-gray-500">
                    Languages & Frameworks: Java, Spring Boot, RESTEasy, SQL, Data Structures & Algorithms
                    <p className=" text-[.9rem] text-justify break-words text-gray-500"></p>
                    Tools & Technologies: Git, GitHub Actions, GitLab, Jenkins, Maven, Docker, Kubernetes, JUnit, Mockito, SonarQube, ELK Stack, Kibana, QRadar, AppDynamics, Postman, ServiceNow, Linux, AIX
                    <p className=" text-[.9rem] text-justify break-words text-gray-500"></p>
                    Cloud Platforms & Architecture: Microservices Architecture, Monolithic Systems, AWS
                    <p className=" text-[.9rem] text-justify break-words text-gray-500"></p>
                    Databases: MySQL, MongoDB, PostgreSQL
                    <p className=" text-[.9rem] text-justify break-words text-gray-500"></p>
                    Methodologies: Agile, SDLC, CI/CD, Application Resiliency, Security Best Practices, System Design
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


