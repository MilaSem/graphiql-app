import { useEffect, type FC } from 'react';
import { AuthForm } from '../../components/auth-form/AuthForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Router } from '../../model/enums';

export const AuthPage: FC = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) navigate(Router.graphQl);
  }, [user, loading]);

  return <>{!user && <AuthForm />}</>;
};
