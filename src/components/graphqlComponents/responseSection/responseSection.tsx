import React, { useContext } from 'react';
import { type FC } from 'react';

import './responseSection.scss';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import { useAppSelector } from '../../../store/hooks';
import { LangContext } from '../../../locale/langContext';

export const ResponseSection: FC = () => {
  const { dictionary } = useContext(LangContext);

  const response = useAppSelector((state) => state.graphQl.response);
  return (
    <>
      <div className="response-section">
        <h3>{dictionary.playground.response}</h3>
        <CodeMirrorEditor
          value={response}
          editable={false}
          height="62vh"
          placeholder={'{}'}
        />
      </div>
    </>
  );
};
