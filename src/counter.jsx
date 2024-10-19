import { useState } from "react"

export default 



function Counter(){
    const [count, setCount] = useState(0)

    const countMe = () =>{
        // const newCount = count +  1;
        setCount(count+1)
    }
    const reduceCount = () => {
        setCount(count - 1)
    }
    
    return (
        <div style={{border: '2px solid red', margin: "20px", padding: '20px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={countMe}>Count me</button> <br />
            <button onClick={reduceCount}>Reduce Count</button>
        </div>
    )
}