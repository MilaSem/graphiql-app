/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { type ReactElement } from 'react';

export const renderWithProvider = (ui: ReactElement) => {
  return render(
    <Provider store={store}>
      <Router>{ui}</Router>
    </Provider>,
  );
};
