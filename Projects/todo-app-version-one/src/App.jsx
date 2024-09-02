import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import { useState } from 'react'
import WelcomeMessage from "./components/WelcomeMessage";
function App() {

  // let allItems = [{
  //   name:"Assignment",
  //   date:"10/08/2024"
  // },{
  //   name:"Project",
  //   date:"12/08/2024"
  // },
  // {
  //   name:"Exam",
  //   date:"15/08/2024"
  // }]

  let [allItems, setAllItems] = useState([])

  let newItemHandle = (itemName, itemDueDate) => {

    const newTodoItem = [...allItems, { name: itemName, date: itemDueDate }]
    setAllItems(newTodoItem)

  }

  const onDeleteHandle = (todoItemName) => {

    const newItems = allItems.filter(item => item.name !== todoItemName)
    setAllItems(newItems)

  }

  return (<center class='todo-container'>
    <AppName />
    <AddTodo onNewItem={newItemHandle} />
    {allItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
    <Items allItems={allItems} onDeleteClick={onDeleteHandle}></Items>
  </center>);


}

export default App
