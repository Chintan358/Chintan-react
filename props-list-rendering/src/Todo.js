import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState([])
    const [index, setIndex] = useState(null)
    const addData = () => {
        let input = document.getElementById('inpt').value
        if (index == null) {

            setTodo([...todo, { task: input, completed: false }])

        } else {
            let myTodo = [...todo]
            myTodo[index].task = input
            setTodo(myTodo)
            setIndex(null)
        }

        document.getElementById('inpt').value = null
    }

    const delteData = (i) => {
        let myTodo = [...todo]

        myTodo.splice(i, 1)
        setTodo(myTodo)
    }

    const updateData = (result, i) => {
        setIndex(i)
        document.getElementById('inpt').value = result
    }

    useEffect(() => {
        console.log(todo);

    }, [todo])
    return (
        <>
            <input type="text" id='inpt' />
            <button onClick={() => {
                addData()
            }}>{index == null ? 'Add' : 'Update'}</button>
            {todo.map((result, i) => {
                return (
                    <>
                        <h1>{result.task}
                            <button onClick={() => {
                                delteData(i)
                            }}>x</button>
                            <button onClick={() => {
                                updateData(result.task, i)
                            }}>Update</button>
                        </h1>
                    </>
                )
            })}
        </>
    )
}

export default Todo