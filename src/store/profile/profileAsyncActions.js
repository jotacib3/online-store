import { createAsyncThunk } from '@reduxjs/toolkit';

import { ProfileActionTypes } from './profileActionTypes';
import { getUser, putUser } from '../../services/userService';

export const getProfileAction = createAsyncThunk(
  ProfileActionTypes.FETCH_AND_SAVE_PROFILE,
  async id => {
    return (await getUser(id)).data;
  },
);

export const putProfileAction = createAsyncThunk(
  ProfileActionTypes.UPDATE_PROFILE,
  async user => {
    return (await putUser(user)).data;
  },
);
