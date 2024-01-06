import React, { useContext } from 'react';
import { type FC } from 'react';
import { LangContext } from '../../../locale/langContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

export const AboutProject: FC = () => {
  const { dictionary } = useContext(LangContext);
  const matches = useMediaQuery('(max-width:700px)');

  return (
    <Box minHeight={'60vh'}>
      <Typography variant={matches ? 'h3' : 'h1'} paddingBottom={'2rem'}>
        GraphiQL
      </Typography>
      <Typography variant="h4" paddingBottom={'2rem'}>
        {dictionary.about.project.title}
      </Typography>
      <Typography variant="body1">
        {dictionary.about.project.description}
      </Typography>
    </Box>
  );
};
