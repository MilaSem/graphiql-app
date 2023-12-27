import React, { useState, type FC } from 'react';
import CodeMirror, { type ReactCodeMirrorProps } from '@uiw/react-codemirror';
import useMediaQuery from '@mui/material/useMediaQuery';

import './codeMirrorEditor.scss';

interface CodeMirrorEditorProps extends ReactCodeMirrorProps {
  handleEditorValue?: (v: string) => void
  getValue?: () => void
}

export const CodeMirrorEditor: FC<CodeMirrorEditorProps> = ({
  handleEditorValue,
  ...props
}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [value, setValue] = useState('');
  const handleValue = (val: string): void => {
    setValue(val);
  };

  const handleBlur = (): void => {
    if (!handleEditorValue) return;
    handleEditorValue(value);
  };
  return (
    <>
      <div className="request-headers">
        <CodeMirror
          {...props}
          value={value}
          width="100%"
          theme={prefersDarkMode ? 'dark' : 'light'}
          onChange={handleValue}
          onBlur={handleBlur}
          tabIndex={2}
          role="form"
          className="codemirror"
        />
      </div>
    </>
  );
};
