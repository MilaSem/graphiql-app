import React, { useContext } from 'react';
import { type FC } from 'react';
import { LangContext } from '../../../locale/langContext';
import Box from '@mui/material/Box';

export const AboutProject: FC = () => {
  const { dictionary } = useContext(LangContext);

  return (
    <Box>
      <h1>GraphiQL</h1>
      <h3>{dictionary.about.project.title}</h3>
      <p>{dictionary.about.project.description}</p>
    </Box>
  );
};
