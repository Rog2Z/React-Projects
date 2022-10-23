import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ review, changeReview }) => {
  const { name, image, job, text } = review;

  return (
    <div className="review">
      <div className="img-container ">
        <img className="person-img" src={image}></img>
        <div className="quote-icon">"</div>
      </div>
      <p className="author"> {name} </p>
      <p className="job">{job}</p>
      <p className="info"> {text} </p>
      <button className="next-btn" onClick={() => changeReview(-1)}>
        &lt;
      </button>
      <button className="prev-btn" onClick={() => changeReview(1)}>
        &gt;
      </button>
      <button className="random-btn"> I feel lucky</button>
    </div>
  );
};

export default Review;
