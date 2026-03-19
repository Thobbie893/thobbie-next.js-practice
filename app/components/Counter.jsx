"use client";

import React, {useState} from 'react';

const Counter = () => {
const [count, setCount] = useState(0);

 const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>

      <button onClick={decrement} disabled={count === 0}>
        Decrease
      </button>

      <button onClick={increment} disabled={count === 10} style={{ marginLeft: "10px" }}>
        Increase
      </button>
    </div>
    </div>
  )
}

export default Counter




 

  