import { styled } from "@mui/material";

const ChartWrapper = styled('div')(({ theme }) => ({
    '.x-axis line':{
        stroke: 'transparent',
      },
      
      '.x-axis path':{
        stroke: 'transparent',
      },
      '.x-axis text':{
        fill: 'darkGrey',
      },
    
  }));

export default ChartWrapper;