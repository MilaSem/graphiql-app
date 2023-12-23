import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import { UserInfo } from '../userInfo/userInfo';
import './header.scss';
import React from 'react';

export const Header: FC = () => {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? 'nav-item active' : 'nav-item'
            }
          >
            Welcome
          </NavLink>
          <NavLink
            to={'/qraphql'}
            className={({ isActive }) =>
              isActive ? 'nav-item active' : 'nav-item'
            }
          >
            Playground
          </NavLink>
        </nav>
        <select className="header-lang">
          <option value={'En'}>En</option>
          <option value={'Ru'}>Ru</option>
        </select>
        <div className="user-container">
          <UserInfo />
        </div>
      </header>
    </>
  );
};
