import { useState } from "react"
import TodoList from "./TodoList";

const Todo = ()=>{

    const [itelList, setItemList] = useState()

    const [Item, setItem] = useState([]);

    const itemEvent = (event)=>{
        setItemList(event.target.value)
    }

    const AddList = ()=>{
        setItem((revdata)=>{
            return [...revdata,itelList]
           
        })
        setItemList("")
    }

    const deleteItem = (id)=>{
      
        setItem((oldErr)=>{
            return oldErr.filter((arr,index)=>{
                return index !== id;
            })
        })

    }

    return(<>
          <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <input type="text" placeholder="Add a Item" onChange={itemEvent} value={itelList}/>
          <button onClick={AddList}>+</button>

          <ol>
            {Item.map((value, index)=>{
            return <TodoList key={index} id={index} text={value} onSelect={deleteItem}/>
            })}
          </ol>
        </div>
      </div>
    </>)
}

export default Todo