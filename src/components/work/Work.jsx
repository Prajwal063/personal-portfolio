import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Work = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(data.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = [...data].reverse().slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollToWorks();
  };

  const scrollToWorks = () => {
    const worksElement = document.getElementById("works");
    if (window.innerWidth <= 640 && worksElement) {
      worksElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const paginationButtons = Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => handlePageChange(index + 1)}
      className={`px-3 py-1 mx-1 bg-gray-200 rounded-md ${currentPage === index + 1 ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
    >
      {index + 1}
    </button>
  ));

  return (
    <div id="works" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-700 sm:text-2xl">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[100%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p data-aos="fade-up" className="text-gray-700 font-medium w-[100%]">
          Here are some of my works.
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-fit md:w-fit mt-5">
        <div className="card-box grid grid-cols-3 space-y-2 space-x-2 gap-10 w-full md:gap-8 md:grid-cols-1 sm:gap-8 sm:grid-cols-1 sm:space-y-0 md:space-y-0">
          {currentCards.map((data) => (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="flex flex-col justify-center items-center gap-2"
            >
              <POPUP className="img-content relative">
                <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="object-fit hover:scale-125 transition duration-500 cursor-pointer h-full w-full object-cover"
                  />
                </div>
                <div
                  className={`popup w-full h-[280px] shadow-xl rounded-md overflow-auto sm:h-[260px] sm:w-[92%] p-1`}
                >
                  <p className="text-black text-base leading-[1.2] text-justify w-[90%] md:leading-[1] sm:leading-[1]">
                    {data.desc}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Link
                      to={data.link}
                      target="_blank"
                      className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                    >
                      <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                      <p className="text-black">Demo</p>
                    </Link>
                    <br className="w-[2px] bg-white" />
                    <Link
                      to={data.git}
                      target="_blank"
                      className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                    >
                      <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                      <p className="text-black">Code</p>
                    </Link>
                  </div>
                </div>
              </POPUP>
              <p className="text-gray-800 text-xl font-medium sm:text-lg">
                {data.title}
              </p>
            </div>
          ))}
        </div>
        <div className="center mt-8">{paginationButtons}</div>
      </div>
    </div>
  );
};

export default Work;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0; 
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
