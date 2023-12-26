import React, { useState, type FC } from 'react';
import './requestHeaders.scss';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';

export const RequestHeaders: FC = () => {
  const [headersValue, setHeadersValue] = useState({});

  const getHeaders = (value: string): void => {
    if (!value) return;
    try {
      const headers = JSON.parse(value);
      setHeadersValue(headers);
      console.log(headers, headersValue);
      // todo: implement saving to redux
    } catch (err) {
      // todo: implement with snackbar
      console.log('wrong json', err.message);
    }
  };
  return (
    <>
      <div className="request-headers">
        <CodeMirrorEditor
          handleEditorValue={getHeaders}
          height={'calc(25vh - 48px)'}
          editable={true}
          lang="json"
          placeholder={'headers (JSON)'}
        />
      </div>
    </>
  );
};
