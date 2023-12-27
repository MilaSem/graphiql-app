import React, { useState, type FC } from 'react';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setVariables } from '../../../store/graphQl/graphQl.slice';

export const RequestVariables: FC = () => {
  const variables = useAppSelector((state) => state.graphQl.variables);
  const dispatch = useAppDispatch();
  const [err, SetErr] = useState(false);

  const getVariables = (value: string): void => {
    if (!value) return;
    try {
      // todo: implemend transformation
      const variablesJSON = JSON.parse(value);
      console.log(variablesJSON);
      dispatch(setVariables(value));
      SetErr(false);
    } catch (error) {
      // todo: implement with snackbar
      SetErr(true);
      console.log('wrong json', error.message);
    }
  };
  return (
    <>
      <div className="request-variables">
        <CodeMirrorEditor
          value={!err && variables ? variables : ''}
          handleEditorValue={getVariables}
          height={'calc(25vh - 48px)'}
          editable={true}
          lang="json"
          placeholder={'variables (JSON)'}
        />
      </div>
    </>
  );
};
