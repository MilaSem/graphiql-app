import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { WelcomePage } from '../pages/welcome/welcomePage';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<WelcomePage />} />),
);
