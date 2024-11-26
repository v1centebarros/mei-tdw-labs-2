// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thecatapi.com/v1/',
        headers: {
            'x-api-key': 'live_MWVzg1zJYe3V93KDNqVXkmrotHJU1jkl1kVyBL3n9iCvRZekodtln1GxZuVHoC4F',
        },
    }),
    endpoints: (builder) => ({
        fetchCats: builder.query({
            query: ({ page, limit }) => `breeds?limit=${limit}&page=${page}`,
        }),
    }),
});

export const { useFetchCatsQuery } = apiSlice;
