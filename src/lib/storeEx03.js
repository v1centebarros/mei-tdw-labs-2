import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer.js";

const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});

export default store;