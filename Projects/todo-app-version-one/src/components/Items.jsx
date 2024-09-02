import TodoItem from "./TodoItem"

let Items = ({ allItems, onDeleteClick }) => {

    return <>
        {allItems.map((item) => <TodoItem key={item.name} todoName={item.name} todoDate={item.date} onDeleteClick={onDeleteClick} />
        )}

    </>
}

export default Items