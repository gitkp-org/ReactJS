import { Button } from "./StyledComponents/Button";
import { Container } from "./StyledComponents/Container";
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    setBackground("violet");
  });
  const [background, setBackground] = useState("red");
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <Container>
      <h1>Counter.JS</h1>
      <Button background onClick={incCount}>
        +
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button background onClick={decCount}>
        -
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button onClick={resetCount}>Reset</Button>
      <h1>{count}</h1>
    </Container>
  );
};

export default App;
