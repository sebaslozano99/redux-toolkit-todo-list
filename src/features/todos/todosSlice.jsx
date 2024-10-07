import { createSlice } from "@reduxjs/toolkit";







const initialState = {
    todos: [],
    search: "a",
}




const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add(state, action){
            // state.todos = [...state.todos, action.payload];
            state.todos.push(action.payload);
        },
        remove(state, action){
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            // state.todos.filter((todo) => todo.id !== action.payload);
        },
        markAsCompleted(state, action){
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, isCompleted: !todo.isCompleted} : todo);
        },
        setAsUpdating(state, action){
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, isUpdating: !todo.isUpdating} : todo);
        },
        update: {
            prepare(id, updatedTask){
                return {
                    payload: {id, updatedTask},
                };
            },

            reducer(state, action){
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, task: action.payload.updatedTask, isUpdating: !todo.isUpdating } : todo);
        }},
        searchByName(state, action){
            state.search = action.payload;
        }
    }
})


export const { add, remove, markAsCompleted, setAsUpdating, update, searchByName } = todosSlice.actions;
export default todosSlice.reducer;
