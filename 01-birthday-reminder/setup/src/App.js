import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [birthdayList, SetBirthdayList] = useState(data);

  const handleClear = () => {
    SetBirthdayList([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{birthdayList.length} Birthdays Today</h3>
        <List persons={birthdayList}></List>
        <button onClick={handleClear}>Clear List</button>
      </section>
    </main>
  );
}

export default App;
