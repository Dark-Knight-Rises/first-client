import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './Forms.css'

function Forms(props) {
    const [name, setName] = useState('')
    const [age, setage] = useState('')
    const [username, setuserName] = useState('')

    // https://piyush-first-server.herokuapp.com
    const createUser = () => {
        axios.post('https://piyush-first-server.herokuapp.com/createUser', {
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
        <div className='form--container'>
            <div className='form'>

                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='age' id='age--input' value={age} onChange={(e) => setage(e.target.value)} />
                <input type="text" placeholder='username' value={username} onChange={(e) => setuserName(e.target.value)} />
                <button onClick={createUser} id='btn'>Create User</button>
            </div>
        </div>
    )
}

export default Forms