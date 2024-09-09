import React from 'react'
import { addTocart, removeFromCart } from './slice/Cart'
import { useDispatch } from 'react-redux'
const Product = () => {
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => {
                dispatch(addTocart(1))
            }}>Add to cart</button>
        </>
    )
}

export default Product