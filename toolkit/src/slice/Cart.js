import { createSlice } from "@reduxjs/toolkit";


const cart = createSlice({
    name: 'cart',
    initialState: 0,
    reducers: {
        addTocart(state, action) {
            return state + action.payload;
        },
        removeFromCart(state, action) {
            return state - action.payload;
        }

    }
})

export default cart.reducer;

export const { addTocart, removeFromCart } = cart.actions;