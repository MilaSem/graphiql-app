import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import './layout.scss';
import React from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
