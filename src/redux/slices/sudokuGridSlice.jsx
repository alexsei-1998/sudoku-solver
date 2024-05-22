import { createSlice } from "@reduxjs/toolkit";
export const sudokuGridSlice = createSlice({
    name: 'grid',
    initialState: [
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '']
    ],
    reducers:{
        updateGrid : (state, action) =>{
            state[action.payload[0]][action.payload[1]] = action.payload[2];
        },
        reset:(state)=>{
            state.forEach(row => row.fill(''));
        }
    }    
});
export const {updateGrid, reset} = sudokuGridSlice.actions;
export default sudokuGridSlice.reducer;