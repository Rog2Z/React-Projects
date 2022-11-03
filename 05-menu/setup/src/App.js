import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { ALL } from "./const";
console.log(items[0]);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState(ALL);

  const filterMenuItems = (category) => {
    if (category === ALL) {
      setMenuItems(items);
      return;
    }
    const filteredMenu = items.filter((item) => item.category === category);
    setMenuItems(filteredMenu);
  };

  useEffect(() => {
    filterMenuItems(category);
  }, [category]);

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
        {menuItems.map((item) => {
          return <Menu key={item.id} {...item}></Menu>;
        })}
      </div>
    </section>
  );
}

export default App;
