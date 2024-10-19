import { useEffect, useState } from "react";

export default

function Users02(){
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    })
    return(
        <h3>User Array: {user.length} </h3>
    )
}

