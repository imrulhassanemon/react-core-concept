import { useState } from "react"

export default 
function Team (){
    
    const teamStyle = {border: '2px solid yellow', padding: '20px', margin: '20px'}


    const [count, setCount] = useState(11)

    const addPlayer = () => {
        setCount(count + 1)
    }

    const removeCount = () => {
        setCount(count-1)
    }


    return (
        <div style={teamStyle}>
            <h3>players: {count} </h3>
            <button style={{margin:'5px'}} onClick={addPlayer}>Click me to add player</button> <br />
            <button onClick={removeCount}>Click me to remove Player</button>
        </div>
    )
}