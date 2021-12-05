import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import DiscreteSliderSteps from "./CycleSlider";
import CustomizedRating from "./MoistureRating";
import Card from "./Card";

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
  const [sun, setSun] = useState("");

  const [card, setCard] = useState({ show: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCard({ show: true });
    console.log(card);
    console.log(name, height, cycle, moisture);
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

        <DiscreteSliderSteps onChange={(value) => setCycle(value)} />
        <CustomizedRating onChange={(value) => setMoisture(value)} />
        <Button
          color="success"
          type="submit"
          variant="outlined"
          // onClick={() => {
          //   return <Card />;
          // }}
        >
          Submit
        </Button>

        <Button color="warning" variant="outlined" card={false}>
          test
        </Button>
      </form>
      <Typography variant="h6"></Typography>
    </Container>
  );
}
