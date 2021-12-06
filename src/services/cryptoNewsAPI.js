import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'f388994f09mshea7ef915a58e807p1beb10jsn2bf51f15dc8a',
};

const newsURL = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsAPI = createApi({
  reducerPath: 'cryptoNewsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: newsURL }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = cryptoNewsAPI;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoNewsHeaders = {
//   'x-bingapis-sdk': 'true',
//   'x-rapidapi-key': 'f388994f09mshea7ef915a58e807p1beb10jsn2bf51f15dc8a',
//   'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
// };

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// const newsURL = 'https://bing-news-search1.p.rapidapi.com'

// export const cryptoNewsApi = createApi({
//   reducerPath: 'cryptoNewsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsAPI;
