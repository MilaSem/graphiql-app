import { type FC } from 'react';
import './footer.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <>
      <footer className="footer">
        <p className="footer-text">
          2024 Created by:
          <Link
            className="footer-link"
            to={'https://github.com/AnnaFeona'}
            target="_blank"
          >
            {' '}
            AnnaFeona
          </Link>
          ,
          <Link
            className="footer-link"
            to={'https://github.com/Smetan-dot'}
            target="_blank"
          >
            {' '}
            Smetan-dot
          </Link>{' '}
          and
          <Link
            className="footer-link"
            to={'https://github.com/MilaSem'}
            target="_blank"
          >
            {' '}
            MilaSem
          </Link>
        </p>
        <Link to={'https://rs.school/react/'} target="_blank">
          <img
            className="footer-image"
            src="https://rs.school/images/rs_school_js.svg"
          ></img>
        </Link>
      </footer>
    </>
  );
};
