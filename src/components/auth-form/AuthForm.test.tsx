import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { AuthForm } from './AuthForm';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from '../../firebase';

describe('AuthForm component:', () => {
  it('Renders login form', async () => {
    render(
      <BrowserRouter>
        <AuthForm />
      </BrowserRouter>,
    );
    expect(await screen.findByRole('button')).toBeInTheDocument();
    expect(await screen.findAllByRole('textbox')).toHaveLength(2);
  });
  it('Check error message', async () => {
    render(
      <BrowserRouter>
        <AuthForm />
      </BrowserRouter>,
    );
    const button = await screen.findByRole('button');
    await act(async () => {
      fireEvent.click(button);
    });
    expect(await screen.findByText(/minimum 8 symbols/)).toBeInTheDocument();
    expect(
      await screen.findByText(/password must be at least 8 characters/),
    ).toBeInTheDocument();
  });
  it('Check calling logIn', async () => {
    const spy = jest.spyOn(firebase, 'logIn');
    render(
      <BrowserRouter>
        <AuthForm />
      </BrowserRouter>,
    );
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
