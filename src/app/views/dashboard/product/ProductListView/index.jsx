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
import { getAllCategories } from '../../../../../store/category/categoryAsyncActions';
import {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} from '../../../../../store/product/productAsyncActions';

const DepartmentListView = () => {
  const classes = useStyles();
  const [columns, setColumns] = useState([]);

  const departments = useSelector(state => state.departments.data);
  const categories = useSelector(state => state.categories.data);
  const products = useSelector(state => state.products.data);

  const loadingCategories = useSelector(state => state.categories.loading);
  const loadingDepartments = useSelector(state => state.departments.loading);
  const loadingProducts = useSelector(state => state.products.loading);

  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(getAllDepartments());
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, [dispatch]);

  const createColumns = useCallback(() => {
    const lookupDepartment = {};
    for (const department of departments) {
      lookupDepartment[department.id] = department.name;
    }
    const lookupCategories = {};
    for (const category of categories) {
      lookupCategories[category.id] = category.name;
    }
    setColumns([
      { title: 'Id', field: 'id', hidden: true },
      { title: 'Name', field: 'name' },
      {
        title: 'Department',
        field: 'departmentsId',
        lookup: lookupDepartment,
      },
      {
        title: 'Categories',
        field: 'categoriesId',
        lookup: lookupCategories,
      },
    ]);
  }, [departments, categories]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  useEffect(() => {
    createColumns();
  }, [createColumns]);

  const handleAddRow = newData => {
    dispatch(createProduct(newData));
  };

  const handleEditRow = editData => {
    dispatch(updateProduct(editData));
  };

  const handleDeleteRow = dataId => {
    dispatch(deleteProduct(dataId));
  };

  return (
    <Page className={classes.root} title="Categories List">
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results
            data={products.map(o => ({ ...o }))}
            columns={columns.map(o => ({ ...o }))}
            addRow={handleAddRow}
            editRow={handleEditRow}
            deleteRow={handleDeleteRow}
          />
        </Box>
        <Backdrop
          className={classes.backdrop}
          open={loadingCategories && loadingDepartments && loadingProducts}
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
