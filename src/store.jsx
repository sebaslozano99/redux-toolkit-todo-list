import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../src/features/todos/todosSlice";




const store = configureStore({
    reducer: {
        todos: todosReducer,
    }
})

export default store;