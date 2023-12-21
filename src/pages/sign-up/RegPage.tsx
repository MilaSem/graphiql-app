import { useEffect, type FC } from 'react';
import { RegForm } from '../../components/reg-form/RegForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const RegPage: FC = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/playground');
  }, [user, loading]);

  return <>{!user && <RegForm />}</>;
};
