import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FormLabel } from "@mui/material";

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 7,
    label: "Weekly",
  },
  {
    value: 14,
    label: "Bi-Weekly",
  },
  {
    value: 30,
    label: "Monthly",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderSteps(props) {
  return (
    <Box sx={{ width: 300 }}>
      <FormLabel>Watering Cycle</FormLabel>
      <Slider
        aria-label="Small steps"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        min={0}
        max={30}
        valueLabelDisplay="auto"
        color="success"
        size="medium"
        onChange={(event) => props.onChange(event.target.value)}
      />
    </Box>
  );
}
