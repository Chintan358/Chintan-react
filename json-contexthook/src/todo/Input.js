import React from 'react'
import { Mycontext } from './TodoContext'
const Input = () => {
    const { todo, setTodo } = Mycontext()

    const addData = () => {
        let inpt = document.getElementById('inpt').value
        setTodo([...todo, inpt])
        document.getElementById('inpt').value = null

    }
    return (
        <>
            <input type="text" id='inpt' />
            <button onClick={() => {
                addData()
            }}>Add Data </button>
        </>

    )
}

export default Input