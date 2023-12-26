import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RequestHeaders } from './requestHeaders';

describe('RequestHeaders component', () => {
  it('renders RequestHeaders component correctly', () => {
    render(<RequestHeaders />);
    const input = screen.getByText(/headers \(JSON\)/i);
    expect(input).toBeInTheDocument();
  });
});
