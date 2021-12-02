import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-key': 'f388994f09mshea7ef915a58e807p1beb10jsn2bf51f15dc8a',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
};

const baseURL = 'https://coinranking1.p.rapidapi.com' ;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoAPI = createApi({
  reducerPath: 'cryptoAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoAPI;
