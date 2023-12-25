import React, { type FocusEvent, type FC } from 'react';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import './inputApiUrl.scss';

export const InputApiUrl: FC = () => {
  const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
    const val = (e.target as HTMLInputElement)?.value;
    // todo: implement logic - saving to redux with preffix
    console.log('API changed', val);
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
            onBlur={handleBlur}
          />
        </FormControl>
        <Button variant="contained" size="small" sx={{ mt: 2 }}>
          <PlayArrowRoundedIcon />
        </Button>
      </div>
    </>
  );
};
