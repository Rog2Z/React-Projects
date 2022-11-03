import React, { useState } from "react";
import Review from "./Review";
import reviews from "./data";
console.log("from app", reviews[0]);

function App() {
  const [currReview, setCurrReview] = useState(0);
  const revLength = reviews.length;

  // Separate funciton
  const checkNumber = (number) => {
    number = number === -1 ? revLength - 1 : number;
    number = number === revLength ? 0 : number;
    return number;
  };
  // This can be at the review level
  const changeReview = (incrementBy) => {
    // CurrReview is a number....
    setCurrReview((currReview) => {
      let calRev = currReview + incrementBy;
      return checkNumber(calRev);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === currReview) {
      randomNumber = currReview + 1;
    }
    setCurrReview(checkNumber(randomNumber));
  };
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review
          review={reviews[currReview]}
          changeReview={changeReview}
          randomise={randomPerson}
        ></Review>
      </section>
    </main>
  );
}

export default App;
