import React, { useState, type FC, useEffect } from 'react';
import CodeMirror, { type ReactCodeMirrorProps } from '@uiw/react-codemirror';
import useMediaQuery from '@mui/material/useMediaQuery';

import './codeMirrorEditor.scss';

interface CodeMirrorEditorProps extends ReactCodeMirrorProps {
  handleEditorValue?: (v: string) => void
  getValue?: () => void
}

export const CodeMirrorEditor: FC<CodeMirrorEditorProps> = ({
  handleEditorValue,
  value = '',
  ...props
}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [val, setValue] = useState(value);
  const handleValue = (v: string): void => {
    setValue(v);
  };

  const handleBlur = (): void => {
    if (!handleEditorValue) return;
    handleEditorValue(val);
  };

  useEffect(() => {}, [value]);
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
