import React, { useState } from 'react';
import { type FC } from 'react';

import './responseSection.scss';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';

export const ResponseSection: FC = () => {
  const [response] = useState('');
  return (
    <>
      <div className="response-section">
        <h3>Response</h3>
        <CodeMirrorEditor value={response} editable={false} height="60vh" />
      </div>
    </>
  );
};
