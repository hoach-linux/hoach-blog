import React, { useState } from "react";
import Button from "@mui/joy/Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count: number) => count + 1);

  return (
    <div className="card">
      <h1>{count}</h1>
      <Button color="primary" variant="soft" onClick={increment}>
        Like
      </Button>
      <Button
        color="primary"
        variant="soft"
        onClick={() => setCount((count: number) => count - 1)}
      >
        Dislike
      </Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Counter;
