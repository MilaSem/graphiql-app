import React from 'react';
import { type FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

import './requestBody.scss';

export const RequestBody: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <>
      <div className="request-section">
        <Button size="small" color="secondary" variant="outlined">
          Prettify code
        </Button>
        {/* Editor */}

        <CodeMirror
          // minWidth="400px"
          minHeight="100px"
          theme={prefersDarkMode ? 'dark' : 'light'}
          role="textbox"
          aria-multiline
          style={{ textAlign: 'left', border: 'solid 2px #eee' }}
          tabIndex={2}
          placeholder={'implement your code'}
        />
      </div>
    </>
  );
};
