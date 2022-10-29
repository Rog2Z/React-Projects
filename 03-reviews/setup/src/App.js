import React, { useState } from "react";
import Review from "./Review";
import reviews from "./data";
console.log("from app", reviews[0]);

function App() {
  const [currReview, setCurrReview] = useState(0);
  const revLength = reviews.length;

  const changeReview = (incrementBy) => {
    // CurrReview is a number....
    setCurrReview((currReview) => {
      let calRev = currReview + incrementBy;
      calRev = calRev === -1 ? revLength - 1 : calRev;
      calRev = calRev === revLength ? 0 : calRev;
      return calRev;
    });
  };
  return (
    <main className="container">
      <Review review={reviews[currReview]} changeReview={changeReview}></Review>
    </main>
  );
}

export default App;
