import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RequestVariables } from './requestVariables';

describe('RequestHeaders component', () => {
  it('renders RequestHeaders component correctly', () => {
    render(<RequestVariables />);
    const input = screen.getByText(/variables \(JSON\)/i);
    expect(input).toBeInTheDocument();
  });
});
