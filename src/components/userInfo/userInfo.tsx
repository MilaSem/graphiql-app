import React, { useContext } from 'react';
import { type FC, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, logout } from '../../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import Button from '@mui/material/Button';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './userInfo.scss';
import { LangContext } from '../../locale/langContext';

export const UserInfo: FC = () => {
  const { dictionary } = useContext(LangContext);
  const [name, setName] = useState('');
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const fetchUserName = async (): Promise<void> => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogOut = async (): Promise<void> => {
    await logout();
    navigate('/');
  };

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }
    void fetchUserName();
  }, [user]);

  return (
    <>
      {user
        ? (
        <>
          <Stack direction="row" spacing={1}>
            <Avatar>
              <PersonRoundedIcon />
            </Avatar>
            <h3 className="user-info">{name}</h3>
            <Button
              variant="outlined"
              size="small"
              onClick={handleLogOut}
              className="user-button-out"
              color="secondary"
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
          <Link to={'/sign-in'} className="user-link">
            {dictionary.auth.signIn}
          </Link>
        </Button>
        )}
    </>
  );
};
