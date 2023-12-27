import React, { useState, type FC } from 'react';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { setHeaders } from '../../../store/graphQl/graphQl.slice';

export const RequestHeaders: FC = () => {
  const headers = useAppSelector((state) => state.graphQl.headers);
  const dispatch = useAppDispatch();
  const [err, SetErr] = useState(false);

  const getHeaders = (value: string): void => {
    if (!value) return;
    try {
      const headersJson = JSON.parse(value);
      dispatch(setHeaders(value));
      console.log(headers, headersJson);
      SetErr(false);
    } catch (error) {
      // todo: implement with snackbar
      SetErr(true);
      console.log('wrong json', error.message);
    }
  };

  return (
    <>
      <div className="request-headers">
        <CodeMirrorEditor
          value={!err && headers ? headers : ''}
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
