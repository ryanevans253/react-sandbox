import PrimarySearchAppBar from "./components/Appbar";
import Demo from "./components/Demo";
import Counter from "./components/counter";
import Box from "./components/box";
import MediaCard from "./components/card";
import { flexbox, grid } from "@mui/system";
import { AlignVerticalCenter } from "@mui/icons-material";
import { autocompleteClasses } from "@mui/material";
import Tweet from "./components/tweet";
import React, { useState } from "react";

function App() {
  const [isClicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const color = () => {
    setClicked(isClicked);
  };
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>down</button>
      <h1>{count}</h1>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          height: "70vh",
          width: "100vw",
          backgroundColor: "#e3ffff",
          alignItems: "center",
          justifyContent: "center",
          // alignItems: "",
        }}
      >
        <Tweet />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default App;
