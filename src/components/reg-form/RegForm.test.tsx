import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { RegForm } from './RegForm';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from '../../firebase';
import React from 'react';

describe('AuthForm component:', () => {
  it('Renders login form', async () => {
    render(
      <BrowserRouter>
        <RegForm />
      </BrowserRouter>,
    );
    expect(await screen.findAllByRole('textbox')).toHaveLength(5);
    expect(await screen.findByRole('button')).toBeDefined();
  });
  it('check registartion', async () => {
    const spy = jest.spyOn(firebase, 'registerUser');
    render(
      <BrowserRouter>
        <RegForm />
      </BrowserRouter>,
    );
    const inputs = await screen.findAllByRole('textbox');
    await act(async () => {
      fireEvent.input(inputs[0], { target: { value: 'Acabacab' } });
      fireEvent.input(inputs[1], { target: { value: 'Free5@pol.zek' } });
      fireEvent.input(inputs[2], { target: { value: 'Free5@pol.zek' } });
      fireEvent.input(inputs[3], { target: { value: '555aaaA/' } });
      fireEvent.input(inputs[4], { target: { value: '555aaaA/' } });
    });
    const button = await screen.findByRole('button');
    await act(async () => {
      fireEvent.click(button);
    });
    expect(spy).toHaveBeenCalled();
  });
});
