import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from "redux-persist";
import todosReducer from "../src/features/todos/todosSlice";
import  storage  from "redux-persist/lib/storage";



const persistConfig = {
    key: "root",
    storage,
}

const reducers = combineReducers({
    todos: todosReducer,
});




const persistedReducer = persistReducer(persistConfig, reducers);




const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export default store;