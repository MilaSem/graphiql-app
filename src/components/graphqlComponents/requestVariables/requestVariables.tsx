import React, { useState, type FC, useContext } from 'react';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setVariables } from '../../../store/graphQl/graphQl.slice';
import { LangContext } from '../../../locale/langContext';
import { AlertMessage } from '../../alertMessage/alertMessage';

export const RequestVariables: FC = () => {
  const { dictionary } = useContext(LangContext);
  const variables = useAppSelector((state) => state.graphQl.variables);
  const dispatch = useAppDispatch();
  const [err, setErr] = useState('');

  const showError = (message: string): void => {
    setErr(message);
  };

  const closeError = (): void => {
    setErr('');
  };

  const getVariables = (value: string): void => {
    if (!value) return;
    try {
      JSON.parse(value);
      dispatch(setVariables(value));
      setErr('');
    } catch (error) {
      dispatch(setVariables(''));
      showError(
        `${
          dictionary.playground.variables
        } ${dictionary.errors.error.toLowerCase()}: ${
          dictionary.playground.wrongJSON
        }`,
      );
    }
  };

  return (
    <>
      <div className="request-variables">
        <CodeMirrorEditor
          onFocus={closeError}
          value={variables}
          handleEditorValue={getVariables}
          height={'calc(25vh - 48px)'}
          editable={true}
          lang="json"
          placeholder={dictionary.playground.variablesPlaceholder}
        />
      </div>
      <AlertMessage message={err} type="error" onClose={closeError} />
    </>
  );
};
