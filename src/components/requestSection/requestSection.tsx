import React from 'react';
import { type FC } from 'react';

import './requestSection.scss';
import { InputApiUrl } from '../inputApiUrl/inputApiUrl';
import { RequestOptions } from '../requestOptions/requestOptions';
import { RequestBody } from '../requestBody/requestBody';

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
