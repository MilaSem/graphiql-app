import React from 'react';
import { type FC } from 'react';
import Box from '@mui/material/Box';
import { AboutDevelopers } from '../../components/about/aboutDevelopers/aboutDevelopers';
import { AboutProject } from '../../components/about/aboutProject/aboutProject';
import { WelcomeButtons } from '../../components/welcomeButtons/welcomeButtons';

export const WelcomePage: FC = () => {
  return (
    <Box sx={{ minHeight: '90vh', gap: '1rem' }}>
      <AboutProject />
      <WelcomeButtons />
      <AboutDevelopers />
    </Box>
  );
};
