import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductActionTypes } from './productActionTypes';
import {
  getProducts,
  postProduct,
  putProduct,
  deleteProductById,
} from '../../services/productService';

export const createProduct = createAsyncThunk(
  ProductActionTypes.POST_PRODUCT,
  async data => {
    return (await postProduct(data)).data;
  },
);

export const getAllProducts = createAsyncThunk(
  ProductActionTypes.FETCH_PRODUCT,
  async () => {
    return (await getProducts()).data;
  },
);

export const updateProduct = createAsyncThunk(
  ProductActionTypes.UPDATE_PRODUCT,
  async data => {
    return (await putProduct(data)).data;
  },
);

export const deleteProduct = createAsyncThunk(
  ProductActionTypes.DELETE_PRODUCT,
  async ({ id }) => {
    return (await deleteProductById(id)).data;
  },
);
