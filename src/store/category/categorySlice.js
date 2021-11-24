import { createSlice } from '@reduxjs/toolkit';
import { categoryNamespace } from './categoryActionTypes';
import {
  createCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
} from './categoryAsyncActions';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

const categorySlice = createSlice({
  name: categoryNamespace,
  initialState,
  reducers: {},
  extraReducers: builder => {
    // get
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });

    // Create
    builder.addCase(createCategory.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(createCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });

    // Edit
    builder.addCase(updateCategory.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.data.findIndex(data => data.id === action.payload.id);
      state.data[index] = {
        ...state.data[index],
        ...action.payload,
      };
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });

    // Delete
    builder.addCase(deleteCategory.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.data.findIndex(({ id }) => id === action.payload.id);
      state.data.splice(index, 1);
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });
  },
});

export default categorySlice.reducer;
