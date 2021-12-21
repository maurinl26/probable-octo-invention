import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
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




