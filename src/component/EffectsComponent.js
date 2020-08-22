import React, { useState, useEffect } from 'react'

const EffectsComponent = () =>{
const [users, setUser] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUser(data))
}, [])

return(
    <div>
        <ul>
            {users.map(users=><li>{users.name}</li>)}
        </ul>
    </div>
)
}

export default EffectsComponent