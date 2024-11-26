import { createSlice } from '@reduxjs/toolkit';
import { fetchCats } from './catsThunks';

const catsSlice = createSlice({
    name: 'cats',
    initialState: {
        data: [],
        loading: false,
        error: null,
        page: 1,
        limit: 10,
    },
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
        setLimit(state, action) {
            state.limit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCats.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCats.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCats.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setPage, setLimit } = catsSlice.actions;
export default catsSlice.reducer;