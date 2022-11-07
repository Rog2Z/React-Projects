import React, { useState, useEffect } from "react";
import Resume from "./Resume";
import Tabs from "./Tabs";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  useEffect(async () => {
    const response = await fetch(url);
    const resumes = await response.json();
    if (response.status === 200) {
      console.log(resumes);
    }
  }, []);

  return (
    <>
      <div className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="job-center">
          <Tabs></Tabs>
          <Resume></Resume>
        </div>
      </div>
    </>
  );
}

export default App;
