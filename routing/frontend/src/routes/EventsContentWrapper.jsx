import React from 'react';
import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

export const EventsContentWrapper = () => {
  return (
    <>
      <EventsNavigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};
