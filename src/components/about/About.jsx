import React from 'react'

const about = () => {
  return (
    <div id="about" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-700 sm:text-2xl">Professional Summary</h3>
        <span className="h-[1.1px] right-0 absolute w-[100%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
  <p className="flex justify-content:normal text-gray-700 font-medium w-full sm:text-sm-center md:text-md-center text-justify">
  Full-stack developer with 1+ year of experience specializing in Java, RESTEasy, SQL, JavaScript, and object-oriented programming (OOP) principles. Developed websites that solve real-world problems through effective frontend development and backend integration. Hands-on experience in building RESTful services and API design, as well as developing robust microservices for scalability within SDLC projects and Agile methodologies. Proficient in CI/CD pipeline implementation with Jenkins to automate deployments, consistently achieving 95% code quality as measured by SonarQube. Demonstrated expertise in frontend and backend development, ensuring seamless integration, responsive design, and optimal performance. Proven adaptability to new technologies and frameworks.
        </p>
      </div>
      
    </div>
  )
}

export default about