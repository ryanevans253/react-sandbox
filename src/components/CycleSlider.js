import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormLabel from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderSteps() {
  return (
    <Box sx={{ width: 300 }}>
      <FormLabel>Watering Cycle</FormLabel>
      <Slider
        aria-label="Small steps"
        defaultValue={0.5}
        getAriaValueText={valuetext}
        step={0.1}
        marks
        min={-0.5}
        max={1}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
