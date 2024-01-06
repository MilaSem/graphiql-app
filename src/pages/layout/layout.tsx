import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import React from 'react';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import Box from '@mui/material/Box';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Box width={'100%'}>
        <main className="main">
          <Outlet />
        </main>
      </Box>
      <Footer />
    </>
  );
};
