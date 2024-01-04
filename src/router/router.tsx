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
import { Router } from '../model/enums';

export const routerConfig = createRoutesFromElements(
  <Route path="" element={<Layout />}>
    <Route path={Router.welcome} element={<WelcomePage />} key={'index'} />
    <Route path={Router.signIn} element={<AuthPage />} key={'sign-in'} />,
    <Route path={Router.signUp} element={<RegPage />} key={'sign-up'} />,
    <Route path={Router.graphQl} element={<PlaygroundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>,
);

export const router = createBrowserRouter(routerConfig);
