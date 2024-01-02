import React, { type FocusEvent, type FC, useContext } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import './inputApiUrl.scss';
import { useAppDispatch } from '../../../store/hooks';
import { setApiUrl } from '../../../store/graphQl/graphQl.slice';
import { LangContext } from '../../../locale/langContext';

export const InputApiUrl: FC = () => {
  const { dictionary } = useContext(LangContext);
  const dispatch = useAppDispatch();

  const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
    const val = (e.target as HTMLInputElement)?.value;
    dispatch(setApiUrl(val));
  };

  return (
    <>
      <div className="input-url-section">
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel htmlFor="api-input">
            {dictionary.playground.inputApiLabel}
          </InputLabel>
          <OutlinedInput
            id="api-input"
            startAdornment={
              <InputAdornment position="start">https://</InputAdornment>
            }
            label={dictionary.playground.inputApiLabel}
            size="small"
            onBlur={handleBlur}
          />
        </FormControl>
      </div>
    </>
  );
};
