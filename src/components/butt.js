import React from "react";
import Avatar from "@mui/material/Avatar";

function Hands(props) {
  return (
    <div>
      <button>{props.name}</button>
      <p>{props.age}</p>
      <Avatar />
    </div>
  );
}

export default Hands;
