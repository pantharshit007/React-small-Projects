import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './Slice/CartSlice';

export const Store = configureStore({
    reducer: {
        cart: CartSlice
    }

});