import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './Slices/CartSlice';
import CartReducer from './Slices/CartSlice';

export const Store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        // cart: CartReducer
    }

});