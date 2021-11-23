import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@material-ui/core';

import Page from '../../components/page';
import { getDepartments } from '../../../services/departmentService';

const DashboardDefaultContent = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments().then();
  }, []);

  const fetchDepartments = async () => {
    const { data } = await getDepartments();
    console.log(data);
    setDepartments(data);
  };

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={'sm'}>
        <Typography variant="h4" color="textPrimary">
          Dashboard
        </Typography>
        <Box my={5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" color="textPrimary">
                    Departments
                  </Typography>
                  {/* <Chart
                    options={getChartStyling(theme)}
                    series={departments}
                    type="bar"
                    height={'100%'}
                  /> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default DashboardDefaultContent;

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100%',
  },
}));

const getChartStyling = theme => ({
  chart: {
    background: theme.palette.background.paper,
    toolbar: {
      show: false,
    },
  },
  colors: ['#13affe', '#fbab49'],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: theme.palette.divider,
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    show: true,
    labels: {
      colors: theme.palette.text.secondary,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  theme: {
    mode: theme.palette.type,
  },
  tooltip: {
    theme: theme.palette.type,
  },
  xaxis: {
    axisBorder: {
      show: true,
      color: theme.palette.divider,
    },
    axisTicks: {
      show: true,
      color: theme.palette.divider,
    },
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: {
      style: {
        colors: theme.palette.text.secondary,
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: theme.palette.divider,
    },
    axisTicks: {
      show: true,
      color: theme.palette.divider,
    },
    labels: {
      style: {
        colors: theme.palette.text.secondary,
      },
    },
  },
});
