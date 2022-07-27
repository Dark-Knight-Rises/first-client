import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Forms from './Forms'


function Display() {
    const [usersList, setUsersList] = useState([])
    useEffect(() => {
        Axios.get('https://piyush-first-server.herokuapp.com/getUsers').then((res) => {
            setUsersList(res.data)
        })
    }, [])
    return (
        <div>
            {
                usersList.map((user) => {
                    return (
                        <div>
                            <h1>Name: {user.name}</h1>
                            <h2>Age: {user.age}</h2>
                            <h2>Username: {user.username}</h2>
                        </div>
                    )
                })
            }
            <Forms usersList={usersList} setUsersList={setUsersList} />
        </div>
    )
}

export default Display