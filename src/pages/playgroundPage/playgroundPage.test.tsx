import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PlaygroundPage } from './playgroundPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-firebase-hooks/auth');

describe('PlaygroundPage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('redirects to sign-in page if user is not authenticated', async () => {
    (useAuthState as jest.Mock).mockReturnValue([null, false, null]);

    render(
      <Router>
        <PlaygroundPage />
      </Router>,
    );

    // todo: fix error with typeerror
  });

  it('renders the PlaygroundPage component if user is authenticated', () => {
    const mockUser = { uid: 'testUid' };
    (useAuthState as jest.Mock).mockReturnValueOnce([mockUser, false, null]);

    render(
      <Router>
        <PlaygroundPage />
      </Router>,
    );

    expect(screen.getByText(/request/i)).toBeInTheDocument();
  });
});
