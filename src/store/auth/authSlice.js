import { createSlice } from '@reduxjs/toolkit';

const authNamespace = 'auth';

export const initialState = {
  accessToken: '',
  claims: null,
};

export const authSlice = createSlice({
  name: authNamespace,
  initialState,
  reducers: {
    saveTokenAction: (state, action) => {
      state.accessToken = action.payload;
    },
    saveClaimsAction: (state, action) => {
      state.claims = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const { saveClaimsAction, saveTokenAction } = authSlice.actions;

export default authSlice.reducer;
