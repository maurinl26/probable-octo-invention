import * as React from 'react';
import { Grid, Card, Typography } from "@mui/material";
import Plot from 'react-plotly.js';

export default function Charts() {


  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      gridTemplateColumns="repeat(2, 1fr)"
      spacing={2}
    >
      <Grid item xs={12}>
        <Typography variant='h5'>
          Quelques graphes
        </Typography>
      </Grid>

      <Grid item>
        <Card elevation={3} sx={{ height: '50vh', width: '40%'}}>
          <PieChart />
        </Card>
      </Grid>

      <Grid item>
        <Card elevation={3} sx={{ height: '50vh', width:'40%' }}>
          <GroupedBarChart />
        </Card>
      </Grid>

    </Grid>
  );
}

const PieChart = (props) => {
  var data = [
    {
      values: [112, 454, 65, 544],
      labels: ["Blue", "Red", "Yellow", "Orange"],
      type: "pie",
    },
  ];

  return (
    <Plot
      data={data}
      layout={{ width: '20%', height: '20vh', title: 'Favourite Colours In A Class' }} />
  )
}

const GroupedBarChart = (props) => {
  var plot1 = {
    x: ["Microwave", "Washing Machine", "Tv", "Vacuum Cleaner", "Hair Dryer"],
    y: [4, 5, 6, 1, 4],
    name: "2016",
    type: "bar",
  };

  var plot2 = {
    x: ["Microwave", "Washing Machine", "Tv", "Vacuum Cleaner", "Hair Dryer"],
    y: [12, 3, 5, 6, 2],
    name: "2017",
    type: "bar",
  };

  var data = [plot1, plot2];
  return (
    <Plot
      data={data}
      layout={{ width: '20%', height: '20vh', title: 'Electronics Prices 2016/2017' }} />
  )
}
