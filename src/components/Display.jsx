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
    }, [usersList])

    const removeElement = (id) => {
        axios.delete(`https://piyush-first-server.herokuapp.com/${id}`).then((res) => {
            setUsersList([
                ...usersList
            ])
        })
    }

    const updateElement = (id) => {
        const newUsr = prompt('enter new username')

        if (newUsr !== '') {
            axios.put('https://piyush-first-server.herokuapp.com/update/', { newName: newUsr, id: id })
        }
    }

    return (
        <div>
            <h2 style={{ 'text-align': 'center' }}>CRUD APP (MERN)</h2>
            <Forms usersList={usersList} setUsersList={setUsersList} />
            <div className="display-container">

                {
                    usersList.map((user, key) => {
                        return (
                            <div key={key} className='display'>
                                <h2>Name: {user.name}</h2>
                                <h2 style={{ 'fontStyle': 'italic' }}>Username: {user.username}</h2>
                                <h3>Age: {user.age}</h3>
                                <button onClick={() => updateElement(user._id)}>✏️</button>
                                <button onClick={() => removeElement(user._id)}>X</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Display