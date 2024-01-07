import { configureStore } from '@reduxjs/toolkit';
import { graphQlReduser } from './graphQl/graphQl.slice';

export const store = configureStore({
  reducer: {
    graphQl: graphQlReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
