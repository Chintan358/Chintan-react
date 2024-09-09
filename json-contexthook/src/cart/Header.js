import React from 'react'
import { MyCartContext } from './CartContext'
const Header = () => {
    const { cart, setCart } = MyCartContext()
    return (
        <>
            <div className="menu">
                <i class="fa badge fa-lg" value={cart}>&#xf290;</i >
                <button onClick={() => {
                    setCart(0)
                }}>Remove Cart</button>
            </div>

        </>
    )
}

export default Header