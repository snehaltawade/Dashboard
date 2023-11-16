import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

import { mainListItems, secondaryListItems } from './listItems';
import logo from '../assets/assiduus-logo.png'

import Copyright from './Copyright';
import StyledDrawer from './StyledDrawer';
import AccountWatchList from './watchList/AccountWatchList';
import Barchart from './charts/Barchart';
import AppBar from './appbar/Appbar';
import LineGraph from './charts/LineGraph';
import InvoicesTab from './invoices/InvoicesOwed';
import StackedBarChart from './charts/StackedBarChart';
import AccountCheck from './accountCheck/AccountCheck';
import TotalCashFlow from './totalCashFlow/TotalCashFlow';



const StyledDashboard = styled('div')(
({theme}) => ({
    '.dashboard-component':{
        backgroundColor: 'white',
    }
}),
)
  

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

React.useEffect(()=>{
  console.log("dashboard")
},[])
  return (
    <StyledDashboard>
      <Box sx={{ display: 'flex' }}>
        <AppBar open={open}/>
        <StyledDrawer variant="permanent" open={open} toggleDrawer={toggleDrawer}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <img src={logo} width="150" height="49" style={{margin:'auto'}}></img>
          </Toolbar>
        
          <List component="nav">
            {mainListItems}
          </List>
        </StyledDrawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '250px'
                  }}
                >
                <AccountCheck/>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={6} lg={6}>
                <Paper  
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '250px',
                    height: '250px'
                  }}
                >
                  <InvoicesTab/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column',minHeight: '250px',}}>
                   <TotalCashFlow/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                  <AccountWatchList/>
                </Paper>
              </Grid>
            </Grid>
            
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </StyledDashboard>
  );
}