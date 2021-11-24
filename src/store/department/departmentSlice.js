import { createSlice } from '@reduxjs/toolkit';
import { departmentNamespace } from './departmentActionTypes';
import {
  createDepartment,
  getAllDepartments,
  deleteDepartment,
  updateDepartment,
} from './departmentAsyncActions';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

const departmentSlice = createSlice({
  name: departmentNamespace,
  initialState,
  reducers: {},
  extraReducers: builder => {
    // get
    builder.addCase(getAllDepartments.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(getAllDepartments.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllDepartments.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });

    // Create
    builder.addCase(createDepartment.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(createDepartment.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(createDepartment.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });

    // Edit
    builder.addCase(updateDepartment.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(updateDepartment.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.data.findIndex(data => data.id === action.payload.id);
      state.data[index] = {
        ...state.data[index],
        ...action.payload,
      };
    });
    builder.addCase(updateDepartment.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });

    // Delete
    builder.addCase(deleteDepartment.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(deleteDepartment.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.data.findIndex(({ id }) => id === action.payload.id);
      state.data.splice(index, 1);
    });
    builder.addCase(deleteDepartment.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });
  },
});

export default departmentSlice.reducer;
