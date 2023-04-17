import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainNavigation } from '../components/MainNavigation';

export const MainContent = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
