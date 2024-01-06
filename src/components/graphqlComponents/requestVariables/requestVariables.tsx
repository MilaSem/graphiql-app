import React, { useState, type FC, useContext } from 'react';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  resetErrors,
  setErrors,
  setVariables,
} from '../../../store/graphQl/graphQl.slice';
import { LangContext } from '../../../locale/langContext';

export const RequestVariables: FC = () => {
  const { dictionary } = useContext(LangContext);
  const variables = useAppSelector((state) => state.graphQl.variables);
  const dispatch = useAppDispatch();
  const [, SetErr] = useState(false);

  const getVariables = (value: string): void => {
    if (!value) return;
    try {
      // todo: implemend transformation
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const variablesJSON = JSON.parse(value);
      dispatch(setVariables(value));
      dispatch(resetErrors(null));
      SetErr(false);
    } catch (error) {
      // todo: implement with snackbar
      dispatch(setErrors({ key: 'variables', error: error.message }));
      SetErr(true);
      dispatch(setVariables(''));
      console.log('wrong json', error.message);
    }
  };

  return (
    <>
      <div className="request-variables">
        <CodeMirrorEditor
          value={variables}
          handleEditorValue={getVariables}
          height={'calc(25vh - 48px)'}
          editable={true}
          lang="json"
          placeholder={dictionary.playground.variablesPlaceholder}
        />
      </div>
    </>
  );
};
