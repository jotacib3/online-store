import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryActionTypes } from './categoryActionTypes';
import {
  getCategories,
  postCategory,
  putCategory,
  deleteCategoryById,
} from '../../services/categoryService';

export const createCategory = createAsyncThunk(
  CategoryActionTypes.POST_CATEGORY,
  async data => {
    return (await postCategory(data)).data;
  },
);

export const getAllCategories = createAsyncThunk(
  CategoryActionTypes.FETCH_CATEGORY,
  async () => {
    return (await getCategories()).data;
  },
);

export const updateCategory = createAsyncThunk(
  CategoryActionTypes.UPDATE_CATEGORY,
  async data => {
    return (await putCategory(data)).data;
  },
);

export const deleteCategory = createAsyncThunk(
  CategoryActionTypes.DELETE_CATEGORY,
  async ({ id }) => {
    return (await deleteCategoryById(id)).data;
  },
);
