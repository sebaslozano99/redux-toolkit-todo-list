import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [
        {
            id: 125478,
            task: "Read recommended book again!",
            isCompleted: false,
            isUpdaing: false,
        },
        {
            id: 125588,
            task: "Read recommended book again!",
            isCompleted: false,
            isUpdaing: false,
        },
        // {
        //     id: 541247,
        //     task: "Visit girlfriend!",
        //     isCompleted: true,
        //     isUpdaing: false,
        // },
        // {
        //     id: 89741,
        //     task: "watch dawn of the dead again!",
        //     isCompleted: false,
        //     isUpdaing: false,
        // },
        // {
        //     id: 521478,
        //     task: "play piano!",
        //     isCompleted: false,
        //     isUpdaing: false,
        // },

    ],
}



const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add(state, action){
            state.todos = [...state.todos, action.payload];
        },
        remove(state, action){
            state.todos.filter((todo) => todo.id !== action.payload);
        },
        setAsUpdating(state, action){
            state.todos.map((todo) => todo.id === action.payload ? {...todo, isUpdating: !todo.isUpdating} : todo);
        },
        // update(state, action){
        //     state.todos
        // }
    }
})


export const { add, remove, setAsUpdating } = todosSlice.actions;
export default todosSlice.reducer;
