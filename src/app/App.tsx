import React from 'react';
import { type FC } from 'react';
import './App.scss';
import { router } from '../router/router';
import { RouterProvider } from 'react-router-dom';

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
