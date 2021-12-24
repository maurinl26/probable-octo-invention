import * as React from 'react';
import { Grid, Typography, Paper } from "@mui/material";
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
        <Paper elevation={6} sx={{ height: '50vh', minWidth: 200}}>
          <PieChart />
        </Paper>
      </Grid>

      <Grid item>
        <Paper elevation={6} sx={{ height: '50vh', minWidth: 200 }}>
          <GroupedBarChart />
        </Paper>
      </Grid>

    </Grid>
  );
}

const PieChart = () => {
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
      layout={{ autosize:true, title: 'Favourite Colours In A Class' }}
      useResizeHandler
    />
  )
}

const GroupedBarChart = () => {
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
      layout={{ autosize:true, title: 'Electronics Prices 2016/2017' }}
      useResizeHandler
    />
  )
}
