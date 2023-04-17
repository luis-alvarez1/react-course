import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              end
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              to='products'
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
