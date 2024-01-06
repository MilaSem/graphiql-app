import React, { useContext } from 'react';
import { type FC, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, logout } from '../../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import Button from '@mui/material/Button';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './userInfo.scss';
import { LangContext } from '../../locale/langContext';
import { Router } from '../../model/enums';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setUid } from '../../store/main/main.slice';

export const UserInfo: FC = () => {
  const { dictionary } = useContext(LangContext);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const uid = useAppSelector((state) => state.main.uid);
  const dispatch = useAppDispatch();

  const fetchUserName = async (): Promise<void> => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      dispatch(setUid(data.name));
    } catch (err) {
      dispatch(setUid(''));
      console.error(err);
    }
  };

  const handleLogOut = async (): Promise<void> => {
    await logout();
    dispatch(setUid(''));
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
        <>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Avatar>
              <PersonRoundedIcon />
            </Avatar>
            <h3 className="user-info">{uid}</h3>
            <Button
              variant="outlined"
              size="small"
              onClick={handleLogOut}
              className="user-button-out"
              color="secondary"
              startIcon={<LogoutRoundedIcon />}
            >
              {dictionary.auth.logOut}
            </Button>
          </Stack>
        </>
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
    </>
  );
};
