import * as React from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import { ResponsivePie } from '@nivo/pie';

export default function Charts() {

  const data = [
    {
      "id": "php",
      "label": "php",
      "value": 171,
      "color": "hsl(139, 70%, 50%)"
    },
    {
      "id": "ruby",
      "label": "ruby",
      "value": 461,
      "color": "hsl(286, 70%, 50%)"
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 193,
      "color": "hsl(139, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 7,
      "color": "hsl(217, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 394,
      "color": "hsl(314, 70%, 50%)"
    }
  ]

  const CustomResponsivePie = ({ data }) => (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'ruby'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'c'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'go'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'python'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'scala'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'lisp'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'elixir'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'javascript'
          },
          id: 'lines'
        }
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  )

  return (
    <Grid container spacing={2}>
      <Grid item sx={12}>
        <Typography variant='h5'>
          Quelques graphes
        </Typography>
      </Grid>

      <Grid item sx={6}>
        <Paper elevation={3} sx={{height: '50vh'}}>
          <CustomResponsivePie data={data} />
        </Paper>
      </Grid>
      
    </Grid>
  );
}