import React, { useState } from "react";

const StateChangeMistake = () => {
  const [array, setArray] = useState([1, 2, 3, 4]);

  const addToFirst = (number) => {
    setArray((prev) => [number, ...prev]);
  };

  const addToLast = (number) => {
    setArray((prev) => [...prev, number]);
  };

  return (
    <div>
      <h1>Your arry is {array.join(",")}</h1>
      <button
        onClick={() => {
          addToFirst(0);
          addToLast(0);
          console.log(array.join(","));
        }}>
        Add 0 to first and last index
      </button>
    </div>
  );
};

export default StateChangeMistake;
