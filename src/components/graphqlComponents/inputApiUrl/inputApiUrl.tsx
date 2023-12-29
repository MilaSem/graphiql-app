import React, { type ChangeEvent, type FC } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import './inputApiUrl.scss';
import { useAppDispatch } from '../../../store/hooks';
import { setApiUrl } from '../../../store/graphQl/graphQl.slice';

export const InputApiUrl: FC = () => {
  const dispatch = useAppDispatch();

  const api = localStorage.getItem('api');
  if (api) dispatch(setApiUrl(api));

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = (e.target as HTMLInputElement)?.value;
    dispatch(setApiUrl(val));
    localStorage.setItem('api', val);
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
            label="Enter valid API"
            size="small"
            onChange={handleChange}
            defaultValue={api || ''}
          />
        </FormControl>
      </div>
    </>
  );
};
