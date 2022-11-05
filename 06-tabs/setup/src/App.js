import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
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

  return <h2>tabs project setup</h2>;
}

export default App;
