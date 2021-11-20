import React from "react";
import BoxSx from "./components/box";
import Hands from "./components/butt";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Hands name="ryan" />
      <Hands name="paul" age="23" />
      <Form placeholder="pen">test</Form>
      <h1>hello</h1>
      <BoxSx />
    </div>
  );
}
export default App;
