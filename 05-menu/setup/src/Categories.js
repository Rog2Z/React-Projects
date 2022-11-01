import React from "react";
const Categories = ({ setCategory }) => {
  const hardCodedCat = ["All", "Breakfast", "Lunch", "Shakes"];
  let key = 0;
  return (
    <>
      <div className="btn-container">
        {hardCodedCat.map((cat) => {
          return (
            <button
              key={key++}
              className="filter-btn"
              // Note, this takes th event object cat is external
              onClick={(e) => setCategory(cat.toLocaleLowerCase())}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
