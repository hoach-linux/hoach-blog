import React, { useState } from "react";
import Button from "@mui/material/Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>{count}</h1>
      <Button
        variant="contained"
        onClick={() => setCount((count: number) => count + 1)}
      >
        Like
      </Button>
      <Button
        variant="contained"
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
