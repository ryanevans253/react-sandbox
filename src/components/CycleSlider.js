import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FormLabel } from "@mui/material";

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderSteps() {
  return (
    <Box sx={{ width: 300 }}>
      <FormLabel>Watering Cycle</FormLabel>
      <Slider
        aria-label="Small steps"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={1}
        marks
        min={0}
        max={30}
        valueLabelDisplay="auto"
        color="success"
      />
    </Box>
  );
}
