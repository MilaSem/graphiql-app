import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from './router';

describe('Router tests:', () => {
  it('renders WelcomePage for /', () => {
    const memoryRouter = createMemoryRouter(routerConfig, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={memoryRouter} />);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  it('renders PlaygroundPage for /playground', () => {
    const memoryRouter = createMemoryRouter(routerConfig, {
      initialEntries: ['/playground'],
    });
    render(<RouterProvider router={memoryRouter} />);
    expect(screen.getByText(/Playground/i)).toBeInTheDocument();
  });

  it('renders NotFoundPage for unknown route', () => {
    const memoryRouter = createMemoryRouter(routerConfig, {
      initialEntries: ['/badRoute'],
    });
    render(<RouterProvider router={memoryRouter} />);
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
