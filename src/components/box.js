// import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import ButtonBaseRoot from "@mui/material/ButtonBase";

const Box = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 300,
        maxHeight: 200,
        margin: 2,
        padding: 2,
      }}
    >
      <Avatar />
      <h4> Heading</h4>
      <p>Body content goes here</p>
      <Button style={{ marginTop: "auto" }}>Submit</Button>
      <ButtonBaseRoot />
    </Card>
  );
};

export default Box;
