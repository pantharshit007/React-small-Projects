import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    initialState,
    reducers:{
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        }
    }
}) 

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;