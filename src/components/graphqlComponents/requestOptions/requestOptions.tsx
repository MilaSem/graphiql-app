import React, { useState } from 'react';
import { type FC } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import './requestOptions.scss';
import { RequestHeaders } from '../requestHeaders/requestHeaders';
import { RequestVariables } from '../requestVariables/requestVariables';

export const RequestOptions: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const [isHeaders, setHeaders] = useState(true);

  const expandEditors = (): void => {
    setVisible(!isVisible);
  };

  const toggleHeaders = (
    _event: React.MouseEvent<HTMLElement>,
    val: boolean,
  ): void => {
    setHeaders(val);
  };

  return (
    <>
      <div className="request-options">
        <div className="request-options-buttons">
          <ToggleButtonGroup
            value={isHeaders}
            aria-label="request-options-button-group"
            size="small"
            color="secondary"
            exclusive
            onChange={toggleHeaders}
          >
            <ToggleButton value={true}>Headers</ToggleButton>
            <ToggleButton value={false}>Variables</ToggleButton>
          </ToggleButtonGroup>
          <IconButton
            onClick={expandEditors}
            aria-label={!isVisible ? 'expand-editors' : 'collapse-editors'}
          >
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
