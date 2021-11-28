import { Avatar } from "@mui/material";
import React, { useState } from "react";
import AddButton from "./components/AddButton";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <div>
        <Avatar />
        <h1>Ryan's to do list</h1>
      </div>
      <Todo name="ryanne" />
    </div>
  );
}
export default App;
