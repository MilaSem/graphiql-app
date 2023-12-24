import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { DocsSection } from './docsSection';
import '@testing-library/jest-dom';

// Mocking the lazy-loaded component
jest.mock('../documentation/documrntation', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Documentation Component</div>,
  };
});

describe('DocsSection component', () => {
  test('renders IconButton and does not render Docs initially', () => {
    render(<DocsSection />);

    const iconButton = screen.getByLabelText('docs');
    const docsContainer = screen.queryByText('Mocked Documentation Component');

    expect(iconButton).toBeInTheDocument();
    expect(docsContainer).toBeNull();
  });

  test('renders Docs when IconButton is clicked', async () => {
    render(<DocsSection />);

    const iconButton = screen.getByLabelText('docs');
    fireEvent.click(iconButton);

    // Wait for lazy-loaded component to render
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const docsContainer = screen.getByText('Mocked Documentation Component');

    expect(docsContainer).toBeInTheDocument();
  });

  test('hides Docs when IconButton is clicked again', async () => {
    render(<DocsSection />);

    const iconButton = screen.getByLabelText('docs');
    fireEvent.click(iconButton);

    // Wait for lazy-loaded component to render
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const docsContainer = screen.getByText('Mocked Documentation Component');
    expect(docsContainer).toBeInTheDocument();

    // Click again to hide Docs
    fireEvent.click(iconButton);

    // Wait for lazy-loaded component to unmount
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const hiddenDocsContainer = screen.queryByText(
      'Mocked Documentation Component',
    );
    expect(hiddenDocsContainer).toBeNull();
  });
});
