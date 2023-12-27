import React, { useState, type FC } from 'react';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';

export const RequestVariables: FC = () => {
  const [variablesValue, setVariablesValue] = useState({});

  const getHeaders = (value: string): void => {
    if (!value) return;
    try {
      const variables = JSON.parse(value);
      setVariablesValue(variables);
      console.log(variables, variablesValue);
      // todo: implement saving to redux
    } catch (err) {
      // todo: implement with snackbar
      console.log('wrong json', err.message);
    }
  };
  return (
    <>
      <div className="request-variables">
        <CodeMirrorEditor
          handleEditorValue={getHeaders}
          height={'calc(25vh - 48px)'}
          editable={true}
          lang="json"
          placeholder={'variables (JSON)'}
        />
      </div>
    </>
  );
};
