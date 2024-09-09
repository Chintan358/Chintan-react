import cart from "./Cart";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        mycart: cart,
    },
});

export default store;

// cart.js