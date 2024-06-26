import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = reversedData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(data.length / cardsPerPage);

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

  return (
    <>
      {currentCards.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col justify-center items-center gap-2"
          >
            <POPUP className="img-content relative">
              <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                <img
                  src={data.img}
                  alt={data.title}
                  className=" object-fit hover:scale-125 transition duration-500 cursor-pointer h-full w-full object-cover"
                />
              </div>

              <div
                className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-auto sm:h-[260px] sm:w-[92%] p-1`}
              >
                <p className=" text-black text-base leading-[1.2] text-justify w-[90%] md:leading-[1] sm:leading-[1]">
                  {data.desc}
                </p>
                <div className=" flex items-center justify-center gap-4">
                  <Link
                    to={data.link}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Demo</p>
                  </Link>
                  <br className="w-[2px] bg-white" />
                  <Link
                    to={data.git}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Code</p>
                  </Link>
                </div>
              </div>
            </POPUP>
            <p className="text-gray-800 text-xl font-medium sm:text-lg">
              {data.title}
            </p>
          </div>
        );
      })}



{/* functional but not center buttons */}
      {/* Pagination */}
      <div className="mt-4 center">
        <div className="center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 mx-1 bg-gray-200 rounded-md grid-cols-2 justify-center ${
                currentPage === index + 1 ? "bg-gray-500" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkCard;

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
