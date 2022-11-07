import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const Resume = () => {
  return (
    <>
      <div className="job-info">
        <h3> Full Stack Web Developer</h3>
        <h4> Tommy </h4>
      </div>
      <div className="job-date"> December 2015 - Present </div>
      <div className="job-desc">
        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
        <p>
          {" "}
          Packed the bags and cleaned the room. For Meditation, Rambocous
          chicken litter project hello I am testing{" "}
        </p>
      </div>
    </>
  );
};

export default Resume;
