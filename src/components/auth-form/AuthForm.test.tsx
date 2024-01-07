import '@testing-library/jest-dom';
import { screen, fireEvent, act } from '@testing-library/react';
import { AuthForm } from './AuthForm';
import * as firebase from '../../firebase';
import React from 'react';
import { renderWithProvider } from '../../tests/funcs/renderWithProvider';

describe('AuthForm component:', () => {
  it('Renders login form', async () => {
    renderWithProvider(<AuthForm />);
    expect(await screen.findByRole('button')).toBeInTheDocument();
    expect(await screen.findAllByRole('textbox')).toHaveLength(2);
  });
  it('Check error message', async () => {
    renderWithProvider(<AuthForm />);
    const button = await screen.findByRole('button');
    await act(async () => {
      fireEvent.click(button);
    });
    expect(await screen.findByText(/enter your email/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/password must be at least 8 characters/i),
    ).toBeInTheDocument();
  });
  it('Check calling logIn', async () => {
    const spy = jest.spyOn(firebase, 'logIn');
    renderWithProvider(<AuthForm />);
    const inputs = await screen.findAllByRole('textbox');
    const button = await screen.findByRole('button');
    await act(async () => {
      fireEvent.input(inputs[0], { target: { value: 'free2@pol.zek' } });
      fireEvent.input(inputs[1], { target: { value: '222aaaA/' } });
      fireEvent.click(button);
    });
    expect(spy).toHaveBeenCalled();
  });
});
