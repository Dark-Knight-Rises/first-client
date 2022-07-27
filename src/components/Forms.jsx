import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Forms(props) {
    const [name, setName] = useState('')
    const [age, setage] = useState(0)
    const [username, setuserName] = useState('')

    const createUser = () => {
        axios.post('http://localhost:5000/createUser', {
            name: name,
            age: age,
            username: username
        }).then((res) => {
            // to add dynamically, without refreshing the page
            props.setUsersList([
                ...props.usersList, {
                    name: name,
                    age: age,
                    username: username
                }
            ])
        })

        // clear input feilds
        setName('')
        setage('')
        setuserName('')
    }
    return (
        <div>
            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder='age' value={age} onChange={(e) => setage(e.target.value)} />
            <input type="text" placeholder='username' value={username} onChange={(e) => setuserName(e.target.value)} />
            <button onClick={createUser}>Create User</button>
        </div>
    )
}

export default Forms