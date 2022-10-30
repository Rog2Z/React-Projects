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
            <section className="info">
              {data.map((question) => {
                return (
                  <SingleQuestion
                    key={question.id}
                    {...question}
                    // {... question!!!!}
                  ></SingleQuestion>
                );
              })}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
