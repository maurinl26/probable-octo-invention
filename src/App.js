import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, Typography, List, ListItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Home from './components/Home';
import Charts from './components/Charts';
import Tables from './components/Tables';
import Map from './components/Map';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="charts" element={<Charts />}></Route>
          <Route path="tables" element={<Tables />}></Route>
          <Route path="map" element={<Map />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  const open = true;

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
        <Divider />
        <List>
          <ListItem>
            <Link to="/home">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/charts">Charts</Link>
          </ListItem>
          <ListItem>
            <Link to="/tables">Table</Link>
          </ListItem>
          <ListItem>
            <Link to="/map">Map</Link>
          </ListItem>
        </List>
      </Drawer>
          
      <Outlet />
    </div>
  );
}

