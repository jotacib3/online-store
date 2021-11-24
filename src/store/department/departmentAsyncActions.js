import { createAsyncThunk } from '@reduxjs/toolkit';
import { DepartmentActionTypes } from './departmentActionTypes';
import {
  getDepartments,
  postDepartment,
  putDepartment,
  deleteDepartmentById,
} from '../../services/departmentService';

export const createDepartment = createAsyncThunk(
  DepartmentActionTypes.POST_DEPARTMENT,
  async data => {
    return (await postDepartment(data)).data;
  },
);

export const getAllDepartments = createAsyncThunk(
  DepartmentActionTypes.FETCH_DEPARTMENT,
  async () => {
    return (await getDepartments()).data;
  },
);

export const updateDepartment = createAsyncThunk(
  DepartmentActionTypes.UPDATE_DEPARTMENT,
  async data => {
    return (await putDepartment(data)).data;
  },
);

export const deleteDepartment = createAsyncThunk(
  DepartmentActionTypes.DELETE_DEPARTMENT,
  async ({ id }) => {
    return (await deleteDepartmentById(id)).data;
  },
);
