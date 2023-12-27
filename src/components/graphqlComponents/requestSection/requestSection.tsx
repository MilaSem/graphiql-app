import React from 'react';
import { type FC } from 'react';

import './requestSection.scss';
import { InputApiUrl } from '../inputApiUrl/inputApiUrl';
import { RequestBody } from '../requestBody/requestBody';
import { RequestOptions } from '../requestOptions/requestOptions';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export const RequestSection: FC = () => {
  return (
    <>
      <Box className="request-section">
        <h3>Request</h3>
        <InputApiUrl />
        <RequestBody />
        <Divider />
        <RequestOptions />
      </Box>
    </>
  );
};
