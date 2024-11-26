
//configure store with thunk

import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./reducers/slices/catSlices.js";

export const store = configureStore({
    reducer: {
        cats: catReducer,
    },
});

export default store;