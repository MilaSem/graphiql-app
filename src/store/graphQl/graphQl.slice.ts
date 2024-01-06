/* eslint-disable @typescript-eslint/no-use-before-define */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { prettifyGraphQL, prettifyJSON } from '../../utils/prettify';

interface RequestErrors {
  key: 'request' | 'headers' | 'variables'
  error: string
}

export const initialState = {
  apiUrl: '',
  headers: '',
  variables: '',
  request: '',
  response: '',
  arrHeaders: [['Content-type', 'application/json']],
  schema: '',
  errors: {
    request: '',
    headers: '',
    variables: '',
  },
  isPrettty: false,
};

const graphQlSlice = createSlice({
  name: 'graphQl',
  initialState,
  reducers: {
    setApiUrl(state, action: PayloadAction<string>) {
      state.apiUrl = `https://${action.payload}`;
    },
    setRequest(state, action: PayloadAction<string>) {
      state.request = action.payload;
    },
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
    setResponse(state, action: PayloadAction<string>) {
      state.response = action.payload;
    },
    prettifyCode(state) {
      const request = prettifyGraphQL(state.request);
      const headers = prettifyJSON(state.headers);
      const variables = prettifyJSON(state.variables);

      state.request = request;
      state.headers = headers;
      state.variables = variables;
    },
    setArrHeaders(state, action: PayloadAction<string[][]>) {
      state.arrHeaders = action.payload;
    },
    setSchema(state, action: PayloadAction<string>) {
      state.schema = action.payload;
    },
    setErrors(state, action: PayloadAction<RequestErrors>) {
      state.errors[action.payload.key] = action.payload.error;
    },
    resetErrors(state, action: PayloadAction<RequestErrors | null>) {
      if (action.payload) {
        state.errors[action.payload.key] = '';
      } else {
        for (const key in state.errors) {
          state.errors[key] = '';
        }
      }
    },
  },
});

export const {
  setApiUrl,
  setRequest,
  setHeaders,
  setVariables,
  setResponse,
  prettifyCode,
  setArrHeaders,
  setSchema,
  setErrors,
  resetErrors,
} = graphQlSlice.actions;
export const graphQlReduser = graphQlSlice.reducer;
