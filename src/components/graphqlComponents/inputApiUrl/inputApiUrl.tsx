import React, { type FocusEvent, type FC } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import './inputApiUrl.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setApiUrl } from '../../../store/graphQl.slice';

export const InputApiUrl: FC = () => {
  const apiUrl = useAppSelector((state) => state.graphQl.apiUrl);
  const dispatch = useAppDispatch();

  const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
    const val = (e.target as HTMLInputElement)?.value;
    dispatch(setApiUrl(val));
  };
  return (
    <>
      <div className="input-url-section">
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel htmlFor="api-input">Enter valid API</InputLabel>
          <OutlinedInput
            id="api-input"
            startAdornment={
              <InputAdornment position="start">https://</InputAdornment>
            }
            value={apiUrl || ''}
            label="Enter valid API"
            size="small"
            onBlur={handleBlur}
          />
        </FormControl>
      </div>
    </>
  );
};
