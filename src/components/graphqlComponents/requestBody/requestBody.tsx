import React, { useContext } from 'react';
import { type FC } from 'react';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import Box from '@mui/material/Box';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Button from '@mui/material/Button';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  prettifyCode,
  setRequest,
  setResponse,
} from '../../../store/graphQl/graphQl.slice';
import { requestData } from '../../../api/api';
import './requestBody.scss';
import { LangContext } from '../../../locale/langContext';

export const RequestBody: FC = () => {
  const { dictionary } = useContext(LangContext);
  const request = useAppSelector((state) => state.graphQl.request);
  const api = useAppSelector((state) => state.graphQl.apiUrl);
  const arrHeaders = useAppSelector((state) => state.graphQl.arrHeaders);
  const dispatch = useAppDispatch();

  const onPretttifyClick = (): void => {
    dispatch(prettifyCode());
  };

  const getGrqphQlRequest = (value: string): void => {
    dispatch(setRequest(value));
  };

  const handleClick = async (): Promise<void> => {
    if (arrHeaders[0][0] === 'wrong json') {
      dispatch(
        setResponse(JSON.stringify(Object.fromEntries(arrHeaders), null, 2)),
      );
    } else {
      await requestData(api, request, arrHeaders).then((data) =>
        dispatch(setResponse(JSON.stringify(data, null, 2))),
      );
    }
  };

  return (
    <>
      <Box className="request-body">
        <Box className="request-body-buttons">
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            onClick={onPretttifyClick}
          >
            <AutoFixHighRoundedIcon />
          </Button>
          <Button variant="contained" size="small" onClick={handleClick}>
            <PlayArrowRoundedIcon />
          </Button>
        </Box>

        <CodeMirrorEditor
          handleEditorValue={getGrqphQlRequest}
          value={request}
          height={'40vh'}
          editable={true}
          lang="graphql"
          role="textbox"
          placeholder={dictionary.playground.graphQlRequestPlaceholder}
        />
      </Box>
    </>
  );
};
