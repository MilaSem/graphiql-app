import { type FC, useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserInfo } from '../userInfo/userInfo';
import './header.scss';
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { Lang, Router } from '../../model/enums';
import { LangContext } from '../../locale/langContext';

export const Header: FC = () => {
  const [clasName, setClassName] = useState('header');
  const { language, dictionary, setLanguage } = useContext(LangContext);

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

  const changeLang = (): void => {
    if (language === Lang.en) {
      setLanguage(Lang.ru);
    } else {
      setLanguage(Lang.en);
    }
  };

  return (
    <>
      <header className={clasName}>
        <Box
          className="wrapper"
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <nav className="header-nav">
            <NavLink
              to={Router.welcome}
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              {dictionary.header.welcome}
            </NavLink>
            <NavLink
              to={Router.graphQl}
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
            >
              {dictionary.header.playground}
            </NavLink>
          </nav>

          <Stack
            direction="row"
            spacing={2}
            className="user-container"
            flexWrap={'wrap'}
          >
            <Button
              variant="text"
              size="small"
              startIcon={<LanguageRoundedIcon />}
              onClick={changeLang}
            >
              {dictionary.lang}
            </Button>
            <UserInfo />
          </Stack>
        </Box>
      </header>
    </>
  );
};
