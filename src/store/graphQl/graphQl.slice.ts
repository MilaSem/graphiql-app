import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { prettifyGraphQL, prettifyJSON } from '../../utils/prettify';

export type ErrorKeys = 'request' | 'headers' | 'variables';
export interface RequestErrors {
  key: ErrorKeys
  error: string
}

export const initialState = {
  uid: '',
  apiUrl: '',
  headers: '',
  variables: '',
  request: '',
  response: '',
  arrHeaders: [['Content-type', 'application/json']],
  schema: '',
};

const graphQlSlice = createSlice({
  name: 'graphQl',
  initialState,
  reducers: {
    setUid(state, action: PayloadAction<string>) {
      state.uid = action.payload;
    },
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
  },
});

export const {
  setUid,
  setApiUrl,
  setRequest,
  setHeaders,
  setVariables,
  setResponse,
  prettifyCode,
  setArrHeaders,
  setSchema,
} = graphQlSlice.actions;
export const graphQlReduser = graphQlSlice.reducer;
