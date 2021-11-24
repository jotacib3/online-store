import React, { useEffect, useCallback } from 'react';
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
import {
  createDepartment,
  getAllDepartments,
  deleteDepartment,
  updateDepartment,
} from '../../../../../store/department/departmentAsyncActions';

const DepartmentListView = () => {
  const classes = useStyles();

  const departments = useSelector(state => state.departments.data);
  const loading = useSelector(state => state.departments.loading);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(getAllDepartments());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const handleAddRow = newData => {
    dispatch(createDepartment(newData));
  };

  const handleEditRow = editData => {
    dispatch(updateDepartment(editData));
  };

  const handleDeleteRow = dataId => {
    dispatch(deleteDepartment(dataId));
  };

  return (
    <Page className={classes.root} title="Departments List">
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results
            data={departments.map(o => ({ ...o }))}
            addRow={handleAddRow}
            editRow={handleEditRow}
            deleteRow={handleDeleteRow}
          />
        </Box>
        <Backdrop className={classes.backdrop} open={loading}>
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
