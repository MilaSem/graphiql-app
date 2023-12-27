import { configureStore } from '@reduxjs/toolkit';
import { graphQlReduser } from './graphQl.slice';
import { mainReduser } from './main.slice';

export const store = configureStore({
  reducer: {
    main: mainReduser,
    graphQl: graphQlReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
