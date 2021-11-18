import React from "react";
import background from "./images/backgroundplant.jpg";
import BoxSx from "./components/box";
import EmailInput from "./components/email";

function Landing() {
  return (
    <div style={{ margin: "0", padding: "0" }}>
      <div
        style={{
          margin: "0",
          padding: "0",
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${background})`,
          backgroundPosition: "fixed",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BoxSx>
          <EmailInput />
        </BoxSx>
      </div>
      <EmailInput />
    </div>
  );
}
export default Landing;
