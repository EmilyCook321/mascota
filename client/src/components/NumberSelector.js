import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function NumberSelector() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
    // console.log("increment");
  }

  function decrement() {
    // console.log("decrement");
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      {/* <div>0</div> */}
      <button onClick={decrement}>-</button>
    </div>
  );
}
