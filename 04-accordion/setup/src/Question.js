import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <article className="question" style={{ background: "white" }}>
      <div>
        <header>
          <h4> {title} </h4>
          <button onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showAnswer ? <p> {info} </p> : ""}
      </div>
    </article>
  );
};

export default Question;
