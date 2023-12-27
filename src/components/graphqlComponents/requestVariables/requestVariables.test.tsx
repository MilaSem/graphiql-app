import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { RequestVariables } from './requestVariables';
import { renderWithProvider } from '../../../tests/funcs/renderWithProvider';

describe('RequestHeaders component', () => {
  it('renders RequestHeaders component correctly', () => {
    renderWithProvider(<RequestVariables />);
    const input = screen.getByText(/variables \(JSON\)/i);
    expect(input).toBeInTheDocument();
  });
});
