import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent, act } from '@testing-library/react';
import { InputApiUrl } from './inputApiUrl';
import { renderWithProvider } from '../../../tests/funcs/renderWithProvider';
import * as hooks from '../../../store/hooks';
import fetch from 'jest-fetch-mock';

describe('InputApiUrl component', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('renders input and button', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    renderWithProvider(<InputApiUrl />);
    const inputElement = screen.getByLabelText(/Enter valid API/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('handles API change on change', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    const spy = jest.spyOn(hooks, 'useAppDispatch');
    renderWithProvider(<InputApiUrl />);
    const inputElement = screen.getByLabelText(/Enter valid API/i);
    await act(async () => {
      fireEvent.change(inputElement, {
        target: { value: 'https://example.com/api' },
      });
    });
    expect(spy).toHaveBeenCalled();
  });
  it('check value at local storage', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    const spy = jest.spyOn(hooks, 'useAppDispatch');
    localStorage.setItem('api', 'https://rickandmortyapi.com/graphql');
    renderWithProvider(<InputApiUrl />);
    expect(spy).toHaveBeenCalled();
  });
});
