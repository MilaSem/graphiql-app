import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { WelcomePage } from '../pages/welcomePage/welcomePage';
import { Layout } from '../pages/layout/layout';
import { AuthPage } from '../pages/authPage/authPage';
import { PlaygroundPage } from '../pages/playgroundPage/playgroundPage';
import { NotFoundPage } from '../pages/notFoundPage/notFoundPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<WelcomePage />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="playground" element={<PlaygroundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
