import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Toolbar, IconButton, Drawer, Typography, List, ListItem, Divider, ListItemIcon } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import BarChartIcon from '@mui/icons-material/BarChart';
import MapIcon from '@mui/icons-material/Map';
import TableChartIcon from '@mui/icons-material/TableChart';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material';


// Page Layout
export default function Layout() {
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sample PWA
            </Typography>
          </Toolbar>
        </AppBar>
  
        <Drawer variant='permanent' open={open}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
          
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <Link to="/home">Home</Link>
            </ListItem>
            <ListItem>
              <ListItemIcon><BarChartIcon /></ListItemIcon>
              <Link to="/charts">Charts</Link>
            </ListItem>
            <ListItem>
              <ListItemIcon><TableChartIcon /></ListItemIcon>
              <Link to="/tables">Table</Link>
            </ListItem>
            <ListItem>
              <ListItemIcon><MapIcon /></ListItemIcon>
              <Link to="/map">Map</Link>
            </ListItem>
          </List>
        </Drawer>
            
        <Outlet />
      </div>
    );
  }