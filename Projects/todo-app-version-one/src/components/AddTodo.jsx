import { useState } from "react"
import { IoAddCircle } from "react-icons/io5";
function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState("")
  const [todoDate, setTodoDate] = useState("")

  const todoNamechange = (event) => {
    setTodoName(event.target.value)
  }

  const todoDatechange = (event) => {
    setTodoDate(event.target.value)
  }

  const AddButtonHandler = () => {
    onNewItem(todoName, todoDate)
    setTodoDate("")
    setTodoName("")
  }

  return <div class='container text-center'>
    <div class='row kg-row'>

      <div class='col-6'>
        <input type="text" placeholder="Enter TODO here" value={todoName} onChange={todoNamechange}></input>
      </div>
      <div class='col-4'>
        <input type="date" onChange={todoDatechange} value={todoDate}></input>
      </div>
      <div class='col-2'>
        <button class='btn btn-success kg-button' onClick={AddButtonHandler}><IoAddCircle /></button>
      </div>
    </div>
  </div>

}

export default AddTodo