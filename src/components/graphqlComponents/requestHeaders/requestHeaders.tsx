import React, { type FC, useContext, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  setHeaders,
  setArrHeaders,
} from '../../../store/graphQl/graphQl.slice';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import { LangContext } from '../../../locale/langContext';
import { AlertMessage } from '../../alertMessage/alertMessage';

export const RequestHeaders: FC = () => {
  const { dictionary } = useContext(LangContext);
  const headers = useAppSelector((state) => state.graphQl.headers);
  const [err, setErr] = useState('');

  const dispatch = useAppDispatch();

  const showError = (message: string): void => {
    setErr(message);
  };

  const closeError = (): void => {
    setErr('');
  };

  const getHeaders = (value: string): void => {
    if (!value) return;
    try {
      const headersJson = JSON.parse(value);
      const arr: string[][] = Object.entries(headersJson);
      dispatch(setHeaders(value));

      dispatch(
        setArrHeaders([['Content-type', 'application/json']].concat(arr)),
      );
    } catch (error) {
      dispatch(setArrHeaders([['wrong json', error.message]]));
      showError(
        `${
          dictionary.playground.headers
        } ${dictionary.errors.error.toLowerCase()}: ${
          dictionary.playground.wrongJSON
        }`,
      );
    }
  };

  return (
    <>
      <div className="request-headers">
        <CodeMirrorEditor
          onFocus={closeError}
          value={headers}
          handleEditorValue={getHeaders}
          height={'calc(25vh - 48px)'}
          editable={true}
          lang="json"
          placeholder={dictionary.playground.headersPlaceholder}
        />
      </div>
      <AlertMessage message={err} type="error" onClose={closeError} />
    </>
  );
};
