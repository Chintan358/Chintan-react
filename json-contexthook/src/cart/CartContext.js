import React, { createContext, useContext, useState } from 'react'
export const createChild = createContext()
export const MyCartContext = () => {
    return useContext(createChild)
}
const CartContext = ({ children }) => {
    const [cart, setCart] = useState(0)
    return (
        <>
            <createChild.Provider value={{ cart, setCart }}>
                {children}
            </createChild.Provider>
        </>
    )
}

export default CartContext