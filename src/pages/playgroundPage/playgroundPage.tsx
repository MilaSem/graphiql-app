import React, { useEffect } from 'react';
import { type FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import useMediaQuery from '@mui/material/useMediaQuery';

import './playgroundPage.scss';
import { DocsSection } from '../../components/docsSection/docsSection';

export const PlaygroundPage: FC = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
  }, [user]);

  return (
    <>
      <div className="playground-page">
        <DocsSection />
        <CodeMirror
          minWidth="400px"
          minHeight="100px"
          theme={prefersDarkMode ? 'dark' : 'light'}
          role="textbox"
          aria-multiline
          style={{ textAlign: 'left' }}
          tabIndex={2}
          placeholder={'implement your code'}
        />
      </div>
    </>
  );
};
