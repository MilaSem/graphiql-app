import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { RequestBody } from './requestBody';
import { renderWithProvider } from '../../../tests/funcs/renderWithProvider';

describe('RequestBody component', () => {
  it('renders RequestBody component correctly', () => {
    renderWithProvider(<RequestBody />);

    const form = screen.getByText(/graphql/i);
    expect(form).toBeInTheDocument();
  });
});
