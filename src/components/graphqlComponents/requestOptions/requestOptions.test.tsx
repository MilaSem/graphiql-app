import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { RequestOptions } from './requestOptions';
import { renderWithProvider } from '../../../tests/funcs/renderWithProvider';

describe('RequestOptions component', () => {
  it('renders RequestOptions component correctly', () => {
    renderWithProvider(<RequestOptions />);

    const headersButton = screen.getByText(/headers/i);
    const variablesButton = screen.getByText(/variables/i);

    expect(headersButton).toBeInTheDocument();
    expect(variablesButton).toBeInTheDocument();
  });

  test('toggles between Headers and Variables correctly', () => {
    renderWithProvider(<RequestOptions />);

    const expandButton = screen.getByLabelText('expand-editors');

    const headersButton = screen.getByText(/headers/i);
    const variablesButton = screen.getByText(/variables/i);
    fireEvent.click(expandButton);

    fireEvent.click(variablesButton);
    expect(screen.getByText(/variables \(json\)/i)).toBeInTheDocument();

    fireEvent.click(headersButton);
    expect(screen.getByText(/headers \(json\)/i)).toBeInTheDocument();
  });

  test('expands and collapses editors correctly', () => {
    renderWithProvider(<RequestOptions />);

    const expandButton = screen.getByLabelText('expand-editors');
    fireEvent.click(expandButton);

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();

    fireEvent.click(expandButton);
    expect(form).not.toBeInTheDocument();
  });
});
