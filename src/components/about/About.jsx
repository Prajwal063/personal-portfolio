import React from 'react'

const about = () => {
  return (
    <div id="about" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">About</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          A Bachelor's degree graduate in Computer Science and Engineering from JSS Academy of Technical Education, Bengaluru, I am driven by a strong passion for software development. Specializing in object-oriented programming languages such as Java, Javascript, Python and C#, alongside a keen interest in web development, I am committed to continuous learning and strive to devise innovative solutions. With a dedicated work ethic and a focus on personal and professional growth, I have consistently achieved success. Proficiency in technologies like ReactJS, NextJS, NodeJS, ExpressJS, and MongoDB. I possess a diverse skill set. Additionally, I have a solid understanding of Data Structures and Algorithms and well-versed in Object-Oriented Programming concepts.
        </p>
      </div>
      
    </div>
  )
}

export default about