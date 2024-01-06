import React, { useContext } from 'react';
import { type FC } from 'react';
import { DEVELOPERS } from '../../../model/constatns';
import { Developer } from '../../developer/developer';
import { LangContext } from '../../../locale/langContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const AboutDevelopers: FC = () => {
  const { dictionary } = useContext(LangContext);
  const matches = useMediaQuery('(max-width:700px)');

  return (
    <>
      <Typography variant="h4">{dictionary.welcome.team}</Typography>
      <Typography variant="body1">{dictionary.welcome.project}</Typography>
      <Stack direction={matches ? 'column' : 'row'} spacing={1}>
        {DEVELOPERS.map((item) => (
          <Developer developer={item} key={item.id} />
        ))}
      </Stack>
    </>
  );
};
