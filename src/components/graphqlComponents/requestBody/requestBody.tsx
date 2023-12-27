import React, { useState } from 'react';
import { type FC } from 'react';
import Button from '@mui/material/Button';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';

import './requestBody.scss';

export const RequestBody: FC = () => {
  const [grqphqlValue, setGraphqlValue] = useState('');
  const getGrqphQlRequest = (value: string): void => {
    // transform value here

    setGraphqlValue(value);
    console.log('graphQl', value);
  };

  return (
    <>
      <div className="request-body">
        <Button size="small" color="secondary" variant="outlined">
          <AutoFixHighRoundedIcon />
        </Button>

        <CodeMirrorEditor
          handleEditorValue={getGrqphQlRequest}
          value={grqphqlValue}
          height={'40vh'}
          editable={true}
          lang="graphql"
          role="textbox"
          placeholder={'implement your code here (graphQl)'}
        />
      </div>
    </>
  );
};
