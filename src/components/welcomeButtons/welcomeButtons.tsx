import React, { useContext } from 'react';
import { type FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Button from '@mui/material/Button';
import { LangContext } from '../../locale/langContext';
import { Router } from '../../model/enums';

export const WelcomeButtons: FC = () => {
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
    <Button
      variant="contained"
      size="medium"
      color="secondary"
      className="user-button"
    >
      <Link to={btnLink} className="user-link">
        {btnTitle}
      </Link>
    </Button>
  );
};
