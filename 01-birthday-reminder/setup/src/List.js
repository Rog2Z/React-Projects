import React from "react";

// Import data values here and then map
const List = (props) => {
  const { persons } = props;
  return (
    <>
      {persons.map((person) => {
        return (
          <>
            <div className="person">
              <img src={person.image}></img>
              <div>
                <h4> {person.name} </h4>
                <p> {person.age} years </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
