import React, { useContext, createContext, useState } from 'react'
export const createChild = createContext()
export const Mycontext = () => {
    return useContext(createChild)
}
const TodoContext = ({ children }) => {
    const [todo, setTodo] = useState([])
    return (
        <>
            <createChild.Provider value={{ todo, setTodo }}>
                {children}
            </createChild.Provider>

        </>
    )
}

export default TodoContext