import React, { useState, useEffect } from "react";
import Demo from "./Demo";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("we have run the use effect");
  });

  return (
    <div>
      <h4> This is a counter</h4>
      <p>Current count : {count}</p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
    </div>
  );
};

export default Counter;
