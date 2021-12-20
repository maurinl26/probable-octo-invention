import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.modules.css';


export default function Layout() {
    return (
        <div className={styles.layout}>
            <div className={styles.nav}>
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
  
        <div className={styles.outlet}>
          <h1>Connection + Search bar </h1>
          <Outlet />
        </div>
      </div>
    );
  }
  