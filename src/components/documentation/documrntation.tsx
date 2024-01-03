import React from 'react';
import { type FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import './documentation.scss';

const Documentation: FC = () => {
  const docs = useAppSelector((state) => state.graphQl.schema);
  return <div className="documentation">{docs}</div>;
};

export default Documentation;
