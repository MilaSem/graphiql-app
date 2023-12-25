import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputApiUrl } from './inputApiUrl';

describe('InputApiUrl component', () => {
  it('renders input and button', () => {
    render(<InputApiUrl />);

    const inputElement = screen.getByLabelText(/Enter valid API/i);
    const buttonElement = screen.getByRole('button');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('handles API change on blur', () => {
    render(<InputApiUrl />);

    const inputElement = screen.getByLabelText(/Enter valid API/i);

    fireEvent.blur(inputElement, {
      target: { value: 'https://example.com/api' },
    });
  });
});
