import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

export default function Create() {
  const [name, setName] = useState("");
  const [moisture, setMoisture] = useState("");
  const [light, setLight] = useState("");
  const [height, setHeight] = useState("");
  const [cycle, setCycle] = useState("");

  const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: "block",
    },
  });

  return (
    <Container>
      <Button
        color="success"
        type="submit"
        variant="outlined"
        onClick={() => console.log("you clicked me")}
      >
        Submit
      </Button>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          color="success"
          label="Plant Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          color="success"
          label="Height"
          variant="outlined"
          fullWidth
        />
      </form>
      <Typography variant="h6"></Typography>
    </Container>
  );
}
