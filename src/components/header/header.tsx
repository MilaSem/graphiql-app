import { type FC } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import React from 'react';
import { UserInfo } from '../userInfo/userInfo';

export const Header: FC = () => {
  return (
    <>
      <header className="header">
        <Link to={'/'}>Welcome</Link>
        <Link to={'/qraphql'}>Playground</Link>
        <UserInfo />
      </header>
    </>
  );
};
