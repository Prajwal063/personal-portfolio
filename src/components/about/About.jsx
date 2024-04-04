import React from 'react'

const about = () => {
  return (
    <div id="about" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">About</h3>
        <span className="h-[1.1px] right-0 absolute w-[100%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
  <p className="flex justify-content:normal text-gray-700 font-medium w-full sm:text-sm-center md:text-md-center text-justify">
          Versatile and motivated Computer Science and Engineering graduate with a passion for crafting exceptional websites. Eager to leverage strong technical skills and a commitment to lifelong learning in a dynamic work environment. Proven adaptability to new technologies and deliver innovative solutions. Committed to excellence in web development and driven to contribute positively to challenging projects. Proficient in Data Structures and Algorithms, with a strong grasp of Object-Oriented Programming principles and applying these concepts to develop robust and efficient solutions.
        </p>
      </div>
      
    </div>
  )
}

export default about