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
  Driven by a strong foundation in backend engineering and system design, I specialize in building scalable microservices using Java, Spring Boot, and RESTEasy for enterprise-grade platforms. At TCS, I’ve worked on secure authentication and user account journeys including login, credential updates, and account recovery, integrating JWT-based security, secure session management, and payment services. I have strong experience with Docker and Kubernetes for containerized deployments and have built and maintained CI/CD pipelines using Jenkins to enable reliable, automated, and efficient releases. I write comprehensive JUnit and Mockito test cases, ensuring high code quality, test coverage, and long-term production stability. I actively implement logging, monitoring, and incident analysis using the ELK stack, Kibana, and AppDynamics, supporting proactive troubleshooting in live, high-traffic environments. With a solid foundation in data structures, algorithms, and system design, I enjoy solving complex backend problems. I thrive in Agile teams, collaborating closely with cross-functional stakeholders to deliver secure, maintainable, and high-impact solutions, and I’m excited to contribute to challenging backend systems at scale.
        </p>
      </div>
      
    </div>
  )
}

export default about