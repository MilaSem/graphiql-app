import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { renderWithProvider } from '../../tests/funcs/renderWithProvider';
import { PlaygroundPage } from './playgroundPage';

jest.mock('react-firebase-hooks/auth');

describe('PlaygroundPage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('redirects to sign-in page if user is not authenticated', async () => {
    (useAuthState as jest.Mock).mockReturnValue([null, false, null]);

    renderWithProvider(<PlaygroundPage />);
  });

  it('renders the PlaygroundPage component if user is authenticated', () => {
    const mockUser = { uid: 'testUid' };
    (useAuthState as jest.Mock).mockReturnValueOnce([mockUser, false, null]);

    renderWithProvider(<PlaygroundPage />);

    expect(screen.getByText(/request/i)).toBeInTheDocument();
  });
});
