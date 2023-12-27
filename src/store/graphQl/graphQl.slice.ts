import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  apiUrl: '',
  response: '',
  headers: '',
  variables: '',
  request: '',
};

// todo: implement this functions and replace to UTILS
const prettifyGraphQl = (val: string): string => {
  return val.trim();
};

const prettifyJson = (val: string): string => {
  return val.trim();
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
      state.request = prettifyGraphQl(state.request);
      state.response = prettifyJson(state.response);
      state.headers = prettifyJson(state.headers);
      state.variables = prettifyJson(state.variables);
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
} = graphQlSlice.actions;
export const graphQlReduser = graphQlSlice.reducer;
