import React from "react";

const ArrayMapMistakes = () => {
  const arr = [];
  const user = {};
  return (
    <div>
      Mistake : -
      {arr.length &&
        arr.map((ele) => {
          return <h1>{ele}</h1>;
        })}
      Correct :-
      {arr &&
        arr.map((ele) => {
          return <h1>{ele}</h1>;
        })}
      {user && <h1>{user.name}</h1>}
    </div>
  );
};

export default ArrayMapMistakes;
