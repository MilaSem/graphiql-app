import React, { useMemo } from 'react';
import { type FC } from 'react';
import './App.scss';
import { router } from '../router/router';
import { RouterProvider } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from '../store';
import { LangProvider } from '../locale/langContext';

export const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <>
      <Provider store={store}>
        <LangProvider>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </LangProvider>
      </Provider>
    </>
  );
};
