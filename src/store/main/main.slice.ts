import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  uid: '',
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUid(state, action: PayloadAction<string>) {
      state.uid = action.payload;
    },
  },
});

export const { setUid } = mainSlice.actions;
export const mainReduser = mainSlice.reducer;
