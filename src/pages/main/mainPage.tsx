import React from 'react';
import { type FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, logout } from '../../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { Loader } from '../../components/loader/Loader';

export const MainPage: FC = () => {
  const [name, setName] = useState('');
  const [user, loading] = useAuthState(auth);
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
    if (loading) return;
    if (!user) {
      navigate('/');
      return;
    }
    void fetchUserName();
  }, [user, loading]);

  return (
    <>
      {loading
        ? (
        <Loader />
        )
        : (
        <>
          <h3> User {name} logged</h3>
          <button onClick={handleLogOut}>log-out</button>
        </>
        )}
    </>
  );
};
