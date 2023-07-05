import React from 'react';
import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';

export const EditEventPage = () => {
  const { event } = useRouteLoaderData('event-detail');
  return (
    <>
      <EventForm event={event} />
    </>
  );
};
