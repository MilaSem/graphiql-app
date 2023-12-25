import React, { useEffect } from 'react';
import { type FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

import './playgroundSection.scss';
import { RequestSection } from '../requestSection/requestSection';
import { ResponseSection } from '../responseSection/responseSection';

export const PlaygroundSection: FC = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
  }, [user]);

  return (
    <>
      <div className="playground-section">
        <RequestSection />
        <ResponseSection />
      </div>
    </>
  );
};
