import { configureStore } from '@reduxjs/toolkit';
import { cryptoAPI } from '../services/cryptoAPI';

export default configureStore({
  reducer: {
      [cryptoAPI.reducerPath]: cryptoAPI.reducer
  },
});

// import { configureStore } from '@reduxjs/toolkit';

// import { cryptoApi } from '../services/cryptoAPI';
// // import { cryptoNewsApi } from '../services/cryptoNewsApi';

// export default configureStore({
//   reducer: {
//     [cryptoApi.reducerPath]: cryptoApi.reducer,
//     // [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
//   },
// });
