import React from 'react'
import { MyCartContext } from './CartContext'
const Addtocart = () => {
    const { cart, setCart } = MyCartContext()

    const addTOcart = () => {
        setCart(cart + 1)
    }
    return (
        <>
            <div class="box">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/furniture.jpg" alt="cookies"
                    class="hero-image" />
                <div class="price">$ <div>95</div>
                </div>

                <div class="information">

                    <div class="name">Amazing Furniture</div>

                    <div class="store">ikea.com</div>

                    <button href="#" class="button" onClick={() => {
                        addTOcart()
                    }}>Add To Cart</button>

                </div>

            </div>

        </>
    )
}

export default Addtocart