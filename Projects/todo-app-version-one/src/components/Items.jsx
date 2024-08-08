import TodoItem from "./TodoItem"

let Items = ({allItems})=>{

    return <>
        {allItems.map((item)=>  <TodoItem todoName={item.name} todoDate={item.date}/>
    )}
      
    </>
}

export default Items