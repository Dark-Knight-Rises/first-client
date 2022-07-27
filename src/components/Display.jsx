import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Forms from './Forms'
import './Display.css'

// https://piyush-first-server.herokuapp.com
function Display() {
    const [usersList, setUsersList] = useState([])
    useEffect(() => {
        axios.get('https://piyush-first-server.herokuapp.com/getUsers').then((res) => {
            setUsersList(res.data)
        })
    }, [])
    return (
        <div>
            <h2 style={{ 'text-align': 'center' }}>MERN APP - Piyush</h2>
            <Forms usersList={usersList} setUsersList={setUsersList} />
            <div className="display-container">

                {
                    usersList.map((user, key) => {
                        return (
                            <div key={key} className='display'>
                                <h2>Name: {user.name}</h2>
                                <h2 style={{ 'fontStyle': 'italic' }}>Username: {user.username}</h2>
                                <h3>Age: {user.age}</h3>
                                <button >✏️</button>
                                <button >X</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Display