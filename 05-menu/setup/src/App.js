import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
console.log(items[0]);
function App() {
  return (
    <section>
      <Menu {...items[0]}></Menu>
    </section>
  );
}

export default App;
