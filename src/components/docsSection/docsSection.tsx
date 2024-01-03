import React, { Suspense, lazy, useState } from 'react';
import { type FC } from 'react';
import IconButton from '@mui/material/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';
import './docsSection.scss';
import { Loader } from '../loader/Loader';

const Docs = lazy(async () => import('../documentation/documrntation'));

export const DocsSection: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const handleClick = (): void => {
    setVisible(!isVisible);
  };

  return (
    <>
      <aside className={isVisible ? 'aside visible' : 'aside'}>
        <IconButton
          aria-label="docs"
          color={isVisible ? 'primary' : 'default'}
          onClick={handleClick}
        >
          <DescriptionIcon />
        </IconButton>
        <div className="docs">
          {isVisible && (
            <div>
              <Suspense fallback={<Loader />}>
                <Docs />
              </Suspense>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
