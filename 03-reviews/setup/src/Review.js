import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ review, changeReview, randomise }) => {
  const { name, image, job, text } = review;

  return (
    <div className="review">
      <div className="img-container ">
        <img className="person-img" src={image} alt={name}></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <p className="author"> {name} </p>
      <p className="job">{job}</p>
      <p className="info"> {text} </p>
      <button className="next-btn" onClick={() => changeReview(-1)}>
        <FaChevronLeft />
      </button>
      <button className="prev-btn" onClick={() => changeReview(1)}>
        <FaChevronRight />
      </button>
      <div>
        <button className="random-btn" onClick={() => randomise()}>
          I feel lucky
        </button>
      </div>
    </div>
  );
};

export default Review;
