import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles } from '@material-ui/core/styles';
import {
  Backdrop,
  CircularProgress,
  Container,
  makeStyles,
  Box,
} from '@material-ui/core';

import Header from './Header';
import Results from './Results';
import Page from '../../../../components/page';
import { getAllDepartments } from '../../../../../store/department/departmentAsyncActions';
import {
  createCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
} from '../../../../../store/category/categoryAsyncActions';

const DepartmentListView = () => {
  const classes = useStyles();
  const [columns, setColumns] = useState([]);

  const departments = useSelector(state => state.departments.data);
  const categories = useSelector(state => state.categories.data);
  const loadingCategories = useSelector(state => state.categories.loading);
  const loadingDepartments = useSelector(state => state.departments.loading);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(getAllDepartments());
    dispatch(getAllCategories());
  }, [dispatch]);

  const createColumns = useCallback(() => {
    const lookup = {};
    for (const department of departments) {
      lookup[department.id] = department.name;
    }
    setColumns([
      { title: 'Id', field: 'id', hidden: true },
      { title: 'Name', field: 'name' },
      {
        title: 'Department',
        field: 'departmentsId',
        lookup,
      },
    ]);
  }, [departments]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  useEffect(() => {
    createColumns();
  }, [createColumns]);

  const handleAddRow = newData => {
    dispatch(createCategory(newData));
  };

  const handleEditRow = editData => {
    dispatch(updateCategory(editData));
  };

  const handleDeleteRow = dataId => {
    dispatch(deleteCategory(dataId));
  };

  return (
    <Page className={classes.root} title="Categories List">
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results
            data={categories.map(o => ({ ...o }))}
            columns={columns.map(o => ({ ...o }))}
            addRow={handleAddRow}
            editRow={handleEditRow}
            deleteRow={handleDeleteRow}
          />
        </Box>
        <Backdrop
          className={classes.backdrop}
          open={loadingCategories && loadingDepartments}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    </Page>
  );
};

const useStyles = makeStyles(theme =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    root: {
      paddingTop: theme.spacing(2),
      paddingBottom: 100,
    },
  }),
);

export default DepartmentListView;
