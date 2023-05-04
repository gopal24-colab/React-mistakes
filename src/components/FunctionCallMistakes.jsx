import React, { useState } from "react";

const FunctionCallMistakes = () => {
  const [fild, setFild] = useState("");
  const [printVal, setPrintVal] = useState("");
  const arr = [1, 2, 3, 4, 5];

  /**
   * ! function call type 1
   *  */
  const changeHandler = (e) => {
    setFild(e.target.value);
    console.log(fild);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitHandler");
  };

  /**
   * ! function call type 2
   */
  const print = (number) => {
    setPrintVal(number);
    console.log(number);
  };

  /**
   *  ! function call type 3
   */
  const printConsole = (number) => {
    return () => {
      console.log(number);
    };
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} />
      </form>
      {arr.map((ele, index) => {
        return (
          <>
            <button
              key={index}
              onClick={() => {
                print(ele);
              }}>
              Print {ele}
            </button>
          </>
        );
      })}
      <h4>{printVal}</h4>

      {arr.map((ele, index) => {
        return (
          <button key={index} onClick={printConsole(ele)}>
            Console {ele}
          </button>
        );
      })}

      <h1>Trying to print {undefined}</h1>
    </div>
  );
};

export default FunctionCallMistakes;
