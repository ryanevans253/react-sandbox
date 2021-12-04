import { typography } from "@mui/system";
import React from "react";
import CustomizedRating from "./MoistureRating";

export default function Card() {
  return (
    <div>
      <h1>Header</h1>
      <typography> Body text</typography>
      <CustomizedRating />
    </div>
  );
}
