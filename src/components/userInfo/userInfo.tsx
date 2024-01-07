import React, { useContext, useState } from 'react';
import { type FC, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, logout } from '../../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { LangContext } from '../../locale/langContext';
import { Router } from '../../model/enums';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { type AlertColor } from '@mui/material/Alert';
import { AlertMessage } from '../alertMessage/alertMessage';

import './userInfo.scss';

export const UserInfo: FC = () => {
  const matches = useMediaQuery('(max-width:700px)');
  const { dictionary } = useContext(LangContext);
  const [user] = useAuthState(auth);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState<AlertColor | undefined>();

  const showAlert = (message: string, type: AlertColor | undefined): void => {
    setSnackbarMessage(message);
    setSnackbarType(type);
  };

  const fetchUserName = async (): Promise<void> => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setUserName(data.name);
      showAlert(`User ${userName} logged in`, 'success');
    } catch (err) {
      showAlert(err, 'error');
      console.error(err);
    }
  };

  const handleLogOut = async (): Promise<void> => {
    await logout();
    showAlert('You logged out', 'info');
    navigate(Router.welcome);
  };

  useEffect(() => {
    if (!user) {
      navigate(Router.welcome);
      return;
    }
    void fetchUserName();
  }, [user]);

  return (
    <>
      {user
        ? (
        <Stack direction="row" spacing={1}>
          <Typography variant="h6" className="user-info">
            {userName}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={handleLogOut}
            className="user-button-out"
            color="secondary"
          >
            {matches ? <LogoutRoundedIcon /> : dictionary.auth.logOut}
          </Button>
        </Stack>
        )
        : (
        <Button
          variant="contained"
          size="small"
          color="secondary"
          className="user-button"
        >
          <Link to={Router.signIn} className="user-link">
            {dictionary.auth.signIn}
          </Link>
        </Button>
        )}
      <AlertMessage type={snackbarType} message={snackbarMessage} />
    </>
  );
};
