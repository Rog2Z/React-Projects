import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <>
      <div className="section">
        <main>
          <div className="container">
            <h3 class="item">Questions and Answers about Login</h3>
            <div>
              {data.map((question) => {
                console.log(question);
                return (
                  <SingleQuestion
                    key={question.id}
                    question={question}
                  ></SingleQuestion>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
