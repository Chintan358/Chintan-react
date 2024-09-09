import React from 'react'
import { Mycontext } from './TodoContext'
const List = () => {
    const { todo, setTodo } = Mycontext()

    const deleteData = (index) => {
        let newTodo = [...todo]
        newTodo.splice(index, 1)
        setTodo(newTodo)
    }
    return (
        <>
            {todo.map((result, index) => {
                return (
                    <h4>{result} <button onClick={() => {
                        deleteData(index)
                    }}>X</button></h4>
                )
            })}
        </>
    )
}

export default List