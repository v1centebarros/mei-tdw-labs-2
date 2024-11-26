import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cash: 0
};

const atmSlice = createSlice({
    name: "atm",
    initialState,
    reducers: {
        deposit: (state, action) => {
            state.cash += action.payload;
        },
        withdraw: (state, action) => {
            state.cash -= action.payload;
        },
    },
});

export const {deposit, withdraw} = atmSlice.actions;

export default atmSlice.reducer;