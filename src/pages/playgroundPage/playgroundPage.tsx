import React, { useEffect } from 'react';
import { type FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { DocsSection } from '../../components/docsSection/docsSection';
import { PlaygroundSection } from '../../components/graphqlComponents/playgroundSection/playgroundSection';
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
    <>
      <div className="playground-page">
        <DocsSection />
        <PlaygroundSection />
      </div>
    </>
  );
};
