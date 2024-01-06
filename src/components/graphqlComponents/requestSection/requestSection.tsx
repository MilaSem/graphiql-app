import React, { useContext } from 'react';
import { type FC } from 'react';
import './requestSection.scss';
import { InputApiUrl } from '../inputApiUrl/inputApiUrl';
import { RequestBody } from '../requestBody/requestBody';
import { RequestOptions } from '../requestOptions/requestOptions';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { LangContext } from '../../../locale/langContext';

export const RequestSection: FC = () => {
  const { dictionary } = useContext(LangContext);
  return (
    <>
      <Box className="request-section">
        <h3>{dictionary.playground.request}</h3>
        <InputApiUrl />
        <RequestBody />
        <Divider />
        <RequestOptions />
      </Box>
    </>
  );
};
