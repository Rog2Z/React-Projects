import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { ALL } from "./const";
console.log(items[0]);

function App() {
  const [category, setCategory] = useState(ALL);
  return (
    <section className="menu section">
      <div>
        <div className="title">
          <h2> Our Menu </h2>
          <div className="underline"></div>
        </div>
      </div>
      <Categories setCategory={setCategory}></Categories>
      <div className="section-center">
        {items.map((item) => {
          if (item && (category === ALL || item.category === category)) {
            return <Menu key={item.id} {...item}></Menu>;
          }
          return null;
        })}
      </div>
    </section>
  );
}

export default App;
