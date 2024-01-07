import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { RequestHeaders } from './requestHeaders';
import { renderWithProvider } from '../../../tests/funcs/renderWithProvider';

describe('RequestHeaders component', () => {
  it('renders RequestHeaders component correctly', () => {
    renderWithProvider(<RequestHeaders />);
    const input = screen.getByText(/headers \(JSON\)/i);
    expect(input).toBeInTheDocument();
  });
});
