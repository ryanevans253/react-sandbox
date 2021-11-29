import React, { useState } from "react";

export default function Todo(props) {
  const [count, setCount] = useState(5);

  return (
    <form>
      <label>Task: </label>
      <input placeholder={props.name}></input>
      <button>click</button>
      <p>you clicked {count}times </p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </form>
  );
}
