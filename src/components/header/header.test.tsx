import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Header } from './header';
import { BrowserRouter } from 'react-router-dom';

describe('Header component:', () => {
  it('renders header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  it('check animation of sticky header', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
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
