import React, { useState } from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import scroll from "../../public/assets/scroll.png"

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  // function toggleDarkMode() {
  //   setDarkMode((prevDarkMode) => !prevDarkMode);
  // }

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <>
    
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Resume/>
      <Contact/>
      <Footer/>
      <div className="fixed bottom-4 right-4">

        {/*Button for dark and light mode*/}
        {/* <button
          onClick={toggleDarkMode}
          className={`bg-${darkMode ? 'gray-800' : 'white'} text-${darkMode ? 'white' : 'gray-800'} px-3 py-2 rounded-full`}>
          {darkMode ? 'Dark' : 'Light'}
        </button> */}

        <button 
          onClick={scrollToTop}
          className="px-0 py-2 rounded-full">
          <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src={scroll}
            />
        </button>


      </div>
    </>
  );
};

export default Home;
