import { createSlice } from '@reduxjs/toolkit';
import { productNamespace } from './productActionTypes';
import {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} from './productAsyncActions';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

const productSlice = createSlice({
  name: productNamespace,
  initialState,
  reducers: {},
  extraReducers: builder => {
    // get
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });

    // Create
    builder.addCase(createProduct.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });

    // Edit
    builder.addCase(updateProduct.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.data.findIndex(data => data.id === action.payload.id);
      state.data[index] = {
        ...state.data[index],
        ...action.payload,
      };
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });

    // Delete
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.data.findIndex(({ id }) => id === action.payload.id);
      state.data.splice(index, 1);
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = 'Something wrong happened';
      console.log(action.payload);
    });
  },
});

export default productSlice.reducer;
