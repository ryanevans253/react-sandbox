import React from "react";

export default function Todo(props) {
  return (
    <form>
      <label>Task: </label>
      <input placeholder={props.name}></input>
      <button>Add</button>
    </form>
  );
}
