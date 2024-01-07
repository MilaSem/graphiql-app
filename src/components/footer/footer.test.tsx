import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import { BrowserRouter } from 'react-router-dom';

describe('Footer component:', () => {
  it('renders footer', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(screen.getAllByRole('link')).toHaveLength(4);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
