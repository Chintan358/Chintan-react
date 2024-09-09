
let initail = {
    cart: 0
}
const CartReducer = (state = initail, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { cart: state.cart + 1 }
            break;
        case 'REMOVE_FROM_CART':
            return { cart: 0 }
        default:

            return state
    }
}

export default CartReducer;


 