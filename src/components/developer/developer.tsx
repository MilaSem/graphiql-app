import { useContext, type FC } from 'react';
import { type IDeveloper } from '../../model/interfaces';
import { LangContext } from '../../locale/langContext';

import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface DeveloperProps {
  developer: IDeveloper
}

export const Developer: FC<DeveloperProps> = ({ developer }) => {
  const { dictionary } = useContext(LangContext);
  const { name, img } = developer;
  return (
    <Paper elevation={6}>
      <Stack direction="column" spacing={2}>
        <Stack
          direction="row"
          spacing={4}
          alignItems={'center'}
          padding={'1rem'}
        >
          <Avatar src={img} alt="avatar" />
          <Box>
            <Typography variant="h6" color="primary">
              {dictionary.developers[name].name}
            </Typography>
            <Typography variant="subtitle1">
              {dictionary.developers[name].jobTitle}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};
