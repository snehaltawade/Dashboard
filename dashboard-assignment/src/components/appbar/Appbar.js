import { Avatar, IconButton, Toolbar, Tooltip } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profilePicture from '../../assets/profile.jpg'
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Search from "../search/Search";

const AppBarWrapper = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  
const drawerWidth = 240;

const AppBar=({open,toggleDrawer})=>{
    return(
        <>
        <AppBarWrapper position="absolute" open={open} className='dashboard-component'>
           <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              justifyContent:'flex-end',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
         
           
            <Search/> 
            <IconButton color="inherit" style={{padding:'25px'}}>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon style={{ color: 'black' }} />
              </Badge>
            </IconButton>

            <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings" style={{display:'flex'}}> */}
            <Avatar alt="Remy Sharp" src={profilePicture} />
              <IconButton sx={{ p: 0 }}>
                <ArrowDropDownIcon/>
              </IconButton>
            {/* </Tooltip> */}
           
          </Box>

          </Toolbar>
          </AppBarWrapper>
        </>
    )
}

export default AppBar;