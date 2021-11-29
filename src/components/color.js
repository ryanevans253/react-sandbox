import React, { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("blue");

  return (
    <div>
      <button onClick={() => setColor("green")}> change</button>
      <h1 color={color}> words here</h1>
    </div>
  );
}

export default ChangeColor;
