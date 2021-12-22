import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Toolbar, IconButton, Typography, List, ListItem, Divider, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import BarChartIcon from '@mui/icons-material/BarChart';
import MapIcon from '@mui/icons-material/Map';
import TableChartIcon from '@mui/icons-material/TableChart';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled, useTheme } from '@mui/material';

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
  
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function ListItemLink(props) {
    const { icon, primary, to, text } = props;
    const CustomLink = (props) => <Link to={to} {...props} />;

    const SListItemText = styled(ListItemText)({
        flexDirection: 1,
        marginInline: '5px',
    });
  
    return (
      <li>
        <ListItem button component={CustomLink}>
            <ListItemIcon>{icon}</ListItemIcon>
            <SListItemText primary={primary}>{text}</SListItemText>
        </ListItem>
      </li>
    );
  }

// Page Layout
export default function Layout() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
  return (
        <Box sx={{ display: 'flex'}}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                    marginRight: '30px',
                    ...(open && { display: 'none' }),
                }}        
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sample PWA
            </Typography>
          </Toolbar>
        </AppBar>
  
            <Drawer variant='permanent' open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
            
          
          <Divider />
          <List>
            <ListItemLink icon={<HomeIcon sx={{fontSize:40}} />} to="/home" text="Home" /> 
            <ListItemLink icon={<BarChartIcon sx={{fontSize:40}}/>} to="/charts" text="Charts"/> 
            <ListItemLink icon={<TableChartIcon sx={{fontSize:40}}/>} to="/tables" text="Tables" />
            <ListItemLink icon={<MapIcon sx={{fontSize:40}}/>} to="/map" text="Map"/>        
          </List>
        </Drawer>
        
        <Box sx={{ flexGrow: 1, p: 1 }}>
            <DrawerHeader />
            <Outlet />      
        </Box>
        
  
      </Box>
    );
  }