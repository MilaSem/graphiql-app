import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RequestBody } from './requestBody';

describe('RequestBody component', () => {
  it('renders RequestBody component correctly', () => {
    render(<RequestBody />);

    const form = screen.getByText(/graphql/i);
    expect(form).toBeInTheDocument();
  });
});
