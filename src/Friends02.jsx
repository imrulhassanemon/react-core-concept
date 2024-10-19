import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'

export default 

function Friends02(){

    const [friends, useFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => useFriends(data))
    }, [])

    
    
    return(
        <div className='box'>
            {
                friends.map(fnd => <Friend friend ={fnd}></Friend>)
            }
            <h2>Friends: {friends.length} </h2>

           


        </div>
    )
}



