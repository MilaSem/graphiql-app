import React, { type FC, useContext } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  setHeaders,
  setArrHeaders,
  setErrors,
  resetErrors,
} from '../../../store/graphQl/graphQl.slice';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import { LangContext } from '../../../locale/langContext';

export const RequestHeaders: FC = () => {
  const { dictionary } = useContext(LangContext);
  const headers = useAppSelector((state) => state.graphQl.headers);
  const err = useAppSelector((state) => state.graphQl.errors.headers);

  const dispatch = useAppDispatch();

  const getHeaders = (value: string): void => {
    if (!value) return;
    try {
      const headersJson = JSON.parse(value);
      const arr: string[][] = Object.entries(headersJson);
      dispatch(setHeaders(value));

      dispatch(
        setArrHeaders([['Content-type', 'application/json']].concat(arr)),
      );
      dispatch(resetErrors(null));
    } catch (error) {
      dispatch(setArrHeaders([['wrong json', error.message]]));
      dispatch(setErrors({ key: 'headers', error: error.message }));
      console.log(error.message, err);
    }
  };

  return (
    <>
      <div className="request-headers">
        <CodeMirrorEditor
          value={headers}
          handleEditorValue={getHeaders}
          height={'calc(25vh - 48px)'}
          editable={true}
          lang="json"
          placeholder={dictionary.playground.headersPlaceholder}
        />
      </div>
    </>
  );
};
