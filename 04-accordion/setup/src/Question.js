import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const { title, info } = question;
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="question" style={{ background: "white" }}>
      <div>
        <header>
          <h4> {title} </h4>
          <button onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showAnswer ? <p> {info} </p> : ""}
      </div>
    </div>
  );
};

export default Question;
