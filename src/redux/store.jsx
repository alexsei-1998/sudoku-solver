import { configureStore } from '@reduxjs/toolkit'
import sudokuGridSlice from './slices/sudokuGridSlice.jsx'
import indexSlice from './slices/indexSlice.jsx'

export const store = configureStore({
  reducer: {
    grid : sudokuGridSlice,
    index : indexSlice
  },
})