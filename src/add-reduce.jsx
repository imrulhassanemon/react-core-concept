import { useEffect, useState } from "react";

export default function AddReduce() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  console.log(count);
  const sty = { border: "2px solid red", padding: "20px", margin: "20px" };
  

  const decrease = () => {
    setCount(count-1)
  }

  return (
    <div>
      <div style={sty}>
        <h3>count: {count}</h3>
        <button style={{margin : '20px'}} onClick={increase}>Click Me</button> <br />
        <button onClick={decrease}>Click me</button>
      </div>
      
    </div>
  );
}
