import React, { useState, type FC, useContext } from 'react';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setVariables } from '../../../store/graphQl/graphQl.slice';
import { LangContext } from '../../../locale/langContext';

export const RequestVariables: FC = () => {
  const { dictionary } = useContext(LangContext);
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
          value={!err && variables ? variables.display : ''}
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
