import { type FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { UserInfo } from '../userInfo/userInfo';
import './header.scss';
import React from 'react';

export const Header: FC = () => {
  const [clasName, setClassName] = useState('header');

  const handleScroll = (): void => {
    if (window.scrollY > 0) setClassName('header sticky');
    if (window.scrollY === 0) setClassName('header');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <header className={clasName}>
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
