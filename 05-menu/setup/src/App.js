import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { ALL } from "./const";
console.log(items[0]);

function App() {
  const [category, setCategory] = useState(ALL);
  return (
    <section className="menu">
      <h3 className="title"> Our Menu </h3>
      <div className="underline"></div>
      <Categories setCategory={setCategory}></Categories>
      {items.map((item) => {
        if (item && (category === ALL || item.category === category)) {
          return <Menu key={item.id} {...item}></Menu>;
        }
        return "";
      })}
    </section>
  );
}

export default App;
