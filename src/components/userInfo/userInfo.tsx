import React from 'react';
import { type FC, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, logout } from '../../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

export const UserInfo: FC = () => {
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
          <h3> User {name} logged</h3>
          <button onClick={handleLogOut}>log-out</button>
        </>
        )
        : (
        <button>
          <Link to={'/sign-in'}>SignIn</Link>
        </button>
        )}
    </>
  );
};