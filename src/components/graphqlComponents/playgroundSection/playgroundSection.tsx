import React from 'react';
import { type FC } from 'react';

import './playgroundSection.scss';
import { RequestSection } from '../requestSection/requestSection';
import { ResponseSection } from '../responseSection/responseSection';

export const PlaygroundSection: FC = () => {
  return (
    <>
      <div className="playground-section">
        <RequestSection />
        <ResponseSection />
      </div>
    </>
  );
};
