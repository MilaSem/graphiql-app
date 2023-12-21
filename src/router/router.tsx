import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { WelcomePage } from '../pages/welcome/welcomePage';
import { AuthPage } from '../pages/sign-in/AuthPage';
import { RegPage } from '../pages/sign-up/RegPage';
import { MainPage } from '../pages/main/mainPage';

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route index path="/" element={<WelcomePage />} key={'index'} />,
    <Route path="/sign-in" element={<AuthPage />} key={'sign-in'} />,
    <Route path="/sign-up" element={<RegPage />} key={'sign-up'} />,
    <Route path="/main" element={<MainPage />} key={'main'} />,
  ]),
);
