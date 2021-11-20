import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function BoxSx() {
  const handleClick = () => {
    const email = console.log("hello world");
  };

  return (
    <Box
      sx={{
        padding: "20px",
        width: "40vw",
        height: "60vh",
        backgroundColor: "#fff",
        opacity: [0.8],
        "&:hover": {
          backgroundColor: "#fff",
          opacity: [0.7],
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Grow</h1>
      <p>Join now for early access to our product launch!</p>
      <TextField size="small" fullWidth placeholder="Email" />
      <Button
        onClick={handleClick}
        sx={{ margin: "20px" }}
        variant="outlined"
        size="large"
      >
        Submit
      </Button>
    </Box>
  );
}
