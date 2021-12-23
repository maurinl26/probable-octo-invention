import * as React from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Charts from './components/Charts';
import Tables from './components/Tables';
import Map from './components/Map';
import PageLayout from './components/PageLayout';

export default function App() {

  return (
    <div>
      <PageLayout>
        <AuthenticatedTemplate>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Home />}></Route>
              <Route path="charts" element={<Charts />}></Route>
              <Route path="tables" element={<Tables />}></Route>
              <Route path="map" element={<Map />}></Route>
            </Route>
          </Routes>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <h5>Vous n'êtes pas authentifié</h5>
        </UnauthenticatedTemplate>

      </PageLayout>
    </div>
  );
}




