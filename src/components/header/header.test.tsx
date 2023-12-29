import '@testing-library/jest-dom';
import { screen, fireEvent, act } from '@testing-library/react';
import { Header } from './header';
import { renderWithProvider } from '../../tests/funcs/renderWithProvider';
import React from 'react';

describe('Header component:', () => {
  it('renders header', () => {
    renderWithProvider(<Header />);
    // expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('check animation of sticky header', async () => {
    renderWithProvider(<Header />);

    await act(async () => {
      fireEvent.scroll(window, { target: { scrollY: 100 } });
    });
    expect(
      (await screen.findByRole('banner')).classList.contains('sticky'),
    ).toBeTruthy();
    await act(async () => {
      fireEvent.scroll(window, { target: { scrollY: 0 } });
    });
    expect(
      (await screen.findByRole('banner')).classList.contains('sticky'),
    ).toBeFalsy();
  });
});
