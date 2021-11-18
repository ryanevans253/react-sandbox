import * as React from "react";
import Box from "@mui/material/Box";
import EmailInput from "./components/email";

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: "40vw",
        height: "60vh",
        backgroundColor: "#357a38",
        opacity: [0.3],
        "&:hover": {
          backgroundColor: "#357a38",
          opacity: [0.4],
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EmailInput />
    </Box>
  );
}
