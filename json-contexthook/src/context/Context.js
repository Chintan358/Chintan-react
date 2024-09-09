import React, { useContext, createContext, useState } from 'react'
export const createChild = createContext()
export const Mycontext = () => {
    return useContext(createChild)
}
const Context = ({ children }) => {
    const [yesOrNo, setyesOrNo] = useState('yes')
    return (
        <>
            <createChild.Provider value={{ yesOrNo, setyesOrNo }}>
                {children}
            </createChild.Provider>
        </>
    )
}

export default Context