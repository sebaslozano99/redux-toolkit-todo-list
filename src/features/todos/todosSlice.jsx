import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [],
}



const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add(state, action){
            state.todos = [...state.todos, action.payload];
        },
        remove(state, action){
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markAsCompleted(state, action){
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, isCompleted: !todo.isCompleted} : todo);
        },
        setAsUpdating(state, action){
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, isUpdating: !todo.isUpdating} : todo);
        },
        // update(state, action){
        //     state.todos
        // }
    }
})


export const { add, remove, markAsCompleted, setAsUpdating } = todosSlice.actions;
export default todosSlice.reducer;
