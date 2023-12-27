import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { InputApiUrl } from './inputApiUrl';
import { renderWithProvider } from '../../../tests/funcs/renderWithProvider';

describe('InputApiUrl component', () => {
  it('renders input and button', () => {
    renderWithProvider(<InputApiUrl />);

    const inputElement = screen.getByLabelText(/Enter valid API/i);

    expect(inputElement).toBeInTheDocument();
  });

  it('handles API change on blur', () => {
    renderWithProvider(<InputApiUrl />);

    const inputElement = screen.getByLabelText(/Enter valid API/i);

    fireEvent.blur(inputElement, {
      target: { value: 'https://example.com/api' },
    });
  });
});
