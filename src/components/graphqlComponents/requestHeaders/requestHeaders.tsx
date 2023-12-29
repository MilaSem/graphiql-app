import React, { useState, type FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  setHeaders,
  setArrHeaders,
} from '../../../store/graphQl/graphQl.slice';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';

export const RequestHeaders: FC = () => {
  const headers = useAppSelector((state) => state.graphQl.headers);
  const arrHeaders = useAppSelector((state) => state.graphQl.arrHeaders);
  const dispatch = useAppDispatch();
  const [err, SetErr] = useState(false);

  const getHeaders = (value: string): void => {
    if (!value) return;
    try {
      const headersJson = JSON.parse(value);
      const arr: string[][] = Object.entries(headersJson);
      dispatch(setArrHeaders(arrHeaders.concat(arr)));
      dispatch(setHeaders(value));
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
