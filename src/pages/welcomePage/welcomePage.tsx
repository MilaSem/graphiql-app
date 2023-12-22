import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { type FC, useEffect } from 'react';

export const WelcomePage: FC = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/qraphql');
  }, [user, loading]);
  return <>Welcome page works!</>;
};
