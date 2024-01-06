import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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
    expect(screen.getByText(/graphiql/i)).toBeInTheDocument();
  });
});
