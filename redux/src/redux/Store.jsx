import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slices/CounterSlice';

export const store = configureStore({
    reducer:{
        counter: counterReducer
    },
}); 