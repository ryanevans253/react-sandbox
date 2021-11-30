import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import DiscreteSliderSteps from "./CycleSlider";

//brings teh spacing and styles to certain components
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [moisture, setMoisture] = useState("");
  const [light, setLight] = useState("");
  const [height, setHeight] = useState("");
  const [cycle, setCycle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && height) {
      console.log(name, height);
    }
  };

  return (
    <Container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          className={classes.field}
          id="outlined-basic"
          color="success"
          label="Plant Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          onChange={(e) => setHeight(e.target.value)}
          id="outlined-basic"
          color="success"
          label="Height"
          variant="outlined"
          fullWidth
          className={classes.field}
        />

        <DiscreteSliderSteps color="success" />
        <Button
          color="success"
          type="submit"
          variant="outlined"
          onClick={() => console.log("you clicked me")}
        >
          Submit
        </Button>
      </form>
      <Typography variant="h6"></Typography>
    </Container>
  );
}
