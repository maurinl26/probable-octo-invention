import styles from './App.modules.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Charts from './components/Charts';
import Tables from './components/Tables';
import Map from './components/Map';
import Layout from './components/Layout';

export default function App() {
  return (
    <div className={styles.App}>
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
