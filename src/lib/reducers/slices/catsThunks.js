import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCats = createAsyncThunk('cats/fetchCats', async ({ page, limit }) => {
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds?page=${page}&limit=${limit}`,
        {
            headers: {
                'x-api-key': "live_MWVzg1zJYe3V93KDNqVXkmrotHJU1jkl1kVyBL3n9iCvRZekodtln1GxZuVHoC4F"
            }
        });
    return response.data;
});