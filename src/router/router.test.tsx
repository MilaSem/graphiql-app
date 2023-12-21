import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from './router';
import { useAuthState } from 'react-firebase-hooks/auth';

jest.mock('react-firebase-hooks/auth');

jest.mock('../firebase', () => ({
  auth: {
    onAuthStateChanged: jest.fn(),
    signOut: jest.fn(),
  },
}));

describe('Router tests:', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders WelcomePage for /', async () => {
    const mockUser = { uid: 'testUid' };
    (useAuthState as jest.Mock).mockReturnValueOnce([mockUser, false, null]);

    const memoryRouter = createMemoryRouter(routerConfig, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={memoryRouter} />);
    expect(screen.getByText(/Welcome page/i)).toBeInTheDocument();
  });

  it('renders PlaygroundPage for /graphql', async () => {
    const mockUser = { uid: 'testUid' };
    (useAuthState as jest.Mock).mockReturnValueOnce([mockUser, false, null]);
    const memoryRouter = createMemoryRouter(routerConfig, {
      initialEntries: ['/qraphql'],
    });
    await waitFor(() => {
      render(<RouterProvider router={memoryRouter} />);
    });
    expect(screen.getByText(/Playground/i)).toBeInTheDocument();
  });

  it('renders NotFoundPage for unknown route', () => {
    const mockUser = { uid: 'testUid' };
    (useAuthState as jest.Mock).mockReturnValueOnce([mockUser, false, null]);
    const memoryRouter = createMemoryRouter(routerConfig, {
      initialEntries: ['/badRoute'],
    });
    render(<RouterProvider router={memoryRouter} />);
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
