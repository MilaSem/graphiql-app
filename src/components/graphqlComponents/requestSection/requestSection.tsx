import React from 'react';
import { type FC } from 'react';

import './requestSection.scss';
import { InputApiUrl } from '../inputApiUrl/inputApiUrl';
import { RequestBody } from '../requestBody/requestBody';
import { RequestOptions } from '../requestOptions/requestOptions';

export const RequestSection: FC = () => {
  return (
    <>
      <div className="request-section">
        <h3>Request</h3>
        <InputApiUrl />
        <RequestBody />
        <RequestOptions />
      </div>
    </>
  );
};
