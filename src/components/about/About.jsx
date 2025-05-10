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
  With years of experience as a back-end developer, I specialize in building scalable microservices using Java, Spring Boot, and RESTEasy. I have solid experience with Docker and Kubernetes, enabling efficient deployment solutions. Skilled in setting up CI/CD pipelines with Jenkins, I ensure smooth software updates. I write detailed JUnit test cases to maintain application stability and reliability. I also implement logging and monitoring solutions using the ELK stack to enhance observability and support proactive troubleshooting across environments. Passionate about continuous learning, I stay updated with industry trends and leverage my strong knowledge of data structures and algorithms to solve problems creatively. I thrive in Agile environments, delivering maintainable, high-quality code, and collaborating with cross-functional teams to achieve project goals. I’m open to new opportunities and excited to contribute to impactful projects. Let’s connect and make a difference together!
        </p>
      </div>
      
    </div>
  )
}

export default about