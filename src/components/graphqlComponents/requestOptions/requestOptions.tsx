import React, { useState } from 'react';
import { type FC } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import './requestOptions.scss';
import { RequestHeaders } from '../requestHeaders/requestHeaders';
import { RequestVariables } from '../requestVariables/requestVariables';

export const RequestOptions: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const [isHeaders, setHeaders] = useState(false);

  const expandEditors = (): void => {
    setVisible(!isVisible);
  };

  const toggleHeaders = (): void => {
    setHeaders(!isHeaders);
  };

  return (
    <>
      <div className="request-body">
        <div className="request-body-buttons">
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            size="small"
          >
            <Button
              onClick={toggleHeaders}
              color={isHeaders && isVisible ? 'secondary' : 'primary'}
            >
              Headers
            </Button>
            <Button
              onClick={toggleHeaders}
              color={!isHeaders && isVisible ? 'secondary' : 'primary'}
            >
              Variables
            </Button>
          </ButtonGroup>
          <IconButton onClick={expandEditors}>
            {isVisible
              ? (
              <ExpandLessRoundedIcon color="primary" />
              )
              : (
              <ExpandMoreRoundedIcon />
              )}
          </IconButton>
        </div>
        {isVisible && (
          <div className="request-body-editors">
            {isHeaders ? <RequestHeaders /> : <RequestVariables />}
          </div>
        )}
      </div>
    </>
  );
};
