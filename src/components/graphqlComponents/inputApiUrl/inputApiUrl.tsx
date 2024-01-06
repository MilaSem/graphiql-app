import React, { type FocusEvent, type FC, useContext, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import './inputApiUrl.scss';
import { useAppDispatch } from '../../../store/hooks';
import { setApiUrl, setSchema } from '../../../store/graphQl/graphQl.slice';
import { requestIntSchema } from '../../../api/api';
import { printSchema } from 'graphql';
import { LangContext } from '../../../locale/langContext';

export const InputApiUrl: FC = () => {
  const { dictionary } = useContext(LangContext);
  const dispatch = useAppDispatch();

  const api = localStorage.getItem('api');
  if (api) dispatch(setApiUrl(api));

  const handleChange = async (
    e: FocusEvent<HTMLInputElement>,
  ): Promise<void> => {
    const val = (e.target as HTMLInputElement)?.value;
    dispatch(setApiUrl(val));
    localStorage.setItem('api', val);
    const schema = await requestIntSchema(`https://${val}`);
    dispatch(setSchema(printSchema(schema)));
  };

  useEffect(() => {
    if (api) {
      void requestIntSchema(`https://${api}`).then((data) =>
        dispatch(setSchema(printSchema(data))),
      );
    }
  }, []);

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
            onBlur={handleChange}
            defaultValue={api ?? ''}
          />
        </FormControl>
      </div>
    </>
  );
};
