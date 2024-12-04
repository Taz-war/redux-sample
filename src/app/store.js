import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/tood/todoSlice"

export const store = configureStore({
    reducer: todoReducer
})