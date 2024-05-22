import { createSlice } from "@reduxjs/toolkit";
export const indexSlice = createSlice({
    name: 'index',
    initialState: {
        value: 0
    },
    reducers:{
        increment : (state) => {
            state.value++;
        },
        decrement : (state) => {
            state.value--;
        },
        init : (state)=>{
            state.value = 0;
        }
    }
});
export const {increment, decrement, init} = indexSlice.actions;
export default indexSlice.reducer;