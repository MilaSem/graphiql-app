import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { WelcomePage } from '../pages/welcomePage/welcomePage';
import { Layout } from '../pages/layout/layout';
import { NotFoundPage } from '../pages/notFoundPage/notFoundPage';
import { AuthPage } from '../pages/sign-in/AuthPage';
import { RegPage } from '../pages/sign-up/RegPage';
import { PlaygroundPage } from '../pages/playgroundPage/playgroundPage';

export const routerConfig = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="" element={<WelcomePage />} key={'index'} />
    <Route path="sign-in" element={<AuthPage />} key={'sign-in'} />,
    <Route path="sign-up" element={<RegPage />} key={'sign-up'} />,
    <Route path="qraphql" element={<PlaygroundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>,
);

export const router = createBrowserRouter(routerConfig);
