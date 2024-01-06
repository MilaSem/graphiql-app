import React, { useContext } from 'react';
import { type FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { LangContext } from '../../locale/langContext';
import { Router } from '../../model/enums';
import useMediaQuery from '@mui/material/useMediaQuery';

export const WelcomeButtons: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { dictionary } = useContext(LangContext);
  const [btnTitle, setBtnTitle] = useState('');
  const [btnLink, setBtnLink] = useState('');
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      setBtnTitle(dictionary.auth.signIn);
      setBtnLink(Router.signIn);
    } else {
      setBtnTitle(dictionary.welcome.mainLink);
      setBtnLink(Router.graphQl);
    }
  }, [user]);

  return (
    <Box display={'flex'} justifyContent={'end'} marginBottom={'2rem'}>
      <Button
        variant={prefersDarkMode ? 'outlined' : 'contained'}
        size="medium"
        color="secondary"
      >
        <Link to={btnLink} className="user-link">
          {btnTitle}
        </Link>
      </Button>
    </Box>
  );
};
