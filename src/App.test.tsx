import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App component:', () => {
  it('Renders the main page', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
