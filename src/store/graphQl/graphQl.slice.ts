import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  uid: '',
  apiUrl: '',
  response: '',
  headers: '',
  variables: '',
  request: '',
  arrHeaders: [['Content-type', 'application/json']],
  schema: '',
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
      state.request = prettifyGraphQl(state.request);
      state.response = prettifyJson(state.response);
      state.headers = prettifyJson(state.headers);
      state.variables = prettifyJson(state.variables);
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
