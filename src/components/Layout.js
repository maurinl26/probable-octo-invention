import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function Layout() {
    return (
        <div>
            <div>
            <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/charts">Charts</Link>
            </li>
            <li>
              <Link to="/tables">Table</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>
          </nav>
        </div>
  
        <div>
          <h1>Connection + Search bar </h1>
          <Outlet />
        </div>
      </div>
    );
  }
  