import React from 'react';
import { type FC } from 'react';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import Box from '@mui/material/Box';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Button from '@mui/material/Button';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { prettifyCode, setRequest } from '../../../store/graphQl/graphQl.slice';
import './requestBody.scss';

export const RequestBody: FC = () => {
  const request = useAppSelector((state) => state.graphQl.request);
  const dispatch = useAppDispatch();

  const onPretttifyClick = (): void => {
    dispatch(prettifyCode());
  };

  const getGrqphQlRequest = (value: string): void => {
    // transform value here

    dispatch(setRequest(value));
    console.log('graphQl', value);
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
          <Button variant="contained" size="small">
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
          placeholder={'implement your code here (graphQl)'}
        />
      </Box>
    </>
  );
};
