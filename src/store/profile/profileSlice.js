import { createSlice } from '@reduxjs/toolkit';

import { profileNamespace } from './profileActionTypes';
import { getProfileAction, putProfileAction } from './profileAsyncActions';

export const initialState = {
  profile: {},
  loading: false,
  error: '',
};

export const profileSlice = createSlice({
  name: profileNamespace,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProfileAction.fulfilled, (state, action) => {
      state.profile = action.payload;
    });

    builder.addCase(putProfileAction.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(putProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    });
    builder.addCase(putProfileAction.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });
  },
});

export default profileSlice.reducer;
