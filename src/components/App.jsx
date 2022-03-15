import React, { useState } from "react";
//useState is a module of React
// it can be imported from React module as a non default
// or we can use it as React.useState

// useState(initialValue)
// it has 2 parameters
// 1-> the value that we want to change ,count here
// 2-> what function or what to apply to that value , setCount (count+1)
// that menas change the value of count to count+1

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
