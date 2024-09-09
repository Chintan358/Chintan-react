import React from 'react'
import { useDispatch } from 'react-redux'
// import { AddToCart } from './Action'
const Product = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div class="card" style={{ width: '18rem' }}>
                <img class="card-img-top" src="https://avimeeherbal.com/cdn/shop/files/frantimage_1b73b48e-b69b-4bd9-b479-39cfbad22354.png?v=1723449501&width=600" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Hair Oil</h5>
                    <p class="card-text">Some quick example text to build  on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-primary" onClick={() => {
                        // dispatch(AddToCart(1))
                    }}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Product