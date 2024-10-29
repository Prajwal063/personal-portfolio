import React from "react";

const SkillCard = ({ title, skills, images }) => {
  return (
    <div data-aos="zoom-in" className="flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg m-5">
      <div className="bg-white-200 w-64 h-64 p-1 m-1 text-[1.1rem] text-justify break-words overflow-auto">
        <h1>{title}</h1>
        {skills.map((skill, index) => (
          <div key={index} className="text-[.8rem] text-justify break-words m-2 p-2 bg-blue-200 rounded -md shadow -lg inline-block">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = ['Java', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'LaTeX'];
  const backendSkills = ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 'Mongoose', 'Bootstrap', 'Tailwind', 'RESTEasy'];
  const databaseSkills = ['MySQL', 'MongoDB', 'PostgreSQL', 'MSSQL', 'Firebase'];
  const devopsSkills = ['Github', 'Gitlab', 'Git', 'GitHub Actions', 'Jenkins', 'CI/CD', 'Maven', 'REST APIs', 'Soap UI', 'Postman'];

  const images = {
    java: "/assets/java.png",
    javascript: "/assets/javascript.png",
    mysql: "/assets/mysql.png",
    nodejs: "/assets/nodejs.png",
    spring: "/assets/spring.png",
    tailwind_css: "/assets/tailwind_css.png",
    git: "/assets/git.png",
    mongodb: "/assets/mongodb.png",
    resteasy: "/assets/resteasy.png",
    firebase: "/assets/firebase.png",
    postgresql: "/assets/postgresql.png",
    express: "/assets/express.png",
    cshrap: "/assets/cshrap.png",
    react: "/assets/react.png",
    typescript: "/assets/typescript.png",
    html: "/assets/html.png",
    nextjs: "/assets/nextjs.png",
    jenkins: "/assets/jenkins-original.svg"
  };

  return (
    <div id="skills">
      <div className="container m-auto mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-700 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[100%] bg-gray-300 block sm:w-[100%]"></span>
        </div>

        {/* content*/}
        <div className="md:flex-col left flex-1 flex items-center justify-center">
          {/* skill cards */}
          <SkillCard title="Languages" skills={frontendSkills} images={images} />
          <SkillCard title="Libraries" skills={backendSkills} images={images} />
          <SkillCard title="Database" skills={databaseSkills} images={images} />
          <SkillCard title="Others" skills={devopsSkills} images={images} />
        </div>

        {/* icons */}
        <div data-aos="zoom-in" className="container m-5% mt-8 gap-8 md:gap-6 items-center justify-center">
          <div className="flex-wrap flex space-x-8 md:space-x-5 p-10 items-center justify-center sm:space-x-3 sm:p-0 sm:pb-2">
            {Object.values(images).map((image, index) => (
              <img
                key={index}
                className="w-[40px] h-[40px] md:w-[35px] md:h-[35px] sm:w-[25px] sm:h-[25px]"
                src={image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
