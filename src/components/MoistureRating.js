import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import OpacityIcon from "@mui/icons-material/Opacity";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#34c0eb",
  },
  "& .MuiRating-iconHover": {
    color: "#33c7f5",
  },
});

export default function CustomizedRating(props) {
  console.log(props);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">
        How wet does your plant like its soil?
      </Typography>
      <StyledRating
        name="customized-color"
        defaultValue={3}
        // getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={1}
        icon={<OpacityIcon fontSize="inherit" />}
        emptyIcon={<OpacityIcon fontSize="inherit" />}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </Box>
  );
}
