import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Todo = () => {
    const [todo, setTodo] = useState([])

    const [index, setIndex] = useState(null)
    useEffect(() => {
        getData()
    }, [])
    const addData = () => {
        let input = document.getElementById('inpt').value
        if (input == '') {
            alert('please enter data')
            return false
        }
        if (index == null) {
            axios.post(`http://localhost:8001/todo`, { task: input }).then((result) => {
                getData()
                document.getElementById('inpt').value = null
            })
        } else {
            axios.patch(`http://localhost:8001/todo/${index}`, { task: input }).then(() => {
                getData()
                document.getElementById('inpt').value = null
                setIndex(null)
            })
        }
    }


    const getData = () => {
        axios.get(`http://localhost:8001/todo`).then((result) => {
            console.log(result.data);
            setTodo(result.data)
        })
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:8001/todo/${id}`).then((result) => {
            getData()
        })
    }


    const updateData = (id, data) => {
        setIndex(id)
        document.getElementById('inpt').value = data
    }
    return (
        <>
            <input type="text" id='inpt' />
            <button onClick={() => {
                addData()
            }}>{index == null ? 'Add Data' : 'Update Data'}</button>
            {todo.map((result) => {
                return (
                    <>
                        <h5>{result.task} <span onClick={() => {
                            deleteData(result.id)
                        }} style={{ color: 'red', cursor: 'pointer', backgroundColor: "yellow", marginRight: '5px' }}>x</span>
                            <span onClick={() => {
                                updateData(result.id, result.task)
                            }} style={{ color: 'green', cursor: 'pointer', backgroundColor: "yellow" }}>Update</span>
                        </h5>
                    </>
                )
            })}
        </>
    )
}

export default Todo