import React, { useEffect } from 'react';
import { type FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';

import './playgroundPage.scss';

export const PlaygroundPage: FC = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
  }, [user]);

  return (
    <CodeMirror
      width="400px"
      height="500px"
      theme="dark"
      role="textbox"
      aria-multiline
      style={{ textAlign: 'left' }}
      tabIndex={2}
      placeholder={'implement your code'}
    />
  );
};
