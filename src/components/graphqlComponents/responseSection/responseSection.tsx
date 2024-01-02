import { type FC } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { CodeMirrorEditor } from '../../codemirrorEditot/codemirrorEditor';
import './responseSection.scss';

export const ResponseSection: FC = () => {
  const response = useAppSelector((state) => state.graphQl.response);
  return (
    <>
      <div className="response-section">
        <h3>Response</h3>
        <CodeMirrorEditor
          value={response}
          editable={false}
          height="62vh"
          placeholder={'{}'}
          readOnly
        />
      </div>
    </>
  );
};
